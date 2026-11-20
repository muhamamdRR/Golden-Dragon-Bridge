/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AboutExperienceSection from './components/AboutExperienceSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import InquirySection from './components/InquirySection';
import Navbar from './components/Navbar';
import ServiceModelsSection from './components/ServiceModelsSection';
import SpecialistSupportSection from './components/SpecialistSupportSection';
import WorkflowSection from './components/WorkflowSection';
import { ServiceModel } from './data/goldenDragonData';

export default function App() {
  const [selectedModelId, setSelectedModelId] = useState<ServiceModel['id'] | null>(null);

  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectModelForInquiry = (modelId: ServiceModel['id']) => {
    setSelectedModelId(modelId);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900">
      <Navbar onRequestBrief={() => scrollToSection('#contact')} />

      <main className="flex-1">
        <HeroSection
          onStartBrief={() => scrollToSection('#contact')}
          onExploreServices={() => scrollToSection('#services')}
        />
        <AboutExperienceSection />
        <ServiceModelsSection
          selectedModelId={selectedModelId}
          onSelectForInquiry={handleSelectModelForInquiry}
        />
        <WorkflowSection />
        <SpecialistSupportSection />
        <InquirySection
          selectedModelId={selectedModelId}
          onModelChange={setSelectedModelId}
        />
      </main>

      <Footer />
    </div>
  );
}
