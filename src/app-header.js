export class AppHeader {
  
  constructor() {
    this.updateAvailable = false;
  }

  attached() {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
      this.updateAvailable = true;
    }

    window.applicationCache.addEventListener('updateready', (e) => {
      this.updateAvailable = true;
    });
  }

  detached() {
    window.applicationCache.removeEventListener('updateready');
  }

  update() {
    try {
      window.applicationCache.swapCache();
      window.location.reload(true);
    } catch (error) {
      /* noop */
    }
  }


}
