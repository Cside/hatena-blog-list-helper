# はてなブログ Markdown リスト入力支援（ブラウザ拡張）

はてなブログの Markdown 記法で、リスト（箇条書き）の先頭の記号を補完して入力します。

<a href="https://chrome.google.com/webstore/detail/lnidemekhlcpbkpmmgcmgdjepkpompol">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/315510/270853742-a6f28e05-5ed9-4d91-bf2c-6ed29ae2e503.gif" />
</a>

## Install

- [Chrome](https://chrome.google.com/webstore/detail/lnidemekhlcpbkpmmgcmgdjepkpompol)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/hkhmpecjgdjaehadeenmhmfgnimkmcef)
- [Firefox](https://addons.mozilla.org/ja/firefox/addon/%E3%81%AF%E3%81%A6%E3%81%AA%E3%83%96%E3%83%AD%E3%82%B0markdown%E3%83%AA%E3%82%B9%E3%83%88%E5%85%A5%E5%8A%9B%E6%94%AF%E6%8F%B4/)

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

⚠️ If you have a feature request, please discuss it with me on [/issues](https://github.com/Cside/hatena-blog-list-helper/issues) before writing your code.

Create a branch from `develop` and make a pull request to `develop` .

## Release Notes

[/releases](https://github.com/Cside/hatena-blog-list-helper/releases)

## License

[The MIT License](/LICENSE).
