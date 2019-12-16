import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BusSelectionService } from 'src/app/services';
import { BusScheduleDT, FormattedBusScheduleDT } from 'src/app/datatypes';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { formatListDateTime } from 'src/app/helpers';

@Component({
    selector: 'app-bus-schedule-chart',
    templateUrl: './bus-schedule-chart.component.html',
    styleUrls: ['./bus-schedule-chart.component.scss']
})
export class BusScheduleChartComponent implements OnInit, OnDestroy {

    displayedColumns: string[] = ['companyName', 'departureFromC', 'arrivalAtD'];
    dataSource = new MatTableDataSource<FormattedBusScheduleDT>();
    private busScheduleSubscription: Subscription;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        this.busScheduleSubscription = this.busSelectionService.startListAfterCurrentTime()
            .subscribe((list: BusScheduleDT[]) =>
                this.dataSource = new MatTableDataSource<FormattedBusScheduleDT>(
                    formatListDateTime(list)
                ));
        this.dataSource.paginator = this.paginator;
    }

    ngOnDestroy() {
        this.busScheduleSubscription.unsubscribe();
    }

}
