import { OverlayTrigger, Popover } from "react-bootstrap"
import { HiQuestionMarkCircle } from "react-icons/hi"

const HelpTooltip = () => {
  const popover = (
    <Popover id="help-popover">
      <Popover.Body style={{ fontSize: '0.9em', width: '250px', backgroundColor: '#ede7c8', color: '#212529', padding: '10px', borderRadius: '5px' }}>
        Para evolucionar al Digimon, tenés que cumplir 3 de los 4 requisitos. Estos son 
        Stats (Vida, MP, Fuerza, Defensa, Velocidad, Inteligencia), Errores de Crianza y Peso. Por otro
        lado, están los requisitos especiales (peleas, disciplina, felicidad y tecnicas aprendidas); no es
        necesario cumplir con todos los requisitos especiales, con uno alcanza, al contrario de Stats
        que debés alcanzar todos los requisitos mínimos para que cuente. Para los Digimon más avanzados, es
        conveniente ignorar los Stats y centrarse en la crianza, el peso y los requisitos especiales.
      </Popover.Body>
    </Popover>
  )

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
      <span className="help-icon" role="button" tabIndex={0} aria-label="Ayuda">
        <HiQuestionMarkCircle />
      </span>
    </OverlayTrigger>
  )
}

export default HelpTooltip