import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: Producto = { id: '', nombre: '', descripcion: '', precio: null, fecha: null};
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  ngOnInit() {
    this.getProductoDetalle(this.route.snapshot.params['id']);
  }
  deleteProducto(id) {
    this.isLoadingResults = true;
    this.api.deleteProducto(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/producto']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      ); }
  getProductoDetalle(id) {
    this.api.getProducto(id)
      .subscribe(data => {
        this.producto = data;
        console.log(this.producto);
        this.isLoadingResults = false;
      });
    } }
