import React,{useState,useEffect} from 'react';
import axios from 'axios';



const Search = ()=>{
    
    const [term,setTerm] = useState('');
    const [results,setResults] = useState([]);
    
    console.log(results);


   useEffect(() => {
      
//     const search = async()=>{
//         const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
//             params:{
//                 action:'query',
//                 list:'search',
//                 origin:'*',
//                 format:'json',
//                 srsearch:term

//             }
//         });

//         setResults(data.query.search);
//     };

//     setTimeout(() => {
//         if (term) search();
//     }, 500);

   console.log('Initial render or term was changed.');

   return ()=>{
       console.log('CLEANUP');
   };

 },[term]);

    
   const renderedResults = results.map((result)=>{

    return (
        <div className="item" key={result.pageid}>
           <div className="content">
           <div className="right floated content">
               <a 
               className="ui button" 
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                target="_blank" 
                rel="noreferrer"
                >
               Go
               </a>
           </div>
               <div className="header">
                {result.title}
               </div>
               <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
           </div> 
        </div>
    );
   });

   
    return (
        <div>
        <div className="ui form">
            <div className="field">
                <label htmlFor="search">Enter Search term</label>
                <input 
                className="input"
                 name="search"
                  value={term}
                  onChange={(e)=>{setTerm(e.target.value)}}   
                 />
            </div>
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
        </div>
    );
}


export default Search;