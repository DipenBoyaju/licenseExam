# Frontend API Documentation

## 1. Overview & Base URLs

- **Production Base URL:** `https://nec-backend-kh3u.onrender.com/api`
- **Local Base URL:** `http://localhost:<PORT>/api`
- **Default Content-Type:** `application/json`
- **CORS:** Enabled (`*` all origins permitted)

### Supported Engineering Faculties
| Faculty | URL Slug | Test Route |
|:---|:---|:---|
| **Computer Engineering** | `/computer` | `/api/computer/testcomputer` |
| **Civil Engineering** | `/civil` | `/api/civil/testcivil` |
| **Architecture** | `/arch` | `/api/arch/testarch` |
| **Electronics & Communication** | `/elex` | `/api/elex/testelex` |
| **Software Engineering** | `/software` | `/api/software/testsoftware` |

---

## 2. Authentication

All endpoints require **HTTP Basic Authentication**.

### Header Format
```http
Authorization: Basic <base64(username:password)>
```

### Credentials
- **Username:** `admin` (or backend environment variable `BASIC_AUTH_USERNAME`)
- **Password:** `password` (or backend environment variable `BASIC_AUTH_PASSWORD`)

> **Client Base64 Example:**  
> For `admin:password`, Base64 string is `YWRtaW46cGFzc3dvcmQ=`.  
> Header: `Authorization: Basic YWRtaW46cGFzc3dvcmQ=`

---

## 3. Rate Limiting

The backend enforces two layers of rate limits:

1. **Global API Limiter:**  
   - Maximum **500 requests per 5 minutes** per IP across all `/api/*` endpoints.
   - Returns HTTP `429 Too Many Requests` when exceeded:
     ```json
     { "message": "Too many requests, please slow down." }
     ```

2. **Quiz Limiter:**  
   - Maximum **30 test generation requests per 1 minute** per IP across `/test<faculty>` endpoints.
   - Returns HTTP `429 Too Many Requests` when exceeded:
     ```json
     { "message": "Take a breath! You can only start 30 tests per minute." }
     ```

---

## 4. Endpoints Summary Table

Replace `<faculty>` with `computer`, `civil`, `arch`, `elex`, or `software`.

| Method | Endpoint | Description | Cache TTL | Rate Limit |
|:---|:---|:---|:---|:---|
| `GET` | `/api/<faculty>/test<faculty>` | Generate 100 randomized mock test questions (10 per chapter 1–10) | 120s (2 min) | 30 req/min |
| `GET` | `/api/<faculty>/newtesttime` | Check remaining seconds before current mock test cache expires | Real-time | Global |
| `GET` | `/api/<faculty>` | Fetch all questions in the faculty bank | 300s (5 min) | Global |
| `POST` | `/api/<faculty>/add` | Add a single question to the faculty bank | None | Global |
| `POST` | `/api/<faculty>/seed` | Bulk-seed predefined constant questions | None | Global |

---

## 5. Detailed Endpoint Specifications

### 5.1. Generate Mock Test (`GET /api/<faculty>/test<faculty>`)

Generates 100 questions (10 randomized questions sampled from each chapter 1 through 10). The generated test is cached on the server for 120 seconds.

- **Endpoints:**
  - `GET /api/computer/testcomputer`
  - `GET /api/civil/testcivil`
  - `GET /api/arch/testarch`
  - `GET /api/elex/testelex`
  - `GET /api/software/testsoftware`
- **Auth Required:** Yes (`Basic Auth`)

#### Response (`200 OK`)
```json
{
  "status": true,
  "remainingTimeSec": 120,
  "data": [
    {
      "_id": "6722a4b8c91a3b4e5f6d7a8b",
      "question": "What is the primary function of a pipeline hazard unit?",
      "answer": "To detect and resolve data/control conflicts in CPU pipeline",
      "chapter": "1",
      "options": [
        "To detect and resolve data/control conflicts in CPU pipeline",
        "To increase clock frequency",
        "To manage virtual memory paging",
        "To handle DMA bus arbitration"
      ]
    }
  ]
}
```

---

### 5.2. Get Test Cache Timer (`GET /api/<faculty>/newtesttime`)

