import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  url = 'http://10.132.56.83:8765/iv2/api/devices?tree=1&view=1';

  constructor(private http: Http) {}

  ngOnInit() {
    let polling$ = Observable.timer(0, 1000);

    let data$ = this.http
      .get(this.url)
      .map(data => data.json());

    polling$.mergeMapTo(data$).subscribe(data => {
      console.log(data);
    });
  }
}
