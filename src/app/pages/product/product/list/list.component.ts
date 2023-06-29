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
  productItem!: ProductInterface;  //para almacenar los datos de un producto

  
  constructor(
    private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe (params =>{ //Se suscribe a los cambios de los parámetros de la ruta
      //console.log(params['id']);
      this.getItemDetail(params['id']);
      
    })
  }

  public getItemDetail(id: string) {
    this.productService.getItemDetail(id).subscribe((item: ProductInterface[]) => {
      //console.log(item);
      this.productItem= item[0];   //A través del param id usa ProductService para conseguir los id y los almacena en productItem
      console.log(this.productItem);
    });
  }
}