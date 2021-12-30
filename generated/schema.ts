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
}