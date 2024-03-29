import { ReviewsService } from './reviews.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { CategoryService } from './category.service';
//import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { UserService } from './user.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsFormComponent } from './reviews-form/reviews-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    FooterComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    AdminOrderComponent,
    ReviewsComponent,
    ReviewsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
      { path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService] },
      { path: 'admin/products/:key', component: ProductFormComponent, canActivate: [AuthGuardService] },
      { path: 'admin/pedidos', component: AdminOrdersComponent, canActivate: [AuthGuardService] },
      { path: 'admin/pedido/:id', component: AdminOrderComponent, canActivate: [AuthGuardService] },
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AngularFireAuth,
    ProductService,
    AuthService,
    AdminAuthGuardService,
    AuthGuardService,
    AngularFireDatabaseModule,
    CategoryService,
    ShoppingCartService,
    //AngularFirestoreModule //Prueba por bug solucionado
    UserService,
    OrderService,
    NgxSpinnerService,
    ReviewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
