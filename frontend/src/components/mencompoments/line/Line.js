import './Line.scss';
import { Images } from '../../../Images';
import { useTranslation } from 'react-i18next';

const Line = () => {
    const {t}= useTranslation();
    return(
        <div className='line'>
            <p>{t("trust")}</p>
            <img alt={Images[3].alt} src={Images[3].src}/>
            <img alt={Images[1].alt} src={Images[1].src}/>
            <p>{t("wecare")}</p>
        </div>
    )
}

export default Line;