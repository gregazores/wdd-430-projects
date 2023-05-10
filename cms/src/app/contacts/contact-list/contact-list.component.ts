import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  constructor() { }

  // We are outputting a new EventEmitter with type contact to be listened from Parent Component
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', null),
    new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', null),
  ];



  ngOnInit() {}

  onSelected(contactEl: Contact) {
    // here we are calling the event emitter created from above with a paramater of the
    // selected contact from contact-list html
    this.selectedContactEvent.emit(contactEl);
  }


}
