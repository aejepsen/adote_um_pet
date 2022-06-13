import { NextPage } from 'next';
import { useCadastro } from '../../data/hooks/pages/pets/useCadastro';
import Titulo from '../../ui/components/Titulo/Titulo';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';

const Cadastro: NextPage = () => {
  const{
    nome,
    setNome,
    historia,
    setHistoria,
    foto,
    setFoto,
    mensagem,
    setMensagem,
    cadastrar,
  } = useCadastro();

  return (
    <>
      <Titulo 
        titulo={' Cadastro de Pet para Adoção' }  
        subtitulo={'Preencha os dados do novo pet'}
      />
      <Paper
        sx={{maxWidth: '970px', margin: '0 auto', padding: 5}}
      >
        <Grid container spacing={3} >
          <Grid item xs={12} >
            <TextField
              label={'Nome'}
              placeholder={'Digite o nome do Pet'}
              variant="outlined"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label={'História do  Pet'}
              placeholder={'Digite a história do Pet'}
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={historia}
              onChange={(e) => setHistoria(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label={'Foto'}
              placeholder={'Digite endereço da imagem do Pet'}
              fullWidth
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
            />
            <Button
              variant={'contained'}
              color={'secondary'}
              sx={{marginTop: 2}}
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Enviar Imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{textAlign: 'center'}} >
            <Button
              variant={'contained'}
              fullWidth
              sx={{maxWidth: {md: 200}, marginTop: 4}}
              onClick={cadastrar}
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
        message={mensagem}
      />
    </>
  );
}

export default Cadastro;
