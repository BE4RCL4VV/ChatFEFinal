import { Component, OnInit } from '@angular/core';
import { ChatMessage, Post } from './models/chat';
import { interval, Observable } from 'rxjs';
import { ChatServiceService } from './service/chatService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chatFE';

  isLoaded: boolean = false;

  data: ChatMessage[] = [];

  postList: Post[] = [];

  constructor(public service: ChatServiceService) {}

  ngOnInit(): void {
    this.service.getMessage().subscribe((data)=>{
      this.data = data;
    });
  }

  submitMessage(){
    this.data = this.service.data;
  }
  toggleLoaded() {
    this.isLoaded =!this.isLoaded;
  }
}
