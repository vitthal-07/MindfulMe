import { BookOpen, Brain, Music } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  answers: number[];
  score: number;
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 5 } = (location.state as LocationState) || {};

  const getAssessmentState = (score: number) => {
    if (score <= 3) return "critical";
    if (score <= 5) return "concerning";
    if (score <= 7) return "moderate";
    return "good";
  };

  const state = getAssessmentState(score);

  const recommendations = {
    good: {
      title: "You're in a Good Place!",
      description:
        "Your responses indicate a positive state of mental well-being. Keep maintaining these healthy practices!",
      suggestions: [
        "Continue daily meditation",
        "Practice gratitude",
        "Maintain your support system",
      ],
      color: "bg-green-50 text-green-800",
    },
    moderate: {
      title: "You're Doing Okay, with Room for Growth",
      description:
        "While you're managing well, there's opportunity to strengthen your mental wellness practices.",
      suggestions: [
        "Try guided meditation",
        "Explore music therapy",
        "Practice mindful breathing",
      ],
      color: "bg-blue-50 text-blue-800",
    },
    concerning: {
      title: "Let's Work on This Together",
      description:
        "Your responses suggest you're facing some challenges. We have tools and resources that can help.",
      suggestions: [
        "Start with gentle meditation",
        "Listen to calming music",
        "Practice daily affirmations",
      ],
      color: "bg-yellow-50 text-yellow-800",
    },
    critical: {
      title: "We're Here to Support You",
      description:
        "Your responses indicate you're going through a difficult time. While exploring our resources, we strongly recommend reaching out to a mental health professional.",
      suggestions: [
        "Begin with basic breathing exercises",
        "Try soothing music therapy",
        "Connect with support groups",
      ],
      color: "bg-red-50 text-red-800",
    },
  };

  const result = recommendations[state];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className={`${result.color} p-4 rounded-xl mb-6`}>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your Wellness Score</h3>
            <div className="text-4xl font-bold mb-2">{score}/10</div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-slate-800 mb-6">
          {result.title}
        </h2>
        <p className="text-lg text-slate-600 mb-8">{result.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {result.suggestions.map((suggestion, index) => (
            <div key={index} className="bg-indigo-50 p-6 rounded-xl">
              <p className="text-slate-700 font-medium">{suggestion}</p>
            </div>
          ))}
        </div>

        {state !== "good" && (
          <>
            <hr className="mb-6 border-slate-200" />
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Let's get started with some helpful tools:
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/dashboard/meditation")}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <Brain className="mr-2 h-5 w-5" />
                Start Meditation
              </button>
              <button
                onClick={() => navigate("/dashboard/music-therapy")}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <Music className="mr-2 h-5 w-5" />
                Try Music Therapy
              </button>
              <button
                onClick={() => navigate("/dashboard/shlokas")}
                className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Shlokas
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
