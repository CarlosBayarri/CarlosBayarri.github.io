import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public info: InfoPage = {};
  loaded = false;
  team: any = [];

  constructor(public http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
   }

   private loadInfo() {
     this.http.get('assets/data/data-page.json').subscribe((res: InfoPage) => {
      this.loaded = true;
      this.info = res;
     });
   }
   private loadTeam() {
    this.http.get('https://portfolio-angular-902a9.firebaseio.com/team.json').subscribe((res: any) => {
     this.loaded = true;
     this.team = res;
    });
  }

}
