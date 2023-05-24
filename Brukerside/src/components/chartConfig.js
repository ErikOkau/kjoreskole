import { collection, getCountFromServer, query, where } from 'firebase/firestore'
import { auth, db  } from '../firebase/firebase.js'

const collectionRef = collection(db, 'Kjøretimer')

const completedRef = query(
  collectionRef, 
  where(
    'Status', 
    '==', 
    'Completed'
    ),
  )
const countComplete = await getCountFromServer(completedRef)


const ongoingRef = query(
  collectionRef, 
  where('Status', '==', 'Ongoing'),
  )
const countOngoing = await getCountFromServer(ongoingRef)



export const data = {
  labels: ['Kjøretimer'],
  datasets: [
    {
      label: 'Fullført',
      backgroundColor: 'green',
      data: [countComplete.data().count],
    },
    {
      label: 'Fremtidig',
      backgroundColor: 'red',
      data: [countOngoing.data().count],
    },
  ],
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
}
