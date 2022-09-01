## Convention

The structure of project follows [golang/vscode-go](https://github.com/golang/vscode-go/)

## Publish Extension

Tag your commit and use github workflow.

```sh
git tag -a v0.1 -m "Release v0.1"
git push --tags
```

## Generate Syntax file

`scripts/gen-syntax.js` will generate syntax files, and update `grammars.embeddedLanguages` section in package.json

Run `yarn run gen-syntax` to generate
