from flask import Flask, request, jsonify

import ocr_test
import time 
from datetime import datetime

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False ##인코딩

@app.route('/')
def hello_world():
    return 'Hello, Python!'

@app.route('/apiTest', methods=['POST'])
def apiTest():
    print('apiTest IN')
    ## 작업 시간 체크
    start_time = ""
    start_time = time.time()
    param = request.get_json()
    ## 전달 받은 param값 출력
    print('apiTest param : ', param)
    print('param fileName: ', param.get("fileName"))
    print('param filePath: ', param.get("filePath"))
    print('param debug: ', param.get("debug"))

    fileName = param.get("fileName")
    filePath = param.get("filePath")
    debug = param.get("debug")
    ocr_result = ocr_test.ocrTest(fileName, filePath, debug)

    ## 결과 값 출력
    print('ocr_result : ',ocr_result)
    ## 작업 시간 체크
    print("apiTest elapsed: ", time.time() - start_time)  # seconds
    print('apiTest OUT')
    return jsonify(ocr_result)

if __name__ == "__main__":
    app.run(host='0.0.0.0') #ip로 실행