const paginationButtonEls = document.querySelectorAll('.pagination');
for (let i = 0; i < paginationButtonEls.length; i++) {
  const button = paginationButtonEls[i];
  button.addEventListener('click', async function () {
    const page = button.dataset.page;
    const users = await getUsers(page);
    renderUsers(users);
  });
}
 
async function renderUsers(users) {
  let content = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    content += `
      <div>
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
        <p>${user.first_name} ${user.last_name}</p>
      </div>
    `;
  }
  document.querySelector('#app').innerHTML = content;
}
 
async function getUsers(page) {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const json = await response.json();
  return json.data;
}