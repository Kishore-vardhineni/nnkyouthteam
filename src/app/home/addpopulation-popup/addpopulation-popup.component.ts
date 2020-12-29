import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// Angular Material
import { MatDialogRef } from '@angular/material/dialog';
import { CustomErrorStateMatcher } from '../../CustomErrorStateMatcherComponent';

// Services
import { PopulationService } from 'src/app/service/population.service';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addpopulation-popup',
  templateUrl: './addpopulation-popup.component.html',
  styleUrls: ['./addpopulation-popup.component.scss']
})
export class AddpopulationPopupComponent implements OnInit {
  public addPopulationFormGroup: FormGroup;
  public allPopulation: any;
  esMatcher = new CustomErrorStateMatcher();  

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddpopulationPopupComponent>,
    private popService: PopulationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.allPopulation = {};
  }

  public ngOnInit(): void {
    debugger
    this.initializeForm();
    this.getPopulationData();
  }

  userRole: any = [
    { id: 1, role: 'admin' },
    { id: 2, role: 'user' },
  ];

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  public initializeForm() {
    this.addPopulationFormGroup = this.formBuilder.group({
      id: uuid(),
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      Email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$.@$!%*?&])[A-Za-z\d$@$!.%*?&].{8,}')]],
      date: ['', Validators.required],
      mobileNumber: ['', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      village: ['', Validators.required],
      address: ['',[Validators.required, Validators.maxLength(50)]],
      age: ['', Validators.required],
      gender: ['male', Validators.required],
      vote: ['yes', Validators.required],
      role: ['', Validators.required]
    });
  }

  public getPopulationData() {
    this.allPopulation = this.popService.getAllPopulation();
  }

  public addPopulationData(population) {
    debugger
    if (!population) {
      return null;
    } else {
      let newPopulation = {
        id: uuid(),
        firstName: population.firstName,
        lastName: population.lastName,
        password: population.password,
        gender: population.gender,
        age: population.age,
        date: population.date,
        mobileNumber: population.mobileNumber,
        email: population.email,
        village: population.village,
        address: population.address,
        role: population.role,
        vote: population.vote
      }
      this.allPopulation.push(newPopulation);
      this.popService.addPopulation(newPopulation);
      this.router.navigate(['home'], { relativeTo: this.route });
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
