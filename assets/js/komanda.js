const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const rightIcons = document.querySelector('.right-icons');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  rightIcons.classList.toggle('active');
});

// burger mennu




document.querySelectorAll('.sec1-team').forEach(team => {
  const toggleBtn = team.querySelector('.toggle-button');
  const teamDetails = team.querySelector('.team-details');
  const playersContainer = team.querySelector('.players-container');
  const femalePlayers = team.querySelector('.female-players');
  const malePlayers = team.querySelector('.male-players');

  teamDetails.style.display = 'none';
  playersContainer.style.display = 'none';
  femalePlayers.style.display = 'none';
  malePlayers.style.display = 'none';

  toggleBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const isOpen = teamDetails.style.display === 'flex';

    teamDetails.style.display = isOpen ? 'none' : 'flex';
    playersContainer.style.display = 'none';
    femalePlayers.style.display = 'none';
    malePlayers.style.display = 'none';

    toggleBtn.classList.toggle('rotated');
  });

  team.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;

      const isFemaleVisible = femalePlayers.style.display === 'block';
      const isMaleVisible = malePlayers.style.display === 'block';

      if (type === 'female') {
        if (isFemaleVisible) {
          femalePlayers.style.display = 'none';
          playersContainer.style.display = 'none';
        } else {
          playersContainer.style.display = 'flex';
          femalePlayers.style.display = 'block';
          malePlayers.style.display = 'none';
        }
      } else if (type === 'male') {
        if (isMaleVisible) {
          malePlayers.style.display = 'none';
          playersContainer.style.display = 'none';
        } else {
          playersContainer.style.display = 'flex';
          malePlayers.style.display = 'block';
          femalePlayers.style.display = 'none';
        }
      }
    });
  });
});
