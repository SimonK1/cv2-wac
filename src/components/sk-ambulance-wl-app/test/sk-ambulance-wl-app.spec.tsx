import { newSpecPage } from '@stencil/core/testing';
import { SkAmbulanceWlApp } from '../sk-ambulance-wl-app';

describe('sk-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [SkAmbulanceWlApp],
      html: `<sk-ambulance-wl-app base-path="/"></sk-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("sk-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [SkAmbulanceWlApp],
      html: `<sk-ambulance-wl-app base-path="/ambulance-wl/"></sk-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv2-ambulance-wl-list");
  });
});