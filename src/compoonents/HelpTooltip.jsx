import { OverlayTrigger, Popover } from "react-bootstrap"
import { HiQuestionMarkCircle } from "react-icons/hi"
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const HelpTooltip = () => {
  const { t } = useTranslation();
  const popover = (
    <Popover id="help-popover">
      <Popover.Body style={{ fontSize: '0.9em', width: '250px', backgroundColor: '#ede7c8', color: '#212529', padding: '10px', borderRadius: '5px' }}>
        <p>{t('helpToolTip.text')}</p>
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