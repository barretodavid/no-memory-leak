import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h1>Array Length: {{ (myArray$ | async)?.length }}</h1>
  `,
})
export class AppComponent implements OnInit {
  myArray$: Observable<any>;
  url = 'http://localhost:8765/iv2/api/devices?tree=1&view=1';

  constructor(private http: Http) {}

  ngOnInit() {
    let polling$ = Observable.timer(0, 1000);

    let data$ = this.http
      .get(this.url)
      .map(data => data.json());

    this.myArray$ = polling$.mergeMapTo(data$);
  }
}
