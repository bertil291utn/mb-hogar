import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  MatNativeDateModule, MatToolbarModule, MatButtonModule,MatCardModule,MatSidenavModule,MatGridListModule,MatChipsModule,MatPaginatorModule,MatTabsModule

} from '@angular/material';

const modules: any[] = [

  LayoutModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  MatGridListModule,
  MatChipsModule,
  MatPaginatorModule,
  MatTabsModule


];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AngularMaterialModule { }
