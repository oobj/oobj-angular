import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextInputDemoPageComponent } from './demos-pages/text-input-demo-page/text-input-demo-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'examples-text-input',
        component: TextInputDemoPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
