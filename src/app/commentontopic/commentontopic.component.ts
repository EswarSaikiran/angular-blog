import { Component, OnInit } from '@angular/core';
import { CommentPlayLoad } from '../comments-payload';
import { TopicService } from '../topic-service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RegisterPayLoad } from '../register-payload';

@Component({
  selector: 'app-commentontopic',
  templateUrl: './commentontopic.component.html',
  styleUrls: ['./commentontopic.component.css']
})
export class CommentontopicComponent implements OnInit {
  commentForm: FormGroup;
  commentdata: CommentPlayLoad;
  registration: RegisterPayLoad;
  blogId: string;
  constructor(private service: TopicService, private route: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commentdata = {
   
      comments:''
      // commentarray: [],
    };



    this.commentForm = this.fb.group({
      // commentlist: this.fb.array([
      //   this.addCommentGroup()
      // ])
      commentlist:''
    })


  }

  mapAndModel() {
    this.commentdata.comments = this.commentForm.value.commentlist;
   
  }

  // addCommentGroup(): FormGroup {
  //   return this.fb.group({
  //     comment: ['']
  //   });
  // }
  // addComment(): void {
  //   // (this.commentForm.get('commentlist') as FormArray).push(this.addCommentGroup());
  //   const control=<FormArray>this.commentForm.controls['commentlist'];
  //   control.push(this.addCommentGroup());
  // }

  onSubmit() {
    this.blogId = this.activatedRoute.snapshot.paramMap.get('id');
    const user = sessionStorage.getItem('datalogin');
    this.registration = JSON.parse(user);
    // tslint:disable-next-line: no-unused-expression
    this.mapAndModel();
   // const com=new CommentPlayLoad();
    this.service.createComment(this.commentdata, this.blogId, this.registration.userId).subscribe(
      data => {
        alert('Comment on this bolg is added by :' + this.registration.username );
        console.log("comment is added");
      }, err => {
        console.log("comment is not added by:" + this.registration.username);
      }

    );


  }

  gotoTopics(){
    this.route.navigate(['ViewAllapprovedTopics'])
  }
}
