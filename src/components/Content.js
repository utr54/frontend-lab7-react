import React from 'react';
import Image from './Image';

const MIN_WIDTH = 100;
const MAX_WIDTH = 1200;
const INITIAL_WIDTH = 900;
const WIDTH_STEP = 50;

class Content extends React.Component {
  state = {
    birthClicks: 0,
    educationClicks: 0,
    hasAddedImage: false,
    imageWidth: INITIAL_WIDTH,
  };

  toggleBirthColor = () => {
    this.setState(({ birthClicks }) => ({ birthClicks: birthClicks + 1 }));
  };

  toggleEducationColor = () => {
    this.setState(({ educationClicks }) => ({ educationClicks: educationClicks + 1 }));
  };

  handleColorKeyDown = (event, toggleColor) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleColor();
    }
  };

  addImage = () => {
    this.setState(({ hasAddedImage }) => (
      hasAddedImage ? null : { hasAddedImage: true, imageWidth: INITIAL_WIDTH }
    ));
  };

  resizeImage = (step) => {
    this.setState(({ hasAddedImage, imageWidth }) => (
      hasAddedImage
        ? { imageWidth: Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, imageWidth + step)) }
        : null
    ));
  };

  deleteImage = () => {
    this.setState({ hasAddedImage: false, imageWidth: INITIAL_WIDTH });
  };

  render() {
    const { student, imageSrc } = this.props;
    const { birthClicks, educationClicks, hasAddedImage, imageWidth } = this.state;
    const birthColor = birthClicks === 0 ? '' : birthClicks % 2 ? 'birth-blue' : 'birth-yellow';
    const educationColor = educationClicks === 0 ? '' : educationClicks % 2 ? 'education-lime' : 'education-purple';

    return (
      <>
        <p className="section-note" id="color-hint">Клацати на дату народження або освіту, щоб змінити кольори</p>
        <div className="biography">
          <p
            id="element-2"
            className={`color-element ${birthColor}`}
            role="button"
            tabIndex={0}
            aria-describedby="color-hint"
            onClick={this.toggleBirthColor}
            onKeyDown={(event) => this.handleColorKeyDown(event, this.toggleBirthColor)}
          >
            Дата народження: {student.birthDate};<br />
            Місце народження: {student.birthPlace}.
          </p>
          <p
            className={`element-3 color-element ${educationColor}`}
            role="button"
            tabIndex={0}
            aria-describedby="color-hint"
            onClick={this.toggleEducationColor}
            onKeyDown={(event) => this.handleColorKeyDown(event, this.toggleEducationColor)}
          >
            Освіта:<br />
            Ліцей: {student.school}.<br />
            Університет: {student.university}.
          </p>
        </div>

        <div className="interests">
          <div>
            <h3>Мої хобі</h3>
            <ul>{student.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
          </div>
          <div>
            <h3>Мої улюблені фільми</h3>
            <ol>{student.movies.map((movie) => <li key={movie}>{movie}</li>)}</ol>
          </div>
        </div>

        <h3>Улюблене місце в Києві</h3>
        <p className="place-description">
          Одне з моїх улюблених місць у Києві – Національний ботанічний сад
          імені М. М. Гришка. Тут приємно гуляти та відпочивати серед зелені,
          а велика кількість різноманітних рослин робить прогулянку цікавою у різні пори року.
        </p>
        <Image
          src={imageSrc}
          alt="Національний ботанічний сад імені М. М. Гришка у Києві"
          href="https://nbg.kyiv.ua/ua/home.html"
          hasAddedImage={hasAddedImage}
          width={imageWidth}
          minWidth={MIN_WIDTH}
          maxWidth={MAX_WIDTH}
          onAdd={this.addImage}
          onIncrease={() => this.resizeImage(WIDTH_STEP)}
          onDecrease={() => this.resizeImage(-WIDTH_STEP)}
          onDelete={this.deleteImage}
        />
      </>
    );
  }
}

export default Content;
