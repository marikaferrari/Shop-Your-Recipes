import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-notes',
  templateUrl: './shopping-notes.component.html',
  styleUrls: ['./shopping-notes.component.css']
})
export class ShoppingNotesComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote.trim());
      this.newNote = '';
    }
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
