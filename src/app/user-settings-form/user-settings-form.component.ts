import { Component } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  userSettings: UserSettings = {
    name: 'Marcos',
    emailOffers: false,
    interfaceStyle: 'dark',
    suscriptionType: 'Annual',
    notes: 'Here are some notes...'
  };
}
