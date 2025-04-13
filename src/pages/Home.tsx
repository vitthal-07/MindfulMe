import { Heart, Space as Peace, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Welcome to your space for peace
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Let's take care of your mind together
        </p>
        <button
          onClick={() => navigate('/questionnaire')}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
        >
          Start Now
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Sparkles className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
          <p className="text-slate-600">
            Get tailored recommendations based on your unique mental wellness journey
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Heart className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
          <p className="text-slate-600">
            Combine modern techniques with traditional wisdom for complete well-being
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <Peace className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Daily Practice</h3>
          <p className="text-slate-600">
            Access meditation, music therapy, and ancient wisdom for daily mental peace
          </p>
        </div>
      </div>

      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Peaceful meditation scene"
          className="rounded-2xl shadow-lg mb-8 w-full"
        />
      </div>
    </div>
  );
};

export default Home;