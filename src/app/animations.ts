import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform:'translateY(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('2s ease-in')
    ]),
    transition(':leave', [
      animate('2s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
  export const RotateAnimation =
  trigger('rotateRouteAnimation', [
    state('*',
      style({
        opacity: 1,
        transform:'rotate(0deg)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'rotate(180deg)'
      }),
      animate('1s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);
