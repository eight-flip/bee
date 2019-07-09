<template>
  <div>
  </div>
</template>

<script>

if (process.client) {
  (function(callback){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://www.rentracks.jp/js/itp/rt.track.js?t=" + (new Date()).getTime();
  if ( script.readyState ) {
  script.onreadystatechange = function() {
  if ( script.readyState === "loaded" || script.readyState === "complete" ) {
  script.onreadystatechange = null;
  callback();
  }
  };
  } else {
  script.onload = function() {
  callback();
  };
  }
  document.getElementsByTagName("head")[0].appendChild(script);

  }(function(){
      var match = RegExp('[?&]' + '__rttargeturl' + '=([^&]*)').exec(window.location.search);
      var rttargeturl = match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      location.href = rttargeturl;
  }));
}
</script>