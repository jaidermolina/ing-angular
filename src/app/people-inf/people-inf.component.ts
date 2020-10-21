import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../shared/people/people.service';
import { Results } from '../model/results'
import { PeopleListComponent } from '../people-list/people-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Films } from '../model/films';
import { FilmService } from '../shared/film/film.service'

@Component({
  selector: 'app-people-inf',
  templateUrl: './people-inf.component.html',
  styleUrls: ['./people-inf.component.css']
})
export class PeopleInfComponent implements OnInit {
  
  
  private router: Router;
  nameFilm: string;
  people : Results;
  public films: Films[]=[];
  id : string="1";
  @ViewChild(PeopleListComponent) pId: PeopleListComponent;
  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private filmService: FilmService) { }

  ngOnInit(): void {
    this.clicpeople(this.route.snapshot.paramMap.get('id'))
  }

  clicpeople(id: string){
    this.peopleService.getId(id).subscribe(data => {
      this.people = data;
      this.listFilm();
    });
  }

  getFilmsId(film : string){
    return film.match(/\/\d+\//)[0].slice(1,-1);
  }

  listFilm(){
    for(let p of this.people.films){
      this.filmService.getFilmId(p.match(/\/\d+\//)[0].slice(1,-1)).subscribe(data => {
        this.films.push(data);  
    });
    }
  }
}
