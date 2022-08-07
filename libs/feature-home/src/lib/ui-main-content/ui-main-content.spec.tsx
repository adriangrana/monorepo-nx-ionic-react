import { render } from '@testing-library/react';

import UiMainContent from './ui-main-content';

describe('UiMainContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiMainContent />);
    expect(baseElement).toBeTruthy();
  });
});
