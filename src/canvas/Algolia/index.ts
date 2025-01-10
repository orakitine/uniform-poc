import { registerUniformComponent } from '@uniformdev/canvas-react';
import BasicComponents from './BasicComponents';
import CanvasHits from './CanvasHits';
import CanvasIndex from './CanvasIndex';
import CanvasInstantSearch from './CanvasInstantSearch';
import CanvasPagination from './CanvasPagination';
import CanvasRefinementList from './CanvasRefinementList';
import CanvasSearchBox from './CanvasSearchBox';

registerUniformComponent({
  type: 'algolia-basicComponents',
  component: BasicComponents,
});

registerUniformComponent({
  type: 'algolia-hits',
  component: CanvasHits,
});

registerUniformComponent({
  type: 'algolia-index',
  component: CanvasIndex,
});

registerUniformComponent({
  type: 'algolia-instantSearch',
  component: CanvasInstantSearch,
});

registerUniformComponent({
  type: 'algolia-pagination',
  component: CanvasPagination,
});

registerUniformComponent({
  type: 'algolia-refinementList',
  component: CanvasRefinementList,
});

registerUniformComponent({
  type: 'algolia-searchBox',
  component: CanvasSearchBox,
});
