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
  productItem: ProductInterface | null = null;  //para almacenar los datos de un producto

  
  constructor(
    private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.getItemDetail(params["id"]);
    });
  }
    private getItemDetail(id: string){
      this.productService.getProducts().subscribe((data: ProductInterface[]) =>{
        this.productItem = data.length > 0 ? data[0] : null;
        ;
      })
    }
    
  }
