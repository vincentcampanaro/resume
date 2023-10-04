# 📄 Resume Downloader

Welcome to the Resume Downloader! This application utilizes Google Apps Script to allow users to request a resume, which is then sent to their email.

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

### 4. Middle Names Configuration 📝

The script uses a list of common middle names to properly address recipients. Update or expand the list of middle names as needed.

### 5. Hosting 🌐

- You can host your files on any web server or static site hosting platform.
- Ensure that your domain or hosting platform is whitelisted in the Google Apps Script to avoid CORS issues.

### 6. Test 🧪

Navigate to your hosted `index.html` and try submitting the form to ensure everything works as expected.

That's it! ✨ With these steps, you'll have a fully functioning Resume Downloader tailored for your needs. Adjust and expand upon this base to fit any additional requirements or functionalities you might want to add in the future.
