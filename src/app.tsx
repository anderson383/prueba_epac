import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./components/features/Home";
import { RepositoryIocProvider } from "./services/config/context";


const queryClient = new QueryClient();

export const App = () => {
  return (
    <RepositoryIocProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </RepositoryIocProvider>
  );
};