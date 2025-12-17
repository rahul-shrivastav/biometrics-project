import numpy as np
import hashlib

def descriptors_to_binary(descriptors):
    avg_descriptor = np.mean(descriptors, axis=0)
    threshold = np.mean(avg_descriptor)
    binary_vector = (avg_descriptor > threshold).astype(int)
    return binary_vector


def error_correction(binary_vector):
    window_size = 5
    corrected = []

    for i in range(0, len(binary_vector), window_size):
        chunk = binary_vector[i:i + window_size]
        corrected.append(int(round(np.mean(chunk))))

    return np.array(corrected)

def generate_key(corrected_vector):
    bit_string = ''.join(map(str, corrected_vector))
    key = hashlib.sha256(bit_string.encode()).digest()
    return key
