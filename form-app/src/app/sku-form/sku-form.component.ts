import { Component } from '@angular/core';
import { SkuForm } from './sku-form.model';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
})
export class SkuFormComponent {
  onSubmit(skuForm: SkuForm): void {
    console.log('you submitted value:', skuForm);
  }
}
