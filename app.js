run = 1;
function start() 
{
 if( run == 1){
 _client.stop();
 run = 0;
 document.getElementById('ss').style.backgroundColor = 'green';
 document.getElementById('ss').innerHTML = "Start Miner";
 }
 else{
 run = 1;
 document.getElementById('ss').style.backgroundColor = 'red';
 document.getElementById('ss').innerHTML = "Stop Miner";
 _client.start();
 }
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
   
