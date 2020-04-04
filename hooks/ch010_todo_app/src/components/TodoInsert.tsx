import React, { useState, useCallback, FormEventHandler, FunctionComponent, ChangeEvent, FormEvent } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { TodoInsertProps } from '../model/TodoModel';

const TodoInsert: FunctionComponent<TodoInsertProps> = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback<(arg: ChangeEvent<HTMLInputElement>) => void> (e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback<(arg1: FormEvent<HTMLFormElement>) => void> (e => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위하여 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value], );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
