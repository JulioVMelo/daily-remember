import { Trash2 } from '@styled-icons/feather';
import { useTask } from '../../hooks/use-task';
import * as Ui from './styles';

export function BoxTasks() {
  const { listTaskTodo, listTaskDone, listTaskBlock, removeTask } = useTask();
  // alterar tipagem dos parametros
  function handleRemoveTask(item: any) {
    if (removeTask) {
      removeTask(item.id, item.status);
    }
  }

  return (
    <Ui.Container>
      <Ui.Box>
        <h2>O que fiz?</h2>
        <ul>
          {listTaskDone?.map((item) => (
            <Ui.Task key={item.id} className="bg-green">
              <h3>{item.title}</h3>
              <Trash2
                color="#000"
                size={20}
                onClick={() => handleRemoveTask(item)}
              />
            </Ui.Task>
          ))}
        </ul>
      </Ui.Box>
      <Ui.Box>
        <h2>O que vou fazer?</h2>
        <ul>
          {listTaskTodo?.map((item) => (
            <Ui.Task key={item.id} className="bg-purple">
              <h3>{item.title}</h3>
              <Trash2
                color="#000"
                size={20}
                onClick={() => handleRemoveTask(item)}
              />
            </Ui.Task>
          ))}
        </ul>
      </Ui.Box>
      <Ui.Box>
        <h2>Impedimentos</h2>
        <ul>
          {listTaskBlock?.map((item) => (
            <Ui.Task key={item.id} className="bg-red">
              <h3>{item.title}</h3>
              <Trash2
                color="#000"
                size={20}
                onClick={() => handleRemoveTask(item)}
              />
            </Ui.Task>
          ))}
        </ul>
      </Ui.Box>
    </Ui.Container>
  );
}
