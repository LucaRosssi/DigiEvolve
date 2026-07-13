import HelpTooltip from './HelpTooltip';
import Stat from './Stat'
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { useEffect } from 'react';

const Requisitos = ({ digimon }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.split('-')[0]; // normaliza 'en-US' -> 'en'

  const especialText = typeof digimon.especial === 'object'
    ? (digimon.especial[currentLang] ?? digimon.especial.en)
    : digimon.especial;

  useEffect(() => {
    console.log('Idioma actual:', currentLang);
  }, [i18n.language]);

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
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/hp_bd3c6w.png', label: t('requisitos.stats.life'), value: digimon.vida, id: 'vida' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/mp_jblqox.png', label: t('requisitos.stats.mp'), value: digimon.mp, id: 'mp' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209212/offense_xnbgwm.png', label: t('requisitos.stats.strength'), value: digimon.fuerza, id: 'fuerza' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/defense_ebohzv.png', label: t('requisitos.stats.defense'), value: digimon.defensa, id: 'defensa' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209212/speed_nnrunm.png', label: t('requisitos.stats.speed'), value: digimon.velocidad, id: 'velocidad' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/brains_c2rxlz.png', label: t('requisitos.stats.intelligence'), value: digimon.inteligencia, id: 'inteligencia' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/care_hbijk8.png', label: t('requisitos.stats.careMistakes'), value: renderErrores(digimon.errores), id: 'errores' },
    {
      icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/weight_et2v4p.png',
      label: (t('requisitos.stats.weight')),
      value: digimon.peso ? `${digimon.peso[0]} - ${digimon.peso[1]}` : null,
      id: 'peso'
    },
  ];

  const statsEspeciales = [
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/happiness_kbldpa.png', label: t('requisitos.stats.happiness'), value: digimon.felicidad, cara: true, id: 'felicidad' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/discipline_z5jxgt.png', label: t('requisitos.stats.discipline'), value: digimon.disciplina, cara: true, id: 'disciplina' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/battle_wnzdg0.png', label: t('requisitos.stats.battles'), value: renderBatallas(digimon.batallas), id: 'batallas' },
    { icon: 'https://res.cloudinary.com/hqw4axe3/image/upload/v1783209211/techniques_kxlsdm.png', label: t('requisitos.stats.techniques'), value: digimon.tecnicas, id: 'tecnicas' },
  ];

  return (
    <>
      <h2>
        {t('requisitos.title') }
        <HelpTooltip/>  
      </h2>
      <div className="digimon-requisitos">
        {statsBasicos.map((stat) => (
          <Stat key={stat.id} icon={stat.icon} label={stat.label} value={stat.value} />
        ))}
      </div>

      <div className="requisitos2">
        <h2>{t('requisitos.specialTitle')}</h2>
        <div className="digimon-requisitos especiales">
          {statsEspeciales.map((stat) => (
            <div key={stat.id} className={`stat ${stat.cara ? 'cara' : ''}`}>
              <img src={stat.icon} title={stat.label} alt={stat.label} />
              <span>{stat.value ?? '-'}</span>
            </div>
          ))}
        </div>

        {especialText && (
          <div className='especial'>
            <p>{especialText}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Requisitos