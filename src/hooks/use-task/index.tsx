import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StatusProps, TaskProps } from '../../interfaces';

export type TaskContextProps = {
  listTaskTodo?: TaskProps[];
  listTaskDone?: TaskProps[];
  listTaskBlock?: TaskProps[];
  addTask?: (task: TaskProps) => void;
  removeTask?: (id: string, status: StatusProps) => void;
};

export type TaskProviderProps = {
  children: React.ReactNode;
};

export const TaskContextDefaultValues = {
  listTaskTodo: [
    {
      id: '1',
      title: 'Atividade default 1',
      status: {
        done: true,
        todo: false,
        block: false,
      },
    },
  ],
};

export const TaskContext = createContext<TaskContextProps>(
  TaskContextDefaultValues
);

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [listTaskTodo, setTaskTodo] = useState<TaskProps[]>([]);
  const [listTaskDone, setTaskDone] = useState<TaskProps[]>([]);
  const [listTaskBlock, setTaskBlock] = useState<TaskProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    console.log('LISTA [DONE]', listTaskDone);
    // eslint-disable-next-line
    console.log('LISTA [TODO]', listTaskTodo);
    // eslint-disable-next-line
    console.log('LISTA [BLOCK]', listTaskBlock);
  }, [listTaskDone, listTaskBlock, listTaskTodo]);

  const addTask = (task: TaskProps) => {
    const taskWithId = { ...task, id: uuidv4() };

    if (task.status?.done) {
      setTaskDone([...listTaskDone, taskWithId]);
    }

    if (task.status?.todo) {
      setTaskTodo([...listTaskTodo, taskWithId]);
    }

    if (task.status?.block) {
      setTaskBlock([...listTaskBlock, taskWithId]);
    }
  };

  const removeTask = (id: string, status: StatusProps) => {
    if (status.done === true) {
      const listNew = listTaskDone.filter((item) =>
        item.id !== id ? item : ''
      );

      setTaskDone(listNew);
    }
    if (status.todo === true) {
      const listNew = listTaskTodo.filter((item) =>
        item.id !== id ? item : ''
      );

      setTaskTodo(listNew);
    }
    if (status.block === true) {
      const listNew = listTaskBlock.filter((item) =>
        item.id !== id ? item : ''
      );

      setTaskBlock(listNew);
    }
  };

  return (
    <TaskContext.Provider
      value={{ addTask, removeTask, listTaskTodo, listTaskBlock, listTaskDone }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { TaskProvider, useTask };
