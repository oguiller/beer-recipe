import {Component} from 'angular2/core';

export class Beer {
  id: number;
  name: string;
}

@Component({

    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    		   <ul class="beers">
  			   <li *ngFor="#beer of beers">
  					<span class="badge">{{beer.id}}</span> {{beer.name}}
				</li>
			   </ul>
    		   <h2>{{beer.name}} details!</h2>
    		   <div><label>id: </label>{{beer.id}}</div>
    		   <div>
    		   		<label>name: </label>{{beer.name}}
					<input [(ngModel)]="beer.name" placeholder="name">
    		   </div> `
})

export class AppComponent { 

  beers = BEERS;
  title = 'List of Recipes';
  beer: Beer = {
  	id:1,
  	name: 'IPA'
  }
}

var BEERS: Beer[] = [
  { "id": 11, "name": "Red Imperial Ale" },
  { "id": 12, "name": "Pale Ale" },
  { "id": 13, "name": "White Beer" },
  { "id": 14, "name": "Extra Stout" },
  { "id": 15, "name": "Bock" },
  { "id": 16, "name": "Dubbel" },
  { "id": 17, "name": "Tripel" },
  { "id": 18, "name": "Pilsner" },
  { "id": 19, "name": "ScotchAle" },
  { "id": 20, "name": "IrishAle" }
];
