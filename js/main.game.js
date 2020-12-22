var randomColor;
		var score = 0;
		var dung = 0; //5/5 to level up!
		var ans = "";
		var width = 300; //cua timerr
		var i = 0;
		var tick_left = 50;
		var vuong_default = 2; //so o vuong mac dinh khi khoi tao
		var them_vuong = 0; //dung de tang so hinh vuong khi len cap
		//Handle event
		var btn_start = document.getElementById("gamelabel");
		btn_start.addEventListener("click", start_game)
		var elem = document.getElementById("progress");
		function start_game() {
			btn_start.style.display = "none";
			default_right();		
			color_random(vuong_default);
			//time_left();
		}
		
		function default_right() {
			document.getElementById("text-correct").innerHTML = "0/5 - Đúng";
			document.getElementById("level-num").innerHTML = 0;
			document.getElementById("progress").style.width = "300px";
		}
		
		function set_right() {
			document.getElementById("text-correct").innerHTML = dung + "/5 - Đúng";
		}
		
		function reset_time() {
			document.getElementById("progress").style.width = "300px";
			width = 300;
		}
		
		function color_random(total) {
			var i;
			var new_block = document.getElementById("game-space");
			for (i=0; i < total; i++) {
				randomColor =  Math.floor(Math.random()*16777215).toString(16);
				ans = randomColor;
				document.getElementById("color-main").style.backgroundColor  = "#" + randomColor;
				new_block.innerHTML += "<div id='block' class='block block-small' onClick='click_pos("+total+", \"" +ans+"\")' style='background-color:#"+randomColor+";'></div>";
			}
			
		}
		function click_pos(total, dapanclick) {
		total = vuong_default + them_vuong; //co the bi du thua 1 so cai, nhung update sau.
		check_ans(dapanclick);
		//Clear game old
		document.getElementById("game-space").innerHTML = "";
		//Doi mau tiep sau do random
			color_random(total);
			random_pos();
		}
		function random_pos() {
			var mix_pos = document.querySelectorAll("div.block-small");
			var topX = Math.floor((Math.random() * 400) + 1) + "px";
			var leftY = Math.floor((Math.random() * 370) + 1) + "px";

			 $('#block').css('margin-left', leftY);
			$('#block').css('margin-top', topX);
		}
		
		function check_ans(dapanclick) {
			//Turn on timer
			if (i == 0) {
				i = 1;
				var id = setInterval(frame, tick_left);
			}
			//Check dapan
			if (dapanclick == ans) {
				if (dung >= 5) {
					score += 1;
					dung = 0;
					//Tang cap ra value
					document.getElementById("level-num").innerHTML = score;
					//Check de nang cap do kho
					clearInterval(id); //de dung dong ho va giam tick time
					reset_time();
					dokho_uplevel();
					//Khoi tao lai dong ho		
					if (i == 0) {
						i = 1;
						var id = setInterval(frame, tick_left);
					}
				} else {
					dung += 1;
					set_right();
					//Dat lai time
					reset_time();
					
				}
			} else {
				if (dung <=0) { //Neu diem nho nhat
					//Msg gameover
					alert("Game Over!");
					location.reload();
				} else { //Con diem dung
					dung -= 1;
					set_right();
				}
			}
			
			//Cua dong ho
					function frame() {
					  if (width <=0) {
						clearInterval(id); //Dung dong ho
						alert("Game Over!");
						location.reload();
						i = 0;
					  } else {
						width--;
						elem.style.width = width + "px";
					  }	
					}
		}
		
		function dokho_uplevel() { //dat thuoc tinh level moi
			if (score == 1) {
				i = 0;
				them_vuong += 1;
				tick_left -= 1;
			}
			if (score == 3) {
				i = 0;
				them_vuong += 1;
				tick_left -= 2;
			}
			if (score == 5) {
				i = 0;
				them_vuong += 1;
				tick_left -= 1;
			}
			
			if (score == 8) {
				i = 0;
				them_vuong += 0;
				tick_left -= 2;
			}
			
			if (score == 10) {
				i = 0;
				them_vuong += 0;
				tick_left -= 2;
			}
			
			if (score == 15) {
				i = 0;
				them_vuong += 1;
				tick_left -= 4;
			}
			
			if (score == 20 || score == 25) {
				i = 0;
				them_vuong += 1;
				tick_left -= 2;
			}
			
			if (score == 30 || score == 35) {
				i = 0;
				them_vuong += 0;
				tick_left -= 4;
			}
			
			
			if (score == 40) {
				i = 0;
				them_vuong += 1;
				tick_left -= 5;
			}
			
			if (score == 42) {
				i = 0;
				them_vuong += 0;
				tick_left -= 5;
			}
			
			if (score == 45) {
				i = 0;
				them_vuong += 0;
				tick_left -= 5;
			}
			
			if (score == 48) {
				i = 0;
				them_vuong += 1;
				tick_left -= 5;
			}
			
			if (score == 49) {
				i = 0;
				them_vuong += 1;
				tick_left -= 4;
			}
			
			if (score == 50) {
				alert("Game Win!");
				location.reload();
			}
		}