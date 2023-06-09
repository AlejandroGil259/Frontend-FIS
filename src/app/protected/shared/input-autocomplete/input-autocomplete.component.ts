import { Component, Input } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ItemsService } from '../../services/items-service.service';

import { ItemsMenu } from '../../interfaces';
import { ITEMS_SEARCH } from '../../mocks';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.css']
})
export class InputAutocompleteComponent {
 
  @Input() background: string = 'var(--primary-lighter)'

  public term: string = ''
  public items: ItemsMenu[] = ITEMS_SEARCH


  constructor(private _itemsService: ItemsService) { }


  /**
   * It gets the suggestions from the service and sets the items property to the results.
   */
  public searching = () => {
      this.items = this._itemsService.getSuggestions(this.term)
  }


  /**
   * When the user selects an item from the autocomplete dropdown, the term is set to the label of the
   * selected item, and the item is retrieved from the items service
   * @param {MatAutocompleteSelectedEvent} event - MatAutocompleteSelectedEvent
   */
  public optionSelected = (event: MatAutocompleteSelectedEvent): void => {
      const item: ItemsMenu = event.option.value
      this.term = item.label
      this._itemsService.getItemByID(item.id!)
  }

}
