import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Simone', age: '24', job:'Developer', employed: true },
    { name: 'Mattia', age: '30', job:'Developer', employed: true},
    { name: 'Carlo', age: '25', job:'Developer', employed: true}
  ];
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
    { key: 'employed', label: 'Has a job?'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
