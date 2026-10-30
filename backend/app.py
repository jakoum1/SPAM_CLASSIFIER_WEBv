from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "SMS Spam Classifier API is running!"


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    message = data["message"]

    message_vector = vectorizer.transform([message])
    prediction = model.predict(message_vector)

    return jsonify({"prediction": prediction[0]})


if __name__ == "__main__":
    app.run(debug=True)
