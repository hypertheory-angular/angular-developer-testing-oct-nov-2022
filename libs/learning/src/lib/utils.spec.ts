import { giveRaise, Retiree, sendReminder, Worker } from './utils';
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

describe('Giving Raises', () => {
  it('Giving an employee a raise', () => {
    const ed: Worker = {
      salary: 100_000,
      name: 'Ed Smith',
    };

    giveRaise(ed, 100);

    expect(ed.salary).toBe(100_100);
  });

  it('giving a retiree a raise', () => {
    const jill: Worker = {
      name: 'Jill',
      pension: 80_000,
    };

    giveRaise(jill, 100);

    expect(jill.pension).toBe(80_100);
  });
});
