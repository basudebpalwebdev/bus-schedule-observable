import { BusSchedule } from './../datatypes/BusScheduleDT';

export function startChartAfterCurrentTime(sortedChart: BusSchedule[]): BusSchedule[] {
    const beforeCurrentTimeChart: BusSchedule[] = new Array<BusSchedule>();
    const afterCurrentTimeChart: BusSchedule[] = new Array<BusSchedule>();
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
