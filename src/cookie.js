/* eslint-disable */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
/* eslint-disable */
  console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
  if (request.cmd === 'input') {
    try {
      request.value.split('; ').forEach(i => document.cookie = i);
      alert('cookie设置成功');
    }
    catch (err) {
      alert('cookie设置失败\n\r' + err);
    }
  }
  else if (request.cmd === 'reset') {
    try {
      document.cookie.split('; ').forEach(i => document.cookie = i + '; expires=Thu, 01 Jan 1970 00:00:00 GMT');
      alert('cookie重置成功');
    }
    catch (err) {
      alert('cookie重置失败\n\r' + err);
    }
  } 
  sendResponse(document.cookie);
});
