import { Univ3NFTManager } from "./../../generated/sOHM/Univ3NFTManager";
import { UNI_V3_NFT_MANAGER, WONDERLAND_ETH_TREASURY } from "./../constants";
import { UniswapV3Pool } from "./../../generated/sOHM/UniswapV3Pool";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { loadOrCreateUniv3WETHMIMMetric } from "./UNIV3MIMWETHMetric";
import { UNI_V3_MIM_WETH, UNI_V3_MIM_WETH_NFT } from "../constants";

export const logUniv3MIMWETHMetric = (date: string, timestamp: BigInt): void => {
  let univ3Metric = loadOrCreateUniv3WETHMIMMetric(date, timestamp);

  const univ3NftManager = Univ3NFTManager.bind(Address.fromString(UNI_V3_NFT_MANAGER));
  const univ3Pool = UniswapV3Pool.bind(Address.fromString(UNI_V3_MIM_WETH));

  const pos = univ3NftManager.positions(BigInt.fromString(UNI_V3_MIM_WETH_NFT));

  /** example response, see order of return properties. 0-indexed
        nonce   uint96 :  0
        operator   address :  0x0000000000000000000000000000000000000000
        token0   address :  0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3
        token1   address :  0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
        fee   uint24 :  10000
        tickLower   int24 :  -84200
        tickUpper   int24 :  -82400
        liquidity   uint128 :  6168980003846738722627769
        feeGrowthInside0LastX128   uint256 :  202354163417959701115987300345695366022
        feeGrowthInside1LastX128   uint256 :  52898120693671814790349395834289322
        tokensOwed0   uint128 :  0
        tokensOwed1   uint128 :  0
     */

  const tickLower = pos.value5;
  const tickUpper = pos.value6;
  const liquidity = pos.value7;

  const slot0 = univ3Pool.slot0();

  /** example response of slot0
       sqrtPriceX96|uint160 :  1294541916223527895499436401
        tick|int24 :  -82288
        observationIndex|uint16 :  0
        observationCardinality|uint16 :  1
        observationCardinalityNext|uint16 :  1
        feeProtocol|uint8 :  0
        unlocked|bool :  True
   */

  const sqrtPriceX96 = slot0.value0;
  const tick = slot0.value1;

  // TODO
  // Put on hold for now.......
  // https://github.com/thanpolas/univ3prices

  univ3Metric.save();
};
