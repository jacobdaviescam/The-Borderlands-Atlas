'use client';

import { useEffect, useRef } from 'react';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import * as d3 from 'd3';

interface MarkmapProps {
  content: string;
}

export default function MarkmapViewer({ content }: MarkmapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const markmapRef = useRef<Markmap | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const transformer = new Transformer();
    const { root } = transformer.transform(content);

    // Custom color scheme for dark academia theme
    const colorScheme = [
      '#6B2C2C', // burgundy
      '#C9A961', // gold
      '#2C4A2C', // forest
      '#B8860B', // brass
      '#1A1F3A', // navy
      '#6B4423', // brown
    ];

    // Create or update markmap
    if (!markmapRef.current) {
      markmapRef.current = Markmap.create(svgRef.current, {
        color: (node: any) => {
          const depth = node.depth || 0;
          return colorScheme[depth % colorScheme.length];
        },
        paddingX: 20,
        duration: 500,
        maxWidth: 300,
        initialExpandLevel: 2,
      });
    }

    markmapRef.current.setData(root);
    markmapRef.current.fit();

    // Cleanup
    return () => {
      if (markmapRef.current) {
        markmapRef.current.destroy();
        markmapRef.current = null;
      }
    };
  }, [content]);

  return (
    <div className="w-full h-[600px] border-2 border-gold/20 rounded-lg bg-cream/50 shadow-lg overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full"
        style={{ fontFamily: 'EB Garamond, Garamond, Georgia, serif' }}
      />
    </div>
  );
}

