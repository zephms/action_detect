import cv2
import dlib

import imgUtils as sd




def cv_imread(file_path=""):
    file_path_gbk = file_path.encode('gbk')  # unicode转gbk，字符串变为字节数组
    img_mat = cv2.imread(file_path_gbk.decode())  # 字节数组直接转字符串，不解码
    return img_mat


# 先放上logo,表示开启中
def m():
    iu = sd.Sender()
    iu.connect()
    logo = cv_imread(r"D:\a\a.jpg")
    print(logo)
    iu.imshow(logo)

    print("heer")

    # from face_reco_from_camera_ot_single_person import Face_Recognizer
    detector = dlib.get_frontal_face_detector()
    # Face_Recognizer_con = Face_Recognizer()
    # Face_Recognizer_con.run()
    predictor = dlib.shape_predictor('./python/data/shape_predictor_68_face_landmarks.dat')
    face_reco_model = dlib.face_recognition_model_v1("./python/data/dlib_face_recognition_resnet_model_v1.dat")

    cap = cv2.VideoCapture(0)


    # if not cap.isOpened():
    #     iu.imshow(cv2.imread("./images/camera_err.png"))


    def monitor():
        def readAndShow():
            temp = cap.read()[1]
            iu.imshow(temp)
            return temp

        while True:
            li = [readAndShow() for i in range(5)]  # flag&img
            # cap.release()
            flags = [i[0] for i in li]
            if False in flags:
                print("摄像头有问题")
            img_rds = [i[1] for i in li]
            facess = [detector(i, 0) for i in img_rds]
            if set([len(i) for i in facess]) != {1}:
                print("人数不对, 再取5帧")
            else:
                break
        cap.release()
        face = facess[-1][0]
        shape = predictor(img_rds[-1], face)
        d128 = face_reco_model.compute_face_descriptor(img_rds[-1], shape)
        print(d128)


    import time

    x = cap.read()[1].shape[0]
    y = cap.read()[1].shape[1]
    while True:
        time.sleep(0.5)
        frame = cap.read()[1]
        face = detector(frame, 0)
        if len(face) != 1:
            continue
        face = face[0]
        iu.imshow(frame)
        # cv2.waitKey(0)
        if 0 < face[0][0] < x and 0 < face[1][0] < x and 0 < face[0][1] < y and 0 < face[1][1] < y:
            break

    monitor()

    # 展示成功
    iu.imshow("asdf")
