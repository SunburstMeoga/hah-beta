import hotReload from '@/utils/hotReload'

hotReload()
chrome.runtime.onInstalled.addListener(() => {
    // alert('Hello, World!');
  });
console.log('this is background main.js')
