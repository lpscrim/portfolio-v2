import { renderSocialImage } from "./lib/socialImage";

export const alt = "Lewis Scrimgeour - Web Design & Development, Isle of Skye & Scotland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderSocialImage();
}
