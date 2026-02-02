# Personal Finance Risk Dashboard

A modern, responsive financial dashboard built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**. This application helps users visualize and compare risk profiles, volatility, and projected returns for various asset classes including Savings, Bonds, Index Funds, and Cryptocurrency.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Features

- **Portfolio Overview**: High-level summary of different financial products.
- **Detailed Asset Pages**: Dedicated analysis for Savings, Bonds, Index Funds, and Crypto.
- **Risk Analysis**: Visual indicators for risk levels (Low to Extreme) and volatility.
- **Interactive Projections**: Real-time investment growth calculator with adjustable time horizons (1-30 years).
- **Responsive Design**: Polished "fintech" dark mode UI that works seamlessly on desktop and mobile.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-finance-dashboard.git
   cd personal-finance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── bonds/           # Bonds product route
│   │   ├── crypto/          # Crypto product route
│   │   ├── index-funds/     # Index Funds product route
│   │   ├── savings/         # Savings product route
│   │   ├── layout.tsx       # Root layout including Sidebar
│   │   └── page.tsx         # Dashboard Home
│   ├── components/
│   │   ├── dashboard/       # Dashboard-specific components (RiskCard, ProjectionCalculator)
│   │   ├── layout/          # Layout components (AppSidebar)
│   │   └── ui/              # shadcn/ui shared components
│   └── lib/
│       ├── data.ts          # Static data for financial products
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
└── package.json             # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
