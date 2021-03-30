import { Trash2 } from '@styled-icons/feather';
import { useTask } from '../../hooks/use-task';
import * as Ui from './styles';
import { TaskProps } from '../../interfaces';

export function BoxTasks() {
  const { listTaskTodo, listTaskDone, listTaskBlock, removeTask } = useTask();

  function handleRemoveTask(item: TaskProps) {
    if (removeTask && item.id && item.status) {
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
                role="button"
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
                role="button"
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
                role="button"
              />
            </Ui.Task>
          ))}
        </ul>
      </Ui.Box>
    </Ui.Container>
  );
}
