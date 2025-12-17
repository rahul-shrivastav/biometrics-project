import cv2

from feature_extraction import extract_features
from key_generation import (
    descriptors_to_binary,
    error_correction,
    generate_key
)
from file_crypto import encrypt_file, decrypt_file

fingerprint = cv2.imread("dataset/00000.bmp", cv2.IMREAD_GRAYSCALE)
if fingerprint is None:
    raise FileNotFoundError("Fingerprint image not found")

descriptors = extract_features(fingerprint)
binary_vector = descriptors_to_binary(descriptors)
corrected_vector = error_correction(binary_vector)
key = generate_key(corrected_vector)

encrypt_file(key, "files/originalFile.pdf", "files/encryptedFile.pdf.enc")
decrypt_file(key, "files/encryptedFile.pdf.enc", "files/decryptedFile.pdf")

print(">> File encrypted and decrypted successfully using fingerprint key")
