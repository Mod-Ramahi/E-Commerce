import './Home.scss'
import Pagehead from '../../../components/mencompoments/pagehead/Pagehead';
import Line from '../../../components/mencompoments/line/Line';
import Firstslider from '../../../components/mencompoments/firstslider/Firstslider';
import Mcontent from '../../../components/mencompoments/mainpagecontent/Mcontent';

const Home = () => {
    return(
      <>
      <Pagehead />
       
       <Line />
     
       <Firstslider/>

       <Mcontent/>
       
      </>    
    )
}

export default Home;