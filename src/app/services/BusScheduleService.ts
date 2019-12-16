import { BusScheduleDT } from '../datatypes/';
import dataSource from './../../../db/datasource.json';
import { timeSeperator, startChartAfterCurrentTime, bestTravelOptionFinder } from './../helpers/';
import { Observable } from 'rxjs';

export class BusSelectionService {
    private busScheduleChart: BusScheduleDT[] = new Array<BusScheduleDT>();

    constructor() {
        this.busScheduleChart = this.formatDataSource(new Date(), dataSource);
    }

    private formatDataSource(currentTime: Date, jsonData: any): BusScheduleDT[] {
        const busScheduleData: BusScheduleDT[] = new Array<BusScheduleDT>();
        jsonData.timeTable.map((data: any) => {
            const busSchedule: BusScheduleDT = new BusScheduleDT();
            busSchedule.companyName = data.companyName;
            const departureFromC = timeSeperator(data.departureFromC);
            busSchedule.departureFromC = new Date(currentTime.setHours(departureFromC.hour, departureFromC.minute));
            const arrivalAtD = timeSeperator(data.arrivalAtD);
            busSchedule.arrivalAtD = new Date(currentTime.setHours(arrivalAtD.hour, arrivalAtD.minute));
            busScheduleData.push(busSchedule);
        });
        return busScheduleData;
    }

    private sortBusScheduleDTByDepartureTimeDesc(BusScheduleDTList: BusScheduleDT[]) {
        return BusScheduleDTList.sort((a: BusScheduleDT, b: BusScheduleDT) => {
            return a.departureFromC <= b.departureFromC ? -1 : 1;
        });
    }

    startListAfterCurrentTime(): Observable<BusScheduleDT[]> {
        const sortedList: BusScheduleDT[] = this.sortBusScheduleDTByDepartureTimeDesc(this.busScheduleChart);
        const busScheduleChartObservable: Observable<BusScheduleDT[]> = new Observable<BusScheduleDT[]>(
            (observer: any) => observer.next(startChartAfterCurrentTime(sortedList))
        );
        return busScheduleChartObservable;
    }

    getBestTravelOption(): Observable<BusScheduleDT> {
        let bestTravelOption: BusScheduleDT = new BusScheduleDT();
        this.startListAfterCurrentTime().subscribe(
            (list: BusScheduleDT[]) => bestTravelOption = bestTravelOptionFinder(list)
        );
        const bestTravelOptionObservable: Observable<BusScheduleDT> = new Observable<BusScheduleDT>(
            (observer: any) => observer.next(bestTravelOption)
        );
        return bestTravelOptionObservable;
    }

}
