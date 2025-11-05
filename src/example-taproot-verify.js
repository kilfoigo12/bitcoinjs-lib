/**
 * Example: Simple Taproot signature verification using bitcoinjs-lib
 * Demonstrates how to import a transaction and verify a signature.
 */

import * as bitcoin from 'bitcoinjs-lib';

export function verifyTaprootSignature(txHex, signature, pubkey) {
  try {
    const tx = bitcoin.Transaction.fromHex(txHex);
    const hash = tx.hashForWitnessV1(0, [pubkey], [bitcoin.Transaction.SIGHASH_ALL]);
    return bitcoin.script.signature.decode(signature).toString('hex') === hash.toString('hex');
  } catch (err) {
    console.error('Verification failed:', err);
    return false;
  }
}
