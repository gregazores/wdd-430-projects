import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //Create a new EventEmitter of the Message[] data type and assign it to a
  //new class variable named messageChangedEvent at the top of the MessageService class.
  messageChangedEvent = new EventEmitter<Message[]>();

  //see contacts and documents for explanation
  messages: Message [] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    //see contact.service.ts for explanation
    //with sorting
    //return this.messages.sort((a, b) => a.subject > b.subject ? 1 : b.subject > a.subject ? -1 : 0).slice();

    //no sorting
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    //see contact.service.ts for explanation
    return this.messages.find(( message ) => message.id === id );
  }

  addMessage(messageFromEdit: Message) {
    this.messages.push(messageFromEdit);

    //after pushing the new message we call on the messageChangedEvent event emitter
    // to emit the copy of the new messages hence we are using the method slice to create that copy
    this.messageChangedEvent.emit(this.messages.slice());
  }
}
