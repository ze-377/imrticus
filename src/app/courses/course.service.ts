import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Student } from '../models/students.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _httpClient:HttpClient) {}

  enrollForMachineLearning(req : Student){
    //return this._httpClient.post('',req);
    return of({});
 }

}
