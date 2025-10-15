declare module 'markmap-lib' {
  export class Transformer {
    transform(markdown: string): { root: any };
  }
}

declare module 'markmap-view' {
  export class Markmap {
    static create(svg: SVGSVGElement, options?: any): Markmap;
    setData(data: any): void;
    fit(): void;
    destroy(): void;
  }
}
