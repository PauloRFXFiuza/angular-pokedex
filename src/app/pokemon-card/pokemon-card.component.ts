import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.sass'
})
export class PokemonCardComponent {
  @Input() 
  pokemon!: string;

  @Input() 
  numero!: number;

  pegarImagemPokemon(){
    const numeroFormatado = this.numero;

    return `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }
}
