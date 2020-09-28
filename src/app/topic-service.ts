import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TopicPayLoad} from './blogtopic';
import {Observable} from 'rxjs';
import { CommentPlayLoad } from './comments-payload';
@Injectable()
export class TopicService{
   
    private url1 = 'http://localhost:8080/update';
    private url2='http://localhost:8080/getBlogById';
    private approveURL='http://localhost:8080/approveBlog';
    //private RejectURL='http://localhost:8080/deleteblog';
    private RejectUrl='http://localhost:8080/rejectTopic';
    private addBlogURL='http://localhost:8080/addBlog';
    private createBlogUrl='localhost:8080/createComment';
    private getallcommemntsURL='http://localhost:8080/getallblogComments';
    private Url3='http://localhost:8080/createComment/TOP1/1';







    private url = 'http://localhost:8080/';

    private deleteUrl:string='localhost:8080/deleteComment/COMTOP10002';
    constructor(private httpClient: HttpClient){}

    createBlog(topicpayload: TopicPayLoad,id:number): Observable<any> {
        return this.httpClient.post(`${this.addBlogURL}/${id}`, topicpayload);
    }

    // CommentonTopic(commentPayLoad:CommentPlayLoad):Observable<any>{
    //     return this.httpClient.post(this.url+"createComment",commentPayLoad);
    // }
    readBlogs():Observable<any>{
        return this.httpClient.get(this.url+'getAllApprovedBlogs');
    }
    sebdblogsToAdmin():Observable<any>{
        return this.httpClient.get(this.url+'getAllRejectedBlogs');
    }
    editStatusbyadmin(data:TopicPayLoad):Observable<any>{
       
        return this.httpClient.post(`${this.url1}/${data.blogId}`,data);
    }
    getblogById(blogId:String):Observable<any>{
        return this.httpClient.get(`${this.url2}/${blogId}`);
    }

    approveBlogByAdmin(blogId:String):Observable<any>{

        return this.httpClient.post(`${this.approveURL}/${blogId}`,null);
    }
    rejectBlogByAdmin(blogId:String):Observable<any>{
        return this.httpClient.post(`${this.RejectUrl}/${blogId}`,null);
    }

    createComment(comment:CommentPlayLoad,blogId:String,userId:number):Observable<any>{

        console.log(comment)

        return this.httpClient.post("http://localhost:8080/createComment/TOP1/1",comment);
    }
    getAllComments(blogId:String):Observable<any>{
        return this.httpClient.get(`${this.getallcommemntsURL}/${blogId}`)
    }

    // CommentonTopic():Observable<any>{
    //     const blogId:string= "TOP1"
    //     const id:number= 1;
    //     return this.httpClient.post(`${this.Url3},null);
    // }

    // getAllBlogsForAdminBoth():Observable<any>{
    //     return this.httpClient.get(this.url+'getAllBlogs');
    // }
    deleteComment():Observable<any>{
        return this.httpClient.delete(this.deleteUrl);
    }

}