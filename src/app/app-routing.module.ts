import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductComponent },
  { path: 'lazy', component: LazyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
