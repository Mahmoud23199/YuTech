import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/Service/author.service';

@Component({
  selector: 'app-author-detalis',
  templateUrl: './author-detalis.component.html',
  styleUrls: ['./author-detalis.component.css']
})
export class AuthorDetalisComponent implements OnInit{
  authorItem: any;
  authorId:any;
  constructor(private activeRoute:ActivatedRoute,private authorService:AuthorService){}

  ngOnInit(): void {
    this.authorId=this.activeRoute.snapshot.paramMap.get('id');

    this.authorService.getAthorById(this.authorId).subscribe({
      next:(data=>{
        console.log(data);
        this.authorItem=data
      }),
      error:(err=>{
      })
    })
  }

}
