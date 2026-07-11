import HelpTooltip from './HelpTooltip';
import Stat from './Stat'

const Requisitos = ({ digimon }) => {
  const renderBatallas = (batallas) => {
    if (!batallas) return "-";
    if (batallas[0] === 0) return `< ${batallas[1]}`;
    if (batallas[1] === 1000) return `> ${batallas[0]}`;
    return `${batallas[0]} - ${batallas[1]}`;
  };

  const renderErrores = (errores) => {
    if (errores === null || errores === undefined) return "-";
    if (errores[1] === 100) return `> ${errores[0]}`;
    if (errores[0] === 0) return `< ${errores[1]}`;
    return `${errores[0]} - ${errores[1]}`;
  };

  // Stats simples: mismo patrón de renderizado (número o '-')
  const statsBasicos = [
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/hp_bd3c6w.png', label: 'Vida', value: digimon.vida },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/mp_jblqox.png', label: 'MP', value: digimon.mp },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209212/offense_xnbgwm.png', label: 'Fuerza', value: digimon.fuerza },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/defense_ebohzv.png', label: 'Defensa', value: digimon.defensa },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209212/speed_nnrunm.png', label: 'Velocidad', value: digimon.velocidad },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/brains_c2rxlz.png', label: 'Inteligencia', value: digimon.inteligencia },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/care_hbijk8.png', label: 'Erores de Crianza', value: renderErrores(digimon.errores) },
    {
      icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/weight_et2v4p.png',
      label: 'Peso',
      value: digimon.peso ? `${digimon.peso[0]} - ${digimon.peso[1]}` : null
    },
  ];

  const statsEspeciales = [
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/happiness_kbldpa.png', label: 'Felicidad', value: digimon.felicidad, cara: true },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/discipline_z5jxgt.png', label: 'Disciplina', value: digimon.disciplina, cara: true },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/battle_wnzdg0.png', label: 'Batallas', value: renderBatallas(digimon.batallas) },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/techniques_kxlsdm.png', label: 'Técnicas Aprendidas', value: digimon.tecnicas },
  ];

  return (
    <>
      <h2>
        Requisitos
        <HelpTooltip/>  
      </h2>
      <div className="digimon-requisitos">
        {statsBasicos.map((stat) => (
          <Stat key={stat.label} icon={stat.icon} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="requisitos2">
        <h2>Requisitos Especiales</h2>
        <div className="digimon-requisitos especiales">
          {statsEspeciales.map((stat) => (
            <div key={stat.label} className={`stat ${stat.cara ? 'cara' : ''}`}>
              <img src={stat.icon} title={stat.label} alt={stat.label} />
              <span>{stat.value ?? '-'}</span>
            </div>
          ))}
        </div>

        {digimon.especial && (
          <div className='especial'>
            <p>{digimon.especial}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Requisitos