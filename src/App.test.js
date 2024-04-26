import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import CheckStatus from './CheckStatus';

jest.mock('axios');

describe('CheckStatus component', () => {
  test('renders the component with initial status message', () => {
    render(<CheckStatus />);
    expect(screen.getByText('Enter Application Id')).toBeInTheDocument();
  });

  test('updates status on successful search', async () => {
    const mockData = {
      status: 'Accepted',
      name: 'John Doe',
      age: 30,
      applied_country: 'USA',
      address: '123 Main St, Anytown, USA',
      file: 'path/to/image'
    };

    axios.post.mockResolvedValueOnce({ data: mockData });

    render(<CheckStatus />);

    fireEvent.change(screen.getByRole('textbox', { name: /Application id/i }), {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));

    await waitFor(() => {
      expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
      expect(screen.getByText('Age : 30')).toBeInTheDocument();
      expect(screen.getByText('Applied Country: USA')).toBeInTheDocument();
      expect(screen.getByText('Address: 123 Main St, Anytown, USA')).toBeInTheDocument();
      expect(screen.getByText('Status : Accepted')).toBeInTheDocument();
    });
  });
});
