# Dimio Verified Planner

Найкраща версія сайту на OpenAI: одна кнопка генерує 4 теми, перевіряє джерела, створює PNG-картинки і відправляє результат у Make.

## Що потрібно для повної автоматизації

Потрібен `OPENAI_API_KEY` у Vercel Environment Variables.

Цей ключ не потрапляє в браузер і не буде видимий користувачам.

## Як запустити на Vercel

1. Завантаж файли в GitHub так, щоб `package.json` був у корені.
2. У Vercel імпортуй репозиторій.
3. У Vercel → Project Settings → Environment Variables додай:

```text
OPENAI_API_KEY
```

4. Натисни Deploy.

## Make

1. У Make створи `Webhooks → Custom webhook`.
2. Скопіюй webhook URL.
3. Встав URL на сайті.
4. Натисни `В Make` або `Всі теми`.

## Якщо ключ не доданий

Сайт відкриється в демо-режимі і покаже, що справжній пошук ще не підключений.
