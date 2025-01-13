import { Component } from '@angular/core';
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [PokemonListComponent, HttpClientModule],
  providers: [PokemonService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-pokedex';
}