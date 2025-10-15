import Card from '../components/Card';

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our simple React Router DOM example with props!</p>
      
      <div className="cards-container">
        <Card 
          title="React" 
          description="A JavaScript library for building user interfaces" 
          color="#61dafb"
        />
        <Card 
          title="Router DOM" 
          description="Declarative routing for React applications" 
          color="#ca4245"
        />
        <Card 
          title="Props" 
          description="Pass data from parent to child components" 
          color="#4caf50"
        />
      </div>
    </div>
  );
}

export default Home;
