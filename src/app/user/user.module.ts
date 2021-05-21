import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
   
import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SplitIoService } from '../splitio.service';
   
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SplitIoService]
})
export class UserModule { }