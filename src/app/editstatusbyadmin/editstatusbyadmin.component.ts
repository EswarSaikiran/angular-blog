import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service';
import { ActivatedRoute } from '@angular/router';
import { TopicPayLoad } from '../blogtopic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editstatusbyadmin',
  templateUrl: './editstatusbyadmin.component.html',
  styleUrls: ['./editstatusbyadmin.component.css']
})
export class EditstatusbyadminComponent implements OnInit {
  topicForm:FormGroup;
  blogid:string;
  constructor(private service: TopicService, private activated: ActivatedRoute, private fb: FormBuilder) { }
  topicPayload: TopicPayLoad={
    blogId:null,
      averageRating: null,
      blogTitle: '',
      category: '',
      description: '',
      status: '',
      //comments:[],
     // user:'',

    };

  ngOnInit(): void {
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
    this.blogid=this.activated.snapshot.paramMap.get('id');
    this.service.getblogById(this.blogid).subscribe(
      (data:TopicPayLoad)=>{
        console.log('data');
        console.log(data);
        this.topicPayload=data;
      },err=>console.log("error")
    );
    }

    onSubmit(){
      this.service.editStatusbyadmin(this.topicPayload).subscribe(
        data=>console.log("updated"),
        err=>console.log("error")
      );
    }
  }
 

