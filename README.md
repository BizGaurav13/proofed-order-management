# Proofed Order Management Dashboard

🚀 Live Demo: [View Live Demo on Vercel](https://proofed-order-management.vercel.app)

## ✨ Features

- **📊 Interactive Dashboard**: Clean and modern interface for order management
- **📋 Order Table**: Displays orders with customer information, job types, and status
- **🔢 Advanced Pagination**: Smart pagination with configurable page sizes (5, 10, 20, 50 items per page)
- **🎨 Modern UI**: Beautiful, responsive design using Styled Components
- **⚡ Real-time Data**: Built with React Query for efficient data fetching and caching
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🔍 Type Safety**: Full TypeScript support for better development experience
- **🎯 Status Tracking**: Track orders with different statuses (in queue, on hold, offer, assign)
- **⏰ Due Date Management**: Monitor order due dates and deadlines

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query) (React Query)
- **Development**: [ESLint](https://eslint.org/) for code quality
- **Deployment**: [Vercel](https://vercel.com/) for seamless deployment

## 📁 Project Structure

```
proofed-order-management/
├── public/                    # Static assets
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── _mock/                # Mock data
│   │   └── orders.ts
│   ├── components/           # React components
│   │   ├── Dashboard.tsx    # Main dashboard component
│   │   ├── OrderTable.tsx   # Order table component
│   │   └── styles/          # Styled components
│   │       ├── dashboard.styles.ts
│   │       └── orderTable.styles.ts
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx        # App wrapper
│   │   ├── _document.tsx   # Document wrapper
│   │   ├── index.tsx       # Home page
│   │   └── api/            # API routes
│   │       └── orders.ts   # Orders API endpoint
│   ├── styles/              # Global styles
│   │   └── globals.css
│   ├── types/               # TypeScript type definitions
│   │   ├── api.d.ts        # API response types
│   │   └── order.d.ts      # Order-related types
│   └── utils/               # Utility functions
│       └── helper.ts
├── .eslintrc.json          # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BizGaurav13/proofed-order-management.git
   cd proofed-order-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Usage

### Dashboard Features

- **View Orders**: Browse through all orders in a paginated table
- **Pagination**: Navigate through pages using the pagination controls
- **Page Size**: Change the number of items displayed per page (5, 10, 20, 50)
- **Order Details**: View customer name, content size, job type, due date, and status
- **Status Tracking**: Monitor order status (in queue, on hold, offer, assign)

### API Endpoints

- `GET /api/orders` - Fetch paginated orders with query parameters:
  - `page` (number): Page number (default: 1)
  - `limit` (number): Items per page (default: 10)

## 🏗️ Development

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Code Structure

- **Components**: Reusable React components in `src/components/`
- **Pages**: Next.js pages in `src/pages/`
- **API Routes**: Backend API endpoints in `src/pages/api/`
- **Types**: TypeScript type definitions in `src/types/`
- **Styles**: Styled Components in component-specific style files

### Environment Variables

No environment variables are required for this project as it uses mock data.

---

**Made with ❤️ using Next.js, TypeScript, and Styled Components**
