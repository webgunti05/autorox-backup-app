import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetlistedComponent } from './getlisted/getlisted.component';
import { ForworkshopsComponent } from './forworkshops/forworkshops.component';
import { QuickservicesComponent } from './quickservices/quickservices.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { PostService } from './services/post.service';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
// import { WINDOW_PROVIDERS } from './services/window.service';
import { FilterService } from './services/data.service';
import { ProductService } from './services/product.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetlistedComponent,
    ForworkshopsComponent,
    QuickservicesComponent,
    MainpageComponent,
    FooterComponent,
    AboutComponent,
    WorksComponent,
    SearchComponent,
    ProductComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    NgxCarouselModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'Home', pathMatch: 'full'},
      { path : 'Home', component : MainpageComponent},
      { path : 'GetListedForFree', component : GetlistedComponent},
      { path : 'About', component : AboutComponent},
      { path : 'Works', component : WorksComponent},
      { path : 'ForWorkshops', component : ForworkshopsComponent},
      { path : 'QuickServices', component : QuickservicesComponent},
      { path : 'search', component : SearchComponent},
      { path : 'Product', component : ProductComponent},
      { path : 'Productdetails', component : ProductdetailsComponent}
      
    ])
  ],
  providers: [
    PostService,
    // WINDOW_PROVIDERS
    FilterService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
