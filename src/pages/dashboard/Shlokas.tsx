import React from 'react';
import { BookOpen, RefreshCw } from 'lucide-react';

const Shlokas = () => {
  const shlokas = [
    {
      text: "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।",
      translation: "May all beings be happy, may all beings be healthy.",
      meaning: "A prayer for universal well-being and happiness of all beings",
      category: "Peace"
    },
    {
      text: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
      translation: "Knowledge gives discipline, from discipline comes worthiness.",
      meaning: "Emphasizes the importance of knowledge and discipline in personal growth",
      category: "Wisdom"
    },
    {
      text: "योगश्चित्तवृत्तिनिरोधः।",
      translation: "Yoga is the cessation of the modifications of the mind.",
      meaning: "Defines yoga as the practice of stilling the fluctuations of consciousness",
      category: "Meditation"
    }
  ];

  const affirmations = [
    {
      text: "I am at peace with myself and the world around me",
      category: "Peace"
    },
    {
      text: "I choose to be happy and spread happiness to others",
      category: "Positivity"
    },
    {
      text: "I am growing stronger and wiser each day",
      category: "Growth"
    },
    {
      text: "I am worthy of love, respect, and happiness",
      category: "Self-worth"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Daily Shlokas & Affirmations</h1>
        <p className="text-xl text-slate-600">Ancient wisdom for modern peace</p>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Sanskrit Shlokas</h2>
            <button className="p-2 hover:bg-slate-100 rounded-full transition">
              <RefreshCw className="h-5 w-5 text-slate-600" />
            </button>
          </div>
          
          <div className="space-y-8">
            {shlokas.map((shloka, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-indigo-50 rounded-lg mr-4">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-sm text-indigo-600 font-medium">
                      {shloka.category}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-800 mt-1">
                      {shloka.text}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-slate-700 mb-3">{shloka.translation}</p>
                <p className="text-slate-600">{shloka.meaning}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Daily Affirmations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {affirmations.map((affirmation, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white"
              >
                <span className="text-sm opacity-80 mb-2 block">
                  {affirmation.category}
                </span>
                <p className="text-lg font-medium">{affirmation.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shlokas;