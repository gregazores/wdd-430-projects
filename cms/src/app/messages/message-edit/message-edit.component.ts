import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender: string = "Gregggy Azores";
  //subjectRef and msgTextRef are local variables of type ElementRef
  @ViewChild('subject', { static: false }) subjectRef: ElementRef;
  @ViewChild('msgText', { static: false }) msgTextRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() {}

  onSendMessage(){
    //Get the value stored in the subject input element
    const subject = this.subjectRef.nativeElement.value;
    //Get the value stored in the msgText input element
    const msgText = this.msgTextRef.nativeElement.value;

    //Create a new Message object
    //Assign a hardcoded number to the id property of the new Message object
    //Assign the value of the currentSender class variable to the sender property of the new Message object
    //Assign the values retrieved from the subject and msgText input elements to the corresponding properties of the new Message object
    const newMessage = new Message("12", subject, msgText, this.currentSender);

    //Call the addMessageEvent emitter’s emit() method and pass it the new Message object just created
    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  //At the bottom of the class, implement the onClear() method.
  //This method only needs to assign a blank value to the subject and msgText input elements in the form.
  onClear() {
    this.subjectRef.nativeElement.value = "";
    this.msgTextRef.nativeElement.value = "";
  }

  ngOnInit() {}

}
