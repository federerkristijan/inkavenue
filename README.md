# Ink Avenue Website – Basic Usage Guide

This guide explains how to download, edit, preview, and publish the website.

You do **not** need advanced technical knowledge to follow these steps.

---

## Step 1 – Create a GitHub account

Go to: [github](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E&source=header)

Create a free account and verify your email.

After installation, open **Terminal** (Mac)

### Step 2 — Clone the repository

git clone https://github.com/federerkristijan/inkavenue.git

This downloads the project folder to your computer.

Then enter the folder:

cd inkavenue

---

# 2) Install and Open Visual Studio Code

### Step 1 — Install VS Code

Download [VS Code](https://code.visualstudio.com/download)

Install it normally.

### Step 2 — Open the project

Inside the project folder, run:

<pre class="overflow-visible! px-0!" data-start="1048" data-end="1066"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>code .</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

If this does not work, open VS Code manually and choose:

File → Open Folder → Select the project folder.

---

# 3) Where to Place New Images (Media)

All images must be placed inside:

<pre class="overflow-visible! px-0!" data-start="1255" data-end="1276"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>public/media/</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

Example:

<pre class="overflow-visible! px-0!" data-start="1288" data-end="1322"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>public/media/new-photo.jpg</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

Then you can use it in the project like this:

<pre class="overflow-visible! px-0!" data-start="1371" data-end="1422"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼg"><Image</span><span></span><span class="ͼf">src</span><span class="ͼ8">=</span><span class="ͼc">"/media/new-photo.jpg"</span><span> ... </span><span class="ͼc">/></span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

Important:

* File names are case-sensitive.
* Avoid spaces in file names.
* Use lowercase and dashes (example: `festival-photo.jpg`).

---

# 4) Preview the Website Locally

Before first use, install project dependencies:

<pre class="overflow-visible! px-0!" data-start="1647" data-end="1670"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> install</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

### Start preview mode

<pre class="overflow-visible! px-0!" data-start="1696" data-end="1719"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run dev</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

Then open in your browser:

<pre class="overflow-visible! px-0!" data-start="1749" data-end="1778"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>http://localhost:3000</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

This is your live preview.

Changes you make will automatically update in the browser.

---

# 5) Build the Final Production Version

When everything is finished, run:

<pre class="overflow-visible! px-0!" data-start="1949" data-end="1974"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">npm</span><span> run build</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

This prepares the optimized production version.

If there are no errors, the build is successful.

---

# 6) Create a Merge Request (Pull Request)

After making changes:

### Step 1 — Create a new branch

<pre class="overflow-visible! px-0!" data-start="2181" data-end="2221"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">git</span><span> checkout </span><span class="ͼf">-b</span><span> feature-name</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

### Step 2 — Add and commit changes

<pre class="overflow-visible! px-0!" data-start="2260" data-end="2319"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">git</span><span> add .</span><br/><span class="ͼd">git</span><span> commit </span><span class="ͼf">-m</span><span></span><span class="ͼc">"Describe your changes"</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

### Step 3 — Push to GitHub

<pre class="overflow-visible! px-0!" data-start="2350" data-end="2390"><div class="w-full my-4"><div class=""><div class="min-h-0 flex-1 relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="corner-superellipse/1.1 rounded-3xl bg-token-bg-elevated-secondary border-token-border-light border relative"><div class="absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="absolute inset-x-0 top-0 bottom-54"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-bg-elevated-secondary"></div></div></div><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼd">git</span><span> push origin feature-name</span></div></div></div></div></div></div></div><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"></div></div></div></div></div></pre>

### Step 4 — Open GitHub

Go to:

https://github.com/federerkristijan/inkavenue

Click:

**Compare & Pull Request**

If there are no conflicts:

* Click **Merge**
* Confirm merge into `main`

---

# 7) View the Website on Vercel

Once changes are merged into `main`:

1. Go to:

   https://vercel.com/kristijan-federers-projects/inkavenue
2. Vercel automatically deploys the new version.
3. After deployment finishes, you can view the live site at:

https://vercel.com/kristijan-federers-projects/inkavenue

If deployment fails, Vercel will show an error log.

---

# Quick Checklist

| Task                 | Command                         |
| -------------------- | ------------------------------- |
| Install dependencies | `npm install`                 |
| Preview locally      | `npm run dev`                 |
| Build production     | `npm run build`               |
| Create branch        | `git checkout -b branch-name` |
| Push changes         | `git push origin branch-name` |









This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
