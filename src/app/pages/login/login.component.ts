import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { Router } from '@angular/router';
import { Bank } from '../../models/model.interface';
import { User } from '../../models/user.interface';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticated = false;

  @Output() sendRequest = new EventEmitter<any>();

  public selectedBank: Bank = {id: 0, name: ''};
  public banks: Bank[] = [];
  public user: User[] = [];


  // The form group defines the fields used in the form
  form = new FormGroup({
    listBancos: new FormControl(this.banks),
    email: new FormControl(''),
    password: new FormControl('')
  });

  // Inject the router so we can navigate after a successful login
  constructor(private readonly router: Router, readonly authService: AuthService) {}



  ngOnInit(): void {
    this.banks = this.authService.getBank();
  }


  public submit() {
    this.authService.dataLogin(this.form.value);
    this.isAuthenticated = this.authService.isAuthenticated();
    if(this.isAuthenticated === true){
      this.router.navigate(['/usuarios']);
    }
    else{
      alert('Usuario o contraseña incorrectos');
    }
  }



}
