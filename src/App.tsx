import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";

// layout
import MainLayout from "./Layout/MainLayout";

// Page
import MovieDetails from "./pages/Movies/MovieDetails";
import MoviesPage from "./pages/Movies/MoviesPage";
import SearchMovieList from "./pages/Movies/SearchMovieList";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorComponent />}>
      <Route index element={<MoviesPage />} />
      <Route path="movies/:movieId" element={<MovieDetails />} />
      <Route path="movies/search" element={<SearchMovieList />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
