import { entropyToMnemonic, mnemonicToSeed ,validateMnemonic} from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";
import { secp256k1 } from "@noble/curves/secp256k1";
import { getAddress } from "@ethersproject/address";
import { randomBytes as generateRandomBytes } from "@noble/hashes/utils";
import { bytesToHex } from "@noble/hashes/utils";



export function generateRandomMnemonic() : string {
  const randomBytes = generateRandomBytes(16);
  return entropyToMnemonic(randomBytes, wordlist);
}
export function validateMnemonicWords(mnemonic: string) : boolean {
  return validateMnemonic(mnemonic, wordlist);
}

export const generateWalletInfo = async ({mnemonic} : {mnemonic:string}): Promise<{ label: string; value: string }[]> => {

  // Generate seed from mnemonic
  const seed = await mnemonicToSeed(mnemonic);
  const seedHex = bytesToHex(seed);

  // Generate private key
  const privateKey = secp256k1.utils.randomPrivateKey();
  const privateKeyHex = bytesToHex(privateKey);

  // Generate public key
  const publicKey = secp256k1.getPublicKey(privateKey, false); // Uncompressed
  const publicKeyHex = bytesToHex(publicKey);

  // Generate Ethereum address
  const address = getAddress(`0x${publicKeyHex.slice(-40)}`);

  // Return all the data as an array
  return [
    { label: "Mnemonic", value: mnemonic },
    { label: "Seed", value: seedHex },
    { label: "Private Key", value: privateKeyHex },
    { label: "Public Key", value: publicKeyHex },
    { label: "Ethereum Address", value: address },
  ];
};