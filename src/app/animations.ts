import { trigger, animate, style, transition, state, query, stagger, animateChild } from '@angular/animations';

export const simpleFadeIn = [
    trigger('simpleFadeIn', [
        state('in', style({opacity: 1})),
        transition(':enter', [
          style({opacity: 0}),
          animate(900)
        ])
      ])
]

export const fadeIn = [
    trigger('fadeIn', [
        transition(':enter', [
            style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
            animate('0.1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                style({ transform: 'scale(1)', opacity: 1 }))  // final
        ])
    ])
]

export const list = [
    trigger('list', [
        transition(':enter', [
          query('@places', stagger(200, animateChild()))
        ]),
      ])

]

export const places = [
    trigger('places', [
        transition(':enter', [
          style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
          animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
            style({ transform: 'scale(1)', opacity: 1 }))  // final
        ])
      ])
]