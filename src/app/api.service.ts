import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Producto } from './producto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/v1/producto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
   }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // en caso de error imprime el error
      return of(result as T); // caso exitoso devuelve el resultado
    };
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  getProducto(id: number): Observable<Producto> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Producto>(`getProduct id=${id}`))
    );
  }
  addProducto(producto): Observable<Producto> {
    return this.http.post<Producto>(apiUrl, producto, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((producto: Producto) => console.log(`added producto w/ id=${producto.id}`)),
      catchError(this.handleError<Producto>('addProduct'))
    );
  }
  updateProducto(id, producto): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, producto, httpOptions).pipe(
      tap(_ => console.log(`updated producto id=${id}`)),
      catchError(this.handleError<any>('updateProducto'))
    );
  }
  deleteProducto(id): Observable<Producto> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Producto>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<Producto>('deleteProducto'))
    );
  }

}

