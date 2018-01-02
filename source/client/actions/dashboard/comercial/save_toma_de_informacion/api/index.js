import fetch from 'isomorphic-fetch';

const baseURL = 'http://localhost:3000';

const API = {
  ti: {
    async save(item) {
      const response = await fetch(`${baseURL}/api/ti`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(item),
      });
      const data = await response.json();
      return data;
    },
  },
};
export default API;
