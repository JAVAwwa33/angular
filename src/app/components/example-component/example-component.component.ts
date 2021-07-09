import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit {
  argument!: number;

  constructor() { }

  ngOnInit(): void {
    this.argument = 3;
  }

}
