import type { JWKInterface } from "./interface-jwk";
export type { default as Transaction } from "arweave/web/lib/transaction";
export type { CreateTransactionInterface } from "arweave/web/common";
import webDriver from "arweave/web/lib/crypto/webcrypto-driver";
export { stringToBuffer, concatBuffers } from "arweave/web/lib/utils";
export { deepHash } from "./deepHash";
// import { sha384 as SHA384 } from "sha";
// export { default as Arweave } from "arweave/web";
// import type { Hash } from "crypto";
// export const sha384 = (): Hash => SHA384("sha384");

// hack as ESM won't unpack .default CJS imports, so we do so dynamically
// eslint-disable-next-line @typescript-eslint/dot-notation
const driver: typeof webDriver = webDriver["default"] ? webDriver["default"] : webDriver;
export class CryptoDriver extends driver {
  public getPublicKey(_jwk: JWKInterface): string {
    throw new Error("Unimplemented");
  }
}

let driverInstance: CryptoDriver;
export function getCryptoDriver(): CryptoDriver {
  return (driverInstance ??= new CryptoDriver());
}
