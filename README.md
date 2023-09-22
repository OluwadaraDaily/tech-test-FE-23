# Lithium Ventures Test

## Pre requisites

Before you begin, ensure you have met the following requirements:

- NodeJS: You should have Node.js installed on your machine. If you don't have it yet, you can download and install it from [nodejs.org](https://nodejs.org/en)
- Package Manager: You need a package manager to install project dependencies. If you prefer to use npm, it comes bundled with Node.js. Alternatively, you can use yarn or another package manager of your choice

## Getting Started

Follow these steps to set up and run the project locally:

1/ Clone the Repository: Begin by cloning this repository to your local machine.

```bash
git clone <respository-url>
```

2/ Navigate to the App Folder: Use the `cd` command to navigate to the project's app folder.

```bash
cd app
```

3/ Install Dependencies: Install the project's dependencies using your preferred package manager. You can use npm, yarn, or any other package manager you prefer.

```bash
npm install
# or
yarn install
# or your preferred package manager
```

4/ Configure Environment Variables

- Create a `.env.local` file in the project root directory. You can follow the structure outlined in the `.env.example` file.

- Set the `NEXT_PUBLIC_API_BASE_URL` variable to the base URL of the API. For example: 

```bash
NEXT_PUBLIC_API_BASE_URL=https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test
```

5/ Run the Development Server: Start the development server to run your project locally.

```bash
npm run dev
# or
yarn run dev
# or your preferred package manager
```

This command will launch your project locally, and you can access it in your web browser at [http://localhost:3000](http://localhost:3000).

## Contact

For further assistance or inquiries, you can contact me at [daraoloye99@gmail.com](mailto:daraoloye99@gmail.com)