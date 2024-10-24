import { Route, Routes } from "react-router";
import { Layout } from "./Layout/Layout";
import { lazy, Suspense } from "react";
import CamperFeatures from "./CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "./CamperReviews/CamperReviews.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage.jsx"));
const CamperDetailPage = lazy(() =>
  import("../pages/CamperDetailPage/CamperDetailPage.jsx")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
