import innerphoto from "../../assets/img/swimming_guy.png";
import innerphoto2 from "../../assets/img/biker_guy.png";
import "./usp.css";

const Usp = () => {
  return (
    <>
      <section className="uspSection">
        <h2 className="UspTitle">EL RITUAL</h2>
        <div className="uspSection1">
          <div className="uspSection1_pic">
            <img className="photo1" src={innerphoto} alt="swimming guy" />
          </div>

          <div className="uspSection_text">
            <h3 className="titleUsp">NO ERES EL ÚNICO/A</h3>
            <p className="textUsp1">
              Faltan pocas semanas para esa competición o ese partido tan
              importante. Aunque estás entrenando bien y te sientes fuerte
              físicamente, hay algo que no va bien. Y lo sabes.<br></br>
              <br></br>
              En las semanas previas a la competición sientes que comienzas a
              dudar de ti, a sentir la presión y a no dormir y descansar
              profundamente como sueles hacerlo SIEMPRE. <br></br>
              <br></br>Y cuantos menos días quedan para competir, más aumenta el
              miedo a que se escape ese sueño deportivo de entre tus dedos.
            </p>
          </div>
        </div>

        <div className="uspSection2">
          <div className="uspSection_text">
            <h3 className="titleUsp">
              ESA ES LA RAZÓN POR LA QUE CREAMOS EL “RITUAL”
            </h3>
            <p className="textUsp2">
              Queríamos ayudar a deportistas como tú que iban a competir y
              necesitaban integrar EN SU DÍA A DÍA un entrenamiento psicológico
              lo más rápido posible. <br></br>
              <br></br>Un entrenamiento MENTAL que fuera
              compatible con sus entrenos, y que les diera esa confianza,
              seguridad y calma suficiente para rendir al máximo posible.
            </p>
          </div>
          <div className="uspSection2_pic">
            <img className="photo2" src={innerphoto2} alt="jumping biker" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Usp;
