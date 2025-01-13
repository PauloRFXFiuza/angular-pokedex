import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})
export class PokemonCardComponent {
  @Input() 
  pokemon!: string;

  teste: string = 'Informação qualquer';
}
