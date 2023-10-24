import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(public fetchApiData: UserRegistrationService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  //fetch movie data from the Api
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) =>{
      this.movies = response;
      console.log(this.movies);
      return this.movies;
    });
  }
}
