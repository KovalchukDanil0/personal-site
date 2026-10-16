declare namespace App {
	interface BlogMetadataType {
		title: string;
		description: string;
		date: Date;
	}

	interface BlogGlobType {
		metadata: BlogMetadataType;
	}
}
