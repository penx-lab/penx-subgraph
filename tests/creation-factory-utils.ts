import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  Created,
  CreationUpdated,
  FeePercentUpdated,
  Minted,
  OwnershipTransferred,
  ProtocolFeeToUpdated,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/CreationFactory/CreationFactory"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCreatedEvent(
  creationId: BigInt,
  creator: Address,
  space: Address,
  uri: string,
  price: BigInt
): Created {
  let createdEvent = changetype<Created>(newMockEvent())

  createdEvent.parameters = new Array()

  createdEvent.parameters.push(
    new ethereum.EventParam(
      "creationId",
      ethereum.Value.fromUnsignedBigInt(creationId)
    )
  )
  createdEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  createdEvent.parameters.push(
    new ethereum.EventParam("space", ethereum.Value.fromAddress(space))
  )
  createdEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  createdEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return createdEvent
}

export function createCreationUpdatedEvent(
  creationId: BigInt,
  creator: Address,
  uri: string,
  price: BigInt
): CreationUpdated {
  let creationUpdatedEvent = changetype<CreationUpdated>(newMockEvent())

  creationUpdatedEvent.parameters = new Array()

  creationUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "creationId",
      ethereum.Value.fromUnsignedBigInt(creationId)
    )
  )
  creationUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  creationUpdatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  creationUpdatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return creationUpdatedEvent
}

export function createFeePercentUpdatedEvent(
  creatorFeePercent: BigInt,
  curatorFeePercent: BigInt,
  protocolFeePercent: BigInt
): FeePercentUpdated {
  let feePercentUpdatedEvent = changetype<FeePercentUpdated>(newMockEvent())

  feePercentUpdatedEvent.parameters = new Array()

  feePercentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "creatorFeePercent",
      ethereum.Value.fromUnsignedBigInt(creatorFeePercent)
    )
  )
  feePercentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "curatorFeePercent",
      ethereum.Value.fromUnsignedBigInt(curatorFeePercent)
    )
  )
  feePercentUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "protocolFeePercent",
      ethereum.Value.fromUnsignedBigInt(protocolFeePercent)
    )
  )

  return feePercentUpdatedEvent
}

export function createMintedEvent(
  creationId: BigInt,
  minter: Address,
  curator: Address,
  amount: BigInt,
  price: BigInt,
  mark: string
): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "creationId",
      ethereum.Value.fromUnsignedBigInt(creationId)
    )
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("curator", ethereum.Value.fromAddress(curator))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("mark", ethereum.Value.fromString(mark))
  )

  return mintedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProtocolFeeToUpdatedEvent(
  previousFeeTo: Address,
  newFeeTo: Address
): ProtocolFeeToUpdated {
  let protocolFeeToUpdatedEvent = changetype<ProtocolFeeToUpdated>(
    newMockEvent()
  )

  protocolFeeToUpdatedEvent.parameters = new Array()

  protocolFeeToUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "previousFeeTo",
      ethereum.Value.fromAddress(previousFeeTo)
    )
  )
  protocolFeeToUpdatedEvent.parameters.push(
    new ethereum.EventParam("newFeeTo", ethereum.Value.fromAddress(newFeeTo))
  )

  return protocolFeeToUpdatedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
