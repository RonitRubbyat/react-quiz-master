import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './LayOuts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: ()=> fetch(`https://openapi.programming-hero.com/api/quiz`),
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
