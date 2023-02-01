import { Content } from "./content-interface";

export class ContentList{
    private contents: Content[];

    constructor(){
        this.contents = [];
    }


    get contentsList() {
        return this.contents;
    }


    add(content: Content){
        this.contents.push(content);
    }


    count(){
        return this.contents.length;
    }

getContentDetails(index: number){
        let content = this.contents[index];
        return `<h1><strong>${content.title}</strong></h1></br>
                ${content.description}</br>
                </br>
                ${content.creator}</br>
                </br>
                ${content.type}</br>
                </br>
                <img width="474" src="${content.imgURL}">`;
    }
}