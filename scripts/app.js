var app = avalon.define("todoCtrl", function(vm) {
	vm.things = [{
		done: false,
		content: "好吧，我要好好学习天天向上。"
	}, {
		done: true,
		content: "这几天学学AVALON。"
	}];

	// 计算未完成数量
	vm.getLefts = function() {
		return vm.things.filter(function(post) {
			return post.done === true;
		}).length;
	};

	// 更新未完成数量
	function update() {
		vm.lefts = vm.getLefts();
		console.log(vm.getLefts());
	};

	update();

	vm.newOne = function(e) {
		if (e.which === 13 && this.value) {
			var item = {
				done: false,
				content: this.value
			};
			vm.things.push(item);
			this.value = "";
			update();
		}
	};
});


