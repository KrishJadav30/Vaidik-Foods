import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';
import { parseData } from './utils/parseData';

function App() {
  const [data, setData] = useState({ company: {}, products: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const parsed = await parseData();
      if (parsed) {
        setData(parsed);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Plus Jakarta Sans' }}>
        <h2 style={{ color: 'var(--color-primary)' }}>Loading Vaidik Foods...</h2>
      </div>
    );
  }

  return (
    <div className="App min-h-screen flex flex-col">
      <Header company={data.company} />
      <main className="flex-grow">
        <Hero company={data.company} />
        <About company={data.company} />
        <Products products={data.products} />
      </main>
      <Footer company={data.company} />
    </div>
  );
}

export default App;
