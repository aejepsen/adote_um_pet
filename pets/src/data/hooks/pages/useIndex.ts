import { useState, useEffect } from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/APIService';
import { AxiosError } from 'axios';

export function useIndex(){
  const [listaPets, setListaPets] = useState<Pet[]>([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('');


  useEffect(() => {
    ApiService.get('/pets/')
    .then((response) => {setListaPets(response.data);
  })}, []);  

  function adotar(){
    if(petSelecionado !== null){
      if(validar()){
        ApiService.post('/adocoes/', {
          pet_id: petSelecionado.id,
          email,
          valor
        })
        .then(() => {
          setMensagem('Pet adotado com sucesso!');
          setPetSelecionado(null);
          setEmail('');
          setValor('');
        })
        .catch ((error: AxiosError) => {
          setMensagem(error.response?.data.message);
        });
      } else {
        setMensagem('Preencha todos os campos');
      }
    }
    }

  function validar() {
    if(email === '') {
      setMensagem('Informe o email');
      return false;
    }
    if(valor === '') {
      setMensagem('Informe o valor');
      return false;
    }
    return true;
  };

  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar
  }; 
}