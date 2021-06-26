import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
      this.post = value;
    })
  }
}
