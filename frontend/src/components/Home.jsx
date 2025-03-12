import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setLoading(true);

    try {
      const response = await axios.post('https://custom-url-shortner-gmvf.onrender.com/api/url', { url });
      setShortUrl(response.data.id);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="url-form"
    >
      <h2 className="text-center mb-4">Shorten Your URL</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter your URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-grid">
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </Button>
        </div>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        {shortUrl && (
          <Alert variant="success" className="mt-3">
            Short URL:{" "}
            <a href={`https://custom-url-shortner-1.onrender.com/#/link/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            https://custom-url-shortner-1.onrender.com/link/{shortUrl}
            </a>
        </Alert>        
        )}
      </Form>
    </motion.div>
  );
}

export default Home;