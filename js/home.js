(function() {
  'use strict';

  function Home() {
    this.els = {
      googlePlayStoreButton: document.querySelector('.js-google-play-store'),
      appleAppStoreButton: document.querySelector('.js-apple-app-store')
    };

    this.els.googlePlayStoreButton.addEventListener('click', this.onGooglePlayClick.bind(this));
    this.els.appleAppStoreButton.addEventListener('click', this.onGooglePlayClick.bind(this));
  }

  Home.prototype = {
    onAppleAppStoreClick: function(e) {
      e.preventDefault();

      window.ga('send', {
        hitType: 'event',
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: 'apple-app-store'
      });

      alert('coming soon');
    },

    onGooglePlayClick: function(e) {
      e.preventDefault();

      window.ga('send', {
        hitType: 'event',
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: 'google-play-store'
      });

      alert('coming soon');
    }
  }

  return new Home();
})();
