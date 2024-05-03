import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NewsService } from 'src/app/Service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  newData:any[]=[];
  newsNameFilter:string|null=null;
  orderBy:any
  orderByDirection:any
 constructor( private newsService:NewsService,private router:Router,private route: ActivatedRoute){}
 
 
 
 ngOnInit(): void {
    
   this.getAllNews();

   this.route.queryParams.subscribe(params => {
    this.newsNameFilter = params['newsNameFilter'];
    this.orderBy = params['orderBy'] || 'Id'; 
    this.orderByDirection = params['orderByDirection'] || 'ASC'; 

    this.getFilteredNews();
    this.newsNameFilter=""
  });

 
  }

  getFilteredNews() {
    this.newsService.getFilterNews(this.newsNameFilter, this.orderBy, this.orderByDirection).subscribe({
      next: (data => {
        this.newsNameFilter=""
        console.log(`data ===${this.newsNameFilter}`)
        this.newData = data;
        console.log(data)
      }),
      error: (err => {
        console.log(err);
      })
    });
  }


  getAllNews()
  {
    this.newsService.getAllNews().subscribe({
      next:(respon)=>{
        this.newData=respon
      },
      error:(err)=>{
        console.log(err.error)
      }
     })
  }

  goNewDetalis(id:any)
  {

   this.router.navigate([`/newsDetalis/${id}`]);
  }

  goAuthorDetalis(id:any)
  {
   this.router.navigate([`/authorDetalis/${id}`]);
  }
}
