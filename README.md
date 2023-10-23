# Jsonify Project

## Table of Contents

-   [Live Link](#live-link)
-   [Getting started](#getting-started)
-   [Usage](#usage)
-   [Styling](#styling)
-   [Deployment](#deployment)
-   [Database](#database)
-   [Features](#features)

### Tech stack

-   Next.js
-   TailwindCSS
-   MongoDB
-   Prisma adapter
-   NextAuth
-   Node.js

### Live-link

Live Link: [https://jsonify-k8pai.vercel.app](https://jsonify-k8pai.vercel.app)

### Getting started

1. Clone the repository to your local machine.
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=YOUR_MONGODB_URI
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET

GOOGLE_ID='xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com'
GOOGLE_SECRET='GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx'
```

4. Start the development server: `npm run dev`

### Usage

1. To upload a JSON file, go to `http://localhost:3000/` and select the JSON file to upload.
2. To view the data saved in the database, go to `http://localhost:3000/saved`.

### Styling and themes

This application uses TailwindCSS for styling and themes. You can customize the styling and themes by editing the `tailwind.config.js` file.

### Deployment

To deploy this application, you can use any Next.js hosting provider.

### Database

Include a brief description of your project's sitemap here. You can use a bullet-point list or any other format that suits your project's structure.

```
Database: <database name>

Collections:
- File
- JsonRecord

Documents:

File:
  _id: <ObjectId>
  fileName: <String>
  email: <String>
  jsonRecords: [
    {
      _id: <ObjectId>
      id: <String>
      userId: <String>
      title: <String>
      body: <String>
      fileId: <ObjectId>
    },
    ...
  ]

JsonRecord:
  _id: <ObjectId>
  id: <String>
  userId: <String>
  title: <String>
  body: <String>
  fileId: <ObjectId>

Relationships:

File -> JsonRecord (1-to-many)
```

### Collections

**File**

-   The `File` collection contains documents that represent files.
-   The document also has a `fileName` field, which is the name of the file, and an `email` field, which is the email address of the user who uploaded the file.

**JsonRecord**

-   The `JsonRecord` collection contains documents that represent the JSON records in a file.
-   The document has the following fields that comes from each `.json` file.
    -   `id`
    -   `userId`
    -   `title`
    -   `body`
-   There's an additional field, `fileId`, which is the identifier of the file that contains the record.

**Relationship**

-   The `File` and `JsonRecord` collections are related through a 1-to-many relationship.
-   The relationship is implemented through the `fileId` field in the `JsonRecord` document, which references the `id` field in the `File` document.

## Features

Jsonify is a versatile tool for handling JSON data efficiently. It comes with a range of powerful features to streamline your workflow:

1. **JSON Data Management**

    - Easily manage and manipulate JSON data with a simple and intuitive interface.

2. **Import and Export JSON Files**

    - Seamlessly import and export JSON files, making it convenient to work with external data sources.

3. **Prettify JSON Data**
    - Automatically formats JSON data for improved readability, making it easier to work with large datasets.

... (Add more features as needed)
