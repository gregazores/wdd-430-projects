import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  constructor() { }

    // We are outputting a new EventEmitter with type contact to be listened from Parent Component
    @Output() selectedDocumentEvent = new EventEmitter<Document>();

    documents: Document[] = [
      new Document('1', 'Greg1', 'Greggy document 1', '../../assets/images/jacksonk1.jpg', null),
      new Document('2', 'Greg2', 'Greggy document 2', '../../assets/images/jacksonk2.jpg', null),
      new Document('3', 'Greg3', 'Greggy document 3', '../../assets/images/jacksonk3.jpg', null),
      new Document('4', 'Greg4', 'Greggy document 4', '../../assets/images/jacksonk4.jpg', null),
    ];

  ngOnInit() {
    console.log("cms-document-list", this.documents)
  }

  onSelectedDocument(documentEl: Document) {
    // here we are calling the event emitter created from above with a paramater of the
    // selected contact from contact-list html
    console.log("I was clicked! onSelectedDocument", documentEl)
    console.log("I was clicked! selectedDocumentEvent", this.selectedDocumentEvent)
    this.selectedDocumentEvent.emit(documentEl);
  }

}
