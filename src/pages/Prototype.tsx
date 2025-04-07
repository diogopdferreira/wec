
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Prototype = () => {
  const {
    t,
    language
  } = useLanguage();
  
  const prototypeInfo = {
    overview: {
      en: 'Coming Soon',
      pt: 'Em Breve'
    },
    technical: {
      en: 'Coming Soon',
      pt: 'Em Breve'
    },
    testing: {
      en: 'Coming Soon',
      pt: 'Em Breve'
    }
  };
  
  const phases = [
    {
      title: {
        en: 'Team Formation and Project Selection',
        pt: 'Formação da equipa e escolha do projeto'
      },
      description: {
        en: 'The team got together and started to discuss the logistics of the project.',
        pt: 'A equipa reuniu-se e começou a discutir a logística do projeto.'
      },
      status: {
        en: 'Completed',
        pt: 'Concluído'
      },
      date: {
        en: 'January 2025',
        pt: 'Janeiro 2025'
      }
    }
  ];

  return <div className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 md:py-24 wave-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
              {t('prototypeTitle')}
            </h1>
            <p className="text-xl text-ocean-800 mb-6">
              {t('prototypeSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Prototype Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="overview">
                  {language === 'en' ? 'Overview' : 'Visão Geral'}
                </TabsTrigger>
                <TabsTrigger value="technical">
                  {language === 'en' ? 'Technical Details' : 'Detalhes Técnicos'}
                </TabsTrigger>
                <TabsTrigger value="testing">
                  {language === 'en' ? 'Testing Results' : 'Resultados de Testes'}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-ocean-800 mb-4">
                    {language === 'en' ? 'System Overview' : 'Visão Geral do Sistema'}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {prototypeInfo.overview[language]}
                  </p>
                  
                  <div className="aspect-video bg-ocean-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-ocean-500 text-lg font-medium">
                      {language === 'en' ? 'Prototype Visualization' : 'Visualização do Protótipo'}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="technical" className="mt-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-ocean-800 mb-4">
                    {language === 'en' ? 'Technical Specifications' : 'Especificações Técnicas'}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {prototypeInfo.technical[language]}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-ocean-700">
                        {language === 'en' ? 'Power Output' : 'Saída de Energia'}
                      </h4>
                      <p className="text-gray-700">
                        {language === 'en' ? 'Coming Soon' : 'Em Breve'}
                      </p>
                    </div>
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-ocean-700">
                        {language === 'en' ? 'Dimensions' : 'Dimensões'}
                      </h4>
                      <p className="text-gray-700">
                        {language === 'en' ? 'Coming Soon' : 'Em Breve'}
                      </p>
                    </div>
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-ocean-700">
                        {language === 'en' ? 'Materials' : 'Materiais'}
                      </h4>
                      <p className="text-gray-700">
                        {language === 'en' ? 'Coming Soon' : 'Em Breve'}
                      </p>
                    </div>
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <h4 className="font-bold mb-2 text-ocean-700">
                        {language === 'en' ? 'Operational Depth' : 'Profundidade Operacional'}
                      </h4>
                      <p className="text-gray-700">
                        {language === 'en' ? 'Coming Soon' : 'Em Breve'}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="testing" className="mt-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-ocean-800 mb-4">
                    {language === 'en' ? 'Testing & Results' : 'Testes e Resultados'}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {prototypeInfo.testing[language]}
                  </p>
                  
                  <h4 className="font-bold text-lg text-ocean-700 mb-3">
                    {language === 'en' ? 'Key Performance Indicators' : 'Indicadores-Chave de Desempenho'}
                  </h4>
                  <div className="space-y-4 mb-6">
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">
                          {language === 'en' ? 'Energy Conversion Efficiency' : 'Eficiência de Conversão de Energia'}
                        </span>
                        <span>{language === 'en' ? 'Coming Soon' : 'Em Breve'}</span>
                      </div>
                    </div>
                    
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">
                          {language === 'en' ? 'Structural Integrity' : 'Integridade Estrutural'}
                        </span>
                        <span>{language === 'en' ? 'Coming Soon' : 'Em Breve'}</span>
                      </div>
                    </div>
                    
                    <div className="bg-ocean-50 p-4 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">
                          {language === 'en' ? 'Environmental Impact Score' : 'Pontuação de Impacto Ambiental'}
                        </span>
                        <span>
                          {language === 'en' ? 'Coming Soon' : 'Em Breve'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-ocean-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-ocean-900 mb-12">
              {language === 'en' ? 'Development Timeline' : 'Cronograma de Desenvolvimento'}
            </h2>
            
            <div className="space-y-6">
              {phases.map((phase, index) => <div key={index} className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="md:w-1/4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${phase.status[language as keyof typeof phase.status] === (language === 'en' ? 'Completed' : 'Concluído') ? 'bg-green-100 text-green-800' : phase.status[language as keyof typeof phase.status] === (language === 'en' ? 'In Progress' : 'Em Andamento') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {phase.status[language as keyof typeof phase.status]}
                    </span>
                    <p className="text-sm text-gray-500 mt-2">
                      {phase.date[language as keyof typeof phase.date]}
                    </p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg font-bold text-ocean-800">
                      {phase.title[language as keyof typeof phase.title]}
                    </h3>
                    <p className="text-gray-700">
                      {phase.description[language as keyof typeof phase.description]}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2025 Wave Energy Converter Project — Developed by Técnico Students.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Prototype;
