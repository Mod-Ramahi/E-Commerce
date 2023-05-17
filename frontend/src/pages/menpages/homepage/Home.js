import './Home.scss'
import Pagehead from '../../../components/mencompoments/pagehead/Pagehead';
import Line from '../../../components/mencompoments/line/Line';

const Home = () => {
    return(
        <div className="home-container">
      <Pagehead />
      <div className="line-container">
        <Line />
      </div>
    </div>
        
    )
}

export default Home;