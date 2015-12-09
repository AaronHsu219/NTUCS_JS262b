function Monster(name, level) {
	this.name = name;
	this.level = level;
}



// 建構式(建構物件的函式)
function Player(name, hp) {
	
	// var player = new Object();
	// 空白物件自建立，並用this代表
	
	this.name = name;
	this.hp = hp;

	this.fight = function(mom/* Monster 物件 */) {
		this.hp = this.hp - mom.level;
		alert("和怪獸戰鬥:" + mom.name);
	};
	this.rest = function() {
		this.hp++;
	};
	this.report = function() {
		alert(this.name + ":" + this.hp);
	};	
}

/*
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
*/
