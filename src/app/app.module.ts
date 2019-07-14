import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import { HomeComponent } from './home/home.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
