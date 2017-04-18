import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  skuList: string[] = [];

  insertSku(skuName: string): void {
    this.skuList.push(skuName);
  }
}
