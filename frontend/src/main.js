import {getSettings, getPage} from './api.js';

const app = document.querySelector('#app');

async function start(){
  app.textContent = 'Loading...'
  // const settings = await getSettings();
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname),
    ]);
    document.title = `${page.title} - ${settings.siteName}`;
    app.textContent='';
    console.log(settings,page)
  } catch (error) {
    app.textContent=`Something went wrong: ${error.message}`
  }
  
}

start();