import "./index.css"
import { lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import TopNavigation from "./components/TopNavigation";
import SideBar from "./components/SideBar";

const About = lazy(() => import("./routes/About"));
const Blog = lazy(() => import("./routes/Blog"));
const Counter = lazy(() => import("./routes/Counter"));
const Home = lazy(() => import("./routes/Home"));
const Portfolio = lazy(() => import("./routes/Portfolio"));
const PageNotFound = lazy(() => import("./routes/PageNotFound"))
const Resume_CV = lazy(() => import("./routes/Resume_CV"))

function App() {
  return (
    <div class="main-layout">
      <TopNavigation />
      <SideBar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/counter" component={Counter} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume_cv" component={Resume_CV} />
        <Route path="*" component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default App;
