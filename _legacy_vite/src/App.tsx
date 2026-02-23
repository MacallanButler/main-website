import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';

function App() {
  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 selection:bg-rose-500/30 py-6 md:py-8">
      <main className="max-w-4xl mx-auto w-full space-y-8 md:space-y-10 flex-grow">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<CaseStudy />} />
        </Routes>

      </main>

      {/* Footer / Copyright - gentle fade */}
      <footer className="w-full text-center text-text-secondary/40 text-sm py-4 mt-auto">
        &copy; {new Date().getFullYear()} Macallan Butler
      </footer>
    </div>
  )
}

export default App
