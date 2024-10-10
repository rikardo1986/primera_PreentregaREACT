import "./card.css";
export const Card = ({ title, price, stock }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-price">Price: ${price}</p>
      <p className="card-stock">Stock: {stock}</p>
    </div>
  );
};
