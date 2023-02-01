import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 0,
      title: "Bigg Boss",
      description: "Bigg Boss is an Indian reality television game show franchise based on the Dutch reality show Big Brother. It is produced by Endemol Shine India through Viacom18 and Disney Star. Subsequently, the various versions of the show are made internationally available through OTT platforms Voot and Disney+ Hotstar.Bigg Boss was originally started in Hindi language and has been extended into seven languages spoken in the Indian sub-continent, including Kannada, Bengali, Tamil, Telugu, Marathi and Malayalam.",
      creator: " Endemol Shine",
      imgURL: "https://1.bp.blogspot.com/-dKoig5fjHtA/XaXkDM_S-ZI/AAAAAAAAAXY/DfYVdWFiK4oTvDQ3gyiwdUZ0UaKZfvvUACLcBGAsYHQ/s1600/bigboss11a.jpg",
      type: "Reality Show"
    });
    this.contentList.add({id: 1,
      title: "Masterchef",
      description: "MasterChef is a competitive cooking show television format created by Franc Roddam, which originated with the UK version in July 1990. The format was revived and updated for the BBC in February 2005 by executive producers Roddam and John Silver with series producer Karen Ross.The revived format is sold internationally by Banijay. Its first international adaptation was MasterChef Australia, which began in 2009. The show has since been adapted in several other countries.",
      creator: "Francis George",
      imgURL: "https://tse2.mm.bing.net/th?id=OIP.SAr4U7xYf6SgbqwQ-RkDIAHaEK&pid=Api&P=0",
      type: "Cooking Reality Show"
    });
    this.contentList.add({id: 2,
      title: "Khatron ke khiladi",
      description: "Khatron Ke Khiladi (Fear Factor: Players of Danger) simply known as Khatron Ke Khiladi is an Indian Hindi-language stunt based reality television series based on the American series Fear Factor.[1] First launched as Fear Factor India on Sony TV it was sold to Colors TV and was relaunched as Fear Factor: Khatron Ke Khiladi on 21 July 2008.",
      creator: "Colors",
      imgURL: "https://tse2.mm.bing.net/th?id=OIP.JpyPXBb0b1iWLT8mo6rSGwHaCn&pid=Api&P=0",
      type: "Action Reality show"
    });
  }
}