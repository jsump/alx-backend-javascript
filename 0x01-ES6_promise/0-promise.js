export default function getResponseFromAPI() {
  Promise.getResponseFromAPI = () => new Promise((resolve, reject) => {
    const successfulRequest = Math.random() > 0.5;

    setTimeout(() => {
      if (successfulRequest) {
        const data = { example: 'Response data' };
        resolve(data);
      } else {
        const error = new Error('Request Failed');
        reject(error);
      }
    }, 1000);
  });
}
