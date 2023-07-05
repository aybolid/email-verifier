const getEmailsArray = (emails: string) => {
  if (!emails) {
    return [];
  }
  const arr = emails.split(',').map((email: string) => email.trim());

  return arr.length > 50 ? arr.slice(0, 50) : arr;
};

export default getEmailsArray;
