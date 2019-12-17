/**
 * main.js
 * @authors binghongcha (hblvsjtu@163.com)
 * @date    2019-11-24 15:21:01
 * @version 0.0.1
 */

const cookieArea = document.getElementById('cookie');

/* eslint-disable */
function sendMessageToContentScript (message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}
/* eslint-disable */

sendMessageToContentScript({
  cmd: 'output',
  value: ''
}, function (response) {
  cookieArea.value = response;
});

let confirm = document.getElementById('confirm')
confirm.addEventListener('click', () => {
    sendMessageToContentScript({
      cmd: 'input',
      value: cookieArea.value
    }, function (response) {
      // cookieArea.value = response;
    });
})

let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    sendMessageToContentScript({
      cmd: 'reset',
      value: ''
    }, function (response) {
      // cookieArea.value = response;
    });
})