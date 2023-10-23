# Jsonify Project

## Table of Contents

-   [Installation](#installation)
-   [Live Link](#live-link)
-   [Database](#database)
-   [Features](#features)

## Installation

Clone the project with the command

```bash
git clone https://github.com/k8pai/financepeer.git
```

Install the dependencies

```bash
npm install
# or
yarn add
# or
pnpm add
# or
bun add
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Live-link

Live Link: [https://jsonify.vercel.app](https://jsonify.vercel.app)

## Database

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

## Use Cases

Include a brief description of the primary use cases for your project. You can use a bullet-point list or any other format that highlights the key scenarios where users can benefit from using Jsonify.

Example:

-   Data Parsing

    -   Simplifies the process of parsing and extracting specific information from JSON objects.

-   API Integration

    -   Integrate external APIs seamlessly by converting JSON responses into a format that suits your application.

-   Data Cleaning and Transformation
    -   Use Jsonify to clean and transform messy JSON data into a structured format that meets your requirements.
