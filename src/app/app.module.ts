import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubApiService } from './github-api.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchAppDirective } from './search-app.directive';
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubReposComponent } from './repos/github-repos/github-repos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchAppDirective,
    GithubUserComponent,
    GithubReposComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
