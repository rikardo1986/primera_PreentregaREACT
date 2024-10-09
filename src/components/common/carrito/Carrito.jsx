import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./carrito.css";

export const Carrito = () => {
  return (
    <div className="icono-carrito">
      <ShoppingCartIcon style={{ fontSize: 35 }} />
      <span>0</span>
    </div>
  );
};
