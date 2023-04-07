import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contentCards } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>("/api/shows");
  }

  getContentById(id: number): Observable<any> {
    const content = contentCards.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}
