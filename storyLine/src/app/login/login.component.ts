import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SnackBarService } from '../shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBarService: SnackBarService) { }

  ngOnInit() {
    if (this.authService.isAuth())
      this.router.navigate(['./home'])
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [ Validators.required ])
    });
  }

  onSubmit() {
    if (this.loginForm.status === "INVALID") {
      this.handleError("Invalid username or password");
      return;
    }
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
      .then(result => {
        console.log(result)
        if (result) {
          this.authService.setUser(result.username, result.email)
          this.router.navigate(['./home'])
        }
        else {
          this.handleError("Invalid username or password")
        }
      })
      .catch(error => console.log(error))
      // .subscribe(res => {
      //   if (res && !res[0]['valid']) {
      //     this.handleError("Invalid username or password");
      //     return;
      //   }
      //   if (res && res[0]['valid']) {
      //     this.authService.setUser(res[0]['username'], res[0]['email'])
      //     this.router.navigate(['./home'])
      //   } else {
      //     this.handleError("Invalid username or password")
      //   }
      // }, error => this.handleError(error))
  }

  handleError(error: string) {
    this.snackBarService.onOpenSnackBar.next({ message: error, isError: true })
  }

  navigateToRegister() {
    this.router.navigate(['./register'])
  }

}
