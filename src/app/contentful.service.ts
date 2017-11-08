import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import * as marked from 'marked';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  logContent(contentId: string) {
    this.client.getEntry(contentId).then(entry => {
      console.log(entry);
    });
  }

  getContent(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
