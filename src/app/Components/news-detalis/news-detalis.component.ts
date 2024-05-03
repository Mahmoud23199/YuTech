import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/Service/news.service';

@Component({
  selector: 'app-news-detalis',
  templateUrl: './news-detalis.component.html',
  styleUrls: ['./news-detalis.component.css']
})
export class NewsDetalisComponent implements OnInit {
  newsItem:any
  newId:any;
  constructor(private newsService:NewsService,private router:Router,private activeRouter:ActivatedRoute){}
 
  
  ngOnInit(): void {
    this.newId=this.activeRouter.snapshot.paramMap.get('id');

    this.newsService.getNewsById(this.newId).subscribe({
      next:(data=>{
        console.log(data);
        this.newsItem=data
      }),
      error:(err=>{
      })
    })
    console.log(this.newId)
  }

}
