import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Brain, Music, BookOpen } from 'lucide-react';

interface LocationState {
  answers: number[];
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = [] } = (location.state as LocationState) || {};

  // Calculate severity based on answers
  const calculateSeverity = (answers: number[]) => {
    const average = answers.reduce((a, b) => a + b, 0) / answers.length;
    if (average <= 1.5) return 'mild';
    if (average <= 3) return 'moderate';
    return 'severe';
  };

  const severity = calculateSeverity(answers);

  const recommendations = {
    mild: {
      title: 'You\'re doing well!',
      description: 'While you\'re managing well, it\'s great to focus on prevention and maintaining your mental wellness.',
      suggestions: ['Try daily meditation', 'Practice mindful breathing', 'Explore calming shlokas']
    },
    moderate: {
      title: 'Let\'s work on this together',
      description: 'You\'re experiencing some challenges. Here are some tools that can help you feel better.',
      suggestions: ['Start with music therapy', 'Practice guided meditation', 'Try anxiety management techniques']
    },
    severe: {
      title: 'We\'re here to support you',
      description: 'You\'re going through a difficult time. While exploring our resources, consider reaching out to a mental health professional.',
      suggestions: ['Begin with gentle breathing exercises', 'Listen to calming music', 'Practice daily affirmations']
    }
  };

  const result = recommendations[severity];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-slate-800 mb-6">{result.title}</h2>
        <p className="text-lg text-slate-600 mb-8">{result.description}</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {result.suggestions.map((suggestion, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl">
              <p className="text-slate-700 font-medium">{suggestion}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate('/dashboard/meditation')}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <Brain className="mr-2 h-5 w-5" />
            Start Meditation
          </button>
          <button
            onClick={() => navigate('/dashboard/music-therapy')}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <Music className="mr-2 h-5 w-5" />
            Try Music Therapy
          </button>
          <button
            onClick={() => navigate('/dashboard/shlokas')}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Shlokas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;