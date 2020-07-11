import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;


  constructor(private  router: Router,
              private title: Title,
              private meta: Meta
  ) {

    this.router.events.pipe(
    filter( (evento: ActivationEnd) => evento instanceof ActivationEnd  ),

    filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null  ),

  ).subscribe( routeData => {
    console.log(routeData) ;

    this.titulo = routeData.snapshot.data.titulo;
    this.title.setTitle( this.titulo );

    const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };

    this.meta.updateTag( metaTag );


    });

  }

  ngOnInit(): void {
  }

}
