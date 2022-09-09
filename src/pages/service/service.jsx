import React, { useState, useEffect }from 'react'
import Card from '../../template/components/card';
import apiService from '../../services/api.service'
import Template from '../../template/main'
import { useNavigate } from 'react-router-dom';
import List from './list'
import axios from 'axios';


const Service = () => {
    const [api, setApi] = useState({results:[]});
    console.log(api.results)
   
    const navigate = useNavigate();
    const [current, setCurrent] = useState(1)

  async function handlePrevious(){
      const newCurrent = current -1
      setCurrent(newCurrent)
     const response = await apiService.listAll(newCurrent)
     setApi(response.data)      
    }

    async function handleNext(){
      const newCurrent = current +1
      
      setCurrent(newCurrent)
     const response = await apiService.listAll(newCurrent)
     console.log(response.data)
     setApi(response.data)
    }

    useEffect(() => {
        apiService.listAll().then(({data}) => {
            console.log(data)
          setApi(data)
        }).catch(() => {
          navigate('/', {
            state: {
              type: 'danger',
              message: 'Token expirado, faça login novamente'
            }
          })
        })
      }, []);            

    return ( 
        <Template> 
          <List characters={api.results} onPrevious={handlePrevious} onNext={handleNext}/>
        </Template>
     );
}
 
export default Service;
