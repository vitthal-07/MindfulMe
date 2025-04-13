import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    text: "How would you describe your sleep quality in the last week?",
    options: [
      "Excellent - I sleep well and feel refreshed",
      "Good - I generally sleep well with occasional disturbances",
      "Fair - I have trouble sleeping sometimes",
      "Poor - I frequently have difficulty sleeping",
      "Very Poor - I can hardly sleep at all",
    ],
  },
  {
    id: 2,
    text: "How often have you felt down, depressed, or hopeless in the past two weeks?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 3,
    text: "How would you rate your current stress level?",
    options: [
      "Very low - I feel relaxed",
      "Low - I feel mostly calm",
      "Moderate - I feel some stress",
      "High - I feel very stressed",
      "Very high - I feel overwhelmed",
    ],
  },
  {
    id: 4,
    text: "How often do you feel anxious or worried?",
    options: [
      "Rarely or never",
      "Occasionally",
      "Frequently",
      "Most of the time",
      "Almost constantly",
    ],
  },
  {
    id: 5,
    text: "How would you rate your ability to concentrate on tasks?",
    options: [
      "Excellent - I can focus very well",
      "Good - I can usually focus",
      "Fair - I sometimes have trouble focusing",
      "Poor - I often have difficulty concentrating",
      "Very poor - I can hardly concentrate",
    ],
  },
  {
    id: 6,
    text: "How often do you feel overwhelmed by your emotions?",
    options: [
      "Never - I manage my emotions well",
      "Rarely - I usually handle them effectively",
      "Sometimes - I occasionally feel overwhelmed",
      "Often - I frequently struggle",
      "Very often - I feel constantly overwhelmed",
    ],
  },
  {
    id: 7,
    text: "How would you describe your energy levels throughout the day?",
    options: [
      "Very high - Consistently energetic",
      "High - Generally good energy",
      "Moderate - Some ups and downs",
      "Low - Often tired",
      "Very low - Constantly fatigued",
    ],
  },
  {
    id: 8,
    text: "How often do you engage in activities you enjoy?",
    options: [
      "Daily",
      "Several times a week",
      "Once a week",
      "Rarely",
      "Never",
    ],
  },
  {
    id: 9,
    text: "How would you rate your social connections and support system?",
    options: [
      "Very strong - Many close relationships",
      "Strong - Good support system",
      "Moderate - Some support",
      "Weak - Limited support",
      "Very weak - Feel isolated",
    ],
  },
  {
    id: 10,
    text: "How often do you have difficulty making decisions?",
    options: [
      "Never - Very decisive",
      "Rarely - Usually confident in decisions",
      "Sometimes - Occasional uncertainty",
      "Often - Frequent difficulty",
      "Very often - Constant struggle with decisions",
    ],
  },
];

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score (0-4 scale per question, normalized to 1-10)
      const totalScore = newAnswers.reduce(
        (sum, answer) => sum + (4 - answer),
        0
      );
      const normalizedScore = Math.round(
        (totalScore / (questions.length * 4)) * 9 + 1
      );

      navigate("/result", {
        state: {
          answers: newAnswers,
          score: normalizedScore,
        },
      });
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              Mental Health Assessment
            </h2>
            <span className="text-sm text-slate-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <h3 className="text-xl text-slate-700 mb-6">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left px-6 py-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200"
            >
              <span className="text-slate-700">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
