import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Document;
  id: string;

  @ViewChild('name', { static: false }) nameRef: ElementRef;
  @ViewChild('description', { static: false }) descriptionRef: ElementRef;
  @ViewChild('url', { static: false }) urlRef: ElementRef;

  constructor( private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }


  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        //console.log("params from document EDIT", params)
        this.id = params.id;
        //console.log("documnet from document EDIT", this.documentService.getDocument(this.id));
        this.document = this.documentService.getDocument(this.id);
      }
    );
  }

  onUpdateDocument(){
    const newDocument = this.document
    newDocument.name = this.nameRef.nativeElement.value// || newDocument.name;
    newDocument.description = this.descriptionRef.nativeElement.value// || newDocument.description;
    newDocument.url = this.urlRef.nativeElement.value// || newDocument.url;

    //const editedDocument = new Message("12", subject, msgText, this.currentSender);

    this.documentService.updateDocument(this.document, newDocument)
    //this.messageService.addMessage(newMessage);
    //this.onClear();
    this.router.navigate(['/documents']);
  }

  onClear() {
    this.nameRef.nativeElement.value = "";
    this.descriptionRef.nativeElement.value = "";
    this.urlRef.nativeElement.value = "";
  }
}
