const rootElement = document.getElementById('root');

const modButton = document.createElement('div');
modButton.textContent = 'Moderator';
modButton.className = 'BigButton';

const playerButton = document.createElement('div');
playerButton.textContent = 'Player';
playerButton.className = 'BigButton';

rootElement.appendChild(modButton);
rootElement.appendChild(playerButton);