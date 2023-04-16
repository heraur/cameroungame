import MenuOne from "./MenuOne";

function Header() {
  return (
    <div className="header--main">
      <div className="menuContainer">
        <MenuOne />
      </div>
      <div className="header--hero">
        <h3>
          Coupe du monde Cameroon E-sport 2023 plus de{" "}
          <span className="yellowText"> $100.000 </span> en prime{" "}
        </h3>
        <p className="header--text">
          Tu es Gamer ? tu te sens puissant,{" "}
          <span className="yellowText"> inscris-toi</span> pour avoir la chance
          représenter le Cameroun à la{" "}
          <span className="yellowText"> coupe de monde e-sports 2023 </span>
        </p>
      </div>
      <button className="btn-header">Enrégistres-toi</button>
      <div className="image--icon">
        <img src="./images/puma.png" alt="" />
        <img src="./images/bull.png" alt="" />
        <img src="./images/group.png" alt="" />
        <img src="./images/gusto.png" alt="" />
        <img src="./images/halo.png" alt="" />
        <img src="./images/Homepage.png" alt="" />
        <img src="./images/mac.png" alt="" />
        <img src="./images/samsung.png" alt="" />
      </div>
      <img src="./images/arrawicon.png" alt="icon" className="arrow-icon" />
    </div>
  );
}

export default Header;
