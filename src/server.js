const express = require('express');
const cors = require('cors');
const server = express();
const PORT = 9999;

server.use(express.static(__dirname));
server.use(cors());
server.use(express.json());

const movies = [
  { 
    id: 1,
    title: 'Диявол носить "Прада"',
    year: 2006,
    poster: "/images/posters/the-devil-wears-prada.jpg",
    plot: "Юна Енді Сакс, провінційна журналістка з великими амбіціями, скромним досвідом і бажанням публікуватися в «Нью-Йоркському» медіа, отримує роботу в модному глянцевому «Подіумі». Дівчині належить стати асистенткою головного редактора Міранди Прістлі - великої і жахливої ​​законодавиці світу моди, що приводить в священний трепет модельєрів, фотографів і редакторів.",
    director: "Девід Франкель",
    actors: ["Меріл Стріп", "Енн Гетевей", "Емілі Блант", "Стенлі Туччі", "Саймон Бейкер", "Едріан Ґреньє"],
    genre: ["Комедія" , "Драма", "Сатанинський фільм"]
  },
  {
    id: 3,
    title: "Людина, яка пізнала нескінченність",
    year: 2015,
    poster: "/images/posters/the-man-who-knew-infinity-poster.jpg",
    plot: "Срініваса Рамануджан, вихований у бідній родині з індійського міста Мадраса, отримав запрошення на навчання в Кембриджському університеті. Поки Європа палала у вогні Першої світової війни, він досяг успіхів у розвитку математичних досліджень під керівництвом професора, Ґодфрі Гарольд Гарді.",
    director: "Метью Браун",
    actors: ["Дев Пател", "Джеремі Айронс", "Тобі Джонс", "Стівен Фрай", "Кевін Макнеллі", "Энцо Чіленті"],
    genre: ["Драма", "Біографія"]
  },
  {
    id: 3,
    title: "Той, що біжить лабіринтом",
    year: 2014,
    poster: "/images/posters/the-maze-runner-poster.jpg",
    plot: "Томас прокидається в підіймачі, не пам’ятаючи нічого про своє минуле. Він опиняється у закритій зоні, відомій як Галявина, де вже кілька років живуть інші підлітки. Галявина оточена величезним Лабіринтом, що змінюється щоночі, і населений смертельно небезпечними механічними створіннями – Гриверами. Мешканці Галявини створили власне суспільство, встановивши правила для виживання.Томас разом із друзями має розгадати таємницю Лабіринту, з’ясувати, хто створив це випробування, і знайти спосіб вибратися на волю.",
    director: "Вес Болл",
    actors: ["Амл Амін", "Кі Хонг Лі", "Блейк Купер", "Томас Броді-Санґстер", "Вілл Поултер", "Кая Скоделаріо"],
    genre: ["Екшн", "Детективи", "Трилери", "Фантастика", "Антиутопія"]
  },

];

server.get('/movies', function (req, res) {
  res.json(movies);
});

const users = [
  { username: 'john', password: 'password123' },
  { username: 'alice', password: 'password456' }
];

function findUser(users, username, password) {
    for (let i = 0; i < users.length; i++) {
    let u = users[i];
    if (u.username === username && u.password === password) {
      return u;
    }
  }
}

server.post('/login', function (req, res) {
  const { username, password } = req.body;

  const user = findUser(users, username, password);
  if (user) {
    return res.status(200).json({ success: true, message: 'Ви успішно увійшли до акаунту!' });
  } else {
    return res.status(401).json({ success: false, error: 'Неправильний логін або пароль' });
  }
});

server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});