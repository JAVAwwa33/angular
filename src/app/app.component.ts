import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Post} from "./models/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  signupForm: any;

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      id: [''],
      title: [''],
      userId: ['']
    });
  }

  ngOnInit(): void {
    this.loadValues();
  }


  loadValues() : void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1'
    )
      .subscribe(
        (data) => {
          const post = data as Post;
          this.signupForm.controls.id.patchValue(post.id);
          this.signupForm.controls.title.patchValue(post.title);
          this.signupForm.controls.userId.patchValue(post.userId);
        });
  }
}
