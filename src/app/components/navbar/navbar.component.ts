import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusSelectionService } from 'src/app/services';
import { BusSchedule } from 'src/app/datatypes';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

    private busScheduleSubscription: Subscription;
    private bestOptionSubscription: Subscription;

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        this.busScheduleSubscription = this.busSelectionService.startListAfterCurrentTime()
            .subscribe((list: BusSchedule[]) => console.log(list));
        this.bestOptionSubscription = this.busSelectionService.getBestTravelOption()
            .subscribe((option: BusSchedule) => console.log(option));
    }

    ngOnDestroy() {
        this.busScheduleSubscription.unsubscribe();
        this.bestOptionSubscription.unsubscribe();
    }

}
