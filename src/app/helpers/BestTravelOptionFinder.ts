import { BusSchedule } from './../datatypes/BusScheduleDT';

export function bestTravelOptionFinder(rearrangedTimeTable: BusSchedule[]): BusSchedule {
    let bestTravelOption: BusSchedule = new BusSchedule();
    const travelTimeLimit = 5400000; // 90 minutes

    const filteredTimeTable: BusSchedule[] = rearrangedTimeTable
        .filter(
            // Reject if travel time is more than 90 minutes
            (item: BusSchedule) => {
                return item.departureFromC.getTime() - item.arrivalAtD.getTime() <= travelTimeLimit;
            }
        )
        .filter((item: BusSchedule, index: number, itemList: BusSchedule[]) => {
            // Pick out the buses which are within 20 minutes of the departure time of the next bus
            return item.departureFromC.getTime() - itemList[0].departureFromC.getTime() <= 1200000;
        });

    bestTravelOption = filteredTimeTable[0];

    filteredTimeTable.map((item: BusSchedule) => {
        // Best travel option according to travel time only
        if (bestTravelOption.arrivalAtD.getTime() - bestTravelOption.departureFromC.getTime() >
            item.arrivalAtD.getTime() - item.departureFromC.getTime()) {
            bestTravelOption = item;
        }
    });

    filteredTimeTable.map((item: BusSchedule) => {
        // Select "B" over "A" in case departure time is same for both
        if (item.departureFromC.getTime() === bestTravelOption.departureFromC.getTime()) {
            if (item.companyName === 'B' && bestTravelOption.companyName === 'A') {
                bestTravelOption = item;
            }
        }
    });

    return bestTravelOption;
}
