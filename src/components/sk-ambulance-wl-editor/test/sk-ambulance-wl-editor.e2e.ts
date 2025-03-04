import { newE2EPage } from '@stencil/core/testing';

describe('sk-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sk-ambulance-wl-editor></sk-ambulance-wl-editor>');

    const element = await page.find('sk-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
