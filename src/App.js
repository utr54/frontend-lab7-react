import Header from './components/Header';
import Content from './components/Content';
import GoodsCard from './components/GoodsCard';
import goods from './data/goods';
import gardenPhoto from './assets/botanical-garden.png';

const student = {
  name: 'Кашин Олександр Романович',
  group: 'ІК-44',
  variant: 21,
  birthDate: '13 травня 2007 року',
  birthPlace: 'м. Полтава',
  school: 'ПМБЛ №1',
  university: 'НТУУ «КПІ імені Ігоря Сікорського»',
  hobbies: ['Читання книжок', 'Волейбол', "Комп'ютерні ігри"],
  movies: ['«Термінатор», 1984', '«Аватар», 2009', '«Аватар: Легенда про Аанга», 2005'],
};

function App() {
  return (
    <div className="page">
      <header className="page-heading">
        <p className="eyebrow">Лабораторна робота №7; Група: {student.group}; Варіант: {student.variant}</p>
        <nav aria-label="Завдання лабораторної роботи">
          <a href="#about">1 – Сторінка про мене</a>
          <a href="#goods">2 – Галерея товарів</a>
        </nav>
      </header>

      <main>
        <section id="about" className="panel" aria-labelledby="student-name">
          <p className="eyebrow">Завдання 1. Лаба №4 на React</p>
          <Header name={student.name} />
          <Content student={student} imageSrc={gardenPhoto} />
        </section>

        <section id="goods" className="panel" aria-labelledby="goods-title">
          <p className="eyebrow">Завдання 2. Галерея на основі GoodsCard з використанням props</p>
          <h2 id="goods-title">Комп'ютерні аксесуари</h2>
          <div className="goods-grid">
            {goods.map((item) => (
              <GoodsCard key={item.id} image={item.image} name={item.name} price={item.price} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
