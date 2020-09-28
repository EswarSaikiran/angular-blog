import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service';
import { CommentPlayLoad } from '../comments-payload';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-readcomments',
  templateUrl: './readcomments.component.html',
  styleUrls: ['./readcomments.component.css']
})
export class ReadcommentsComponent implements OnInit {
 commentsdata:CommentPlayLoad[];
 blogId:string;
  constructor(private service:TopicService,private activatedRoute:ActivatedRoute,private route:Router) { }
 
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

  gobacktoviewTopics(){
    this.route.navigate(['ViewAllapprovedTopics']);
  }

  deletComment(){
    this.service.deleteComment().subscribe(data=>{
      alert('deleted the comment'),
      console.log('data is deleted');
    },err=>{
      console.log("Not deleted the comment");
    }
  );
  }
}
