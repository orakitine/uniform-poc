import { createContext, useContext } from 'react';

const DefaultIndexContext = createContext<string | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CanvasAlgoliaProvider = ({ defaultIndexName, children }: { defaultIndexName: string; children: any }) => {
  return <DefaultIndexContext.Provider value={defaultIndexName}>{children}</DefaultIndexContext.Provider>;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getDefaultIndexName = () => useContext(DefaultIndexContext);

export default CanvasAlgoliaProvider;
