import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Signature Fingerprint
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { SignatureFingerprint } from '@ionic-native/signature-fingerprint';
 *
 *
 * constructor(private signatureFingerprint: SignatureFingerprint) { }
 *
 * ...
 *
 *
 * this.signatureFingerprint.getCoolMethod('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SignatureFingerprint extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getCoolMethod(arg1: string): Promise<any>;
}
