import './App.css'

import { MainRoutes } from './routes/MainRoutes';

import { Header } from './pages/Header';
import { Footer } from './pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
