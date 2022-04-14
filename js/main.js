document.querySelector('form').addEventListener('submit', getFetch)

function getFetch(e){
  e.preventDefault();

  // const choice = document.querySelector('input').value
  const url = 'https://randomuser.me/api/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let user = data.results[0];
        clearPreviousUser();
        addPicture(user.picture.large);
        addName(user.name.first, user.name.last);
        addLocation(user.location.country);
        addEmail(user.email);
        // document.querySelector('img').src = user.picture.large;
        // document.querySelector('h2').innerText = `${user.name.first} ${user.name.last}`
        // document.querySelector('span').innerText = user.location.country;
        // document.createElement('li').appendChild()
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function addPicture(url) {
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
}

function addName(first, last) {
  const h2 = document.createElement('h2');
  h2.innerText = `${first} ${last}`;
  document.body.appendChild(h2);
}

function addLocation(loc) {
  const span = document.createElement('span');
  span.innerHTML = `<b>Location:</b> ${loc}`;
  document.body.appendChild(span);
}

function addEmail(email) {
  const span = document.createElement('span');
  span.innerHTML = `<b>Email:</b> ${email}`;
  document.body.appendChild(span);
}

function clearPreviousUser() {
  document.querySelector('img')?.remove();
  document.querySelector('h2')?.remove();
  document.querySelectorAll('span')?.forEach(span => span.remove());
}