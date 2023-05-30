import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  //see contact-list.component.ts for explanation
  documents: Document[] = []

  //see contact-list.component.ts for explanation
  constructor( private documentService: DocumentService ) {
    this.documents = this.documentService.getDocuments();
   }

    // We are outputting a new EventEmitter with type contact to be listened from Parent Component
    // see contact-list.component.ts for explanation why we are deleting below
    // basically we will move this event emitter to document.service
    //@Output() selectedDocumentEvent = new EventEmitter<Document>();

    // see contact-list.component.ts for explanation why we are deleting below
    // documents: Document[] = [
    //   new Document('1', 'Greg1', 'Greggy document 1', '../../assets/images/jacksonk1.jpg', null),
    //   new Document('2', 'Greg2', 'Greggy document 2', '../../assets/images/jacksonk2.jpg', null),
    //   new Document('3', 'Greg3', 'Greggy document 3', '../../assets/images/jacksonk3.jpg', null),
    //   new Document('4', 'Greg4', 'Greggy document 4', '../../assets/images/jacksonk4.jpg', null),
    // ];


  ngOnInit() {
    // see contact-list.component.ts for explanation why we are deleting below
    //console.log("cms-document-list", this.documents)

    //with DocumentService being injected in this class, we can now get the data from MOCKDOCUMENTS
    //using getDocuments() and save the results to this.documents
    //moving code below to constructor
    //this.documents = this.documentService.getDocuments();


    //The DocumentListComponent then needs to subscribe to the documentChangedEvent event
    //and listen for changes to the document list in the DocumentService.
    // to do this: subscribe to the documentChangedEvent emitter from document service
    //then assign the documents array passed into the function to the
    //documents property in the DocumentListComponent class.
    this.documentService.documentChangedEvent.subscribe((documentsArray: Document[]) => {
      this.documents = documentsArray;
    });
  }

  //We can eliminate most of this code by using routing.
  //This functionality can be replaced by adding a [routerLink] directive to the
  //DocumentItemComponent to link to the DocumentDetailComponent.
  // onSelectedDocument(documentEl: Document) {
  //   // here we are calling the event emitter created from above with a paramater of the
  //   // selected contact from contact-list html
  //   //this.selectedDocumentEvent.emit(documentEl);

  //   //since we have already injected the DocumentService class, we can now access the event emitter in there the documentSelectedEvent
  //   this.documentService.documentSelectedEvent.emit(documentEl);
  // }

}
