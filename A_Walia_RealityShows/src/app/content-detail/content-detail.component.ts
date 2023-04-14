import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  imgurl: string ='https://3.bp.blogspot.com/-s22fJGFLi3U/W2W4VEGnM0I/AAAAAAAADSo/0jYvQPESyQsXnRTx0gdN8B3AaSHHCLfuACLcBGAs/s1600/Screen%2BShot%2B2018-08-04%2Bat%2B3.29.01%2BPM.png';

  constructor(private route:ActivatedRoute, private showsService: ShowsService){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.showsService.getContentById(this.id).subscribe(show => this.content = show);
    })
  }
  clickLog(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

}
