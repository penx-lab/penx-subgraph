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
  URI as URIEvent
} from "../generated/CreationFactory/CreationFactory"
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
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreated(event: CreatedEvent): void {
  let entity = new Created(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creationId = event.params.creationId
  entity.creator = event.params.creator
  entity.space = event.params.space
  entity.uri = event.params.uri
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreationUpdated(event: CreationUpdatedEvent): void {
  let entity = new CreationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creationId = event.params.creationId
  entity.creator = event.params.creator
  entity.uri = event.params.uri
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeePercentUpdated(event: FeePercentUpdatedEvent): void {
  let entity = new FeePercentUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creatorFeePercent = event.params.creatorFeePercent
  entity.curatorFeePercent = event.params.curatorFeePercent
  entity.protocolFeePercent = event.params.protocolFeePercent

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinted(event: MintedEvent): void {
  let entity = new Minted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creationId = event.params.creationId
  entity.minter = event.params.minter
  entity.curator = event.params.curator
  entity.amount = event.params.amount
  entity.price = event.params.price
  entity.mark = event.params.mark

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeToUpdated(
  event: ProtocolFeeToUpdatedEvent
): void {
  let entity = new ProtocolFeeToUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousFeeTo = event.params.previousFeeTo
  entity.newFeeTo = event.params.newFeeTo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.CreationFactory_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.CreationFactory_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
