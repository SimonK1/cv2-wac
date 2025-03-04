import { newE2EPage } from '@stencil/core/testing';

describe('sk-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sk-ambulance-wl-app></sk-ambulance-wl-app>');

    const element = await page.find('sk-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
