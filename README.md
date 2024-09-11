# jelly_belly_wiki.js
Web-API for [jelly-belly-wiki.netlify.app](https://jelly-belly-wiki.netlify.app) an API to get all data reflecting from the original Jelly Belly Website

## Example
```JavaScript
async function main() {
	const { JellyBellyWiki } = require("./jelly_belly_wiki.js")
	const jellyBellyWiki = new JellyBellyWiki()
	const beans = await jellyBellyWiki.getAllBeans()
	console.log(beans)
}

main()
```
