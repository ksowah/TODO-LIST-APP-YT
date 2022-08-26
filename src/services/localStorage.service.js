export function getData(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveData(key, payload) {
  return localStorage.setItem(key, JSON.stringify(payload));
}
