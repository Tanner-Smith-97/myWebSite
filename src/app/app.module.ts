import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { Itec1018Component } from './pages/courses/itec1018/itec1018.component';
import { CourseWorkComponent } from './pages/course-work/course-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NavBarComponent,
    NavigationBarComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    Itec1018Component,
    CourseWorkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
