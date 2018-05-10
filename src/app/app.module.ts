import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PnSComponent } from './pn-s/pn-s.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  { path: 'Home', component: HomepageComponent },
  { path: 'ProblemsandSolutions',component: PnSComponent },
  {path:'ContactUS', component:ContactComponent},
  {path:'AboutUs',component:AboutComponent},
  { path: '',   redirectTo: 'Home', pathMatch: 'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PnSComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    GalleriaModule,
    OwlModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
