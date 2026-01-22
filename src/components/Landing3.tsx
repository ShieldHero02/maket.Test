import { Sparkles, Rocket, Users2, MessageCircle, Star, Lightbulb, Coffee, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Landing3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="absolute top-0 left-0 right-0 z-40 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500 dark:to-blue-700 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transform rotate-12">
                <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-white transform -rotate-12" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">PeopleFirst</span>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a href="#team" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium hidden lg:block text-sm sm:text-base">
                Команда
              </a>
              <a href="#culture" className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition font-medium hidden lg:block text-sm sm:text-base">
                Культура
              </a>
              <button className="hidden sm:block bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-lg transition font-semibold text-sm sm:text-base">
                Давайте поговоримо
              </button>
              <button
                className="sm:hidden text-gray-600 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden mt-4 pb-4 space-y-3">
              <a href="#team" className="block text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2">Команда</a>
              <a href="#culture" className="block text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition py-2">Культура</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition font-semibold">
                Давайте поговоримо
              </button>
            </div>
          )}
        </nav>
      </header>

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-gray-900"></div>
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-200 dark:bg-cyan-900/30 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white dark:bg-gray-800 border border-cyan-200 dark:border-cyan-700 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400 mr-2" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200">Нове покоління HR</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Люди - це наша
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"> суперсила</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Ми не просто підбираємо співробітників. Ми створюємо команди мрії, які змінюють бізнеси та будують майбутнє.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
                <div className="bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400">1,200+</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2 text-sm sm:text-base">талантів знайдено</span>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-100 dark:border-gray-700">
                  <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">95%</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2 text-sm sm:text-base">happy клієнтів</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-xl transition font-semibold text-base sm:text-lg flex items-center">
                Почати проект <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Happy team"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Відгуки клієнтів</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Як ми працюємо</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Простий процес, видатні результати</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/20 dark:to-gray-800 p-6 sm:p-8 rounded-3xl border-2 border-cyan-100 dark:border-cyan-800 hover:border-cyan-300 dark:hover:border-cyan-600 transition">
                <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 dark:from-cyan-500 dark:to-cyan-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform hover:rotate-6 transition">
                  <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 font-bold text-xs sm:text-sm mb-2">КРОК 01</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Розмова про цілі</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Занурюємося у вашу культуру, цінності та бізнес-задачі. Розуміємо, хто справді потрібен вашій команді.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-800 p-6 sm:p-8 rounded-3xl border-2 border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 transition">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform hover:rotate-6 transition">
                  <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-blue-600 dark:text-blue-400 font-bold text-xs sm:text-sm mb-2">КРОК 02</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Магія пошуку</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Використовуємо креативні методи та сучасні технології для пошуку ідеальних кандидатів.
                </p>
              </div>
            </div>

            <div className="relative md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-gray-800 p-6 sm:p-8 rounded-3xl border-2 border-rose-100 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-600 transition">
                <div className="bg-gradient-to-br from-rose-400 to-rose-600 dark:from-rose-500 dark:to-rose-700 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transform hover:rotate-6 transition">
                  <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-rose-600 dark:text-rose-400 font-bold text-xs sm:text-sm mb-2">КРОК 03</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Запуск команди</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Супроводжуємо онбординг та перші місяці роботи, щоб забезпечити успішну інтеграцію.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-950 text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Наша культура - ваш успіх</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Ми віримо, що сильна корпоративна культура - це основа успішного бізнесу. Допомагаємо вам побудувати команду, яка розділяє ваші цінності.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-cyan-500 dark:bg-cyan-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Людяність перш за все</h3>
                    <p className="text-sm sm:text-base text-gray-400">Кожен кандидат - унікальна особистість з власними сильними сторонами</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-blue-500 dark:bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Неформальний підхід</h3>
                    <p className="text-sm sm:text-base text-gray-400">Створюємо комфортну атмосферу для відвертих розмов</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-rose-500 dark:bg-rose-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Фокус на якість</h3>
                    <p className="text-sm sm:text-base text-gray-400">Краще один ідеальний кандидат, ніж десять посередніх</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member 1"
                className="rounded-2xl shadow-xl h-48 sm:h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member 2"
                className="rounded-2xl shadow-xl h-48 sm:h-64 object-cover mt-6 sm:mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member 3"
                className="rounded-2xl shadow-xl h-48 sm:h-64 object-cover -mt-6 sm:-mt-8"
              />
              <img
                src="https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team member 4"
                className="rounded-2xl shadow-xl h-48 sm:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/70 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500 dark:to-blue-700 rounded-3xl mb-6 sm:mb-8 transform rotate-3">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white transform -rotate-3" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Готові знайти ваших зірок?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Давайте створимо щось неймовірне разом. Перша консультація - безкоштовна!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:shadow-xl transition font-semibold text-base sm:text-lg">
                  Безкоштовна консультація
                </button>
                <button className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition font-semibold text-base sm:text-lg">
                  Подивитись кейси
                </button>
              </div>

              <div className="pt-8 sm:pt-12 border-t border-gray-200 dark:border-gray-700">
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 sm:mb-2 break-all">hello@peoplefirst.ua</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">+380 93 123 4567</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-600 dark:text-rose-400 mb-1 sm:mb-2">Київ, ТЦ Ocean Plaza</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-8 sm:py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500 dark:to-blue-700 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">PeopleFirst</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-base">&copy; 2024 PeopleFirst. Створено з любов'ю до людей.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
