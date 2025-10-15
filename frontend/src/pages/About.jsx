import Card from '../components/Card';

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is a simple demonstration of React Router and Props</p>
      
      <Card 
        title="What are Props?" 
        description="Props are arguments passed into React components. They allow you to pass data from parent to child components." 
        color="#ff9800"
      />
      
    
    </div>
  );
}

export default About;
