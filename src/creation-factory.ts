import { BigInt } from "@graphprotocol/graph-ts";
import {
  ApprovalForAll as ApprovalForAllEvent,
  Created as CreatedEvent,
  CreationUpdated as CreationUpdatedEvent,
  FeePercentUpdated as FeePercentUpdatedEvent,
  Minted as MintedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolFeeToUpdated as ProtocolFeeToUpdatedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
} from "../generated/CreationFactory/CreationFactory";
import { Creation, MintRecord, Minter } from "../generated/schema";

export function handleCreated(event: CreatedEvent): void {
  let creation = new Creation(event.params.creationId.toString());
  creation.creationId = event.params.creationId;
  creation.creator = event.params.creator;
  creation.space = event.params.space;
  creation.uri = event.params.uri;
  creation.price = event.params.price;
  creation.mintedAmount = BigInt.fromI32(0);
  creation.timestamp = event.block.timestamp;

  creation.save();
}

export function handleMinted(event: MintedEvent): void {
  let record = new MintRecord(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  record.creationId = event.params.creationId;
  record.minter = event.params.minter;
  record.curator = event.params.curator;
  record.amount = event.params.amount;
  record.price = event.params.price;
  record.mark = event.params.mark;
  record.timestamp = event.block.timestamp;

  const minterId =
    event.params.minter.toHexString() +
    "-" +
    event.params.creationId.toString();

  let minter = Minter.load(minterId);
  if (!minter) {
    minter = new Minter(minterId);
    minter.creationId = event.params.creationId;
    minter.minter = event.params.minter;
  }

  minter.amount = minter.amount + 1;

  minter.save();

  const creationId = event.params.creationId.toString();
  let creation = Creation.load(creationId);

  if (creation) {
    record.creation = creation.id;
    creation.mintedAmount = creation.mintedAmount.plus(record.amount);
    creation.save();
  }

  record.save();
}
