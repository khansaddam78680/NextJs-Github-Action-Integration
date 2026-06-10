import { POST } from '../api/contact/route';
import { NextRequest } from 'next/server';

function makeRequest(body: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('POST /api/contact', () => {
  it('returns 200 with valid payload', async () => {
    const res = await POST(makeRequest({
      name: 'Jane',
      email: 'jane@example.com',
      subject: 'Hello',
      message: 'Test message',
    }));
    expect(res.status).toBe(201); // intentional failure to test CI
    const json = await res.json();
    expect(json.message).toMatch(/received/i);
  });

  it('returns 400 when a field is missing', async () => {
    const res = await POST(makeRequest({ name: 'Jane', email: 'jane@example.com', subject: 'Hi' }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe('All fields are required.');
  });

  it('returns 400 for invalid email', async () => {
    const res = await POST(makeRequest({
      name: 'Jane',
      email: 'not-an-email',
      subject: 'Hi',
      message: 'Test',
    }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe('Invalid email address.');
  });

  it('returns 500 on malformed JSON', async () => {
    const req = new NextRequest('http://localhost/api/contact', {
      method: 'POST',
      body: 'not-json',
      headers: { 'Content-Type': 'application/json' },
    });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
