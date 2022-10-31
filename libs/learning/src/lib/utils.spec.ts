import { sendReminder } from './utils';
describe('the utilities library', () => {
  describe('sending reminders', () => {
    it('does stuff', () => {
      sendReminder({
        name: 'Bob Smith',
        email: 'bob@aol.com',
        sendEmail: () => console.log('Did it!'),
      });

      const person = {
        name: 'Jill Jones',
        email: 'jill@aol.com',
        job: 'Manager',
        salary: 120_000,
        sendEmail: () => console.log('Sending an email'),
      };

      // Duck Typing (Structural Typing)
      sendReminder(person);
    });
  });
});
