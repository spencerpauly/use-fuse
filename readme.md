# useFuse Hook

This hook takes [Fuse.js](https://fusejs.io/), the popular client-side fuzzy-searching library, and puts it into a dynamic react hook with full TypeScript support.

## Fuse.js Advantages
* Frontend Fuzzy Searching
* Configurable search indexes and weights
* Speedy performance
* Can search nested keys of an object

## How To Install
Grab the `useFuse.ts` file and put it into your own project. You'll also need to install fuse.js:
```
$ npm install --save fuse.js
```
or
```
$ yarn add fuse.js
```

## How To Use
For a complete example, check the `examples.tsx` file.

Here's a simple example:

```
const { results, search, setSearch } = useFuse<MyDataType>({
    data: myData,
    keys: ['name', 'description']
})
```

You can also use any additional parameters or config settings found in the [Fuse.js Library](https://fusejs.io/).

Here's a more complicated example:

```
 const { results, search, setSearch } = useFuse<typeof exampleData[0]>({
    data: exampleData,
    keys: [
        {
            name: 'name',
            weight: 1,
        },
        {
            name: 'location.city',
            weight: 0.5,
        },
        {
            name: 'location.state',
            weight: 0.1,
        },
    ]
})
```
