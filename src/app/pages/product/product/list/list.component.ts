import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from 'src/app/core/models/items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

 //productList: ProductInterface[]=[];
  productItem: ProductInterface[]=[];  //para almacenar los datos de un producto

  
  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: ProductInterface[]) => {
      this.productItem = data;
    });
  }
}