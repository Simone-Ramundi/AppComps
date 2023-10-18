import {Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {

  }
/* HEY SIMON -.- ! DO NOT FORGET TO IMPLEMENT THE NGONINIT */
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove()
  }
  onCloseClick(){
    this.close.emit();
  }
}
