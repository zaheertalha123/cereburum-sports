# Cereburum Sports Website

This repository contains the source code for the Cereburum Sports website, a modern, high-performance web application built with Next.js. The site serves as a portfolio and product catalog for sports barrier netting and equipment.

## Architecture and Hosting

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** Custom CSS Modules and global CSS (`index.css`)
- **Hosting:** Designed to be deployed on [Vercel](https://vercel.com/)

### How the Website Works

The website is a statically generated and server-rendered Next.js application. It does not currently use a separate database or CMS backend. Instead, content such as products and previous projects are managed directly via structured data files within the codebase. 

When changes are pushed to the main branch of the repository, Vercel will automatically detect the updates, build the application, and deploy the new version live.

---

## Local Development

To run the project locally on your machine:

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The server will auto-reload when you save changes to the code.

---

## Content Management Guide

Since this website uses static data arrays instead of a database, you can update the site content by editing specific JavaScript files.

### 1. How to Add or Edit Products

Products (referred to as categories in the code) are stored in the `app/products/page.js` file.

**Steps to add a new product:**

1. Open `app/products/page.js`.
2. Locate the `categories` array near the top of the file.
3. Copy an existing product object or create a new one using the following structure:

```javascript
{
  id: 'unique-product-id', // Used for URLs and keys
  title: 'Product Title',
  subtitle: 'Short Subtitle',
  filterGroup: 'Nets', // Must match one of the defined filter groups
  image: '/images/products/your-image-filename.jpg', // Path to the image
  tag: 'New', // Optional: e.g., 'Best Seller', 'New'. Set to null if none.
  tagColor: 'sand', // Optional: 'navy', 'sand', etc. Set to null if none.
  desc: 'A full description of the product and its use cases.',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  specs: [
    { label: 'Material', value: 'Nylon' },
    { label: 'Size', value: 'Standard' }
  ],
}
```

4. **Images:** If your product has an image, place the image file inside the `public/images/products/` directory. Ensure the `image` path in your object matches the filename.
5. Save the file. The changes will reflect immediately in development and on the live site after the next deployment.

### 2. How to Add or Edit Previous Works (Projects)

Previous works (portfolio projects) are managed in the `data/projects.js` file.

**Steps to add a new project:**

1. Open `data/projects.js`.
2. Locate the `projects` array.
3. Add a new project object to the array. It is recommended to place newer projects at the top of the array if you want them to appear first.

```javascript
{
  id: 'unique-project-id',
  title: 'Project Name',
  category: 'Cricket Nets', // Choose a category from projectCategories (e.g., 'Cricket Nets', 'Barrier Netting')
  type: 'Facility Type',
  desc: 'Detailed description of the project, installation, and outcome.',
  highlights: ['Highlight 1', 'Highlight 2', 'Highlight 3'],
  year: '2024',
  badge: 'Featured', // Optional badge text, or null
  gradient: 'linear-gradient(135deg, rgba(18,17,74,0.9), rgba(7,5,26,0.95))', // Card styling
  coverImage: '/images/works/unique-project-id/cover.jpg', // Main image
  media: [
    { type: 'image', url: '/images/works/unique-project-id/1.jpg' },
    { type: 'image', url: '/images/works/unique-project-id/2.jpg' }
    // Video type is also supported: { type: 'video', url: '...', poster: '...' }
  ]
}
```

4. **Categories:** If you are introducing a new category type, ensure you also add it to the `projectCategories` array at the bottom of the `data/projects.js` file.
5. **Images:** Create a new folder for your project inside `public/images/works/`, named exactly like your `id` (e.g., `public/images/works/unique-project-id/`). Place your `cover.jpg` and any gallery images in this folder and reference them accordingly in the `media` array.

---

## Deployment Instructions

This project is configured for seamless deployment on Vercel.

1. Create a Vercel account and link your GitHub repository.
2. Import the repository as a Next.js project.
3. The default build settings (`npm run build` and `npm run start`) will work out of the box.
4. Any push to the `main` branch will automatically trigger a new build and deployment.

For custom domains, navigate to your Vercel project settings under "Domains" and follow the required DNS configuration steps.
