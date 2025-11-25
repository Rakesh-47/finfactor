
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TheMealDB Explorer</h1>
          <p>Discover, explore, and cook amazing meals from around the world</p>
          
          <div className="hero-actions">
            <Link to="/search" className="btn btn-primary">Start Searching</Link>
            <Link to="/categories" className="btn btn-secondary">Browse Categories</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Explore Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Search Meals</h3>
            <p>Find your favorite meals by name and explore hundreds of recipes</p>
            <Link to="/search" className="feature-link">Search Now →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📂</div>
            <h3>Browse Categories</h3>
            <p>Explore meals organized by cuisine type and category</p>
            <Link to="/categories" className="feature-link">Browse →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎲</div>
            <h3>Random Meal</h3>
            <p>Get inspired with a random meal suggestion and full recipe</p>
            <Link to="/random" className="feature-link">Surprise Me →</Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;
