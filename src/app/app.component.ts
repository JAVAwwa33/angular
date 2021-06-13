import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tdForm?: any;

  constructor() {
  }

  ngOnInit(): void {
    this.tdForm = new FormGroup({
      userData: new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl()
        }
      ),
      age: new FormControl(),
      gender: new FormControl(),
      country: new FormControl('Poland')
    });
  }

  onSubmit(form: any): void {
    console.log(form.value)
  }
}
