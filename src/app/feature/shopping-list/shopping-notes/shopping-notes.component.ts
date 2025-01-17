import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-shopping-notes',
  templateUrl: './shopping-notes.component.html',
  styleUrls: ['./shopping-notes.component.css'],
  standalone: true,
  imports: [MatLabel, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, CdkTextareaAutosize]
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
