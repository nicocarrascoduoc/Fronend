import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Utiliza un arreglo para los validadores
    
    
  });

  constructor() { }

  ngOnInit() {
  }

  submit(){
    
  }
}
