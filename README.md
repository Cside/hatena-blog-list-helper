WIP

## How to Build

```bash
cat << EOF > .npmrc
//npm.pkg.github.com/:_authToken=<Your Github access token that includes read:packages permission>
@cside:registry=https://npm.pkg.github.com/
EOF

pnpm install
pnpm run build
```

## How to Send Pull Requests

⚠️ If you have a feature request, please discuss it with me on [/issues](https://github.com/Cside/return-amazon-5-stars-and-number-of-reviews/issues) before writing your code.

Create a branch from `develop` and make a pull request to `develop` .

## Release Notes

[/releases](https://github.com/Cside/return-amazon-5-stars-and-number-of-reviews/releases)

## License

[The MIT License](/LICENSE).
