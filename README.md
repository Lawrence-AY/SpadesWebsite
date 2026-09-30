# SpadesAtlas React

A React + React Router site for Spades Atlas with four pages:
Home, About Us, Services, and Contact. The About page includes the Mission and Ethics sections.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. Build for production with `npm run build`.

## Structure

```
src/
  main.jsx           # React Router setup
  App.jsx            # Route registration
  index.css
  components/
    Navbar.jsx       # Top navigation with page links
    Footer.jsx
  pages/
    Home.jsx
    About.jsx         # Includes mission and ethics sections
    Services.jsx
    Contact.jsx
```
