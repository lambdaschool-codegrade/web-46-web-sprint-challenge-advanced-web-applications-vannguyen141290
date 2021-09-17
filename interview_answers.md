# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
    Token is typically used as a form of identification for physical access or as a method of computer system access.

2. What steps can you take in your web apps to keep your data secure?
    Keeping data secure by replace public Routes with Private Routes which only render with authentication. Normally, users will make a login request, sending the server that user's username and password. Then the server will check those credentials against the database. If it can authenticate the user, it will return a token. Once we have token, there will be two layers of protection. One uses private routes, one sends an authentication header with our API calls.

3. Describe how web servers work.
    Web server is a computer that stores our codes for a websites and also is a program that runs on such a computer. When a user send a request through a browser, the request will be sent to web server, it will send back the response accordingly.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
    POST: create a new data
    GET: read data
    PUT: replace an existing data with a new one
    DELETE: delete a data