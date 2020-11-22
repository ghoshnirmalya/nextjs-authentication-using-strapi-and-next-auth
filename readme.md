<p align="center">
  <a href="https://twitter.com/nirmalyaghosh23">
    <img alt="Twitter: Nirmalya Ghosh" src="https://img.shields.io/twitter/follow/nirmalyaghosh23.svg?style=social" target="_blank" />
  </a>
</p>

## Packages

### 1. [**Frontend**](https://github.com/ghoshnirmalya/nextjs-authentication-using-strapi-and-next-auth/tree/master/frontend): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on http://localhost:3000/.

### 2. [**Backend**](https://github.com/ghoshnirmalya/nextjs-authentication-using-strapi-and-next-auth/tree/master/backend): Dockerized Strapi application

[Strapi](https://strapi.io/) is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.

## Installation

### 1. **Clone the application**

```sh
git clone https://github.com/ghoshnirmalya/nextjs-authentication-using-strapi-and-next-auth
```

### 2. **Install necessary dependencies for the frontend application**

```sh
cd frontend && yarn install
```

### 3. **Create a .env file and copy the contents from .env.example (present in frontend directory)**

We might need to run the following command:

```sh
source .env
```

### 4. **Create and copy the Google client credentials**

Create a new [Google OAuth Client](https://console.developers.google.com/apis/credentials/oauthclient) and copy the credentials (Client ID and Client Secret) in your .env file.

### 5. **Start the frontend application**

From the frontend directory, we can run the following command to start our Next.js frontend application:

```sh
yarn dev
```

The above command will start the frontend application on [http://localhost:3000/](http://localhost:3000).

### 6. **Go inside the directory of the backend package on another terminal window**

```sh
cd backend
```

### 7. **Start docker-compose**

```sh
docker-compose up
```

We need to start Docker and then run the above command which will change the current directory to the backend package’s directory and then start the backend package. If everything goes well, it’ll be up and running on [http://localhost:1337/graphql](http://localhost:1337/graphql).

## Other interesting repositories

1. [Strapi Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-authentication-using-strapi-and-next-auth)
2. [Hasura Next.js Boilerplate](https://github.com/ghoshnirmalya/nextjs-hasura-boilerplate)
3. [Hasura Next.js Trello Clone](https://github.com/ghoshnirmalya/nextjs-hasura-trello-clone)
4. [React Search Box](https://github.com/ghoshnirmalya/react-search-box)
5. [LinkedIn Clone using Create React App](https://github.com/ghoshnirmalya/linkedin-clone-react-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
