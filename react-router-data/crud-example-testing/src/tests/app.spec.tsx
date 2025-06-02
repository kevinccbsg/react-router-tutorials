import { render, screen } from '@testing-library/react'
import ContactsSkeletonPage from '@/Layouts/HomeSkeleton';

describe("HomeSkeleton", () => {
  it('renders home skeleton', async () => {
    // Act
    render(<ContactsSkeletonPage />);

    const newButton = screen.getByRole('button', { name: /new/i });
    expect(newButton).toBeInTheDocument();
  });
});
