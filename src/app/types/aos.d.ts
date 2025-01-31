// types/aos.d.ts
declare module 'aos' {
  interface AOSOptions {
    duration?: number;
    easing?: string;
    delay?: number;
    // Add any other specific properties for AOS options here
  }

  export function init(options?: AOSOptions): void;
}
