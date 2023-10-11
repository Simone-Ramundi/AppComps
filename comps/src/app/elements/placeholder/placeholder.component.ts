import { Component, OnInit, Input } from '@angular/core';
import * as trace_events from "trace_events";

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
