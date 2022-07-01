import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from './custom-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminOrdersComponent,
    NavbarComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
      path: '',component:HomeComponent
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path:'shopping-cart', component:ShoppingCartComponent
      },
      {
        path:'check-out', component:CheckOutComponent
      },
      {
        path:'order-success', component:OrderSuccessComponent
      },
      {
        path:'login', component:LoginComponent
      },
      {
        path: 'my/orders', component: MyOrderComponent
      },
      { path:'admin/products',  component:AdminProductsComponent},
      { path: 'admin/orders', component:AdminOrdersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
