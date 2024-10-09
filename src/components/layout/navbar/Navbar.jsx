import "./navbar.css";
import { Carrito } from "../../common/carrito/Carrito";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dmezvexmw/image/upload/v1728419452/compuenter_xo7xwq.png"
          alt="logo_compuenter"
        />
        <ul>
          <li>
            <a href="#notebooks">Notebooks</a>
          </li>
          <li>
            <a href="#discos">Discos duros</a>
          </li>
          <li>
            <a href="#impresoras">Impresoras</a>
          </li>
          <li>
            <a href="#camaras">Cámaras</a>
          </li>
        </ul>

        <Carrito />
      </div>
    </>
  );
};
