/* Include site search script in head of website using the api key provided by openindex */

class SiteSearch {
  constructor() {
    this.$searchContainer = document.querySelector('.js-search-container');
    this.$searchForm = null;
    this.$searchInput = null;
    this.$openSearch = null;
    this.$closeSearch = null;
    this.$searchIcon = null;
    this.options = {
      restrictedLanguage: 'nl'
    };

    if (this.$searchContainer) {
      this.init();
    }
  }

  init() {
    const _this = this;
    sitesearch(function(openindex) {
      _this.$searchForm = _this.$searchContainer.querySelector('.search-form');
      _this.$searchInput = _this.$searchContainer.querySelector('.search-input');
      _this.$openSearch = document.querySelector('.js-open-search');
      _this.$closeSearch = _this.$searchContainer.querySelector('.js-close-search');
      _this.$searchIcon = _this.$searchContainer.querySelector('.js-search-icon');

      if (typeof openindex !== 'undefined') _this.openIndexSettings();
      if (_this.$searchIcon && _this.$searchForm) _this.triggerSearch();

      if (_this.$openSearch) {
        _this.$openSearch.onclick = (e) => {
          e.preventDefault();
          _this.openSearch();
        };
      }

      if (_this.$closeSearch) {
        _this.$closeSearch.onclick = (e) => {
          e.preventDefault();
          _this.closeSearch();
        };
      }

      document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27 && _this.$searchContainer.classList.contains('active')) {
          _this.closeSearch();
        }
      });

      _this.$searchInput.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
          e.preventDefault(); // Prevent emptying of search field on esc button, should only close search window
        }
      });
    });
  }

  openIndexSettings() {
    openindex.lang.restrict = this.getRestrictedLanguage();
    openindex.result.showAddr = "url";
    openindex.result.addrLink = true;
    openindex.useQueryStringParameters = true;

    if (typeof openIndexErrorSuggestionTranslations !== 'undefined') {
      openindex.notfound.defaultText = openIndexErrorSuggestionTranslations.error_404_default;
      openindex.notfound.text = openIndexErrorSuggestionTranslations.error_404_suggestion;
    }
  }

  openSearch() {
    this.$searchContainer.classList.toggle('active');
    document.body.classList.add('no-scroll');
    if (this.$searchInput) this.$searchInput.focus();
  }

  closeSearch() {
    this.$searchContainer.classList.remove('active');
    document.body.classList.remove('no-scroll');
    if (this.$searchInput) this.$searchInput.blur();
  }

  getRestrictedLanguage() {
    const lang = document.documentElement.getAttribute('lang');

    if (typeof lang === 'undefined') {
      console.warn('SiteSearch needs a valid lang attribute on the HTML tag.');
    } else {
      this.options.restrictedLanguage = lang;
    }

    return this.options.restrictedLanguage;
  }

  triggerSearch() {
    this.$searchIcon.onclick = () => {
      try {
        this.$searchForm.querySelector('#oi-submit').click();
      } catch {
        this.$searchForm.submit();
      }
    };
  }

}

export { SiteSearch }