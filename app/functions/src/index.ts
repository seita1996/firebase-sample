import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);

// /helloWorld
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// /getRecords
// export const getRecords = functions.https.onRequest((request, response) => {
//   const ref = admin.firestore().collection("memo");
//   ref.get().then((snapshot) => {
//     response.json(snapshot.docs);
//   }).catch((error) => {
//     response.status(500).send(error);
//   });
// });

// GET /getRecord?docid=qwer
export const getRecord = functions.https.onRequest((request, response) => {
  const docid = `${request.query.docid}`;
  const ref = admin.firestore().collection("memo").doc(docid);
  ref.get().then((snapshot) => {
    response.json(snapshot);
  }).catch((error) => {
    response.status(500).send(error);
  });
});

// POST /createRecord  body {text: "hogehoge" }
export const createRecord = functions.https.onRequest((request, response) => {
  const data = `${request.body.toString()}`;
  const ref = admin.firestore().collection("memo");
  ref.add({data}).then((snapshot) => {
    response.json({
      id: snapshot.id,
      data,
    });
  }).catch((error) => {
    response.status(500).send(error);
  });
});
