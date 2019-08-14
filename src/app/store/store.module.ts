import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [StoreComponent],
    imports: [ CommonModule, ModelModule, BrowserModule, FormsModule  ],
    exports: [StoreComponent],
    providers: [],
})
export class StoreModule { }
