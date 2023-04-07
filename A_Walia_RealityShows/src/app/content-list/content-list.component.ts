import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentCards: Content[] = [];
  title: string ='';
  titleFound: boolean | null = null;
  imgurl: string ='https://3.bp.blogspot.com/-s22fJGFLi3U/W2W4VEGnM0I/AAAAAAAADSo/0jYvQPESyQsXnRTx0gdN8B3AaSHHCLfuACLcBGAs/s1600/Screen%2BShot%2B2018-08-04%2Bat%2B3.29.01%2BPM.png';

  searchTitle(){
    this.titleFound = this.contentCards.some(contentCard => contentCard.title.toLowerCase() === this.title.toLowerCase
    ());
  }

  constructor(private ShowsService: ShowsService){
    
  }

  ngOnInit(){
    this.ShowsService.getContent().subscribe(cards => this.contentCards = cards);
  }

  clickLog(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

  addCardContent(newCardContent: Content){
    this.ShowsService.addShow(newCardContent).subscribe(newShowFromServer => {
      this.contentCards.push(newShowFromServer);
      this.contentCards = [...this.contentCards];
    });
  }

}

