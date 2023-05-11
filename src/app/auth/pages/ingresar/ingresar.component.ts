import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrNotificationService } from 'src/app/services/toastr-notification.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  private _patternEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  public loginForm: FormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this._patternEmail)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
  })
 
 
  public showPassword: boolean = false
 
 
  /**
  * 
  * @param {FormBuilder} _formBuilder
  * @param {Router} _router 
  * @param {ToastrNotificationService} _toastr 
  */
 
 
   constructor(private _formBuilder: FormBuilder, private _router: Router, private _toastr: ToastrNotificationService) { }
 
   ngOnInit(): void {
     this.loginForm.reset({
       email: 'sergio@usantoto.edu.co',
       password: 'admin'
   })
   }
 
   
     /**
      * @returns
      */
     get emailError(): string {
       const email = this.loginForm.get('email')
       if (email!.getError('required')) {
           return 'El email es obligatorio'
       } else if (email!.getError('pattern')) {
           return 'El email debe ser un correo válido'
       }
       return ''
   }
 
   /**
    * @param {string} field
    * @returns
    */
   public isInvalidField = (field: string) => {
       return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched && this.loginForm.get(field)?.invalid
   }
 
 
   public togglePassword = () => this.showPassword = !this.showPassword
 
 
   /**
    * @returns 
    */
   public login = () => {
       if (this.loginForm.invalid) {
           this.loginForm.markAllAsTouched()
           return
       }
       this._toastr.success(`Facultad de Ingenieria de Sistemas`, 'Bienvenido a Trabajos de Grado')
       this.loginForm.reset()
       this._router.navigate(['/dashboard'])
   }
}
