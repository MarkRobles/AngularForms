import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  constructor(private dataService:DataService) {
    
  }
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    suscriptionType: '',
    notes: ''
  };

  userSettings: UserSettings = { ...this.originalUserSettings };//Use spread operator to copy values from originalUserSettings, so you always work with a copy of the form values and avoid lost the original if the user press back or cancel button
  //This is used to make a copy of top level properties, if you want a deep copy (objest within objects). You could use Lodash.deepclone
  postError = false;
  postErrorMessage = '';
  subscriptionTypes : Observable<string[]> | undefined;

  ngOnInit() { 
    this.subscriptionTypes=this.dataService.getSubscriptionTypes();
  }


  onHttpError(errorResponse: any) {
    console.log('error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    
  }
  onSubmit(form: NgForm) { 
    console.log('in onSubmit:', form.valid);
    console.log('data:', form.value);
    if (form.valid) {

      
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log("Success: ", result),
        error => this.onHttpError(error)
        // error => console.log("Error: ",error)
      );
    } else { 
      this.postError = true;
      this.postErrorMessage ="Please fix the above errors";
    }


  }

  onBlur(field: NgModel) { 
    console.log('in onBlur:',field.valid);
    
  }
}
