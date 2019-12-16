import { BusScheduleDT, FormattedBusScheduleDT } from '../datatypes';

function formatDateTime(date: Date): string {
    const timeOptions = {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
    };
    const newDateTimeFormat = `${date.toDateString()}, ${date.toLocaleTimeString('en-US', timeOptions)}`;
    return newDateTimeFormat;
}

export function formatListDateTime(list: BusScheduleDT[]): FormattedBusScheduleDT[] {

    const formattedBusScheduleDTList: FormattedBusScheduleDT[] = new Array<FormattedBusScheduleDT>();
    list.map((item) => {
        const formattedBusScheduleDT: FormattedBusScheduleDT = new FormattedBusScheduleDT();
        formattedBusScheduleDT.companyName = item.companyName;
        formattedBusScheduleDT.arrivalAtD = formatDateTime(item.arrivalAtD);
        formattedBusScheduleDT.departureFromC = formatDateTime(item.departureFromC);
        formattedBusScheduleDTList.push(formattedBusScheduleDT);
    });
    return formattedBusScheduleDTList;
}
