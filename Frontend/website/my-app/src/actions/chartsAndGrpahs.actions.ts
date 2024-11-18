import {lineChartData,gageCharts} from "@/services/charts.service"
import {LinechartServicesTypes,GageChartServicesTypes} from "@/lib/interfaces"

export const lineChart = ():LinechartServicesTypes=>{
    return lineChartData()
}

export const gaugeChart = ():GageChartServicesTypes =>{
    return gageCharts()
}