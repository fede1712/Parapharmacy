export interface HeadBanner {
  image: { url: string };
  isDisplayed: boolean;
  brand: { slug: string } | undefined;
  category: { slug: string } | undefined;
}
