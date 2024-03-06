import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise((resolve) => {
    const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

    Promise.allSettled(promises).then((results) => {
      const finalResulsts = results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
    resolve(finalResults);
    });
  });
}
