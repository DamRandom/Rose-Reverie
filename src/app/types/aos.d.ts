// types/aos.d.ts
declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    delay?: number;
    once?: boolean;
  }

  export function init(options?: AOSOptions): void;
}
