import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { ContactTypes } from "../types/contact.types";

export async function addContactInfo(payload: ContactTypes) {
  const documentRef = collection(db, "contact");
  const result = await addDoc(documentRef, payload);
  console.log({ result });

  return result;
}
