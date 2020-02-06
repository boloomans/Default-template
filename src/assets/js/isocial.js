class Isocial {
  constructor() {
    this.$shareSelector   = $('#js-is-sh');
    // this.$channelSelector = $('#js-isocial-footer');
    // this.channelOptions   = {
    //   mode       : 'channels',
    //   order      : {main: ['facebook', 'twitter', 'linkedin', 'googleplus'], plus: [], disabled: ['tumblr', 'mail', 'pinterest', 'whatsapp', 'bookmark', 'youtube', 'printer']},
    //   channelUrls: {
    //     'facebook'  : 'https://www.facebook.com/Ivengi',
    //     'linkedin'  : 'https://nl.linkedin.com/company/ivengi.com',
    //     'googleplus': 'https://plus.google.com/+IvengiMaastricht',
    //     'twitter'   : 'https://twitter.com/ivengi',
    //   },
    //   style      : {
    //     width         : 24,
    //     height        : 24,
    //     fontSize      : 12,
    //     lineHeight    : 24,
    //     borderRadius  : 12,
    //     txtColor      : '#111111',
    //     iconBgColor   : '#FFFFFF',
    //     hoverTxtColor : '#111111',
    //     hoverBgColor  : '#bfc729',
    //     hoverBgOpacity: 1,
    //     orientation   : 'horizontal',
    //     mobileScale   : 1,
    //   },
    //   showCounter: false,
    // };
    this.shareOptions     = {
      order      : { main: ['facebook', 'twitter', 'linkedin', 'googleplus'], plus: ['bookmark', 'printer'], disabled: ['mail'] },
      style      : {
        width         : 24,
        height        : 24,
        fontSize      : 16,
        lineHeight    : 24,
        borderRadius  : 12,
        txtColor      : '#222222',
        iconBgColor   : 'transparent',
        hoverTxtColor : '#222222',
        hoverBgColor  : 'transparent',
        hoverBgOpacity: 1,
        orientation   : 'horizontal',
        mobileScale   : 1,
      },
      showCounter: false,
    };

    this.init();
  }

  init() {
    // Create isocial share
    this.createIsocial(this.$shareSelector, this.shareOptions);

    // Create isocial channels
    // this.createIsocial(this.$channelSelector, this.channelOptions);
  }

  createIsocial(selector, options) {
    let bFromCache=!1,bLS=window.localStorage,initPlugin = function (selector, options) {$(selector).iSocial(options);};
    if(bLS&&"undefined"!=typeof localStorage.is_js_cache&&!(/MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10)&&(bFromCache=!0),bFromCache){if(!document.getElementById("is-js")){let s=document.createElement("script");s.type="text/javascript",s.id="is-js",s.innerHTML=JSON.parse(localStorage.is_js_cache),document.getElementsByTagName("head")[0].appendChild(s)}initPlugin(selector,options)}else $.ajax({url:"/repos/isocial/v2/jquery.iSocial.2.0.min.js",contentType: "charset=UTF-8",dataType:"script",cache:!0}).done(function(e){bLS&&(localStorage.is_js_cache=JSON.stringify(e)),initPlugin(selector,options)});
  }
}

export { Isocial }
