import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from '../shared/film/film.service';
import { Films } from '../model/films';
import { Results } from '../model/results';
import { PeopleService } from '../shared/people/people.service';
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  film : Films;
  people : Results[]=[]

  constructor(private route: ActivatedRoute,
              private filmService: FilmService,
              private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.clicfilm(this.route.snapshot.paramMap.get('id'))
  }

  clicfilm(id : string){
    this.filmService.getFilmId(id).subscribe(data => {
      this.film = data;
      this.listFilm();
    });
  }

  getPeopleId(people : string){  
      return people.match(/\/\d+\//)[0].slice(1,-1);
  }

  listFilm(){
    for(let p of this.film.characters){
      console.log(p)
      this.peopleService.getId(p.match(/\/\d+\//)[0].slice(1,-1)).subscribe(data => {
        console.log(data);
        this.people.push(data);  
    });
    }
  }
 
}
