import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  post: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const httpHeader = {
      headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})
    };
    const body = {
      userId: 1,
      title: 'Mój tytul',
      body: 'moja tresc'
    };
    this.http.post('http://jsonplaceholder.typicode.com/posts', body, httpHeader)
      .subscribe(value => {
        this.post = value;
      });
  }
}
