import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AdmissionComponent } from './admission/admission.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  {
    path: 'marks', component: AdmissionComponent,
    // canActivate: [AuthGuard], 
    children: [

      {
        path: 'form1', component: GalleryComponent,
        children: [
          { path: 'maths', component: Component },
          { path: 'phy', component: Component },
          { path: 'chem', component: Component },
          { path: 'bio', component: Component },
          { path: 'comp', component: Component },
          { path: 'geo', component: Component },
          { path: 'lit', component: Component },
          { path: 'hist', component: Component },
          { path: 'fre', component: Component },
          { path: 'eng', component: Component },
          { path: 'econs', component: Component },
          { path: 'f$n', component: Component },
          { path: 'sport', component: Component }

        ]
      },
      {
        path: 'form2', component: BlogComponent,
        children: [
          { path: 'maths', component: Component },
          { path: 'phy', component: Component },
          { path: 'chem', component: Component },
          { path: 'bio', component: Component },
          { path: 'comp', component: Component },
          { path: 'geo', component: Component },
          { path: 'lit', component: Component },
          { path: 'hist', component: Component },
          { path: 'fre', component: Component },
          { path: 'eng', component: Component },
          { path: 'econs', component: Component },
          { path: 'f$n', component: Component },
          { path: 'sport', component: Component }

        ]
      },

      {
        path: 'form3', component: Form3Component,
        children: [
          { path: 'maths', component: Component },
          { path: 'phy', component: Component },
          { path: 'chem', component: Component },
          { path: 'bio', component: Component },
          { path: 'comp', component: Component },
          { path: 'geo', component: Component },
          { path: 'lit', component: Component },
          { path: 'hist', component: Component },
          { path: 'fre', component: Component },
          { path: 'eng', component: Component },
          { path: 'econs', component: Component },
          { path: 'f$n', component: Component },
          { path: 'sport', component: Component }

        ]
      },
      {
        path: 'form4', component: Form4Component,
        children: [
          { path: 'maths', component: Component },
          { path: 'phy', component: Component },
          { path: 'chem', component: Component },
          { path: 'bio', component: Component },
          { path: 'comp', component: Component },
          { path: 'geo', component: Component },
          { path: 'lit', component: Component },
          { path: 'hist', component: Component },
          { path: 'fre', component: Component },
          { path: 'eng', component: Component },
          { path: 'econs', component: Component },
          { path: 'f$n', component: Component },
          { path: 'sport', component: Component }

        ]
      },

      { path: 'contact', component: ContactComponent },
      { path: 'phy', component: GalleryComponent }
    ]
  },
  // {path: 'blog', component: BlogComponent},

  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'form3', component: Form3Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
