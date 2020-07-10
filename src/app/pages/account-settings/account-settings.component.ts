import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SettingsService} from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settings: SettingsService ) { }

  ngOnInit(): void {
    this.setDefaultFlagForColor();
  }


  changeColorCustom($event: MouseEvent) {
    // @ts-ignore
    const tema = `${$event.target.attributes.xdatatheme.value}`;

    this.settings.aplicarTema( tema );

  }

  setDefaultFlagForColor() {

    const selectores: any = document.getElementsByClassName('selector');



    selectores.filter( ref => ref.getAttribute('xdatatheme') === this.settings.ajustes.tema ).forEach( goal => {
      goal.classList.add('working');
    });


  }

}
