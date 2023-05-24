import { collection, getCountFromServer, query, where } from 'firebase/firestore'
import { db, auth  } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

const collectionRef = collection(db, 'Kjøretimer')
const completeCount = ref(0)
const countOngoing = ref(0)


onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("User is signed in")

    console.log(auth.currentUser.uid)

    const completedRef = query(
      collectionRef, 
      where('Status', '==', 'Completed'),
      where('elevId','==', auth.currentUser.uid)
    )
    const completeCountData = await getCountFromServer(completedRef)

    completeCount.value = completeCountData.data().count


    
    const ongoingRef = query(
      collectionRef, 
      where('Status', '==', 'Ongoing'),
      where('elevId','==',auth.currentUser.uid)
    )

    const countOngoingData = await getCountFromServer(ongoingRef)

    countOngoing.value = countOngoingData.data().count

    console.log(completeCount.value)
    console.log(countOngoing.value)
  } else {
    console.log("No user is signed in")
  }
})


export const data = {
  labels: ['Kjøretimer'],
  datasets: [
    {
      label: 'Fullført',
      backgroundColor: 'green',
      data: [completeCount],
    },
    {
      label: 'Fremtidig',
      backgroundColor: 'red',
      data: [countOngoing],
    },
  ],
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
}
