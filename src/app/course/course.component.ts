import { Component } from '@angular/core';
import { CoursesServices } from './course.services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = "3 Authors"
  courses;

  constructor(services: CoursesServices){
    this.courses = services.getCoursese()    
  }
}
