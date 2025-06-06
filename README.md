# Dev Projects Tracker – Starter Repo

This is a minimal Next.js + TypeScript project scaffold for the tech challenge.

⚠️ This version includes **6 hidden bugs** and **2 missing features (TODOs)** you must address.

⏱️ Estimated time to complete: **~4 hours**

## 🎯 Your Challenge

- Debug and fix the issues preventing the app from running correctly
- Improve the UI for a cleaner look and better user experience

Hint: Some bugs are in the API, some in the frontend logic.

## 💡 Bonus Points

- Code is modular and cleanly organized
- Form includes basic validation or user feedback
- Unit test(s) added for component or API route
- UI is responsive and styled (you can use Tailwind, styled-components, etc.)
- Clear git history showing your thought process

## 📤 Submission

When you're done, please:

- Push your solution to a **public GitHub repo**
- Include a brief `README.md` explaining:
  - What you fixed or changed
  - Any improvements or extras you added
- Share the link with us

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 📡 API Routes

Data lives in-memory (no external DB). Available endpoints:

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | /api/projects       | List all projects          |
| POST   | /api/projects       | Create a new project       |
| GET    | /api/projects/:id   | Get a single project       |
| PUT    | /api/projects/:id   | Update a project           |
| DELETE | /api/projects/:id   | Delete a project           |

Because data is stored in a module‑level array, it **resets whenever the dev server restarts**. That’s OK for this challenge.

---

🤔 Need Help?
---

If you get completely stuck or run into something unclear, don’t hesitate to reach out. We’re not testing your ability to suffer in silence — we want to see how you **think**, **analyze and fix bugs**, **write code**, and **structure a small project**. You can email us if needed.

__Good luck!__