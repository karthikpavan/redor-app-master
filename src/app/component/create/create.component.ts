import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, timer, interval } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  radorTypesDetails:any;

  ngOnInit() {

    const obs = interval(5000)
    obs.subscribe((d) => {
          console.log("printing type's on every 5sec");

          let result = this.httpClient.get("http://localhost:9191/api/v1/fetchData");
          result.subscribe((data) => this.radorTypesDetails=data);

    });
  }

}
