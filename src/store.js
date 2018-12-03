import {Store} from 'svelte/store';
import {API_URL, API_TOKEN} from '../API_KEYS';

class AppStore extends Store {
  async fetchPages () {
    const pageData = await fetch(`${API_URL}singletons/get/homepage?token=${API_TOKEN}`)
      .then(r => r.json());
    console.log('pageData', pageData);
    this.set({homepage: pageData});
  }

  async contactFormData (data) {
    const formData = await fetch(`${API_URL}forms/submit/contact?token=${API_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        form: data
      })
    })
    .then(entry => entry.json())
    .catch(err => {
      console.log('err', err);
      this.set({formData: {error: err} });
    });
    
    console.log('formData', formData);
    this.set({formData})
  }
}

export const store = new AppStore({
  name: 'Justo',
  homepage: {},
  formData: {},
});

store.fetchPages();