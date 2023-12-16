
import './App.css';
import Banner from './components/Banner';
import Navigationbar from './components/Navigationbar';
import Row from './components/row';
import {requests} from './request'


function App() {
  return (
    <div>
    
      <Navigationbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests. fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMoovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
      
     
      
      
    </div>

  );
}

export default App;
