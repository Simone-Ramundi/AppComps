import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false
  items= [
    {title:'Why is this sky blue?', content:'The sky is blue because it is'},
    {title:'Why is this sky blue?', content:'The sky is blue because it is'},
    {title:'Why is this sky blue?', content:'The sky is blue because it is'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.modalOpen = !this.modalOpen
  }
  protected readonly onclick = onclick;
}
