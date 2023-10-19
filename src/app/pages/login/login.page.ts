import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Importa Validators correctamente
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Utiliza un arreglo para los validadores
    password: new FormControl('', [Validators.required]), // Utiliza un arreglo para los validadores
  });

  firebaseSvc: FirebaseService; // Define las propiedades correctamente
  utilsSvc: UtilsService; // Define las propiedades correctamente

  constructor(
    firebaseSvc: FirebaseService, 
    utilsSvc: UtilsService
  ) {
    this.firebaseSvc = firebaseSvc;
    this.utilsSvc = utilsSvc;
  }

  ngOnInit() {
  }

  submit(){
      }
    }

