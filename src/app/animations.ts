import {trigger, state, transition, animate, style, keyframes} from '@angular/animations';

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
    transition('void => in', [
      style({opacity: 0}),
      animate('500ms')
    ]),
    transition('* <=> *', animate('500ms'))
  ]);

  public static pushInOut = trigger('pushInOut', [
    state('1', style({
      height: '*',
      opacity: 1
    })),
    state('void', style({
      height: 0,
      opacity: 0
    })),
    transition('void => 1', animate(500, keyframes([
      style({height: 0, opacity: 0, offset: 0}),
      style({height: '*', offset: 0.5}),
      style({opacity: 1, offset: 1.0})
    ]))),
    transition('1 => void', animate(500, keyframes([
      style({height: '*', opacity: 1, offset: 0}),
      style({opacity: 0, offset: 0.5}),
      style({height: 0, offset: 1.0})
    ])))
  ]);
}
