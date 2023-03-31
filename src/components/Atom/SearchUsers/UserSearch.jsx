import {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserSearch.css'

function UserSearch(){
 
    const [SearchItem, setSearchItem] = useState('')

  // const navigate = useNavigate();
   
   const Search = (item)=>{
            console.log('na him',item)
   }


   const handleChange = (e) => setSearchItem(e.target.value)

  const handleSubmit = ((e)=>{
   e.preventDefault()
         

   Search(SearchItem)
   setSearchItem('')

  })
  
    console.log(SearchItem)







 return(
  
    
       <form onSubmit={handleSubmit}>
           <div className='main-SearchForm'>
            <div className='SearchForm'>
              <input
                type='text'
                className='nav-input'
                placeholder='Search for products (e.g fish, apple, oil)'
                value={SearchItem}
                onChange={handleChange}
                
              />
              </div>
              <div className='search'>
              <FontAwesomeIcon style={{color: 'rgb(136, 136, 136)', fontSize: '20px'}} onClick={handleSubmit} className='Search-Button'   icon={faSearch}/> 
              
              </div>
              </div>
              </form>
   
 
 ) 
}


export default UserSearch