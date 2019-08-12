import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@key-solutions/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
