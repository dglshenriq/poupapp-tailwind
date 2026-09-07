import { Accounts } from "./components/Accounts";
import { Aside } from "./components/Aside";
import Card from "./components/Cards";
import { Container } from "./components/Container";
import { DailyBudget } from "./components/DailyBudget";
import { Main } from "./components/Main";
import { SavingsStatus } from "./components/Savings";
import { SearchInput } from "./components/SearchInput";
import { Transactions } from "./components/Transactions";
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
          <section className='grid grid-cols-2 items-stretch gap-6'>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={42} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body><Transactions /></Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas</Card.Header>
              <Card.Body><Accounts /></Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
