import * as CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_REACT_APP_SECRET_KEY
  ? import.meta.env.VITE_REACT_APP_SECRET_KEY
  : "1234";
// const secretKey = process.env.REACT_APP_SECRET_KEY

export const encrypt = (plainText) => {
  const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return cipherText;
};

export const decrypt = (cipherText) => {
  if (!cipherText) return;
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const plainText = bytes.toString(CryptoJS.enc.Utf8);
  return plainText;
};
