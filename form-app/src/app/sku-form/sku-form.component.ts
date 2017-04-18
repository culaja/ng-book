import { Component } from '@angular/core';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
})
export class SkuFormComponent {
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
