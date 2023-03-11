import { Component } from '@angular/core';
import { ShowsService } from './services/shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A_Walia_RealityShows';
  contentId: number = 4;
  topContent: any = {};
  imgurl: string ='https://3.bp.blogspot.com/-s22fJGFLi3U/W2W4VEGnM0I/AAAAAAAADSo/0jYvQPESyQsXnRTx0gdN8B3AaSHHCLfuACLcBGAs/s1600/Screen%2BShot%2B2018-08-04%2Bat%2B3.29.01%2BPM.png';

  
  constructor(private ShowsService: ShowsService){}

  clickLog(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  ngOnInit(){
    this.ShowsService.getContentById(this.contentId).subscribe(content => this.topContent = content);
  }
}
