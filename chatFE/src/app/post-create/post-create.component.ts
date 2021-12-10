import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ChatMessage } from '../models/chat';
import { ChatServiceService } from '../service/chatService.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  @Output() onPostEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: ChatMessage = {
    name: "",
    body: "",
    id: "",
    created_on: new Date(),
    updated_on: undefined,
    channel: ''
  }

  list: ChatMessage[] = [];

  postForm: FormGroup = this.fb.group({
    name: [this.data.name, Validators.required],
    body: [this.data.body, Validators.required]
  })

  constructor(private post: ChatServiceService, private fb: FormBuilder) { 
    this.initForm();
  }

  initForm(): void {
    this.postForm = this.fb.group({
      name: [this.data.name, Validators.required],
      body: [this.data.body, Validators.required]
    });
  }

  ngOnInit() {
  }

  clearForm(): void {
    this.postForm.setValue({
      title: this.data.name,
      body: this.data.body
    });
  }

  deletePost(id: string) {
    this.post.deletePost(id);
  }

  onSubmit() {
    console.log(this.postForm.value);
    let newPost: ChatMessage = {
      name: this.postForm.value.name,
      body: this.postForm.value.body,
      id: "",
      created_on: new Date(),
      updated_on: undefined,
      channel: ''
    };
      this.post.createNewMessage(newPost);      
      this.initForm();
      this.onPostEvent.emit(true);
    
  }
}
