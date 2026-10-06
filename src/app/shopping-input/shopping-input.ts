import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-input',
  imports: [FormsModule],
  templateUrl: './shopping-input.html',
  styleUrl: './shopping-input.css'
})
export class ShoppingInput {
  itemName = '';

  @Output() addItem = new EventEmitter<string>();

  add() {
    if (this.itemName.trim()) {
      this.addItem.emit(this.itemName.trim());
      this.itemName = '';
    }
  }
}
