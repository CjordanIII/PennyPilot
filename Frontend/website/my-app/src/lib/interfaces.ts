export interface mapConstraintTypes {
  name: string;
  src: string;
  alt: string;
  href: string;
}

export interface LineCharttypes {
  name?: string;
  series: Series[];
  xAxis: Axis;
  yAxis: Axis;
}
export interface Axis {
  type: string;
  data?: string[];
}

export interface Series {
  name: string;
  data: number[];
  type: string;
  smooth: boolean;
}

export interface LinechartServicesTypes {
  data: LineCharttypes;
}

export interface GageChartTypes {
  title?: string;
  name?: string;
  value?: number;
  fontSize?: number;
}
export interface GageChartServicesTypes {
  data: GageChartTypes;
}

export interface PieCharts {
  data: PiechartData;
}
export interface PiechartData {
  title: PieChartTitle;
  legend: { data: string[] };
  data: PieData[];
}
export interface PiechartDataProps {
    titleData: PieChartTitle;
    legendData: string[]
    data: PieData[];
  }
export interface PieChartTitle {
  text: string;
  subtext: string;
  left: string;
}
export interface PieData {
  value: number;
  name: string;
}
