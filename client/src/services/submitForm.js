import { sheet } from '../masterdata'
export const submitForm = async (value, store) => {
  const res = await fetch(`https://nodemanagy.herokuapp.com/addFormUser?admin=${sheet[store]["admin"]}&user=${sheet[store]["user"]}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  });
  const data = await res.json()
  return data.result
}

