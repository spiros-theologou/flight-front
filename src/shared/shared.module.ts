import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    MenubarModule,
    BadgeModule,
    InputTextModule,
    TableModule,
    CardModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    MenubarModule,
    BadgeModule,
    InputTextModule,
    TableModule,
    CardModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
