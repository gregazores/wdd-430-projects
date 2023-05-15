import { Component, OnInit } from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor() { }

  ngOnInit() {
    this.test3()
  }

  test3() {
    console.log("cms-documents", this.selectedDocument)
  }

}
