import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjEZMX3DK6Hwrj3rap0xT5harhVLbGYpo",
  authDomain: "blee-commerce.firebaseapp.com",
  databaseURL: "https://blee-commerce.firebaseio.com",
  projectId: "blee-commerce",
  storageBucket: "blee-commerce.appspot.com",
  messagingSenderId: "691637080555",
  appId: "1:691637080555:web:4c6faa2658a532aa2849ae",
  measurementId: "G-7M7K3WLNRM"
};

firebase.initializeApp(config);

export let auth = firebase.auth();
export let firestore = firebase.firestore();

let provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export let createUserProfileDocument = async (userAuth, miscData) => {
  if (!userAuth) return;

  let userReference = firestore.doc(`users/${userAuth.uid}`);
  let snapShot = await userReference.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const timeCreated = new Date();

    try {
      await userReference.set({
        displayName,
        email,
        timeCreated,
        ...miscData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userReference;
};

export const convertSnapshotToObject = collections => {
  const convertedCollection = collections.docs.map(doc => {
    const { title, items, id } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id,
      title,
      items
    };
  });

  return convertedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Left in as reference for the event that we'd want to make any new documents/collections.

// export const migrateCollectionsAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   let collectionRef = firestore.collection(collectionKey);

//   let batch = firestore.batch();

//   objectsToAdd.forEach(object => {
//     let newDocumentRef = collectionRef.doc();
//     batch.set(newDocumentRef, object);
//   });

//   return await batch.commit();
// };

export default firebase;
