export function timeSeperator(timeString: string): { hour: number, minute: number } {
    const formattedTimeString: string = timeString.replace(' ', '').replace('.', '').toUpperCase();
    if (formattedTimeString.length > 4
        && (formattedTimeString.includes('AM') || formattedTimeString.includes('PM'))
        && formattedTimeString.includes(':')
    ) {
        const beforeNoon: boolean = formattedTimeString.includes('AM');
        const currentTimeString: string = beforeNoon ? formattedTimeString.replace('AM', '') : formattedTimeString.replace('PM', '');
        let currentTimeHours: number = Number.parseInt(currentTimeString.split(':')[0], 10);
        const currentTimeMinutes: number = Number.parseInt(currentTimeString.split(':')[1], 10);
        if (beforeNoon && currentTimeHours === 12) {
            currentTimeHours = 0;
        } else if (!beforeNoon && currentTimeHours !== 12) {
            currentTimeHours += 12;
        }
        return { hour: currentTimeHours, minute: currentTimeMinutes };
    } else {
        throw new Error('[ERROR][TimeSeparator] : Invalid argument format');
    }
}
