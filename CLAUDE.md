# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React.js portfolio website deployed on GitHub Pages at https://pat922.github.io/pat/. Built with Create React App, it displays personal portfolio information including work experience, education, skills, and projects.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests in interactive watch mode
npm test

# Build for production
npm run build

# Deploy to GitHub Pages (runs build automatically via predeploy script)
npm run deploy
```

## Architecture

The application follows a centralized data architecture where all portfolio content is stored in a single data file and distributed to components via props:

### Core Structure
- **src/App.js**: Root component that imports all section components and passes resumeData to each
- **src/resumeData.js**: Central data store containing all portfolio information (personal details, work history, education, skills, portfolio items)
- **src/components/**: Individual section components that receive data via props:
  - Header.js - Navigation bar and hero section with name/role
  - About.js - Personal information and summary
  - Resume.js - Education and work experience timeline
  - Portfolio.js - Project showcase grid
  - Testimonials.js - Certificates and achievements
  - ContactUs.js - Contact information and form
  - Footer.js - Social links and footer content

### Data Flow Pattern
All components follow the same pattern: they receive the `resumeData` object as props from App.js and render their specific section using that data. This makes updating content simple - just modify src/resumeData.js.

### Styling Architecture
- Uses pre-existing CSS framework in public/css/
- Main stylesheet: public/css/default.css
- Additional styles for fonts, media queries, and components
- jQuery-based interactions in public/js/init.js (smooth scrolling, mobile menu)

## Testing

The project uses React's default test setup:
- Test framework: Jest with React Testing Library
- Run all tests: `npm test`
- Tests are in *.test.js files (currently only App.test.js exists)