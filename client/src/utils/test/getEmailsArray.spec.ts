import getEmailsArray from '../getEmailsArray';

describe('getEmailsArray', () => {
  it('should return an empty array when input is empty', () => {
    const result = getEmailsArray('');
    expect(result).toEqual([]);
  });

  it('should split and trim email strings separated by commas', () => {
    const emails =
      '   email1@example.com , email2@example.com,  email3@example.com  ';
    const result = getEmailsArray(emails);
    expect(result).toEqual([
      'email1@example.com',
      'email2@example.com',
      'email3@example.com',
    ]);
  });

  it('should return a maximum of 50 email strings', () => {
    const longEmails = 'email1@example.com,'.repeat(100); // 100 email addresses
    const result = getEmailsArray(longEmails);
    expect(result.length).toBe(50);
  });
});
