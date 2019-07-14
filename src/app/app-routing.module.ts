import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'posts', component: PostsComponent},
  {path: 'posts/:id', component:PostdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
