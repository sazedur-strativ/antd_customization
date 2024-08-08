
import { QueryClient, QueryClientProvider } from 'react-query';
import CardDataFetch from './CardDataFetch';
import PostFetch from './PostFetch';
import PracTable from './PracTable';
import { TableOne } from './TableOne';
import TableThree from './TableThree';
import TableTwo from './TableTwo';
const queryClient = new QueryClient();

const App = () => (

  <>
  <TableOne/>
  <TableTwo/>
  <TableThree/>
  <PracTable/>
  <QueryClientProvider client={queryClient}>
      <CardDataFetch />
      <PostFetch/>
    </QueryClientProvider>

  </>



);
export default App;