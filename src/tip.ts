import { BigInt } from "@graphprotocol/graph-ts";
import { TipRequestExecuted as TipRequestExecutedEvent } from "../generated/Tip/Tip";
import { Tip, TipRecord } from "../generated/schema";

export function handleTipRequestExecuted(event: TipRequestExecutedEvent): void {
  let record = new TipRecord(event.params.requestId.toString());

  record.requestId = event.params.requestId;
  record.tipper = event.params.tipper;
  record.receiver = event.params.receiver;
  record.amount = event.params.amount;
  record.uri = event.params.uri;
  record.tipperRewardPercent = event.params.tipperRewardPercent;
  record.timestamp = event.block.timestamp;

  record.save();

  const tipId = event.params.uri.toString();
  let tip = Tip.load(tipId);

  if (!tip) {
    tip = new Tip(tipId);
    tip.uri = event.params.uri;
    tip.receiver = event.params.receiver;
    tip.totalAmount = BigInt.fromI32(0);
  }

  const reward = event.params.amount
    .times(record.tipperRewardPercent)
    .div(BigInt.fromI64(1000000000000000000));

  tip.totalAmount = tip.totalAmount.plus(event.params.amount).minus(reward);

  tip.save();
}
