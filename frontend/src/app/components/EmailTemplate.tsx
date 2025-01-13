import * as React from 'react';

interface EmailTemplateProps {
  firstName: string,
  lastName: string, 
  email: string, 
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, lastName, email, message
}) => (
  <div>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Email: {email}</p>
    <p>Message: {message} </p>

  </div>
);