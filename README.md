# Solo Development Repository
![thumbnail](./public/assets/landingPage-e53798db-ff86-4c00-b54f-7a074933fc4d)
## 🗂️ Description

The Solo Development Repository is a comprehensive developer portfolio and documentation site built with Next.js, TypeScript, and Supabase. This project serves as a centralized hub for showcasing various programming languages, technologies, and developer tools. It provides detailed reference guides, code snippets, and explanations for a wide range of topics, making it an invaluable resource for developers of all skill levels.

## ✨ Key Features

### **Reference Guides**
* Comprehensive documentation for various programming languages, including:
	+ HTML
	+ JavaScript
	+ TypeScript
	+ C
	+ C++
	+ React
* Detailed explanations and code snippets for each topic

### **Developer Tools**
* Integration with Supabase for data storage and retrieval
* Customizable components and layouts using Tailwind CSS
* Visit counter and analytics

## 🗂️ Folder Structure

```mermaid
graph TD;
  src-->app;
  src-->components;
  src-->utils;
  app-->referencePage;
  referencePage-->html;
  referencePage-->javascript;
  referencePage-->typescript;
  referencePage-->c;
  referencePage-->cpp;
  referencePage-->react;
```

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white&style=for-the-badge)
![Supabase](https://img.shields.io/badge/Supabase-3EC67F?logo=supabase&logoColor=white&style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![ESLint](https://img.shields.io/badge/ESLint-4B4B4B?logo=eslint&logoColor=white&style=for-the-badge)

## ⚙️ Setup Instructions

To run the project locally, follow these steps:

* Clone the repository: `git clone https://github.com/abhraneeldhar7/solo-dev.git`
* Install dependencies: `npm install` or `yarn install`
* Start the development server: `npm run dev` or `yarn dev`

## 📁 Configuration Files

The project uses the following configuration files:

* `next.config.ts`: Next.js configuration file
* `postcss.config.mjs`: PostCSS configuration file
* `tailwind.config.ts`: Tailwind CSS configuration file
* `.eslintrc.json`: ESLint configuration file
* `tsconfig.json`: TypeScript configuration file

## 🤝 GitHub Actions

This repository uses GitHub Actions for automated workflows. The workflow files are located in the `.github/workflows` directory.

## 📝 Code Organization

The project is organized into the following directories:

* `app`: Next.js pages and components
* `components`: Reusable UI components
* `utils`: Utility functions and helpers

## 📊 Supabase Integration

The project uses Supabase for data storage and retrieval. The Supabase client is configured in `utils/supabase/client.ts`.



<br><br>
<div align="center">
<img src="https://avatars.githubusercontent.com/u/89008279?v=4" width="120" />
<h3>Abhra the Neel</h3>
<p>Full-stack developer with expertise in web, Android, and server-side development. Most projects are private due to being production code.</p>
</div>
<br>
<p align="right">
<img src="https://gitfull.vercel.app/appLogo.png" width="20"/>  <a href="https://gitfull.vercel.app">Made by GitFull</a>
</p>
    