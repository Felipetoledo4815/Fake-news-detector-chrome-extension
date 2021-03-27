from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
classifier = joblib.load('./model/pipeline.pkl')

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/predict', methods=['POST'])
def predict():
    json_ = request.json

    prediction = classifier.predict(json_['text']).tolist()
    return jsonify({'prediction': prediction[0] })

if __name__ == '__main__':
    classifier = joblib.load('./model/pipeline.pkl')
    app.run(port=5000)