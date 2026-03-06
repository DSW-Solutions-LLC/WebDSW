const API_URL = 'https://dswsolutions.io/api';

export const contactService = {
  send: ({ name, email, message }) =>
    fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    }),
};
