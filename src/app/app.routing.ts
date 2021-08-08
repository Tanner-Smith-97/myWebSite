import {RouterModule, Routes} from "@angular/router";
import {AboutMeComponent} from "./pages/about-me/about-me.component";
import {Itec1018Component} from "./pages/courses/itec1018/itec1018.component";
import {HomeComponent} from "./pages/home/home.component";
import {CourseWorkComponent} from "./pages/course-work/course-work.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about-me', component: AboutMeComponent },
  {path: 'course-work', component: CourseWorkComponent},
  {path: 'itec1018', component: Itec1018Component},

  //otherwise redirect to home
  {path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
