(function(ga) {
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
      this.record('app-store-button', 'click', 'apple-app-store');
      alert('coming soon');
    },

    onGooglePlayClick: function(e) {
      e.preventDefault();
      this.record('app-store-button', 'click', 'google-play-store');
      alert('coming soon');
    },

    record: function(category, action, label) {
      ga('send', 'event', category, action, label);
    }
  }

  return new Home();
})(ga);
