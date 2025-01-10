import ErrorPropertyCallout from '@/canvas/Algolia/ErrorPropertyCallout';
import CanvasAlgoliaProvider from '@/context/CanvasAlgoliaProvider';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-react';
import algoliasearch from 'algoliasearch/lite';
import getConfig from 'next/config';
import { InstantSearch } from 'react-instantsearch-hooks-web';
const {
  publicRuntimeConfig: { applicationId, algoliaApiKey },
} = getConfig();

const searchClient = algoliasearch(applicationId, algoliaApiKey);

type CanvasInstantSearchProps = {
  title?: string;
  instantSearchParams?: {
    instantSearchProps?: {
      indexName?: string;
      stalledSearchDelay?: number;
    };
  };
};

const CanvasInstantSearch = ({ instantSearchParams, title }: ComponentProps<CanvasInstantSearchProps>) => {
  const { instantSearchProps } = instantSearchParams || {};

  if (!instantSearchProps?.indexName) {
    return <ErrorPropertyCallout title="Property 'indexName' was not defined for InstantSearch component." />;
  }

  return (
    <CanvasAlgoliaProvider defaultIndexName={instantSearchProps.indexName}>
      {Boolean(title) && <h2>{title}</h2>}
      <InstantSearch {...instantSearchProps} indexName={instantSearchProps.indexName} searchClient={searchClient}>
        <UniformSlot name="widgets" />
      </InstantSearch>
    </CanvasAlgoliaProvider>
  );
};

export default CanvasInstantSearch;
