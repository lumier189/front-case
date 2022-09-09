import React,{ useEffect, useState }  from 'react';
import Card from '../../template/components/card';
import Template from '../../template/main';
import TodoCard from './components/todo';
import ServiceCard from './components/service';
import Jumbotron from './components/jumbotron';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';

 
function Home() {  
  const [profile, setProfile] = useState({name:null})
  const navigate = useNavigate()
  useEffect(()=> {
    authService.refresh().then((response)=>{
      sessionStorage.setItem('token', response.data.token)  
    }).catch(()=>{
      navigate('/', {
        state:{
          type:'danger',
          message:'Token expirado, faça login novamente.'
        }
      })
    }).then(()=>authService.profile())
    .then(({data})=>{
      setProfile(data)
    })
    
  },[])
  return (
    <Template>
      <div className="container py-5">
      <Card>               
          <div className="row mb-2">
            <Jumbotron profile={profile}></Jumbotron>
            <TodoCard className="col-6"></TodoCard>
            <ServiceCard className="col-6"></ServiceCard> 
          </div>       
      </Card>
      </div>
    </Template >
  );
}

export default Home;