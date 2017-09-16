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
 * this.signatureFingerprint.getSignature()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * this.signatureFingerprint.getPackageName()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SignatureFingerprint extends IonicNativePlugin {
    /**
     * Returns the signature fingerprint of the app
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getSignature(): Promise<any>;
    /**
     * Returns the package name of the app
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getPackageName(): Promise<any>;
}
