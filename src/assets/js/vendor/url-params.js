/* ===========================================
 * GET URL PARAMETERS
 * ===========================================
 */
class GetUrlParams {
  constructor(url) {
    const params = [];
    let count = 0;
    if (url.split('#')[1] !== undefined || url.split('?')[1] !== undefined) {
      url.replace(/[?&#]+([^=&]+)=([^&]*)/gi,
        (m,key,value) => {
          params[count] = {key: key, value: value};
          count += 1;
        });
    }
    return params;
  }
}

export { GetUrlParams }