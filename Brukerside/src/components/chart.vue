
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
import * as chartConfig from './chartConfig.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Bar
    },
    data() {
        return chartConfig
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