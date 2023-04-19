import { useState } from "react";

function MainSection() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    region: "",
    ville: "",
    password: "",
  });

  function handleChange(event) {
    const { value, type, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <>
      <main className="mainsection">
        <img
          src="./images/Frame6659.png"
          alt=""
          className="main--backimageright"
        />
        <img
          src="./images/Frame6660.png"
          alt=""
          className="main--backimageleft"
        />

        <div className="container--mainsection">
          <h5 className="container--h5">Découvrir</h5>
          <h4 className="container--h4">A propos de Cameroun E-SPORT</h4>
          <p className="containner--p">
            Fédération Camerounaise des jeux électroniques
          </p>
          <hr className="divider" />
          <p className="container--text">
            Africa Esports Championship est né d'une poignée de passionnés
            d'esports africains qui se sont réunis autour d'une passion commune
            pour l'esport et d'un engagement à développer les opportunités
            économiques pour la jeunesse africaine tout en plaçant l'industrie
            africaine de l'esport sur la carte mondiale. Nous envisageons une
            Afrique construite en collaboration avec les citoyens africains du
            monde entier et le grand public en général. Esports offre une
            opportunité de permettre et d'autonomiser les jeunes Africains
            économiquement et socialement avec l'objectif plus large de
            transformer des vies. <br /> La communauté africaine de l'esport en
            Afrique connaît une croissance rapide, l'écosystème de l'esport
            générant de nombreuses opportunités de renforcement des compétences
            et d'activités génératrices de revenus dans l'ensemble de
            l'industrie, notamment ; Joueurs, castors, organisateurs
            d'événements, gestionnaires de talents, distribution de médias,
            créateurs de contenu et plus encore.
            <br /> <br /> Nous cherchons à nous associer à des marques, des
            leaders de l'industrie et des institutions du monde entier pour
            développer l'industrie de l'esport en Afrique par le biais de
            tournois, d'éducation, de technologie, de développement
            communautaire, de divertissement, de tourisme et de distribution de
            contenu. Nous cherchons à nous associer à des marques, des leaders
            de l'industrie et des institutions du monde entier pour développer
            l'industrie de l'esport en Afrique par le biais de tournois,
            d'éducation, de technologie, de développement communautaire, de
            divertissement, de tourisme et de distribution de contenu.
          </p>
          <div className="container--imgsection">
            <img src="./images/IMG_2826.png" alt="" />
            <img src="./images/00001001copie.png" alt="" />
            <img src="./images/about3.png" alt="" />
          </div>
        </div>
      </main>

      <div className="section2">
        <div className="section2--childone">
          <h5 className="childone--h5">Coupe du monde 2023</h5>
          <h4 className="childone--h4">
            Rejoins Cameroun E-sports et façonne ton avenir en tant que
            professionnel
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
          <hr className="divider dOne" />
          <div className="childone--button">
            <button>Enrégistre-toi</button>
            <button>Connecte-toi</button>
          </div>
        </div>

        <div className="section2--form">
          <h4 className="form--title">Enrégistre-toi</h4>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="nom" className="form-label">
                Nom<span className="red-stars">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="nom"
                onChange={handleChange}
                value={formData.nom}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="prenom" className="form-label">
                Prénom<span className="red-stars">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="prenom"
                onChange={handleChange}
                value={formData.prenom}
              />
            </div>
            <div className="col-12">
              <label htmlFor="telephone" className="form-label">
                Téléphone<span className="red-stars">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="telephone"
                placeholder="698278633"
                onChange={handleChange}
                value={formData.telephone}
              />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="toi@gmail:com"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="region" className="form-label">
                Region<span className="red-stars">*</span>
              </label>
              <select
                name="region"
                className="form-select"
                onChange={handleChange}
                value={formData.region}
              >
                <option value="">Choisir...</option>
                <option value="littoral">Littoral</option>
                <option value="centre">Centre</option>
                <option value="ouest">Ouest</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="ville" className="form-label">
                Ville<span className="red-stars">*</span>
              </label>
              <select
                name="ville"
                className="form-select"
                onChange={handleChange}
                value={formData.ville}
              >
                <option value="">Choisir...</option>
                <option value="douala">Douala</option>
                <option value="yaounde">Yaounde</option>
                <option value="bafoussam">Bafoussam</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Mot de passe<span className="red-stars">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 btn-containeur">
              <button type="submit" className="btn btn-form">
                Enregistrez vous
              </button>
            </div>
            <div className="btn-fin">
              <p className="btn-compte">Déjà un compte ?</p>
              <p className="btn-connect">Connecte-toi</p>
            </div>
          </form>
        </div>
        <div className="section2--text2">
          <div className="text2--header">
            <h4 className="text2--title">Comment devenir un Gamer-Pro</h4>
            <p className="text2-p">
              Lorem ipsum dolor sit amet consectetur. Et euismod dictum nisi
              ornare vel. Est tortor adipiscing lorem gravida egestas tincidunt
              et nibh et.
            </p>
          </div>
          <div className="text2--innersection">
            <div className="first">
              <img src="./images/mdi_register-outline.png" alt="" />
              <h4 className="inner--title">
                Obtiens ta carte membre de gaming
              </h4>
              <p className="inner--text">
                Lorem ipsum dolor sit amet consectetur. Volutpat at id praesent
                ornare nulla vel.
              </p>
            </div>
            <div className="second">
              <img src="./images/fluent_people-team-16-regular.png" alt="" />
              <h4 className="inner--title">
                Participe à différents championnats
              </h4>
              <p className="inner--text">
                Lorem ipsum dolor sit amet consectetur. Volutpat at id praesent
                ornare nulla vel.
              </p>
            </div>
            <div className="last">
              <img src="./images/solar_cup-star-outline.png" alt="" />
              <h4 className="inner--title">Remporte différents championnats</h4>
              <p className="inner--text">
                Lorem ipsum dolor sit amet consectetur. Volutpat at id praesent
                ornare nulla vel.
              </p>
            </div>
          </div>
          <div className="btn-contentInner">
            <button className="btn-innersection">Enrégistres-toi</button>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="section3--firstchild">
          <div className="first--left">
            <img src="./images/image3.png" alt="" className="left--img1" />
            <img src="./images/image4.png" alt="" className="left--img2" />
          </div>
          <div className="first--right">
            <div className="right--up">
              <img src="./images/material-symbols_calendar-today.png" alt="" />
              <p> Septembre à décembre 2023</p>
              <img src="./images/mdi_map-marker.png" alt="" />
              <p>Cameroun</p>
            </div>
            <div className="right--midle">
              <h4>Rejoignez la Compétition mondiale de Gaming</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et euismod dictum nisi
                ornare vel. Est tortor adipiscing lorem gravida egestas
                tincidunt et nibh et.
              </p>
            </div>
            <div className="right--down">
              <div className="down--first">
                <div className="down--top-left">
                  <h3 className="yellowText down-title">1</h3>
                  <p className="down--text">
                    Compétition sur tout le territoire nationale
                  </p>
                </div>
                <div className="down--top-right">
                  <h3 className="yellowText down-title">16</h3>
                  <p className="down--text">
                    Participants sélectionnés sur l’ensemble du territoire
                  </p>
                </div>
              </div>
              <div className="down--second">
                <div className="down--top-left">
                  <h3 className="yellowText down-title">2</h3>
                  <p className="down--text">Jeux en compétition</p>
                </div>
                <div className="down--top-right">
                  <h3 className="yellowText down-title">100k $</h3>
                  <p className="down--text">de prime pour les vainqueurs</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider3" />
        </div>
        <div className="section3--secondchild">
          <div className="second--left">
            <h4 className="second--title">
              Avantage d’une carte membre gaming
            </h4>

            <div className="second--down">
              <ol>
                <li className="yellowText">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat at id
                  praesent ornare nulla vel.
                </p>
                <li className="yellowText">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat at id
                  praesent ornare nulla vel.
                </p>
                <li className="yellowText">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat at id
                  praesent ornare nulla vel.
                </p>
                <li className="yellowText">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat at id
                  praesent ornare nulla vel.
                </p>
                <li className="yellowText">
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Volutpat at id
                  praesent ornare nulla vel.
                </p>
              </ol>
            </div>
          </div>
          <div className="second--right">
            <img
              src="./images/DynamocartesBA-091.png"
              alt=""
              className="right--img1"
            />
            <img
              src="./images/DynamocartesBA-111.png"
              alt=""
              className="right--img2"
            />
          </div>
        </div>
      </div>

      <div className="last--section">last section</div>
    </>
  );
}

export default MainSection;
