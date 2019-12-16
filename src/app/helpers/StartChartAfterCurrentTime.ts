import { BusScheduleDT } from './../datatypes/';

export function startChartAfterCurrentTime(sortedChart: BusScheduleDT[]): BusScheduleDT[] {
    const beforeCurrentTimeChart: BusScheduleDT[] = new Array<BusScheduleDT>();
    const afterCurrentTimeChart: BusScheduleDT[] = new Array<BusScheduleDT>();
    const currentDate: Date = new Date();
    sortedChart.map((item) => {
        if (item.departureFromC <= currentDate) {
            item.departureFromC.setTime(item.departureFromC.getTime() + 86400000);
            item.arrivalAtD.setTime(item.arrivalAtD.getTime() + 86400000);
            beforeCurrentTimeChart.push(item);
        } else {
            afterCurrentTimeChart.push(item);
        }
    });
    return afterCurrentTimeChart.concat(beforeCurrentTimeChart);
}
