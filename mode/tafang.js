'use strict';
game.import('mode',function(lib,game,ui,get,ai,_status){
	return {
		name:'tafang',
		canvasUpdates2:[],
		hiddenCharacters:[],
		start:function(){
			"step 0"
			lib.init.css(lib.assetURL+'layout/mode','chess');
			lib.init.css(lib.assetURL+'layout/mode','tafang');
			// 不再加载 chess，所有依赖已在 tafang.js 中定义

			"step 1"
			if(get.is.phoneLayout()&&lib.config.touchscreen&&
				!lib.config.show_round_menu&&
				!['system','menu'].contains(lib.config.swipe_left)&&
				!['system','menu'].contains(lib.config.swipe_right)&&
				!['system','menu'].contains(lib.config.swipe_up)){
				ui.roundmenu.style.display='';
			}
			if(lib.config.player_border=='normal'&&(lib.config.layout=='long'||lib.config.layout=='long2')){
				ui.arena.classList.add('lslim_player');
			}
			// 所有 element/ui/game/get/skill 已在 tafang.js 内直接定义

			"step 2"
			var result='basic_medium';
			_status.map=lib.tafang.map[result];
			_status.mapname=result;
			ui.chesssheet=document.createElement('style');
			document.head.appendChild(ui.chesssheet);
			var playback=localStorage.getItem(lib.configprefix+'playback');
			lib.mechlist=[];
			for(var i in lib.characterPack.mode_tafang){
				if(i.indexOf('tafang_mech_')==0){
					lib.characterPack.mode_tafang[i][3].push(i+'_skill');
					lib.mechlist.push(i);
				}
				lib.character[i]=lib.characterPack.mode_tafang[i];
				if(!lib.character[i][4]){
					lib.character[i][4]=[];
				}
			}
			ui.create.cardsAsync();
			game.finishCards();
			game.addGlobalSkill('autoswap');
			ui.chessContainer=ui.create.div('#chess-container',ui.arena);
			lib.setScroll(ui.chessContainer);
			ui.chess=ui.create.div('#chess',ui.chessContainer);
			ui.canvas2=document.createElement('canvas');
			ui.canvas2.id='canvas2';
			ui.chess.appendChild(ui.canvas2);
			ui.ctx2=ui.canvas2.getContext('2d');
			game.me=ui.create.player();
			if(playback){
				for(var i in lib.characterPack){
					for(var j in lib.characterPack[i]){
						lib.character[j]=lib.character[j]||lib.characterPack[i][j];
					}
				}
				game.pause();
				ui.system.style.display='none';
				_status.playback=playback;
				localStorage.removeItem(lib.configprefix+'playback');
				var store=lib.db.transaction(['video'],'readwrite').objectStore('video');
				store.get(parseInt(playback)).onsuccess=function(e){
					if(e.target.result){
						event.video=e.target.result.video;
						game.resume();
					}
					else{
						alert('播放失败：找不到录像');
						game.reload();
					}
				}
			}
			_status.mylist=[];
			_status.enemylist=[];

			"step 3"
			ui.arena.classList.add('chess');
			if(event.video){
				for(var ii=0;ii<event.video.length;ii++){
					if(event.video[ii].type=='init'){
						_status.mapname=event.video[ii].content;
						break;
					}
				}
				_status.map=lib.tafang.map[_status.mapname];
				game.playerMap=lib.posmap;
			}
			ui.chesswidth=_status.map.size[0];
			ui.chessheight=_status.map.size[1];
			game.initChess();

			var grids=[];
			var gridnum=ui.chessheight*ui.chesswidth;
			for(var i=0;i<gridnum;i++){
				grids.push(i);
			}
			event.obs=[];
			if(!event.video){
				var tafanglist=[0,2,3,5,6,8,9,11,12];
				for(var i=0;i<ui.chessheight-1;i++){
					for(var j=0;j<ui.chesswidth;j++){
						if(i>=8&&j!=0&&j!=ui.chesswidth-1) continue;
						if(tafanglist.contains(j)){
							var cg=i*ui.chesswidth+j;
							grids.remove(cg);
							game.addObstacle(cg.toString(),false);
							event.obs.push(cg.toString());
						}
					}
				}
				for(var i=0;i<ui.chesswidth;i++){
					switch(ui.chesswidth){
						case 6:if(i==2||i==3) continue;break;
						case 9:if(i==3||i==4||i==5) continue;break;
						case 12:if(i==4||i==5||i==6||i==7) continue;break;
					}
					var cg=(ui.chessheight-1)*ui.chesswidth+i;
					grids.remove(cg);
					game.addObstacle(cg.toString(),false);
					event.obs.push(cg.toString());
				}
			}

			if(lib.config.show_handcardbutton){
				lib.setPopped(ui.create.system('手牌',null,true),function(){
					var uiintro=ui.create.dialog('hidden');
					var added=false;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==game.me.side&&game.players[i]!=game.me){
							added=true;
							uiintro.add(get.translation(game.players[i]));
							var cards=game.players[i].getCards('h');
							if(cards.length){
								uiintro.addSmall(cards,true);
							}
							else{
								uiintro.add('（无）');
							}
						}
					}
					if(!added){
						uiintro.add('无队友');
					}
					return uiintro;
				},220);
			}

			ui.create.me();
			ui.create.fakeme();

			ui.chessinfo=ui.create.div('.fakeme.player',ui.me,function(e){
				e.stopPropagation();
			});
			ui.create.div(ui.chessinfo);
			lib.setScroll(ui.chessinfo.firstChild);

			game.arrangePlayers();

			"step 4"
			ui.control.style.display='';
			if(event.video){
				game.playVideoContent(event.video);
				game.setChessInfo();
				return;
			}
			_status.videoInited=true;
			game.addVideo('init',null,_status.mapname);
			if(game.friendZhu){
				game.addVideo('identityText',game.friendZhu,'将');
				game.addVideo('identityText',game.enemyZhu,'帅');
				if(game.friendViceZhu){
					game.addVideo('identityText',game.friendViceZhu,'仕');
					game.addVideo('identityText',game.enemyViceZhu,'士');
				}
			}
			if(event.obs){
				game.addVideo('initobs',null,event.obs);
			}

			var list=[];
			for(i in lib.character){
				if(i.indexOf('treasure_')==0) continue;
				if(i.indexOf('tafang_mech_')==0) continue;
				if(lib.character[i][4].contains('minskin')) continue;
				if(lib.config.forbidchess.contains(i)) continue;
				if(lib.character[i][4].contains('boss')) continue;
				if(lib.filter.characterDisabled(i)) continue;
				list.push(i);
			}
			list.randomSort();
			_status.characterList=list;
			_status.friends=[];
			_status.enemies=[];
			_status.turnCount=0;
			_status.turnTotal=parseInt(get.config('tafang_turn'));
			ui.turnCount=ui.create.system('',null,true);
			_status.remainingCount=0;

			_status.tafangend=[];
			for(var i=0;i<ui.chesswidth;i++){
				var tafangdes=ui.chesswidth*(ui.chessheight-1)+i;
				if(!lib.posmap[tafangdes]){
					_status.tafangend.push(tafangdes.toString());
				}
			}
			lib.init.onfree();
			event.trigger('gameStart');
			game.phaseLoopTafang();
		},
		element:{
			content:{
				
				replaceChessPlayer:function(){
					'step 0'
					if(get.config('additional_player')){
						if(!event.enemy&&!_status.auto&&(game.me.isDead()||get.config('single_control'))){
							event.dialog=ui.create.dialog('选择替补角色',[_status.additionallist.randomGets(parseInt(get.config('choice_number'))),'character']);
							event.filterButton=function(){return true;};
							event.player=game.me;
							event.forced=true;
							event.forceDie=true;
							event.custom.replace.confirm=function(){
								event.playername=ui.selected.buttons[0].link;
								event.dialog.close();
								_status.additionallist.remove(event.playername);
								if(ui.confirm) ui.confirm.close();
								game.resume();
							}
							game.check();
							game.pause();
						}
						else{
							event.playername=_status.additionallist.randomRemove();
						}
					}
					else if(!event.enemy&&get.config('seat_order')=='指定'&&!_status.auto&&_status.replacelist.length){
						_status.replacelist.add(event.playername);
						event.dialog=ui.create.dialog('选择替补角色',[_status.replacelist,'character']);
						event.filterButton=function(){return true;};
						event.player=game.me;
						event.forced=true;
						event.forceDie=true;
						event.custom.replace.confirm=function(){
							event.playername=ui.selected.buttons[0].link;
							event.dialog.close();
							_status.replacelist.remove(event.playername);
							if(ui.confirm) ui.confirm.close();
							game.resume();
						}
						game.check();
						game.pause();
					}
					else{
						game.delay();
					}
					if(game.me.isDead()){
						event.swapNow=true;
					}
					'step 1'
					game.uncheck();
					var player=game.addChessPlayer(event.playername,event.enemy);
					game.log(player,'加入游戏');
					player.chessFocus();
					player.playerfocus(1000);
					game.delay(2);
					if(event.swapNow&&player.side==game.me.side){
						game.modeSwapPlayer(player);
					}
				},
				chooseToMove:function(){
					"step 0"
					if(!player.movable(0,1)&&!player.movable(0,-1)&&
						!player.movable(1,0)&&!player.movable(-1,0)){
						return;
					}
					event.switchToAuto=function(){
						if(ui.movegrids){
							while(ui.movegrids.length){
								ui.movegrids.shift().delete();
							}
						}
						var list=[];
						var randomMove=['moveUp','moveDown','moveLeft','moveRight'];
						var getMove=function(move){
							switch(move){
								case 'moveUp':return 'moveDown';
								case 'moveDown':return 'moveUp';
								case 'moveLeft':return 'moveRight';
								case 'moveRight':return 'moveLeft';
							}
						}
						var dontMove=null;
						for(var iwhile=0;iwhile<num;iwhile++){
							if(get.mode()=='tafang'&&_status.enemies.contains(player)){
								var targets2=[];
								for(var i=0;i<ui.chesswidth;i++){
									var tafangdes=ui.chesswidth*(ui.chessheight-1)+i;
									if(!lib.posmap[tafangdes]){
										targets2.push(tafangdes);
									}
								}
								targets2.sort(function(a,b){
									return Math.abs(a%ui.chesswidth-player.getXY()[0])-Math.abs(b%ui.chesswidth-player.getXY()[0]);
								});
								var tafangmoved=false;
								for(var i=0;i<targets2.length;i++){
									if(player.moveTowards(targets2[i].toString())){
										tafangmoved=true;
										break;
									}
								}
								if(tafangmoved){
									event.moved=true;
								}
							}
							else{
								var targets=game.filterPlayer(function(current){
									return current.side!=player.side&&current.isIn();
								});
								targets.sort(function(a,b){
									return get.distance(player,a)-get.distance(player,b);
								});
								while(targets.length){
									var target=targets.shift();
									var moveTowards=player.moveTowards(target,[dontMove]);
									if(moveTowards){
										dontMove=getMove(moveTowards);
										randomMove.remove(dontMove);
										event.moved=true;break;
									}
									if(targets.length==0){
										if(randomMove.length){
											var list=randomMove.slice(0);
											while(list.length){
												var thismove=list.randomRemove();
												if(player[thismove]()){
													event.moved=true;
													dontMove=getMove(thismove);
													randomMove.remove(dontMove);
													break;
												}
												if(list.length==0) return;
											}
										}
										else{
											return;
										}
									}
								}
								if(lib.skill._chessmove.ai.result.player(player)<=0) break;
							}
						}
					};
					if(event.isMine()){
						if(event.prompt){
							event.dialog=ui.create.dialog(event.prompt);
						}
						var resume=function(){
							if(ui.movegrids){
								while(ui.movegrids.length){
									ui.movegrids.shift().delete();
								}
							}
							event.result={bool:false};
							game.resume();
						};
						if(event.phasing){
							event.custom.replace.confirm=resume;
						}
						else{
							event.control=ui.create.control('取消',resume);
						}
						game.pause();
						_status.imchoosing=true;
						ui.movegrids=[];
						player.createRangeShadow(num,true);
						for(var i=0;i<ui.movegrids.length;i++){
							var grid=ui.movegrids[i];
							if(game.isChessNeighbour(grid,player)) continue;
							for(var j=0;j<ui.movegrids.length;j++){
								if(game.isChessNeighbour(grid,ui.movegrids[j])) break;
							}
							if(j==ui.movegrids.length) grid.remove();
						}
					}
					else{
						event.switchToAuto();
					}
					"step 1"
					_status.imchoosing=false;
					if(event.moved){
						game.delay();
						event.result={
							bool:true,
							move:player.dataset.position
						}
					}
					if(!event.result){
						event.result={
							bool:false
						}
					}
					if(event.control){
						event.control.close();
					}
					if(event.dialog){
						event.dialog.close();
					}
				},
				chessMechRemove:function(){
					game.treasures.remove(player);
					setTimeout(function(){
						player.delete();
					},500);
					delete lib.posmap[player.dataset.position];
					game.addVideo('deleteChessPlayer',player);
					game.addObstacle(player.dataset.position);
					game.log(get.translation(player)+'使用期限已到');
				}
			},
			card:{
				moveTo:function(player){
					var rect1=this.getBoundingClientRect();
					var rect2=player.getBoundingClientRect();
					var dx=rect2.left+rect2.width/2-(rect1.left+rect1.width/2);
					var dy=rect2.top+rect2.height/2-(rect1.top+rect1.height/2);
					this.style.transform+=' translate('+dx+'px,'+dy+'px)';
				},
				moveTox:function(player,method){
					this.fixed=true;
					if(this.parentNode==ui.arena){
						var rect=player.getBoundingClientRect();
						this.style.left=(rect.left+8)+'px';
						this.style.top=(rect.top+8)+'px';
					}
					else{
						this.style.left='';
						this.style.top='';
						this.dataset.position=player.dataset.position;
					}
					if(method=='flip'){
						this.style.transition='all 0.5s';
						this.style.transform='rotate'+(Math.random()<0.5?'X':'Y')+'(180deg) perspective(1000px)';
					}
					else if(method=='rotate'){
						this.style.transition='all 0.5s';
						this.style.transform='rotate(180deg)';
					}
					else{
						this.style.transition='all 0.5s';
						this.style.transform='';
					}
					return this;
				},
			},
			player:{
				// ========== 从 chess 迁移（tafang 需要用到） ==========
				$dust:function(){
					game.broadcast(function(player){
						if(!lib.config.low_performance){
							player.$dust();
						}
					},this);
					game.addVideo('flame',this,'dust');
					var left=this.offsetLeft-ui.arena.offsetLeft;
					var top=this.offsetTop-ui.arena.offsetTop;
					if(this.classList.contains('minskin')){ top+=15; }
					top-=25;
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,700,'dust');
				},
				$coin:function(){
					game.broadcast(function(player){
						if(!lib.config.low_performance){ player.$coin(); }
					},this);
					game.addVideo('flame',this,'coin');
					var left=this.offsetLeft-ui.arena.offsetLeft;
					var top=this.offsetTop-ui.arena.offsetTop;
					if(this.classList.contains('minskin')){ top+=15; }
					top-=25;
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,700,'coin');
				},
				$epic:function(time){
					time=time||700;
					game.addVideo('flame',this,'epic');
					var left=this.offsetLeft-ui.arena.offsetLeft;
					var top=this.offsetTop-ui.arena.offsetTop;
					if(this.classList.contains('minskin')){ top+=15; }
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,time,'epic');
				},
				$rare2:function(){
					game.addVideo('flame',this,'rare2');
					var rect=this.getBoundingClientRect();
					var left=rect.left, top=rect.top+15;
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,700,'rare');
				},
				$epic2:function(){
					game.addVideo('flame',this,'epic2');
					var rect=this.getBoundingClientRect();
					var left=rect.left, top=rect.top+15;
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,700,'epic');
				},
				$legend2:function(){
					game.addVideo('flame',this,'legend2');
					var rect=this.getBoundingClientRect();
					var left=rect.left, top=rect.top+15;
					game.animate.flame(left+this.offsetWidth/2,
						top+this.offsetHeight-30,700,'legend');
				},

				// ========== tafang 原有的 player 方法 ==========
				createRangeShadow:function(num,move){
					num++;
					var shadows=this.parentNode.getElementsByClassName('playergrid');
					while(shadows.length){
						shadows[0].remove();
					}
					var grids=[];
					for(var i=1-num;i<num;i++){
						for(var j=1-num+Math.abs(i);j<num-Math.abs(i);j++){
							if(this.movable(i,j)){
								var grid=ui.create.playergrid(this,i,j);
								if(grid){
									grids.push(grid);
									if(typeof move=='function'){
										grid.listen(move);
									}
									else if(move){
										grid.classList.add('pointerdiv');
										grid.listen(ui.click.playergrid);
										ui.movegrids.push(grid);
									}
									else{
										grid.classList.add('temp');
									}
								}
							}
						}
					}
					return grids;
				},
				chooseToMove:function(num,prompt){
					var next=game.createEvent('chooseToMove');
					next.num=num||1;
					next.player=this;
					next.setContent('chooseToMove');
					next.prompt=prompt;
					return next;
				},
				move:function(x,y){
					var xy=this.getXY();
					return this.moveTo(x+xy[0],y+xy[1]);
				},
				moveTo:function(x,y){
					game.addVideo('moveTo',this,[x,y]);
					if(x>=ui.chesswidth){
						x=ui.chesswidth-1;
					}
					if(y>=ui.chessheight){
						y=ui.chessheight-1;
					}

					var pos=y*ui.chesswidth+x;
					if(!lib.posmap[pos]){
						delete lib.posmap[this.dataset.position];
						// this.changeSeat(pos,false);
						this.dataset.position=pos;
						lib.posmap[pos]=this;
						this.chessFocus();
					}

					if(!_status.video){
						if(_status.tafangend.contains(this.dataset.position)){
							if(_status.enemies.contains(this)){
								game.over(false);
							}
							else{
								this.delete();
								delete lib.posmap[this];
								game.players.remove(this);
								_status.friends.remove(this);
								this.classList.add('dead');
								if(_status.roundStart==this){
									_status.roundStart=player.next||player.getNext()||game.players[0];
								}
								if(this==game.me){
									if(ui.confirm){
										ui.confirm.close();
									}
									if(_status.friends.length==0){
										ui.fakeme.hide();
										this.node.handcards1.delete();
										this.node.handcards2.delete();
										game.me=ui.create.player();
										game.me.side=false;
										game.addVideo('removeTafangPlayer');
									}
									else{
										game.modeSwapPlayer(_status.friends[0]);
									}
								}
								for(var i=0;i<ui.phasequeue.length;i++){
									if(ui.phasequeue[i].link==this){
										ui.phasequeue[i].remove();
										ui.phasequeue.splice(i,1);
										break;
									}
								}
								game.addVideo('deleteChessPlayer',this);
							}
						}
					}
					return this;
				},
				canMoveTowards:function(target){
					var fxy=this.getXY();
					var txy=target.getXY();
					var dx=txy[0]-fxy[0];
					var dy=txy[1]-fxy[1];
					if(dx<0&&this.movable(-1,0)) return true;
					if(dx>0&&this.movable(1,0)) return true;
					if(dy<0&&this.movable(0,-1)) return true;
					if(dy>0&&this.movable(0,1)) return true;
					return false;
				},
				moveTowards:function(target,forbid){
					var fxy=this.getXY();
					var txy;
					if(Array.isArray(target)){
						txy=target;
					}
					else if(typeof target=='string'){
						var pos=parseInt(target);
						txy=[pos%ui.chesswidth,Math.floor(pos/ui.chesswidth)];
					}
					else{
						txy=target.getXY();
					}
					var dx=txy[0]-fxy[0];
					var dy=txy[1]-fxy[1];
					forbid=forbid||[];
					if(Math.abs(dx)>Math.abs(dy)){
						if(dx<0){
							if(!forbid.contains('moveLeft')&&this.movable(-1,0)){
								this.moveLeft();
								return 'moveLeft';
							}
						}
						else if(dx>0){
							if(!forbid.contains('moveRight')&&this.movable(1,0)){
								this.moveRight();
								return 'moveRight';
							}
						}
						if(dy<0){
							if(!forbid.contains('moveUp')&&this.movable(0,-1)){
								this.moveUp();
								return 'moveUp';
							}
						}
						else if(dy>0){
							if(!forbid.contains('moveDown')&&this.movable(0,1)){
								this.moveDown();
								return 'moveDown';
							}
						}
					}
					else{
						if(dy<0){
							if(!forbid.contains('moveUp')&&this.movable(0,-1)){
								this.moveUp();
								return 'moveUp';
							}
						}
						else if(dy>0){
							if(!forbid.contains('moveDown')&&this.movable(0,1)){
								this.moveDown();
								return 'moveDown';
							}
						}
						if(dx<0){
							if(!forbid.contains('moveLeft')&&this.movable(-1,0)){
								this.moveLeft();
								return 'moveLeft';
							}
						}
						else if(dx>0){
							if(!forbid.contains('moveRight')&&this.movable(1,0)){
								this.moveRight();
								return 'moveRight';
							}
						}
					}
					return false;
				},
				chessFocus:function(){
					game.addVideo('chessFocus',this);
					if(ui.chess._chessdrag) return;
					if(_status.chessscrolling) return;
					var player=this;
					var dx=0,dy=0;

					if(player.offsetLeft-ui.chessContainer.scrollLeft<14){
						dx=player.offsetLeft-ui.chessContainer.scrollLeft-14;
					}
					else if(player.offsetLeft-ui.chessContainer.scrollLeft>ui.chessContainer.offsetWidth-134){
						dx=player.offsetLeft-ui.chessContainer.scrollLeft-ui.chessContainer.offsetWidth+134;
					}
					if(player.offsetTop-ui.chessContainer.scrollTop<14){
						dy=player.offsetTop-ui.chessContainer.scrollTop-14;
					}
					else if(player.offsetTop+ui.chess.offsetTop-ui.chessContainer.scrollTop>ui.chessContainer.offsetHeight-134){
						dy=player.offsetTop+ui.chess.offsetTop-ui.chessContainer.scrollTop-ui.chessContainer.offsetHeight+134;
					}
					if(_status.currentChessFocus){
						cancelAnimationFrame(_status.currentChessFocus);
					}
					var count=lib.config.low_performance?6:12;
					var ddx=Math.floor(dx/count);
					var ddy=Math.floor(dy/count);
					if(dx||dy){
						var chessFocus=function(){
							if(count--){
								ui.chessContainer.scrollLeft+=ddx;
								ui.chessContainer.scrollTop+=ddy;
								_status.currentChessFocus=requestAnimationFrame(chessFocus);
							}
							else{
								ui.chessContainer.scrollLeft+=dx%12;
								ui.chessContainer.scrollTop+=dy%12;
								cancelAnimationFrame(_status.currentChessFocus);
								delete _status.currentChessFocus;
							}
						};
						_status.currentChessFocus=requestAnimationFrame(chessFocus);
					}
				},
				getXY:function(){
					var pos=parseInt(this.dataset.position);
					var x=pos%ui.chesswidth;
					var y=Math.floor(pos/ui.chesswidth);
					return [x,y];
				},
				getDataPos:function(x,y){
					var xy=this.getXY();
					if(typeof x!='number') x=0;
					if(typeof y!='number') y=0;
					x+=xy[0];
					y+=xy[1];
					return x+y*ui.chesswidth;
				},
				getNeighbour:function(x,y){
					var xy=this.getXY();
					if(xy[0]+x<0) return null;
					if(xy[1]+y<0) return null;
					if(xy[0]+x>=ui.chesswidth) return null;
					if(xy[1]+y>=ui.chessheight) return null;
					return lib.posmap[this.getDataPos(x,y)]||null;
				},
				getNeighbours:function(){
					var players=[];
					for(var i=0;i<game.players.length;i++){
						if(game.isChessNeighbour(game.players[i],this)){
							players.push(game.players[i]);
						}
					}
					return players;
				},
				movable:function(x,y){
					var xy=this.getXY();
					if(xy[0]+x<0) return false;
					if(xy[1]+y<0) return false;
					if(xy[0]+x>=ui.chesswidth) return false;
					if(xy[1]+y>=ui.chessheight) return false;
					return !this.getNeighbour(x,y);
				},
				moveRight:function(){
					if(this.movable(1,0)){
						this.move(1,0);
						return true;
					}
					return false;
				},
				moveLeft:function(){
					if(this.movable(-1,0)){
						this.move(-1,0);
						return true;
					}
					return false;
				},
				moveUp:function(){
					if(this.movable(0,-1)){
						this.move(0,-1);
						return true;
					}
					return false;
				},
				moveDown:function(){
					if(this.movable(0,1)){
						this.move(0,1);
						return true;
					}
					return false;
				},
				dieAfter:function(source){
					var player=this;
					if(_status.friends){
						_status.friends.remove(this);
					}
					if(_status.enemies){
						_status.enemies.remove(this);
					}
					delete lib.posmap[player.dataset.position];
					setTimeout(function(){
						player.delete();
					},500);
					for(var i=0;i<ui.phasequeue.length;i++){
						if(ui.phasequeue[i].link==player){
							ui.phasequeue[i].remove();
							ui.phasequeue.splice(i,1);
							break;
						}
					}
					if(player==game.me){
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].side==player.side){
								game.modeSwapPlayer(game.players[i]);
							}
						}
					}
					if(_status.friends.length==0){
						ui.fakeme.hide();
						this.node.handcards1.delete();
						this.node.handcards2.delete();
						game.me=ui.create.player();
						game.me.side=false;
						game.addVideo('removeTafangPlayer');
					}
				},
				$draw_old:function(num){
					var cards;
					if(get.itemtype(num)=='cards'){
						cards=num;
					}
					else if(get.itemtype(num)=='card'){
						cards=[num];
					}
					if(cards){
						game.addVideo('chessgainmod',this,get.cardsInfo(num));
					}
					else if(!num||typeof num=='number'){
						game.addVideo('chessgainmod',this,num);
					}

					return this.$gainmod(num);
				},
				$gainmod:function(num){
					var cards,node;
					if(get.itemtype(num)=='cards'){
						cards=num;
						num=cards.length;
					}
					else if(get.itemtype(num)=='card'){
						cards=[num];
						num=1;
					}
					if(cards){
						cards=cards.slice(0);
						node=cards.shift().copy('thrown','hidden');
					}
					else{
						node=ui.create.div('.card.thrown.hidden');
					}
					node.fixed=true;
					this.$randomMove(node,130,0);
					var ot=node.style.transform;
					if(node.style.transform&&node.style.transform!='none'){
						node.style.transform+=' scale(0.6)';
					}
					else{
						node.style.transform='scale(0.6)';
					}
					node.dataset.position=this.dataset.position;
					this.parentNode.appendChild(node);
					ui.refresh(node);
					node.show();
					node.style.transform=ot;
					setTimeout(function(){
						node.style.transform='';
						node.delete();
					},500);
					var that=this;
					if(num&&num>1){
						if(cards){
							that.$gain(cards,null,false)
						}
						else{
							that.$gain(num-1,null,false)
						}
					}
				},
				$throw:function(card,time,init){
					if(init!==false){
						if(get.itemtype(card)!='cards'){
							if(get.itemtype(card)=='card'){
								card=[card];
							}
							else{
								return;
							}
						}
						game.addVideo('throw',this,[get.cardsInfo(card),time]);
					}
					this.chessFocus();
					if(get.itemtype(card)=='cards'){
						for(var i=0;i<card.length;i++){
							this.$throw(card[i],time,false);
						}
					}
					else{
						if(card==undefined||card.length==0) return;
						var node=card.copy('thrown','hidden');
						node.dataset.position=this.dataset.position;
						this.parentNode.appendChild(node);
						ui.refresh(node);
						node.show();
						this.$randomMove(node,130,0);
						if(time!=undefined){
							node.fixed=true;
							setTimeout(function(){node.delete()},time);
						}
					}
				},
				$givemod:function(card,player){
					this.chessFocus();
					var from=this;
					if(get.itemtype(card)=='cards'){
						for(var i=0;i<card.length;i++){
							from.$givemod(card[i],player);
						}
					}
					else if(typeof card=='number'&&card>=0){
						for(var i=0;i<card;i++){
							from.$givemod('',player);
						}
					}
					else{
						var node;
						if(get.itemtype(card)=='card'){
							node=card.copy('card','thrown',false);
						}
						else{
							node=ui.create.div('.card.thrown');
						}

						node.dataset.position=this.dataset.position;
						node.fixed=true;
						node.hide();

						this.parentNode.appendChild(node);
						ui.refresh(node);
						node.show();

						this.$randomMove(node,130,0);

						setTimeout(function(){
							lib.element.card.moveTo.call(node,player);
							setTimeout(function(){
								node.delete();
							},200);
							// node.removeAttribute('style');
							// node.dataset.position=player.dataset.position;
							// node.delete();
						},700);
					}
				},
				$throwxy:function(card,left,top,transform){
					var node=card.copy('thrown','thrownhighlight');
					var rect=this.getBoundingClientRect();
					node.style.left=(rect.left+8)+'px';
					node.style.top=(rect.top+8)+'px';
					node.hide();
					node.style.transitionProperty='left,top,opacity';
					if(transform){
						node.style.transform='rotate('+(Math.random()*16-8)+'deg)';
					}
					ui.arena.appendChild(node);
					ui.refresh(node);
					node.show();
					node.style.left=left;
					node.style.top=top;
					return node;
				},
				$phaseJudge:function(card){
					game.addVideo('phaseJudge',this,get.cardInfo(card));
					var clone=card.copy('thrown',this.parentNode).animate('judgestart');
					var player=this;
					clone.style.opacity=0.6;
					clone.style.left=(Math.random()*100-50+ui.chessContainer.scrollLeft+ui.chessContainer.offsetWidth/2-52)+'px';
					clone.style.top=(Math.random()*80-40+ui.chessContainer.scrollTop+ui.chessContainer.offsetHeight/2-52-ui.chessContainer.offsetTop)+'px';
					game.delay();
					game.linexy([
						clone.offsetLeft+clone.offsetWidth/2,
						clone.offsetTop+clone.offsetHeight/2,
						player.offsetLeft+player.offsetWidth/2,
						player.offsetTop+player.offsetHeight/2
					],{opacity:0.5,dashed:true},true);
				},
				$randomMove:function(node,length,rand){
					if(!this.node.chessthrown){
						this.node.chessthrown=[];
					}
					var thrown=this.node.chessthrown;
					for(var i=0;i<thrown.length;i++){
						if(thrown[i].parentNode!=this.parentNode||
							thrown[i].classList.contains('removing')){
							thrown.splice(i--,1);
						}
					}
					thrown.push(node);

					var rect=this.getBoundingClientRect();
					var amax,amin;
					if(rect.left<=80){
						if(rect.top<=80){
							amin=-90;
							amax=0;
						}
						else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
							amin=0;
							amax=90;
						}
						else{
							amin=-90;
							amax=90;
						}
					}
					else if(rect.left+rect.width+80>=ui.chessContainer.offsetWidth){
						if(rect.top<=80){
							amin=180;
							amax=270;
						}
						else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
							amin=90;
							amax=180;
						}
						else{
							amin=90;
							amax=270;
						}
					}
					else if(rect.top<=80){
						amin=180;
						amax=360;
					}
					else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
						amin=0;
						amax=180;
					}
					else{
						var dx=ui.chessContainer.offsetWidth/2-(rect.left+rect.width/2);
						var dy=-ui.chessContainer.offsetHeight/2+(rect.top+rect.height/2);
						var ang=Math.abs(Math.atan(dy/dx))*180/Math.PI;
						if(dx<0){
							if(dy>0){
								ang=180-ang;
							}
							else{
								ang+=180;
							}
						}
						else if(dy<0){
							ang=360-ang;
						}
						amin=ang-180;
						amax=ang+180;
					}
					var da=(amax-amin)/(thrown.length*2);
					if(da>30&&thrown.length>1){
						amin+=(da-30)*thrown.length;
						da=30;
					}
					for(var i=0;i<thrown.length;i++){
						var lengthi=length+Math.random()*rand;
						var ang=amin+da*(2*i+1);
						ang*=Math.PI/180;
						var tx=lengthi*Math.cos(ang);
						var ty=-lengthi*Math.sin(ang);
						if(Math.abs(tx)<0.1){
							tx=0;
						}
						if(Math.abs(ty)<0.1){
							ty=0;
						}
						thrown[i].style.transform='translate('+tx+'px,'+ty+'px)';
					}
				},
			},
		},
		tafang:{
			map:{
				basic_small:{ name:'小型战场', size:[6,11], obstacle:[] },
				basic_medium:{ name:'中型战场', size:[9,11] },
				basic_large:{ name:'大型战场', size:[12,11] },
			}
		},
		init:function(){
			if(!lib.mode.tafang)lib.mode.tafang = {};
			lib.mode.tafang.name = '塔防';
			lib.mode.tafang.config = {
				update:function(config,map){
					// 如果需要根据难度动态显示其他选项，可以在这里处理
				},
				tafang_difficulty:{
					name:'游戏难度',
					init:'1',			// 默认值，改为 '3' 则可默认为困难
					item:{
						'0':'简单',
						'1':'普通',
						'2':'困难',
						'3':'极难',
					},
					restart:true,
					frequent:true,
					intro:'影响每轮的行动点数消耗和敌人生成速度',
				},
				tafang_turn:{
					name:'游戏回合数',
					init:'30',
					item:{
						'10':'10回合',
						'20':'20回合',
						'30':'30回合',
						'50':'50回合',
					},
					restart:true,
					frequent:true,
					intro:'坚持到指定回合数即获得胜利',
				},
			};
		},
		game:{
			minskin:true,
			singleHandcard:true,
			chess:true,
			treasures:[],
			obstacles:[],
			initChess:function(){
				ui.chess.style.height=148*ui.chessheight+'px';
				ui.chess.style.width=148*ui.chesswidth+'px';
				if(!lib.config.touchscreen){
					ui.chess.addEventListener('mousedown',function(e){
						if(Array.isArray(e.path)){
							for(var i=0;i<e.path.length;i++){
								var itemtype=get.itemtype(e.path[i]);
								if(itemtype=='button'||itemtype=='card'||itemtype=='player'){
									return;
								}
							}
						}
						this._chessdrag=[e,this.parentNode.scrollLeft,this.parentNode.scrollTop];
					});
					ui.chess.addEventListener('mouseleave',function(){
						this._chessdrag=null;
					});
					ui.chess.addEventListener('mouseup',function(){
						if(this._chessdrag){
							this._chessdrag=null;
						}
					});
					ui.chess.addEventListener('mousemove',function(e){
						if(this._chessdrag){
							this.parentNode.scrollLeft=this._chessdrag[1]-e.x+this._chessdrag[0].x;
							this.parentNode.scrollTop=this._chessdrag[2]-e.y+this._chessdrag[0].y;
							_status.clicked=true;
						}
						e.preventDefault();
					});
					ui.chessContainer.addEventListener('mousewheel',function(){
						if(_status.currentChessFocus){
							cancelAnimationFrame(_status.currentChessFocus);
							delete _status.currentChessFocus;
						}
					},{passive:true});
				}

				ui.chessscroll1=ui.create.div('.chessscroll.left',ui.chessContainer);
				ui.chessscroll2=ui.create.div('.chessscroll.right',ui.chessContainer);
				var chessscroll=function(){
					if(lib.config.touchscreen) return;
					var direction=this.direction;
					var speed=parseInt(get.config('chessscroll_speed'));
					if(!speed) return;
					var interval=setInterval(function(){
						ui.chessContainer.scrollLeft+=speed*direction;
					},16);
					_status.chessscrolling=interval;
				};
				var leavescroll=function(){
					if(_status.chessscrolling){
						clearInterval(_status.chessscrolling);
						delete _status.chessscrolling;
					}
				};
				ui.chessscroll1.direction=-1;
				ui.chessscroll1.addEventListener('mouseenter',chessscroll);
				ui.chessscroll1.addEventListener('mouseleave',leavescroll);

				ui.chessscroll2.direction=1;
				ui.chessscroll2.addEventListener('mouseenter',chessscroll);
				ui.chessscroll2.addEventListener('mouseleave',leavescroll);

				for(var i=0;i<ui.chesswidth;i++){
					for(var j=0;j<ui.chessheight;j++){
						var pos='[data-position="'+(i+j*ui.chesswidth)+'"]';
						ui.chesssheet.sheet.insertRule('#arena.chess #chess>.player'+pos+
						'{left:'+(14+i*148)+'px;top:'+(14+j*148)+'px}',0);
						ui.chesssheet.sheet.insertRule('#arena.chess #chess>.card'+pos+
						'{left:'+(22+i*148)+'px;top:'+(22+j*148)+'px}',0);
						ui.chesssheet.sheet.insertRule('#arena.chess #chess>.popup'+pos+
						'{left:'+(19+i*148)+'px;top:'+(142+j*148)+'px}',0);
					}
				}
			},
			getVideoName:function(){
				return [get.translation(game.me.name),'塔防模式'];
			},
			addChessPlayer:function(name,enemy,num,pos){
				if(typeof num!='number'){
					num=4;
				}
				var player=ui.create.player();
				player.getId();
				if(enemy=='treasure'){
					player.animate('judgestart');
					player.side=null;
					player.identity='neutral';
					player.setIdentity();
					player.node.identity.dataset.color='zhong';
					player.classList.add('treasure');
					player.node.hp.classList.add('treasure');
					player.life=6+Math.floor(Math.random()*6);
					game.treasures.add(player);
				}
				else{
					player.animate('start');
					if(enemy){
						player.side=true;
						player.setIdentity('enemy');
						player.identity='enemy';
					}
					else{
						player.side=false;
						player.setIdentity('friend');
						player.identity='friend';
					}
					player.node.identity.dataset.color=get.translation(player.side+'Color');
					game.players.push(player);
					// if(lib.config.animation){
					// 	setTimeout(function(){
					// 		player.$rare2();
					// 	},300);
					// }
				}
				ui.chess.appendChild(player);
				if(_status.video||(pos&&!lib.posmap[pos])){
					player.dataset.position=pos;
				}
				else{
					var grids=[];
					var gridnum=ui.chessheight*ui.chesswidth;
					for(var i=0;i<gridnum;i++){
						grids.push(i);
					}
					for(var i=0;i<game.players.length;i++){
						grids.remove(parseInt(game.players[i].dataset.position));
					}
					for(var i=0;i<game.obstacles.length;i++){
						grids.remove(parseInt(game.obstacles[i].dataset.position));
					}
					for(var i=0;i<game.treasures.length;i++){
						grids.remove(parseInt(game.treasures[i].dataset.position));
					}
					player.dataset.position=grids.randomGet();
				}
				lib.posmap[player.dataset.position]=player;
				game.addVideo('addChessPlayer',null,[name,enemy,num,player.dataset.position]);
				player.init(name);
				if(num&&!_status.video){
					player.directgain(get.cards(num));
				}
				game.arrangePlayers();
				player.chessFocus();
				if(game.me&&game.me.name){
					game.setChessInfo();
				}
				else if(game.players.length){
					game.setChessInfo(game.players[0]);
				}

				game.triggerEnter(player);

				return player;
			},
			replaceChessPlayer:function(name,enemy){
				var next=game.createEvent('replaceChessPlayer');
				next.playername=name;
				next.enemy=enemy;
				next.setContent('replaceChessPlayer');
			},
			removeTreasure:function(player){
				game.addVideo('removeTreasure',null,player.dataset.position);
				player.delete();
				delete lib.posmap[player.dataset.position];
				game.treasures.remove(player);
			},
			addObstacle:function(x,y){
				if(y!==false){
					game.addVideo('addObstacle',null,[x,y]);
				}
				var pos;
				if(typeof x=='string'){
					pos=x;
				}
				else{
					if(x>=ui.chesswidth){
						x=ui.chesswidth-1;
					}
					if(y>=ui.chessheight){
						y=ui.chessheight-1;
					}

					pos=y*ui.chesswidth+x;
				}
				if(!lib.posmap[pos]){
					var grid=ui.create.div('.player.minskin.obstacle',ui.chess).animate('start');
					grid.dataset.position=pos;
					grid.listen(ui.click.obstacle);
					lib.posmap[pos]=grid;
					game.obstacles.push(grid);
					return grid;
				}
				return null;
			},
			addTempObstacle:function(x,y,num){
				var node=game.addObstacle(x,y);
				if(node){
					game.colorObstacle(node,'blue');
					node.tempObstacle=num;
				}
			},
			removeObstacle:function(pos){
				if(get.is.div(pos)){
					pos=pos.dataset.position;
				}
				var node=lib.posmap[pos];
				if(node&&game.obstacles.contains(node)){
					game.addVideo('removeObstacle',null,pos);
					game.obstacles.remove(node);
					delete lib.posmap[pos];
					node.delete();
				}
			},
			moveObstacle:function(pos,x,y){
				if(get.is.div(pos)){
					pos=pos.dataset.position;
				}
				var node=lib.posmap[pos];
				if(node&&game.obstacles.contains(node)){
					pos=parseInt(pos);
					var x2=pos%ui.chesswidth+x;
					var y2=Math.floor(pos/ui.chesswidth)+y;
					if(x2>=ui.chesswidth){
						x2=ui.chesswidth-1;
					}
					if(y2>=ui.chessheight){
						y2=ui.chessheight-1;
					}
					if(x2<0){
						x2=0;
					}
					if(y2<0){
						y2=0;
					}
					var pos2=y2*ui.chesswidth+x2;
					if(!lib.posmap[pos2]){
						game.addVideo('moveObstacle',null,[pos,x,y]);
						node.dataset.position=pos2;
						delete lib.posmap[pos];
						lib.posmap[pos2]=node;
						return true;
					}
				}
				return false;
			},
			colorObstacle:function(pos,color){
				if(get.is.div(pos)){
					pos=pos.dataset.position;
				}
				var node=lib.posmap[pos];
				if(node&&game.obstacles.contains(node)){
					game.addVideo('colorObstacle',null,[pos,color]);
					node.dataset.obscolor=color;
				}
			},
			addOverDialog:function(dialog){
				dialog.classList.add('center');
			},
			controlOver:function(){
				if(_status.mode=='three'){
					ui.create.control('再战',function(){
						game.saveConfig('continue_name_chess',{
							friend:_status.friendBackup,
							enemy:_status.enemyBackup,
							color:_status.color
						});
						game.saveConfig('mode',lib.config.mode);
						localStorage.setItem(lib.configprefix+'directstart',true);
						game.reload();
					});
				}
				ui.create.control('返回',game.reload);
				if(_status.mode!='leader') return;
				if(_status.enterArena){
					game.data.arena.acted.length=0;
					if(_status.victory){
						game.data.arena.win++;
						for(var i=0;i<game.players.length;i++){
							if(_status.arenaAdd&&_status.arenaAdd.contains(game.players[i].name)){
								continue;
							}
							if(game.data.arena.dead.contains(game.players[i].name)){
								game.data.arena.dead.remove(game.players[i].name);
								game.data.arena.acted.push(game.players[i].name);
							}
						}
					}
					game.saveData();
				}
				else{
					if(_status.challenge&&(_status.zhaoxiang||_status.victory)){
						game.data.challenge=game.getLeaderList();
						game.saveData();
					}
					if(_status.challenge&&!_status.zhaoxiang&&_status.victory){
						var money=_status.challengeMoney;
						if(game.data.dust>=money){
							ui.create.control('招降'+get.translation(_status.challenge),function(){
								game.data.character.add(_status.challenge);
								game.data.challenge=game.getLeaderList();
								game.changeDust(-money);
								game.reload();
							});
						}
					}
				}
			},
			phaseLoopTafang:function(){
				var next=game.createEvent('phaseLoop');
				next.setContent(function(){
					'step 0'
					delete _status.roundStart;
					_status.turnCount++;
					_status.remainingCount-=_status.friends.length;
					ui.turnCount.innerHTML='回合'+get.cnNumber(_status.turnCount,true);
					var dialog=ui.create.dialog('剩余行动点：'+(10+_status.remainingCount),'hidden');
					dialog.style.height='260px';
					dialog.style.maxHeight='260px';
					dialog.style.top='calc(50% - 160px)';
					dialog.classList.add('center');
					dialog.classList.add('noupdate');
					dialog.classList.add('fixed');
					event.dialog=dialog;
					var list=_status.characterList.splice(0,6);
					list.sort(function(a,b){
						return get.rank(a,true)-get.rank(b,true);
					});
					var map={};
					var mechlist=lib.mechlist.randomGets(6);
					mechlist.sort(function(a,b){
						return lib.character[a][5]-lib.character[b][5];
					});
					map.bufang=ui.create.buttons(mechlist,'character',dialog.content);
					var difficulty=parseInt(get.config('tafang_difficulty'));
					//if(isNaN(difficulty)) difficulty=0;
					for(var i=0;i<map.bufang.length;i++){
						var button=map.bufang[i];
						// button.node.name.style.top='8px';
						button.node.intro.classList.add('showintro');
						button.node.intro.classList.add('tafang');
						button.count=difficulty+lib.character[button.link][5]-2;
						button.node.intro.innerHTML=get.cnNumber(button.count,true);
						button._link='布防';
					}
					map.zhaomu=ui.create.buttons(list,'character',dialog.content);
					for(var i=0;i<map.zhaomu.length;i++){
						var button=map.zhaomu[i];
						if(lib.config.buttoncharacter_style=='default'){
							button.node.group.style.display='none';
						}
						button.node.intro.classList.add('showintro');
						button.node.intro.classList.add('tafang');
						button.count=get.tafangCost(button.link);
						button.node.intro.innerHTML=get.cnNumber(button.count,true);
						button._link='招募';
					}
					if(_status.friends.length){
						map.xingdong=ui.create.buttons(_status.friends,'player',dialog.content);
						for(var i=0;i<map.xingdong.length;i++){
							var button=map.xingdong[i];
							button.node.intro.classList.add('showintro');
							button.node.intro.classList.add('tafang');
							if(difficulty<2){
								button.count=1;
							}
							else{
								button.count=2;
							}
							button.node.intro.innerHTML=get.cnNumber(button.count,true);
							button._link='行动';
						}
					}
					else{
						map.xingdong=[];
					}
					var updateSelected=function(){
						var count=10+_status.remainingCount;
						var selected=dialog.querySelectorAll('.button.selected');
						var selectedZhaomu=0;
						for(var i=0;i<selected.length;i++){
							count-=selected[i].count;
							if(selected[i]._link=='招募'){
								selectedZhaomu++;
							}
						}
						for(var i in map){
							for(var j=0;j<map[i].length;j++){
								map[i][j].classList.remove('unselectable');
								map[i][j].classList.add('pointerdiv');
								if(map[i][j].count>count){
									map[i][j].classList.add('unselectable');
									map[i][j].classList.remove('pointerdiv');
								}
								else if(i=='zhaomu'&&_status.friends.length+selectedZhaomu>=5){
									map[i][j].classList.add('unselectable');
									map[i][j].classList.remove('pointerdiv');
								}
								else if(i=='bufang'){
									var numbufang=0;
									for(var k=0;k<game.treasures.length;k++){
										if(game.treasures[k].name==map[i][j].link){
											numbufang++;
										}
										if(numbufang>=3){
											map[i][j].classList.add('unselectable');
											break;
										}
									}
								}
							}
						}
						ui.dialog.content.firstChild.innerHTML='剩余行动点：'+count;
					}
					var clickOrder=0;
					event.custom.replace.button=function(button){
						if(!button.classList.contains('unselectable')||
							button.classList.contains('selected')){
							button.classList.toggle('selected');
							button._clickOrder=clickOrder++;
						}
						updateSelected();
					}
					event.custom.add.window=function(clicked){
						if(clicked) return;
						if(event.step>1) return;
						for(var i in map){
							for(var j=0;j<map[i].length;j++){
								map[i][j].classList.remove('selected');
								map[i][j].classList.remove('unselectable');
							}
						}
						updateSelected();
					}
					var update=function(link){
						for(var i in map){
							for(var j=0;j<map[i].length;j++){
								if(map[i][j]._link!=link){
									map[i][j].style.display='none';
								}
								else{
									map[i][j].style.display='';
								}
							}
						}
						for(var i=0;i<event.control.childNodes.length;i++){
							if(event.control.childNodes[i].innerHTML==link){
								event.control.childNodes[i].classList.add('thundertext');
							}
						}
						_status.lastTafangCommand=link;
					}
					event.control=ui.create.control('布防','招募',function(link,node){
						if(node.disabled) return;
						var current=node.parentNode.querySelector('.thundertext');
						if(current==node) return;
						if(current){
							current.classList.remove('thundertext');
						}
						update(link);
					});
					// if(!_status.friends.length){
					// 	event.control.lastChild.style.opacity=0.5;
					// 	if(_status.lastTafangCommand=='行动'){
					// 		_status.lastTafangCommand='招募';
					// 	}
					// }
					if(_status.friends.length>=5){
						event.control.childNodes[1].style.opacity=0.5;
						event.control.childNodes[1].disabled=true;
						if(_status.lastTafangCommand=='招募'){
							_status.lastTafangCommand='布防';
						}
					}
					_status.imchoosing=true;
					ui.auto.hide();
					var eventdong=function(){
						var selected=dialog.querySelectorAll('.button.selected');
						event.bufang=[];
						event.zhaomu=[];
						event.xingdong=_status.friends.slice(0);
						// var xingdongs=[];
						_status.remainingCount+=10;
						for(var i=0;i<selected.length;i++){
							switch(selected[i]._link){
								case '布防':event.bufang.push(selected[i].link);break;
								case '招募':event.zhaomu.push(selected[i].link);break;
								// case '行动':xingdongs.push(selected[i]);break;
							}
							_status.remainingCount-=selected[i].count;
						}
						_status.remainingCount=Math.floor(_status.remainingCount/2);
						// xingdongs.sort(function(a,b){
						// 	return a._clickOrder-b._clickOrder;
						// });
						// for(var i=0;i<xingdongs.length;i++){
						// 	event.xingdong.push(xingdongs[i].link);
						// }
						game.resume();
					};
					event.done=ui.create.control('完成',eventdong);
					if(_status.lastTafangCommand){
						update(_status.lastTafangCommand);
					}
					else{
						update('招募');
					}
					if(_status.characterList.length<6){
						game.over(true);
						event.done.close();
						event.control.close();
						return;
					}
					setTimeout(function(){
						dialog.open();
						updateSelected();
					},50);
					event.switchToAuto=eventdong;
					if(!_status.auto&&10+_status.remainingCount>0){
						game.pause();
					}
					else{
						eventdong();
					}
					'step 1'
					event.dialog.close();
					event.control.close();
					event.done.close();
					delete event.dialog;
					delete event.control;
					delete event.done;
					'step 2'
					event.chooseObstacle=false;
					if(event.bufang.length){
						event.obstacles=game.obstacles.slice(0);
						for(var i=0;i<event.obstacles.length;i++){
							event.obstacles[i].classList.add('glow');
						}
						event.chooseObstacle=true;
						event.currentBufang=event.bufang.shift();
						event.dialog=ui.create.dialog('选择一个位置放置【'+get.translation(event.currentBufang)+'】');
						if(!_status.auto){
							game.pause();
						}
						else{
							event.obstacle=event.obstacles.randomGet();
						}
						event.switchToAuto=function(){
							event.obstacle=event.obstacles.randomGet();
							game.resume();
						};
					}
					else{
						delete event.bufang;
					}
					'step 3'
					if(event.dialog){
						event.dialog.close();
						delete event.dialog;
					}
					if(event.chooseObstacle){
						game.removeObstacle(event.obstacle.dataset.position);
						var mech=game.addChessPlayer(event.currentBufang,'treasure',0,event.obstacle.dataset.position);
						event.chooseObstacle=false;
						event.goto(2);
					}
					else{
						if(event.obstacles){
							for(var i=0;i<event.obstacles.length;i++){
								event.obstacles[i].classList.remove('glow');
							}
							delete event.obstacles;
						}
						delete event.obstacle;
						delete event.currentBufang;
					}
					'step 4'
					if(event.dialog){
						event.dialog.close();
						delete event.dialog;
					}
					if(event.zhaomu.length){
						event.currentZhaomu=event.zhaomu.shift();
						event.dialog=ui.create.dialog('选择一个位置安排【'+get.translation(event.currentZhaomu)+'】');
						var size=ui.chesswidth*(ui.chessheight-1);
						var clickGrid=function(){
							var player=game.addChessPlayer(event.currentZhaomu,false,4,this.dataset.position);
							_status.friends.push(player);
							if(!game.me.name){
								game.me=player;
								game.me.classList.add('current_action');
								ui.me.querySelector('.fakeme.avatar').show();
								ui.me.querySelector('.fakeme.player').show();
								ui.create.fakeme();
								ui.handcards1=player.node.handcards1.animate('start').fix();
								ui.handcards2=player.node.handcards2.animate('start').fix();
								ui.handcards1Container.appendChild(ui.handcards1);
								ui.handcards2Container.appendChild(ui.handcards2);
								ui.updatehl();
								game.setChessInfo();
								game.addVideo('tafangMe',player);
							}
							this.delete();
							event.redo();
							game.resume();
						}
						if(!event.playergrids){
							event.playergrids=[]
							for(var i=ui.chesswidth;i<size;i++){
								if(!lib.posmap[i.toString()]){
									var grid=ui.create.div('.player.minskin.playerblank.glow',clickGrid,ui.chess);
									grid.animate('start');
									grid.dataset.position=i;
									event.playergrids.push(grid);
								}
							}
						}
						game.pause();
						if(_status.auto){
							setTimeout(function(){
								clickGrid.call(event.playergrids.randomGet());
							},50);
						}
					}
					else{
						delete event.zhaomu;
					}
					'step 5'
					_status.imchoosing=false;
					ui.auto.show();
					game.delay();
					if(event.dialog){
						event.dialog.close();
						delete event.dialog;
					}
					if(event.playergrids){
						for(var i=0;i<event.playergrids.length;i++){
							event.playergrids[i].delete();
						}
						delete event.playergrids;
					}
					delete event.currentZhaomu;
					'step 6'
					var shalldelay=false;
					for(var i=0;i<ui.chesswidth;i++){
						if(lib.posmap[i]&&game.players.contains(lib.posmap[i])){
							for(var j=0;j<ui.chessheight;j++){
								var pos=i+j*ui.chesswidth;
								if(lib.posmap[pos]&&lib.posmap[pos].movable(0,1)){
									break;
								}
							}
							if(j<ui.chessheight){
								shalldelay=true;
								for(var k=j;k>=0;k--){
									var pos=i+k*ui.chesswidth;
									if(lib.posmap[pos]){
										lib.posmap[pos].moveDown();
									}
								}
							}
						}
					}
					if(shalldelay) game.delay();
					'step 7'
					event.justadded=[];
					if(_status.characterList.length){
						if(_status.enemies.length<ui.chesswidth*2){
							var list1=[];
							for(var i=0;i<ui.chesswidth;i++){
								if(!lib.posmap[i]){
									list1.push(i);
								}
							}
							if(list1.length){
								var enemy=game.addChessPlayer(_status.characterList.shift(),true,4,list1.randomRemove());
								_status.enemies.push(enemy);
								event.justadded.push(enemy.name);
								if(game.players.length==1){
									ui.me.querySelector('.fakeme.player').show();
									game.setChessInfo(game.players[0]);
								}
								game.delay();
							}
							// var difficulty=get.config('tafang_difficulty');
							// if(_status.turnCount>=10&&list1.length&&difficulty>1){
							// 	var enemy=game.addChessPlayer(_status.characterList.shift(),true,4,list1.randomRemove());
							// 	_status.enemies.push(enemy);
							// 	event.justadded.push(enemy.name);
							// }
							// if(_status.turnCount>=20&&list1.length&&difficulty>1){
							// 	var enemy=game.addChessPlayer(_status.characterList.shift(),true,4,list1.randomRemove());
							// 	_status.enemies.push(enemy);
							// 	event.justadded.push(enemy.name);
							// }
							// if(list1.length&&difficulty>2){
							// 	var enemy=game.addChessPlayer(_status.characterList.shift(),true,4,list1.randomRemove());
							// 	_status.enemies.push(enemy);
							// 	event.justadded.push(enemy.name);
							// }
						}
					}
					else{
						game.over(true);
					}
					'step 8'
					if(event.xingdong.length){
						var toact=event.xingdong.shift();
						if(game.players.contains(toact)){
							toact.phase();
						}
						event.redo();
					}
					else{
						event.xingdong=_status.enemies.slice(0);
					}
					'step 9'
					if(event.xingdong.length){
						var enemy=event.xingdong.shift();
						if(!event.justadded.contains(enemy.name)&&game.players.contains(enemy)){
							enemy.phase();
						}
						event.redo();
					}
					else{
						event.mechlist=game.treasures.slice(0);
					}
					'step 10'
					if(event.mechlist.length){
						var mech=event.mechlist.shift();
						var info=lib.skill[mech.name+'_skill'];
						if(!info.filter||info.filter(mech)){
							var next=game.createEvent('chessMech');
							next.player=mech;
							next.setContent(info.content);
							mech.chessFocus();
							if(lib.config.animation&&!lib.config.low_performance){
								mech.$epic2();
							}
							game.delay();
						}
						if(--mech.hp<=0){
							var next=game.createEvent('chessMechRemove');
							next.player=mech;
							next.setContent('chessMechRemove');
						}
						else{
							mech.update();
						}
						event.redo();
					}
					'step 11'
					delete event.xingdong;
					delete event.mechlist;
					if(_status.turnCount>=_status.turnTotal){
						game.over(true);
					}
					else{
						event.goto(0);
						game.delay();
					}
				});
			},
			isChessNeighbour:function(a,b){
				if(a&&a.dataset){
					a=a.dataset.position;
				}
				if(b&&b.dataset){
					b=b.dataset.position;
				}
				var ax=a%ui.chesswidth;
				var ay=Math.floor(a/ui.chesswidth);

				var bx=b%ui.chesswidth;
				var by=Math.floor(b/ui.chesswidth);

				if(ax==bx&&Math.abs(ay-by)==1) return true;
				if(ay==by&&Math.abs(ax-bx)==1) return true;

				return false;
			},
			draw2:function(func){
				lib.canvasUpdates2.push(func);
				if(!lib.status.canvas2){
					lib.status.canvas2=true;
					game.update(game.updateCanvas2);
				}
			},
			updateCanvas2:function(time){
				if(lib.canvasUpdates2.length===0){
					lib.status.canvas2=false;
					return false;
				}
				ui.canvas2.width=ui.chess.offsetWidth;
				ui.canvas2.height=ui.chess.offsetHeight;
				ui.canvas2.style.left=0;
				ui.canvas2.style.top=0;
				var ctx=ui.ctx2;
				ctx.shadowBlur=5;
				ctx.shadowColor='rgba(0,0,0,0.3)';
				ctx.fillStyle='white';
				ctx.strokeStyle='white';
				ctx.lineWidth=3;
				ctx.save();
				for(var i=0;i<lib.canvasUpdates2.length;i++){
					ctx.restore();
					ctx.save();
					var update=lib.canvasUpdates2[i];
					if(!update.starttime){
						update.starttime=time;
					}
					if(update(time-update.starttime,ctx)===false){
						lib.canvasUpdates2.splice(i--,1);
					}
				}
			},
			setChessInfo:function(p){
				if(!p){
					if(ui.phasequeue&&ui.phasequeue.length){
						p=ui.phasequeue[0].link;
					}
					else{
						p=game.me;
					}
				}
				ui.chessinfo.firstChild.innerHTML='';
				ui.phasequeue=[];
				for(var i=0;i<game.players.length;i++){
					var node=ui.create.div('.avatar',ui.chessinfo.firstChild);
					node.style.backgroundImage=p.node.avatar.style.backgroundImage;
					node.link=p;
					node.listen(ui.click.chessInfo);
					lib.setIntro(node);
					node.linkplayer=true;
					p.instance=node;
					if(_status.currentPhase==p){
						node.classList.add('glow2');
					}
					ui.phasequeue.push(node);
					p=p.next;
				}
			},
			initLeaderSave:function(save){
				game.save(save,{
					money:300,
					dust:0,
					legend:0,
					character:[]
				});
			},
			leaderView:function(){
				var next=game.createEvent('leaderView',false);
				next.setContent(function(){
					'step 0'
					var save=get.config('chess_leader_save');
					if(!save){
						save='save1';
					}
					if(!lib.storage[save]){
						game.initLeaderSave(save);
					}
					game.data=lib.storage[save];
					ui.wuxie.hide();
					ui.auto.hide();
					ui.money=ui.create.div(ui.window);
					lib.setIntro(ui.money,function(uiintro){
						uiintro.add('<span style="font-family:xinwei">'+game.data.money+'金币');
						uiintro.addText('通过战斗或竞技场可获得金币。花费100金币可招募3名随机武将；花费150金币可参加一次竞技场');
						uiintro.add('<span style="font-family:xinwei">'+game.data.dust+'招募令');
						uiintro.addText('通过遣返武将或竞技场可获得招募令。挑战武将成功后可通过招募令招募该武将，普通/稀有/史诗/传说武将分别花费40/100/400/1600招募令');
					});
					ui.money.innerHTML='<span>⚑</span><span>'+game.data.dust+'</span>'+
						'<span>㉤</span><span>'+game.data.money+'</span>';
					ui.money.style.top='auto';
					ui.money.style.left='auto';
					ui.money.style.right='20px';
					ui.money.style.bottom='15px';
					ui.money.childNodes[0].style.color='rgb(111, 198, 255)';
					ui.money.childNodes[1].style.fontFamily='huangcao';
					ui.money.childNodes[1].style.marginRight='10px';
					ui.money.childNodes[2].style.color='#FFE600';
					ui.money.childNodes[3].style.fontFamily='huangcao';
					ui.money.style.letterSpacing='4px';
					for(var i in lib.rank){
						if(Array.isArray(lib.rank[i])){
							for(var j=0;j<lib.rank[i].length;j++){
								if(!lib.character[lib.rank[i][j]]){
									lib.rank[i].splice(j--,1);
								}
							}
						}
					}
					for(var i in lib.rank.rarity){
						if(Array.isArray(lib.rank.rarity[i])){
							for(var j=0;j<lib.rank.rarity[i].length;j++){
								if(!lib.character[lib.rank.rarity[i][j]]){
									lib.rank.rarity[i].splice(j--,1);
								}
							}
						}
					}
					'step 1'
					lib.rank.all=lib.rank.s.
						concat(lib.rank.ap).
						concat(lib.rank.a).
						concat(lib.rank.am).
						concat(lib.rank.bp).
						concat(lib.rank.b).
						concat(lib.rank.bm).
						concat(lib.rank.c).
						concat(lib.rank.d);
					lib.rank.rarity.common=[];
					for(var i=0;i<lib.rank.all.length;i++){
						if(!lib.rank.rarity.legend.contains(lib.rank.all[i])&&
							!lib.rank.rarity.epic.contains(lib.rank.all[i])&&
							!lib.rank.rarity.rare.contains(lib.rank.all[i])){
							lib.rank.rarity.common.push(lib.rank.all[i]);
						}
					}

					ui.control.style.transition='all 0s';
					if(get.is.phoneLayout()){
						ui.control.style.top='calc(100% - 80px)';
					}
					else{
						ui.control.style.top='calc(100% - 70px)';
					}
					var cardNode=function(i,name,load){
						var node=ui.create.player(ui.window);
						node.style.transition='all 0.7s';
						node.style.opacity=0;
						node.style.zIndex=4;
						node.classList.add('pointerdiv');

						var kaibao=false;
						if(!name||typeof i=='string'){
							if(!name){
								name=game.getLeaderCharacter();
								event.cardnodes.push(node);
							}
							else{
								node.classList.add('minskin')
							}
							kaibao=true;
							node.style.left='calc(50% - 75px)';
							node.style.top='calc(50% - 90px)';
							ui.refresh(node);
						}
						else if(!load){
							node.style.transform='perspective(1200px) rotateY(180deg) translate(0,-200px)';
						}
						node.name=name;
						if(!load){
							switch(i){
								case 0:{
									node.style.left='calc(50% - 75px)';
									node.style.top='calc(25% - 90px)';
									break;
								}
								case 1:{
									node.style.left='calc(30% - 90px)';
									node.style.top='calc(75% - 90px)';
									break;
								}
								case 2:{
									node.style.left='calc(70% - 60px)';
									node.style.top='calc(75% - 90px)';
									break;
								}
								case '51':{
									node.style.left='calc(50% - 60px)';
									node.style.top='calc(25% - 75px)';
									break;
								}
								case '52':{
									node.style.left='calc(35% - 55px)';
									node.style.top='calc(75% - 25px)';
									break;
								}
								case '53':{
									node.style.left='calc(65% - 65px)';
									node.style.top='calc(75% - 25px)';
									break;
								}
								case '54':{
									node.style.left='calc(25% - 75px)';
									node.style.top='calc(50% - 70px)';
									break;
								}
								case '55':{
									node.style.left='calc(75% - 45px)';
									node.style.top='calc(50% - 70px)';
									break;
								}
							}
							if(!kaibao){
								node.style.top='calc(50% - 180px)';
								ui.refresh(node);
							}
							node.style.opacity=1;
						}
						node.node.count.remove();
						node.node.marks.remove();
						var rarity=game.getRarity(name);
						if(rarity!='common'){
							node.rarity=rarity;
							node.node.intro.style.left='14px';
							if(node.classList.contains('minskin')){
								node.node.intro.style.top='84px';
							}
							else{
								node.node.intro.style.top='145px';
							}
							node.node.intro.style.fontSize='20px';
							node.node.intro.style.fontFamily='huangcao';
							switch(rarity){
								case 'rare':node.node.intro.dataset.nature='waterm';break;
								case 'epic':node.node.intro.dataset.nature='thunderm';break;
								case 'legend':node.node.intro.dataset.nature='metalm';break;
							}
						}
						if(kaibao){
							node.node.avatar.style.display='none';
							node.style.transform='perspective(1200px) rotateY(180deg) translateX(0)';
							if(typeof i=='string'){
								node.listen(event.turnCard2);
							}
							else{
								node.listen(turnCard);
								if(!game.data.character.contains(name)){
									game.data.character.push(name);
									if(game.data.challenge.contains(name)){
										game.data.challenge=game.getLeaderList();
										game.saveData();
									}
									var button=ui.create.button(name,'character');
									button.classList.add('glow2');
									dialog1.content.lastChild.insertBefore(button,dialog1.content.lastChild.firstChild);
									dialog1.buttons.push(button);
									fixButton(button);
									button.area='character';
								}
								else{
									switch(rarity){
										case 'common':game.data.dust+=10;break;
										case 'rare':game.data.dust+=30;break;
										case 'epic':game.data.dust+=150;break;
										case 'legend':game.data.dust+=600;break;
									}
								}
							}
						}
						else{
							node.style.transform='';
						}
						return node;
					};
					event.cardNode=cardNode;
					if(game.data.arena){
						ui.money.style.display='none';
						_status.enterArena=true;
						return;
					}
					var groupSort=function(name){
						if(lib.character[name][1]=='wei') return 0;
						if(lib.character[name][1]=='shu') return 1;
						if(lib.character[name][1]=='wu') return 2;
						if(lib.character[name][1]=='qun') return 3;
					};
					game.data.character.sort(function(a,b){
						var del=groupSort(a)-groupSort(b);
						if(del!=0) return del;
						var aa=a,bb=b;
						if(a.indexOf('_')!=-1){
							a=a.slice(a.indexOf('_')+1);
						}
						if(b.indexOf('_')!=-1){
							b=b.slice(b.indexOf('_')+1);
						}
						if(a!=b){
							return a>b?1:-1;
						}
						return aa>bb?1:-1;
					});
					if(game.data.character.length==0||!game.data.challenge){
						game.data.character=lib.rank.rarity.common.randomGets(3);
						game.data.challenge=game.getLeaderList();
						game.saveData();
					}
					var fixButton=function(button){
						var rarity=game.getRarity(button.link);
						if(rarity!='common'){
							var intro=button.node.intro;
							intro.classList.add('showintro');
							intro.style.fontFamily='huangcao';
							intro.style.fontSize='20px';
							intro.style.top='82px';
							intro.style.left='2px';
							switch(rarity){
								case 'rare':intro.dataset.nature='waterm';break;
								case 'epic':intro.dataset.nature='thunderm';break;
								case 'legend':intro.dataset.nature='metalm';break;
							}
							intro.innerHTML=get.translation(rarity);
						}
					}
					game.leaderLord=['leader_caocao','leader_liubei','leader_sunquan'];
					var dialog1=ui.create.dialog('选择君主','hidden');
					event.dialog1=dialog1;
					dialog1.classList.add('fullheight');
					dialog1.classList.add('halfleft');
					dialog1.classList.add('fixed');
					dialog1.classList.add('pointerbutton');
					dialog1.add([game.leaderLord,'character']);
					var i;
					for(i=0;i<dialog1.buttons.length;i++){
						dialog1.buttons[i].area='lord';
					}
					var j=i;
					dialog1.add('选择武将');
					var getCapt=function(str){
						if(str.indexOf('_')==-1){
							return str[0];
						}
						return str[str.indexOf('_')+1];
					}
					var clickCapt=function(e){
						if(_status.dragged) return;
						if(this.classList.contains('thundertext')){
							dialog1.currentcapt=null;
							dialog1.currentcaptnode=null;
							this.classList.remove('thundertext');
							for(var i=0;i<dialog1.buttons.length;i++){
								dialog1.buttons[i].style.display='';
							}
						}
						else{
							if(dialog1.currentcaptnode){
								dialog1.currentcaptnode.classList.remove('thundertext');
							}
							dialog1.currentcapt=this.link;
							dialog1.currentcaptnode=this;
							this.classList.add('thundertext');
							for(var i=0;i<dialog1.buttons.length;i++){
								if(dialog1.buttons[i].area!='character') continue;
								if(getCapt(dialog1.buttons[i].link)!=dialog1.currentcapt){
									dialog1.buttons[i].style.display='none';
								}
								else{
									dialog1.buttons[i].style.display='';
								}
							}
						}
						e.stopPropagation();
					};
					var captnode=ui.create.div('.caption');
					var initcapt=function(){
						var namecapt=[];
						for(var i=0;i<game.data.character.length;i++){
							var ii=game.data.character[i];
							if(namecapt.indexOf(getCapt(ii))==-1){
								namecapt.push(getCapt(ii));
							}
						}
						namecapt.sort(function(a,b){
							return a>b?1:-1;
						});
						captnode.innerHTML='';
						for(i=0;i<namecapt.length;i++){
							var span=document.createElement('span');
							span.innerHTML=' '+namecapt[i].toUpperCase()+' ';
							span.link=namecapt[i];
							span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
							captnode.appendChild(span);
						}
						if(game.data.character.length<=15){
							captnode.style.display='none';
						}
						else{
							captnode.style.display='';
						}
					};
					initcapt();
					dialog1.captnode=captnode;
					dialog1.add(captnode);
					dialog1.add([game.data.character,'character']);
					for(i=j;i<dialog1.buttons.length;i++){
						dialog1.buttons[i].area='character';
						fixButton(dialog1.buttons[i]);
					}
					dialog1.open();

					var dialog2=ui.create.dialog('战斗难度','hidden');
					event.dialog2=dialog2;
					dialog2.classList.add('fullheight');
					dialog2.classList.add('halfright');
					dialog2.classList.add('fixed');
					dialog2.classList.add('pointerbutton');
					dialog2.add([[
						['','','leader_easy'],
						['','','leader_medium'],
						['','','leader_hard']
					],'vcard']);
					// for(i=0;i<dialog2.buttons.length;i++){
					// 	dialog2.buttons[i].node.name.style.fontFamily='xinwei';
					// 	dialog2.buttons[i].node.name.style.fontSize='30px';
					// 	dialog2.buttons[i].node.name.style.left='4px';
					// 	dialog2.buttons[i].node.name.dataset.color='unknownm';
					// 	dialog2.buttons[i]._nopup=true;
					// 	dialog2.buttons[i].area='difficulty';
					// }
					dialog2.add('敌方人数');
					dialog2.add([[
						['','','leader_2'],
						['','','leader_3'],
						['','','leader_5'],
						['','','leader_8'],
					],'vcard']);
					for(i=0;i<dialog2.buttons.length;i++){
						dialog2.buttons[i].className='menubutton large pointerdiv';
						dialog2.buttons[i].innerHTML=dialog2.buttons[i].node.background.innerHTML;
						dialog2.buttons[i].style.position='relative';
						dialog2.buttons[i].style.fontSize='';
						dialog2.buttons[i].style.color='';
						dialog2.buttons[i].style.textShadow='';
						dialog2.buttons[i]._nopup=true;
						dialog2.buttons[i].style.marginLeft='4px';
						dialog2.buttons[i].style.marginRight='4px';

						if(i<3){
							dialog2.buttons[i].area='difficulty';
						}
						else{
							dialog2.buttons[i].area='number';
						}
						// if(i<3){
						// 	dialog2.buttons[i].style.width='160px';
						// 	dialog2.buttons[i].node.background.classList.remove('tight');
						// 	dialog2.buttons[i].node.background.style.whiteSpace='nowrap';
						// }
						// dialog2.buttons[i].style.background='rgba(0,0,0,0.2)';
						// dialog2.buttons[i].style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px';
						// dialog2.buttons[i].node.background.style.fontFamily='lishu';
						// dialog2.buttons[i]._nopup=true;
						// dialog2.buttons[i].area='number';
						// dialog2.buttons[i].classList.add('menubg');
						// dialog2.buttons[i].classList.add('large');
						// dialog2.buttons[i].classList.remove('card');
					}
					dialog2.add('挑战武将');
					dialog2.add([game.data.challenge,'character']);
					for(;i<dialog2.buttons.length;i++){
						dialog2.buttons[i].area='challenge';
						fixButton(dialog2.buttons[i])
					}
					dialog2.open();
					dialog1.classList.remove('hidden');

					var selected={
						lord:[],
						character:[],
						difficulty:[],
						number:[],
						challenge:[]
					}
					var clearSelected=function(){
						for(var i=0;i<dialog1.buttons.length;i++){
							dialog1.buttons[i].classList.remove('unselectable');
							dialog1.buttons[i].classList.remove('selected');
						}
						for(var i=0;i<dialog2.buttons.length;i++){
							dialog2.buttons[i].classList.remove('unselectable');
							dialog2.buttons[i].classList.remove('selected');
						}
						for(var j in selected){
							selected[j].length=0;
						}
						event.removeCharacter.classList.add('disabled');
					}
					event.enterArena=ui.create.control('竞技场','nozoom',function(){
						if(game.data.money<150&&!game.data._arena) return;
						if(_status.qianfan||_status.kaibao) return;
						if(!game.data._arena) game.changeMoney(-150);
						_status.enterArena=true;
						game.resume();
					});
					var turnCard=function(){
						if(this.turned) return;
						_status.chessclicked=true;
						this.turned=true;
						var node=this;
						node.style.transition='all ease-in 0.3s';
						node.style.transform='perspective(1200px) rotateY(270deg) translateX(150px)';
						var onEnd=function(){
							game.minskin=false;
							node.init(node.name);
							game.minskin=true;
							node.node.avatar.style.display='';
							if(node.rarity){
								node.node.intro.innerHTML=get.translation(node.rarity);
								node.node.intro.classList.add('showintro');
							}
							node.classList.add('playerflip');
							node.style.transform='none';
							node.style.transition='';
							if(lib.config.animation&&!lib.config.low_performance){
								setTimeout(function(){
									switch(game.getRarity(node.name)){
										case 'rare':node.$rare();break;
										case 'epic':node.$epic();break;
										case 'legend':node.$legend();break;
									}
								},150);
							}
						};
						node.listenTransition(onEnd);
					};
					var zhaomu2=function(){
						if(_status.qianfan||_status.kaibao) return;
						if(game.data.money<100) return;
						_status.chessclicked=true;
						ui.arena.classList.add('leaderhide');
						ui.arena.classList.add('leadercontrol');
						ui.money.hide();
						_status.kaibao=true;
						event.cardnodes=[];
						setTimeout(function(){
							event.cardnodes.push(cardNode(0));
							setTimeout(function(){
								event.cardnodes.push(cardNode(1));
								setTimeout(function(){
									event.cardnodes.push(cardNode(2));
									ui.money.childNodes[1].innerHTML=game.data.dust;
									game.changeMoney(-100);
									if(game.data.character.length>3&&selected.character.length){
										event.removeCharacter.animate('controlpressdownx',500);
										event.removeCharacter.classList.remove('disabled');
									}
									if(game.data.money<150&&!game.data._arena){
										event.enterArena.classList.add('disabled');
									}
									else{
										event.enterArena.animate('controlpressdownx',500);
										event.enterArena.classList.remove('disabled');
									}
									if(game.data.money<100){
										event.addCharacter.classList.add('disabled');
									}
									else{
										event.addCharacter.animate('controlpressdownx',500);
										event.addCharacter.classList.remove('disabled');
									}
									initcapt();
								},200);
							},200);
						},500);
					};
					event.addCharacter=ui.create.control('招募','nozoom',zhaomu2);
					if(game.data.money<150&&!game.data._arena){
						event.enterArena.classList.add('disabled');
					}
					if(game.data.money<100){
						event.addCharacter.classList.add('disabled');
					}
					var qianfan=function(){
						if(_status.kaibao) return;
						if(game.data.character.length<=3) return;
						if(!selected.character.length) return;
						// _status.chessclicked=true;
						// _status.qianfan=true;
						// event.enterArena.style.opacity=0.5;
						// event.addCharacter.style.opacity=0.5;
						// event.fight.style.opacity=0.5;
						var current=selected.character.slice(0);
						clearSelected();
						var maxq=game.data.character.length-3;
						if(current.length<=maxq){
							for(var i=0;i<current.length;i++){
								current[i].classList.add('selected');
								selected.character.push(current[i]);
							}
						}
						for(var i=0;i<dialog1.buttons.length;i++){
							if(dialog1.buttons[i].area!='character'||maxq==current.length){
								dialog1.buttons[i].classList.add('unselectable');
							}
						}
						for(var i=0;i<dialog2.buttons.length;i++){
							dialog2.buttons[i].classList.add('unselectable');
						}
						if(!selected.character.length){
							alert('至少需要保留3名武将');
							return;
						}
						var translation=get.translation(selected.character[0].link);
						for(var i=1;i<selected.character.length;i++){
							translation+='、'+get.translation(selected.character[i].link);
						}
						var dust=0;
						for(var i=0;i<selected.character.length;i++){
							var node=selected.character[i];
							var rarity=game.getRarity(node.link);
							switch(rarity){
								case 'common':dust+=5;break;
								case 'rare':dust+=20;break;
								case 'epic':dust+=100;break;
								case 'legend':dust+=400;break;
							}
						}
						if(confirm(translation+'将被遣返，一共将获得'+dust+'个招募令。是否确定遣返？')){
							for(var i=0;i<selected.character.length;i++){
								var node=selected.character[i];
								var rarity=game.getRarity(node.link);
								switch(rarity){
									case 'common':game.changeDust(5);break;
									case 'rare':game.changeDust(20);break;
									case 'epic':game.changeDust(100);break;
									case 'legend':game.changeDust(400);break;
								}
								game.data.character.remove(node.link);
								game.saveData();
								if(game.data.money>=100){
									event.addCharacter.animate('controlpressdownx',500);
									event.addCharacter.classList.remove('disabled');
								}
								if(game.data.money>=150){
									event.enterArena.animate('controlpressdownx',500);
									event.enterArena.classList.remove('disabled');
								}
								node.delete();
								dialog1.buttons.remove(node);
							}
							initcapt();
						}
					};
					event.removeCharacter=ui.create.control('遣返','nozoom',qianfan);
					event.removeCharacter.classList.add('disabled');
					event.fight=ui.create.control('开始战斗','nozoom',function(){
						if(_status.kaibao||_status.qianfan) return;
						if(selected.challenge.length){
							var cname=selected.challenge[0].link;
							var rarity=game.getRarity(cname);
							switch(rarity){
								case 'common':rarity=40;break;
								case 'rare':rarity=100;break;
								case 'epic':rarity=400;break;
								case 'legend':rarity=1600;break;
							}
							if(!confirm('即将挑战'+get.translation(cname)+'，战斗胜利后可消耗'+rarity+'招募令招募该武将，无论是否招募，挑战列表将被刷新。是否继续？')){
								return;
							}
						}
						_status.enemylist=[];
						_status.mylist=[];
						if(selected.lord.length){
							_status.mylist.push(selected.lord[0].link);
							_status.lord=selected.lord[0].link;
						}
						if(selected.character.length){
							for(var i=0;i<selected.character.length;i++){
								_status.mylist.push(selected.character[i].link);
							}
						}
						else{
							_status.mylist=_status.mylist.concat(game.data.character.randomGets(_status.lord?2:3));
						}
						var difficulty;
						if(selected.challenge.length){
							_status.challenge=selected.challenge[0].link;
							_status.enemylist.push(_status.challenge);
							switch(game.getRarity(_status.challenge)){
								case 'common':_status.challengeMoney=40;break;
								case 'rare':_status.challengeMoney=100;break;
								case 'epic':_status.challengeMoney=400;break;
								case 'legend':_status.challengeMoney=1600;break;
							}
							var rank=get.rank(_status.challenge);
							var total=Math.max(2,_status.mylist.length-1);
							var list;
							switch(rank){
								case 's':list=lib.rank.ap;break;
								case 'ap':list=lib.rank.s.concat(lib.rank.a);break;
								case 'a':list=lib.rank.ap.concat(lib.rank.am);break;
								case 'am':list=lib.rank.a.concat(lib.rank.bp);break;
								case 'bp':list=lib.rank.am.concat(lib.rank.b);break;
								case 'b':list=lib.rank.bp.concat(lib.rank.bm);break;
								case 'bm':list=lib.rank.b.concat(lib.rank.c);break;
								case 'c':list=lib.rank.bm.concat(lib.rank.d);break;
								case 'd':list=lib.rank.c;break;
							}
							for(var i=0;i<total;i++){
								if(Math.random()<0.7){
									_status.enemylist.push(Array.prototype.randomGet.apply(
										lib.rank[rank],_status.enemylist.concat(_status.mylist)));
								}
								else{
									_status.enemylist.push(Array.prototype.randomGet.apply(
										list,_status.enemylist.concat(_status.mylist)));
								}
							}
						}
						else{
							var number,list;
							if(selected.difficulty.length){
								difficulty=selected.difficulty[0].link[2];
							}
							else{
								difficulty='leader_easy';
							}
							_status.difficulty=difficulty;
							if(selected.number.length){
								number=selected.number[0].link[2];
								number=parseInt(number[number.length-1]);
							}
							else{
								number=3;
							}
							switch(difficulty){
								case 'leader_easy':list=lib.rank.d.concat(lib.rank.c).concat(lib.rank.bm);break;
								case 'leader_medium':list=lib.rank.b.concat(lib.rank.bp).concat(lib.rank.am);break;
								case 'leader_hard':list=lib.rank.a.concat(lib.rank.ap).concat(lib.rank.s);break;
							}
							for(var i=0;i<lib.hiddenCharacters.length;i++){
								if(list.length<=number){
									break;
								}
								list.remove(lib.hiddenCharacters[i]);
							}
							for(var i=0;i<_status.mylist.length;i++){
								list.remove(_status.mylist[i]);
							}
							_status.enemylist=list.randomGets(number);
						}
						var numdel=_status.enemylist.length-_status.mylist.length;
						var reward=0;
						for(var i=0;i<_status.enemylist.length;i++){
							switch(get.rank(_status.enemylist[i])){
								case 's':reward+=50;break;
								case 'ap':reward+=40;break;
								case 'a':reward+=32;break;
								case 'am':reward+=25;break;
								case 'bp':reward+=19;break;
								case 'b':reward+=14;break;
								case 'bm':reward+=10;break;
								case 'c':reward+=7;break;
								case 'd':reward+=5;break;
							}
						}
						if(numdel>0){
							switch(difficulty){
								case 'leader_easy':reward+=10*numdel;break;
								case 'leader_medium':reward+=20*numdel;break;
								case 'leader_hard':reward+=40*numdel;break;
							}
						}
						var punish=0;
						for(var i=0;i<_status.mylist.length;i++){
							switch(get.rank(_status.mylist[i])){
								case 's':punish+=25;break;
								case 'ap':punish+=20;break;
								case 'a':punish+=16;break;
								case 'am':punish+=12;break;
								case 'bp':punish+=9;break;
								case 'b':punish+=7;break;
								case 'bm':punish+=5;break;
								case 'c':punish+=3;break;
								case 'd':punish+=2;break;
							}
						}
						if(numdel<0){
							switch(difficulty){
								case 'leader_easy':punish-=5*numdel;break;
								case 'leader_medium':punish-=10*numdel;break;
								case 'leader_hard':punish-=20*numdel;break;
							}
						}
						game.reward=Math.max(3*_status.enemylist.length,reward-punish);
						if(!_status.lord){
							switch(difficulty){
								case 'leader_easy':game.reward+=10;break;
								case 'leader_medium':game.reward+=20;break;
								case 'leader_hard':game.reward+=40;break;
							}
						}
						game.resume();
					});
					event.custom.replace.button=function(button){
						if(_status.kaibao) return;
						if(button.classList.contains('unselectable')&&
							!button.classList.contains('selected')) return;
						_status.chessclicked=true;
						button.classList.toggle('selected');
						if(button.classList.contains('selected')){
							selected[button.area].add(button);
						}
						else{
							selected[button.area].remove(button);
						}
						switch(button.area){
							case 'lord':{
								for(var i=0;i<dialog1.buttons.length;i++){
									if(dialog1.buttons[i].area=='lord'){
										if(selected.lord.length){
											dialog1.buttons[i].classList.add('unselectable');
										}
										else{
											dialog1.buttons[i].classList.remove('unselectable');
										}
									}
								}
								break;
							}
							case 'character':{
								for(var i=0;i<dialog1.buttons.length;i++){
									if(dialog1.buttons[i].area=='character'){
										var maxq=game.data.character.length-3;
										if((!_status.qianfan&&selected.character.length>5)||
											(_status.qianfan&&selected.character.length>=maxq)){
											dialog1.buttons[i].classList.add('unselectable');
										}
										else{
											dialog1.buttons[i].classList.remove('unselectable');
										}
									}
								}
								break;
							}
							case 'difficulty':case 'number':{
								for(var i=0;i<dialog2.buttons.length;i++){
									if(dialog2.buttons[i].area==button.area){
										if(selected[button.area].length){
											dialog2.buttons[i].classList.add('unselectable');
										}
										else{
											dialog2.buttons[i].classList.remove('unselectable');
										}
									}
								}
								break;
							}
							case 'challenge':{
								if(selected.challenge.length){
									for(var i=0;i<dialog2.buttons.length;i++){
										if(dialog2.buttons[i].area=='challenge'){
											dialog2.buttons[i].classList.add('unselectable');
										}
										else{
											dialog2.buttons[i].classList.add('unselectable');
											dialog2.buttons[i].classList.remove('selected');
										}
									}
								}
								else{
									for(var i=0;i<dialog2.buttons.length;i++){
										dialog2.buttons[i].classList.remove('unselectable');
									}
								}
								break;
							}
						}
						if(selected.character.length&&game.data.character.length>3){
							event.removeCharacter.animate('controlpressdownx',500);
							event.removeCharacter.classList.remove('disabled');
						}
						else{
							event.removeCharacter.classList.add('disabled');
						}
					};
					event.custom.add.window=function(){
						if(!_status.kaibao){
							var glows=document.querySelectorAll('.button.glow2');
							for(var i=0;i<glows.length;i++){
								glows[i].classList.remove('glow2');
							}
						}
						if(_status.chessclicked){
							_status.chessclicked=false;
							return;
						}
						if(_status.kaibao&&event.cardnodes&&event.cardnodes.length){
							for(var i=0;i<event.cardnodes.length;i++){
								if(!event.cardnodes[i].turned) return;
							}
							for(var i=0;i<event.cardnodes.length;i++){
								event.cardnodes[i].delete();
							}
							ui.arena.classList.remove('leaderhide');
							setTimeout(function(){
								ui.arena.classList.remove('leadercontrol');
							},500);
							ui.money.show();
							delete event.cardnodes;
							_status.kaibao=false;
							return;
						}
						if(_status.qianfan){
							_status.qianfan=false;
							event.removeCharacter.replace('遣返',qianfan);
							if(game.data.money>=100){
								event.addCharacter.animate('controlpressdownx',500);
								event.addCharacter.classList.remove('disabled');
							}
							else{
								event.addCharacter.classList.add('disabled');
							}
							if(game.data.money>=150||game.data._arena){
								event.enterArena.animate('controlpressdownx',500);
								event.enterArena.classList.remove('disabled');
							}
							else{
								event.enterArena.classList.add('disabled');
							}
							event.fight.style.opacity=1;
						}
						clearSelected();
					};
					lib.init.onfree();
					game.pause();
					'step 2'
					if(!game.data.arena){
						event.dialog1.close();
						event.dialog2.close();
						event.fight.close();
						event.enterArena.close();
						event.addCharacter.close();
						event.removeCharacter.close();
					}
					ui.arena.classList.add('leaderhide');
					ui.money.hide();
					game.delay();
					'step 3'
					ui.arena.classList.remove('leaderhide');
					if(!_status.enterArena){
						ui.wuxie.show();
						ui.auto.show();
						ui.control.style.top='';
						if(!get.is.safari()){
							ui.control.style.transition='';
							ui.control.style.display='none';
						}
						event.finish();
					}
					else{
						game.minskin=false;
						event.arenanodes=[];
						event.arenachoice=[];
						event.arenachoicenodes=[];
						event.arrangeNodes=function(){
							var num=event.arenachoicenodes.length;
							var width=num*75+(num-1)*8;
							for(var i=0;i<event.arenachoicenodes.length;i++){
								var left=-width/2+i*83-37.5;
								if(left<0){
									event.arenachoicenodes[i].style.left='calc(50% - '+(-left)+'px)';
								}
								else{
									event.arenachoicenodes[i].style.left='calc(50% + '+left+'px)';
								}
							}
						}
						event.clickNode=function(){
							if(this.classList.contains('removing')) return;
							if(this.isChosen){
								if(_status.chessgiveup) return;
								if(!event.choosefinished) return;
								if(this.classList.contains('unselectable')&&
									!this.classList.contains('selected')) return;
								_status.chessclicked=true;
								this.classList.toggle('selected');
								if(this.classList.contains('selected')){
									this.style.transform='scale(0.85)';
								}
								else{
									this.style.transform='scale(0.8)';
								}
								if(document.querySelectorAll('.player.selected').length>=3){
									for(var i=0;i<event.arenachoicenodes.length;i++){
										if(!event.arenachoicenodes[i].classList.contains('dead')){
											event.arenachoicenodes[i].classList.add('unselectable');
										}
									}
								}
								else{
									for(var i=0;i<event.arenachoicenodes.length;i++){
										event.arenachoicenodes[i].classList.remove('unselectable');
									}
								}
							}
							else{
								while(event.arenanodes.length){
									var node=event.arenanodes.shift();
									if(node==this){
										node.node.hp.hide();
										node.style.transform='scale(0.5)';
										node.style.top='calc(50% + 50px)';
										event.arenachoicenodes.push(node);
										event.arrangeNodes();
									}
									else{
										node.delete();
									}
								}
								this.isChosen=true;
								event.arenachoice.push(this.name);
								game.resume();
							}
						}
					}
					'step 4'
					var choice;
					if(game.data._arena){
						game.data.arena=game.data._arena;
						delete game.data._arena;
					}
					if(game.data.arena&&!_status.arenaLoaded){
						game.data.arena.loaded=true;
						event.arenachoice=game.data.arena.arenachoice;
						for(var i=0;i<event.arenachoice.length;i++){
							var node=event.cardNode(0,event.arenachoice[i],true);
							node.node.hp.style.display='none';
							node.init(node.name);
							node.isChosen=true;
							node.listen(event.clickNode);
							node.style.transform='scale(0.5)';
							node.style.top='calc(50% + 50px)';
							event.arenachoicenodes.push(node);
						}
						event.arrangeNodes();
						for(var i=0;i<event.arenachoicenodes.length;i++){
							var node=event.arenachoicenodes[i];
							if(game.data.arena.choice){
								ui.refresh(node);
								node.style.opacity=1;
							}
						}
						if(game.data.arena.choice){
							choice=game.data.arena.choice;
						}
						else{
							return;
						}
					}
					else{
						switch(event.arenachoice.length){
							case 0:choice=lib.rank.d.randomGets(3);break;
							case 1:choice=lib.rank.c.randomGets(3);break;
							case 2:choice=lib.rank.bm.randomGets(3);break;
							case 3:choice=lib.rank.b.randomGets(3);break;
							case 4:choice=lib.rank.bp.randomGets(3);break;
							case 5:choice=lib.rank.am.randomGets(3);break;
							case 6:choice=lib.rank.a.randomGets(3);break;
							case 7:choice=lib.rank.ap.randomGets(3);break;
							case 8:choice=lib.rank.s.randomGets(3);break;
						}
						game.data.arena={
							win:0,
							dead:[],
							acted:[],
							choice:choice,
							arenachoice:event.arenachoice
						}
						game.saveData();
					}
					_status.arenaLoaded=true;
					var node;
					node=event.cardNode(0,choice[0]);
					node.init(node.name);
					node.listen(event.clickNode);
					event.arenanodes.push(node);
					setTimeout(function(){
						node=event.cardNode(1,choice[1]);
						node.init(node.name);
						node.listen(event.clickNode);
						if(event.choosefinished){
							node.delete();
						}
						else{
							event.arenanodes.push(node);
						}
						setTimeout(function(){
							node=event.cardNode(2,choice[2]);
							node.init(node.name);
							node.listen(event.clickNode);
							if(event.choosefinished){
								node.delete();
							}
							else{
								event.arenanodes.push(node);
							}
						},200);
					},200);
					lib.init.onfree();
					game.pause();
					'step 5'
					if(event.arenachoice.length<9){
						event.goto(4);
					}
					else{
						if(_status.arenaLoaded){
							game.delay(2);
						}
						game.data.arena.arenachoice=event.arenachoice;
						delete game.data.arena.choice;
						game.saveData();
						event.choosefinished=true;
					}
					'step 6'
					game.minskin=true;
					ui.arena.classList.add('noleft');
					var nodes=event.arenachoicenodes;
					for(var i=0;i<nodes.length;i++){
						nodes[i].style.transform='scale(0.8)';
					}
					if(_status.arenaLoaded){
						setTimeout(function(){
							nodes[0].style.left='calc(50% - 215px)';
							nodes[0].style.top='calc(50% - 260px)';
						},0);
						setTimeout(function(){
							nodes[1].style.left='calc(50% - 75px)';
							nodes[1].style.top='calc(50% - 260px)';
						},50);
						setTimeout(function(){
							nodes[2].style.left='calc(50% + 65px)';
							nodes[2].style.top='calc(50% - 260px)';
						},100);
						setTimeout(function(){
							nodes[3].style.left='calc(50% - 215px)';
							nodes[3].style.top='calc(50% - 90px)';
						},150);
						setTimeout(function(){
							nodes[4].style.left='calc(50% - 75px)';
							nodes[4].style.top='calc(50% - 90px)';
						},200);
						setTimeout(function(){
							nodes[5].style.left='calc(50% + 65px)';
							nodes[5].style.top='calc(50% - 90px)';
						},250);
						setTimeout(function(){
							nodes[6].style.left='calc(50% - 215px)';
							nodes[6].style.top='calc(50% + 80px)';
						},300);
						setTimeout(function(){
							nodes[7].style.left='calc(50% - 75px)';
							nodes[7].style.top='calc(50% + 80px)';
						},350);
						setTimeout(function(){
							nodes[8].style.left='calc(50% + 65px)';
							nodes[8].style.top='calc(50% + 80px)';
						},400);
					}
					else{
						nodes[0].style.left='calc(50% - 215px)';
						nodes[0].style.top='calc(50% - 260px)';
						nodes[1].style.left='calc(50% - 75px)';
						nodes[1].style.top='calc(50% - 260px)';
						nodes[2].style.left='calc(50% + 65px)';
						nodes[2].style.top='calc(50% - 260px)';
						nodes[3].style.left='calc(50% - 215px)';
						nodes[3].style.top='calc(50% - 90px)';
						nodes[4].style.left='calc(50% - 75px)';
						nodes[4].style.top='calc(50% - 90px)';
						nodes[5].style.left='calc(50% + 65px)';
						nodes[5].style.top='calc(50% - 90px)';
						nodes[6].style.left='calc(50% - 215px)';
						nodes[6].style.top='calc(50% + 80px)';
						nodes[7].style.left='calc(50% - 75px)';
						nodes[7].style.top='calc(50% + 80px)';
						nodes[8].style.left='calc(50% + 65px)';
						nodes[8].style.top='calc(50% + 80px)';
						for(var i=0;i<nodes.length;i++){
							ui.refresh(nodes[i]);
							if(game.data.arena.dead.contains(nodes[i].name)){
								nodes[i].classList.add('dead');
								nodes[i].style.opacity=0.3;
							}
							else{
								nodes[i].style.opacity=1;
								if(game.data.arena.acted.contains(nodes[i].name)){
									var acted=nodes[i].node.action;
									acted.style.opacity=1;
									acted.innerHTML='疲劳';
									acted.dataset.nature='soilm';
									acted.classList.add('freecolor');
								}
							}
						}
					}

					var victory=ui.create.div().hide();
					victory.innerHTML='<span>'+game.data.arena.win+'</span>胜';
					victory.style.top='auto';
					victory.style.left='auto';
					victory.style.right='20px';
					victory.style.bottom='15px';
					victory.style.fontSize='30px'
					victory.style.fontFamily='huangcao';
					victory.firstChild.style.marginRight='5px';
					ui.window.appendChild(victory);
					ui.refresh(victory);
					victory.show();

					event.checkPrize=function(){
						// event.kaibao=true;
						event.prize=[];
						event.turnCard2=function(){
							if(this.turned) return;
							_status.chessclicked=true;
							this.turned=true;
							var node=this;
							setTimeout(function(){
								node.turned2=true;
							},1000);
							if(node.name=='chess_coin'||node.name=='chess_dust'){
								node.style.transition='all 0s';
								node.style.transform='none';
								node.style.overflow='visible';
								node.style.background='none';
								node.style.boxShadow='none';
								var div=ui.create.div(node);
								div.style.transition='all 0s';
								if(node.name=='chess_coin'){
									div.innerHTML='<span>㉤</span><span>'+node.num+'</span>';
									div.firstChild.style.color='rgb(255, 230, 0)';
									node.$coin();
								}
								else{
									div.innerHTML='<span>⚑</span><span>'+node.num+'</span>';
									div.firstChild.style.color='rgb(111, 198, 255)';
									div.firstChild.style.marginRight='3px';
									node.$dust();
								}
								div.style.fontFamily='huangcao';
								div.style.fontSize='50px';
								div.style.top='40px';
								div.style.letterSpacing='8px';
								div.style.whiteSpace='nowrap';
								// div.dataset.nature='metal';

								return;
							}
							node.style.transition='all ease-in 0.3s';
							node.style.transform='perspective(1200px) rotateY(270deg) translateX(150px)';
							var onEnd=function(){
								node.init(node.name);
								node.node.avatar.style.display='';
								if(node.rarity){
									node.node.intro.innerHTML=get.translation(node.rarity);
									node.node.intro.classList.add('showintro');
								}
								node.classList.add('playerflip');
								node.style.transform='none';
								node.style.transition='';
								if(lib.config.animation&&!lib.config.low_performance){
									setTimeout(function(){
										switch(game.getRarity(node.name)){
											case 'rare':node.$rare();break;
											case 'epic':node.$epic();break;
											case 'legend':node.$legend();break;
										}
									},150);
								}
							};
							node.listenTransition(onEnd);
						};
						setTimeout(function(){
							nodes[0].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[1].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[2].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[3].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[4].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[5].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[6].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[7].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							nodes[8].delete();
						},400+Math.random()*300);
						setTimeout(function(){
							var prize=new Array(6);
							var map=[1,2,3,4,5];
							var ccount=3;
							var win=game.data.arena.win;
							var prizeValue;
							switch(win){
								case 0:prizeValue=100;break;
								case 1:prizeValue=120;break;
								case 2:prizeValue=150;break;
								case 3:prizeValue=190;break;
								case 4:prizeValue=240;break;
								case 5:prizeValue=300;break;
								case 6:prizeValue=370;break;
								case 7:prizeValue=450;break;
								case 8:prizeValue=540;break;
								case 9:prizeValue=640;break;
								case 10:prizeValue=750;break;
								case 11:prizeValue=870;break;
								case 12:prizeValue=1000;break;
							}
							if(Math.random()<0.4){
								if(win>=3&&Math.random()<0.5){
									ccount=4;
									prizeValue-=33;
								}
								else{
									ccount=2;
									prizeValue+=33;
								}
							}
							prizeValue-=100;
							while(ccount--){
								prize[map.randomRemove()]=game.getLeaderCharacter();
							}
							if(map.length){
								prizeValue/=map.length;
							}
							while(map.length){
								var val=Math.round((Math.random()*0.4+0.8)*prizeValue);
								if(Math.random()<0.7){
									prize[map.shift()]=['chess_coin',Math.max(Math.ceil(Math.random()*5),val)];
								}
								else{
									val=Math.round(val/3);
									prize[map.shift()]=['chess_dust',Math.max(Math.ceil(Math.random()*3),val)];
								}
							}
							for(var i=1;i<prize.length;i++){
								if(typeof prize[i]=='string'){
									var name=prize[i];
									var rarity=game.getRarity(name);
									if(!game.data.character.contains(name)){
										game.data.character.push(name);
										if(game.data.challenge.contains(name)){
											game.data.challenge=game.getLeaderList();
										}
									}
									else{
										switch(rarity){
											case 'common':game.data.dust+=10;break;
											case 'rare':game.data.dust+=30;break;
											case 'epic':game.data.dust+=150;break;
											case 'legend':game.data.dust+=600;break;
										}
									}
								}
								else if(prize[i][0]=='chess_coin'){
									game.data.money+=prize[i][1];
								}
								else{
									game.data.dust+=prize[i][1];
								}
								setTimeout((function(i){
									return function(){
										var node;
										if(typeof prize[i]=='string'){
											node=event.cardNode('5'+i,prize[i]);
										}
										else{
											node=event.cardNode('5'+i,prize[i][0]);
											node.num=prize[i][1];
										}
										event.prize.push(node);
										if(i==prize.length-1){
											event.kaibao=true;
										}
									};
								}(i)),i*200);
							}
							delete game.data.arena;
							game.saveData();
						},1000);
					}
					if(game.data.arena.dead.length<9&&game.data.arena.win<12){
						event.arenafight=ui.create.control('开始战斗','nozoom',function(){
							if(_status.chessgiveup) return;
							_status.mylist=[];
							var list=[];
							for(var i=0;i<nodes.length;i++){
								if(nodes[i].classList.contains('selected')){
									_status.mylist.push(nodes[i].name);
								}
								else if(!nodes[i].classList.contains('dead')){
									list.push(nodes[i].name);
								}
							}
							if(_status.mylist.length==0){
								_status.mylist=list.randomGets(3);
							}
							if(_status.mylist.length==0) return;
							for(var i=0;i<_status.mylist.length;i++){
								game.data.arena.dead.push(_status.mylist[i]);
							}
							game.saveData();
							switch(game.data.arena.win){
								case 0:list=lib.rank.d.concat(lib.rank.c);break;
								case 1:list=lib.rank.c.concat(lib.rank.bm);break;
								case 2:list=lib.rank.bm.concat(lib.rank.b);break;
								case 3:list=lib.rank.b.concat(lib.rank.bp);break;
								case 4:list=lib.rank.bp.concat(lib.rank.am);break;
								case 5:list=lib.rank.am.concat(lib.rank.a);break;
								case 6:list=lib.rank.a.concat(lib.rank.ap);break;
								default:list=lib.rank.ap.concat(lib.rank.s);
							}
							for(var i=0;i<_status.mylist.length;i++){
								list.remove(_status.mylist[i]);
							}
							_status.enemylist=list.randomGets(3);
							for(var i=0;i<nodes.length;i++){
								nodes[i].delete();
							}
							victory.delete();
							event.arenafight.close();
							event.arenaback.close();
							event.arenagiveup.close();
							game.resume();
						});
						event.arenaback=ui.create.control('返回','nozoom',function(){
							if(_status.chessgiveup) return;
							game.data._arena=game.data.arena;
							delete game.data.arena;
							game.saveData();
							game.reload();
						});
						var giveup=function(){
							if(confirm('放弃后剩余战斗将视为战败并结算奖励，是否确定放弃？')){
								_status.chessclicked=true;
								event.arenafight.close();
								event.arenaback.close();
								event.arenagiveup.close();
								event.checkPrize();
							}
							// _status.chessclicked=true;
							// _status.chessgiveup=true;
							// event.arenafight.style.opacity=0.5;
							// event.arenaback.style.opacity=0.5;
							// this.replace('确认放弃',function(){
							// 	_status.chessclicked=true;
							// 	event.arenafight.close();
							// 	event.arenaback.close();
							// 	event.arenagiveup.close();
							// 	event.checkPrize();
							// });
						};
						event.arenagiveup=ui.create.control('放弃','nozoom',giveup);
					}
					else{
						event.checkPrize();
					}

					event.custom.add.window=function(){
						if(_status.chessclicked){
							_status.chessclicked=false;
							return;
						}
						if(event.kaibao){
							for(var i=0;i<event.prize.length;i++){
								if(!event.prize[i].turned2){
									return;
								}
							}
							game.reload();
						}
						_status.chessgiveup=false;
						event.arenafight.style.opacity=1;
						event.arenaback.style.opacity=1;
						event.arenagiveup.replace('放弃',giveup);
						for(var i=0;i<nodes.length;i++){
							nodes[i].style.transform='scale(0.8)';
							nodes[i].classList.remove('selected');
							nodes[i].classList.remove('unselectable');
						}
					};
					lib.init.onfree();
					game.pause();
					'step 7'
					ui.control.style.top='';
					if(!get.is.safari()){
						ui.control.style.transition='';
						ui.control.style.display='none';
					}
					ui.arena.classList.remove('leaderhide');
					ui.wuxie.show();
					ui.auto.show();
					game.delay();
				});
			},
			saveData:function(){
				game.save(get.config('chess_leader_save'),game.data);
			},
			getLeaderList:function(){
				var list=lib.rank.all.slice(0);
				for(var i=0;i<game.data.character.length;i++){
					list.remove(game.data.character[i]);
				}
				if(!list.length){
					return ['chess_xingtian'];
				}
				return list.randomGets(6);
			},
			getLeaderCharacter:function(){
				var pleg;
				if(game.data.legend<=20){
					pleg=0.01;
				}
				else{
					pleg=0.01+(game.data.legend-20)*(game.data.legend-20)*0.99/10000;
				}
				if(Math.random()<pleg){
					game.data.legend=0;
					game.saveData();
					return lib.rank.rarity.legend.randomGet();
				}
				game.data.legend++;
				game.saveData();
				if(Math.random()<0.05) return lib.rank.rarity.epic.randomGet();
				if(Math.random()<0.3) return lib.rank.rarity.rare.randomGet();
				return lib.rank.rarity.common.randomGet();
			},
			changeMoney:function(num){
				game.data.money+=num;
				game.saveData();
				ui.money.lastChild.innerHTML=game.data.money;
			},
			changeDust:function(num){
				game.data.dust+=num;
				game.saveData();
				ui.money.childNodes[1].innerHTML=game.data.dust;
			},
			getRarity:function(name){
				var rank=lib.rank.rarity;
				if(rank.legend.contains(name)) return 'legend';
				if(rank.epic.contains(name)) return 'epic';
				if(rank.rare.contains(name)) return 'rare';
				return 'common';
			},
			chooseCharacter:function(){
				var next=game.createEvent('chooseCharacter',false);
				next.showConfig=true;
				next.ai=function(player,list){
					if(get.config('double_character')){
						player.init(list[0],list[1]);
					}
					else{
						player.init(list[0]);
					}
				}
				next.setContent(function(){
					"step 0"
					ui.wuxie.hide();
					var i;
					var list=[];
					var bosslist=[];
					var jiangelist=[];
					event.list=list;
					for(i in lib.character){
						if(lib.character[i][4].contains('chessboss')){
							bosslist.push(i);continue;
						}
						else if(lib.character[i][4].contains('jiangeboss')){
							// if(get.config('chess_jiange')) jiangelist.push(i);
							continue;
						}
						if(i.indexOf('treasure_')==0) continue;
						if(lib.character[i][4].contains('minskin')) continue;
						if(lib.config.forbidchess.contains(i)) continue;
						if(lib.filter.characterDisabled(i)) continue;
						list.push(i);
					}
					list.randomSort();
					var bosses=ui.create.div('.buttons');
					event.bosses=bosses;
					var bossbuttons=ui.create.buttons(bosslist,'character',bosses);
					var addToButton=function(){
						if(ui.cheat2&&ui.cheat2.backup) return;
						_status.event.dialog.content.childNodes[1].innerHTML=
						ui.selected.buttons.length+'/'+_status.event.selectButton();
					};
					var jiange=ui.create.div('.buttons');
					event.jiange=jiange;
					var jiangebuttons=ui.create.buttons(jiangelist,'character',jiange);

					var clickedBoss=false;
					var clickBoss=function(){
						clickedBoss=true;
						var num=bosses.querySelectorAll('.glow').length;
						if(this.classList.contains('glow')){
							this.classList.remove('glow');
							num--;
						}
						else{
							if(num<4){
								this.classList.add('glow');
								num++;
							}
						}
						for(var i=0;i<bosses.childElementCount;i++){
							if(num>=4&&!bosses.childNodes[i].classList.contains('glow')){
								bosses.childNodes[i].classList.add('forbidden');
							}
							else{
								bosses.childNodes[i].classList.remove('forbidden');
							}
						}
						if(num){
							if(!event.asboss){
								event.asboss=ui.create.control('应战',function(){
									_status.boss=true;
									ui.click.ok();
								});
							}
						}
						else{
							if(event.asboss){
								event.asboss.close();
								delete event.asboss;
							}
						}
						addToButton();
					};

					var clickedJiange=false;
					var clickJiange=function(){
						clickedJiange=true;
						if(this.classList.contains('glow2')){
							this.classList.remove('glow2');
						}
						else{
							this.classList.add('glow2');
						}
						addToButton();
					};


					for(var i=0;i<bossbuttons.length;i++){
						bossbuttons[i].classList.add('noclick');
						bossbuttons[i].listen(clickBoss);
					}
					for(var i=0;i<jiangebuttons.length;i++){
						jiangebuttons[i].classList.add('noclick');
						jiangebuttons[i].listen(clickJiange);
					}

					if(get.config('reward')==undefined) game.saveConfig('reward',1,true);
					if(get.config('punish')==undefined) game.saveConfig('punish','无',true);
					if(get.config('battle_number')==undefined) game.saveConfig('battle_number',3,true);
					if(get.config('replace_number')==undefined) game.saveConfig('replace_number',0,true);
					if(get.config('single_control')==undefined) game.saveConfig('single_control',true,true);
					if(get.config('first_less')==undefined) game.saveConfig('first_less',true,true);

					var dialog=ui.create.dialog('选择出场角色','hidden');
					dialog.classList.add('fullwidth');
					dialog.classList.add('fullheight');
					dialog.classList.add('fixed');
					dialog.add('0/0');
					dialog.add([list.slice(0,parseInt(get.config('battle_number'))*4+parseInt(get.config('replace_number'))+5),'character']);
					if(bossbuttons.length){
						dialog.add('挑战魔王');
						dialog.add(bosses);
					}
					if(jiangebuttons.length){
						dialog.add('守卫剑阁');
						dialog.add(jiange);
					}
					event.addConfig=function(dialog){
						dialog.add('选项');
						dialog.choice={};
						dialog.choice.zhu=dialog.add(ui.create.switcher('zhu',get.config('zhu'))).querySelector('.toggle');
						dialog.choice.main_zhu=dialog.add(ui.create.switcher('main_zhu',get.config('main_zhu'))).querySelector('.toggle');
						if(get.config('zhu')){
							dialog.choice.main_zhu.parentNode.classList.remove('disabled');
						}
						else{
							dialog.choice.main_zhu.parentNode.classList.add('disabled');
						}
						dialog.choice.noreplace_end=dialog.add(ui.create.switcher('noreplace_end',get.config('noreplace_end'))).querySelector('.toggle');
						dialog.choice.additional_player=dialog.add(ui.create.switcher('additional_player',get.config('additional_player'))).querySelector('.toggle');
						dialog.choice.single_control=dialog.add(ui.create.switcher('single_control',get.config('single_control'))).querySelector('.toggle');
						dialog.choice.first_less=dialog.add(ui.create.switcher('first_less',get.config('first_less'))).querySelector('.toggle');
						// dialog.attack_move=dialog.add(ui.create.switcher('attack_move',get.config('attack_move'))).querySelector('.toggle');
						// this.dialog.versus_single_control=this.dialog.add(ui.create.switcher('versus_single_control',lib.storage.single_control)).querySelector('.toggle');
						// this.dialog.versus_first_less=this.dialog.add(ui.create.switcher('versus_first_less',lib.storage.first_less)).querySelector('.toggle');
						dialog.choice.reward=dialog.add(ui.create.switcher('reward',[0,1,2,3,4],get.config('reward'))).querySelector('.toggle');
						dialog.choice.punish=dialog.add(ui.create.switcher('punish',['弃牌','无','摸牌'],get.config('punish'))).querySelector('.toggle');
						dialog.choice.seat_order=dialog.add(ui.create.switcher('seat_order',['指定','交替'],get.config('seat_order'))).querySelector('.toggle');
						dialog.choice.battle_number=dialog.add(ui.create.switcher('battle_number',[1,2,3,4,6,8],get.config('battle_number'))).querySelector('.toggle');
						dialog.choice.replace_number=dialog.add(ui.create.switcher('replace_number',[0,1,2,3,5,7,9,17],get.config('replace_number'))).querySelector('.toggle');
						dialog.choice.choice_number=dialog.add(ui.create.switcher('choice_number',[3,6,9],get.config('choice_number'))).querySelector('.toggle');
						if(get.config('additional_player')){
							dialog.choice.noreplace_end.parentNode.classList.add('disabled');
							dialog.choice.replace_number.parentNode.classList.add('disabled');
							dialog.choice.choice_number.parentNode.classList.remove('disabled');
						}
						else{
							dialog.choice.noreplace_end.parentNode.classList.remove('disabled');
							dialog.choice.replace_number.parentNode.classList.remove('disabled');
							dialog.choice.choice_number.parentNode.classList.add('disabled');
						}
					};
					event.addConfig(dialog);
					for(var i=0;i<bosses.childNodes.length;i++){
						bosses.childNodes[i].classList.add('squarebutton');
					}
					for(var i=0;i<jiange.childNodes.length;i++){
						jiange.childNodes[i].classList.add('squarebutton');
					}
					ui.control.style.transition='all 0s';

					if(get.is.phoneLayout()){
						ui.control.style.top='calc(100% - 80px)';
					}
					else{
						ui.control.style.top='calc(100% - 70px)';
					}

					var next=game.me.chooseButton(dialog,true).set('onfree',true);
					next._triggered=null;
					next.selectButton=function(){
						var bossnum=bosses.querySelectorAll('.glow').length;
						if(bossnum){
							return 3*bossnum;
						}
						if(!get.config('single_control')){
							return 1;
						}
						if(get.config('additional_player')){
							return parseInt(get.config('battle_number'));
						}
						return parseInt(get.config('battle_number'))+parseInt(get.config('replace_number'));
					};
					next.custom.add.button=addToButton;
					next.custom.add.window=function(clicked){
						if(clicked) return;
						if(clickedBoss){
							clickedBoss=false;
						}
						else{
							for(var i=0;i<bosses.childElementCount;i++){
								bosses.childNodes[i].classList.remove('forbidden');
								bosses.childNodes[i].classList.remove('glow');
							}
							if(event.asboss){
								event.asboss.close();
								delete event.asboss;
							}
						}
						if(clickedJiange){
							clickedJiange=false;
						}
						else{
							for(var i=0;i<jiange.childElementCount;i++){
								jiange.childNodes[i].classList.remove('forbidden');
								jiange.childNodes[i].classList.remove('glow2');
							}
						}
						var dialog=_status.event.dialog;
						if(dialog.choice){
							for(var i in dialog.choice){
								game.saveConfig(i,dialog.choice[i].link,true);
							}
							if(get.config('zhu')){
								dialog.choice.main_zhu.parentNode.classList.remove('disabled');
							}
							else{
								dialog.choice.main_zhu.parentNode.classList.add('disabled');
							}
							if(get.config('additional_player')){
								dialog.choice.noreplace_end.parentNode.classList.add('disabled');
								dialog.choice.replace_number.parentNode.classList.add('disabled');
								dialog.choice.choice_number.parentNode.classList.remove('disabled');
							}
							else{
								dialog.choice.noreplace_end.parentNode.classList.remove('disabled');
								dialog.choice.replace_number.parentNode.classList.remove('disabled');
								dialog.choice.choice_number.parentNode.classList.add('disabled');
							}
							var num=parseInt(get.config('battle_number'))*4+parseInt(get.config('replace_number'))+5;
							if(dialog.buttons.length>num){
								for(var i=num;i<dialog.buttons.length;i++){
									dialog.buttons[i].remove();
								}
								dialog.buttons.splice(num);
							}
							else if(dialog.buttons.length<num){
								for(var i=dialog.buttons.length;i<num;i++){
									dialog.buttons.push(ui.create.button(list[i],'character',dialog.buttons[0].parentNode).animate('zoom'))
								}
								game.check();
							}
						}
						addToButton();
					}
					event.changeDialog=function(){
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
							return;
						}
						if(game.changeCoin){
							game.changeCoin(-3);
						}
						list.randomSort();

						var buttons=ui.create.div('.buttons');
						var node=_status.event.dialog.buttons[0].parentNode;
						_status.event.dialog.buttons=ui.create.buttons(list.slice(0,parseInt(get.config('battle_number'))*4+parseInt(get.config('replace_number'))+5),'character',buttons);
						_status.event.dialog.content.insertBefore(buttons,node);
						buttons.animate('start');
						node.remove();

						// _status.event.dialog.close();
						// var dialog=ui.create.dialog('选择出场角色','hidden');
						// _status.event.dialog=dialog;
						// dialog.classList.add('fullwidth');
						// dialog.classList.add('fullheight');
						// dialog.classList.add('fixed');
						// dialog.add('0/'+_status.event.selectButton());
						// dialog.add([list.slice(0,parseInt(get.config('battle_number'))*4+parseInt(get.config('replace_number'))+5),'character']);
						// if(bossbuttons.length){
						// 	dialog.add('挑战魔王');
						// 	dialog.add(bosses);
						// }
						// if(jiangebuttons.length){
						// 	dialog.add('守卫剑阁');
						// 	dialog.add(jiange);
						// }
						// event.addConfig(dialog);
						// dialog.open();
						game.uncheck();
						game.check();
					};
					ui.create.cheat=function(){
						_status.createControl=ui.cheat2;
						ui.cheat=ui.create.control('更换',event.changeDialog);
						delete _status.createControl;
					};
					var createCharacterDialog=function(){
						event.dialogxx=ui.create.characterDialog();
						event.dialogxx.classList.add('fullwidth');
						event.dialogxx.classList.add('fullheight');
						event.dialogxx.classList.add('fixed');
						if(ui.cheat2){
							ui.cheat2.animate('controlpressdownx',500);
							ui.cheat2.classList.remove('disabled');
						}
					};
					if(lib.onfree){
						lib.onfree.push(createCharacterDialog);
					}
					else{
						createCharacterDialog();
					}
					ui.create.cheat2=function(){
						ui.cheat2=ui.create.control('自由选将',function(){
							if(this.dialog==_status.event.dialog){
								if(game.changeCoin){
									game.changeCoin(50);
								}
								this.dialog.close();
								_status.event.dialog=this.backup;
								this.backup.open();
								delete this.backup;
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.animate('controlpressdownx',500);
									ui.cheat.classList.remove('disabled');
								}
							}
							else{
								if(game.changeCoin){
									game.changeCoin(-10);
								}
								this.backup=_status.event.dialog;
								_status.event.dialog.close();
								_status.event.dialog=_status.event.parent.dialogxx;
								this.dialog=_status.event.dialog;
								this.dialog.open();
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.classList.add('disabled');
								}
							}
						});
						if(lib.onfree){
							ui.cheat2.classList.add('disabled');
						}
					}
					if(!ui.cheat&&get.config('change_choice'))
					ui.create.cheat();
					if(!ui.cheat2&&get.config('free_choose'))
					ui.create.cheat2();
					"step 1"
					ui.wuxie.show();
					if(ui.cheat){
						ui.cheat.close();
						delete ui.cheat;
					}
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					}
					if(event.asboss){
						event.asboss.close();
						delete ui.asboss;
					}
					ui.control.style.top='';
					if(!get.is.safari()){
						ui.control.style.transition='';
						ui.control.style.display='none';
					}

					var glows=event.bosses.querySelectorAll('.glow');
					var glows2=event.jiange.querySelectorAll('.glow2');
					if(!glows.length&&!glows2.length){
						if(!get.config('single_control')){
							var addnum;
							if(get.config('additional_player')){
								addnum=parseInt(get.config('battle_number'));
							}
							else{
								addnum=parseInt(get.config('battle_number'))+parseInt(get.config('replace_number'));
							}
							for(var i=0;i<addnum-1;i++){
								result.links.push(event.list.randomRemove());
							}
						}
					}
					for(var i=0;i<result.links.length;i++){
						game.addRecentCharacter(result.links[i]);
					}
					if(_status.mode=='combat'){
						_status.mylist=result.links.slice(0,parseInt(get.config('battle_number')));
						_status.replacelist=result.links.slice(parseInt(get.config('battle_number')));
					}
					else{
						_status.mylist=result.links.slice(0);
					}
					if(ui.coin){
						_status.coinCoeff=get.coinCoeff(_status.mylist);
					}
					for(var i=0;i<result.links.length;i++){
						event.list.remove(result.links[i]);
					}
					if(glows.length){
						_status.vsboss=true;
						_status.enemylist=[];
						for(var i=0;i<glows.length;i++){
							_status.enemylist.push(glows[i].link);
						}
						if(_status.boss){
							var temp=_status.mylist;
							_status.mylist=_status.enemylist;
							_status.enemylist=temp;
							for(var i=_status.enemylist.length;i<_status.mylist.length*3;i++){
								_status.enemylist.push(event.list.randomRemove());
							}
						}
					}
					else if(glows2.length){
						_status.vsboss=true;
						_status.enemylist=[];
						for(var i=0;i<glows2.length;i++){
							_status.enemylist.push(glows2[i].link);
						}
					}
					else{
						event.list.randomSort();
						_status.enemylist=event.list.splice(0,_status.mylist.length);
						if(_status.mode=='combat'&&_status.replacelist){
							_status.enemyreplacelist=event.list.splice(0,_status.replacelist.length);
						}
					}
					if(_status.mode=='combat'&&get.config('additional_player')){
						_status.additionallist=event.list;
					}
				});
			},
			modeSwapPlayer:function(player){
				var content=[game.me.dataset.position,player.dataset.position];
				game.me.classList.remove('current_action');
				player.classList.add('current_action');
				game.addVideo('chessSwap',null,content);
				game.swapControl(player);
				player.chessFocus();
				ui.create.fakeme();
			},
			loadMap:function(){
				var next=game.createEvent('loadMap');
				next.setContent(function(){
					if(!lib.storage.map){
						lib.storage.map=['basic_small','basic_medium','basic_large'];
					}
					if(!lib.storage.newmap){
						lib.storage.newmap=[];
					}
					var sceneview=ui.create.div('.storyscene');
					if(!lib.config.touchscreen&&lib.config.mousewheel){
						sceneview._scrollspeed=30;
						sceneview._scrollnum=10;
						sceneview.onmousewheel=function(){
							if(!this.classList.contains('lockscroll')){
								ui.click.mousewheel.apply(this,arguments);
							}
						};
					}
					lib.setScroll(sceneview);
					var switchScene=function(){
						event.result=this.link;
						sceneview.delete();
						setTimeout(game.resume,300);
					}
					var clickScene=function(e){
						if(this.classList.contains('unselectable')) return;
						if(this._clicking) return;
						if(e&&e.stopPropagation) e.stopPropagation();
						if(this.classList.contains('flipped')){
							return;
						}
						if(this.classList.contains('glow3')){
							this.classList.remove('glow3');
							lib.storage.newmap.remove(this.name);
							game.save('newmap',lib.storage.newmap);
						}
						var sceneNode=this.parentNode;
						var current=document.querySelector('.flipped.scene');
						if(current){
							restoreScene(current,true);
						}
						this.content.innerHTML='';
						ui.create.div('.menubutton.large.enter','进入',this.content,switchScene).link=this.name;
						sceneNode.classList.add('lockscroll');
						var node=this;
						node._clicking=true;
						setTimeout(function(){
							node._clicking=false;
						},700);
						sceneNode.dx=ui.window.offsetWidth/2-(-sceneNode.scrollLeft+this.offsetLeft+this.offsetWidth/2);
						if(Math.abs(sceneNode.dx)<20){
							sceneNode.dx=0;
						}
						if(!sceneNode.sceneInterval&&sceneNode.dx){
							sceneNode.sceneInterval=setInterval(function(){
								var dx=sceneNode.dx;
								if(Math.abs(dx)<=2){
									sceneNode.scrollLeft-=dx;
									clearInterval(sceneNode.sceneInterval);
									delete sceneNode.sceneInterval;
								}
								else{
									var ddx=dx/Math.sqrt(Math.abs(dx))*1.5;
									sceneNode.scrollLeft-=ddx;
									sceneNode.dx-=ddx;
								}
							},16);
						}
						node.style.transition='all ease-in 0.2s';
						node.style.transform='perspective(1600px) rotateY(90deg) scale(0.75)';
						var onEnd=function(){
							node.removeEventListener('webkitTransitionEnd',onEnd);
							node.classList.add('flipped');
							sceneNode.classList.add('lockscroll');
							node.style.transition='all ease-out 0.4s';
							node.style.transform='perspective(1600px) rotateY(180deg) scale(1)'
						};
						node.listenTransition(onEnd);
					}
					ui.click.scene=clickScene;
					var restoreScene=function(node,forced){
						if(node._clicking&&!forced) return;
						if(node.transformInterval){
							clearInterval(node.transformInterval);
							delete node.transformInterval;
						}
						var sceneNode=node.parentNode;
						node._clicking=true;
						setTimeout(function(){
							node._clicking=false;
						},700);
						node.style.transition='all ease-in 0.2s';
						node.style.transform='perspective(1600px) rotateY(90deg) scale(0.75)';
						var onEnd=function(){
							node.removeEventListener('webkitTransitionEnd',onEnd);
							node.classList.remove('flipped');
							if(!sceneNode.querySelector('.flipped')){
								sceneNode.classList.remove('lockscroll');
							}
							node.style.transition='all ease-out 0.4s';
							node.style.transform='perspective(1600px) rotateY(0deg) scale(0.7)'
						};
						node.listenTransition(onEnd);
					}
					ui.click.scene2=restoreScene;
					var createScene=function(name){
						var scene=lib.tafang.map[name];
						var node=ui.create.div('.scene',clickScene);
						node.style.transform='perspective(1600px) rotateY(0deg) scale(0.7)';
						node.name=name;
						node.bgnode=ui.create.div('.background.player',node);
						node.info=scene;
						ui.create.div('.avatar.menu',node.bgnode);
						node.namenode=ui.create.div('.name',node,(scene.name));
						if(lib.storage.map.contains(name)){
							if(lib.storage.newmap.contains(name)){
								node.classList.add('glow3');
							}
							node.namenode.dataset.nature='soilm';
						}
						else{
							node.classList.add('unselectable');
							node.namenode.innerHTML=('未开启');
						}
						var content=ui.create.div('.menu',node);
						lib.setScroll(content);
						node.content=content;
						sceneview.appendChild(node);
						return node;
					}
					event.custom.add.window=function(){
						var current=document.querySelector('.flipped.scene');
						if(current){
							restoreScene(current);
						}
					}
					for(var i in lib.tafang.map){
						createScene(i);
					}
					ui.window.appendChild(sceneview.animate('start'));
					game.pause();
				});
			},
		},
		skill:{
			// ========== 从 chess 迁移（tafang 需要用到） ==========
			_attackmove:{
				trigger:{player:'damageEnd'},
				forced:true,
				popup:false,
				priority:50,
				filter:function(event,player){
					if (!lib.config.damage_move) return false;
					if(!event.source) return false;
					if(get.distance(event.source,player,'pure')>2) return false;
					var xy1=event.source.getXY();
					var xy2=player.getXY();
					var dx=xy2[0]-xy1[0];
					var dy=xy2[1]-xy1[1];
					// if(dx*dy!=0) return false;
					if(dx==0&&Math.abs(dy)==2){
						dy/=2;
					}
					if(dy==0&&Math.abs(dx)==2){
						dx/=2;
					}
					return player.movable(dx,dy);
				},
				content:function(){
					var xy1=trigger.source.getXY();
					var xy2=player.getXY();
					var dx=xy2[0]-xy1[0];
					var dy=xy2[1]-xy1[1];
					if(dx==0&&Math.abs(dy)==2){
						dy/=2;
					}
					if(dy==0&&Math.abs(dx)==2){
						dx/=2;
					}
					if(player.movable(dx,dy)){
						player.move(dx,dy);
					}
				}
			},
			_phasequeue:{
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				content:function(){
					var current=ui.chessinfo.firstChild.querySelector('.glow2');
					if(current){
						current.classList.remove('glow2');
					}
					if(player.instance){
						player.instance.classList.add('glow2');
						ui.chessinfo.firstChild.scrollTop=player.instance.offsetTop-8;
					}
				}
			},
			_chessmove:{
				enable:'phaseUse',
				usable:1,
				direct:true,
				delay:false,
				preservecancel:true,
				filter:function(event,player){
					if(!player.movable(0,1)&&!player.movable(0,-1)&&
						!player.movable(1,0)&&!player.movable(-1,0)){
						return false;
					}
					var move=2;
					move=game.checkMod(player,move,'chessMove',player);
					return move>0;
				},
				content:function(){
					"step 0"
					var move=2;
					move=game.checkMod(player,move,'chessMove',player);
					player.chooseToMove(move).phasing=true;
					"step 1"
					if(ui.confirm){
						ui.confirm.classList.add('removing');
					}
					if(!result.bool){
						var skill=player.getStat().skill;
						skill._chessmove--;
						if(typeof skill._chessmovetried=='number'){
							skill._chessmovetried++;
						}
						else{
							skill._chessmovetried=1;
						}
					}
				},
				ai:{
					order:5,
					result:{
						playerx:function(player){
							var nh=player.countCards('h');
							if(!player.countCards('h','sha')&&
							!player.countCards('h','shunshou')&&
							!player.countCards('h','bingliang')){
								if(nh<=Math.min(3,player.hp)) return Math.random()-0.3;
								else if(nh<=Math.min(2,player.hp)) return Math.random()-0.4;
								return Math.random()-0.5;
							}
							var neighbour;
							neighbour=player.getNeighbour(0,1);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							neighbour=player.getNeighbour(0,-1);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							neighbour=player.getNeighbour(1,0);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							neighbour=player.getNeighbour(-1,0);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							return 1;
						},
						player:function(player){
							if(player.getStat().skill._chessmovetried>=10){
								return 0;
							}
							var x=lib.skill._chessmove.ai.result.playerx(player);
							return x;
						}
					}
				}
			},
			_chesscenter:{
				trigger:{player:['phaseBegin','useCardBegin','useSkillBegin','respondBegin','damageBegin','loseHpBegin'],
				target:'useCardToBegin'},
				forced:true,
				priority:100,
				popup:false,
				filter:function(event, player){
					if (event.skill) return event.skill[0] != '_';
					return true;
				},
				content:function(){
					player.chessFocus();
				},
			},
			// ========== tafang 原有技能 ==========
			tafang_mech_weixingxianjing_skill:{
				filter:function(player){
					for(var i=0;i<_status.enemies.length;i++){
						if(!_status.enemies[i].isTurnedOver()&&
							get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					var list=[];
					for(var i=0;i<_status.enemies.length;i++){
						if(!_status.enemies[i].isTurnedOver()&&
							get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							list.push(_status.enemies[i]);
						}
					}
					if(list.length){
						game.log('小型陷阱发动');
						var target=list.randomGet();
						target.turnOver();
						game.logv(player,'tafang_mech_weixingxianjing_skill',[target]).node.text.style.display='none';
						player.line(target,'green');
					}
				}
			},
			tafang_mech_nengliangqiu_skill:{
				filter:function(player){
					for(var i=0;i<_status.friends.length;i++){
						if(get.chessDistance(player,_status.friends[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					var list1=[],list2=[];
					for(var i=0;i<_status.friends.length;i++){
						if(get.chessDistance(player,_status.friends[i])<=1){
							list2.push(_status.friends[i]);
						}
						else if(get.chessDistance(player,_status.friends[i])<=player.getAttackRange()){
							list1.push(_status.friends[i]);
						}
						// else if(get.chessDistance(player,_status.friends[i])<=4){
						// 	list2.push(_status.friends[i]);
						// }
					}
					if(list2.length){
						game.asyncDraw(list2);
						for(var p of list2){
							p.gainlili();
						}
						player.line(list2,'green');
					}
					if(list1.length){
						game.asyncDraw(list1);
						player.line(list1,'green');
					}
					if(list1.length||list2.length){
						game.log('谷子大派送！');
						game.logv(player,'tafang_mech_nengliangqiu_skill',list1.concat(list2)).node.text.style.display='none';
					}
				}
			},
			tafang_mech_mutong_skill:{
				filter:function(player){
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					var list=[];
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							list.push(_status.enemies[i]);
						}
					}
					if(list.length){
						game.log('琪斯美又跳崖了！');
						var targets=list.randomGets(1);
						game.logv(player,'tafang_mech_mutong_skill',targets).node.text.style.display='none';
						player.line(targets,'green');
						for(var i=0;i<targets.length;i++){
							targets[i].damage('nosource');
						}
					}
				}
			},
			tafang_mech_guangmingquan_skill:{
				filter:function(player){
					for(var i=0;i<_status.friends.length;i++){
						if(_status.friends[i].hp<_status.friends[i].maxHp&&
							get.chessDistance(player,_status.friends[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					var list=[];
					for(var i=0;i<_status.friends.length;i++){
						if(_status.friends[i].hp<_status.friends[i].maxHp&&
							get.chessDistance(player,_status.friends[i])<=player.getAttackRange()){
							list.push(_status.friends[i]);
						}
					}
					if(list.length){
						game.log('天狗圣水慰问！');
						player.line(list,'green');
						game.logv(player,'tafang_mech_guangmingquan_skill',list.slice(0)).node.text.style.display='none';
						while(list.length){
							list.shift().recover();
						}
					}
				}
			},
			tafang_mech_jiguanren_skill:{
				filter:function(player){
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					'step 0'
					var list=[];
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							list.push(_status.enemies[i]);
						}
					}
					if(list.length){
						game.log('河童大功率水冷鼓风机启动');
						player.line(list,'green');
						game.logv(player,'tafang_mech_jiguanren_skill',list.slice(0)).node.text.style.display='none';
						event.list=list;
					}
					else{
						event.finish();
					}
					'step 1'
					if(event.list.length){
						var target=event.list.shift();
						var he=target.getCards('he');
						if(he.length){
							target.discard(he.randomGets(Math.ceil(Math.random()*2)));
						}
						event.redo();
					}
				}
			},
			tafang_mech_gongchengche_skill:{
				filter:function(player){
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							return true;
						}
					}
					return false;
				},
				content:function(){
					var list=[];
					for(var i=0;i<_status.enemies.length;i++){
						if(get.chessDistance(player,_status.enemies[i])<=player.getAttackRange()){
							list.push(_status.enemies[i]);
						}
					}
					if(list.length){
						game.log('里香的战车启动');
						var target=list.randomGet();
						player.line(target,'fire');
						target.damage('fire','nosource');
						var he=target.getCards('he');
						if(he.length){
							target.discard(he.randomGet());
						}
						game.logv(player,'tafang_mech_gongchengche_skill',[target]).node.text.style.display='none';
					}
				}
			},
		},
		translate:{
			friend:'友',
			enemy:'敌',
			neutral:'中',
			trueColor:"zhu",
			falseColor:"wei",
			_chessmove:'移动',

			mode_tafang_character_config:'塔防模式',
			mode_tafang_card_config:'塔防模式',

			tafang_mech_weixingxianjing:'小型陷阱',
			tafang_mech_weixingxianjing_skill:'捕猎',
			tafang_mech_weixingxianjing_skill_info:'一轮令攻击范围内的一名随机敌人翻面',
			tafang_mech_mutong:'钓瓶落',
			tafang_mech_mutong_skill:'憎恶',
			tafang_mech_mutong_skill_info:'一轮对攻击范围内的一名随机敌人造成一点伤害',
			tafang_mech_nengliangqiu:'同人志即卖会',
			tafang_mech_nengliangqiu_skill:'无料配信',
			tafang_mech_nengliangqiu_skill_info:'一轮令攻击范围内的所有友方角色摸1张牌，距离1以内再获得1点灵力',
			tafang_mech_jiguanren:'河童的水冷机',
			tafang_mech_jiguanren_skill:'鼓风',
			tafang_mech_jiguanren_skill_info:'一轮弃置攻击范围内的所有敌方角色各1~2张牌',
			tafang_mech_gongchengche:'花之战车',
			tafang_mech_gongchengche_skill:'攻坚',
			tafang_mech_gongchengche_skill_info:'一轮对攻击范围内的一名随机敌方角色造成1点火焰伤害，并随机弃置其一张牌',
			tafang_mech_guangmingquan:'大蛤蟆之池',
			tafang_mech_guangmingquan_skill:'神水',
			tafang_mech_guangmingquan_skill_info:'一轮令攻击范围内的所有友方角色各回复一点体力',

			tafang_mech_dubiaoxianjing:'毒镖陷阱',
			tafang_mech_dubiaoxianjing_skill:'毒镖',
			tafang_mech_dubiaoxianjing_skill_info:'每当攻击范围内的一名敌方角色',
			tafang_mech_jiqishi:'集合石',
			tafang_mech_shenmidiaoxiang:'神秘雕像',
			tafang_mech_shenpanxianjing:'审判之刃',
			tafang_mech_shiyuansu:'石元素',
			tafang_mech_wuyashenxiang:'乌鸦神像',
		},
		ui:{
			create:{
				playergrid:function(player,x,y){
					var pos=player.getDataPos(x,y);
					if(get.mode()=='tafang'){
						if(pos<ui.chesswidth) return false;
						if(pos/ui.chesswidth>=ui.chessheight-1) return false;
					}
					var node=ui.create.div('.player.minskin.playergrid',player.parentNode);
					node.link=player;
					node.dataset.position=pos;
					return node;
				},
				fakeme:function(){
					if(ui.fakeme){
						ui.fakeme.delete();
					}
					ui.fakeme=ui.create.div('.fakeme.avatar',ui.me);
					ui.fakeme.style.backgroundImage=game.me.node.avatar.style.backgroundImage;
				}
			},
			click:{
				chessInfo:function(e){
					if(this.link.isAlive()){
						this.link.chessFocus();
						if(this.link.classList.contains('selectable')||
							this.link.classList.contains('selected')){
							ui.click.target.call(this.link,e);
							ui.click.window.call(ui.window,e);
						}
						e.stopPropagation();
					}
				},
				playergrid:function(){
					if(!_status.paused) return;
					var pos=parseInt(this.dataset.position);
					this.link.moveTo(pos%ui.chesswidth,Math.floor(pos/ui.chesswidth));
					if(ui.movegrids){
						while(ui.movegrids.length){
							ui.movegrids.shift().delete();
						}
					}
					_status.event.result={
						bool:true,
						move:this.link.dataset.position
					};
					game.resume();
				},
				obstacle:function(){
					if(_status.event.chooseObstacle&&_status.paused&&
						_status.event.obstacles&&_status.event.obstacles.contains(this)){
						_status.event.obstacle=this;
						game.resume();
					}
				}
			}
		},
		get:{
			chessDistance:function(from,to){
				var fxy=from.getXY();
				var txy=to.getXY();
				return Math.abs(fxy[0]-txy[0])+Math.abs(fxy[1]-txy[1]);
			},
			rawAttitude:function(from,to){
				return (from.side===to.side?6:-6);
			},
			tafangRank:function(name){
				if(typeof name=='object'&&name.name) name=name.name;
				var rank=lib.rank;
				if(!rank) return 'x';
				var keys=['s','ap','a','am','bp','b','bm','c','d'];
				for(var i=0;i<keys.length;i++){
					var list=rank[keys[i]];
					if(Array.isArray(list)&&list.contains(name)) return keys[i];
				}
				return 'x';
			},

			// ★ 统一取费用：覆盖表 → rank 映射 → 兜底 3
			tafangCost:function(name){
				// 1) 覆盖表优先（可选，给你调个别武将用）
				if(lib.tafangCost && typeof lib.tafangCost[name]=='number'){
					return lib.tafangCost[name];
				}
				// 2) rank → 基础费用
				var map={
					'd':1, 'c':2, 'bm':3, 'b':4, 'bp':5,
					'am':6, 'a':7, 'ap':8, 's':9, 'sp':10,
					'x':3							  // 不在 rank 里 → 3
				};
				var r=get.tafangRank(name);
				var c=map[r];
				if(typeof c!='number') c=3;			// ★ 未设置默认 3
				// 3) 难度加成：简单 +0、普通 +1、困难 +2
				var diff=parseInt(get.config('tafang_difficulty'));
				if(isNaN(diff)) diff=1;				// ★ 未设置默认普通
				return c+Math.max(0,diff-1);
			},
		},
		characterPack:{
			mode_tafang:{
				// tafang_mech_dubiaoxianjing:['','',4,[],['boss'],2],
				// tafang_mech_wuyashenxiang:['','',4,[],['boss'],2],
				// tafang_mech_shenpanxianjing:['','',4,[],['boss'],2],
				// tafang_mech_shenmidiaoxiang:['','',4,[],['boss'],5],
				// tafang_mech_shiyuansu:['','',4,[],['boss'],5],
				// tafang_mech_jiqishi:['','',4,[],['boss'],5],

				tafang_mech_guangmingquan:['','2',3,[],['boss'],3],
				tafang_mech_nengliangqiu:['','3',3,[],['boss'],3],
				tafang_mech_jiguanren:['','3',3,[],['boss'],3],
				tafang_mech_weixingxianjing:['','2',3,[],['boss'],4],
				tafang_mech_mutong:['','3',3,[],['boss'],4],
				tafang_mech_gongchengche:['','2',3,[],['boss'],4],
			}
		},
		cardPack:{
			mode_tafang:[]
		},
		rank:{
			rarity:{
				legend:[
					'koakuma','chen','alice','lilywhite','lunasa','merlin','lyrica','ran','yukari','wriggle'
					,'keine','tewi','eirin','lilyblack','hetate','daiyousei','renko','meribel','kanade','shigure','nero','miku',
				],
				epic:[
				   'rumia', 'patchouli','flandre','letty','youmu','yuyuko','suika','marisa','mokou','medicine','yuuka','komachi',
					'sinon','megumin','yudachi','mordred',
				],
				rare:[
					'patchouli','sakuya','remilia','mystia','reimu','reisen','kaguya','eiki','aya','cirno',
					'arisa','kurumi','scathach','satone',
				],
			}
		},
		posmap:{},
		help:{
			'塔防模式':
			'<ul><li>阻上敌人到达最下方的出口，坚持到给定的回合数即获得胜利<li>'+
			'每轮可获得10个行动点，用来布置机关、招募武将。场上每有一个友方武将，行动点数-1。游戏难度将影响不同操作消耗的行动点数。未用完的行动点将减半（向下取整）并累积到下一轮<li>'+
			'每一轮在最上方的一个随机位置增加一名敌人，若最上方已有角色，则将其下移一格<li>'+
			'战场上最多出现3个相同的机关，每个机关在置入战场3轮后消失。战场上最多招募5名友方角色。<li>'+
			'敌方角色到达底部出口时游戏失败，已方角色到达底部出口，将被移出游戏',
		},
	};
});