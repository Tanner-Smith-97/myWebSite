import {RouterModule, Routes} from "@angular/router";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

const routes: Routes = [
  {path: '', component: HelloWorldComponent },
  {path: 'about-me', component: AboutMeComponent },

  //otherwise redirect to home
  {path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
