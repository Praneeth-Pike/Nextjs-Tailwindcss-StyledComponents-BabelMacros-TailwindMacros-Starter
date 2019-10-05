# Nextjs [Tailwindcss + StyledComponents + BabelMacros + TailwindMacros] Starter

Built on top of the Example app with [babel-macros](https://github.com/kentcdodds/babel-macros)


## Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

The basic idea behind this starter is to be able to use StyledComponents with tailwindcss `$tw{}`inside the styledcomponents in Nextjs. 

Something like this: 
``const H1 = styled.h1`
    ${tw`text-3xl font-bold text-green-400`}`
``

Hopefully, this helps anyone looking for this kind of setup in Nextjs app that's usually found in Gatsbyjs.org

Thanks!