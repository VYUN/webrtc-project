# RTCproject

## Running Locally

If you would like to generate your own certificate

```
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```

Then enter the passphrase you have created in the file index.js


To run the program locally
```
$ node index.js
```

The node application can be accessed from either localhost or the server (machine) IP the on port 8080
```
eg.
https://localhost:8080
or
https://192.168.2.2:8080
```

When opening it on browser, it will complain that it is unsafe, you can ignore it an procees. This is due to browser thinking that self-signed certificate cannot be trusted.

Troubleshooting:
- If the face mask does not appear, please check that if your browser support WebGL
- If you cannot access the from 192.168.x.x ip, make sure that the clients are within the same private network as the server
