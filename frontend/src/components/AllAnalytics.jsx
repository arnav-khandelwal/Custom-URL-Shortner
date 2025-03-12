import { useState, useEffect } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

function AllAnalytics() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('https://custom-url-shortner-gmvf.onrender.com/api/url/analytics/all');
      setUrls(response.data);
    } catch (err) {
      setError('Failed to fetch analytics data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-3">
        {error}
      </Alert>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="analytics-container">
      <h2 className="text-center mb-4">All URL Analytics</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Short ID</th>
            <th>Original URL</th>
            <th>Visits</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.shortId}>
              <td>
                <a href={`http://localhost:5173/link/${url.shortId}`} target="_blank" rel="noopener noreferrer">
                  {url.shortId}
                </a>
              </td>
              <td>
                <a href={url.redirectUrl} target="_blank" rel="noopener noreferrer">
                  {url.redirectUrl}
                </a>
              </td>
              <td>{url.visitHistory.length}</td>
              <td>{new Date(url.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </motion.div>
  );
}

export default AllAnalytics;