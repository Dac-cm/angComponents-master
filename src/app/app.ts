import { Component } from '@angular/core';
import { ShoppingInput } from './shopping-input/shopping-input';
import { ShoppingList } from './shopping-list/shopping-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingInput, ShoppingList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  items: string[] = [];

  onAddItem(item: string): void {
    this.items.push(item);
  }

  onRemoveItem(index: number): void {
    this.items.splice(index, 1);
  }
}
