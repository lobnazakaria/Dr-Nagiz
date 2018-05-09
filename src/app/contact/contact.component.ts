import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms' ;
import {SendMsg} from '../form';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
send_form:FormGroup;
sendMsg:SendMsg[];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.send_form=this.fb.group({
      firstName:['',Validators],
      lastName:['',Validators],
      email:['',Validators],
      message:['',Validators]
    })
  }

}
