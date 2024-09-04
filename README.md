
# Учебный проект &laquo;API на Node.js, Express.js и MongoDB&raquo;

![GitHub language count](https://img.shields.io/github/languages/count/AlterEgo10/js-junior-nodejs-api?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/AlterEgo10/js-junior-nodejs-api?style=flat)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/AlterEgo10/js-junior-nodejs-api)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/AlterEgo10/js-junior-nodejs-api)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr-closed/AlterEgo10/js-junior-nodejs-api)
![GitHub last commit](https://img.shields.io/github/last-commit/AlterEgo10/js-junior-nodejs-api)

Для создания API используется фреймворк Express.js.
В качестве базы данный выбрана MongoDB.
Взаимодействие с базой данных осуществляется через Mongoose ORM.

# Настройка перед запуском

Переименуйте файл `.env.example` в `.env`.

- Добавьте любую последовательность символов в переменную окружения `JWT_SIFN_KEY` (используется для создания и верификации JWT);
- В переменную окружения `MONGO_DB_URL` добавьте строку подключения к базе данных MongoDB.

# Docker для MongoDB
Вы можете использовать `docker-compose.yml` для создания и запуска Docker контейнера с MongoDB.

* Если используется конфигурация из `docker-compose.yml` без изменений, то значение переменной окружения `MONGO_DB_URL` необходимо установить в `mongodb://root:1234@localhost:27017/app?authSource=admin`

# Запуск приложения
```
npm start
```

# Запуск приложения в режиме разработки
В режиме разработки используется npn пакет [nodemon](https://www.npmjs.com/package/nodemon)
```
npm run dev
```

# Запуск приложения в режиме отладки
```
npm run debug # Linux, MacOS
npm run debug-win # Windows
```

# Проверка авторизации пользователя
Проверка авторизации осуществляется двумя способами:
- С помощью пользовательской middleware `./middleware/authMiddleware/authMiddleware.js`;
- С помощью библиотеки Passport.js (стратегия `passport-jwt`).

Также, можно откючить проверку авторизации пользователя.

Переключить способ проверки авторизации пользователя можно в файле `app.js`, выбрав нужный вариант.
```js
app.use('/api/projects', passport.authenticate('jwt',{session: false}), routerProjects); // Passport.js 
// app.use('/api/projects', authMiddleware, routerProjects); //Пользовательская middleware
// app.use('/api/projects', routerProjects);//Без авторизации
```

# Формы регистрации и авторизации
<img src="./img/req.png" alt="Форма регистрации" width="500px">
<img src="./img/login.png" alt="Форма авторизации" width="500px">

# Тестирование API 
Для тестирования API установите Postman и импортируйте коллекцию из файла `test/postman-data-file.json`.

Также, вы можете указать файл `tests/postman-data-file.json` при запуске тестов через `Collection Runner`. Это необязательно, так как это не влияет на прохождение тестов.

# Код веб-приложения написан с использованием
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
# Лицензия
![GitHub License](https://img.shields.io/github/license/AlterEgo10/js-junior-nodejs-api?style=flat)
