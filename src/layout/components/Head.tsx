import Head from 'next/head';

export function EatLaterHead({ title, description, keywords }: {title?: string, description?: string, keywords?: string}) {

  const defaultTitle = "EatLater - Order Food Delivery for Later or On-Demand";
  const defaultDescription = "Order food delivery for later or on-demand with EatLater. Choose from a wide selection of restaurants and enjoy the convenience of food delivery at your fingertips.";
  const defaultKeywords = "food delivery, order food online, EatLater, fast food delivery";
  const siteName = 'EatLater'
  return (
    <Head>
      <title>{title ? `${title} | EatLater` : defaultTitle}</title>
      <meta name="description" content={description ? description : defaultDescription} />
      <meta name="keywords" content={keywords ? keywords : defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta key="robots" name="robots" content="follow,index" />
        <meta
            key="apple-mobile-web-app-capable"
            name="apple-mobile-web-app-capable"
            content="yes"
        />
        <meta key="og:locale" name="og:locale" content="en_US" />
        <meta key="og:site_name" name="og:site_name" content={siteName} />
        <link rel="icon" type="image/png" sizes="70x70" href="/favicon.png" />
    </Head>
  );
}
