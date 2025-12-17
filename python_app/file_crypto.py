from cryptography.fernet import Fernet
import base64

def encrypt_file(key, input_file, output_file):
    """
    Encrypt a file using AES (Fernet)
    """
    fernet_key = base64.urlsafe_b64encode(key)
    cipher = Fernet(fernet_key)

    with open(input_file, "rb") as f:
        data = f.read()

    encrypted_data = cipher.encrypt(data)

    with open(output_file, "wb") as f:
        f.write(encrypted_data)


def decrypt_file(key, input_file, output_file):
    """
    Decrypt a file using AES (Fernet)
    """
    fernet_key = base64.urlsafe_b64encode(key)
    cipher = Fernet(fernet_key)

    with open(input_file, "rb") as f:
        encrypted_data = f.read()

    decrypted_data = cipher.decrypt(encrypted_data)

    with open(output_file, "wb") as f:
        f.write(decrypted_data)
