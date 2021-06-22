import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tdForm?: any;
  submitted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.tdForm = new FormGroup({
      userData: new FormGroup({
          firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
          lastName: new FormControl()
        }
      ),
      age: new FormControl(),
      gender: new FormControl(),
      country: new FormControl('Poland')
    });
  }

  get f() {return this.tdForm.controls}

  onSubmit() {
    this.submitted = true;
    if (this.tdForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }
}
