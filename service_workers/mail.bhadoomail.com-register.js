if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	navigator.serviceWorker.register(mailbhadoomail.url)
	.then(function(registration) { console.log('Hash Hackers Service worker ready'); registration.update(); })
	.catch(function(error) { console.log('Registration failed with ' + error); });
  });
}
