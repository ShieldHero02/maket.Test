import { Briefcase, Award, BarChart3, Shield, Clock, Zap, Globe, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Landing2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-40 transition-colors">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 dark:text-emerald-400" />
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">HRExcellence</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Professional Recruitment</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-emerald-600 dark:bg-emerald-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition font-semibold text-sm sm:text-base">
                Отримати пропозицію
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
            <div className="sm:hidden mt-4 pb-4">
              <button className="w-full bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition font-semibold">
                Отримати пропозицію
              </button>
            </div>
          )}
        </nav>
      </header>

      <section className="relative overflow-hidden py-12 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-950/30 dark:via-gray-900 dark:to-blue-950/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              #1 HR-компанія в Україні
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Трансформуємо ваш бізнес через таланти
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Стратегічний партнер у сфері управління персоналом та підбору топ-талантів
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">12 років</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">На ринку HR-послуг</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">2,500+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Закритих вакансій</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">350+</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Корпоративних клієнтів</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl dark:shadow-gray-900/70 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional team"
              className="w-full h-60 sm:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Чому обирають нас</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Переваги співпраці з HRExcellence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Швидкість</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Середній час закриття вакансії - 14 днів</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Гарантія</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">6 місяців гарантії на кожного кандидата</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Ефективність</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">96% кандидатів проходять випробувальний термін</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-800/20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Експертність</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Команда з 15+ років досвіду в HR</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-950/20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Повний цикл HR-послуг
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm sm:text-base">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-base sm:text-lg">Масовий рекрутмент</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Швидкий підбір великої кількості спеціалістів лінійних позицій</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm sm:text-base">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-base sm:text-lg">Executive Search</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Пошук топ-менеджерів та керівників вищої ланки</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm sm:text-base">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-base sm:text-lg">HR-аутсорсинг</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Повна передача HR-функцій на зовнішнє управління</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-600 dark:bg-emerald-500 text-white w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm sm:text-base">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-base sm:text-lg">Оцінка персоналу</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Комплексна діагностика компетенцій та потенціалу співробітників</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg dark:shadow-gray-900/50">
                <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">Аналітика та звітність</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Детальні звіти по кожному етапу підбору з аналітикою ринку та рекомендаціями
                </p>
                <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Середня оцінка</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">4.9/5.0</span>
                </div>
              </div>

              <div className="bg-emerald-600 dark:bg-emerald-700 text-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Міжнародний досвід</h3>
                <p className="mb-4 text-sm sm:text-base">
                  Працюємо з міжнародними компаніями та маємо доступ до глобальної бази талантів
                </p>
                <div className="flex space-x-4 sm:space-x-6 pt-4 border-t border-emerald-500">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">15+</div>
                    <div className="text-xs sm:text-sm text-emerald-100">Країн</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">50K+</div>
                    <div className="text-xs sm:text-sm text-emerald-100">Кандидатів</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gray-900 dark:bg-black text-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-400 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Почніть трансформацію вашої команди сьогодні
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Отримайте безкоштовну консультацію та індивідуальну стратегію підбору персоналу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 dark:bg-emerald-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition font-semibold text-base sm:text-lg">
                Замовити дзвінок
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-gray-900 transition font-semibold text-base sm:text-lg">
                Завантажити презентацію
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-8 sm:py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                <span className="font-bold text-white text-sm sm:text-base">HRExcellence</span>
              </div>
              <p className="text-xs sm:text-sm">Ваш стратегічний партнер у сфері управління талантами</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Послуги</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Підбір персоналу</li>
                <li>Executive Search</li>
                <li>HR-консалтинг</li>
                <li>Оцінка персоналу</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Компанія</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>Про нас</li>
                <li>Команда</li>
                <li>Кейси</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Контакти</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>+380 44 987 6543</li>
                <li>hello@hrexcellence.ua</li>
                <li>Київ, БЦ "Horizon"</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-900 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            <p>&copy; 2024 HRExcellence. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
