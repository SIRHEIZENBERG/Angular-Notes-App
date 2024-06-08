import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private toast: ToastrService) {}

  showInput: boolean = false;
  emptyField: boolean = true;

  notes: string[] = [];

  @ViewChild('noteCards', { static: true }) noteCardsRef!: ElementRef;

  ngOnInit(): void {
    this.showInput = false;
  }

  showToast() {
    this.toast.error('sucessfull blud');
  }

  showNoteInput() {
    this.showInput = true;
  }

  // handleKeyUp(event: any) {
  //   this.emptyField = event.target.value.trim().length === 0;
  // }

  addNote() {
    const noteInput = document.getElementById('noteInput') as HTMLInputElement;
    const note = noteInput?.value.trim();

    if (note) {
      this.notes.push(note);
      this.emptyField = false;
      this.toast.success('Note added');
      noteInput.value = '';
    } else {
      this.emptyField = true;
    }
  }

  handleKeyUp(event: KeyboardEvent): void {
    const noteInput = event.target as HTMLInputElement;
    this.emptyField = noteInput.value.trim() === '';

    if (event.key === 'Enter' && !this.emptyField) {
      this.addNote();
    }
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.toast.error('Note Deleted');
  }

  deleteAllNotes() {
    this.toast.error('All Notes Deleted');
    this.notes = [];
  }
}
