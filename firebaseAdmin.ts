import admin from "firebase-admin"
import { getApps } from "firebase-admin/app"

const servicerAccount = JSON.parse(
    process.env.FIREBASE_SECRET_ACCOUNT_KEY as string
);

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(servicerAccount),
    });
}

const adminDb = admin.firestore();

export { adminDb }