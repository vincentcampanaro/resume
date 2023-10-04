var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';  // Replace with your Spreadsheet ID
var SHEET_NAME = 'YOUR_SHEET_NAME_HERE';  // Replace with your Sheet Name

function extractFirstName(fullName) {
    var names = fullName.trim().split(/\s+/);
    if (names.length === 1) {
        return names[0];
    } else if (names.length === 2) {
        return names[0];
    } else if (names.length > 2 && COMMON_MIDDLE_NAMES.includes(names[1])) {
        return names[0] + " " + names[1];
    } else {
        return names[0];
    }
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Service is running");
}

function doPost(e) {
    var origin = e.parameter.origin || e.origin;

    if (!origin) {
        return ContentService.createTextOutput("Error: Origin is missing.");
    }
    if (!(origin.includes("YOUR_DOMAIN_HERE"))) {  // Replace with your domain
        return ContentService.createTextOutput("Unauthorized: Origin received is " + origin);
    }

    try {
        var data = e.parameter;
        var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
        
        // Add data to Google Sheet
        sheet.appendRow([data.name, data.email, new Date()]);

        // Send resume to user's email
        sendEmailToUser(data);

        return ContentService.createTextOutput('Success');
    } catch (error) {
        return ContentService.createTextOutput('Error: ' + error.toString());
    }
}

function sendEmailToUser(data) {
    try {
        var recipientEmail = data.email;
        var subject = "My Resume";
        
        var firstName = extractFirstName(data.name);
        var body = "Hello " + firstName + ",\n\nThank you for expressing interest in learning more about my background and qualifications. Please find my resume attached for your reference. Should you have any further questions or require additional information, please do not hesitate to reach out.\n\nBest regards,\nYOUR_NAME_HERE";  // Replace with your name
        
        var attachments = [DriveApp.getFileById('YOUR_FILE_ID_HERE')];  // Replace with your file ID

        GmailApp.sendEmail(recipientEmail, subject, body, {
            attachments: attachments,
            from: 'YOUR_NAME_HERE <YOUR_EMAIL_HERE>'  // Replace with your name and email
        });
    } catch (error) {
        return ContentService.createTextOutput('Email Send Error: ' + error.toString());
    }
}
