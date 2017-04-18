import { Component, Output, EventEmitter } from '@angular/core';
import { SkuForm } from './sku-form.model';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
})
export class SkuFormComponent {
  @Output() skuFormSubmitted: EventEmitter<SkuForm>;

  constructor() {
    this.skuFormSubmitted = new EventEmitter();
  }

  onSubmit(skuForm: SkuForm): void {
    console.log('you submitted value:', skuForm);
    this.skuFormSubmitted.emit(skuForm);
  }
}
