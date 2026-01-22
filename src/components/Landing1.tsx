import { Users, Target, TrendingUp, Mail, Phone, MapPin, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Landing1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-40 transition-colors">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Users className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">TalentPro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Послуги</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Про нас</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Контакти</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-blue-600 dark:bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm sm:text-base">
                Консультація
              </button>
              <button
                className="md:hidden text-gray-600 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">Послуги</a>
              <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">Про нас</a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition py-2">Контакти</a>
              <button className="w-full sm:hidden bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                Консультація
              </button>
            </div>
          )}
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Знаходимо ідеальних кандидатів для вашого бізнесу
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Професійний підбір персоналу та HR-консалтинг. Ми допомагаємо компаніям знаходити та утримувати найкращі таланти.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center justify-center text-sm sm:text-base">
                Почати співпрацю <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm sm:text-base">
                Дізнатись більше
              </button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-2xl p-4 sm:p-8 h-64 sm:h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="HR Team"
                className="rounded-xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Наші послуги</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Комплексні рішення для вашого бізнесу</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Підбір персоналу</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Швидкий та якісний пошук кандидатів на будь-які позиції від junior до executive рівня.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Пошук кандидатів
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Первинний скринінг
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Оцінка компетенцій
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition">
              <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">HR-консалтинг</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Експертна підтримка у побудові та оптимізації HR-процесів вашої компанії.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Аудит HR-процесів
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Оптимізація структури
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Розробка стратегії
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg dark:shadow-gray-900/50 hover:shadow-xl dark:hover:shadow-gray-900/70 transition sm:col-span-2 lg:col-span-1">
              <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Розвиток команди</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Програми навчання та розвитку для підвищення ефективності вашої команди.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Тренінги та воркшопи
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Оцінка персоналу
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 flex-shrink-0" />
                  Коучинг керівників
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Успішних проектів</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Задоволених клієнтів</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Років досвіду</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">200+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Компаній-партнерів</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-600 dark:bg-blue-700 text-white py-12 sm:py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готові почати?</h2>
            <p className="text-lg sm:text-xl text-blue-100">Зв'яжіться з нами сьогодні для безкоштовної консультації</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-500 dark:bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="font-semibold mb-2 text-sm sm:text-base">Телефон</div>
              <div className="text-blue-100 text-sm sm:text-base">+380 44 123 4567</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 dark:bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="font-semibold mb-2 text-sm sm:text-base">Email</div>
              <div className="text-blue-100 text-sm sm:text-base break-all">info@talentpro.ua</div>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="bg-blue-500 dark:bg-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="font-semibold mb-2 text-sm sm:text-base">Адреса</div>
              <div className="text-blue-100 text-sm sm:text-base">Київ, вул. Хрещатик, 1</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 py-6 sm:py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base">&copy; 2024 TalentPro. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
}
