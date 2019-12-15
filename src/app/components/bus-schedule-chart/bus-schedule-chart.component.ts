import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusSelectionService } from 'src/app/services';
import { BusSchedule } from 'src/app/datatypes';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-bus-schedule-chart',
    templateUrl: './bus-schedule-chart.component.html',
    styleUrls: ['./bus-schedule-chart.component.scss']
})
export class BusScheduleChartComponent implements OnInit, OnDestroy {

    busScheduleChart: BusSchedule[] = new Array<BusSchedule>();
    private busScheduleSubscription: Subscription;

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        this.busScheduleSubscription = this.busSelectionService.startListAfterCurrentTime()
            .subscribe((list: BusSchedule[]) => this.busScheduleChart = list);
    }

    ngOnDestroy() {
        this.busScheduleSubscription.unsubscribe();
    }

}
