import { Component, OnInit } from '@angular/core';
import { BusSelectionService } from 'src/app/services';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(private busSelectionService: BusSelectionService) { }

    ngOnInit() {
        console.log(this.busSelectionService.startListAfterCurrentTime());
        console.log(this.busSelectionService.getBestTravelOption());
    }

}
