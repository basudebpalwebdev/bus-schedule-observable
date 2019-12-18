# Bus Schedule (Observable implementation)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Problem Statement: 
There are two bus companies A and B which offer services from city C to D (one way only). Your task is to suggest the best bus company that can make you reach your destination faster.
Design a website that will take a file which has the bus timetable as input and display a table with the bus timings sorted according to departure time and you also have to suggest the user the next best bus available to travel to D depending upon the current system time.

### Conditions:
1. Travel shouldn’t exceed more than 90 mins. If more ignore the bus
2. Always prefer B over A if the busses start at the same time
3. Pick the fastest bus company to reach the destination
4. Prefer the bus that reach the destination with less journey time if they start with a difference of 15-20 mins
5. Matching the above conditions chose the timings of the bus and print out its timings and the company name in the console
6. Current system time should be your current time.
7. Website should be attractive and responsive.  You are allowed to use third party libraries.


### Example Time table file(can be a text or csv)

| Company | Departure from C | Arrival at D |
|---------|------------------|--------------|
|    A    |    12:35 pm      |    1:35 pm   |
|    B    |    2:00 am       |    2:45 pm   |
|    A    |    2:00 am       |    3:00 pm   |
|    B    |    8:00 am       |    9:45 am   |
|    B    |    9:10 am       |   10:15 am   |
|    A    |    9:20 am       |   10:10 am   |
|    B    |    5:00 pm       |    6:00 pm   |

------------------------------------------------------------------------------------------------

Note: I have used a JSON file as datasource and have added more data to it.
