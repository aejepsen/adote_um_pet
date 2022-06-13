import { useState } from 'react';
import { ApiService } from '../../../services/APIService';
import { AxiosError } from 'axios';

export function useCadastro() {
  const [nome, setNome ] = useState(''),
        [historia, setHistoria] = useState(''),
        [foto, setFoto] = useState(''),
        [mensagem, setMensagem] = useState('');

        function cadastrar() {
          if(validarFormulario()) {
            ApiService.post('/pets', {
              nome,
              historia,
              foto
          })
            .then(() => {
              limpar();
              setMensagem('Pet cadastrado com sucesso!')
            })
            .catch((error: AxiosError) => {
              setMensagem(error.response?.data.message);          
            })
        }else {
          setMensagem('Preencha todos os campos!');
        }
      }

        function validarFormulario() {  
          return nome.length > 0  && historia.length > 0  && foto.length > 0
        }

        function limpar() {
          setNome('');
          setHistoria('');
          setFoto('');
        }

        return {
          nome,
          setNome,
          historia,
          setHistoria,
          foto,
          setFoto,
          mensagem,
          setMensagem,
          cadastrar,

        }

}
