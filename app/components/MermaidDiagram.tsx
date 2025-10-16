'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  content: string;
  id?: string;
}

export default function MermaidDiagram({ content, id }: MermaidDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!diagramRef.current) return;

    // Generate unique ID if not provided
    const diagramId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;

    // Initialize Mermaid with the diagram ID
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#6B2C2C',
        primaryTextColor: '#F4E8D0',
        primaryBorderColor: '#C9A961',
        lineColor: '#B8860B',
        secondaryColor: '#2C4A2C',
        tertiaryColor: '#1A1F3A',
        background: '#F4E8D0',
        mainBkg: '#F4E8D0',
        secondBkg: '#FAF5E4',
        tertiaryBkg: '#E8D7B5'
      },
      flowchart: {
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: 'basis'
      }
    });

    // Render the diagram
    mermaid.render(diagramId, content).then(({ svg }) => {
      if (diagramRef.current) {
        diagramRef.current.innerHTML = svg;
      }
    }).catch((error) => {
      console.error('Mermaid rendering error:', error);
      if (diagramRef.current) {
        diagramRef.current.innerHTML = `<p class="text-red-600">Error rendering diagram: ${error.message}</p>`;
      }
    });
  }, [content, id]);

  return (
    <div 
      ref={diagramRef} 
      className="w-full h-auto flex justify-center items-center my-8 p-4 bg-cream/30 rounded-lg border border-gold/20"
      style={{ minHeight: '400px' }}
    />
  );
}
