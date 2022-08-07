import { render } from '@testing-library/react';

import FeatureRecepmer from './feature-recepmer';

describe('FeatureRecepmer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureRecepmer />);
    expect(baseElement).toBeTruthy();
  });
});
