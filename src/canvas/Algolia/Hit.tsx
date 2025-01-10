import { ComponentInstance } from '@uniformdev/canvas';
import Link from 'next/link';
import { useState } from 'react';
import { Hits } from 'react-instantsearch-hooks-web';

enum HitTypes {
  Hit = 'algolia-hit',
}

export const renderHits = (component: ComponentInstance) => {
  const hitType = component?.slots?.hitComponent?.[0]?.type;
  switch (hitType) {
    case HitTypes.Hit:
      return <Hits hitComponent={Hit} />;
    default:
      return <Hits />;
  }
};

type HitComponent = {
  objectID: string;
  [key: string]: string | number | string[] | undefined;
};

const Hit = ({ hit }: { hit: HitComponent }) => {
  const { title = 'unknown', ...properties } = hit || {};
  const [isExpanded, setIsExpanded] = useState(false);
  const path = String(properties.path || '#');
  const description = String(properties.description || '');

  return (
    <div>
      <h3>
        <Link href={path} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
          {title}
        </Link>
      </h3>
      <p>{description}</p>
      <div onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
        <small>
          {isExpanded ? '▼' : '▶'} {isExpanded ? 'Hide' : 'Show'} debug info
        </small>
      </div>
      {isExpanded && <pre>{JSON.stringify(properties, null, 2)}</pre>}
    </div>
  );
};

export default Hit;
