import {lineChartData,gageCharts,pieCharts} from "@/services/charts.service"
import {LinechartServicesTypes,GageChartServicesTypes,PieCharts} from "@/lib/interfaces"
// logic for line charts after calling its api for data
export const lineChart = ():LinechartServicesTypes=>{
    return lineChartData()
}
// logic for gage charts after calling its api for data
export const gaugeChart = ():GageChartServicesTypes =>{
    return gageCharts()
}
// logic for pie charts after calling its api for data
export const pieChart = ():PieCharts =>{
    return pieCharts()
}
