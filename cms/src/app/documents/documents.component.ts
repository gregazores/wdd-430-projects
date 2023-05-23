import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  //we will listen to the documentSelectedEvent event listener here via subscribe
  constructor( private documentService: DocumentService ) { }

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe((documentFromEvent: Document) => {
      this.selectedDocument = documentFromEvent;
    });
  };


}