Checks how many seconds remain before the current cached test set resets. When `remainingTimeSec` hits `0`, calling the test endpoint produces a fresh randomized test set.

- **Endpoints:**
  - `GET /api/computer/newtesttime`
  - `GET /api/civil/newtesttime`
  - `GET /api/arch/newtesttime`
  - `GET /api/elex/newtesttime`
  - `GET /api/software/newtesttime`
- **Auth Required:** Yes (`Basic Auth`)

#### Response (`200 OK`)
```json
{
  "status": true,
  "remainingTimeSec": 84
}
```

---

### 5.3. Get All Questions (`GET /api/<faculty>`)

Fetches all questions present in the database for the given faculty. Results are cached on the backend for 300 seconds (5 minutes).

- **Endpoints:**
  - `GET /api/computer`
  - `GET /api/civil`
  - `GET /api/arch`
  - `GET /api/elex`
  - `GET /api/software`
- **Auth Required:** Yes (`Basic Auth`)

#### Response (`200 OK` - Cached)
```json
{
  "status": true,
  "remainingTimeSec": 285,
  "fromCache": true,
  "data": [
    {
      "_id": "6722a4b8c91a3b4e5f6d7a8b",
      "question": "Sample Question Text?",
      "answer": "Correct Answer",
      "chapter": "1",
      "options": ["Correct Answer", "Option B", "Option C", "Option D"]
    }
  ]
}
```

#### Response (`200 OK` - Direct from DB)
```json
{
  "status": true,
  "fromCache": false,
  "data": [ ... ]
}
```

#### Response (`404 Not Found`)
```json
{
  "status": false,
  "message": "No questions found."
}
```

---

### 5.4. Add a Single Question (`POST /api/<faculty>/add`)

Adds a new question to the given faculty database collection. Automatically clears the quiz cache and the all-questions cache for that faculty.

- **Endpoints:**
  - `POST /api/computer/add`
  - `POST /api/civil/add`
  - `POST /api/arch/add`
  - `POST /api/elex/add`
  - `POST /api/software/add`
- **Auth Required:** Yes (`Basic Auth`)
- **Headers:** `Content-Type: application/json`

#### Request Body (`JSON`)
```json
{
  "question": "Which HTTP status code signifies rate limiting?",
  "answer": "429 Too Many Requests",
  "chapter": "2",
  "options": [
    "400 Bad Request",
    "403 Forbidden",
    "429 Too Many Requests",
    "503 Service Unavailable"
  ]
}
```

#### Response (`201 Created`)
```json
{
  "status": true,
  "message": "Question added successfully",
  "data": {
    "_id": "6722c5e0d12e4f7a8b9c0d1e",
    "question": "Which HTTP status code signifies rate limiting?",
    "answer": "429 Too Many Requests",
    "chapter": "2",
    "options": [
      "400 Bad Request",
      "403 Forbidden",
      "429 Too Many Requests",
      "503 Service Unavailable"
    ]
  }
}
```

#### Error Response (`400 Bad Request`)
Returned if any of `question`, `answer`, `chapter`, or `options` is missing:
```json
{
  "status": false,
  "message": "Invalid input. All fields (question, answer, chapter, options) are required."
}
```

---

### 5.5. Bulk Seed Faculty (`POST /api/<faculty>/seed`)

Seeds the predefined constants for the chosen faculty directly into MongoDB.

- **Endpoints:**
  - `POST /api/computer/seed`
  - `POST /api/civil/seed`
  - `POST /api/arch/seed`
  - `POST /api/elex/seed`
  - `POST /api/software/seed`
- **Auth Required:** Yes (`Basic Auth`)

#### Response (`201 Created`)
```json
{
  "status": true,
  "message": "Computer engineering questions seeded successfully",
  "count": 200
}
```

---

## 6. HTTP Status & Error Codes

