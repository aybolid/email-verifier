# Email Verifier App

**Email Verifier** is a React application with an API written in Golang. It provides a user-friendly interface that allows users to verify the validity of email addresses. The application performs several checks to determine the authenticity of an email address.

## The verification process includes two main steps:

1. __Email format check via Regex__: The application examines the email address to ensure it adheres to the correct format. This check verifies if the email address contains a valid username, followed by the "@" symbol, and a valid domain name.

2. __Domain DNS Records Check__: To further validate the email address, the application queries the domain's DNS records. It specifically looks for the following records:
	- **MX Records**: MX records indicate the mail servers responsible for accepting incoming email for the domain. The presence of valid MX records suggests that the domain is configured to receive email.
	- **SPF Records**: SPF (Sender Policy Framework) records define a list of authorized mail servers that are allowed to send email on behalf of the domain. The presence of SPF records helps ensure the authenticity of the email source.
	- **DMARC Records**: DMARC (Domain-based Message Authentication, Reporting, and Conformance) records provide additional email authentication by specifying policies for handling email from the domain. DMARC records enhance security and reduce email spoofing risks.

By analyzing these DNS records, the Email Verifier can indirectly determine if an email address is real or potentially fake.

## Technologies used

### Frontend:

- **Vite + React**: Vite is a fast build tool that is used in combination with React to create a performant frontend application.
- **TypeScript**: TypeScript is a superset of JavaScript that adds static typing and enhances code maintainability and productivity.
- **Redux Toolkit**: Redux Toolkit is a library that simplifies state management in React applications by providing utilities for managing global state and actions.
- **React Router**: React Router is a library used for routing and navigation in React applications, allowing for a seamless user experience when navigating between different pages or views.
- **React Hook Form + yup**: React Hook Form is a library used for form management and validation in React applications, and yup is a library used for schema-based form validation.
- **Emotion**: Emotion is a popular CSS-in-JS library that enables writing styles directly in JavaScript. It provides a powerful and expressive way to style React components with enhanced features such as scoped styles and dynamic theming.
- **Jest**: Jest is a popular testing framework for JavaScript and React applications. It is used to write and run unit tests for components and functionality.
- **Vercel**: Vercel is a cloud platform that provides hosting and deployment services for frontend applications. It is used to deploy and host the Email Verifier frontend.

### Backend (API):

- **Golang**: Golang (or Go) is a programming language known for its simplicity, efficiency, and strong support for concurrency. It is used to build the backend API of the Email Verifier application.
- **Mux**: Mux is a popular HTTP routing library for Go. It is used in conjunction with Golang to define API routes and handle incoming HTTP requests.
- **Google Cloud (App Engine)**: Google Cloud's App Engine is a fully managed serverless platform that allows for easy deployment and scaling of applications. The Email Verifier backend API is deployed on Google Cloud's App Engine, leveraging its scalability and reliability.

## URLs

Site - https://emailverifier.vercel.app
API - https://emailverifier.vercel.app/api/v1
