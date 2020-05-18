import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConnectService} from './connect-service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.connectService.sendEmail(f.value).subscribe();
  }

}
