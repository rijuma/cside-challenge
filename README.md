# c/side Interview Challenge

Live demo at: https://cside-challenge.rigoli.dev

![Preview](docs/preview.webp)

## Developer info

- Full name: Juan Marcos Rigoli
- Email: [marcos@rigoli.dev](mailto:marcos@rigoli.dev)
- Contact info: https://rigoli.dev

## Test this app

The application is available at: https://cside-challenge.github.dev for a limited time.
There were warnings against having public access to this deployed challenge to avoid exposing secret tokens on a frontend app, however this is not the case since this instance is using a [Proxy](https://github.com/rijuma/cside-github-proxy) to cirvumvent this.

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

The application needs to communicate with [GitHub's GraphQL API](https://docs.github.com/en/graphql). I will use a [self-hosted API Gateway](https://github.com/rijuma/cside-github-proxy) as a Token Proxy between the frontend and the GraphQL application. This is just for protection and it's not a requirement, since there will be no internal logic and the application wouldn't know about this (only the endpoint address will be different).

## Getting Started / Good-to-Know

> [!NOTE]
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

> [!NOTE]
> The `Dockerfile`, the `compose.yml` and some variables on `.env.example` are just part of the configuration for the server to be deployed on a VPS using nginx as a reverse-proxy. You don't need these to run the project locally.

# Mockup (2025-06-02)

To have a rough idea of how to show the information I've made a Excalidraw sketch with two views, the one when you open a github project and another one with an issue.

Basically, it will have a preview where at the bottom it will show the issue list. When clicking on an issue it will take you to the right side.

It will probably evolve into a better UI than this scribble, especially to move around other issues (maybe prev/next) and to be able to close it and go back to the list. This is just to start.

[Open in ExcaliDraw](https://excalidraw.com/#json=qc8K3VXTOOBISBZisRJ0H,z0dCYL4QnZHJ1mV2BAzwRw) - Be mindful that it could overwrite any current drawing you might have in Excalidraw currently.

![Sketch](docs/ui-sketch.svg)

# Final notes (2025-06-09)

There were some changes on the concepts along the implementation, so the sections are not exactly the same as the drafts above (I had to drop dark mode since the time was way overdue).

I know this could be done much better, but I've enjoyed this challenge tremendously. The nested pagination made me reinforce my GraphQL concepts. I also wasn't familiar with Radix UI, this added up a bit on my delay, but I'm glad that I had the opportunity to use it.

I've done some things that might not be the standard, for example I like to map the data structure into my own instead of reusing the GraphQL responses as-is, and I might have overused the contexts to have more freedom when using fetched data instead of relying on the Router loaders and prop drilling.

I hope whoever evaluates this implementation, finds some useful concepts here and there.

Have a good one!
