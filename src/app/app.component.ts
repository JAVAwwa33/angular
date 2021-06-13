import {Component, OnInit, ViewChild} from '@angular/core';
import {FilmsService} from "./services/films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("tdForm")
  tdForm: any;

  constructor(private service: FilmsService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.tdForm.value)
  }
}
