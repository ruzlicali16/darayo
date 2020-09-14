export interface SiteNavigationState {
  rightDrawer: boolean;
  bookPage: boolean;
  addBookDialog: boolean;
}

const state: SiteNavigationState = {
  rightDrawer: false,
  bookPage: false,
  addBookDialog: false,
};

export default state;
