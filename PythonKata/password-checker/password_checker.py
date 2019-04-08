import re

def valid_password():
    passwords = input("Enter passwords separated by a comma: ").split(",")
    regex = "^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[$#@])[a-zA-Z0-9$#@]{6,12}$"
    valid_passwords = []
    for password in passwords:
        if re.match(regex, password):
            valid_passwords.append(password)
    return ','.join(valid_passwords)
print(valid_password())



