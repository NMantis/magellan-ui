import { trigger, animate, style, transition, state } from '@angular/animations';

export const slideInBottom = [
    trigger('slideInBottom', [
        state('void',
            style({
                transform: 'translateY(100%)',
            })),
        state('*', style({
            transform: 'translateY(0)',
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ])]

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

export const slideInRight = [
    trigger('slideInRight', [
        state('void', style({
            transform: 'translateX(100%)',
        })),
        state('*', style({
            transform: 'translateX(0)',
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ])
]