function createPlayerObject(name, hp) {
	
	var player = new Object();
	
	player.name = name;
	player.hp = hp;

	player.fight = function(level) {
		this.hp = this.hp - level;
	};
	player.rest = function() {
		this.hp++;
	};
	player.report = function() {
		alert(this.name + ":" + this.hp);
	};
	return player;
}