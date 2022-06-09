import { CabecalhoContainer,  Logo,  LinksContainer } from './CabecalhoAdmin.style';

export default function CabecalhoAdmin(){
  return (
    <CabecalhoContainer>
      <div>
        <Logo src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Logo" />
        <LinksContainer>
          <span>Cadastrar Pet</span>
          <span>Relatório de Adoção</span>
        </LinksContainer>
      </div>
    </CabecalhoContainer>
  )
}
