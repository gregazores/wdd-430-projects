import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DocumentService } from 'src/app/documents/document.service';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  id: string;

  constructor( private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        // console.log("params from document EDIT", params)
        // console.log("route from document EDIT", this.route)
        this.id = params.id;
        //console.log("documnet from document EDIT", this.documentService.getDocument(this.id));
        //console.log("params from document EDIT", params);
        this.contact = this.contactService.getContact(this.id);
      }
    );

  }

  onSubmit(dataFromTheForm: NgForm) {
    console.log(dataFromTheForm)
  }

}