| Status Code | Reason | Cause |
|:---|:---|:---|
| `200 OK` | Success | Test questions or timer retrieved successfully |
| `201 Created` | Created | Question created or seed completed |
| `400 Bad Request` | Validation Error | Missing fields in `POST /add` body |
| `401 Unauthorized` | Auth Required | Missing `Authorization: Basic ...` header |
| `403 Forbidden` | Invalid Credentials | Incorrect Basic Auth username or password |
| `404 Not Found` | Not Found | No questions exist for the faculty |
| `429 Too Many Requests` | Rate Limit Exceeded | Global (>500 req/5m) or Test (>30 req/1m) limit hit |
| `500 Internal Error` | Server Error | Unhandled backend exception |

---

## 7. Frontend TypeScript Definitions

Copy into `src/types/api.ts` on the frontend:

```typescript
export type Faculty = 'computer' | 'civil' | 'arch' | 'elex' | 'software';

export interface Question {
  _id: string;
  question: string;
  answer: string;
  chapter: string;
  options: string[];
}

export interface QuizApiResponse {
  status: boolean;
  remainingTimeSec: number;
  data: Question[];
}

export interface CacheTimeApiResponse {
  status: boolean;
  remainingTimeSec: number;
}

export interface AllQuestionsApiResponse {
  status: boolean;
  fromCache: boolean;
  remainingTimeSec?: number;
  data: Question[];
}

export interface AddQuestionPayload {
  question: string;
  answer: string;
  chapter: string;
  options: string[];
}

export interface AddQuestionApiResponse {
  status: boolean;
  message: string;
  data: Question;
}

export interface SeedApiResponse {
  status: boolean;
  message: string;
  count: number;
}

export interface ApiErrorResponse {
  status?: boolean;
  message: string;
}
```

---

## 8. Ready-to-Use Frontend Integration Code

### Option A: Axios Client (`src/services/api.ts`)

```typescript
import axios from 'axios';
import {
  Faculty,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
  AddQuestionPayload,
  AddQuestionApiResponse,
} from '../types/api';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nec-backend-kh3u.onrender.com/api';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  auth: {
    username: process.env.NEXT_PUBLIC_API_USERNAME || 'admin',
    password: process.env.NEXT_PUBLIC_API_PASSWORD || 'password',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

// Map of test endpoint paths
const testEndpointMap: Record<Faculty, string> = {
  computer: '/computer/testcomputer',
  civil: '/civil/testcivil',
  arch: '/arch/testarch',
  elex: '/elex/testelex',
  software: '/software/testsoftware',
};

// Generic API Service
export const quizService = {
  // 1. Get 100 questions mock test
  getMockTest: (faculty: Faculty) =>
    apiClient.get<QuizApiResponse>(testEndpointMap[faculty]),

  // 2. Get remaining cache time in seconds
  getRemainingCacheTime: (faculty: Faculty) =>
    apiClient.get<CacheTimeApiResponse>(`/${faculty}/newtesttime`),

  // 3. Get all questions in database
  getAllQuestions: (faculty: Faculty) =>
    apiClient.get<AllQuestionsApiResponse>(`/${faculty}`),

  // 4. Add a single question
  addQuestion: (faculty: Faculty, payload: AddQuestionPayload) =>
    apiClient.post<AddQuestionApiResponse>(`/${faculty}/add`, payload),
};
```

---

### Option B: Native Fetch Client (`src/services/fetchApi.ts`)

```typescript
import {
  Faculty,
  QuizApiResponse,
  CacheTimeApiResponse,
  AllQuestionsApiResponse,
} from '../types/api';

const BASE_URL = 'https://nec-backend-kh3u.onrender.com/api';
const BASIC_AUTH = btoa('admin:password');

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${BASIC_AUTH}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `HTTP ${response.status}`);
  }

  return response.json();
}

export const fetchQuiz = {
  getTest: (faculty: Faculty) => {
    const route = faculty === 'computer' ? '/computer/testcomputer'
      : faculty === 'civil' ? '/civil/testcivil'
      : faculty === 'arch' ? '/arch/testarch'
      : faculty === 'elex' ? '/elex/testelex'
      : '/software/testsoftware';
    return request<QuizApiResponse>(route);
  },
  getCacheTime: (faculty: Faculty) => request<CacheTimeApiResponse>(`/${faculty}/newtesttime`),
  getAll: (faculty: Faculty) => request<AllQuestionsApiResponse>(`/${faculty}`),
};
```
