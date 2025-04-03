# Boba-Fettch

Sample Project to find the nearest boba tea shops near Netflix HQ

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
