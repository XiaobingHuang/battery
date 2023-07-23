declare global {
  interface Window {
    ARC_GRAPH_API_BASE_URL: string;
    ARC_UI_API_BASE_URL: string;
    ARC_LEGACY_API_BASE_URL: string;
  }
}

export type TestType = {
  ty: string;
};
