import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../shared/material/material.module";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
    declarations: [LoginComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
  
      MaterialModule
    ],
    exports: [
      LoginComponent
    ],
    providers: [],
  })
  export class AuthentificationModule { }