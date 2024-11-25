This program runs in React frontend and Pyhon (Flask) backend. 

React version 18.3.1
Axios version 1.7.7

To run locally, in the command line terminal do the following:
1. Enter mkdir `RT_Checker` to create a folder called RT_Checker
2. cd to the folder you just created
3. run `npx create-react-app frontend`
3. cd to the `frontend` directory
6. run `npm install axios` 
7. run `npm install hamburger-react`
8. Now enter `cd ..`
9. Enter mkdir `backend`
10. Create a virtual Python environment in the backend folder by entering python3 -m venv venv
11. To activate the virtual environment run `. venv/bin/activate`
Now that virtual Python environment is running, install the following:
12. Enter `pip install flask, python-dotenv`
13. You need to create a file called `.flaskenv`. In that file, place the following.
    FLASK_APP=api.py
    FLASK_DEBUG=1

To run the Flask server enter `flask run`
Change to the frontend directory. Enter `npm start` to run the frontend. 

In the code files (App.jsx file in the frontend folder) and (app.py file in the backend folder) there is code commented out that can be
used to test the application and the frontend/backend server connectivity/comunication. 
