# BookHouse — Course Catalog

Next.js App Router and TypeScript project, adapted into a book catalog. The frontend uses local data from `lib/courses.ts`; the FastAPI backend is a separate Lab 4 project.

## Run locally

Install Node.js LTS, then run inside `course-catalog`:

```bash
npm install
npm run dev
```

Open http://localhost:3000. The catalog is at `/courses`, book details at `/courses/{id}`, and project information at `/about`.

## Lab 2 — Tailwind CSS and shadcn/ui

- Configured Tailwind CSS and shadcn/ui (`components.json`).
- Rebuilt `CourseCard` with `Card`, `CardHeader`, `CardTitle`, `CardContent`, and `Button` (`variant="ghost"`, `size="sm"`).
- Kept `CourseCard` as a Server Component, without `"use client"`.
- Added a responsive catalog grid: one column below 640px, two from 640px, three from 1024px.
- Added visible card border and shadow effects on hover.
- Styled navigation with spacing, padded links, hover and keyboard focus states, and separation from page content. Navigation wraps when space is limited.
- Global styles and theme variables are in `app/globals.css`; component styles use Tailwind classes.

## Verification

```bash
npm run build
npm run lint
```

For manual responsive verification, open `/courses` in browser DevTools device mode. Check widths 375px, 800px, and 1280px: expect 1, 2, and 3 columns, respectively, with no horizontal overflow. Check 640px too: two columns should appear. Hover over a card to see its shadow and red border, then open it to check navigation.

The detail-page like button uses client-side React state. Its count resets on reload; no database persistence or newsletter subscription service is implemented.

## Lab 5 — запуск интеграции

Сначала backend, в отдельном терминале:
```sh
cd ../course-catalog-api
source .venv/bin/activate
fastapi dev main.py
```
Затем frontend из папки `course-catalog`:
```sh
npm install
npm run dev -- --port 3000
```
Открывать именно http://localhost:3000/courses. Не заменять localhost на 127.0.0.1.
В корне frontend нужен `.env.local` (уже создан локально; исключён из git):
```dotenv
API_URL=http://localhost:8000
NEXT_PUBLIC_API_URL=http://localhost:8000
```
После изменения env перезапустить Next.js. API_URL доступен серверу, NEXT_PUBLIC_API_URL встраивается в браузерный код и не должен содержать секретов.

## What changed

Раньше каталог брал книги из массива в `lib/courses.ts`. Теперь он загружает шесть курсов из FastAPI. В карточках вместо цены отображаются кредиты, оформление осталось прежним.
Добавлены SWR-фильтр `/filter`, серверные лайки, форма записи, error boundary с retry и loading списка. На странице курса больше нет generateStaticParams.
Подробная защита, вопросы и карта критериев: [LAB5_DEFENSE_RU.md](LAB5_DEFENSE_RU.md).

## Decisions

`generateStaticParams` удалён: список курсов теперь принадлежит API, а сборка не должна обращаться к выключенному backend. `cache: "no-store"` обеспечивает актуальные данные на каждом запросе; `/courses` и `/courses/[id]` должны быть динамическими (ƒ).
Лайк отправляет простой POST без тела и специальных заголовков — preflight не нужен. Запись отправляет `Content-Type: application/json`, поэтому браузер сначала проверяет разрешение через OPTIONS.

## Breakage journal — заметки по ошибкам

Здесь пока записаны ожидаемые результаты из задания. Осталось повторить эти случаи в браузере и сверить сообщения в Console и Network.

### 1. Убрать CORS middleware

Без `add_middleware` браузер не сможет прочитать ответ API. В Console ожидается `No 'Access-Control-Allow-Origin' header is present`. При этом GET и лайк могут получить 200 в терминале backend: сервер выполнил запрос, но браузер не отдаёт ответ JavaScript.

У формы сначала отправляется OPTIONS. Он получает 405, поэтому POST не отправляется. Страница `/courses` должна работать, ведь данные запрашивает сервер Next.js. Исправление — вернуть CORSMiddleware.

### 2. Добавить лишний слеш в адрес

