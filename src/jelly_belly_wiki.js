class JellyBellyWiki {
	constructor() {
		this.api = "https://jellybellywikiapi.onrender.com/api"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getAllBeans() {
		const response = await fetch(
			`${this.api}/beans`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getBean(beanId) {
		const response = await fetch(
			`${this.api}/beans/${beanId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllFacts() {
		const response = await fetch(
			`${this.api}/facts`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFact(factId) {
		const response = await fetch(
			`${this.api}/facts/${factId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllRecipes() {
		const response = await fetch(
			`${this.api}/recipes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getRecipe(recipeId) {
		const response = await fetch(
			`${this.api}/recipes/${recipeId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllCombinations() {
		const response = await fetch(
			`${this.api}/combinations`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getCombination(combinationId) {
		const response = await fetch(
			`${this.api}/combinations/${combinationId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getAllMilestones() {
		const response = await fetch(
			`${this.api}/milestones`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getMilestone(milestoneId) {
		const response = await fetch(
			`${this.api}/milestones/${milestoneId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {JellyBellyWiki}
