import { Address, BigDecimal } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../generated/Bentobox/ERC20";
import { SPELL, SSPELL } from "../constants";

export const getSSPELLRatio = (): BigDecimal => {
  const spell = ERC20.bind(Address.fromString(SPELL));
  const sSpellContract = ERC20.bind(Address.fromString(SSPELL));

  const spellInStakingContract = spell.balanceOf(Address.fromString(SSPELL));
  const totalStakedSpell = sSpellContract.totalSupply();

  return spellInStakingContract.toBigDecimal().div(totalStakedSpell.toBigDecimal());
};
