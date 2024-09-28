import { GetStaticPropsContext } from "next";

export const getStaticPropsWithLocale = async (context: GetStaticPropsContext) => {
  const locale = context.locale || 'en-US';
  const messages = (await import(`../../locales/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
};
