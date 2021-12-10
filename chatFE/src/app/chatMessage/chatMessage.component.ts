import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage = {



    name: "",
    body: "",
    id: "",
    created_on: new Date,
    updated_on: new Date,
    channel: ""
   };
//  Post: Post = {
//     {
//       title: this.postForm.value.title,
//       body: this.postForm.value.body,
//       id: 0,
//       userID: 0,
//       image: ""
//     }

//   };
  constructor() { }

  ngOnInit() {
  }

}

