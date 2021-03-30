import { useState } from 'react';
import { useTask } from '../../hooks/use-task';
import * as Ui from './styles';

interface IStatus {
  done: boolean;
  todo: boolean;
  block: boolean;
}

export function Form() {
  const { addTask } = useTask();

  const [status, setStatus] = useState<IStatus>({
    done: false,
    todo: true,
    block: false,
  });

  const [text, setText] = useState('');

  function setDone() {
    setStatus({
      done: !status.done,
      todo: false,
      block: false,
    });
  }

  function setTodo() {
    setStatus({
      done: false,
      todo: !status.todo,
      block: false,
    });
  }

  function setBlock() {
    setStatus({
      done: false,
      todo: false,
      block: !status.block,
    });
  }

  function onAddTask() {
    const task = {
      title: text,
      status,
    };

    if (addTask && text) {
      addTask(task);
      setText('');
    }
  }

  return (
    <Ui.Container>
      <div className="content">
        <input
          type="text"
          placeholder="Insira o titulo da atividade"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="list">
          <Ui.Option
            className={status.done === true ? 'done' : ''}
            onClick={setDone}
            role="button"
          >
            <span>O que fiz?</span>
          </Ui.Option>
          <Ui.Option
            onClick={setTodo}
            className={status.todo === true ? 'todo' : ''}
          >
            <span>O que vou fazer?</span>
          </Ui.Option>
          <Ui.Option
            onClick={setBlock}
            className={status.block === true ? 'block' : ''}
          >
            <span>Impedimentos</span>
          </Ui.Option>
        </div>
        <button type="button" onClick={onAddTask}>
          adicionar
        </button>
      </div>
    </Ui.Container>
  );
}
