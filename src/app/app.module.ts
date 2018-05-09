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
const appRoutes: Routes = [
  { path: 'Home', component: HomepageComponent },
  { path: 'ProblemsandSolutions',component: PnSComponent },
  {path:'ContactUS', component:ContactComponent},
  { path: '',   redirectTo: 'Home', pathMatch: 'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PnSComponent,
    ContactComponent
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
