import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from "../pokemon-card/pokemon-card.component";
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})
export class PokemonListComponent {
    constructor(public pokemonService: PokemonService) { }
}