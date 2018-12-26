# express-graphql-mongodb-server-boilerplate
Name already pretty much says everything. 

##	Prequisites
1. Node
2. MongoDB


## How to get Started?
1. Clone this repository by 
```git clone github.com/malivp3494/express-graphql-mongodb-server-boilerplate.git```.
2. ```cd``` into that directory by ```cd express-graphql-mongodb-server-boilerplate```.
3. remove default git config, and add new git config
```
rm -rf .git
git init .
git add .
echo "node_modules/" > .gitignore
```

4. run ``npm install`` or `yarn`.

5. Create `.babelrc` and paste this -
```
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "6.10"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-object-rest-spread",
      {
        "useBuiltIns": true
      }
    ]
  ]
}
```
And that's it. 

