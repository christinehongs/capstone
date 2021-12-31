import Firestore from "@google-cloud/firestore";
import path from "path"
import { fileURLToPath } from "url";

const fileDir = path.dirname(fileURLToPath(import.meta.url));

export const db = new Firestore({
  projectId: "capstone-9aef8",
  keyFilename: path.resolve(fileDir, "../creds/capstone-9aef8-firebase-adminsdk-d882j-c4c16c450b.json")
});
