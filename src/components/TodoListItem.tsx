import React from 'react';

type AppProps = {
    label: string;
    important: boolean;
  };
  
const TodoListItem = ({label, important=false}: AppProps) => {
    const spanStyle = {
        color: important ? 'tomato' : 'black',
    }
    return (
        <span style={spanStyle}>{label}</span>
    )
}

export default TodoListItem;