import {
  createContext,
  useContext
} from 'react';
import { Container } from 'inversify';
import { repositoryContainer } from './inversify.config';

type RepositoryIocProviderProps = {
  container?: Container
  children: JSX.Element,
};

const RepositoryIocContext = createContext<{ container: Container } | null>(null);

export const RepositoryIocProvider = ({
  container,
  children
}: RepositoryIocProviderProps) => {
  const value = { container: container || repositoryContainer };

  return <RepositoryIocContext.Provider value={value}>{children}</RepositoryIocContext.Provider>;
};

export const useRepositoryIoc = () => useContext(RepositoryIocContext);
