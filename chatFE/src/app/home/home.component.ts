import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../service/chatService.service';
import { ChatMessage } from '../models/chat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any [] = [];

  chatMessage: ChatMessage[] = [];

  constructor(private message: ChatServiceService) { }

  ngOnInit() {
    this.data = this.message.getAllMessages();

    this.message.getAllChannel().subscribe(data => {
      this.chatMessage = data;
    });
  }

}
