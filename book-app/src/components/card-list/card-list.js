import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './card-list.css';

export class CardList extends DivComponent {
        constructor(appState, parentState) {
            super();
            this.appState = appState;
            this.parentState = parentState;
        }   

        renderFavorites() {
            const cardGrid = document.createElement('div');
            cardGrid.classList.add('card_grid');
            this.el.append(cardGrid);
            for(const card of this.parentState.list) {
                cardGrid.append(new Card(this.appState, card).render())
            }
            return this.el;
        }

        render() {
            if(this.parentState.loading) {
                this.el.innerHTML = `
                    <div class="card_list__loader">Загрузка...</div>
                `;
                return this.el
            }
            const cardGrid = document.createElement('div');
            cardGrid.classList.add('card_grid');
            this.el.append(cardGrid);
            const left = (this.parentState.list.length - (this.parentState.offset + 6)) >= 0
                        ?  6 
                        :  (this.parentState.list.length - this.parentState.offset)
            for (let i = this.parentState.offset; i < left + this.parentState.offset;i++) {
                cardGrid.append(new Card(this.appState, this.parentState.list[i]).render());   
            }
            return this.el;
        }
}