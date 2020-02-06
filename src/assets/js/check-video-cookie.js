class CheckVideoCookie {
  constructor() {
    this.$el = null;
    this.cookie = '__bCookiesAccepted';
    this.isVideo = false;
    this.url = null;

    this.init();
  }

  init() {
    this.$el = $('[data-fancybox]');

    if (this.$el.length) {
      this.initWatcher();
    }
  }

  initWatcher() {
    const _this = this;

    _this.$el.on('click', function(e) {
      _this.$el = $(this);
      _this.url = _this.$el.attr('href');
      _this.isVideo = _this.validateVideo();

      if (_this.isVideo) {
        if (document.cookie.indexOf(_this.cookie + "=") === -1 || document.cookie.indexOf(_this.cookie + "=false") >= 0) {
          e.preventDefault();
          _this.openExternal();
        }
      }
    });
  }

  openExternal() {
    const _this = this;

    window.open(_this.url, '_blank');
  }

  validateVideo() {
    const _this = this;

    if (
      _this.url.indexOf('youtube') !== -1 ||
      _this.url.indexOf('youtu.be') !== -1 ||
      _this.url.indexOf('vimeo') !== -1
    ) {
      return true;
    }
  }
}

export { CheckVideoCookie }
