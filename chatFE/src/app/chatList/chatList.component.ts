import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatServiceService } from '../service/chatService.service';

@Component({
  selector: 'app-chatList',
  templateUrl: './chatList.component.html',
  styleUrls: ['./chatList.component.scss']
})
export class ChatListComponent implements OnInit {
  isLoaded: boolean = false;
  messages: ChatMessage[] = [];

  constructor(public service: ChatServiceService) { 
    this.service.getMessage().subscribe((data)=>{
      this.isLoaded = true;
      console.log("chatlist recieved: ", data);
      this.messages = data;
    });

    this.service.getChannels().subscribe((data) => {
      console.log("the component got the following channels: ", data)
    });   
  }
 
  ngOnInit(): void {}   
}


