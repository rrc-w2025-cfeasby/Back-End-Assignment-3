import { db } from "../config/firebaseConfig";

async function testFirestore() {
  try {
    const testRef = db.collection("testCollection").doc("testDoc");

    await testRef.set({
      message: "Hello Firestore!",
      timestamp: new Date().toISOString(),
    });

    const snapshot = await testRef.get();

    console.log("Document exists:", snapshot.exists);
    console.log("Document data:", snapshot.data());
  } catch (error) {
    console.error("Firestore test error:", error);
  }
}

testFirestore();