import { BusScheduleDT } from './../datatypes/';

export function bestTravelOptionFinder(rearrangedTimeTable: BusScheduleDT[]): BusScheduleDT {
    let bestTravelOption: BusScheduleDT = new BusScheduleDT();
    const travelTimeLimit = 5400000; // 90 minutes

    const filteredTimeTable: BusScheduleDT[] = rearrangedTimeTable
        .filter(
            // Reject if travel time is more than 90 minutes
            (item: BusScheduleDT) => {
                return item.departureFromC.getTime() - item.arrivalAtD.getTime() <= travelTimeLimit;
            }
        )
        .filter((item: BusScheduleDT, index: number, itemList: BusScheduleDT[]) => {
            // Pick out the buses which are within 20 minutes of the departure time of the next bus
            return item.departureFromC.getTime() - itemList[0].departureFromC.getTime() <= 1200000;
        });

    bestTravelOption = filteredTimeTable[0];

    filteredTimeTable.map((item: BusScheduleDT) => {
        // Best travel option according to travel time only
        if (bestTravelOption.arrivalAtD.getTime() - bestTravelOption.departureFromC.getTime() >
            item.arrivalAtD.getTime() - item.departureFromC.getTime()) {
            bestTravelOption = item;
        }
    });

    filteredTimeTable.map((item: BusScheduleDT) => {
        // Select "B" over "A" in case departure time is same for both
        if (item.departureFromC.getTime() === bestTravelOption.departureFromC.getTime()) {
            if (item.companyName === 'B' && bestTravelOption.companyName === 'A') {
                bestTravelOption = item;
            }
        }
    });

    return bestTravelOption;
}
