import { Aside } from "./components/Aside";
import Card from "./components/Cards";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/Savings";
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
          <section>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body><DailyBudget value={42} /></Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body><SavingsStatus /></Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body>R$200</Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
