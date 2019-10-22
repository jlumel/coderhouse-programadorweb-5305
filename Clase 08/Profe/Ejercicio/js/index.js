let texts = ['Ed', 'Edd', 'Eddy'];
let mainList = document.getElementById('mainList');

for (let i = 0; i < texts.length; i++) {
  const text = texts[i];
  let li = document.createElement('li');
  li.innerHTML = text;
  li.className = 'list-group-item';

  mainList.appendChild(li);
}
