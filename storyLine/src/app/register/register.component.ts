import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SnackBarService } from '../shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private snackBarService: SnackBarService) { }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [ Validators.required ]),
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'password': new FormControl(null, [ Validators.required ])
    });
  }

  // onSubmit() {
  //   this.authService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password)
  //     .subscribe(res => {
  //       console.log(res)
  //       // this.authService.clearUser();
  //       // this.navigateToLogin()
  //     }, error => {
  //       console.log(error)
  //       // if (error.statusText === 'Created')
  //       //   this.handleError("An account with this username already exists.")
  //       // else
  //       //   console.log(error)
  //     })
  // }

  onSubmit() {
    this.authService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password)
      .then(res => {
        if (res.status == 200) {
          this.navigateToLogin()
        } else { //error
          console.log(res.statusText)
          this.handleError(res.statusText)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleError(error) {
    this.snackBarService.onOpenSnackBar.next({ message: error, isError: true })
  }

  navigateToLogin() {
    this.router.navigate(['./login'])
  }

}
