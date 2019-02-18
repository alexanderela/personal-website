export class Skill {
	constructor(public name: string, public image: string) {}
}

export class Skillset {
	category: string;
	skills: Skill[] = [];
}