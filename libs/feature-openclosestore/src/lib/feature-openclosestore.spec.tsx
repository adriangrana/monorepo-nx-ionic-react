import { render } from '@testing-library/react';

import FeatureOpenclosestore from './feature-openclosestore';

describe('FeatureOpenclosestore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureOpenclosestore />);
    expect(baseElement).toBeTruthy();
  });
});
