import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { TableModule } from 'primeng/table';
import { TemplateComponent } from './template.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, TableModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateComponent,
    TableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
