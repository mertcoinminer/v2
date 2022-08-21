if (localStorage.getItem("wallet") !== null){
  wallet = 1;
  run = 1;
  id = localStorage.getItem("wallet");
  _client.start();
 document.getElementById('ss').style.backgroundColor = 'red';
 document.getElementById('ss').innerHTML = "Stop Miner";
}
else{wallet = 0; run = 0;}

function start() 
{
 if( wallet == 1){
  if(run == 1){
 _client.start();
 run = 0;
 document.getElementById('ss').style.backgroundColor = 'red';
 document.getElementById('ss').innerHTML = "Stop Miner";
  }
 else {
  _client.stop();
 run = 0;
 document.getElementById('ss').style.backgroundColor = 'green';
 document.getElementById('ss').innerHTML = "Start Miner";
 }
 }
 else{}
}
 
function getVideoCardInfo() {
     const gl = document.createElement('canvas').getContext('webgl');
     if (!gl) {
       console.error("WebGL is not supported.");
       throw ("WebGL is not supported.");
       return {
         error: "no webgl",
       };
     }
     const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
     return debugInfo ? {
       vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
       renderer:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
     } : {
       error: "no WEBGL_debug_renderer_info",
     };
   }
   
