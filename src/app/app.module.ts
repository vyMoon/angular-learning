import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PipeTestComponent } from './components/pipe-test/pipe-test.component';
import { PurePipePipe } from './pipes/pure-pipe.pipe';
import { ImpurePipePipe } from './pipes/impure-pipe.pipe';
import { FirstDirective } from './directives/first/first.directive';
import { WorkingHoursDirective } from './directives/workingHours/working-hours.directive';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditComponent } from './components/edit/edit.component';
import { ChildrenRoutesComponent } from './components/children-routes/children-routes.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeTestComponent,
    PurePipePipe,
    ImpurePipePipe,
    FirstDirective,
    WorkingHoursDirective,
    HomeComponent,
    NotFoundComponent,
    EditComponent,
    ChildrenRoutesComponent,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
