# Timelume - A Time Capsule Web App

## Overview

Timelume is a web-based application that allows users to create, store, and manage digital time capsules. Users can preserve their memories in the form of text, images, and videos, and set a future unlock date for them. This project is designed for users who want to keep their memories secure and accessible only at a later time.

## Features

- User authentication with local storage
- Create a time capsule with a title, description, media, and a lock date
- View stored capsules (locked and unlocked)
- Search capsules by title
- Responsive UI with a sidebar navigation menu
- Secure storage of data using LocalStorage
- Logout functionality

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)

## Installation & Setup

To run the project locally, follow these steps:

1. **Clone the Repository:**


   git clone https://github.com/your-username/Timelume.git
   cd Timelupe
   

2. **Run the Application:**

   - Open `index.html` in a web browser.
   - No additional dependencies or server setup is required since the project is purely frontend-based.

## Usage Instructions

1. **User Login:**

   - The application uses `localStorage` for user authentication.
   - If no user is logged in, the user will be redirected to `index.html` (login page).

2. **Creating a Time Capsule:**

   - Click on the "Create" button on the home page.
   - Fill in the title, description, select media files, and set a lock date.
   - Submit the form to save the capsule.

3. **Viewing Stored Capsules:**

   - Click on "View Capsules" to see all stored time capsules.
   - Locked capsules are displayed in red and are inaccessible until the unlock date.
   - Unlocked capsules can be clicked to view stored media and descriptions.

4. **Searching Capsules:**

   - Use the search bar to filter capsules by title.

5. **Logging Out:**

   - Click on the "Logout" button in the sidebar to log out and clear session data.

## File Structure


Timelume/
│-- index.html       # Main application UI
│-- styles.css       # Styling for the application
│-- script.js        # Main JavaScript logic
│-- README.md        # Documentation


## Future Enhancements

- Implement a backend with a database for secure storage
- User authentication with Firebase or OAuth
- Email notifications when a capsule is unlocked
- Ability to share capsules with other users
- Support for multiple media formats (audio, documents, etc.)

## Contributing

Contributions are welcome! If you’d like to improve this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---

### Author:

by Team Develevates.

