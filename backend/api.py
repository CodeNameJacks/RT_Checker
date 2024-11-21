from flask import Flask

app = Flask(__name__)

@app.route('/api/test')
def testAppConnect():
    return {'response': "Application is working and backend is connecting with front end"}
    