import {NgModule} from '@angular/core';
import {MatAutocompleteModule, MatButtonModule, MatCommonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCommonModule],
  exports: [MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCommonModule]
})
export class MaterialModule {
}
