import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  titulo = "Mi Lista de Productos";

  public headers = {descripcion: 'Producto', price: 'Precio', avail:'Disponible', image:'Imagenes'};
  public productos:IProduct[] = [{
    id: 1,
    desc: 'SSD hard drive',
    avail: new Date('2016-10-03'),
    price: 75,
    imageUrl: 'assets/ssd.jpg',
    rating: 5
    },{
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4
    }];
    public alturaImagen:number = 60;
    public quieroRojo:boolean = true;
    objetoColor= {'color':this.quieroRojo?'red':'blue'};
    public isAzul:boolean = false;
    public isRojo:boolean = true;
    public showImage:boolean = true;
    public filterSearch:string ='';

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(){
    this.showImage =!this.showImage;
  }

}
