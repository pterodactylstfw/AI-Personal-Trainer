from flask import Flask, jsonify
import mediapipe as mp

app = Flask(__name__)

mp_pose = mp.solutions.pose

@app.route('/status', methods=['GET'])
def status():
    return jsonify({
        "status": "running",
        "service": "Pose Estimation AI",
        "library": "MediaPipe ready",
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)