import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  matchResponse: any;
  matchResChanged: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }



  deleteMark(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList/" + id);
  }

  putMark(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList/" + id, data);
  }

  // Form 1 posts and gets
  postMark(data: any) {
    return this.http.post<any>("http://localhost:3000/markList/", data);

  }

  getMark() {
    return this.http.get<any>("http://localhost:3000/markList/");

  }

  postMark12(data: any) {
    return this.http.post<any>("http://localhost:3000/markList12/", data);

  }

  getMark12() {
    return this.http.get<any>("http://localhost:3000/markList12/");

  }

  deleteMark12(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList12/" + id);
  }

  putMark12(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList12/" + id, data);
  }

  postMark13(data: any) {
    return this.http.post<any>("http://localhost:3000/markList13/", data);

  }

  getMark13() {
    return this.http.get<any>("http://localhost:3000/markList13/");

  }

  deleteMark13(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList13/" + id);
  }

  putMark13(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList13/" + id, data);
  }

  postMark14(data: any) {
    return this.http.post<any>("http://localhost:3000/markList14/", data);

  }

  getMark14() {
    return this.http.get<any>("http://localhost:3000/markList14/");

  }

  deleteMark14(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList14/" + id);
  }

  putMark14(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList14/" + id, data);
  }

  postMark15(data: any) {
    return this.http.post<any>("http://localhost:3000/markList15/", data);

  }

  getMark15() {
    return this.http.get<any>("http://localhost:3000/markList15/");

  }

  deleteMark15(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList15/" + id);
  }

  putMark15(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList15/" + id, data);
  }

  postMark16(data: any) {
    return this.http.post<any>("http://localhost:3000/markList16/", data);

  }

  getMark16() {
    return this.http.get<any>("http://localhost:3000/markList16/");

  }

  deleteMark16(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList16/" + id);
  }

  putMark16(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList16/" + id, data);
  }
  //end of Form 1 posts and gets ******************************************************************************************

  postMark2(data: any) {
    return this.http.post<any>("http://localhost:3000/markList2/", data);

  }

  getMark2() {
    return this.http.get<any>("http://localhost:3000/markList2/");
  }

  deleteMark2(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList2/" + id);
  }

  putMark2(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList2/" + id, data);
  }

  postMark22(data: any) {
    return this.http.post<any>("http://localhost:3000/markList22/", data);

  }

  getMark22() {
    return this.http.get<any>("http://localhost:3000/markList22/");
  }

  deleteMark22(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList22/" + id);
  }

  putMark22(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList22/" + id, data);
  }

  postMark23(data: any) {
    return this.http.post<any>("http://localhost:3000/markList23/", data);

  }

  getMark23() {
    return this.http.get<any>("http://localhost:3000/markList23/");
  }

  deleteMark23(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList23/" + id);
  }

  putMark23(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList23/" + id, data);
  }

  postMark24(data: any) {
    return this.http.post<any>("http://localhost:3000/markList24/", data);

  }

  getMark24() {
    return this.http.get<any>("http://localhost:3000/markList24/");
  }

  deleteMark24(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList24/" + id);
  }

  putMark24(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList24/" + id, data);
  }

  postMark25(data: any) {
    return this.http.post<any>("http://localhost:3000/markList25/", data);

  }

  getMark25() {
    return this.http.get<any>("http://localhost:3000/markList25/");
  }

  deleteMark25(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList25/" + id);
  }

  putMark25(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList25/" + id, data);
  }

  postMark26(data: any) {
    return this.http.post<any>("http://localhost:3000/markList26/", data);

  }

  getMark26() {
    return this.http.get<any>("http://localhost:3000/markList26/");
  }

  deleteMark26(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList26/" + id);
  }

  putMark26(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList26/" + id, data);
  }
  //End of Form 2 posts and gets*********************************************************************************************




  postMark3(data: any) {
    return this.http.post<any>("http://localhost:3000/markList3/", data);

  }

  getMark3() {
    return this.http.get<any>("http://localhost:3000/markList3/");
  }

  deleteMark3(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList3/" + id);
  }

  putMark3(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList3/" + id, data);
  }

  postMark32(data: any) {
    return this.http.post<any>("http://localhost:3000/markList32/", data);

  }

  getMark32() {
    return this.http.get<any>("http://localhost:3000/markList32/");
  }

  deleteMark32(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList32/" + id);
  }

  putMark32(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList32/" + id, data);
  }

  postMark33(data: any) {
    return this.http.post<any>("http://localhost:3000/markList33/", data);

  }

  getMark33() {
    return this.http.get<any>("http://localhost:3000/markList33/");
  }

  deleteMark33(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList33/" + id);
  }

  putMark33(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList33/" + id, data);
  }

  postMark34(data: any) {
    return this.http.post<any>("http://localhost:3000/markList34/", data);

  }

  getMark34() {
    return this.http.get<any>("http://localhost:3000/markList34/");
  }

  deleteMark34(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList34/" + id);
  }

  putMark34(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList34/" + id, data);
  }

  postMark35(data: any) {
    return this.http.post<any>("http://localhost:3000/markList35/", data);

  }

  getMark35() {
    return this.http.get<any>("http://localhost:3000/markList35/");
  }

  deleteMark35(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList35/" + id);
  }

  putMark35(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList35/" + id, data);
  }

  postMark36(data: any) {
    return this.http.post<any>("http://localhost:3000/markList36/", data);

  }

  getMark36() {
    return this.http.get<any>("http://localhost:3000/markList36/");
  }

  deleteMark36(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList36/" + id);
  }

  putMark36(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList36/" + id, data);
  }
  //End of Form 3 posts and gets*********************************************************************************************




  postMark4(data: any) {
    return this.http.post<any>("http://localhost:3000/markList4/", data);

  }

  getMark4() {
    return this.http.get<any>("http://localhost:3000/markList4/");
  }

  deleteMark4(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList4/" + id);
  }

  putMark4(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList4/" + id, data);
  }

  postMark42(data: any) {
    return this.http.post<any>("http://localhost:3000/markList42/", data);

  }

  getMark42() {
    return this.http.get<any>("http://localhost:3000/markList42/");
  }

  deleteMark42(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList42/" + id);
  }

  putMark42(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList42/" + id, data);
  }

  postMark43(data: any) {
    return this.http.post<any>("http://localhost:3000/markList43/", data);

  }

  getMark43() {
    return this.http.get<any>("http://localhost:3000/markList43/");
  }

  deleteMark43(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList43/" + id);
  }

  putMark43(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList43/" + id, data);
  }

  postMark44(data: any) {
    return this.http.post<any>("http://localhost:3000/markList44/", data);

  }

  getMark44() {
    return this.http.get<any>("http://localhost:3000/markList44/");
  }

  deleteMark44(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList44/" + id);
  }

  putMark44(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList44/" + id, data);
  }

  postMark45(data: any) {
    return this.http.post<any>("http://localhost:3000/markList45/", data);

  }

  getMark45() {
    return this.http.get<any>("http://localhost:3000/markList45/");
  }

  deleteMark45(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList45/" + id);
  }

  putMark45(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList45/" + id, data);
  }

  postMark46(data: any) {
    return this.http.post<any>("http://localhost:3000/markList46/", data);

  }

  getMark46() {
    return this.http.get<any>("http://localhost:3000/markList46/");
  }

  deleteMark46(id: number) {
    return this.http.delete<any>("http://localhost:3000/markList46/" + id);
  }

  putMark46(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/markList46/" + id, data);
  }
  //End of Form 4 posts and gets*********************************************************************************************




  //This is service for mark comp
}
