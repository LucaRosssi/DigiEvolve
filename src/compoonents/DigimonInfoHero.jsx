import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const DigimonInfoHero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="digimon-field hero">
        <h1>{t('info.infoTitle')}</h1>
        <span>
            {t('info.infoText')}
        </span>
        <img src="https://res.cloudinary.com/hqw4axe3/image/upload/v1783549688/7b0d31b66efb7dfcb5458db14a009d92_iz9clk.png" alt="DigiEvolve" className='digievolve-cover'/>
    </div>
  )
}

export default DigimonInfoHero