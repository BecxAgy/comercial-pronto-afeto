import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { LoginForm } from "../../components/login-form/login-form";

@Component({
  selector: 'app-login-page',
  imports: [ButtonModule, InputTextModule, DividerModule, FloatLabelModule, CardModule, LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

}
