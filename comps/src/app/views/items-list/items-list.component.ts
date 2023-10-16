import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Input() items: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
