import { BusSchedule } from '../datatypes/';
import dataSource from './../../../db/datasource.json';
import { timeSeperator, startChartAfterCurrentTime, bestTravelOptionFinder } from './../helpers/';
import { Observable } from 'rxjs';

export class BusSelectionService {
    private busScheduleChart: BusSchedule[] = new Array<BusSchedule>();

    constructor() {
        this.busScheduleChart = this.formatDataSource(new Date(), dataSource);
    }

    private formatDataSource(currentTime: Date, jsonData: any): BusSchedule[] {
        const busScheduleData: BusSchedule[] = new Array<BusSchedule>();
        jsonData.timeTable.map((data: any) => {
            const busSchedule: BusSchedule = new BusSchedule();
            busSchedule.companyName = data.companyName;
            const departureFromC = timeSeperator(data.departureFromC);
            busSchedule.departureFromC = new Date(currentTime.setHours(departureFromC.hour, departureFromC.minute));
            const arrivalAtD = timeSeperator(data.arrivalAtD);
            busSchedule.arrivalAtD = new Date(currentTime.setHours(arrivalAtD.hour, arrivalAtD.minute));
            busScheduleData.push(busSchedule);
        });
        return busScheduleData;
    }

    private sortBusScheduleByDepartureTimeDesc(BusScheduleList: BusSchedule[]) {
        return BusScheduleList.sort((a: BusSchedule, b: BusSchedule) => {
            return a.departureFromC <= b.departureFromC ? -1 : 1;
        });
    }

    startListAfterCurrentTime(): Observable<BusSchedule[]> {
        const sortedList: BusSchedule[] = this.sortBusScheduleByDepartureTimeDesc(this.busScheduleChart);
        const busScheduleChartObservable: Observable<BusSchedule[]> = new Observable<BusSchedule[]>(
            (observer: any) => observer.next(startChartAfterCurrentTime(sortedList))
        );
        return busScheduleChartObservable;
    }

    getBestTravelOption(): Observable<BusSchedule> {
        let bestTravelOption: BusSchedule = new BusSchedule();
        this.startListAfterCurrentTime().subscribe(
            (list: BusSchedule[]) => bestTravelOption = bestTravelOptionFinder(list)
        );
        const bestTravelOptionObservable: Observable<BusSchedule> = new Observable<BusSchedule>(
            (observer: any) => observer.next(bestTravelOption)
        );
        return bestTravelOptionObservable;
    }

}
