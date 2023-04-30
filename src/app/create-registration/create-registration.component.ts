import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit{
  public packages =["Monthly", "Quarterly", "Yearly"]
  public cargos =["Tutor", "interesado en la información"]
  public generos=["Femenino", "Masculino"]
  public redes:string[]=["Facebook", "Instagram", "TikTok"];


  public registroForm!:FormGroup;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.registroForm=this.fb.group({
      PrimerNombre:[''],
      apellido:[''],
      celular: [''],
      Residencia:[''],
      cargo: [''],
      estrato:[''],
      hijos: [''],
      trainerOpt:[''],
      generos:[''],
      package: [''],
      red: [''],

    });
  }
  cargar(){
    console.log(this.registroForm.value)
  }

}
