import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/filters/Filters';
import Cards from './components/cards/Cards';
import Pagination from './components/pagination/Pagination';
import Search from './components/search/Search';

function App() {
let [pageNumber,setPageNumber]=useState(1);
let [search, setSearch] = useState('');

let[fetchData, updateFecthedData] = useState([]);
let {info, results } =fetchData;

  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  
  useEffect(()=>{
 (async function(){
  let data=await fetch(api).then(res=>res.json());
  updateFecthedData(data);
 })();
  }, [api]);
  
  
  return (
    <div className="App">
    <h1 className='text-center ubuntu my-4'>
      Rick & Morty <span className='text-primary'>WiKi</span> 
     </h1>

    <Search setPageNumber={setPageNumber}setSearch={setSearch} />

   <div className='container'>
    <div className='row'>
      <div className='col-3'>
        <Filters/>
      </div>
      
      <div className='col-8'>
        <div className='row'>
        <Cards results={results}/>
          
        </div>
      </div>
    </div>
   </div>

  <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
