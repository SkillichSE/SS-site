# SputnikSim Promo Website

Промо-сайт для SputnikSim — тренажёра анализа и коррекции орбит спутников.

## Технологии

- **React 18** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр production сборки
npm run preview
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub
2. Добавьте в `vite.config.ts`:
   ```ts
   base: '/название-репозитория/'
   ```
3. Соберите проект: `npm run build`
4. Задеплойте папку `dist` на GitHub Pages

## Деплой на Vercel

1. Импортируйте проект в Vercel
2. Vercel автоматически определит Vite проект
3. Деплой произойдет автоматически

## Структура проекта

```
src/
├── components/     # React компоненты
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── Solution.tsx
│   ├── Demo.tsx
│   ├── Vega.tsx
│   ├── Comparison.tsx
│   ├── Stats.tsx
│   ├── Audience.tsx
│   ├── Team.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── Starfield.tsx
├── App.tsx        # Главный компонент
├── main.tsx       # Точка входа
└── index.css      # Глобальные стили
```

## Особенности

- ✨ Анимации с Framer Motion
- 🌟 Анимированное звёздное поле
- ⌨️ Терминал с typewriter эффектом
- 📊 Счётчики с анимацией
- 🎨 Космическая тёмная тема
- 📱 Полностью адаптивный дизайн
- 🚀 Оптимизированная производительность

## Лицензия

Проект команды RUDnik для AEROO Space AI Competition 2026
