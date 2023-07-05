import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from 'src/app/core/models/items';
import { OnInit } from '@angular/core'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  productList: ProductInterface[]=[];  //para almacenar los datos de productList en []
  //filteredList: any;

constructor(
  private productService: ProductService) {}


ngOnInit(): void {
  this.getProduct();  //Para obtener toda la lista de productos
}

private getProduct(){
  this.productService.getProducts().subscribe((data: ProductInterface[]) =>{
  this.productList= data})
  //console.log(this.productList);
}
}


  //this.filteredList=[...data];
//});
//}
//filterList(filter: string = ''): void {
  //this.filteredList = this.productList.filter((product: any) => product.name. inludes(filter));
