import './style.css'

const tasks = [
  { title: 'Finish project', finished: true, index: 1 },
  { title: 'Fix Car', finished: false, index: 0 },
  { title: 'Gardening', finished: true, index: 2 },
];

const addTodo = (desc, completed, index) => {
  const MakeList = document.createElement('li');
  MakeList.classList.add('npx eslint . ');
  const Input = document.createElement('input');
  Input.classList.add('jobs');
  Input.setAttribute('type', 'checkbox');
  Input.checked = completed;
  MakeList.textContent = desc;
  MakeList.prepend(Input);
  const Div = document.createElement('div');
  Div.classList.add('test');
  MakeList.append(Div);
  MakeList.id = index;
  return MakeList;
};

const AddToPage = (arr) => {
  const UlItems = document.getElementById('list');
  for (let i = 0; i < arr.length; i += 1) {
    arr.sort((a, b) => ((a.index > b.index) ? 1 : -1));
    UlItems.appendChild(addTodo(arr[i].title, arr[i].finished, arr[i].index));
  }
};

AddToPage(tasks);