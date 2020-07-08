import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { PopoverComponent } from './popover/popover.component';


const routes: Routes = [
  {
    path:"",
    component:NavbarComponent
  },
  {
    path:"accordion",
    component:AccordionComponent
  },
  {
    path:"carousel",
    component:CarouselComponent
  },
  {
    path:"modal",
    component:ModalComponent
  },
  {
    path:"typehead",
    component:TypeheadComponent
  },
  {
    path:"popover",
    component:PopoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
