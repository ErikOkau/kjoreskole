<template>
  <div class="flex3">
      <div class="chart_headline">
          <h1>Statistikk</h1>
          <h3>Nedenfor kan du se statistikk over dine fremtidige timer</h3>
      </div>
          
      <div class="chart">
          <Bar :data="data" :options="options" />
      </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { collection, getCountFromServer, query, where } from 'firebase/firestore'
import { db, auth  } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


const collectionRef = collection(db, 'Kjøretimer')
const completeCount = ref(0)
const countOngoing = ref(0)


onAuthStateChanged(auth, async (user) => {
if (user) {
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

  console.log(completeCountData.data().count)
  console.log(countOngoingData.data().count)
} else {
  console.log("No user is signed in")
}
})

const data = ref({
  labels: ['Kjøretimer'],
  datasets: [
    {
      label: 'Fullført',
      backgroundColor: 'green',
      data: [completeCount.value],
    },
    {
      label: 'Fremtidig',
      backgroundColor: 'red',
      data: [countOngoing.value],
    },
  ],
})

const options = {
  responsive: true,
  maintainAspectRatio: false,
}


export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
        data,
        options
    }
  }
}

</script>


<style scoped>

.chart {
  width: 75rem;
  height: 30rem;  

}

.chart_headline {
  padding: 2rem 0rem;
  text-align: center;
}

.flex3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>

