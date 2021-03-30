export type StatusProps = {
  done: boolean;
  todo: boolean;
  block: boolean;
};

export type TaskProps = {
  id?: string;
  title?: string;
  status?: StatusProps;
};
