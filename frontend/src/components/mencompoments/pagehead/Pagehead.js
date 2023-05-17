import './Pagehead.scss'
import { Images } from '../../../Images';
import { useTranslation } from 'react-i18next';

const Pagehead = () => {
    const {t}= useTranslation();
    return(
        <div className='pagehead'>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className='runlogo'>
                <img alt={Images[6].alt} src={Images[6].src}/>
                <span> {t("headspan")}</span>
                <p>{t("headp")}</p>
            </div>
            <div className='headbuttons'>
                <button> {t("healthbtn")} <img alt={Images[4].alt} src={Images[4].src}/> </button>
                <button> {t("personalbtn")} <img alt={Images[5].alt} src={Images[5].src}/></button>
            </div>
        </div>
    )
}

export default Pagehead;