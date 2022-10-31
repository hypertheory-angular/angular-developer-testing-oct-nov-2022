export function sendReminder(who: ReminderRecipient) {
  console.log(`Sending a reminder to ${who.name}`);
  console.log(` -> emailing ${who.email}`);
  who.sendEmail();
}

export type ReminderRecipient = {
  name: string;
  email: string;
  sendEmail: () => void;
};
