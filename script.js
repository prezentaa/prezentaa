fetch('/status.json')
	.then((response) => response.json())
	.then((data) => {
		if (data.redirectTo === 'spotify') {
			window.location.href = 'https://open.spotify.com/track/TUTAJ_ID_PIOSENKI';
		} else {
			window.location.href = '/zagadka.html';
		}
	})
	.catch((err) => {
		console.error('Błąd ładowania statusu:', err);
	});
