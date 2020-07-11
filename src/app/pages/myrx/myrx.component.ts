import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-myrx',
  templateUrl: './myrx.component.html',
  styleUrls: ['./myrx.component.css']
})
export class MyrxComponent implements OnInit, OnDestroy {
  private  customObserver: Subscription;
  constructor() {
    this.customObserver = this.buildObservable().pipe(retry(2), map( value => ({current: value, transform: value + 1}) ) , filter( value =>   value.current % 2 === 0) )
      .subscribe( numero => {console.log(numero); }, error => { console.error( error); } , () => { console.info('my observable end'); }
    );

  }

  ngOnInit(): void {
  }

  private buildObservable(): Observable<number> {
    return new Observable( observer => {
      let contador = 0;

      const interval = setInterval(() => {
        observer.next(contador);
        contador = contador + 1;





      }, 1000);


    });
  }

  ngOnDestroy(): void {
    this.customObserver.unsubscribe();
    console.log('Porque te vasssssssssssssssss');
  }
}
