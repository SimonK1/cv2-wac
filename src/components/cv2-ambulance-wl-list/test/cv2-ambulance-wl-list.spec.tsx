import { newSpecPage } from '@stencil/core/testing';
import { Cv2AmbulanceWlList } from '../cv2-ambulance-wl-list';

describe('cv2-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv2AmbulanceWlList],
      html: `<cv2-ambulance-wl-list></cv2-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as Cv2AmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
      
  });
});
