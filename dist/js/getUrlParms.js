function getUrlParms(n){var e=new RegExp("(^|&)"+n+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(e);return null!=r?unescape(r[2]):null}