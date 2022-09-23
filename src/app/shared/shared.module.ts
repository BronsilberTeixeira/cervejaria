import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [
      NavbarComponent
    ],
    imports: [
     MaterialModule,
     RouterModule
    ],
    exports: [
     MaterialModule,
     NavbarComponent
    ]
  })
  export class SharedModule { }