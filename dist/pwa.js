(() => {
  const installButton = document.querySelector('#install-button');
  const installDialog = document.querySelector('#install-dialog');
  const standalone = window.matchMedia('(display-mode: standalone)');
  let installPrompt = null;
  let installed = false;

  function updateInstallButton() {
    installButton.hidden = installed || standalone.matches || navigator.standalone === true;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    updateInstallButton();
  });

  window.addEventListener('appinstalled', () => {
    installed = true;
    installPrompt = null;
    if (installDialog.open) installDialog.close();
    updateInstallButton();
  });

  standalone.addEventListener('change', updateInstallButton);
  updateInstallButton();

  installButton.addEventListener('click', async () => {
    if (!installPrompt) {
      if (!installDialog.open) installDialog.showModal();
      return;
    }

    // Browsers only allow a stored native prompt to be used once, after a click.
    const prompt = installPrompt;
    installPrompt = null;
    installButton.disabled = true;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch {
      if (!installDialog.open) installDialog.showModal();
    } finally {
      installButton.disabled = false;
    }
  });

  if ('serviceWorker' in navigator && window.isSecureContext) {
    // Relative URLs keep both the worker and its cache inside this Pages project.
    navigator.serviceWorker.register('./sw.js', { scope: './', updateViaCache: 'none' })
      .catch((error) => console.warn('No se pudo activar el modo sin conexión.', error));
  }
})();
