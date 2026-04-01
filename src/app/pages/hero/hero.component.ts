import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal, computed } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
})
export class HeroComponent implements OnInit {
  ngOnInit() {}

  readonly name = signal('Manuel Morales');
  readonly age = signal(35);
  readonly getHeroDescription = computed(() => `${this.name()} has the age of ${this.age()}`);
  readonly textData = computed(() => [
    this.name(),
    this.age().toString(),
    this.getHeroDescription(),
  ]);
  changeHero = () => this.name.update((name) => (name = 'Esteban Zuarez'));
  changeAge = () => this.age.update((a) => (a = 57));
  resetForm = () => {
    this.name.set('Manuel Morales');
    this.age.set(35);
  };
}
