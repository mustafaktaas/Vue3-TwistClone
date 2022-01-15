import firebase from 'firebase'
import { ref,onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyB68rXCNL6gehnYDinroxI1rydziMz3wX0",
    authDomain: "vue3-twist.firebaseapp.com",
    projectId: "vue3-twist",
    storageBucket: "vue3-twist.appspot.com",
    messagingSenderId: "329300689370",
    appId: "1:329300689370:web:eef342e1b74d741ee800e3",
    measurementId: "G-QCFS89M3EN"
  }

  const firebaseApp = firebase.initializeApp(config)
  const db = firebaseApp.firestore()
  const usersCollection = db.collection('Users')

  export const createUser = user => {

    return usersCollection.add(user)
  }

  export const getUser = async id => {

    const user = await usersCollection.doc(id).get()
    return usersCollection.add(user)
  }

  
  export const useLoadUsers = () => {
    const Users = ref([])
    const close =  usersCollection.onSnapshot(snapshot => 
        {Users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return Users
  }

  