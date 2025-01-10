import { renderHits } from '@/canvas/Algolia/Hit';
import { ComponentProps } from '@uniformdev/canvas-react';

const CanvasHits = (componentProps: ComponentProps) => {
  return <div className="hits">{renderHits(componentProps.component)}</div>;
};

export default CanvasHits;
