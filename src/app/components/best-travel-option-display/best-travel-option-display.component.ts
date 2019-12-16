import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusSelectionService } from 'src/app/services';
import { BusScheduleDT, FormattedBusScheduleDT } from 'src/app/datatypes';
import { formatListDateTime } from 'src/app/helpers';

@Component({
    selector: 'app-best-travel-option-display',
    templateUrl: './best-travel-option-display.component.html',
    styleUrls: ['./best-travel-option-display.component.scss']
})
export class BestTravelOptionDisplayComponent implements OnInit, OnDestroy {

    private bestOptionSubscription: Subscription;
    bestTravelOption: FormattedBusScheduleDT;

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        this.bestOptionSubscription = this.busSelectionService.getBestTravelOption()
            .subscribe((option: BusScheduleDT) => this.bestTravelOption = formatListDateTime([option])[0]);
    }

    ngOnDestroy() {
        this.bestOptionSubscription.unsubscribe();
    }

}
