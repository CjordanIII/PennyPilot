import {lineChartData,gageCharts,pieCharts} from "@/services/charts.service"
import {LinechartServicesTypes,GageChartServicesTypes,PieCharts} from "@/lib/interfaces"

export const lineChart = ():LinechartServicesTypes=>{
    return lineChartData()
}

export const gaugeChart = ():GageChartServicesTypes =>{
    return gageCharts()
}

export const pieChart = ():PieCharts =>{
    return pieCharts()
}
