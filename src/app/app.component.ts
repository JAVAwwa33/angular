import {Component, OnInit} from '@angular/core';
import {FilmsService} from "./services/films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  date: Date = new Date();

  topMovies?: any[];
  bottomMovies?: any[];

  constructor(private service: FilmsService) {
  }

  ngOnInit(): void {
    this.topMovies = this.service.getTopMovies();
    this.bottomMovies = this.service.getBottomMovies();
  }
}
