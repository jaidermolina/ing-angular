import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmService } from '../shared/film/film.service';
import { Films } from '../model/films'
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  film : Films;

  constructor(private route: ActivatedRoute,
              private filmService: FilmService) { }

  ngOnInit(): void {
    this.clicfilm(this.route.snapshot.paramMap.get('id'))
  }

  clicfilm(id : string){
    this.filmService.getFilmId(id).subscribe(data => {
      this.film = data;  
    });
  }

  getPeopleId(people : string){
    
      return people.match(/\/\d+\//)[0].slice(1,-1);
  }


 
}
