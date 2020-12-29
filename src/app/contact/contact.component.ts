// Components
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { ContactService } from './contact.service';
// import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  public address: string;
  public contact: string;
  public contactData: any;
  public contactUs: any;
  public email: string;
  public mailUs: string;
  public phone: number;
  public visitUs: string;
  public submitted: boolean;

  constructor( private contactService: ContactService, private formBuilder: FormBuilder ) { 
    this.contact = '';
    this.contactUs = '';
    this.contactData = {};
    this.email = '';
    this.mailUs = '';
    this.phone = 0;
   // translateService.setDefaultLang('en');
    this.visitUs = '';
    this.submitted = false;
  }

 public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      message: ['', [Validators.required, Validators.maxLength(50)]]
    })

    this.getContactData();
  }

  get f() {
    return this.registerForm.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log("Register data", this.registerForm);

    alert("Success");
  }

  public getContactData() {
    this.contactService.contactData().subscribe(data => {
      this.contactData = data;
      if (!this.contactData) {
        console.log("contact data not available");
      } else {
        this.contactData.forEach(element => {
          this.address = element.address;
          this.contact = element.contact;
          this.contactUs = element.contactUs;
          this.email = element.email;
          this.mailUs = element.mailUs;
          this.phone = element.phone;
          this.visitUs = element.visitUs;
        });
      }
    })
  }

  // switchLanguage(language: string) {
  //   this.translateService.use(language);
  // }
}
