import * as Ui from './styles';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { TaskProvider } from '../../hooks/use-task';
import { BoxTasks } from '../../components/BoxTasks';

export function Dashboard() {
  return (
    <TaskProvider>
      <Ui.Container>
        <Header />
        <Form />
        <BoxTasks />
      </Ui.Container>
    </TaskProvider>
  );
}
