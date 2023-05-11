import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../../services/validator.service';
import { ToastrNotificationService } from 'src/app/services/toastr-notification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  public registerForm: FormGroup = this._formBuilder.group(
    {
      name: [, [Validators.required]],
      surname: [, [Validators.required]],
      document: [, [Validators.required]],
      code: [, [Validators.required]],
      period: [, [Validators.required]],
      telephone: [, []],
      email: [,[Validators.required, Validators.minLength(6), Validators.pattern(this._validatorsService.patternEmail),]],
      password: [, [Validators.required, Validators.minLength(8)]],
      confirm_password: [, [Validators.required]],
    },

    {
      validators: [
        this._validatorsService.equalsPassword('password', 'confirm_password'),
      ],
    }
  );

  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _validatorsService: ValidatorService,
    private _toastr: ToastrNotificationService,
  ) {}

  ngOnInit(): void {
       this.registerForm.reset({
      name: '',
      surname: '',
      document: '',
      code: '',
      period: '',
      telephone: '',
      email: '',
      password: '',
      confirm_password: '',
    });
  }

  get emailError(): string {
    const email = this.registerForm.get('email');
    if (email!.getError('required')) {
      return 'El email es obligatorio';
    } else if (email!.getError('pattern')) {
      return 'El email debe ser un correo valido';
    }
    return '';
  }

  public isInvalidField = (field: string) => {
    return (
      this.registerForm.controls[field].errors &&
      this.registerForm.controls[field].touched &&
      this.registerForm.controls[field].invalid
    );
  };

  public togglePassword = (field: string): boolean => {
    if (field === 'password') {
      return (this.showPassword = !this.showPassword);
    }
    return (this.showConfirmPassword = !this.showConfirmPassword);
  };

  public register = (): void => {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this._toastr.error('Revisa la información ingresada', 'Error');
      return;
    }

    this._toastr.success(
      `Bienvenido ${this.registerForm.get('name')?.value}`,
      'Registro Exitoso'
    );
    this._router.navigate(['/ingresar']);
    this.registerForm.reset();
  };
}
