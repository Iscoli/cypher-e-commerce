import {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSearch.css';
import { useNavigate } from 'react-router-dom';




function UserSearch(){

   const nav = useNavigate()

 
    const [searchItem, setSearchItem] = useState('')

  // const navigate = useNavigate();


    const handleChange =(e)=>{
        console.log(e.target.value);
        setSearchItem(e.target.value);
    }

   
   const handleSubmit =(e)=>{
    e.preventDefault();
    if(searchItem === ''){
      return;
    }else{
      nav(`/search?query=${searchItem}`);
      setSearchItem('')
    }
   }









 return(
  
    
       <form onSubmit={handleSubmit}>
           <div className='main-SearchForm'>
            <div className='SearchForm'>
              <input
                type='text'
                className='nav-input'
                placeholder='Search for products (e.g fish, apple, oil)'
                value={searchItem}
                onChange={handleChange}     
              />
              </div>
  
  
              <div
              style={{cursor:'pointer'}}
              onClick={handleSubmit}
              className='search'>
              <FontAwesomeIcon style={{color: 'rgb(136, 136, 136)', fontSize: '20px'}} className='Search-Button'   icon={faSearch}/> 
              
              </div>
              </div>
              </form>
   
 
 ) 
}


export default UserSearch