var apis = ["https://two.driveindex.ga", "https://bottwo.ve.workers.dev"];
var server = apis[Math.floor(Math.random() * apis.length)];
document.getElementById("permaurl").innerHTML =
    "<a href=" + "'" + window.location.pathname + "'" + ">" + "https://" + window.location.hostname + window.location.pathname + "</a>";
document.getElementById("tempurl").innerHTML =
    "<a href=" + "'" + server + window.location.pathname + "'" + ">" + server + window.location.pathname + "</a>";
