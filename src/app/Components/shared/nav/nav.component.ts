import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/Service/news.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
  @ViewChild('filter') filterInput!: ElementRef;

  sort: string | null = null;
  dir: string | null = null;
  filterdata: string | null = null;
  constructor(private newsService:NewsService,private router:Router){}
  ngOnInit(): void {
   
    this.filterdata="";
  }

  onSubmit(filterValue: string): void {
   
    this.filterdata = filterValue;
    console.log(this.filterdata);
    this.filterInput.nativeElement.value="";
    this.sendFilterData()
  }

  sendFilterData() {
    const filter = {
      newsNameFilter: this.filterdata!,
      orderBy: this.sort!, 
      orderByDirection: this.dir!
    };
    this.filterInput.nativeElement.value="";
    this.filterdata="";

    this.router.navigate(['/home'], { queryParams: filter });
  }
  
}
