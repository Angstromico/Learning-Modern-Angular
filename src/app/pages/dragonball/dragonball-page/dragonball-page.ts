import { Component, signal, type WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPageComponent {
  name = signal('');
  ki = signal(0);

  changeName = (name: string) => this.name.set(name);
  changeKi = (ki: number) => this.ki.set(ki);

  characters: WritableSignal<{ name: string; ki: number }[]> = signal([]);

  addCharacter() {
    if (!this.name().trim() || this.ki() === null || this.ki()! <= 0) {
      return;
    }

    const newCharacter = {
      name: this.name().trim(),
      ki: this.ki()!,
    };

    this.characters.update((prev) => [...prev, newCharacter]);

    this.name.set('');
    this.ki.set(0);
  }
}
