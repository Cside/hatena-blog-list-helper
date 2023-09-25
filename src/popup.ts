import { addReviewUrls } from '@cside/browser-extension-utils';
import 'bootstrap/dist/css/bootstrap.css';
import ids from '../ids.json';
import manifest from '../manifest.json';

document.addEventListener('DOMContentLoaded', () => {
  addReviewUrls(chrome.runtime.id, ids);

  const h1 = document.querySelector('h1');
  if (!h1) throw new Error('h1 is not found');
  h1.append(manifest.name);
});
