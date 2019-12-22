import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {

  getNextTrain(fromStation: string, toStation: string) {
    console.log(fromStation);
    console.log(toStation);
    return "3:15";
  }
}