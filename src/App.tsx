import { useState } from 'react';
import Landing1 from './components/Landing1';
import Landing2 from './components/Landing2';
import Landing3 from './components/Landing3';
import Landing4 from './components/Landing4';
import { Eye, Moon, Sun } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const [selectedLanding, setSelectedLanding] = useState<number>(1);
  const { theme, toggleTheme } = useTheme();

  const renderLanding = () => {
    switch (selectedLanding) {
      case 1:
        return <Landing1 />;
      case 2:
        return <Landing2 />;
      case 3:
        return <Landing3 />;
      case 4:
        return <Landing4 />;
      default:
        return <Landing1 />;
    }
  };

  return (
    <div className="relative">
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 p-2 flex flex-wrap items-center justify-center gap-2 max-w-[95vw]">
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-full">
          <Eye className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 hidden sm:inline">Макети:</span>
        </div>
        <button
          onClick={() => setSelectedLanding(1)}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base ${
            selectedLanding === 1
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          TalentPro
        </button>
        <button
          onClick={() => setSelectedLanding(2)}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base ${
            selectedLanding === 2
              ? 'bg-emerald-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          HRExcellence
        </button>
        <button
          onClick={() => setSelectedLanding(3)}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base ${
            selectedLanding === 3
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          PeopleFirst
        </button>
        <button
          onClick={() => setSelectedLanding(4)}
          className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base ${
            selectedLanding === 4
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          VistaHR
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-4 h-4 sm:w-5 sm:h-5" /> : <Sun className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>

      {renderLanding()}
    </div>
  );
}

export default App;
