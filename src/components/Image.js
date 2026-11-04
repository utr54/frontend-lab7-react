function Image({ src, alt, href, hasAddedImage, width, minWidth, maxWidth, onAdd, onIncrease, onDecrease, onDelete }) {
  return (
    <div className="image-section">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Відкрити сайт ботанічного саду (у новій вкладці)">
        <img className="city-image" src={src} alt={alt} width="900" />
      </a>
      <p className="image-caption">Національний ботанічний сад імені М. М. Гришка. Фото відкриває сайт саду.</p>

      <div id="added-image-container">
        {hasAddedImage && (
          <img id="added-image" className="city-image" src={src} alt={`Додане зображення: ${alt}`} width={width} />
        )}
      </div>
      <div className="image-controls" role="group" aria-label="Керування доданим зображенням">
        <button type="button" onClick={onAdd} disabled={hasAddedImage}>Додати</button>
        <button type="button" onClick={onIncrease} disabled={!hasAddedImage || width >= maxWidth}>Збільшити</button>
        <button type="button" onClick={onDecrease} disabled={!hasAddedImage || width <= minWidth}>Зменшити</button>
        <button type="button" onClick={onDelete} disabled={!hasAddedImage}>Видалити</button>
      </div>
      <p className="image-status" role="status">
        {hasAddedImage
          ? `Ширина копії: ${width} px. Межі: ${minWidth}–${maxWidth} px.`
          : 'Копія відсутня. Натиснути «Додати», щоб додати та керувати її розміром'}
      </p>
    </div>
  );
}

export default Image;
