// const movies = [
//   {
//     title: "Mad Max: Fury Road",
//     genre: ["Action", "Adventure", "Sci-Fi"],
//     rating: 8.3,
//     poster:
//       "https://s-media-cache-ak0.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg"
//   },
//   {
//     title: "The Hunger Games: Mockingjay Part 1",
//     genre: ["Adventure", "Sci-Fi", "Thriller"],
//     rating: 6.8,
//     poster:
//       "https://1.bp.blogspot.com/-Ds0sudZmSq4/Vgxrr75E77I/AAAAAAAAREo/sZkZW5YMDTw/s1600/Mockingjay%2BPart%2B1.jpg"
//   },
//   {
//     title: "Jurassic World",
//     genre: ["Action", "Adventure", "Sci-Fi"],
//     rating: 7.2,
//     poster:
//       "https://s-media-cache-ak0.pinimg.com/736x/0b/ab/9a/0bab9a9c671dbb7aa8626eec44a0195f.jpg"
//   },
//   {
//     title: "Everest",
//     genre: ["Adventure", "Drama", "Thriller"],
//     rating: 7.4,
//     poster: "http://www.impawards.com/2015/posters/everest_ver4.jpg"
//   },
//   {
//     title: "Insurgent",
//     genre: ["Adventure", "Sci-Fi", "Thriller"],
//     rating: 6.4,
//     poster:
//       "http://cdn2-www.comingsoon.net/assets/uploads/2015/01/FIN16_Insurgent_Guns_1Sht_Trim-1422379653-mtv-14224534611.jpg"
//   },
//   {
//     title: "Sicario",
//     genre: ["Action", "Crime", "Drama"],
//     rating: 7.6,
//     poster:
//       "https://s-media-cache-ak0.pinimg.com/564x/7f/a1/5c/7fa15c26aa2cb48562ea37bbc177be74.jpg"
//   },
//   {
//     title: "Green Lantern",
//     genre: ["Action", "Adventure", "Sci-Fi"],
//     rating: 5.6,
//     poster:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyMTg3OTM5Ml5BMl5BanBnXkFtZTcwNzczMjEyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title: "Prisoners",
//     genre: ["Crime", "Drama", "Mystery"],
//     rating: 8.1,
//     poster:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   },
//   {
//     title: "The Hateful Eight",
//     genre: ["Crime", "Drama", "Mystery"],
//     rating: 7.8,
//     poster:
//       "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
//   }
// ];


// // flatten movies.genre array
// // const genres = movies
// // .map(m => m.genre)
// // .reduce((acc, val) => acc.concat(val), [])
// // .filter((elem, index, arr) => index === arr.indexOf(elem))


// // removes all articles in the movie title
// function strip(title) {
//   return title.replace(/^(a|an|the)\s/i, "");
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: movies,
//       value: "Sort"
//     };
    
//   }
  
//   handleChange = (e) => {
//     this.setState({ value: e.target.value })  
//   }

//   handleSubmit = (e) => {
//     const { value, movies } = this.state;
  
//     switch (value) {
//       case "Low rating":
//         this.setState({
//           movies: movies.sort((a, b) => (a.rating > b.rating ? 1 : -1))
//         });
//         break;
//       case "High rating":
//         this.setState({
//           movies: movies.sort((a, b) => (b.rating > a.rating ? 1 : -1))
//         });
//         break;
//       case "A-Z":
//         this.setState({
//           movies: movies.sort(
//             (a, b) => (strip(a.title) > strip(b.title) ? 1 : -1)
//           )
//         });
//         break;
//       case "Z-A":
//         this.setState({
//           movies: movies.sort(
//             (a, b) => (strip(b.title) > strip(a.title) ? 1 : -1)
//           )
//         });
//         break;
//       default:
//         this.setState({
//           movies: movies
//         })
//         break;
      
//     }
    
//     e.preventDefault();
//   }

//   render() {
    
//     const { movies,value } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <select id="rating-filter" value={value} onChange={this.handleChange}>
//             <option value="Sort">Sort</option>
//             <option value="Low rating">Low rating</option>
//             <option value="High rating">High rating</option>
//             <option value="A-Z">A-Z</option>
//             <option value="Z-A">Z-A</option>
//           </select>
//           <input type="submit" value="Filter" />
//         </form>
//         <section>
//           {movies.map(m => <Movietemplate movie={m} />)}
//         </section>
//       </div>
//     );
//   }
// }

// class Movietemplate extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { genre, rating, poster } = this.props.movie;
//     return (
//       <figure>
//         <img src={poster} />
//         <figcaption>
//           <p>{genre.join(' ')}</p>
//           <div className="rating">
//             <i className="fa fa-heart" />
//             <h4>{rating}</h4>
//           </div>
//         </figcaption>
//       </figure>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));