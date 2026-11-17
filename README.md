Namra Ali — AI & Data Portfolio
A responsive personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS, featuring a dynamic project management section powered by NeonDB PostgreSQL.

The website showcases my background as an Information Technology graduate from the University of Sargodha, along with my interests in artificial intelligence, data analytics, and chatbot development.
Live website.
Features
- Premium, responsive light-theme portfolio with smooth transitions
- Accessible navigation, labelled form fields, and visible keyboard focus
- About, Expertise, Projects, Learning/Certifications, and Contact sections
- Dynamic project listing fetched from NeonDB
- Add a project with a title and description
- Edit an existing project's title and description
- Delete a project with a confirmation prompt
- Persistent changes after refreshing the page
- Loading, success, error, and empty states for project management
- Contact form that opens the visitor's email application (not a database-backed contact form)
Tech stack
Technology	Purpose
Next.js (App Router)	Website and API route handlers
React	Interface and component state (useState, useEffect)
TypeScript	Type-safe development
Tailwind CSS	Responsive styling and transitions
NeonDB (PostgreSQL)	Persistent project storage
@neondatabase/serverless	Server-side PostgreSQL queries
Fetch API	Communication between the project manager and API routes
Vercel	Hosting and deployment


Project structure
src/
├── app/
│   ├── api/
│   │   └── projects/
│   │       ├── route.ts            # GET and POST
│   │       └── [id]/
│   │           └── route.ts        # PUT and DELETE
│   └── page.tsx                    # Portfolio homepage
├── components/
│   └── ProjectManager.tsx          # Project cards and CRUD forms
└── lib/
    └── db.ts                      # NeonDB connection helper
screenshots/
README.md

Local setup
1. Clone the repository and open it:
   git clone YOUR_REPOSITORY_URL
   cd YOUR_PROJECT_FOLDER
2. Install dependencies:
   npm install
3. Create a NeonDB PostgreSQL database at Neon.
4. Run the table creation SQL below in the Neon SQL Editor.
5. Create a .env.local file in the project root:
   DATABASE_URL="your_neondb_postgresql_connection_string"
6. Start the development server:
   npm run dev
7. Open http://localhost:3000.
Never commit .env.local or a real connection string. For Vercel deployment, configure DATABASE_URL in the project's Environment Variables settings.
Database schema (SQL)
CREATE TABLE IF NOT EXISTS projects (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
Optional query to inspect your saved projects:
SELECT id, title, description, created_at
FROM projects
ORDER BY id DESC;
API endpoints
Method	Endpoint	Action
GET	/api/projects	Fetch all projects
POST	/api/projects	Create a project
PUT	/api/projects/:id	Update a project
DELETE	/api/projects/:id	Delete a project


Example body for POST and PUT:
{
  "title": "InsightForge — AI-Powered Data Analytics Dashboard",
  "description": "An AI-powered dashboard concept for exploring KPIs, trends, visualizations, and data-driven insights."
}
The API uses Next.js route handlers and parameterized SQL queries. The React project manager fetches records and updates the interface when changes succeed.

1. Portfolio homepage

2. Projects loaded from NeonDB

3. Add project form

4. Edit project form

5. Delete confirmation

6. Persistence after refresh

Deployment
The project is deployed using Vercel. To deploy your own copy:
1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the DATABASE_URL environment variable in Vercel settings.
4. Deploy and test the CRUD operations on the live URL.
Important security note
This project follows a classroom assignment that does not require authentication. Therefore, its project modification API routes are not restricted to an owner. A public production portfolio should add access controls before exposing add, edit, and delete functionality to visitors.

Author
Namra Ali
BS Information Technology — University of Sargodha
GitHub: namraali2011