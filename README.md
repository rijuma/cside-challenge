# c/side Interview Challenge

## Developer info

- Full name: Juan Marcos Rigoli
- Email: [marcos@rigoli.dev](mailto:marcos@rigoli.dev)
- Contact info: https://rigoli.dev

## Test this app

The application is available at: https://cside-challenge.github.dev for a limited time.
There were warnings against having public access to this deployed challenge to avoid exposing secret tokens on a frontend app, however this is not the case since this instance is using a (Proxy)[https://github.com/rijuma/cside-github-proxy] to cirvumvent this.

## Challenge requirements

This coding challenge consists of building a simple application that displays information about a GitHub repository. The application should be able to do the following:

- Search any repository on GitHub
- Display the basic information about the repository
  - Name
  - Description
  - Number of stars & forks
  - Number of branches
  - Number of commits
  - Display and list the contributors profile picture
  - Paginate and list the issues in on a new page (up-to 10 items at a time)
    - Be able to view a specific issue's:
      - Title
      - Description
      - Creation date
      - Tags
      - Paginate discussions of the issue up-to 5 items at a time with a "load more" button:
        - Commentor's name
        - Commentor's profile picture
        - Comment's created at
        - Comment's body

The application needs to communicate with [GitHub's GraphQL API](https://docs.github.com/en/graphql). I will use a (self-hosted API Gateway)[https://github.com/rijuma/cside-github-proxy] as a Token Proxy between the frontend and the GraphQL application. This is just for protection and it's not a requirement, since there will be no internal logic and the application wouldn't know about this (only the endpoint address will be different).

## Getting Started / Good-to-Know

> [!NOTICE]
> This challenge is about creating a frontend-only application, and it was advised to not publish this publicly since it would expose github tokens to the browser, creating a security issue.
> I do want to, however, to be able to deploy this into a public domian for a quick access to the reviewers. To circumvent the security issues, I'll also create a simple API Gateway to hold the secrets and a simple validation to avoid exposure.
> This is not part of the challenge and I don't demand extra points for it. The source for this gateway will be at https://github.com/rijuma/cside-github-proxy.

This template provided by c/side provides integration with `Vite`, `React`, `Relay`, `Tailwind`, `TanStack Router` and `Biome` out of the box. However, the requirements states that _"You are free to use whatever you'd like for UI. We personally use build most of our components in house, but do use [Radix UI](https://www.radix-ui.com/) for some components."_.
Based on this statement and the freedom of choice, I understand that c/side does not particularly uses `Tailwind CSS` and since `Radix UI` has not a direct dependency on `Tailwind CSS` (can be added but is not required) I'll choose not to use it. I do have experience on the framework, it's just a personal choice.

The stack will be then:

- [Vite](https://vitejs.dev)
- [React](https://reactjs.org)
- [Relay](https://relay.dev)
- [Radix UI](https://www.radix-ui.com)
- [TanStack Router](https://tanstack.com/router/v1)
- [Biome](https://biomejs.dev)

Check the live version at: https://cside-challenge.github.dev

> [!NOTICE]
> The `Dockerfile`, the `compose.yml` and some variables on `.env.example` are just part of the configuration for the server to be deployed on a VPS using nginx as a reverse-proxy. You don't need these to run the project locally.
