function stop() 
{_client.stop();}

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
   
