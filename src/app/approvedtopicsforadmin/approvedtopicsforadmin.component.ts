import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic-service';
import { Router } from '@angular/router';
import { TopicPayLoad } from '../blogtopic';

@Component({
  selector: 'app-approvedtopicsforadmin',
  templateUrl: './approvedtopicsforadmin.component.html',
  styleUrls: ['./approvedtopicsforadmin.component.css']
})
export class ApprovedtopicsforadminComponent implements OnInit {

  constructor(private service:TopicService,private route:Router) { }
  topicData: TopicPayLoad[];
  ngOnInit(): void {
    this.service.readBlogs().subscribe(
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
  // viewAllComments(blogId:string){
  //   this.route.navigate(['readcommentsbyadmin',blogId]);
  // }
  gobacktotopic(){
    this.route.navigate(['topictoAdmin']);
  }
}
