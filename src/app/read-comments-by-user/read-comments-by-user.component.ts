import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TopicService } from '../topic-service';
import { CommentPlayLoad } from '../comments-payload';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-read-comments-by-user',
  templateUrl: './read-comments-by-user.component.html',
  styleUrls: ['./read-comments-by-user.component.css']
})
export class ReadCommentsByUserComponent implements OnInit {
  commentId:string='COMTOP10002';
blogId:string;
commentsdata:CommentPlayLoad[];
  constructor(private route:Router,private service:TopicService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.blogId=this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getAllComments(this.blogId).subscribe(
      data=>{
        this.commentsdata=data;
        console.log('comments are viewed');
        console.log(this.commentsdata);
      },err=>console.log(err)
    );
  }
  gobacktoviewsall(){
   this.route.navigate(['topictoAdmin']);
  }
  // deleteComment(commentID:string){
   
  //   this.service.deleteComment(commentID).subscribe(
  //     data=>{
  //       console.log("data is deleted");
  //       alert("comment is deleted");
  //       console.log(data);
  //     },
  //     err=>{
  //       console.log("error check it");
  //       console.log(err);
  //     }
  //   )
  // }
}
