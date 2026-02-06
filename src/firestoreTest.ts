import { db } from "../config/firebaseConfig";

/**
 * Firestore Test Function
 * 
 * This function tests basic Firestore operations by creating a document,
 * retrieving it, and logging the results.
 */
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