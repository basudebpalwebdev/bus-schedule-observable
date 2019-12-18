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

function formatListDateTime(list: BusScheduleDT[]): FormattedBusScheduleDT[] {
    return list.map((item) => formatSingleDateTime(item));
}
function formatSingleDateTime(item: BusScheduleDT): FormattedBusScheduleDT {
    const formattedBusScheduleDT: FormattedBusScheduleDT = new FormattedBusScheduleDT();
    formattedBusScheduleDT.companyName = item.companyName;
    formattedBusScheduleDT.arrivalAtD = formatDateTime(item.arrivalAtD);
    formattedBusScheduleDT.departureFromC = formatDateTime(item.departureFromC);
    return formattedBusScheduleDT;
}

export {
    formatListDateTime,
    formatSingleDateTime
};
