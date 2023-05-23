import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  //moving the event emitter from DocumentListComponent class to here
  documentSelectedEvent = new EventEmitter<Document>();

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

}
