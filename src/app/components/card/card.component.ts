import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';

  constructor(){}

  ngOnInit(): void {
      
  }
}
