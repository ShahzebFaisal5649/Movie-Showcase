const TMDB_API_KEY = "7b05513d887f34b038fe4f60983fa367" // Replace with your actual TMDB API key

const staticMovies = [
  {
    title: "Inception",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    details: "A thief who enters the dreams of others to steal secrets from their subconscious.",
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    year: 2010,
  },
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    details:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genres: ["Drama"],
    director: "Frank Darabont",
    year: 1994,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    details:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    year: 2008,
  },
  {
    title: "Pulp Fiction",
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    details:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    year: 1994,
  },
  {
    title: "Forrest Gump",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    details:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    year: 1994,
  },
  {
    title: "The Godfather",
    rating: 9.2,
    image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    details:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    year: 1972,
  },
  {
    title: "Schindler's List",
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    details:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    genres: ["Biography", "Drama", "History"],
    director: "Steven Spielberg",
    year: 1993,
  },
  {
    title: "The Matrix",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    details:
      "A computer programmer discovers that reality as he knows it is a simulation created by machines to subjugate humanity.",
    genres: ["Action", "Sci-Fi"],
    director: "The Wachowskis",
    year: 1999,
  },
  {
    title: "Goodfellas",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    details:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    genres: ["Biography", "Crime", "Drama"],
    director: "Martin Scorsese",
    year: 1990,
  },
  {
    title: "The Silence of the Lambs",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    details:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    year: 1991,
  },
  {
    title: "Fight Club",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    details:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    genres: ["Drama"],
    director: "David Fincher",
    year: 1999,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    rating: 8.9,
    image: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    details:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    genres: ["Action", "Adventure", "Drama"],
    director: "Peter Jackson",
    year: 2003,
  },
  {
    title: "Interstellar",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    details: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    year: 2014,
  },
  {
    title: "The Departed",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    details:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Martin Scorsese",
    year: 2006,
  },
  {
    title: "Whiplash",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/6uSPcdGNA2A6vJmCagXkvnutegs.jpg",
    details:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    genres: ["Drama", "Music"],
    director: "Damien Chazelle",
    year: 2014,
  },
]

let currentMovies = [...staticMovies]

async function fetchMoviesFromAPI() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.results.slice(0, 10).map((movie) => ({
      title: movie.title,
      rating: movie.vote_average,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      details: movie.overview,
      genres: movie.genre_ids.map((id) => getGenreName(id)),
      year: new Date(movie.release_date).getFullYear(),
    }))
  } catch (error) {
    console.error("Error fetching movies from API:", error)
    return []
  }
}

// Add this function to map genre IDs to names
function getGenreName(id) {
  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  }
  return genres[id] || "Unknown"
}

function renderMovies(moviesToRender) {
  const movieContainer = document.getElementById("movieContainer")
  movieContainer.innerHTML = ""
  moviesToRender.forEach((movie) => {
    const movieCard = document.createElement("div")
    movieCard.className = "col-md-4 col-sm-6 mb-4"
    movieCard.innerHTML = `
            <div class="movie-card">
                <img src="${movie.image}" class="movie-poster w-100" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/500x750?text=No+Image+Available'">
                <div class="movie-info">
                    <h5 class="movie-title">${movie.title}</h5>
                    <p class="movie-rating">
                        <i class="fas fa-star"></i> ${movie.rating.toFixed(1)}
                    </p>
                    <div>
                        ${movie.genres.map((genre) => `<span class="genre-tag">${genre}</span>`).join("")}
                    </div>
                </div>
                <div class="movie-overlay">
                    <h3>${movie.title} (${movie.year})</h3>
                    <p><strong>Director:</strong> ${movie.director || "N/A"}</p>
                    <p><strong>Rating:</strong> ${movie.rating.toFixed(1)}</p>
                    <p>${movie.details}</p>
                </div>
            </div>
        `
    movieCard.addEventListener("click", () => showMovieDetails(movie))
    movieContainer.appendChild(movieCard)
  })
}

function showMovieDetails(movie) {
  const modalTitle = document.querySelector("#movieModal .modal-title")
  const modalBody = document.querySelector("#movieModal .modal-body")

  modalTitle.textContent = `${movie.title} (${movie.year})`
  modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${movie.image}" class="img-fluid rounded" alt="${movie.title}">
            </div>
            <div class="col-md-8">
                <p><strong>Rating:</strong> ${movie.rating.toFixed(1)}</p>
                <p><strong>Director:</strong> ${movie.director || "N/A"}</p>
                <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
                <p><strong>Plot:</strong> ${movie.details}</p>
            </div>
        </div>
    `

  const movieModal = new bootstrap.Modal(document.getElementById("movieModal"))
  movieModal.show()
}

function filterAndSortMovies() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase()
  const selectedGenre = document.getElementById("genreFilter").value
  const sortBy = document.getElementById("sortOption").value

  const filteredMovies = currentMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm) && (selectedGenre === "" || movie.genres.includes(selectedGenre)),
  )

  filteredMovies.sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating
    } else if (sortBy === "year") {
      return b.year - a.year
    } else {
      return a.title.localeCompare(b.title)
    }
  })

  renderMovies(filteredMovies)
}

document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("searchInput")
  const genreFilter = document.getElementById("genreFilter")
  const sortOption = document.getElementById("sortOption")
  const staticDataBtn = document.getElementById("staticData")
  const apiDataBtn = document.getElementById("apiData")

  // Populate genre filter
  const genres = [...new Set(staticMovies.flatMap((movie) => movie.genres))].sort()
  genres.forEach((genre) => {
    const option = document.createElement("option")
    option.value = genre
    option.textContent = genre
    genreFilter.appendChild(option)
  })

  searchInput.addEventListener("input", filterAndSortMovies)
  genreFilter.addEventListener("change", filterAndSortMovies)
  sortOption.addEventListener("change", filterAndSortMovies)

  staticDataBtn.addEventListener("click", (e) => {
    e.preventDefault()
    currentMovies = [...staticMovies]
    renderMovies(currentMovies)
    staticDataBtn.classList.add("active")
    apiDataBtn.classList.remove("active")
  })

  apiDataBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const apiMovies = await fetchMoviesFromAPI()
    if (apiMovies.length > 0) {
      currentMovies = apiMovies
      renderMovies(currentMovies)
      apiDataBtn.classList.add("active")
      staticDataBtn.classList.remove("active")
    } else {
      alert("Failed to fetch movies from API. Using static data instead.")
    }
  })

  // Initial render
  renderMovies(currentMovies)

  // Show API key message if the key hasn't been set
  if (TMDB_API_KEY === "YOUR_TMDB_API_KEY") {
    document.getElementById("apiKeyMessage").style.display = "block"
  }
})

