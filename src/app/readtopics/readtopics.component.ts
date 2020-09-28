import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service';
import { TopicPayLoad } from '../blogtopic';
import { Router } from '@angular/router';
import { CommentPlayLoad } from '../comments-payload';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-readtopics',
  templateUrl: './readtopics.component.html',
  styleUrls: ['./readtopics.component.css']
})
export class ReadtopicsComponent implements OnInit {
  topicForm:FormGroup;
  commentsdata:CommentPlayLoad[];
  constructor(private topicServices: TopicService,private route:Router,private fb:FormBuilder){ }
//commentpayload:CommentPlayLoad;
 topicData: TopicPayLoad[];
  ngOnInit(): void {

    // this.topicForm = this.fb.group({
     
    //   comments: this.fb.array([
    //    this.addCommentsFormGrp()
    //   ])


    // });
    this.topicServices.readBlogs().subscribe(
      data =>
      {
        //sessionStorage.getItem(JSON.stringify(data));
        this.topicData = data;
        console.log("Data is fetched Sucesssfully");
        console.log(this.topicData);
        
      },
      err =>
      {
        console.log("Data is not fetched sucessfully")
      }
    );
  }

  // addCommentsFormGrp(): FormGroup {
  //   return this.fb.group({
  //     comments: [''],

  //   });
  // }

  // addCommentsButtonClick(): void {
  //   (this.topicForm.get('comments') as FormArray).push(this.addCommentsFormGrp());
  // }
  gobacktotopic(){
    this.route.navigate(['AddTopic']);
  }
  comment(blogId:string){
    this.route.navigate(['comment',blogId]);
  }
  viewAllComments(blogId:string){
    this.route.navigate(['readcomments',blogId]);
  }
}
