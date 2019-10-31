import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

export class InMemoryStudentService implements InMemoryDbService {
    createDb() {
        let students: Student[] = [
            {id: 1, firstName: 'Benedict', lastName: 'Hoorkwap', course: 'Environmental Engineering', gender: 'Male'},
            {id: 2, firstName: 'Candida', lastName: 'Hoorkwap', course: 'Pyschology', gender: 'Female'},
            {id: 3, firstName: 'Aliyu', lastName: 'Umar', course: 'Medicine', gender: 'Male'},
            {id: 4, firstName: 'Ruth', lastName: 'Mije', course: 'Structural Engineering', gender: 'Male'},
            {id: 5, firstName: 'Sam', lastName: 'Yohanna', course: 'Geotechnical Engineering', gender: 'Female'},
            {id: 6, firstName: 'Anita', lastName: 'Thomas', course: 'Soil Science', gender: 'Female'}
          
        ];


        return {students};
    }
}