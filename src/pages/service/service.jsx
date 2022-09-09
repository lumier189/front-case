import React, { useState, useEffect }from 'react'
import Card from '../../template/components/card';
import apiService from '../../services/api.service'
import Template from '../../template/main'
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const [api, setApi] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        apiService.listAll().then(({ data}) => {
            console.log(data)
          setApi(data)
        })
          
        
      }, []);

    return ( 
        <Template>
       <Card>


       </Card>
        </Template>
     );
}
 
export default Service;
