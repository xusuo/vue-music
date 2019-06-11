import Axios from 'axios'

export default function myAxios(url, data) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + handleParams(data)
    return Axios.get(url)
}


function handleParams(data) {
  let url = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
