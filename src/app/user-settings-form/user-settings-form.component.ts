import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    suscriptionType: '',
    notes: ''
  };

  userSettings: UserSettings = { ...this.originalUserSettings };//Use spread operator to copy values from originalUserSettings, so you always work with a copy of the form values and avoid lost the original if the user press back or cancel button
  //This is used to make a copy of top level properties, if you want a deep copy (objest within objects). You could use Lodash.deepclone

  onSubmit(form: NgForm) { 
    console.log('in onSubmit:',form.valid);

  }
}
