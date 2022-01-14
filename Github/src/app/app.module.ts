import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    UserComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
