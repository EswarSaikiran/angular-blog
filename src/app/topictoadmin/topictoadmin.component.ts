import { Component, OnInit } from '@angular/core';
import { TopicPayLoad } from '../blogtopic';
import { TopicService } from '../topic-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topictoadmin',
  templateUrl: './topictoadmin.component.html',
  styleUrls: ['./topictoadmin.component.css']
})
export class TopictoadminComponent implements OnInit {
  topicData: TopicPayLoad[];
  constructor(private topicservice: TopicService, private route: Router, private activedRoute: ActivatedRoute) { }
  // blogId:string;
  ngOnInit(): void {
   // //location.reload();
    blogIds:
    this.topicservice.sebdblogsToAdmin().subscribe(
      data =>
      {
        // sessionStorage.getItem(JSON.stringify(data));
        this.topicData = data;
        console.log('Data is fetched Sucesssfully');
        console.log(this.topicData);

      },
      err =>
      {
       // alert("data is not fetched");
        console.log('Data is not fetched sucessfully');
      }
    );
  }

  // editStatus(blogId:String){
  //   this.route.navigate(['edit',blogId]);

  // }
 // location.reload();
  approveTopic(id: string){
    
    this.topicservice.approveBlogByAdmin(id).subscribe(

      data =>
      {console.log('Approved');
       alert(' Topic is approved');
       location.reload();
       //location.reload();
    },
    err => console.log('error')
    );
    }
    rejectTopic(id: string){
      this.topicservice.rejectBlogByAdmin(id).subscribe(

        data =>
        {
         
          console.log('Rejected');
          location.reload();
         alert(' Topic is Rejected');
      },
      err => console.log('error')
      );
    }
    viewApproveTopics(){
      this.route.navigate(['approvedtopicsforadmin']);
    }
}
