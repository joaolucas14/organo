import Heroi from "../Heroi";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  return (
    props.herois.length > 0 && (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.herois.map((heroi) => (
            <Heroi
              key={heroi.nome}
              nome={heroi.nome}
              descricao={heroi.descricao}
              imagem={heroi.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Time;
