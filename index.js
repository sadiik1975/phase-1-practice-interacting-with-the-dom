const likeButton = document.getElementById('like');
const likesList = document.querySelector('.likes');

const likes = {};

function updateLikesDisplay() {
  likesList.innerHTML = '';
  Object.keys(likes).forEach(number => {
    const li = document.createElement('li');
    li.textContent = `${number} has ${likes[number]} likes`;
    likesList.appendChild(li);
  });
}

function likeNumber() {
  if (!likes[counter]) {
    likes[counter] = 0;
  }
  likes[counter]++;
  updateLikesDisplay();
}

likeButton.addEventListener('click', likeNumber);
