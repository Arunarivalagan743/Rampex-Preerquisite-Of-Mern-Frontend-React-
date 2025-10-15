import Card from '../components/Card';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      
      <Card 
        title="Email" 
        description="contact@example.com" 
        color="#2196f3"
      />
      
  
    </div>
  );
}

export default Contact;
