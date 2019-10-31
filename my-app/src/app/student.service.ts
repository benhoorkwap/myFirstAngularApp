import { Injectable } from '@angular/core';
import { Student } from './student';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
      private studentUrl: string  = 'api/students';

      constructor(private httpClient: HttpClient) {

       }

       getStudents() {
         return this.httpClient.get<Student[]>(this.studentUrl);
       }

}

