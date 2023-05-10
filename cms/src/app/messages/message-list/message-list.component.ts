import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {




  constructor() {}

  messages: Message[] = [
    new Message("1", "Test 1", "This is my first message", "Clariza Dalo"),
    new Message("2", "Test 2", "This is my second message", "Amor Dalo"),
    new Message("3", "Test 3", "This is my third message", "Isshy Dalo")
  ];

// contacts: Contact[] = [
//   new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', null),
//   new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', null),
// ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

  ngOnInit() {}

}
