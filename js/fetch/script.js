// fetch('https://randomuser.me/api')
//   .then((response) =>response.json()) // this reads the json and turns it into a JavaScript Object
//   .then((data) => console.log(data));

const getRandomUser = async () => {
  // wait for response  
  const response = await fetch('https://randomuser.me/api');
  // turn response into data
  if (!response.ok) {
    throw new Error('Ooops');
  }
  const data = await response.json();
  return data.results[0];
}

const addNameToDom = (name) => {
  const h2 = document.querySelector('h2');
  h2.textContent = name;
}

// getRandomUser().then((user) => console.log(user));

const agePara = document.querySelector('#age');
const img = document.querySelector('img');

document.querySelector('button').addEventListener('click', async () => {
  const user = await getRandomUser();
  console.log(user);
  const { first, last } = user.name;
  const { age } = user.dob; 
  const { large: imgUrl } = user.picture;
  const fullName = `${first} ${last}`;
  addNameToDom(fullName);
  agePara.textContent = `Age: ${age}`;
  img.setAttribute("src", imgUrl);
  img.setAttribute("alt", fullName);
});