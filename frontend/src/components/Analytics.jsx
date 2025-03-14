import { useState } from 'react';
import { Table, Spinner, Alert, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

function Analytics() {
  const [urls, setUrls] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const fetchAnalytics = async () => {
    setLoading(true);
    setError('');
    setUrls(null);

    try {
      const response = await axios.get(`https://custom-url-shortner-gmvf.onrender.com/api/url/analytics/${inputValue}`);
      setUrls(response.data);
    } catch (err) {
      setError('Invalid short URL ID or no data available');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="analytics-container">
      <h2 className="text-center mb-4">URL Analytics</h2>

      {/* Input Form */}
      <Form className="mb-4" onSubmit={(e) => { e.preventDefault(); fetchAnalytics(); }}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Short URL ID</Form.Label>
          <center>
            <div className="w-50">
              <Form.Control
                type="text"
                placeholder="e.g., abc123"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </center>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading || !inputValue.trim()}>
          Get Analytics
        </Button>
      </Form>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center mt-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {/* Main Analytics Table */}
      {urls && (
        <>
          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Short ID</th>
                <th>Original URL</th>
                <th>Visits</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href={`https://custom-url-shortner-1.onrender.com/#/link/${urls.shortId}`} target="_blank" rel="noopener noreferrer">
                    {urls.shortId}
                  </a>
                </td>
                <td>
                  <a href={urls.redirectUrl} target="_blank" rel="noopener noreferrer">
                    {urls.redirectUrl}
                  </a>
                </td>
                <td>{urls.totalClicks}</td>
                <td>{new Date(urls.createdAt).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </Table>

          {/* Click Time Details Table */}
          {urls.visitHistory && urls.visitHistory.length > 0 && (
            <div className="d-flex justify-content-center mt-4">
              <Table striped bordered hover className="w-50 text-center">
                <thead>
                  <tr>
                    <th>Serial No.</th>
                    <th>Time of Click</th>
                  </tr>
                </thead>
                <tbody>
                  {urls.visitHistory.map((visit, index) => (
                    <tr key={visit._id}>
                      <td>{index + 1}</td>
                      <td>{new Date(visit.timeStamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
}

export default Analytics;
