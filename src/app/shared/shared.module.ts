import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./material/material.module";
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
    declarations: [
      NavbarComponent,
      RodapeComponent
    ],
    imports: [
     MaterialModule,
     RouterModule
    ],
    exports: [
     MaterialModule,
     NavbarComponent,
     RodapeComponent
    ]
  })
  export class SharedModule { }