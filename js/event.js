$(function () {
	var n = 0,
		imgNum = $("img").length,
		img = $('img');
	lazyload();
	$(window).scroll(lazyload);
	var test = /_min\./

	function lazyload(event) {
		for (var i = n; i < imgNum; i++) {
			if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
				if (img.eq(i).attr("src") == "img/content/null.png") {
					var src = img.eq(i).attr("data-src");
					img.eq(i).attr("src", src);
					n = i + 1;
				}
			}
		}
	}
});
$(function () {
	$(document)
		.on("slide.bs.carousel", "#myCarousel", function () { //轮播条文字
			var ht = $('.ht');
			var t1 = ht.find('.isocp');
			var t2 = ht.find('.CNM');
			var t3 = ht.find('.FZYXJW');
			var t4 = ht.find('.x-line');
			t1.fadeOut('100', function () {

			});
			t2.fadeOut('100', function () {

			});
			t4.fadeOut('100', function () {

			});
			t3.fadeOut('100', function () {

			});
		})
		.on("slid.bs.carousel", "#myCarousel", function (obj) {
			var active = $(obj.currentTarget).find(".item.active");
			var ht = $('.ht');
			var isocp1 = ht.find("#isocp1");
			var isocp2 = ht.find("#isocp2");
			var xline = ht.find("#x-line");
			var CNM = ht.find("#CNM");
			var FZYXJW = ht.find("#FZYXJW");
			var FZYXJW2 = ht.find("#FZYXJW2");
			var FZYXJW2 = ht.find("#FZYXJW2");
			isocp1.html(active.attr("data-isocp1"));
			isocp2.html(active.attr("data-isocp2"));
			CNM.html(active.attr("data-CNM"));
			FZYXJW.html(active.attr("data-FZYXJW"));
			FZYXJW2.html(active.attr("data-FZYXJW2"));
			xline.html(active.attr("data-x-line"));
			var ht = $('.ht');
			var t1 = ht.find('.isocp');
			var t2 = ht.find('.CNM');
			var t3 = ht.find('.FZYXJW');
			var t4 = ht.find('.x-line');
			console.log(t4);
			t1.fadeIn('50', function () {
				t4.fadeIn('50', function () {
					t2.fadeIn('50', function () {
						t3.fadeIn('50', function () {});
					});
				});
			});

		})
		.on("click", "#ip", function () { //珠海又一城地图导航
			var r = confirm("您确定要离开此页面,跳转到百度地图导航吗？")
			if (r == true) {
				window.open('map.html');
			} else {
				return false;
			}
		})
		//loading

		//澳门
		.on("mouseover", ".mc", function () {
			$(".mc").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".mc", function () {
			$(".mc").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})
		.on("mouseover", ".ii2", function () {
			$(".mc").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".ii2", function () {
			$(".mc").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})

		//香港
		.on("mouseover", ".hk", function () {
			$(".hk").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".hk", function () {
			$(".hk").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})
		.on("mouseover", ".ii1", function () {
			$(".hk").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".ii1", function () {
			$(".hk").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})

		//珠海
		.on("mouseover", ".zh", function () {
			$(".zh").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".zh", function () {
			$(".zh").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})
		.on("mouseover", ".ii3", function () {
			$(".zh").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".ii3", function () {
			$(".zh").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})
		.on("mouseover", ".in", function () {
			$(".in").css({
				'-moz-transform': 'scale(1.1,1.1)',
				'-webkit-transform': 'scale(1.1,1.1)',
				'-o-transform': 'scale(1.1,1.1)'
			});
		})
		.on("mouseout", ".in", function () {
			$(".in").css({
				'-moz-transform': 'scale(1,1)',
				'-webkit-transform': 'scale(1,1)',
				'-o-transform': 'scale(1,1)'
			});
		})
	//

});