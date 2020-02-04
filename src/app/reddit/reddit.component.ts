import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';


@Component({
  selector: 'reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {
 
  public awws : [];

  constructor(private _service: ApiService ) {
  }
  
  ngOnInit() {
    this._service.getAwws()
      .subscribe((data:any) => this.awws = data.data.children);

  }
}
