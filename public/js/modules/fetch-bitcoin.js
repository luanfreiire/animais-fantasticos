export default function initFetchBitcoin() {
  fetch("https://www.blockchain.com/ticker")
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerHTML = (100 / json.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(Error(error));
    });
}
