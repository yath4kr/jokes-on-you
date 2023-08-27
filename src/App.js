import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Joke } from "./Joke";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className="App">
      <h1 className="heading">Here is A Joke, Enjoy ;-) </h1>
      <QueryClientProvider client={client}>
        <Joke />
      </QueryClientProvider>
    </div>
  );
}

export default App;