Если в `allow_origins` указать `http://localhost:3000/`, адрес перестанет совпадать с Origin браузера. Ожидается сообщение `No 'Access-Control-Allow-Origin' header is present`. В Network GET будет заблокирован CORS, а OPTIONS получит 400 с текстом `Disallowed CORS origin`.

Проблема в слеше: origin включает протокол, host и порт, без пути. Нужно вернуть `http://localhost:3000`.

### 3. Убрать allow_methods

По умолчанию middleware разрешает только GET. Фильтр и лайк должны продолжать работать, потому что лайк отправляется простым POST без preflight. Форма с JSON требует предварительной проверки.

Для формы ожидается OPTIONS со статусом 400 и текстом `Disallowed CORS method`. В Console — `It does not have HTTP ok status`, в заголовке `access-control-allow-methods` — только GET. Исправление: вернуть `allow_methods=["*"]`.

### 4. Открыть сайт через 127.0.0.1

Адреса `127.0.0.1:3000` и `localhost:3000` ведут на один компьютер, но для браузера это разные origins. В API разрешён только localhost.

Ожидаемое сообщение: `from origin 'http://127.0.0.1:3000' has been blocked by CORS policy`. GET в браузере будет заблокирован, хотя backend ответит 200; OPTIONS получит 400. Достаточно снова открыть сайт через localhost. Если Next.js сам блокирует этот dev-адрес, для опыта нужно отдельно настроить `allowedDevOrigins`.

### 5. Опечатка в Python, похожая на CORS

Если заменить `p["offset"]` на `p["ofset"]` в `list_courses`, backend вернёт 500. В терминале будет `KeyError: 'ofset'`. В браузере при этом может появиться `No 'Access-Control-Allow-Origin' header is present`: у ответа с необработанной ошибкой нет CORS-заголовков.

Подсказка — серверная страница `/courses` тоже покажет `error.tsx`, хотя её запрос не зависит от браузерного CORS. Лайк и форма должны работать, поскольку их обработчики не менялись. Нужно исправить ключ словаря, а не настройки CORS.

### Что проверять при ошибке

Сначала адрес запроса и доступность API, затем статус ответа и OPTIONS. После этого — заголовки и терминал Python. Если ошибок нет, но данные отображаются неправильно, стоит сравнить JSON с TypeScript-типами.

OPTIONS можно проверить отдельно:

```sh
curl -i -X OPTIONS http://localhost:8000/enrollments -H 'Origin: http://localhost:3000' -H 'Access-Control-Request-Method: POST' -H 'Access-Control-Request-Headers: content-type'
```

200 — проверка прошла. При 400 текст `Disallowed CORS origin/method/headers` подскажет причину отказа. При 405 нужно проверить, подключён ли middleware.

## Проверка перед сдачей

1. Перезапустить backend, затем frontend. `/courses`: 6 курсов, первым ai-integration.
2. `/courses/web-security`: лайк дважды, обновить — 23. `/courses/does-not-exist`: not-found.
3. Имя `A`: 422 и текст сервера. `Aigerim`: Enrollment number: 1; проверить http://localhost:8000/enrollments.
4. `/filter`: 6 → включить Electives only → 2. В Network GET с `?is_elective=true`, Origin и allow-origin.
5. В Network выбрать All и Disable cache: лайк без OPTIONS, запись с OPTIONS (preflight может кэшироваться 600 секунд).
6. Остановить backend: `/courses` показывает error.tsx. Запустить backend → Try again восстанавливает данные без ручной перезагрузки.
7. Для loading временно добавить `time.sleep(1)` в get_course, перейти по карточке; удалить задержку после проверки.
8. С выключенным backend: `npm run build`; затем `npm run lint`.

Git-критерий требует двух GitHub-репозиториев и минимум 3 осмысленных backend-коммитов / 5 frontend-коммитов. Само наличие локального кода не выполняет этот критерий; backend remote нужно настроить. Не коммитить `.env.local`.

Для автономной сборки убрана загрузка Geist через Google Fonts: используется системный sans-serif (`app/layout.tsx`, `app/globals.css`). Это убирает зависимость сборки от доступа к fonts.googleapis.com.
