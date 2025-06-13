# 🗂️ Dev Projects Tracker – Refactoring and Improvements

---

## ✅ Bug Fixes

- **[Case 1] Incorrect endpoint**

  - **Issue:** The frontend was sending requests to `/api/project`, while the backend expected `/api/projects`.
  - **Impact:** Triggered 404 errors.
  - **Fix:** Updated all frontend calls to use `/api/projects`.

- **[Case 2] Enum `Methods` with incorrect casing**

  - **Issue:** The `GET` method was defined as `Get` (case-sensitive).
  - **Impact:** The API didn’t recognize `GET` requests, resulting in 405 errors.
  - **Fix:** Updated enum values to uppercase to match `req.method`.

- **[Case 3] `techStack` type inconsistency**

  - **Issue:** The form state expected `string[]`, but the input was a comma-separated `string`.
  - **Impact:** Caused type errors and transformation failures.
  - **Fix:** Treated the field as `string` in the form and converted it to an array using `.split(',')` only before submission.

- **[Case 4] Usage of undefined `methods.GET`**

  - **Issue:** Reference to a non-existent constant.
  - **Impact:** Build error: `Cannot find name 'methods'`.
  - **Fix:** Replaced with `Methods.GET` from the properly declared enum.

- **[Case 5] Non-existent function in store**

  - **Issue:** Tried calling `modifyProject`, which didn’t exist.
  - **Impact:** Code breakage due to failed import.
  - **Fix:** Replaced with `updateProject`, which was already implemented and correct for PUT requests.

- **[Case 6] Incorrect typing of `projects`**
  - **Issue:** Declared as a single `Project`, but the actual data was a `Project[]`.
  - **Impact:** Broke `.map()` and list rendering.
  - **Fix:** Corrected to `Project[]`.

---

## 🔧 Improvements & Refactoring

### 📦 Code Structure

- **Componentization:** Created reusable components like `ProjectForm`, `ProjectCard`, `ProjectsGrid`, `EmptyProjectState`, and `HomeHeader`, `FormField` for better organization, clarity, and maintainability.
- **Custom Hook:** Introduced `useProject` to encapsulate logic related to form state and submission, separating concerns between logic and UI.

### 🧾 Typing & Validation

- **Zod + React Hook Form:** Implemented Zod schemas for form validation and integrated with `react-hook-form` to ensure clean error handling and type safety.
- **Typed Status Field:** The `<select>` status field strictly reflects valid enum values (`Backlog`, `In Progress`, `Completed`).

---

## 🎨 Design & UX

- **Visual Prototyping (v0):** Selected a warm autumn color palette and sketched an initial layout to establish an interface that is visually appealing and aligned with the app’s purpose.
- **React Icons:** Used `react-icons` to enhance visual hierarchy and usability.
- **Tailwind CSS:** Applied for styling and responsive layout across form and card components.

---

## 🧪 API Tests

Added basic tests for the `/api/projects` endpoint using `jest` and `node-mocks-http`:

- **GET:** Returns all projects with `200 OK`.
- **POST:** Adds a valid project and returns `201 Created`.
- **POST (no `techStack`):** Defaults to an empty array.
- **POST (missing required fields):** Returns `400 Bad Request`.
- **Other methods (e.g., DELETE):** Returns `405 Method Not Allowed`.

---

## 🧪 Future Testing Plans

If more time was available, I would add unit tests for:

- **`useProject` hook:** Mocking fetch requests and verifying state transitions.
- **`ProjectForm`:** Simulating user input and validating form behavior.
- **`ProjectCard`:** Ensuring update/delete UI interactions behave as expected.

---

## 🔁 Update & Delete Functionality

Although this version focuses on creating and listing projects, the next steps would include:

### ✏️ Update Project

- Add an "Edit" button to each `ProjectCard`.
- On click, show a form pre-filled with existing data.
- On submit, send a `PUT` request to `/api/projects/:id`.
- Update project on local state after success response.

### 🗑️ Delete Project

- Add a delete icon/button to `ProjectCard`.
- Confirm action via modal or alert.
- On confirm, send a `DELETE` request to `/api/projects/:id`.
- Remove the project from local state upon success.

Both features would extend the `useProject` hook with `updateProject` and `deleteProject` functions and expand the API handler accordingly.

---

## 💡 Additional Ideas

- **React Query:** Replace `useEffect`/`fetch` with React Query for improved caching, refetching, and state syncing.
- **Persistent Backend:** Swap the in-memory store with a real backend (e.g., Firebase, PostgreSQL).
- **Search & Filter:** Allow users to search or filter projects by title, status, or tech stack.

---

## ✅ Completed TODOs

- [x] Replaced direct calls with existing `getAllProjects`.
- [x] Implemented responsive UI using Tailwind.
- [x] Fixed type and enum issues.
- [x] Refactored into reusable components.
- [x] Added validation with Zod.
- [x] Created basic unit tests for the `/api/projects` route.

---

## 🙌 Final Thoughts

I really enjoyed working on this project! It was a great opportunity to reinforce best practices with TypeScript, testing, and componentization in React. I’ve also included some ideas and improvements I would implement with more time — including full test coverage for hooks and components, as well as edit and delete functionality for projects.
