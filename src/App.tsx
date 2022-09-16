import { Fragment, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Components
import Header from "./components/layout/Header/Header";
import Loading from "./components/layout/Loading/Loading";
import Error from "./components/layout/Error/Error";

function App() {
  return (
    <Fragment>
      <ErrorBoundary
        fallbackRender={({ error }) => <Error message={error.message} />}
      >
        <Suspense fallback={<Loading />}>
          <Header />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
}
export default App;
