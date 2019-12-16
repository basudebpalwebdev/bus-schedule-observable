import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusSelectionService } from 'src/app/services';
import { BusScheduleDT } from 'src/app/datatypes';
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
            .subscribe((list: BusScheduleDT[]) => console.log(list));
        this.bestOptionSubscription = this.busSelectionService.getBestTravelOption()
            .subscribe((option: BusScheduleDT) => console.log(option));
    }

    ngOnDestroy() {
        this.busScheduleSubscription.unsubscribe();
        this.bestOptionSubscription.unsubscribe();
    }

}
