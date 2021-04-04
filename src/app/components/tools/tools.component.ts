import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  logInput: string;
  errorMessage: string;
  stackTrace: string[] = [];

  workflowInput: string;
  environmentVariables: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  extractWorkflowInput() {
    try {
      this.environmentVariables = '';
      const envVars = JSON.parse(this.workflowInput).envVars;
      const propertyNames = Object.getOwnPropertyNames(envVars);
      for (const name of propertyNames) {
        this.environmentVariables += name + '=' + envVars[name] + '\n';
      }
    } catch (e) {
      console.log('Failed to parse env vars', e);
    }
  }

  extractErrorMessage() {
    try {
      this.errorMessage = '';
      this.stackTrace = [];
      const json = JSON.parse(this.logInput);
      this.errorMessage = JSON.parse(this.logInput).message;
      this.stackTrace = json.exception.split('\n');
    } catch (e) {
      console.log('failed to parse');
    }
  }
}
