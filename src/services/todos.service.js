export function createTodo(text) {
  return {
    id: new Date().getTime(),
    text,
    isChecked: false,
  };
}

// export function removeTodo(todoId){
//     // remove the todo
// }
