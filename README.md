# Сайт _blank

Статичный сайт без сборки. Хостинг: GitHub Pages, публичный репозиторий goorov2000/blank-site. Адрес: https://feeltheblank.store (домен на Рег.ру, файл `CNAME`); старый адрес goorov2000.github.io/blank-site перенаправляет туда.

## Поменять ссылки

`app.js`, блок CONFIG: `payUrl` — платёжная ссылка CloudPayments, `tgUser` — ник Telegram без @.

## Опубликовать изменения

Из корня проекта, после коммита:

```
git subtree push --prefix site site-origin main
```

Страница обновляется за одну-две минуты.

Если домен меняли в настройках GitHub Pages, GitHub сам коммитит `CNAME` в blank-site, и subtree push отклоняют. Тогда, если руками в blank-site ничего не правили: `git push site-origin $(git subtree split --prefix site HEAD):main --force`.

## Свой домен

1. Купить домен (например theblank.ru).
2. В DNS домена: четыре записи A на 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; для www — CNAME на goorov2000.github.io.
3. Создать файл `site/CNAME` с одной строкой — доменом. Закоммитить и опубликовать.
4. В репозитории blank-site → Settings → Pages → Custom domain: вписать домен, после проверки DNS включить Enforce HTTPS (до часа).
5. Заменить адрес сайта в оферте и в платёжной ссылке CloudPayments.
