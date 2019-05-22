import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'precio'];
  data: Producto[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProductos()
    .subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
