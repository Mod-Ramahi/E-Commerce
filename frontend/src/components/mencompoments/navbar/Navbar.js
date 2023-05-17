// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='navbarcontainer'>
            <div className='navbar'>
                <Link className='logo' to='/'>My Logo</Link>
                <div className='baroptions'>
                    <Link to='/signin'>
                        <button className='signinbtn'>{t("signing")}</button>
                    </Link>
                    <Link className='femalelink' to='/femaleshop'><strong>{t("femaleshop")}</strong></Link>
                    <Link className='health care' to='/healthcare'>{t("health")}</Link>
                    <Link className='personal care' to='/personalcare'>{t("personal")}</Link>
                    { i18n.language ==='en' &&<Link className='lang' to='' onClick={()=> {
                        i18n.changeLanguage('ar');
                    }}>عربي</Link>}
                    { i18n.language ==='ar' &&<Link className='lang' to='' onClick={()=> {
                        i18n.changeLanguage('en');
                    }}>ENG</Link>}
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;