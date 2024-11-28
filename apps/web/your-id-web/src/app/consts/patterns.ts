export const patterns = {
  PHONE: /^\(\d{3}\)\s\d{3}-\d{4}$/,
  ADDRESS: /^\d+\s[\w\s]+,\s*[\w\s]+,\s*[A-Z]{2}\s*\d{5}(-\d{4})?$/,
  SSN: /^\d{3}-\d{2}-\d{4}$/,
  DATE_OF_BIRTH: /^(0[1-9]|1[0-2])[/](0[1-9]|[12][0-9]|3[01])[/](\d{4})$/,
  MEDICARE_IDENTIFIERS: /^[A-Za-z0-9]{4}-[A-Za-z0-9]{3}-[A-Za-z0-9]{4}$/
};
