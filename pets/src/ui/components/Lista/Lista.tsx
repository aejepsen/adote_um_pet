import {
  ListaStyled,
  ListaItemStyled,
  FotoStyled,
  InfoStyled,
  NomeStyled,
  DescricaoStyled,
} from './Lista.style';
import { Button } from '@mui/material';
import { Pet } from '../../../data/@types/Pet';
import { TextService } from '../../../data/services/TextService';

interface ListaProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
  const limiteCaracteres = 200;
  return (
  <>
    <ListaStyled>
      {props.pets.map((pet) => (
        <ListaItemStyled key={pet.id}>
          <FotoStyled src={pet.foto} alt={pet.nome}  />
          <InfoStyled>
            <NomeStyled>{pet.nome}</NomeStyled>
            <DescricaoStyled>{TextService.limitarTexto(pet.historia, limiteCaracteres)}</DescricaoStyled>
            <Button
              variant={'contained'}
              fullWidth
              onClick={() => props.onSelect(pet)}
            >Adotar  {pet.nome}</Button>
          </InfoStyled>
        </ListaItemStyled>
      ))}
      </ListaStyled>
  </>
  )
}