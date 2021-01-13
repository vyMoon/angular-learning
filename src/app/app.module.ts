import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { PurePipePipe } from './pipes/pure-pipe.pipe';
import { ImpurePipePipe } from './pipes/impure-pipe.pipe';
import { FirstDirective } from './directives/first/first.directive';
import { WorkingHoursDirective } from './directives/workingHours/working-hours.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipeTestComponent,
    PurePipePipe,
    ImpurePipePipe,
    FirstDirective,
    WorkingHoursDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
