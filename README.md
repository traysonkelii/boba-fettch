# Boba-Fettch

Sample Project to find the nearest boba tea shops near Netflix HQs

![image](/react-client/public/images/logo.png)

## Quick Start

1. Add a `.env` file to the `server` directory with the following contents:

```
YELP_API_KEY="your_yelp_api_key"
PORT=5000
```

2. Setup the nestJS server

```
cd server
npm i
npm run start:dev
```


3. Setup react frontend server (in a separate terminal)

```
cd react-client
npm i
npm run start
```

4. Navigate to http://localhost:3000

An instance of the server and the client should be running on ports `5000` and `3000` respectively.

## Technologies

### Frontend (React Client)

- **React**: As per instruction
- **TypeScript**: Static typing for better code quality and developer experience
- **Material-UI**: Component library for consistent UI
- **React Query**: Data fetching, caching, and state management
- **Context API**: State management for global application state

### Backend (NestJS Server)

- **NestJS**: Express wrapper that comes with a lot of CLI tooling to facilitate backend development
- **TypeScript**: Type safety and better developer experience
- **Express**: Underlying HTTP server framework
- **Environment Configuration**: Secure management of environment variables

### Trade-offs Considered

- Backend seemed a bit overkill, but if more routes were to be added, there are great developer tools to streamline controller, service, and module creation as the project grows. There are also a lot of type-safe pipes OOTB that could be used to sanitize input without needing to write a lot boiler plate code. I think of it as the Spring-boot of Express
- Context + React Query brings a lot of boiler plate, but does a good job of caching and managing state (there may be a learning curve depending on the team). But being able to have access to slices of state and functionality will scale well if more features were to be added.
