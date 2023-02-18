interface OpenWindowData {
  url: string;
  notLocal?: boolean;
  width?: number;
  height?: number;
}

export function openNewWindow({ url, notLocal, height, width }: OpenWindowData) {
  return window.open(
    notLocal ? url : `http://localhost:3000/${url}`,
    '_blank',
    `width = ${width ? width : window.screen.width / 2}, 
    height = ${height ? height : window.screen.height}`,
  );
}
