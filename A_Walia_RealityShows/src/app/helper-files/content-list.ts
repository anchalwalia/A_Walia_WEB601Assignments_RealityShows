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
        return `${content.title}</br>
                ${content.description}</br>
                ${content.creator}</br>
                ${content.type}</br>
                <img src="${content.imgURL}">`;
    }
}