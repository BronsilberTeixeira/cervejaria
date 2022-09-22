import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [
      NavbarComponent
    ],
    imports: [
     MaterialModule
    ],
    exports: [
     MaterialModule,
     NavbarComponent
    ]
  })
  export class SharedModule { }