import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Test = ({ data, parentField }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              data-tinafield={`${parentField}.tagline`}
              className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            >
              {data.tagline}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            {data.actions && (
              <Actions
                parentField={`${parentField}.actions`}
                className="justify-center lg:justify-start py-2"
                parentColor={data.color}
                actions={data.actions}
              />
            )}
          </div>
          {data?.image ? (
            <div
              className="hidden lg:mt-0 lg:col-span-5 lg:flex"
              data-tinafield={`${parentField}.image`}
            >
              <img src={data.image.src} alt={data.image.alt} />
            </div>
          ) : null}
        </div>
      </section>

      {/* <Container
        size="large"
        className="flex gap-14 items-center justify-center"
      >
        <div className="flex flex-row text-center lg:text-left">
          {data.image && (
            <div
              data-tinafield={`${parentField}.image`}
              className="flex justify-center"
            >
              <img
                className="absolute w-full rounded-lg max-w-xs lg:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
                src={data.image.src}
                aria-hidden="true"
              />
              <img
                className="relative z-10 w-full max-w-xs rounded-lg lg:max-w-none h-auto"
                alt={data.image.alt}
                src={data.image.src}
              />
            </div>
          )}
          <div>
            {data.tagline && (
              <h2
                data-tinafield={`${parentField}.tagline`}
                className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
              >
                {data.tagline}
                <span className="absolute w-full h-full left-0 top-0 rounded-full -z-1 bg-current opacity-7"></span>
              </h2>
            )}
            {data.headline && (
              <h3
                data-tinafield={`${parentField}.headline`}
                className={`w-full relative	mb-10 text-5xl font-extrabold tracking-normal leading-tight title-font`}
              >
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r  ${
                    data.color === "primary"
                      ? `from-white to-gray-100`
                      : headlineColorClasses[theme.color]
                  }`}
                >
                  {data.headline}
                </span>
              </h3>
            )}
            {data?.example}
            {data.text && (
              <div
                data-tinafield={`${parentField}.text`}
                className={`prose prose-lg mx-auto lg:mx-0 mb-10 ${
                  data.color === "primary" ? `prose-primary` : `dark:prose-dark`
                }`}
              >
                <TinaMarkdown content={data.text} />
              </div>
            )}
            {data.actions && (
              <Actions
                parentField={`${parentField}.actions`}
                className="justify-center lg:justify-start py-2"
                parentColor={data.color}
                actions={data.actions}
              />
            )}
          </div>
        </div>
      </Container> */}
    </Section>
  );
};

export const testBlockSchema: TinaTemplate = {
  name: "test",
  label: "Test",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Example",
      name: "example",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
