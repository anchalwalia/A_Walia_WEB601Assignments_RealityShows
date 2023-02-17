import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentCards: Content[];

  constructor(){
    this.contentCards = [
      {
        id: 0,
        title: "Bigg Boss",
        description: "Bigg Boss is an Indian reality television game show franchise based on the Dutch reality show Big Brother. It is produced by Endemol Shine India through Viacom18 and Disney Star. Subsequently, the various versions of the show are made internationally available through OTT platforms Voot and Disney+ Hotstar.Bigg Boss was originally started in Hindi language and has been extended into seven languages spoken in the Indian sub-continent, including Kannada, Bengali, Tamil, Telugu, Marathi and Malayalam.",
        creator: " Endemol Shine",
        imgURL: "https://interviewerpr.com/wp-content/uploads/2021/07/Bigg-Boss.jpg",
        type: "Reality Show",
        tags: ["Big","Boss","13"]
      },
      {
        id: 1,
        title: "Masterchef",
        description: "MasterChef is a competitive cooking show television format created by Franc Roddam, which originated with the UK version in July 1990. The format was revived and updated for the BBC in February 2005 by executive producers Roddam and John Silver with series producer Karen Ross.The revived format is sold internationally by Banijay. Its first international adaptation was MasterChef Australia, which began in 2009. The show has since been adapted in several other countries.",
        creator: "Francis George",
        imgURL: "https://tse2.mm.bing.net/th?id=OIP.SAr4U7xYf6SgbqwQ-RkDIAHaEK&pid=Api&P=0",
        type: "Reality Show"
      },
      {
        id: 2,
        title: "Khatron ke khiladi",
        description: "Khatron Ke Khiladi (Fear Factor: Players of Danger) simply known as Khatron Ke Khiladi is an Indian Hindi-language stunt based reality television series based on the American series Fear Factor.[1] First launched as Fear Factor India on Sony TV it was sold to Colors TV and was relaunched as Fear Factor: Khatron Ke Khiladi on 21 July 2008.",
        creator: "Colors",
        imgURL: "https://tse2.mm.bing.net/th?id=OIP.JpyPXBb0b1iWLT8mo6rSGwHaCn&pid=Api&P=0",
        type: "Reality show",
      },
      {
        id: 3,
        title: "Ssshhhh...Koi Hai",
        description: "Initial episodes were the stories related from every aspect of horror and thrillers and in later episodes a ghostbuster was introduced named Vikraal played by Mamik Singh, who captures ghosts. Later again, the show takes turn over after the return of Mayakaal, who was the most powerful wizard and captured Vikraal.",
        creator: "STAR PLUS",
        imgURL: "https://magazinefasr781.weebly.com/uploads/1/2/5/7/125796914/236012536.jpg",
        type: "Horror"
      },
      {
        id: 4,
        title: "Shaktiman",
        description: "Since the dawn of mankind, humanity was at peace until the arrival of the Kali Yuga. Since then, greed and hatred have taken over humanity and have been deteriorating it for the past 6000 years. To end this, a mystical sect of saints known as Suryanshis chose a man to rise up against all odds and defeat the evil prevailing within the society. He was taught the way to energise the 7 chakras of the body through Kundalini Yoga that helped him get mystical and supernatural powers. ",
        creator: "DD",
        imgURL: "https://www.pinkvilla.com/files/styles/contentpreview/public/shaktimaan_fans_can_rejoice_as_mukesh_khanna_reveals_he_is_working_on_a_contemporary_but_rooted_sequel.jpg?itok=fe0T7MiC",
      },
      {
        id: 5,
        title: "ShakaLaka Boom Boom",
        description: "The first season revolves around the central character, Sanju, finding a magical pencil, which has the ability to bring things drawn with it to life.[6] The second season centres on an alien, Shaan, and his adventures with the magical pencil.[7] The third season is about Sanju and Shaan's adventures in a magic school called Jadoo High, and in the fourth season, Sanju travels to the year 2022 to protect his family.",
        creator: "Star",
        imgURL: "https://i0.wp.com/bestoftheyear.in/wp-content/uploads/2018/03/shakalak.jpg?fit=1024%2C620&ssl=1",
        type: "Super power"
      },
      {
        id: 6,
        title: "Alif Laila",
        description: "Alaf Laila is an Indian television series based on the One Thousand and One Nights, also known as the Arabian Nights.[1] It was produced by Sagar Arts.[2] It was made in two seasons. The series from 1993 to 1997 for 143 episodes on DD National.",
        creator: "Anand Sagar",
        imgURL: "https://imgs.search.brave.com/kmbva68uLZXgu7aDe2dBq2gqPtl3k9pJj7VQkg6JUYQ/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9Q/WFJLeEtUTjdWQS9t/YXhyZXNkZWZhdWx0/LmpwZw",
      },
    ]
  }

  clickLog(content: any){
    console.log(`ID: ${content.id}`);
    console.log(`Title: ${content.title}`);
  }

}

