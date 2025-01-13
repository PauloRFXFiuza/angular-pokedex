import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})
export class PokemonListComponent {
  pokemons= ['Bulbasaur', 'Ivysaur'];
}