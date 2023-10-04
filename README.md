# 📄 Resume Sender

Welcome to the Resume Sender! This application utilizes Google Apps Script to allow users to request a resume, which is then sent to their email.

## 🌟 Features

### 🖥️ Frontend
- **Responsive Design**: The web application is mobile-responsive and adjusts to different screen sizes.
- **Dark Mode Toggle**: Users can toggle between light and dark mode themes.
- **Dynamic Feedback**: Provides immediate feedback based on user actions (e.g., if fields are left empty).
- **Ripple Animation**: Adds a ripple effect animation when the "Send Resume" button is clicked.
- **Dynamic Favicon**: The favicon changes based on the user's preferred color scheme (dark mode vs. light mode).

### ⚙️ Backend (Google Apps Script)
- **Google Sheets Integration**: Upon form submission, user data (name and email) is stored in a specified Google Sheets spreadsheet.
- **Email Functionality**: The user receives an email with Vincent Campanaro's resume attached.
- **Name Parsing**: The script extracts the first name of the user for a personalized email greeting. It considers common middle names (e.g., "Jane", "Lee") to ensure the correct extraction of the first name.
- **Security**: The script checks the origin of the request to prevent unauthorized access.

## 📁 Files
- `index.html`: Contains the structure of the web page, including the form and the dark mode toggle.
- `resume.css`: Contains the styling for the web page. It includes styles for both light and dark modes.
- `config.js`: Contains configuration variables, such as the endpoint for the Google Apps Script.
- **Google Apps Script**: Contains the server-side logic. This script interacts with Google Sheets and Gmail to store user data and send emails.

## 🛠️ My Personal Setup

- **Platforms:** Google Apps Script, Google Sheets, Google Drive (Resume)

I set up a dedicated email, `resume@myself.com`, for this project. Initially, I intended to use my academic email. However, due to restrictions set by my educational institution, I could not deploy the Google Apps Script directly from my Google Workspace account. To maintain a level of professionalism and to separate this process from my personal email, I opted for this dedicated address. Nevertheless, I did set the reply-to address as my academic email. You are free to simplify or modify this setup to fit your preferences. Leveraging Google Apps Script, I can seamlessly log the email addresses of those requesting my resume in a Google Sheet and send my resume as an attachment.

## 🚀 Tutorial: Set It Up For Yourself

### 1. Google Apps Script Setup 📑

- Go to [Google Apps Script](https://script.google.com) and create a new script.
- Copy the provided Google Apps Script code into your new script file.
- Modify the `SPREADSHEET_ID` to match your Google Sheet's ID where you'd like to store email addresses.
- In the Apps Script dashboard, click on 'Publish' > 'Deploy as a web app' to get the script URL endpoint. This will be used in your frontend to send data to.

### 2. Email Configuration 📧

- Within the `sendEmailToUser` function, adjust the `from` field in the `GmailApp.sendEmail` method to use your desired email address.

### 3. Frontend Setup 🎨

- Create a new HTML file and copy the provided `index.html` content.
- Create a new CSS file and copy the provided `resume.css` content.
- Create a new JS file and copy the provided `config.js` content.
- Update the `endpoint` in `config.js` to match the URL endpoint you got from deploying your Google Apps Script as a web app.

### 4. Hosting 🌐

- You can host your files on any web server or static site hosting platform.
- Ensure that your domain or hosting platform is whitelisted in the Google Apps Script to avoid CORS issues.

### 5. Test 🧪

Navigate to your hosted `index.html` and try submitting the form to ensure everything works as expected.

That's it! ✨ With these steps, you'll have a fully functioning Resume Downloader tailored for your needs. Adjust and expand upon this base to fit any additional requirements or functionalities you might want to add in the future.
