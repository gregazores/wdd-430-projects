import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  //moving the event emitter from DocumentListComponent class to here
  //DocumentsComponent is subscribing this event emitter
  //and document list is using this event emitter to transmit data to DocumentsComponent
  //documentSelectedEvent = new EventEmitter<Document>();
  //we will comment this out since router will handle the selection of document detail

  //this will replace eventEmitters in sending data
  //Define a new class variable called documentListChangedEvent to the top of the DocumentServiceClass.
  //Create and assign a new Subject object whose datatype is an array of Document objects to the variable.
  documentListChangedEvent = new Subject<Document[]>();

  //Create a new class variable called maxDocumentId of the number data type
  maxDocumentId: number;

  //this will emit an event whenever a document is deleted from document detail's delete button
  //and pass an array of documents of Document type
  //documentChangedEvent = new EventEmitter<Document[]>();
  //commenting out the above code for now since we will use the new Subject observable

  documents: Document [] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;

    //Inside the constructor() method of the DocumentService class call the
    //getMaxId() function and assign the value returned to the maxDocumentId class variable.
    this.maxDocumentId = this.getMaxId();
    //this.addDocument(null)
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
    //we will need to change this to function with the newly created Subject observable
    //this.documentChangedEvent.emit(this.documents.slice());
    this.documentListChangedEvent.next(this.documents.slice());
 }

  //getMaxId(): Number with this config function is expected to return a value of type Number
  getMaxId(): number {
      //maxId = 0
      let maxId =  0;

      //for each document in the documents list
      this.documents.forEach((document) => {
        // currentId = convert document.id into a number
        const currentId = +document.id;
        //if currentId > maxId then
        if(currentId > maxId) {
          //maxId = currentId
          maxId = currentId;
          //endIf
        }
      })
      //endFor

    //console.log('maxId', maxId)
    return maxId;
  }

 //Create the addDocument() function in the DocumentService class.
 addDocument(newDocument: Document) {
   if(!newDocument) {
    //console.log("new document null")
    //console.log("this.maxDocumentId", typeof this.maxDocumentId)
    return;
   }

   //this.maxDocumentId++
   this.maxDocumentId++;
   //newDocument.id = this.maxDocumentId
   newDocument.id = String(this.maxDocumentId);
   //push newDocument onto the documents list
   this.documents.push(newDocument)
   //documentsListClone = documents.slice()
   //const documentsListClone = this.documents.slice()
   this.documentListChangedEvent.next(this.documents.slice())
 }

 updateDocument(originalDocument: Document, newDocument: Document) {
   if(!originalDocument || !newDocument) {
      return
   }

   let pos = this.documents.indexOf(originalDocument)
   if(pos < 0) {
      return
   }

   newDocument.id = originalDocument.id;
   this.documents[pos] = newDocument;
   //const documentsListClone = this.documents.slice()
   this.documentListChangedEvent.next(this.documents.slice())

 }


}
