import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeTestComponent } from './components/pipe-test/pipe-test.component'
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { EditComponent } from './components/edit/edit.component';
import { ChildrenRoutesComponent } from './components/children-routes/children-routes.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { SimpleFormComponent } from './modules/app-forms/components/simple-form/simple-form.component';

const routes: Routes = [
  { path: 'pipes', component: PipeTestComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'home', component: HomeComponent },
  { path: 'children', component: ChildrenRoutesComponent, children: [
    { path: 'child-a', component: ChildAComponent },
    { path: 'child-b', component: ChildBComponent },
  ] },
  { path: 'froms', component: SimpleFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
