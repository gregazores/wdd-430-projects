import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // we will no longer need these below for angular routing
  // @Output() selectedFeatureEvent = new EventEmitter<string>();
  //selectedEvent is just a string describing which button is clicked -Documents, Messages, Contacts
  // onSelected(selectedEvent: string) {
  //   this.selectedFeatureEvent.emit(selectedEvent);
  // }

}
