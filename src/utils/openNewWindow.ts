export function openNewWindow(url: string, notLocal?: boolean) {
  return window.open(
    notLocal ? url : `http://localhost:3000/${url}`,
    '_blank',
    `width = ${window.screen.width / 2}, height = ${window.screen.height}`,
  );
}
