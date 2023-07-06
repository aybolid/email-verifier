# Email Verifier API Documentation

### Base URL

The base URL for the Email Verifier API is `https://emailverifier.vercel.app/api/v1`.

---

## Verify Single Email

To verify a single email address, send a **POST** request to the **/verify-one** endpoint. The email address should be included in the request body.

#### Endpoint

POST /verify-one

#### Example Request

```js
const responseOne = await fetch(URL, {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' }),
  body: JSON.stringify('test@test.com'),
});
```

#### Example Response

```json
{
  "email": "test@test.com",
  "domain": "test.com",
  "format": true,
  "dns": {
    "mx": {
      "status": false,
      "records": null
    },
    "spf": {
      "status": false,
      "record": ""
    },
    "dmarc": {
      "status": false,
      "record": ""
    }
  }
}
```

## Want check more emails at once?

To verify up to 50 email addresses, send a **POST** request to the **/verify-several** endpoint. The email addresses should be included in the request body as an array.

#### Example Request

```js
const responseSeveral = await fetch(URL, {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' }),
  body: JSON.stringify(['first@test.com', 'second@test.com']),
});
```
