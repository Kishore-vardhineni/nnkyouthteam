import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopulationService } from '../service/population.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public confirmationString: string;
  public noData: string;
  public loginForm: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder, private popService: PopulationService, private router: Router) {
    this.confirmationString = "Login the user successfully";
    this.noData = "Data not available because of empty records? please fill the login form.";
    this.submitted = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    debugger
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      alert(this.noData);
    } else {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
      let uname = this.loginForm.get('email').value;
      let pwd = this.loginForm.get('password').value;
      this.popService.isUserAuthenticated(uname, pwd).subscribe(authenticated => {
        if (authenticated) {
          let url = this.popService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate([url]);
        } else {
           alert("Invalid username and password. Please try again once");
        }
      });
    }
  }
}
