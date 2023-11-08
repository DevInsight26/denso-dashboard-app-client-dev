import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartMasterTableInterface } from '../model/part-master-table-interface';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(
    private http:HttpClient
  ) { }


  loadParts(){
    return this.http.get('http://localhost:5000/api/geo/v1/parts');
  }

  postParts(data: any){
    return this.http.post('http://localhost:5000/api/geo/v1/parts/', data);
  }

  deleteParts(_id: any){
    return this.http.delete('http://localhost:5000/api/geo/v1/parts/', _id)
  }
}
