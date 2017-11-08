import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lesson$: Observable<any>;
  title = 'Hi';

  constructor(private contentful: ContentfulService) {}

  ngOnInit(): void {
    this.contentful.logContent('1peQ4XhfyMsQU8iUCmqc0U');
    this.lesson$ = this.contentful.getContent('1peQ4XhfyMsQU8iUCmqc0U')
  }
}
