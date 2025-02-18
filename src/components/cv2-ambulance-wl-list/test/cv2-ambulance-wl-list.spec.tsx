import { newSpecPage } from '@stencil/core/testing';
import { Cv2AmbulanceWlList } from '../cv2-ambulance-wl-list';

describe('cv2-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2AmbulanceWlList],
      html: `<cv2-ambulance-wl-list></cv2-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv2-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv2-ambulance-wl-list>
    `);
  });
});
