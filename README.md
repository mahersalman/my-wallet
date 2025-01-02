In Progress 

secutiry : 
 * useing  AES encryption and a password-based key derivation function (PBKDF2)

    1. USER PASSWORD (at least 8 ascii characters  - 64 bits)
        - the user password is used to derive a strong cryptographic key.
        - this passowrd is not stored; only the derived key is used for encryption / decryption
        - password will splited into two part x1= len(password) - 4, x2 =  4
            x1 -> will be used for mnemonic encryption/decryption
            x2 -> will be used for index such as : m/44'/0'/0'/0/index
            
    2. Key Derivation using PBKDF2
        - uses PBKDF2 (Password-Based Key Derivation Function 2) to generate the encryption key from the password.
	    - Parameters:
	        - Salt: A random value to prevent dictionary attacks.
	        - Iterations: A high number of iterations (e.g., 100,000) to make brute-forcing computationally expensive.
	        - Hash Function: SHA-256 or similar cryptographic hash.

        The derived key is used for AES encryption.
    
    3. AES Encryption 
    	- The mnemonic is encrypted using AES-GCM (Galois/Counter Mode):
            - AES-GCM provides both encryption and authentication (integrity check).
            - A nonce (IV) is generated randomly and stored alongside the encrypted data.
	    - The mnemonic is converted to binary (or UTF-8 encoded) before encryption.

    4. Data Storage
	    - The encrypted data, along with the IV and salt, is stored locally:
	    - IV (Initialization Vector): Needed for decryption.
	    - Salt: Used to regenerate the encryption key from the password.
	    - Encrypted Mnemonic: The output of AES-GCM encryption.

        This data is typically stored in localStorage, IndexedDB, or a secure storage mechanism provided by the browser.