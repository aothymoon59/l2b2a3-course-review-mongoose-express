## Course Review Project

- Live Link: https://l2b2a3-course-review.vercel.app

### Create a Course

- Method: POST
- Endpoint: /api/course

### Get all Course

- Method: GET
- Endpoint: /api/courses

### Create a Category

- Method: POST
- Endpoint: /api/categories

### Get All Categories

- Method: GET
- Endpoint: /api/categories

### Create a Review

- Method: POST
- Endpoint: /api/reviews

### Update a Course (Partial Update with Dynamic Update)

- Method: PUT
- Endpoint: /api/courses/:courseId

### Get Course by ID with Reviews

- Method: GET
- Endpoint: /api/courses/:courseId/reviews

### Get the Best Course Based on Average Review (Rating)

- Method: GET
- Endpoint: /api/course/best

## Run the server locally

### Step 1

- Create a .env file in the root directory of this project. And use this code on .env file

```
PORT=5000
DATABASE_URL= your database url here
BCRYPT_SALT_ROUNDS=12
```

### Step 2

- Install all necessary dependency

```
npm install
```

### Step 3

- Run the Project

###### for development

```
npm run start:dev
```

or

###### for production

```
npm run build
```

```
npm run start:prod
```
