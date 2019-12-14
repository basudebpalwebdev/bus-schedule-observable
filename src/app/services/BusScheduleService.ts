import { BusSchedule } from '../datatypes/';
import dataSource from './../../../db/datasource.json';
import { timeSeperator, startChartAfterCurrentTime, bestTravelOptionFinder } from './../helpers/';

export class BusSelectionService {
    private busScheduleChart: BusSchedule[] = new Array<BusSchedule>();

    constructor() {
        const currentTime = new Date();
        dataSource.timeTable.map((data) => {
            const busSchedule: BusSchedule = new BusSchedule();
            busSchedule.companyName = data.companyName;
            const departureFromC = timeSeperator(data.departureFromC);
            busSchedule.departureFromC = new Date(
                currentTime.setHours(departureFromC.hour, departureFromC.minute)
            );
            const arrivalAtD = timeSeperator(data.arrivalAtD);
            busSchedule.arrivalAtD = new Date(
                currentTime.setHours(arrivalAtD.hour, arrivalAtD.minute)
            );
            this.busScheduleChart.push(busSchedule);
        });
    }

    private sortBusScheduleByDepartureTimeDesc(BusScheduleList: BusSchedule[]) {
        return BusScheduleList.sort((a: BusSchedule, b: BusSchedule) => {
            return a.departureFromC <= b.departureFromC ? -1 : 1;
        });
    }

    startListAfterCurrentTime() {
        const sortedList: BusSchedule[] = this.sortBusScheduleByDepartureTimeDesc(this.busScheduleChart);
        return startChartAfterCurrentTime(sortedList);
    }

    getBestTravelOption() {
        const rearrangedTimeTable: BusSchedule[] = this.startListAfterCurrentTime();
        return bestTravelOptionFinder(rearrangedTimeTable);
    }

}
