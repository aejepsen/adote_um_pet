import { TituloStyled, SubTituloStyled } from './Titulo.style';

interface TituloProps {
  titulo: string;
  subtitulo: string | JSX.Element;
}

export default function Titulo(props: TituloProps) {
  return (
    <>
     <TituloStyled> { props.titulo } </TituloStyled> 
     <SubTituloStyled>{ props.subtitulo }</SubTituloStyled>
    </>
  )
}
