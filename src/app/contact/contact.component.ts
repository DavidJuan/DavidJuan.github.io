import { Component, OnInit } from "@angular/core";
import {
  faEnvelope, faPhone, faTimes,
  faMapMarkerAlt, IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactService } from "./contact.service";
import { Contact } from "../model/contact.model";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss", "./contact.component.responsivity.scss"]
})

export class ContactComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  location: string;

  faEnvelope: IconDefinition;
  faPhone: IconDefinition;
  faMapMarkerAlt: IconDefinition;
  faTimes: IconDefinition;

  isLoading: boolean = false;
  hasBeenSubmited: boolean = false;
  feedbackStatus: string;

  constructor(private contactService: ContactService) { }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl("",[
      Validators.required,
      Validators.pattern("^[A-Za-zÀ-ÖØ-öø-ÿ' .-]+$")
    ]),
    email: new FormControl("",[
      Validators.required,
      Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$")
    ]),
    message: new FormControl("",[
      Validators.required
    ]),
    // Honeypot: hidden from people, bots that fill it in are discarded by FormSubmit.
    honeypot: new FormControl("")
  });

  get senderEmail() {
    return this.contactForm.get("email")
  }

  get senderName() {
    return this.contactForm.get("name")
  }

  get senderMessage() {
    return this.contactForm.get("message")
  }

  get options() {
    return this.contactForm.get("options")
  }

  ngOnInit(): void {
    const personalData = environment.personal;
    this.name = personalData.name;
    this.email = personalData.email;
    this.phone = personalData.phone;
    this.location = personalData.location;

    this.faEnvelope = faEnvelope;
    this.faPhone = faPhone;
    this.faMapMarkerAlt = faMapMarkerAlt;
    this.faTimes = faTimes;
  }

  saveContact(contact: Contact) {
    const subject = $localize`:contact@@mailSubject:New message from davidjuan.github.io`;
    this.contactService.sendContact(contact, `${subject} - ${contact.name}`).subscribe({
      next: () => this.displayUserInterfaceMessage(true),
      error: () => this.displayUserInterfaceMessage(false)
    });
  }

  displayUserInterfaceMessage(hasBeenSuccessfuly: boolean) {
    this.isLoading = false;
    this.hasBeenSubmited = true;
    this.feedbackStatus = hasBeenSuccessfuly? "success" : "error";
    // Keep what the visitor typed when sending fails, so the message is not lost.
    if (hasBeenSuccessfuly) {
      this.contactForm.reset();
    }
  }

  closeFeedbackMessage() {
    this.hasBeenSubmited = false;
    this.feedbackStatus = "";
  }

  onSubmit(contactForm) {
    if (this.contactForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;

    const contactValues: Contact = {
      name: this.senderName.value,
      email: this.senderEmail.value,
      message: this.senderMessage.value,
      honeypot: this.contactForm.get("honeypot").value,
      date: new Date()
    } as Contact;

    this.saveContact(contactValues);
  }
}
