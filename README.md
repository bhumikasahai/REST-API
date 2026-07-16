# API (Application Programming Interface)

## What is an API?

API (Application Programming Interface) is a set of rules that allows two different software applications to communicate with each other.

Think of an API as a **messenger** between two applications.

### Real Life Example

Imagine you are in a restaurant.

- You = Client
- Waiter = API
- Kitchen = Server

Flow:
1. You give your order to the waiter.
2. Waiter takes it to the kitchen.
3. Kitchen prepares the food.
4. Waiter brings the food back.

Here, the **waiter is the API**.

---

# Why Do We Need APIs?

Without APIs, applications cannot communicate easily.

APIs help applications:

- Share data
- Perform actions
- Hide internal implementation
- Work together smoothly

Examples:

- Google Login
- Paytm Payments
- Google Maps
- Weather App
- Chat Applications
- Banking Apps

---

# How API Works

```
Client
   │
   │ Request
   ▼
API
   │
   │ Forwards Request
   ▼
Server
   │
   │ Processes Request
   ▼
API
   │
   │ Response
   ▼
Client
```

### Step-by-Step

### Step 1

Client sends a request.

Example:

"I need user details."

---

### Step 2

API receives the request.

It checks:

- Authentication
- Parameters
- Permissions

---

### Step 3

API sends the request to the server.

---

### Step 4

Server processes the request.

Example:

- Fetch data
- Save data
- Update database
- Delete data

---

### Step 5

Server sends the result back to the API.

---

### Step 6

API formats the response (usually JSON) and sends it to the client.

---

# API Components

## 1. Endpoint

An Endpoint is the URL used to access an API.

Example:

```
https://api.example.com/users
```

---

## 2. Request

The message sent from the client.

Example:

```
GET /users
```

---

## 3. HTTP Methods

Different methods tell the server what action to perform.

### GET

Retrieve data.

Example:

```
GET /users
```

---

### POST

Create new data.

Example:

```
POST /users
```

---

### PUT

Update existing data.

Example:

```
PUT /users/5
```

---

### DELETE

Delete data.

Example:

```
DELETE /users/5
```

---

# Headers

Headers provide additional information.

Examples:

- Authorization Token
- Content-Type
- Accept

Example:

```
Authorization: Bearer token
Content-Type: application/json
```

---

# Request Body (Payload)

Contains the data sent to the server.

Example:

```json
{
   "name":"John",
   "age":21
}
```

---

# Response

The data returned by the server.

Example:

```json
{
   "id":1,
   "name":"John"
}
```

---

# HTTP Status Codes

These tell whether the request was successful.

## 200 OK

Everything worked.

---

## 201 Created

Resource created successfully.

---

## 400 Bad Request

Client sent invalid data.

---

## 401 Unauthorized

Authentication required.

---

## 403 Forbidden

Access denied.

---

## 404 Not Found

Requested resource doesn't exist.

---

## 500 Internal Server Error

Problem on the server.

---

# Authentication vs Authorization

## Authentication

Checks **who you are**.

Example:

- Login
- OTP
- Password

---

## Authorization

Checks **what you are allowed to access**.

Example:

- Admin Dashboard
- Student Portal
- Teacher Panel

---

# API Documentation

Documentation explains:

- Endpoints
- Parameters
- Responses
- Examples
- Authentication

Popular tools:

- Swagger
- OpenAPI

---

# Types of API Architectures

## 1. REST API

Most commonly used API.

Uses HTTP methods:

- GET
- POST
- PUT
- DELETE

### Advantages

- Fast
- Lightweight
- Easy to learn
- JSON support

---

## 2. SOAP API

Uses XML.

More secure.

Mostly used in:

- Banking
- Enterprise Applications

---

## 3. GraphQL

Client requests only the data it needs.

Advantages:

- Faster
- Less unnecessary data

---

## 4. gRPC

Developed by Google.

Uses Protocol Buffers instead of JSON.

Advantages:

- Very fast
- High performance

---

# Types of APIs

## Public API

Anyone can use it.

Example:

- GitHub API
- Twitter API

---

## Private API

Used only inside an organization.

---

## Partner API

Shared only with business partners.

Example:

Payment Gateway APIs

---

## Local API

Runs only on the local machine.

Example:

Windows API

---

# API Integration

API Integration means connecting two or more applications.

Examples:

- Google Login
- Razorpay Payment
- Stripe Payment
- Weather API
- Google Maps API

---

# API Restrictions

Some APIs have limits.

## Rate Limit

Maximum requests allowed.

Example:

100 requests/minute

---

## Authentication

Requires:

- API Key
- OAuth
- JWT Token

---

## Usage Quota

Daily or monthly request limits.

---

## Version Restriction

Example:

```
v1
v2
v3
```

Older versions may stop working.

---

# Popular API Testing Tools

## Postman

Most popular API testing tool.

Used for:

- Sending requests
- Checking responses
- Testing APIs

---

## Swagger

Used for:

- API Documentation
- API Testing

---

## REST Assured

Java library used for API Automation Testing.

---

## SoapUI

Supports:

- SOAP APIs
- REST APIs

---

## Apache JMeter

Used for:

- Performance Testing
- Load Testing
- Stress Testing

---

## Insomnia

Simple API testing tool.

Supports:

- REST
- GraphQL

---

# Importance of APIs

APIs make software development easier.

Benefits:

- Reuse existing services
- Faster development
- Better scalability
- Easy integration
- Automation

---

# Advantages of APIs

- Easy communication between applications
- Saves development time
- Reusable
- Supports automation
- Easy integration with third-party services
- Modular architecture
- Scalable

---

# Limitations of APIs

- Security risks if not protected
- Depends on third-party services
- API version changes may break applications
- Performance depends on server speed
- Requires maintenance

---

# Real-World Examples

## Google Login

```
Your App
     │
     ▼
Google API
     │
     ▼
Google Server
     │
     ▼
Login Successful
```

---

## Payment Gateway

```
Shopping App
      │
      ▼
Payment API
      │
      ▼
Bank
      │
      ▼
Payment Success
```

---

## Weather App

```
Weather App
      │
      ▼
Weather API
      │
      ▼
Weather Server
      │
      ▼
Temperature Data
```

---

# Quick Revision

## API

Bridge between two software applications.

---

## Endpoint

URL used to access an API.

---

## Request

Message sent by client.

---

## Response

Data returned by server.

---

## HTTP Methods

- GET → Read
- POST → Create
- PUT → Update
- DELETE → Delete

---

## Status Codes

- 200 → Success
- 201 → Created
- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 500 → Internal Server Error

---

## Most Used API Architecture

REST API

---

## Most Popular API Testing Tool

Postman

---

## Remember This Flow

```
Client
   ↓
API
   ↓
Server
   ↓
API
   ↓
Client
```

This is the basic flow of almost every API.