import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopulationService } from '../service/population.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public allPopulation: any;
  public confirmationString: string;
  public emptyFormValue: any;
  public noData: string;
  public populationAdded: boolean;
  public registrationForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder, public popService: PopulationService) {
    this.allPopulation = [];
    this.confirmationString = "Register Added Successfully";
    this.emptyFormValue = "";
    this.noData = "Data not available because of empty records? please fill the form.";
    this.populationAdded = false;
    this.submitted = false;
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      age: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['male', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!.%*?&].{8,}')]],
      village: ['', [Validators.required]],
      vote: ['yes', [Validators.required]]
    });
  }

  get f() { return this.registrationForm.controls; }

  onSubmit(registerValues) {
    debugger
    this.submitted = true;
    if (this.registrationForm.invalid) {
     // alert(this.noData);
     return null;
    } else {
      let newPopulation = {
        id: uuid(),
        age: registerValues.age,
        address: registerValues.address,
        email: registerValues.email,
        date: registerValues.date,
        firstName: registerValues.firstName,
        gender: registerValues.gender,
        lastName: registerValues.lastName,
        mobileNumber: registerValues.mobileNumber,
        password: registerValues.password,
        village: registerValues.village,
        vote: registerValues.vote
      }
      this.allPopulation.push(newPopulation);
      this.popService.addPopulation(newPopulation);
      // this.populationAdded = true;
      alert(this.confirmationString);
    }
  }

}
