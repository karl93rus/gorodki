# sklonyator
Пакет для склонения названий городов на Русском языке. 
Чтобы, например, из слова "Москва" получилось "Москве". Довольно 
простая и часто нужная вещь.

### Установить пакет
`npm i sklonyator`

### Импортировать
`import sklonyator from 'sklonyator';`

### Чтобы изменить слово, необходимо вызвать метод
`sklonyator.incline('cityName');`

#### Например:
`sklonyator.incline('Москва');`
отдаст "Москве".
`sklonyator.incline('Краснодар');`
отдаст "Краснодаре".

### Репозиторий на github
https://github.com/karl93rus/gorodki
