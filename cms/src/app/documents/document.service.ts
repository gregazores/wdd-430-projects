import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  //moving the event emitter from DocumentListComponent class to here
  documentSelectedEvent = new EventEmitter<Document>();

  //this will emit an event whenever a document is deleted from document detail's delete button
  //and pass an array of documents of Document type
  documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document [] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    //see contact.service.ts for explanation
    return this.documents.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0).slice();
  }

  getDocument(id: string): Document {
    //see contact.service.ts for explanation
    return this.documents.find(( document ) => document.id === id );
  }


  //Create a method in the DocumentService to delete the document from its documents list.
  //This method first validates to see if an actual document was passed to the method.
  //The method is aborted if no document was passed.
  //It then calls the indexOf() array method to get the index position of the document in the document list.
  //If the index is negative, the document was not found and the method is aborted.
  //The splice() array method is then called to remove the document at the specified index position from the array.
  deleteDocument(document: Document) {
    if (!document) {
       return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
       return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
 }

}
