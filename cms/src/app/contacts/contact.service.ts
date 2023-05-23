import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactSelectedEvent = new EventEmitter<Contact>();

  //creating a class variable named contacts whose data type is an array of contact objects.
  //Initialize the variable with an empty array ([])
  contacts: Contact [] = [];

  //Inside the constructor method, assign the value of the MOCKCONTACTS variable defined in the MOCKCONTACTS.ts file to the contacts class variable in the ContactService class.
  constructor() {
    this.contacts = MOCKCONTACTS;
  }



  //Adding a new method with the following signature: getContacts(): Contact[]
  //A function signature (or type signature, or method signature) defines input and output of functions or methods.
  getContacts(): Contact[] {
    //below is from the manual
    //return this.contacts.slice();

    //we can insert a sort method to arrange the search results
    // the compare function works this way:
    //If a.name is greater than b.name the result is positive, a is sorted before b.
    // If b.name is greater than a.name the result is negative, b is sorted before a.
    //If the result is 0, no changes are done with the sort order of the two values.
    return this.contacts.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0).slice();
  }

  //a method to find a specific Contact object in the contacts array based on the id
  getContact(id: string): Contact {
    // this is the algorithm
    // FOR each contact in the contacts list
    // IF contact.id equals the id THEN
    // RETURN contact
    // ENDIF
    // ENDFOR
    // RETURN null

    //simple solution using the javascript method find
    return this.contacts.find(( contact ) => contact.id === id );
   }
}
