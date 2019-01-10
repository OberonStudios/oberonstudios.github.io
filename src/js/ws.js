// WS config
const exampleSocket = new WebSocket(`wss://aakatev.me`);

// let message = {
//   "jsonrpc": "2.0",
//   "method": "subscribe",
//   "id": "0",
//   "params": {
//     "query": `tm.event='${subQuery[3]}'`
//   }
// };

// WS handlers
exampleSocket.onopen = function (event) {
  console.log('Ws openned!');
  exampleSocket.send(JSON.stringify('{"message":"lol"}'));
};

exampleSocket.onmessage = function (event) {

  let json = JSON.parse(event.data);
  
  console.log(json);

  // if(chainId === undefined && json.result.data !== undefined) {
  //   // Set header
  //   chainId = json.result.data.value.block.header.chain_id.replace(/_/g," ");
  //   document.getElementById("chain-id").innerHTML = chainId;
  // }
};