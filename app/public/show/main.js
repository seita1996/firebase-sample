// URLを取得
let url = new URL(window.location.href);

// URLSearchParamsオブジェクトを取得
let params = url.searchParams;

// getメソッド
console.log(params.get('id')); // 5

async function getRecord() {
  const url = `https://asia-northeast1-firebase-sample-seita-dev.cloudfunctions.net/getRecord?docid=${params.get('id')}`
  const response = await fetch(url, {
    method: "GET",
  })
  return response.json()
}

getRecord().then(data => {
  console.log(data)
})
