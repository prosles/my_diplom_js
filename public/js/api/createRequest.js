/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

/* Код с консультации
const createRequest = (options = {}) => {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    let url = options.url;
    const formData = new FormData();

    if (options.data) {
        if (options.method === 'GET') {
            url += '?' + Object.entries(options.data).map(
                ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            ).join('&');
        } else {
            Object.entries(options.data).forEarch(v => formData.append(...v));  
        }    

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let err = null;
            let resp = null;

            if(xhr.sttaus === 200) {
                const r = xhr.response;
                if(r && r.success) {
                    resp = r;
                } else {
                    err =r;
                }
            } else {
                err = new Error('...');
            }
        }

        options.callback(err, resp);
    }

}

    xhr.open( options.method, url ); 
    xhr.send();
};
*/


const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
//   xhr.withCredentials = true; 
  const formData = new FormData();
         
  if (options.method === 'GET') {
      options.url += `?`;
      for (let key in options.data) {
          options.url += `${key}=${options.data[key]}&`;
      }
  } else {
      for (let key in options.data) {
          formData.append(key, options.data[key]);

      }
  }
  try {
      xhr.open (options.method, options.url);
      xhr.send(formData);
  } catch (e) {
      console.log('catch' + e);
  };
  xhr.onload = () => {
      options.callback(null, xhr.response);
  };
  xhr.onerror = () => { 
      options.callback(xhr.statusText, null);
  };
};