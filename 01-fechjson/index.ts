// import axiod from 'https://deno.land/x/axiod/mod.ts';
import axiod from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axiod.get(url).then(response => {
  const todo = response.data as Todo;
  console.log('Response:::', todo);
});