// app/components/InitialScreen.tsx
import { User, Zap, AlertTriangle, ArrowRight } from 'lucide-react';
import React from 'react';

// Props agar bisa memicu perubahan state di parent component
interface InitialScreenProps {
  onPromptClick: () => void;
}

const InfoCard = ({ title, icon: Icon, items }: { title: string, icon: React.ElementType, items: string[] }) => (
  <div className="text-center">
    <Icon className="mx-auto mb-2" size={24} />
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <button className="bg-white p-3 rounded-lg text-sm w-full shadow-sm hover:bg-gray-50">
            {item}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const PromptSuggestion = ({ text, onClick }: { text: string, onClick: () => void }) => (
  <button onClick={onClick} className="bg-white p-3 rounded-lg text-sm w-full text-left flex justify-between items-center shadow-sm hover:bg-gray-50">
    {text}
    <ArrowRight size={16} className="text-gray-400" />
  </button>
);


const InitialScreen = ({ onPromptClick }: InitialScreenProps) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-12">AI Chat</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
        <InfoCard 
          title="Personalities" 
          icon={User} 
          items={['SEO Expert', 'Content Creator', 'SEO Expert']} 
        />
        <InfoCard 
          title="Capabilities" 
          icon={Zap} 
          items={[
            'Lorem ipsum dolor sit amet consectetur. Amet praesent dolor in et at.', 
            'Lorem ipsum dolor sit amet consectetur. Amet praesent dolor in et at.'
          ]} 
        />
        <InfoCard 
          title="Limitations" 
          icon={AlertTriangle} 
          items={[
            'Lorem ipsum dolor sit amet consectetur. Amet praesent dolor in et at.', 
            'Lorem ipsum dolor sit amet consectetur. Amet praesent dolor in et at.'
          ]} 
        />
      </div>
      <div className="w-full max-w-lg space-y-3">
        <PromptSuggestion text="SEO Expert" onClick={onPromptClick} />
        <PromptSuggestion text="Content Creator" onClick={onPromptClick} />
        <PromptSuggestion text="SEO Expert" onClick={onPromptClick} />
      </div>
    </div>
  );
};

export default InitialScreen;