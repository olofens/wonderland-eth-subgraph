// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class USTDegenboxMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("collateral", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("debt", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save USTDegenboxMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save USTDegenboxMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("USTDegenboxMetric", id.toString(), this);
    }
  }

  static load(id: string): USTDegenboxMetric | null {
    return changetype<USTDegenboxMetric | null>(
      store.get("USTDegenboxMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get collateral(): BigDecimal {
    let value = this.get("collateral");
    return value!.toBigDecimal();
  }

  set collateral(value: BigDecimal) {
    this.set("collateral", Value.fromBigDecimal(value));
  }

  get debt(): BigDecimal {
    let value = this.get("debt");
    return value!.toBigDecimal();
  }

  set debt(value: BigDecimal) {
    this.set("debt", Value.fromBigDecimal(value));
  }
}

export class Cvxcrvtricrypto2BentoboxMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("collateral", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("debt", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("price", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("coins", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save Cvxcrvtricrypto2BentoboxMetric entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Cvxcrvtricrypto2BentoboxMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Cvxcrvtricrypto2BentoboxMetric", id.toString(), this);
    }
  }

  static load(id: string): Cvxcrvtricrypto2BentoboxMetric | null {
    return changetype<Cvxcrvtricrypto2BentoboxMetric | null>(
      store.get("Cvxcrvtricrypto2BentoboxMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get collateral(): BigDecimal {
    let value = this.get("collateral");
    return value!.toBigDecimal();
  }

  set collateral(value: BigDecimal) {
    this.set("collateral", Value.fromBigDecimal(value));
  }

  get debt(): BigDecimal {
    let value = this.get("debt");
    return value!.toBigDecimal();
  }

  set debt(value: BigDecimal) {
    this.set("debt", Value.fromBigDecimal(value));
  }

  get price(): BigDecimal {
    let value = this.get("price");
    return value!.toBigDecimal();
  }

  set price(value: BigDecimal) {
    this.set("price", Value.fromBigDecimal(value));
  }

  get coins(): BigDecimal {
    let value = this.get("coins");
    return value!.toBigDecimal();
  }

  set coins(value: BigDecimal) {
    this.set("coins", Value.fromBigDecimal(value));
  }
}

export class PopsicleWBTCWETHMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("WBTCCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WBTCPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WBTCValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("combinedValue", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save PopsicleWBTCWETHMetric entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PopsicleWBTCWETHMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PopsicleWBTCWETHMetric", id.toString(), this);
    }
  }

  static load(id: string): PopsicleWBTCWETHMetric | null {
    return changetype<PopsicleWBTCWETHMetric | null>(
      store.get("PopsicleWBTCWETHMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get WBTCCount(): BigDecimal {
    let value = this.get("WBTCCount");
    return value!.toBigDecimal();
  }

  set WBTCCount(value: BigDecimal) {
    this.set("WBTCCount", Value.fromBigDecimal(value));
  }

  get WETHCount(): BigDecimal {
    let value = this.get("WETHCount");
    return value!.toBigDecimal();
  }

  set WETHCount(value: BigDecimal) {
    this.set("WETHCount", Value.fromBigDecimal(value));
  }

  get WBTCPrice(): BigDecimal {
    let value = this.get("WBTCPrice");
    return value!.toBigDecimal();
  }

  set WBTCPrice(value: BigDecimal) {
    this.set("WBTCPrice", Value.fromBigDecimal(value));
  }

  get WETHPrice(): BigDecimal {
    let value = this.get("WETHPrice");
    return value!.toBigDecimal();
  }

  set WETHPrice(value: BigDecimal) {
    this.set("WETHPrice", Value.fromBigDecimal(value));
  }

  get WBTCValue(): BigDecimal {
    let value = this.get("WBTCValue");
    return value!.toBigDecimal();
  }

  set WBTCValue(value: BigDecimal) {
    this.set("WBTCValue", Value.fromBigDecimal(value));
  }

  get WETHValue(): BigDecimal {
    let value = this.get("WETHValue");
    return value!.toBigDecimal();
  }

  set WETHValue(value: BigDecimal) {
    this.set("WETHValue", Value.fromBigDecimal(value));
  }

  get combinedValue(): BigDecimal {
    let value = this.get("combinedValue");
    return value!.toBigDecimal();
  }

  set combinedValue(value: BigDecimal) {
    this.set("combinedValue", Value.fromBigDecimal(value));
  }
}

export class StakedSpellMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("SPELLPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("SPELLSSPELLRatio", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("SSPELLPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("SSPELLCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("SSPELLValue", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakedSpellMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save StakedSpellMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("StakedSpellMetric", id.toString(), this);
    }
  }

  static load(id: string): StakedSpellMetric | null {
    return changetype<StakedSpellMetric | null>(
      store.get("StakedSpellMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get SPELLPrice(): BigDecimal {
    let value = this.get("SPELLPrice");
    return value!.toBigDecimal();
  }

  set SPELLPrice(value: BigDecimal) {
    this.set("SPELLPrice", Value.fromBigDecimal(value));
  }

  get SPELLSSPELLRatio(): BigDecimal {
    let value = this.get("SPELLSSPELLRatio");
    return value!.toBigDecimal();
  }

  set SPELLSSPELLRatio(value: BigDecimal) {
    this.set("SPELLSSPELLRatio", Value.fromBigDecimal(value));
  }

  get SSPELLPrice(): BigDecimal {
    let value = this.get("SSPELLPrice");
    return value!.toBigDecimal();
  }

  set SSPELLPrice(value: BigDecimal) {
    this.set("SSPELLPrice", Value.fromBigDecimal(value));
  }

  get SSPELLCount(): BigDecimal {
    let value = this.get("SSPELLCount");
    return value!.toBigDecimal();
  }

  set SSPELLCount(value: BigDecimal) {
    this.set("SSPELLCount", Value.fromBigDecimal(value));
  }

  get SSPELLValue(): BigDecimal {
    let value = this.get("SSPELLValue");
    return value!.toBigDecimal();
  }

  set SSPELLValue(value: BigDecimal) {
    this.set("SSPELLValue", Value.fromBigDecimal(value));
  }
}

export class Univ3MIMWETHMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("MIMCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("MIMValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WETHValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalValue", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Univ3MIMWETHMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Univ3MIMWETHMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Univ3MIMWETHMetric", id.toString(), this);
    }
  }

  static load(id: string): Univ3MIMWETHMetric | null {
    return changetype<Univ3MIMWETHMetric | null>(
      store.get("Univ3MIMWETHMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get MIMCount(): BigDecimal {
    let value = this.get("MIMCount");
    return value!.toBigDecimal();
  }

  set MIMCount(value: BigDecimal) {
    this.set("MIMCount", Value.fromBigDecimal(value));
  }

  get WETHCount(): BigDecimal {
    let value = this.get("WETHCount");
    return value!.toBigDecimal();
  }

  set WETHCount(value: BigDecimal) {
    this.set("WETHCount", Value.fromBigDecimal(value));
  }

  get MIMValue(): BigDecimal {
    let value = this.get("MIMValue");
    return value!.toBigDecimal();
  }

  set MIMValue(value: BigDecimal) {
    this.set("MIMValue", Value.fromBigDecimal(value));
  }

  get WETHValue(): BigDecimal {
    let value = this.get("WETHValue");
    return value!.toBigDecimal();
  }

  set WETHValue(value: BigDecimal) {
    this.set("WETHValue", Value.fromBigDecimal(value));
  }

  get totalValue(): BigDecimal {
    let value = this.get("totalValue");
    return value!.toBigDecimal();
  }

  set totalValue(value: BigDecimal) {
    this.set("totalValue", Value.fromBigDecimal(value));
  }
}

export class TokenBalancesMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("MIMCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("MIMValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("CVXCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("CVXValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WBTCCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("WBTCValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("CRVCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("CRVValue", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("ETHCount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("ETHValue", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenBalancesMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenBalancesMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenBalancesMetric", id.toString(), this);
    }
  }

  static load(id: string): TokenBalancesMetric | null {
    return changetype<TokenBalancesMetric | null>(
      store.get("TokenBalancesMetric", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get MIMCount(): BigDecimal {
    let value = this.get("MIMCount");
    return value!.toBigDecimal();
  }

  set MIMCount(value: BigDecimal) {
    this.set("MIMCount", Value.fromBigDecimal(value));
  }

  get MIMValue(): BigDecimal {
    let value = this.get("MIMValue");
    return value!.toBigDecimal();
  }

  set MIMValue(value: BigDecimal) {
    this.set("MIMValue", Value.fromBigDecimal(value));
  }

  get CVXCount(): BigDecimal {
    let value = this.get("CVXCount");
    return value!.toBigDecimal();
  }

  set CVXCount(value: BigDecimal) {
    this.set("CVXCount", Value.fromBigDecimal(value));
  }

  get CVXValue(): BigDecimal {
    let value = this.get("CVXValue");
    return value!.toBigDecimal();
  }

  set CVXValue(value: BigDecimal) {
    this.set("CVXValue", Value.fromBigDecimal(value));
  }

  get WBTCCount(): BigDecimal {
    let value = this.get("WBTCCount");
    return value!.toBigDecimal();
  }

  set WBTCCount(value: BigDecimal) {
    this.set("WBTCCount", Value.fromBigDecimal(value));
  }

  get WBTCValue(): BigDecimal {
    let value = this.get("WBTCValue");
    return value!.toBigDecimal();
  }

  set WBTCValue(value: BigDecimal) {
    this.set("WBTCValue", Value.fromBigDecimal(value));
  }

  get CRVCount(): BigDecimal {
    let value = this.get("CRVCount");
    return value!.toBigDecimal();
  }

  set CRVCount(value: BigDecimal) {
    this.set("CRVCount", Value.fromBigDecimal(value));
  }

  get CRVValue(): BigDecimal {
    let value = this.get("CRVValue");
    return value!.toBigDecimal();
  }

  set CRVValue(value: BigDecimal) {
    this.set("CRVValue", Value.fromBigDecimal(value));
  }

  get ETHCount(): BigDecimal {
    let value = this.get("ETHCount");
    return value!.toBigDecimal();
  }

  set ETHCount(value: BigDecimal) {
    this.set("ETHCount", Value.fromBigDecimal(value));
  }

  get ETHValue(): BigDecimal {
    let value = this.get("ETHValue");
    return value!.toBigDecimal();
  }

  set ETHValue(value: BigDecimal) {
    this.set("ETHValue", Value.fromBigDecimal(value));
  }
}
