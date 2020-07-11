import { Component, OnInit } from '@angular/core';
import {rejects} from 'assert';
import {resolve} from 'url';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    // tslint:disable-next-line:no-unused-expression
    // @ts-ignore
    // tslint:disable-next-line:no-unused-expression
    const promesa = new Promise((resolve, reject) => {
      let contador = 0;

      let interval=setInterval(() => {
        if (contador === 3) {
          reject(contador);
          clearInterval(interval);
        }
        console.log(contador);

        contador = contador + 1;

      }, 1000);


    });

    promesa.then( (value) => {
      console.info(`todo okay ${value}`);

    }).catch( (error) => {
      console.error(`todo okay ${error}`);

    });

  }

    ngOnInit(): void {

    }




}

