# 🎬 Movie Showcase

**Movie Showcase** is a modern, responsive web app that allows users to browse, search, and explore top-rated movies using either a curated static dataset or real-time data from the [TMDb API](https://www.themoviedb.org/documentation/api). With filtering, sorting, and detailed modals, users can immerse themselves in an engaging cinematic experience.

---

## 🌟 Features

- 🔍 **Search Movies**: Live search by movie title.
- 🎭 **Filter by Genre**: Narrow results using a genre filter.
- 🔃 **Sort Options**: Sort movies by **Rating**, **Title**, or **Release Year**.
- 🗂️ **Static & Dynamic Modes**:
  - View curated **static data** instantly.
  - Fetch **live top-rated movies** from TMDb using an API key.
- 🖼️ **Interactive Modals**: Click any movie to view its full details, including director, rating, genres, year, and synopsis.
- 💡 **Fallbacks**: Graceful error handling for broken images or failed API calls.
- 📱 **Fully Responsive UI**: Built using **Bootstrap 5**, **Font Awesome**, and **Poppins** for a clean and cinematic look.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Font Awesome
- Google Fonts (Poppins)
- TMDb API

---

## 🚀 How to Run the Project

### 🔧 Option 1: Run Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/ShahzebFaisal5649/Movie-Showcase.git
   cd Movie-Showcase
   ```

2. **Open `21L-5649_Q2a_index.html` in your browser**
   ```bash
   start 21L-5649_Q2a_index.html    # For Windows
   open 21L-5649_Q2a_index.html     # For macOS
   ```

3. **[Optional] Enable API Mode**
   - Open `21L-5649_Q2b_script.js`
   - Replace this line:
     ```js
     const TMDB_API_KEY = "YOUR_TMDB_API_KEY"
     ```
     with your actual TMDb API key.
   - Save the file and reload the browser.



## 📁 Project Structure

```
Movie-Showcase/
├── 21L-5649_Q2a_index.html       # Main HTML file
├── 21L-5649_Q2b_script.js        # JavaScript with data handling & interactivity
├── 21L-5649_Q2c_styles.css       # Custom styling
├── .vscode/                      # VSCode configuration files
├── .gitignore                    # Git ignore file
└── README.md                     # Project
