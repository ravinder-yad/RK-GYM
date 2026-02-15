import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Transformation = lazy(() => import('./pages/Transformation'));
const Pricing = lazy(() => import('./pages/Pricing'));
const BMI = lazy(() => import('./pages/BMI'));
const Contact = lazy(() => import('./pages/Contact'));
const DietPlans = lazy(() => import('./pages/DietPlans'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

const Loading = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="trainers" element={<Trainers />} />
            <Route path="transformation" element={<Transformation />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="bmi" element={<BMI />} />
            <Route path="contact" element={<Contact />} />
            <Route path="diet-plans" element={<DietPlans />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
