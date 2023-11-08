import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constant';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(
    private http:HttpClient
  ) { }


  loadParts(){
    return this.http.get(Constants.productionApiUrl);
  }
  // https://denso-backend.onrender.com/api/geo/v1/parts

  postParts(data: any){
    return this.http.post(Constants.productionApiUrl, data);
  }

  deleteParts(_id: any){
    return this.http.delete(Constants.productionApiUrl, _id)
  }
}
