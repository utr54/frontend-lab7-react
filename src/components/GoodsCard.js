function GoodsCard({ image, name, price }) {
  return (
    <article className="goods-card">
      <div className="goods-photo"><img src={image} alt={name} loading="lazy" width="600" height="440" /></div>
      <div className="goods-details">
        <h3>{name}</h3>
        <p className="goods-price">{price.toLocaleString('uk-UA')} ₴</p>
      </div>
    </article>
  );
}

export default GoodsCard;
