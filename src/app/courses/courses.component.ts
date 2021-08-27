import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Courses } from '../models/courses.model';
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { CourseService } from './course.service';
import { DOCUMENT, formatCurrency } from '@angular/common';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  studentForm = new FormGroup({
    studentName: new FormControl(''),
    phone: new FormControl(),
    email: new FormControl('')
  })

  constructor(private courseService: CourseService,@Inject(DOCUMENT) private document: Document, private _renderer: Renderer2) { }
  isModalVisible: boolean = false;
  ngOnInit(): void {
  }


  courseObject: Courses = {
    name: 'Introduction to Machine Learning',
    shortDiscriptions: 'Free certification course of Machine Learning',
    createdBy: ' Ritesh Singh',
    courseDuration: ' 1 Week',
    price: 'Free',
    rating: {
      rating: '2343',
      enrollments: 234564,
    },
    includes: ['Concept Videos', 'Practice Quizzes', 'Certificate of Completion'],
    learn: ['Introduction to Machine Learning',
      'Basic Concepts of Machine Learning',
      'Linear Regression, Polymer Regression, Logistic Regression',
      'Neural Network and Deep Learning'],
    discription: {
      basic: 'Machine learning is a field of computer science that uses statistical techniques to give computer systems the ability to "learn" with data, without being explicitly programmed.',
      element: ['Concept Videos', 'Quizzes', 'Certification', 'Discussion and Mentorship'],
      topics: ['Introduction', 'Project: Cost of Flats', 'Linear Regression', 'Polymer Regression',
        'Project: Spam Email Filter and App Recommendation',
        'Neural Network',
        'Deep Learning'],
      footnote: 'The excellent introduction course is of 75 mins course which will give you the overview of the most trending topic, Machine Learning and Artificial Intelligence. '
    },
    curriculum: ['Introduction to Machine Learning', 'Concepts of Machine Learning',
      'Application of Machine Learning', 'Neural Network and Deep Learning', 'Application of Deep Learning'],
    aboutInstructor: {
      name: 'Ritesh Singh',
      photo: 'cxcxcxcxcxcxcxcx',
      about: "Ritesh Singh is an IIT Delhi Graduate with 8 years of experience in Web Development and has created more than 15 websites both for his own enterpreneurial ventures as well as for other companies. With this course, he wants to disseminate this skill of making complex websites in just 30 days to as many students as possible. So, without a second thought, invest in yourself if you want to learn web development.",
      achievement: 'With 2 Patents and 4 innovation report, instructor is having 8 Years of Industrial Experience'
    },
    faq: {
      howiwilllearn: 'When you get access to the course, you will be able to see the modules within the course. Watch the videos whenever you get time and complete the tests for each module. The self-paced videos have been created by subject matter experts to ensure you learn from the best.',
      willigetcertificate: 'Yes, when you complete all videos and tests in the course you will be eligible for certification. Your certificate will get unlocked. You can share the certificate with others on social media and add it to your profile.'
    }
  }


  onSubmit() {
    console.log(this.studentForm.value)
    this.courseService.enrollForMachineLearning(this.studentForm.value).subscribe((res) => {
      alert("Registration successfull");
      this.closeModal();
      this.studentForm.reset();
    }, (err) => {
      console.log("Can not register student", err)
    })
  }

  openModal() {
    this.isModalVisible = true;
    this._renderer.addClass(this.document.body,'modal-open')
  }
  
  closeModal() {
    this.isModalVisible = false;
    this._renderer.removeClass(this.document.body,'modal-open')
  }

}
