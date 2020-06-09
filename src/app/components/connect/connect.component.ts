import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConnectService} from './connect-service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  formSubmitted = false;
  error = null;

  constructor(private connectService: ConnectService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // console.log(f.value);

    this.connectService.sendEmail(f.value).subscribe(
      data => {
      },
      error => {
        this.snackBar.open('Form was unable to be submitted. Please try again later.', 'OK');
      },
      () => {
        this.formSubmitted = true;
      }
    );
  }

}
