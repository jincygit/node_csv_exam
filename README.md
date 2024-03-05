# node_csv_upload
node js mongodb csv upload
# Upload-CSV

Create a single-page web application using Node js to display data from a given CSV file. The application should include a file upload form where users can upload a CSV file. Once uploaded, the application should list the data from the CSV file in a table format.


## Getting Started
-  Clone this project 
        `git clone https://github.com/jincygit/node_csv_exam.git`
-  Start by installing npm and mongoDB if you don't have them already.
-  Run the Mongo Server.
-  Run the project on browser - http://localhost:8000/csv_upload/home


### TASK LIST
```
* showing the list of csv uploads
* while clicking view details, go to detail page
* displaying csv file data
* search also avaliable
* validation for selecting only csv files given
* allow to upload all sorts of csv files and additional filtering and validation only given to specific file
      * Data Validation: Omit rows where touch_screen value is zero
      * Specific Data Displayed: Filter data to include only required columns
* navigation is avaliable
```


### INSTALLATION AND RUN

1. Clone the repo
   ```sh
   https://github.com/jincygit/node_csv_exam.git
   ```
   ```


### BUILT WITH

Here is the Technology Stack of this Application. which I have used to Built this Application.

-  JS
-  HTML
-  CSS
-  Bootstrap
-  Node js
-  MongoDB
-  Express
## About The Project

User can upload the csv files from their own system. the Application shows the data of CSV file in Tablel format and where user can also perform some operations.
Tech Stack : HTML, CSS, JS, Node.js

### Features :

-  Upload any csv file into the system (consider the delimiter to be a comma ‘ , ’) [If you don’t know
   what’s a csv, download the other file in this folder and take a look at it, then google a little more]
-  Display a list of all uploaded csv files
-  When the user selects a file, display all the data (with column headers) in a table on the page (front
   end)
-  There should be a search box which searches on the front end itself and displays the matching rows
   of the table only (empty search box displays all the data). (you can put a search on any one column)
-  DIFFERENT CSV FILES WITH DIFFERENT COLUMN HEADERS CAN BE UPLOADED,TABLE HEADERS SHOULD BE DYNAMIC
-  Sorting button (ascending and descending) for each column on the front end
-  Put a validation on the front end and server side on being able to upload only csv
   type of files
-  Pagination of the data displayed in the table to a max of 100 records per
   page



### FOLDER STRUCTURE
    |-->github
         |-->workflows
               |-->static.yml
    |-->assets
        |-->css
            |-->base.css
            |-->chat_box.css
            |-->file.css
            |-->form.css
            |-->list.css
            |-->main.css
            |-->base.css
            |-->todo.css
            |-->variable.css     
        |-->imges
            |-->Be_header.jpeg
            |-->bin.jpg
            |-->blue.jpg
            |-->bug1.jpg
            |-->favicon.png
            |-->green1.jpg
            |-->logo.png
            |-->plus.ico
            |-->post-landscape-5.jpg
            |-->post-sq-3.jpg
            |-->slider.jpg
            |-->unicorn.jpg
        |-->js
            |-->csv_js_file.js
            |-->csv_js_home.js
            |-->home_post_comments.js
            |-->home_posts.js
            |-->main.js
            |-->profile.js
            |-->project.js
            |-->todo_app.js
            |-->toggle_likes.js
         |-->scss
         |-->vendor
    |-->config
        |-->environment.js
        |-->middleware.js
        |-->mongoose.js
        |-->nodemailer.js
        |-->view-helpers.js
    |-->controllers
        |-->csv_home_controller.js
        |-->file_controller.js
    |-->mailers
        |-->comments_mailer.js
    |-->models
        |-->csv.js
    |-->node_modules
    |-->production_logs
    |-->routes
        |-->csv_upload.js
        |-->index.js
    |-->uploads
        |-->files
        |-->users
    |-->views
        |-->mailers
            |-->new_comment.ejs
        |-->_footer.ejs
        |-->_header.ejs
        |-->csv_file_view.ejs
        |-->csv_home.ejs
        |-->home.ejs
        |-->layout.ejs
        |-->_chat_box.ejs
        |-->_chat_box.ejs
    |-->workers
        |-->comment_email_worker.js
    |--.gitignore
    |--index.html
    |--index.js
    |--package-lock.json
    |-->package.json
    |-->README.md


### PREVIEW OF THE PROJECT URL
    http://localhost:8000/csv_upload/home

    
