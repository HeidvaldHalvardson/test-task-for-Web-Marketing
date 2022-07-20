import {showAlert} from "./utils.js";

const getData = (onSuccess) => {
  fetch('dataset.json')
    .then(response => response.json())
    .then(data => {
      onSuccess(data);
    })
    .catch(() => showAlert('Не удалось получить данные.'))
}

export {getData}