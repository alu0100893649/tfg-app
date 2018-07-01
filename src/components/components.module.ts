import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { CustomTextComponent } from './custom-text/custom-text';
@NgModule({
	declarations: [MenuComponent,
    CustomTextComponent],
	imports: [],
	exports: [MenuComponent,
    CustomTextComponent]
})
export class ComponentsModule {}
