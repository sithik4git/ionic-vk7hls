import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { ScheduleService } from './schedule.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  schedule = 'Angular';

  constructor(public navCtrl: NavController,
                private scheduleService: ScheduleService) {

  }

  getNextTrain(fromStation: string, toStation: string) {
    let nextTrainAt:string = this.scheduleService.getNextTrain(fromStation, toStation);
    let inNextMins:string = this.calculateInNextMins(nextTrainAt);
    this.schedule = this.formatScheduleMessage(nextTrainAt, inNextMins);
  }

  private calculateInNextMins(nextTrainAt:string){
    let inNextMins:string ="8";// calculate this with current time
    return inNextMins;
  }

  private formatScheduleMessage(nextTrainAt: string, inNextMins: string) {
    return "at " + nextTrainAt + " which is in next " + inNextMins + " min(s)";
  }

}
