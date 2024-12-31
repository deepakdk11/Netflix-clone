# Netflix Clone

A responsive and visually appealing Netflix clone built using React JS, Tailwind CSS, and Firebase. This project replicates the core functionalities of Netflix, including movie listings, user authentication, and more.

## Features

- **Responsive Design:** Fully optimized for different screen sizes, including mobile, tablet, and desktop.
- **Movie Data Fetching:** Uses Axios API to fetch and display real movie data.
- **Authentication:** Sign-up and login functionality using Firebase Authentication.
- **Firebase Hosting:** Deployed and hosted on Firebase for seamless access.
- **React Hooks:** Utilizes `useState`, `useEffect`, and `useRef` hooks for state management and functionality.

## Technologies Used

- **Frontend:** React JS, Tailwind CSS
- **Backend & Hosting:** Firebase
- **Data Fetching:** Axios

## Screenshots

![Screenshot (28)](https://github.com/user-attachments/assets/7ed52643-7e82-4be3-b7e8-289d29e231c5)

![Screenshot (29)](https://github.com/user-attachments/assets/6ae8a95b-39e9-42a1-ae77-c0591abaf44c)

## Getting Started

Follow the steps below to run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or Yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deepakdk11/Netflix-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

6. Open your browser and visit `http://localhost:3000` to see the app in action.

## Deployment

The project is hosted on Firebase. To deploy it yourself:

1. Build the project:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. Install Firebase CLI if not already installed:
   ```bash
   npm install -g firebase-tools
   ```

3. Login to Firebase:
   ```bash
   firebase login
   ```

4. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select "Hosting" and follow the prompts.
   - Set the `build` folder as the public directory.

5. Deploy the project:
   ```bash
   firebase deploy
   ```

## Live Demo

Check out the live version of the project: [Netflix Clone Live Demo](https://netflx-clonee.netlify.app/)

## Project Structure

```
netflix-clone
├── public
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## Acknowledgments

- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for movie data.
- [Firebase](https://firebase.google.com/) for backend services and hosting.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to fork and customize this project as per your needs!

