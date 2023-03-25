import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChildren(SquareComponent) private Square: QueryList<SquareComponent>;

  beforegame = Array(9).fill(null);
  game = [...this.beforegame];
  X_TEXT = 'X';
  O_TEXT = 'O';
  currentPlayer = this.X_TEXT;
  winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningPosition = [];

  constructor(public elementRef: ElementRef) {}

  ngOnInit() {}

  initial() {
    this.game = Array(9).fill(null);
    this.currentPlayer = this.X_TEXT;
    this.Square.forEach((el) => (el.text = ''));
  }

  switchPlayer() {
    const player =
      this.currentPlayer === this.X_TEXT ? this.O_TEXT : this.X_TEXT;
    return player;
  }

  reset() {
    this.initial();
  }

  gameWon() {}

  private getSquare(squareNumber: number): SquareComponent {
    return this.Square.find((square) => square.position == squareNumber);
  }

  play(event) {
    const id = event;
    const square = this.getSquare(id);
    square.text = this.currentPlayer;
    this.game[id] = this.currentPlayer;
    if (this.full()) return;
    if (this.winner()) {
      return;
    }
    this.currentPlayer = this.switchPlayer();
  }

  full(): boolean {
    if (this.game.every((el) => el != null)) {
      this.reset();
      return true;
    }
  }

  winner() {
    let win = false;
    this.winningCombination.forEach((el) => {
      const [a, b, c] = el;
      if (
        this.game[a] &&
        this.game[a] === this.game[b] &&
        this.game[b] === this.game[c]
      ) {
        win = true;
        this.winningPosition = [a, b, c];
        console.log(this.winningPosition);
      }
    });
    return win;
  }
}
