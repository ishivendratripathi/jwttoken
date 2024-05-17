# JWT Utility Library

This repository contains a simple utility library for working with JSON Web Tokens (JWT) using Node.js. 
The library includes functions to sign, verify, and decode JWT tokens, and it uses the `jsonwebtoken` and `zod` libraries for token handling and input validation.

## Features

- **Sign JWT**: Create a JWT with a given username and password, with validation for proper email format and password length.
- **Verify JWT**: Verify the authenticity of a JWT using a secret key.
- **Decode JWT**: Decode a JWT to inspect its payload without verifying its signature.
