import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { OobjCodeTextModule, OobjExampleWrapperModule, OobjTextInputModule } from '@oobj/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInputDemoPageComponent } from './demos-pages/text-input-demo-page/text-input-demo-page.component';
import { TextInputComponent } from './examples/text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    TextInputDemoPageComponent
  ],
  imports: [BrowserModule, OobjTextInputModule, OobjCodeTextModule, NgbModule, AppRoutingModule, OobjExampleWrapperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
