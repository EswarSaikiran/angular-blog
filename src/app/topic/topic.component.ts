import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { TopicPayLoad } from '../blogtopic';
import { TopicService } from '../topic-service';
import { RegisterPayLoad } from '../register-payload';
import { CommentPlayLoad } from '../comments-payload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topicForm: FormGroup;
  topicPayload: TopicPayLoad;
  categoryArray:Array<string>=['Java Full stack developer','Spring FrameWork','Web Technologies'];
  registration:RegisterPayLoad;
  constructor(private fb: FormBuilder, private topicService: TopicService,private route:Router) {
   // location.reload();
  }


  ngOnInit() {
    
    this.topicForm = this.fb.group({
      blogTitle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      description: [''],
      averageRating: [''],
      category: [''],
      status: ['Pending'],
      // comments: this.fb.array([
      //   this.addCommentsFormGrp()
      // ])


    });

    this.topicPayload = {
      blogId: null,
      averageRating: null,
      blogTitle: '',
      category: '',
      description: '',
      status: '',

      //comments:[],
      // user:'',

    };
  }
  // addCommentsFormGrp(): FormGroup {
  //   return this.fb.group({
  //     comments: ['']

  //   });
  // }

  // addCommentsButtonClick(): void {
  //   (this.topicForm.get('comments') as FormArray).push(this.addCommentsFormGrp());
  // }

  mapAndModel() {
    // this.topicPayload.averageRating = this.topicForm.get('averageRating').value;
    this.topicPayload.blogTitle = this.topicForm.get('blogTitle').value;
    this.topicPayload.description = this.topicForm.get('description').value;
    this.topicPayload.category = this.topicForm.get('category').value;
    this.topicPayload.status = this.topicForm.get('status').value;
    // this.topicPayload.comments = this.topicForm.get('comments').value;
  }

  onSubmit() {
    this.mapAndModel();

    const user = sessionStorage.getItem('datalogin');
    this.registration = JSON.parse(user);
    // tslint:disable-next-line: no-unused-expression
    this.topicService.createBlog(this.topicPayload,this.registration.userId).subscribe(
      data => {
        console.log("Data inserted");
        alert("topic is created");
       
        location.reload();
      },

      err => {
        console.log(err),
          alert("Topic is not created")
      }
    );

  }
  ViewLLTopics() {
 this.route.navigate(['ViewAllapprovedTopics']);
  }
}
