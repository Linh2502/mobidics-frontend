import { trigger, state, transition, animate, style } from '@angular/animations';

export class Animations {
  public static slideInOut = trigger('slideInOut', [
    state('closed', style({
      height: 0,
      zIndex: 0
    })),
    state('open', style({
      height: '*'
    })),
    transition('closed => open', animate('500ms ease-in')),
    transition('open => closed', animate('500ms ease-out'))
  ]);

  public static fadeInOut = trigger('fadeInOut', [
    state('in', style({
      opacity: 1
    })),
    state('out', style({
      opacitiy: 0
    })),
    transition('* <=> *', animate('500ms'))
  ])
}
