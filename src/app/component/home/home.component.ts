import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, timer, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  radarData : any;

  constructor(private httpClient: HttpClient) { }

  radorDatalis:any;

  ngOnInit() {

    const obs = interval(5000)
    obs.subscribe((d) => {
          console.log("printing on every 5sec");

          let result = this.httpClient.get("http://localhost:9191/api/v1/fetchData");
          result.subscribe((data) => this.radorDatalis=data);

    });
  }


  
}
