import cv2

def extract_features(image):

    orb = cv2.ORB_create(nfeatures=500)
    keypoints, descriptors = orb.detectAndCompute(image, None)

    if descriptors is None:
        raise ValueError("No fingerprint features detected")

    return descriptors
