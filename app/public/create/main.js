async function createRecord(text) {
  const url = "https://asia-northeast1-firebase-sample-seita-dev.cloudfunctions.net/createRecord"
  const obj = { "text": text }
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj)
  })
  return response.json()
}

function send() {
  const createText = document.getElementById('createText')
  createRecord(createText.value).then(data => {
    console.log(data)
  }).catch(e => {
    console.log(e)
  })
}
