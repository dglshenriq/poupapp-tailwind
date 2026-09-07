import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";

function App() {
  return (
    <div className='bg-neutral-background min-h-screen'>
      <Container>
        <Aside />
        <Main>
          <SearchInput name='q' placeholder='Procure o seu dinheiro...' />
          <div>
            <Typography variant='h1'>Olá, Douglas!</Typography>
            <Typography>Veja como estão as suas finanças hoje!</Typography>
          </div>
        </Main>
      </Container>
    </div>
  );
}

export default App;
