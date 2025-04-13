import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, HeartPulse, Smile, Music, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const resources = [
    {
      title: 'Anxiety Management',
      description: 'Tools and techniques to help manage anxiety and stress',
      icon: HeartPulse,
      path: '/dashboard/anxiety',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Depression Support',
      description: 'Resources and guidance for dealing with depression',
      icon: Smile,
      path: '/dashboard/depression',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Meditation',
      description: 'Guided meditation and mindfulness exercises',
      icon: Brain,
      path: '/dashboard/meditation',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Music Therapy',
      description: 'Therapeutic music to calm your mind',
      icon: Music,
      path: '/dashboard/music-therapy',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      title: 'Daily Shlokas',
      description: 'Ancient wisdom for modern peace',
      icon: BookOpen,
      path: '/dashboard/shlokas',
      color: 'bg-red-50 text-red-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Wellness Resources</h1>
        <p className="text-xl text-slate-600">Explore our collection of tools and resources for your mental well-being</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Link
              key={resource.path}
              to={resource.path}
              className="block group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`inline-block p-4 rounded-xl ${resource.color} mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600">{resource.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;