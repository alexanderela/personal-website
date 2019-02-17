export class Skill {
	constructor(private name: string, private image: string) {}
}

export class Skillset {
	category: string;
	skills: Skill[] = [];
}