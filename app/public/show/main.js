// URLを取得
let url = new URL(window.location.href)

// URLSearchParamsオブジェクトを取得
let params = url.searchParams

// getメソッド
console.log(params.get('id'))

async function getRecord() {
  const url = `https://asia-northeast1-firebase-sample-seita-dev.cloudfunctions.net/getRecord?docid=${params.get('id')}`
  const response = await fetch(url, {
    method: "GET",
  })
  return response.json()
}

getRecord().then(data => {
  console.log(data)
  const el = document.querySelector('#text')
  el.textContent = `text is ${JSON.parse(data._fieldsProto.data.stringValue).text}`
}).catch(e => {
  const el = document.querySelector('#text')
  el.textContent = "no content"
  console.log(e)
})
