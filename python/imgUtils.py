import cv2
import socket
import sys
import base64



class Sender:
    def __init__(self,host="localhost",port=801):
        address = (host, port)
    
    def connect(self):
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect(address)

    def imshow(img):
        base64_str = cv2.imencode('.jpg',img)[1].tostring()
        base64_str = base64.b64encode(base64_str)
        s.send(base64_str)
