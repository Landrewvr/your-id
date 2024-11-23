// Encrypt text by shifting characters (including numbers and special characters)
export function encrypt(text: string, shift: number): string {
  return text.split('')
             .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
             .join('');
}

// Decrypt text by shifting characters back (including numbers and special characters)
export function decrypt(text: string, shift: number): string {
  return text.split('')
             .map(char => String.fromCharCode(char.charCodeAt(0) - shift))
             .join('');
}

// Example usage
let text: string = "123-42-4214";
let shift: number = 3;

let encryptedText: string = encrypt(text, shift);
console.log("Encrypted:", encryptedText);

let decryptedText: string = decrypt(encryptedText, shift);
console.log("Decrypted:", decryptedText);