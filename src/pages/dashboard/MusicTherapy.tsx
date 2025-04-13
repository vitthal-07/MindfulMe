import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useState } from 'react';

const MusicTherapy = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    {
      title: 'Morning Raaga',
      artist: 'Classical Ensemble',
      duration: '5:30',
      mood: 'Energizing'
    },
    {
      title: 'Evening Peace',
      artist: 'Meditation Masters',
      duration: '6:15',
      mood: 'Calming'
    },
    {
      title: 'Nature\'s Symphony',
      artist: 'Forest Sounds',
      duration: '4:45',
      mood: 'Relaxing'
    },
    {
      title: 'Ocean Waves',
      artist: 'Natural Therapy',
      duration: '7:20',
      mood: 'Peaceful'
    },
    {
      title: 'Mountain Stream',
      artist: 'Healing Sounds',
      duration: '5:55',
      mood: 'Soothing'
    }
  ];

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Music Therapy</h1>
        <p className="text-xl text-slate-600">Heal your mind with therapeutic sounds</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-8">
            <Volume2 className="h-24 w-24 text-white" />
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-2">
            {tracks[currentTrack].title}
          </h2>
          <p className="text-slate-600 mb-6">{tracks[currentTrack].artist}</p>

          <div className="w-full max-w-md mb-8">
            <div className="bg-slate-200 h-1 rounded-full mb-2">
              <div className="bg-indigo-600 h-1 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>1:50</span>
              <span>{tracks[currentTrack].duration}</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full hover:bg-slate-100 transition"
            >
              <SkipBack className="h-6 w-6 text-slate-700" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-6 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full hover:bg-slate-100 transition"
            >
              <SkipForward className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Playlist</h3>
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <button
              key={index}
              onClick={() => setCurrentTrack(index)}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition ${
                currentTrack === index
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center">
                <div className="mr-4">
                  {currentTrack === index && isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </div>
                <div className="text-left">
                  <h4 className="font-medium">{track.title}</h4>
                  <p className="text-sm text-slate-500">{track.artist}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">{track.mood}</span>
                <span className="text-sm text-slate-500">{track.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicTherapy;