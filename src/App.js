import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import PageTwo from './Pages/PageTwo';
import HowWorks from './Pages/HowWorks';
import WorkWithUs from './Pages/WorkWithUs';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Technology from './Pages/Technology';
import AboutUs from './Pages/AboutUs';
import News from './Pages/News';
// import AA from './Pages/AA';
import NewsDetail from './Pages/NewsDetail';
// import Pricing from './Pages/Pricing';
import Candidate from './Pages/Candidate';
import Coming from './Pages/Coming';
import MockInterview from './Pages/MockInterview';
import Feature from './Pages/Feature';
import Career from './Pages/Career';
import Analysis from './Pages/Analysis';
import BlogPage from './Pages/BlogPage';
import BlogDetails from './Pages/BlogDetails';
import Corporate from './Pages/Corporate';
import Collage from './Pages/Collage';


function App() {
  return (
  <>
     <Router>
   
   <Routes>
    <Route path="/" element={<Coming/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/mock-interview" element={<MockInterview/>}/>
    <Route path="/feature" element={<Feature/>}/>
    <Route path="/career" element={<Career/>}/>
    <Route path="/analysis" element={<Analysis/>}/>
    <Route path="/corporate" element={<Corporate/>}/>
    <Route path="/pagetwo" element={<PageTwo/>}/>
    <Route path="/candidate" element={<Candidate/>}/>
    <Route path="/howitwork" element={<HowWorks/>}/>
    <Route path="/workwithus" element={<WorkWithUs/>}/>
    <Route path="/blog" element={<BlogPage/>}/>
    <Route path="/blog/blog-detail" element={<BlogDetails/>}/>
    {/* <Route path="/blog" element={<Blog/>}/> */}
    <Route path="/blog/:blogId" element={<BlogDetail/>}/>
    <Route path="/tech" element={<Technology/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/collage" element={<Collage/>}/>
    <Route path="/news" element={<News/>}/>
    <Route path="/news/:blogId" element={<NewsDetail/>}/>
   </Routes>

 </Router>
  </>
  );
}

export default App;
