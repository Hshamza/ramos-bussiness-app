import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appAnimationTrigger]'
})
export class AnimationTriggerDirective implements OnInit {
  @Input() animateOnNavigation: boolean = false;
  @Input() triggerRoute: string = '';

  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd  && event.url === `/${this.triggerRoute}`) {
        this.el.nativeElement.classList.add('animate-in');
      }
    });
  }
}
