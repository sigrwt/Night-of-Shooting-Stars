'use strict';
game.import('mode',function(lib,game,ui,get,ai,_status){
	return {
		name:'ftg',
		start:function(){
			"step 0"
			ui.backgroundMusic.pause();			//飞虎：关闭选角色音乐
			var playback=localStorage.getItem(lib.configprefix+'playback');
			if(playback){
				ui.create.me();
				ui.arena.style.display='none';
				ui.system.style.display='none';
				_status.playback=playback;
				localStorage.removeItem(lib.configprefix+'playback');
				var store=lib.db.transaction(['video'],'readwrite').objectStore('video');
				store.get(parseInt(playback)).onsuccess=function(e){
					if(e.target.result){
						game.playVideoContent(e.target.result.video);
					}
					else{
						alert('播放失败：找不到录像');
						game.reload();
					}
				}
				event.finish();
				return;
			}
			// 已通关解锁角色
			var record = lib.config.gameRecord.ftg;
			//萃梦想
			if ((record && record.data['Th7_5'] && Math.floor(record.data['Th7_5'][4]/8) > 0)){
				lib.forbidftg.Th7_5_free.push("remilia");//灵梦+32魔理沙+16妖梦+8解锁蕾米
			}
			if ((record && record.data['Th7_5'] && (record.data['Th7_5'][4]%8) > 1)){
				lib.forbidftg.Th7_5_free.push("yuyuko");//咲夜+2帕秋莉+4解锁幽幽子
			}
			if ((record && record.data['Th7_5'] && record.data['Th7_5'][4] > 0)){
				lib.forbidftg.Th7_5_free.push("yukari");//爱丽丝+1解锁紫妈
				lib.forbidftg.Th7_5_free.push("suika");//爱丽丝+1解锁萃香
			}
			lib.forbidftg.Th7_5_free.push("meiling");//美玲直接加入
			if ((record && record.data['Th7_5'] && record.data['Th7_5'][4] > 62)){
				lib.forbidftg.Th7_5.push("remilia");
				lib.forbidftg.Th7_5.push("yuyuko");//起始六人通关解锁蕾米和幽幽子剧情
			}
			if ((record && record.data['Th7_5'] && record.data['Th7_5'][4] > 254)){
				lib.forbidftg.Th7_5.push("yukari");//八人通关+62+128解锁紫妈剧情
			}
			if ((record && record.data['Th7_5'] && record.data['Th7_5'][4] > 510)){
				lib.forbidftg.Th7_5.push("suika");//解锁萃香剧情
			}
			//绯想天
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%4) > 1)){
				lib.forbidftg.Th10_5.push("alice");//魔理沙+2解锁爱丽丝
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%8) > 3)){
				lib.forbidftg.Th10_5.push("patchouli");//咲夜+4解锁帕秋莉
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%2) > 0)){
				lib.forbidftg.Th10_5.push("youmu");//灵梦+1解锁妖梦
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%8) > 6)){
				lib.forbidftg.Th10_5.push("remilia");//起始三人通关解锁蕾米
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4].toString(2).match(/1/g) || []).length > 3)){
				lib.forbidftg.Th10_5.push("yukari");//四人通关解锁紫妈
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4].toString(2).match(/1/g) || []).length > 6)){
				lib.forbidftg.Th10_5.push("yukari");//七人通关解锁萃香
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%16) > 7)){
				lib.forbidftg.Th10_5.push("reisen");//爱丽丝+8通关解锁铃仙
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%128) > 63)){
				lib.forbidftg.Th10_5.push("aya");//蕾米+64通关解锁文文
			}
			if ((record && record.data['Th10_5'] && (record.data['Th10_5'][4]%64) > 31)){
				lib.forbidftg.Th10_5.push("komachi");//妖梦+32通关解锁小町
			}
			if ((record && record.data['Th10_5'] && record.data['Th10_5'][4] > 0)){
				lib.forbidftg.Th10_5_free.push("iku");//解锁衣玖
				lib.forbidftg.Th10_5_free.push("tenshi");//解锁天子
			}
			//非想天则
			lib.forbidftg.Th12_3_free=[];
			if ((record && record.data['Th10_5'] && record.data['Th10_5'][0] > 0)){
				lib.forbidftg.Th12_3_free=['suika','yukari','yuyuko','remilia','youmu'];
			}
			if ((record && record.data['Th12_3'] && record.data['Th12_3'][4] > 6)){
				lib.forbidftg.Th12_3_free.push('patchouli');//起始三人通关解锁帕秋莉
			}
			if ((record && record.data['Th12_3'] && record.data['Th12_3'][4] > 2)){
				lib.forbidftg.Th12_3_free.push("alice");//早苗+1琪露诺+2通关解锁爱丽丝
			}
			lib.forbidftg.Th12_3_free.push("marisa");
			lib.forbidftg.Th12_3_free.push("reimu");
			lib.forbidftg.Th12_3_free.push("sanae");
			lib.forbidftg.Th12_3_free.push('cirno');
			lib.forbidftg.Th12_3_free.push("meiling");
			if ((record && record.data['Th12_3'] && record.data['Th12_3'][4] > 0)){
				lib.forbidftg.Th12_3.push("cirno");//早苗+1通关解锁琪露诺
			}
			if ((record && record.data['Th12_3'] && record.data['Th12_3'][4] > 2)){
				lib.forbidftg.Th12_3.push("meiling");//早苗+1琪露诺+2通关解锁红美铃
			}
			if ((record && record.data['Th12_3'] && record.data['Th12_3'][4] > 0)){
				//lib.forbidftg.Th12_3_free.push('utsuho');
				lib.forbidftg.Th12_3_free.push('suwako');//早苗+1通关解锁灵乌路空和诹访子
			}
			if ((record && record.data['Th10_5'] && record.data['Th10_5'][0] > 0)){
				lib.forbidftg.Th12_3_free.push("reisen");
				lib.forbidftg.Th12_3_free.push("aya");
				lib.forbidftg.Th12_3_free.push("komachi");
				lib.forbidftg.Th12_3_free.push("iku");
				lib.forbidftg.Th12_3_free.push("tenshi");
			}
			// 这里是加载角色的地方
			for(var i in lib.characterPack.mode_ftg){
				lib.character[i]=lib.characterPack.mode_ftg[i];
				if(!lib.character[i][4]){
					lib.character[i][4]=[];
				}
			}
			for(var i in lib.cardPack.mode_ftg){
				lib.card[i]=lib.cardPack.mode_ftg[i];
			}
			/*for(var i in lib.skill){
				if(lib.skill[i].changeSeat){
					lib.skill[i]={};
					if(lib.translate[i+'_info']){
						lib.translate[i+'_info']='此模式下不可用';
					}
				}
			}*/
			/*if (_status.connectMode){
				event.current = {};
				event.current.name = lib.configOL.boss;
				event.goto(2);
			}*/			//飞虎：暂时不联网
			lib.setPopped(ui.rules,function(){
				var uiintro=ui.create.dialog('hidden');
					uiintro.add('<div class="text left">1. 各角色体力上限上调； <br> 2. 摸牌阶段额外摸一张牌（先手玩家第一回合少摸一张牌）然后弃置一张手牌，若弃置黑色牌，本回合获得一点移动力，若弃置红色牌，本回合获得3点移动力，出牌阶段可以根据移动力进行移动； <br> 3. 击坠敌人后，来源回复2点体力，或摸两张牌（未实装）； <br> 4. 准备阶段，场上敌人数小于2，会刷出下一个敌人（暂不涉及） <br> 5. 手牌上限+X（X为已通关卡数量） </div>');
					uiintro.add('<div class="text left">选择一个规则，然后选择你喜欢的自机来挑战</div>');
					uiintro.add('<div class="text left"><a href = "https://www..com/" target="_blank">了解更多格斗设想</a></div>');
					uiintro.add(ui.create.div('.placeholder.slim'))
				return uiintro;
			},400);
			lib.translate.restart='返回';
			lib.init.css(lib.assetURL+'layout/mode','boss');
			game.delay(0.1);
			"step 1"
			var bosslist=ui.create.div('#bosslist.hidden');
			event.bosslist=bosslist;
			//lib.setScroll(bosslist);
			//bosslist.ontouchmove = ui.click.touchScroll;
			//bosslist.style.WebkitOverflowScrolling='touch';
			if(!lib.config.touchscreen&&lib.config.mousewheel){
				bosslist._scrollspeed=30;
				bosslist._scrollnum=10;
				bosslist.onmousewheel=ui.click.mousewheel;
			}
			var onpause=function(){
				ui.window.classList.add('bosspaused');
			}
			var onresume=function(){
				ui.window.classList.remove('bosspaused');
			}
			game.onpause=onpause;
			game.onpause2=onpause;
			game.onresume=onresume;
			game.onresume2=onresume;
			ui.create.div(bosslist);

			event.current=null;
			// 模式选择
			var list=[];
			for(var i in lib.character){
				lib.character[i][2]=Math.floor(parseInt(lib.character[i][2])*1.7);
				var info=lib.character[i];
				if(info[4].contains('boss')){
					var player=ui.create.player(bosslist).init(i);
					if(lib.characterPack.mode_ftg[i]&&get.config(i+'_boss_config')==false){
						player.style.display='none';
					}
					if(player.hp==0){
						player.node.hp.style.display='none';
					}
					player.node.lili.style.display='none';
					list.push(player);
					player.node.hp.classList.add('text');
					player.node.hp.dataset.condition='';
					player.node.hp.innerHTML=info[2];
					if(info[2]==Infinity){
						player.node.hp.innerHTML='∞';
					}
					player.setIdentity(player.name);
					//player.node.identity.dataset.color=info[5];
					// bosslistlinks[cfg]=player;
					player.classList.add('bossplayer');

					if(lib.storage.current==i){
						event.current=player;
						player.classList.add('highlight');
						_status.bosschoice=i;			//飞虎：
						if(!lib.config.continue_name_boss&&lib.boss[i]&&lib.boss[i].control){
							_status.bosschoice=lib.boss[i].control();
							_status.bosschoice.name=i;
							_status.bosschoice.link=lib.boss[i].controlid||i;
						}
					}

					// if(!get.config(cfg)){
					// 	player.style.display='none';
					// }
				}
			}
			//if(lib.config.plays.contains('stg'))lib.config.plays.push('stg');
			/*window.game=game;
			var script=lib.init.js(lib.assetURL+'mode','stg',function(){
				lib.imported['mode']['stg']=function(mode){
					lib.skill["liudaojian"]=mode.skill["liudaojian"];
					game.finishSkill("liudaojian");
				};
			});*/
			//if(!lib.skill.liudaojian){
				/*game.loadModeAsync('stg',function(mode){
					lib.skill["liudaojian"]=mode.skill["liudaojian"];
					game.finishSkill("liudaojian");
				});*/
			//}
			/*if(lib.config.characters.contains("sakura")){
				lib.characterPack.sakura['stg_youmu']=['female','2', 4, ['yishan','liudaojian'],["mode:stg","des:“”<br>“由妖怪锻造的这把楼观剑，斩不断的东西。。。是不是太多了些？”<br><b>画师：カイザ閣下</b>"]];
				lib.character.stg_youmu=lib.characterPack.sakura.stg_youmu;
			}else{
				lib.character.stg_youmu=['female','2', 4, ['yishan','liudaojian'],["mode:stg","des:“”<br>“由妖怪锻造的这把楼观剑，斩不断的东西。。。是不是太多了些？”<br><b>画师：カイザ閣下</b>"]];
			}*/
			if(!list.length){
				alert('没有可挑战的BOSS');
				event.finish();
				lib.init.onfree();
				_status.over=true;
				return;
			}
			if(!event.current){
				event.current=bosslist.childNodes[1];
				event.current.classList.add('highlight');
			}
			_status.bosschoice = event.current;			//飞虎：记录选择的BOSS
			ui.create.div(bosslist);
			ui.control.style.transitionProperty='opacity';
			ui.control.classList.add('bosslist');
			setTimeout(function(){
				ui.control.style.transitionProperty='';
			},1000);

			ui.window.appendChild(bosslist);

			setTimeout(function(){
				if(event.current){
					var left=event.current.offsetLeft-(ui.window.offsetWidth-180)/2;
					if(bosslist.scrollLeft<left){
						bosslist.scrollLeft=left;
					}
				}
				bosslist.show();
			},200);
			game.me=ui.create.player();
			//选将
			if(lib.config.continue_name_boss){
				event.noslide=true;
				lib.init.onfree();
			}
			else{
				game.chooseCharacter(function(target){
					if(event.current){
						event.current.classList.remove('highlight');
					}
					event.current=target;
					game.save('current',target.name);
					target.classList.add('highlight');
					if(_status.bosschoice){
						var name=target.name;
						if(lib.boss[target.name]&&lib.boss[target.name].controlid){
							name=lib.boss[target.name].controlid;
						}
					}
					if(lib.boss[target.name]&&lib.boss[target.name].control){
						_status.createControl=ui.control.firstChild;
						_status.bosschoice=lib.boss[target.name].control();
						_status.bosschoice.name=target.name;
						_status.bosschoice.link=lib.boss[target.name].controlid||target.name;
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
							_status.bosschoice.classList.add('disabled');
						}
						delete _status.createControl;
					}
					var list=[];
					for (var j in lib.forbidftg){
						//if (lib.forbidftg[j][0] == target.name){
							list = lib.forbidftg[target.name];//.slice(1);
						//}
					}
					var dialog = document.getElementById("choosecharacter");
					var r = dialog.getElementsByClassName("button");
					for (var i = r.length - 1; i >= 0; --i){
						r[i].delete();
					}
					dialog.add([list,'character']);
					var b = dialog.getElementsByClassName("button");
					for (var f = b.length - 1; f >= 0; --f){
						b[f].classList.add('selectable');
					}
				});
			}
			if(lib.config.test_game){
				event.current.classList.remove('highlight');
				if(event.current.nextSibling&&event.current.nextSibling.classList.contains('player')){
					event.current=event.current.nextSibling;
				}
				else{
					event.current=event.current.parentNode.childNodes[1];
				}
				game.save('current',event.current.name);
			}
			"step 2"
			lib.card["ryuuuu"]={};
			lib.card.list=[
				["spade",2,"sha"],
				["spade",5,"sha"],
				["spade",6,"sha"],
				["spade",7,"sha"],
				["spade",8,"sha"],
				["spade",9,"sha"],
				["spade",10,"sha"],
				["spade",12,"sha"],
				["club",2,"sha"],
				["club",3,"sha"],
				["club",4,"sha"],
				["club",5,"sha"],
				["club",6,"sha"],
				["club",7,"sha"],
				["club",8,"sha"],
				["club",9,"sha"],
				["club",10,"sha"],
				["club",11,"sha"],
				["club",12,"sha"],
				["heart",10,"huosha",'',1],
				["heart",10,"huosha",'',1],
				["heart",11,"huosha",'',1],
				["diamond",6,"huosha",'',1],
				["diamond",7,"huosha",'',1],
				["diamond",8,"huosha",'',1],
				["diamond",9,"huosha",'',1],
				["diamond",10,"huosha",'',1],
				["diamond",13,"huosha",'',1],
				["heart",4,"kuabu",'',1],
				["heart",5,"kuabu",'',1],//两张红杀换-1跨步
				["heart",2,"shan"],
				["heart",2,"shan"],
				["heart",13,"shan"],
				["diamond",2,"shan"],
				["diamond",2,"shan"],
				["diamond",3,"shan"],
				["diamond",4,"shan"],
				["diamond",5,"shan"],
				["diamond",6,"shan"],
				["diamond",7,"shan"],
				["diamond",8,"shan"],
				["diamond",9,"shan"],
				["diamond",10,"shan"],
				["diamond",11,"shan"],
				["diamond",11,"shan"],
				["heart",3,"tao"],
				["heart",4,"tao"],
				["heart",12,"tao"],
				["diamond",12,"tao"],
				["heart",6,"jiu"],
				["heart",7,"jiu"],
				["heart",8,"jiu"],
				["heart",9,"jiu"],

				["spade",1,"juedou"],
				["club",1,"juedou"],
				["diamond",1,"juedou"],
				["heart",11,"kusanagi"],//决斗换草薙剑
				["heart",7,"wuzhong"],
				["heart",8,"wuzhong"],
				["heart",9,"wuzhong"],
				["spade",3,'shunshou'],
				["spade",4,'shunshou'],
				["diamond",3,'shunshou'],
				["diamond",4,'shunshou'],//-1顺手牵羊
				["spade",3,'guohe'],
				["spade",4,'guohe'],
				["spade",10,'guohe'],
				["diamond",12,'guohe'],
				["club",3,'guohe'],
				["club",4,'guohe'],
				["spade",8,'magatama'],//过河拆桥换八咫琼勾玉
				["club",7,'magatama'],
				["club",1,'ryuuuu'],//无懈可击换龙宫羽衣
				["spade",11,'wuxie'],
				["spade",12,'wuxie'],
				["club",12,'wuxie'],
				["heart",12,'houraiyuzhi',"",0],//蓬莱玉枝减灵力
				["heart",1,'reidaisai'],
				["heart",6,'reidaisai'],
				["diamond",5,'saiqianxiang',"",0],//例大祭减灵力
				["club",13,'danmakucraze'],
				["spade",13,'danmakucraze'],//+2保留
				["club",10,'caifang'],
				["club",11,'caifang'],
				["diamond",1,'deathfan'],
				["club",9,'frog',""],
				["spade",9,'frog',""],
				["club",2,'hourai',"",-1],
				["diamond",13,'gungnir',"",-1],//冈格尼尔减灵力

				["spade",1,'windfan',"",1],
				["heart",1,'lunadial',"", 1],
				["spade",2,'ibuki',"",1],
				["heart",3,'pantsu',"", 1],
				["heart",5,'yinyangyu',"",-0],
				["spade",5,'hakkero',"", -1],//八卦炉减灵力
				["club",5,'lantern',"",-0],
				["club",6,'bailou',"",-1],
				["spade",6,'louguan',"",1],
				["club",8,'mirror'],
				["spade",11,'book',"",1],
				["spade",13,'book',"",1],
				["spade",7,'stone', '', 1],
				["heart",13,'laevatein',"",1],
				["club",13,'zhiyuu',"",1],//武装

				["diamond",1,'bingyu'],
				["spade",10,'suijiyingbian'],//["spade",2,'simen'],
				["club",3,'zuiye'],
				["spade",13,'stg_mingyun'],//["spade",4,'lingbi'],
				["heart",5,'jinchan'],//["heart",6,'huanxiang'],
				["club",7,'jingxia'],
				["heart",8,'tianguo'],
				["diamond",9,'huazhi'],
				
				[null,0,'stg_zhuanzhu'],
				[null,0,'stg_zhuanzhu'],
				[null,0,'stg_jiejie'],
				[null,0,'stg_jiejie'],
				[null,0,'stg_chongci'],
				[null,0,'stg_chongci'],
				[null,0,'qusan'],
				[null,0,'qusan'],
				[null,0,'jinu'],
				[null,0,'jinu'],
				[null,0,'boss_gushou'],
				[null,0,'boss_gushou'],
				[null,0,'qianxing'],
				[null,0,'qianxing'],
				[null,0,'lingyong'],
				[null,0,'lingyong'],
			];
			//lib.card.list = lib.card.list.concat([[null,0,'boss_sansi'],[null,0,'boss_sansi'],[null,0,'boss_gushou'],[null,0,'boss_gushou'],[null,0,'boss_poxian'],[null,0,'boss_poxian']]);
			ui.create.cardsAsync();
			game.finishCards();
			//game.addGlobalSkill('autoswap');			//飞虎：应该不涉及一控多
			ui.arena.setNumber(8);			//飞虎：设定为8人局UI
			/*var list=['bingyu', 'lingbi', 'caifang', 'reidaisai'];
			var map={
				bingyu:'',
				lingbi:'',
				caifang:'',			//飞虎：坐好了，别嬉皮笑脸的，每个模式都换你
				reidaisai:'',
				saiqianxiang:'',
			};*/
			/*for(var i=0;i<list.length;i++){
				if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['boss'];
				else lib.card[list[i]].forbid.push('boss');
				game.removeCard(list[i], map[list[i]]);
			}*/

			//lib.skill['saiqian_skill3'].viewAs = {name:'reidaisai2'};
			game.bossinfo=lib.boss.global;
			for(var i in lib.boss[event.current.name]){
				game.bossinfo[i]=lib.boss[event.current.name][i];
			}
			//delete lib.boss;
			setTimeout(function(){
				ui.control.classList.remove('bosslist');
			},500);
			var boss=ui.create.player();
			boss.getId();
			game.boss=boss;
			boss.init(event.current.name);
			boss.side=true;
			/*if (status.connectMode){
				event.current = boss;
				ui.window.appendChild(boss);
				ui.arena.appendChild(boss);
			}			//飞虎：暂时不联网
			else */if(!event.noslide){
				var rect=event.current.getBoundingClientRect();
				boss.animate('bossing');
				boss.node.hp.animate('start');
				boss.bossinginfo=[rect.left+rect.width/2,rect.top+rect.height/2];
				boss.style.transition='all 0s';
				boss.node.equips.style.opacity='0';
			}
			else{
				boss.animate('start');
			}
			boss.setIdentity('zhu');
			boss.identity='zhu';
			if(lib.config.continue_name_boss){
				result=lib.config.continue_name_boss;
				game.saveConfig('continue_name_boss');
			}
			//result.links = ['reimu', 'reimu', 'reimu'];
			// 玩家加入游戏
			for(var i=0;i<result.links.length;i++){
				var player=ui.create.player();
				player.getId();
				player.init(result.links[i]).animate('start');
				player.setIdentity('cai');
				player.identity='cai';
				player.side=false;
				game.players.push(player);
				// 如果玩家选择的是BOSS
				if(result.boss){
					//if(game.bossinfo.minion){
						player.dataset.position=2;
					//}else{
					//	player.dataset.position=2;
					//}
				}
				// 如果玩家选择的不是BOSS
				else{
					player.dataset.position=6;
				}
				ui.arena.appendChild(player);
			}
			game.playerMap[player.dataset.position]=player;
			// boss加入游戏:BOSS的UI座位位置（8人场，BOSS对应位置）
			if(result.boss){
				game.players.unshift(boss);
				boss.dataset.position=2;
			}
			else{
				game.players.push(boss);
				boss.dataset.position=2;
			}
			// BOSS随从加入游戏
			/*if(game.bossinfo.minion){
				// 如果玩家不是BOSS，BOSS放到6号位
				
				//if(!result.boss){
				//	boss.dataset.position=6;
				//}
				
				for(var i in game.bossinfo.minion){
					var player=ui.create.player();
					player.getId();
					player.init(game.bossinfo.minion[i]);
					if(boss.bossinginfo){
						player.animate('bossing');
						player.node.hp.animate('start');
						player.style.transition='all 0s';
					}
					else{
						player.animate('start');
					}
					player.setIdentity('zhong');
					player.identity='zhong';
					player.side=true;
					game.players.push(player);
					// parseInt 就是那个2和8
					var num=parseInt(i);
					// 如果玩家是boss（0号位），那么分别安排到1和7位
					if(result.boss){
						player.dataset.position=num-1;
					}
					// 如果玩家不是boss，2号位安排到7，8号位安排到5。
					else{
						if(num==2){
							//player.dataset.position=7;
							player.dataset.position=3;
						}
						else{
							//player.dataset.position=num-3;
							player.dataset.position=5;
						}
					}
					ui.arena.appendChild(player);
					if(boss.bossinginfo){
						var rect=player.getBoundingClientRect();
						player.style.transform='translate('+(boss.bossinginfo[0]-rect.left-rect.width/2)+'px,'+(boss.bossinginfo[1]-rect.top-rect.height/2)+'px) scale(1.1)';
						ui.refresh(player);
						player.style.transition='';
						player.style.transform='';
					}
				}
			}*/
			ui.create.me();
			ui.fakeme=ui.create.div('.avatar',ui.me);
			game.playerMap[boss.dataset.position]=boss;			//飞虎：为啥对决还是没坐标啊
			if(game.me!==boss){
				//game.singleHandcard=true;
				//ui.arena.classList.add('single-handcard');
				//ui.window.classList.add('single-handcard');
				//game.onSwapControl();

				/*if(lib.config.show_handcardbutton){
					lib.setPopped(ui.create.system('手牌',null,true),function(){
						var uiintro=ui.create.dialog('hidden');

						var players=game.players.concat(game.dead);
						for(var i=0;i<players.length;i++){
							if(players[i].side==game.me.side&&players[i]!=game.me){
								uiintro.add(get.translation(players[i]));
								var cards=players[i].getCards('h');
								if(cards.length){
									uiintro.addSmall(cards,true);
								}
								else{
									uiintro.add('（无）');
								}
							}
						}

						return uiintro;
					},220);
				}*/
			}
			else{
				ui.fakeme.style.display='none';
			}
			//game.me.node.handcards1.style.cssText+="left: -125px !important;";			//-120px
			if(lib.config.intro_character=="monika"){
				ui.me.setBackgroundImage('theme/monika/mebg.jpg');
				ui.me.style.backgroundSize='initial';
				//ui.me.style.opacity=0.4;
				//ui.me.style.backgroundRepeat = 'no-repeat';
				ui.me.style.backgroundPosition = "right";
			}
			/*if(game.bossinfo.chongzheng){
				lib.setPopped(ui.create.system('重整',null,true),function(){
					var uiintro=ui.create.dialog('hidden');

					uiintro.add('重整');
					uiintro.add('');
					var table=ui.create.div('.bosschongzheng');

					var tr,td,added=false;
					for(var i=0;i<game.dead.length;i++){
						if(typeof game.dead[i].storage.boss_chongzheng!=='number') continue;
						added=true;
						tr=ui.create.div(table);
						td=ui.create.div(tr);
						td.innerHTML=get.translation(game.dead[i]);
						td=ui.create.div(tr);
						if(game.dead[i].maxHp>0){
							td.innerHTML='剩余'+(game.dead[i].storage.boss_chongzheng)+'回合';
						}
						else{
							td.innerHTML='无法重整'
						}
					}

					if(!added){
						uiintro.add('<div class="text center">（无重整角色）</div>');
						uiintro.add(ui.create.div('.placeholder.slim'))
					}
					else{
						uiintro.add(table);
					}

					return uiintro;
				},180);
			}
			ui.single_swap=ui.create.system('换人',function(){
				var players=get.players(game.me);
				players.remove(game.boss);
				if(players.length>1){
					if(ui.auto.classList.contains('hidden')){
						game.me.popup('请稍后换人');
						return;
					}
					if(_status.event.isMine()){
						ui.click.auto();
						setTimeout(function(){
							ui.click.auto();
						},500);
					}
					game.modeSwapPlayer(players[1]);
				}
			},true);*/
			/*if(!get.config('single_control')||game.me==game.boss){			//飞虎：电脑端选此
			if(get.config('single_control')||game.me==game.boss){			//飞虎：手机端选此
				ui.single_swap.style.display='none';
			}*/

			ui.arena.appendChild(boss);
			if(boss.bossinginfo){
				var rect=boss.getBoundingClientRect();
				boss.style.transform='translate('+(boss.bossinginfo[0]-rect.left-rect.width/2)+'px,'+(boss.bossinginfo[1]-rect.top-rect.height/2)+'px) scale(1.1)';
				ui.refresh(boss);
				boss.style.transition='';
				boss.style.transform='';
				delete boss.bossinginfo;
				setTimeout(function(){
					boss.node.equips.style.opacity='';
				},500);
			}

			lib.setPopped(ui.create.system('残机',null,true),function(){
				var uiintro=ui.create.dialog('hidden');

				uiintro.add('残机');
				var table=ui.create.div('.bosschongzheng');

				var tr,td,added=false;

				added=true;
				
				tr=ui.create.div(table);
				td=ui.create.div(tr);
				//td.innerHTML=get.translation(game.dead[i]);
				//td=ui.create.div(tr);
				
				if(game.me.storage.fuhuo){
					td.innerHTML='剩余'+game.me.storage.fuhuo+'个残机';
				}
				else{
					td.innerHTML='不剩残机了'
				}

				if(!added){
					uiintro.add('<div class="text center">没有残机了/div>');
					uiintro.add(ui.create.div('.placeholder.slim'))
				}
				else{
					uiintro.add(table);
				}

				return uiintro;
			},180);

			ui.boss = ui.create.system('剩余符卡',null,true);
			lib.setPopped(ui.boss,function(){
				var uiintro=ui.create.dialog('hidden');
				var str = '';
				if (!game.me.storage || !game.me.storage.reskill){ 
					str = 'BOSS没有符卡';
				} else if (game.me.storage.reskill){
					str = 'BOSS剩余'+game.me.storage.reskill.length+'张符卡';
				} 
				uiintro.add('<div class="text center">'+str+'</div>');
				uiintro.add(ui.create.div('.placeholder.slim'))

				return uiintro;
			},180);
			ui.boss.style.display = 'none';
			event.bosslist.delete();

			game.arrangePlayers();
			// 跳过行动部分
			/*
			for(var i=0;i<game.players.length;i++){
				game.players[i].node.action.innerHTML='行动';
			}*/

			var players=get.players(lib.sort.position);
			var info=[];
			for(var i=0;i<players.length;i++){
				info.push({
					name:players[i].name,
					identity:players[i].identity,
					position:players[i].dataset.position
				});
			}
			_status.videoInited=true,
			info.boss=(game.me==game.boss);
			game.addVideo('init',null,info);
			if(game.bossinfo.init){
				game.bossinfo.init();
			}
			//delete lib.boss;
			"step 3"
			if(get.config('single_control')){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].side==game.me.side){
						game.addRecentCharacter(game.players[i].name);
					}
				}
			}
			else{
				game.addRecentCharacter(game.me.name);
			}
			var musicloop = function(){
				if (lib.config.currentMusic == lib.config.musiccchange.length) return;
				if (lib.config.musiccchange[lib.config.currentMusic][0] != lib.config.musiccchange[lib.config.currentMusic+1][0]) return;
				if (ui.backgroundMusic.currentTime >= lib.config.musiccchange[lib.config.currentMusic+1][1]){
					game.swapMusic();
				}
			};
			ui.backgroundMusic.addEventListener("timeupdate", musicloop);
			event.trigger('gameStart');
			_status.roundStart=game.boss;
			game.gameDraw(game.boss,game.bossinfo.gameDraw||4);
			game.bossPhaseLoop();
			setTimeout(function(){
				ui.updatehl();
			},200);
		},
		element:{
			player:{
				createRangeShadow:function(num,move,glow){
					num++;
					var shadows=this.parentNode.getElementsByClassName('playergrid');
					while(shadows.length){
						shadows[0].remove();
					}
					var grids=[];
					for(var step=1-num;step<num;step++){
						if(this.movable(step)){
							var grid=ui.create.playergrid(this,step);
							if(grid){
								grids.push(grid);
								if(typeof move=='function'){
									grid.listen(move);
								}
								else if(move){
									grid.classList.add('pointerdiv');
									grid.listen(ui.click.playergrid);
									grid.style.backgroundColor='rgba(255,0,0,0.1)';			//飞虎：改个颜色
									ui.movegrids.push(grid);
								}
								else if (glow){
									grid.classList.add('glow');
								} else {
									grid.classList.add('temp');
								}
							}
						}
					}
					return grids;
				},
				chooseToMove:function(num,prompt,through){
					var next=game.createEvent('chooseToMove');
					next.num=num||1;
					next.player=this;
					next.set('through',through||false);
					next.setContent('chooseToMove');
					next.prompt=prompt;
					return next;
				},
				move:function(step){
					/*var next=game.createEvent('move');			//异常卡顿
					next.player=this;
					next.set('step',parseInt(step));
					next.setContent(function(){
						player.moveTo(parseInt(player.dataset.position)+event.step);
					});*/
					var pos=this.dataset.position;
					_status.event.trigger('move');			//飞虎：推拉后扳机，为啥不能加Begin和End= =
					return this.moveTo(parseInt(pos)+parseInt(step));
				},
				moveTo:function(pos){
					game.addVideo('moveTo',this,pos);
					_status.event.derivation = this.dataset.position;
					if(!game.playerMap[pos]){
						delete game.playerMap[this.dataset.position];
						this.changeSeat(pos,false);
						//this.dataset.position=pos;
						game.playerMap[pos]=this;
						//this.focus();
					}
					_status.event.dist = Math.abs(pos-_status.event.derivation);
					_status.event.trigger('moveTo');			//飞虎：移动后扳机，为啥不能加Begin和End= =
					return this;
				},
				/*moveTo:function(pos){			//异常卡顿
					game.addVideo('moveTo',this,pos);
					var next=game.createEvent('moveTo');
					next.player=this;
					next.set('from',parseInt(this.dataset.position));
					next.set('to',parseInt(pos));
					next.set('move',Math.abs(pos-this.dataset.position));
					next.setContent(function(){
						if(!game.playerMap[event.to]){
							delete game.playerMap[player.dataset.position];
							player.changeSeat(event.to,false);
							//player.dataset.position=event.to;
							game.playerMap[event.to]=player;
							//player.focus();
						}
					});
					//return this;
				},*/
				canMoveTowards:function(target){
					var fpos=this.dataset.position;
					var tpos=target.dataset.position;
					var dpos=parseInt(tpos)-parseInt(fpos);
					if(dpos<0&&this.movable(-1)) return true;
					if(dpos>0&&this.movable(1)) return true;
					return false;
				},
				moveTowards:function(target,forbid){
					var fpos=parseInt(this.dataset.position);
					var tpos;
					if(Array.isArray(target)){
						tpos=target;
					}
					else if(typeof target=='string'){
						tpos=parseInt(target);
					}
					else{
						tpos=parseInt(target.dataset.position);
					}
					var dpos=tpos-fpos;
					forbid=forbid||[];
					if(dpos<0){
						if(!forbid.contains('moveLeft')&&this.movable(1)){
							this.moveLeft();
							return 'moveLeft';
						}
					}
					else if(dpos>0){
						if(!forbid.contains('moveRight')&&this.movable(-1)){
							this.moveRight();
							return 'moveRight';
						}
					}
					return false;
				},
				getPos:function(){
					return parseInt(this.dataset.position);
				},
				getDataPos:function(step){
					var pos=this.dataset.position;
					if(typeof step!='number') step=0;
					//step+=pos;
					return parseInt(step)+parseInt(pos);
				},
				getNeighbour:function(step){
					var pos=this.dataset.position;
					if(parseInt(pos)+parseInt(step)<1) return false;
					if(parseInt(pos)+parseInt(step)>7) return false;
					return game.playerMap[this.getDataPos(step)]||null;
				},
				getNeighbours:function(){
					var players=[];
					for(var i=0;i<game.players.length;i++){
						if(game.isNeighbour(game.players[i],this)){
							players.push(game.players[i]);
						}
					}
					return players;
				},
				movable:function(step){
					var pos=this.dataset.position;
					if(parseInt(pos)+parseInt(step)<1) return false;
					if(parseInt(pos)+parseInt(step)>7) return false;
					return !this.getNeighbour(step);
				},
				moveRight:function(){
					if(this.movable(-1)){
						this.move(-1);
						return true;
					}
					return false;
				},
				moveLeft:function(){
					if(this.movable(1)){
						this.move(1);
						return true;
					}
					return false;
				},
				dieAfter:function(){
					if(this!=game.boss && this!= game.me){
						if (source){
							source.draw();
							if (get.config('die_lili')){
								source.gainlili();
							}
						}
						this.hide();
						game.addVideo('hidePlayer',this);
						game.players.remove(this);
						this.delete();
					}
					if (this == game.boss && !game.me.storage.reinforce.length){
						ui.cardPile.innerHTML='';
						ui.discardPile.innerHTML='';
						ui.create.cardsAsync();
						ui.boss.style.display = 'none';
						game.me.levelOver();
					}
					if(game.bossinfo.checkResult&&game.bossinfo.checkResult(this)===false){
						return;
					}
					if(this==game.boss ||!game.hasPlayer(function(current){
						return !current.side;
					})){
						game.checkResult();
					}
				},
				levelOver:function(){
					/*if (_status.bosschoice.name == 'stg_scarlet'){
						this.gain(game.createCard('stg_bawu'));
					}*/
					var players = game.players;
					for (var i = game.players.length; i >= 0; i --){
						if (!game.players[i]){
							
						} else if (game.players[i].identity != 'cai'){
							console.log(game.players[i]);
							game.players[i].hide();
							game.addVideo('hidePlayer',game.players[i]);
							game.players[i].delete();
							game.players.remove(game.players[i]);
						}
					}
					game.swapMusic(true);
					setTimeout(function(){
						ui.backgroundMusic.pause();
					}, 1);
				},
			},
			content:{
				chooseToMove:function(){
					"step 0"
					if(!player.movable(1)&&!player.movable(-1)){
						return;
					}
					event.switchToAuto=function(){
						if(ui.movegrids){
							while(ui.movegrids.length){
								ui.movegrids.shift().delete();
							}
						}
						var list=[];
						var randomMove=['moveLeft','moveRight'];
						var getMove=function(move){
							switch(move){
								case 'moveLeft':return 'moveRight';
								case 'moveRight':return 'moveLeft';
							}
						}
						var dontMove=null;
						for(var iwhile=0;iwhile<num;iwhile++){
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
										while(true){
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
							if(lib.skill._move.ai.result.player(player)<=0) break;
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
						if(!event.through){//if(!arguments[0].through){
							for(var i=0;i<ui.movegrids.length;i++){
								var grid=ui.movegrids[i];
								if(game.isNeighbour(grid,player)) continue;
								for(var j=0;j<ui.movegrids.length;j++){
									if(game.isNeighbour(grid,ui.movegrids[j])) break;
								}
								if(j==ui.movegrids.length) grid.remove();
							}
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
				}
			},
		},
		card:{
			sha:{
				audio:true,
				fullskin:true,
				nature:["fire","thunder","SA","DSDR","BS","PM","Ms","DAs","CMS","DLC","GB","IMP","BB","OSB","DbA","TD","DsE","SoF","FT","FTM","WTF"],
				type:'basic',
				subtype:'attack',
				unique:true,
				enable:true,
				usable:1,
				//range:{attack:1},
				selectTarget:1,
				cardPrompt:function(card){
					if(card.nature=='fire') return '出牌阶段，对距离为2~X的一名角色使用（X为攻击范围+1）；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。';
					if(card.nature=='thunder') return '出牌阶段，你弃置你场上一张牌，对距离2~3的一名角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。';
					//if(lib.linked.contains(card.nature)) return '出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点'+get.translation(card.nature)+'属性伤害。';
					return '出牌阶段，对攻击范围内的一名角色使用；对目标造成1点弹幕伤害。';
				},
				//filterTarget:function(card,player,target){return player!=target},
				filterTarget:function(card,player,target){
					var mod=game.checkMod(card,player,target,'unchanged','targetInRange',player);
					var extra=0;
					if(mod!='unchanged'){
						if(typeof mod=='boolean') return mod;
						if(typeof mod=='number') extra=mod;
					}
					if (player.hasSkill("undist") || target.hasSkill("undist")) return false;
					return ((!get.nature(card)&&(get.distance(player,target,"attack")+extra)<=1)
					||(get.nature(card)=="fire"&&get.distance(player,target,"global")>1&&(get.distance(player,target,"attack")+extra)<=2)
					||(get.nature(card)=="thunder"&&get.distance(player,target,"global")>1&&(get.distance(player,target,"global")+extra)<=3));
				},//true,
				content:function(){
					"step 0"
					if(typeof event.shanRequired!='number'||!event.shanRequired||event.shanRequired<0){
						event.shanRequired=1;
					}
					event.baseDamage=1;
					if(get.nature(event.card)=="fire")event.baseDamage++;
					//if(typeof player.storage.extraDamage!='number') 
						event.extraDamage=player.storage.extraDamage||0;
					"step 1"
					if(event.skipShan){
						event._result={bool:true};
					}
					else if(event.directHit){
						event._result={bool:false};
					}
					else{
						// 把闪从对杀打出变成了使用
						//var next=target.chooseToRespond({name:'shan'});
						var next = target.chooseToUse({
							filterCard:function(card,player){
								if(card.name!='shan') return false;
								var mod=game.checkMod(card,player,'unchanged','cardEnabled',player.get('s'));
								if(mod!='unchanged') return mod;
								return true;
							},
							prompt:'【轰！】来了，请使用'+get.cnNumber(event.shanRequired,false)+'张【躲~】',});
							//filterCard:{name:'shan'}, selectCard:[1,1]});
						next.set('ai1',function(){
							var target=_status.event.player;
							var evt=_status.event.getParent();
								if(_status.event.shanRequired>1&&target.countCards('h','shan')<_status.event.shanRequired){
									return -1
								}
							var sks=target.get('s');
							if(sks.contains('leiji')||
								sks.contains('releiji')||
								sks.contains('lingbo')){
								return 1;
							}
							if (target.hp > 10) return -1;
							//if(ai.get.damageEffect(target,evt.player,target,evt.card.nature)>=0) return -1;
							return 1;
						}).set('shanRequired',event.shanRequired);
						//next.autochoose=lib.filter.autoRespondShan;
					}
					"step 2"
					if(event._result.bool == false || event._result.result.bool!=false){
						event.trigger('shaHit');
					}
					else{
						event.shanRequired--;
						if(event.shanRequired>0){
							event.goto(1);
						}
						else{
							event.trigger('shaMiss');
							event.responded=result;
						}
					}
					"step 3"
					if(!event.responded){
					if(get.nature(event.card)=="fire")target.chooseToDiscard(function(card,player){
								return(card.name=='sha');
							},'是爆【轰！】，可以再弃置一张【轰！】减少伤害');
					//}else {
					}
					"step 4"
					if(!event.responded){
						if(get.nature(event.card)=="fire"&&result.bool)event.baseDamage--;
						if(get.nature(event.card)=="thunder"){
							target.damage(null,event.baseDamage+event.extraDamage);
							event.extraDamage=0;
						}
						target.damage(get.nature(event.card),event.baseDamage+event.extraDamage);
						event.result={bool:true};
						event.trigger('shaDamage');
					}
					else target.getStat().card.shan--;
				},
				ai:{
					basic:{
						useful:[5,2],
						value:[5,2],
					},
					order:3,
					result:{
						target:function(player,target){
							if(player.countCards('h', {name:'zuiye'})){
								if(ai.get.attitude(player,target)>0){
									return -6;
								}
								else{
									return -3;
								}
							}
							return -1.5;
						},
					},
					tag:{
						respond:1,
						respondShan:1,
						damage:function(card){
							if(card.nature=='poison') return;
							return 1;
						},
						natureDamage:function(card){
							if(card.nature) return 1;
						},
						fireDamage:function(card,nature){
							if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
							if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
							if(card.nature=='poison') return 1;
						}
					}
				}
			},
			huosha:{
				type:'basic',
				subtype:'attack',
				unique:true,
			},
			leisha:{
				type:'basic',
				subtype:'attack',
				unique:true,
			},
			jiu:{
				audio:true,
				fullskin:true,
				type:"basic",
				subtype:"support",
				modeimage:"ftg",
				global:'jiu_skill',
				toself:true,
				enable:function(event,player){
					//return !player.hasSkill('jiu');
					return true;
				},
				lianheng:true,
				logv:false,
				savable:function(card,player,dying){
					return dying==player||player.hasSkillTag('jiuOther',null,dying,true);
				},
				usable:1,
				selectTarget:-1,
				modTarget:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					//if(typeof event.baseDamage!='number') event.baseDamage=1;
					if(target.isDying()||event.getParent(2).type=='dying'){
						target.recover(1);
						if(_status.currentPhase==target){
							target.getStat().card.jiu--;
						}
					}
					else{
						game.addVideo('jiuNode',target,true);
						if(cards&&cards.length){
							card=cards[0];
						}
						if(!target.storage.extraDamage) target.storage.extraDamage=0;
						target.storage.extraDamage++;
						game.broadcastAll(function(target,card,gain2){
							target.addSkill('jiu');
							if(!target.node.jiu&&lib.config.jiu_effect){
								target.node.jiu=ui.create.div('.playerjiu',target.node.avatar);
								target.node.jiu2=ui.create.div('.playerjiu',target.node.avatar2);
							}
							if(gain2&&card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								card.clone.moveDelete(target);
							}
						},target,card,target==targets[0]&&cards.length==1);
						if(target==targets[0]&&cards.length==1){
							if(card.clone&&(card.clone.parentNode==target.parentNode||card.clone.parentNode==ui.arena)){
								game.addVideo('gain2',target,get.cardsInfo([card]));
							}
						}
					}
				},
				ai:{
					basic:{
						useful:function(card,i){
							if(_status.event.player.hp>1){
								if(i==0) return 4;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
						value:function(card,player,i){
							if(player.hp>1){
								if(i==0) return 5;
								return 1;
							}
							if(i==0) return 7.3;
							return 3;
						},
					},
					order:function(){
						return get.order({name:'sha'})+0.2;
					},
					result:{
						target:function(player,target){
							if(target&&target.isDying()) return 2;
							if(target&&_status.currentPhase!=target) return 0;//!target.isPhaseUsing()) return 0;
							var shas=player.getCards('h','sha');
							if(shas.length>1&&(player.getCardUsable('sha')>1/*||player.countCards('h','zhuge')*/)){
								return 0;
							}
							shas.sort(function(a,b){
								return get.order(b)-get.order(a);
							})
							var card;
							if(shas.length){
								for(var i=0;i<shas.length;i++){
									if(lib.filter.filterCard(shas[i],target)){
										card=shas[i];break;
									}
								}
							}
							else if(player.hasSha()&&player.needsToDiscard()){
								if(player.countCards('h','hufu')!=1){
									card={name:'sha'};
								}
							}
							if(card){
								if(game.hasPlayer(function(current){
									return (get.attitude(target,current)<0&&
										target.canUse(card,current,null,true)&&
										!current.hasSkillTag('filterDamage',null,{
											player:player,
											card:card,
											jiu:true,
										})&&
										get.effect(current,card,target)>0);
								})){
									return 1;
								}
							}
							return 0;
						},
					},
					tag:{
						save:1,
						recover:0.1,
					}
				}
			},
			royal2:{
				/*init:function(){
					game.loadModeAsync('stg',function(mode){
						lib.card["royal2"].content = mode.skill.royal1.content;
					});
				},*/			//飞虎：stg模式经常加载不出来
				audio:true,
				fullskin:true,
				type:'jinji',
				//subtype:'attack',
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				reverseOrder:true,
				//content:function(){},
				content:function(){
					"step 0"
					if(targets)event.current=target;
					else {
					  event.current=player.next;
					  event.players=game.filterPlayer().remove(player);
					  player.line(event.players,'fire');
					}
					 "step 1"
						var next=event.current.chooseToRespond({name:'sha'});
						next.set('ai',function(card){
							var evt=_status.event.getParent();
							if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
							return 11-get.value(card);
						});
						next.autochoose=lib.filter.autoRespondSha;
						"step 2"
						if(result.bool==false){
							event.current.damage();
						}
						if(targets)event.finish();
					  if(event.current.next!=player){
						  event.current=event.current.next;
						  game.delay(0.5);
						  event.goto(1);
					  }
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
							if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
						}
					},
					basic:{
						order:9,
						useful:[5,1],
						value:5
					},
					result:{
						target_use:function(player,target){
							if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
						target:function(player,target){
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
					},
					tag:{
						respond:1,
						respondSha:1,
						damage:1,
						multitarget:1,
						multineg:1,
					}
				},
			},
			lebu:{
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				modeimage:'ftg',
				enable:true,
				filterTarget:function(card,player,target){
					return (lib.filter.judge(card,player,target)&&player!=target);
				},
				/*judge:function(card){
					if(get.suit(card)=='heart') return 0;
					return -3;
				},
				effect:function(){
					if(result.bool==false){
						player.skip('phaseUse');
					}
				},*/
				content:function(){
					"step 0"
					target.judge("lebu",function(card){
						if(get.color(card) == "red") return 0;
						return -3;
					});
					"step 1"
					//if(result.card&&get.color(result.card)&&get.color(result.card)=="red")
					if(result.bool==false){
						target.skip('phaseUse');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:function(player,target){
							var num=target.hp-target.countCards('h')-2;
							if(num>-1) return -0.01;
							if(target.hp<3) num--;
							if(target.isTurnedOver()) num/=2;
							var dist=get.distance(player,target,'absolute');
							if(dist<1) dist=1;
							return num/Math.sqrt(dist);
						}
					},
					tag:{
						skip:'phaseUse'
					}
				}
			},
			shuiyanqijunx:{
				audio:'shuiyanqijun',
				fullskin:true,
				type:'trick',
				subtype:'attack',
				modeimage:'ftg',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				enable:true,
				content:function(){
					'step 0'
					if(!target.countCards('e',function(card){
						return lib.filter.cardDiscardable(card,target,event);
					})){
						var next=target.damage(event.baseDamage||1);
						//next.nature='thunder';
						event.finish();
						return;
					}
					else target.chooseControl('弃牌','受伤',function(event,player){
						if(get.damageEffect(player,event.player,player,'thunder')>=0){
							return '受伤';
						}
						if(player.hp>=3&&player.countCards('e')>=2){
							return '受伤';
						}
						return '弃牌';
					});
					'step 1'
					if(result.control=='弃牌'){
						target.discard(target.getCards('e',function(card){
							return lib.filter.cardDiscardable(card,target,event);
						}));
					}
					else{
						var next=target.damage(event.baseDamage||1);
						//next.nature='thunder'
					}
					event.finish();
				},
				ai:{
					order:6,
					value:4,
					useful:2,
					tag:{
						damage:1,
						//thunderDamage:1,
						//natureDamage:1,
						loseCard:1,
					},
					result:{
						target:function(player,target,card,isLink){
							var es=target.getCards('e');
							if(!es.length) return -1.5;
							var val=0;
							for(var i of es) val+=get.value(i,target);
							return -Math.min(1.5,val/5);
						}
					}
				}
			},
			jinchan:{
				fullskin:true,
				type:'jinji',
				modeimage:'ftg',
				global:['g_jinchan','g_jinchan2'],
			},
			suijiyingbian:{
				fullskin:true,
				type:'jinji',
				modeimage:'ftg',
				//unique:true,
				global:"suijiyingbian_skill",
				enable:function(card,player,target){
					if(player.storage.suijiyingbian)return true;
					return false;
				},
				filterTarget:function(card,player,target){
					return player.storage.suijiyingbian&&lib.card[player.storage.suijiyingbian].filterTarget;
				},
				selectTarget:function(card,player,target){
					return player.storage.suijiyingbian&&lib.card[player.storage.suijiyingbian].selectTarget;
				},
				contentBefore:function(){
					lib.card.suijiyingbian.content=lib.card[player.storage.suijiyingbian].content;
				}
			},
			kuabu:{
				fullskin:true,
				type:'trick',
				subtype:'support',
				modeimage:'ftg',
				enable:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				selectTarget:-1,
				content:function(){
					"step 0"
					var move=3;
					move=game.checkMod(player,move,'move',player);
					player.chooseToMove(move,null,true);//.phasing=true;
					"step 1"
					if(ui.confirm){
						ui.confirm.classList.add('removing');
					}
					if(!result.bool){
						event.goto(0);
					}
				}
			},
			houtiao:{
				fullskin:true,
				type:'trick',
				subtype:'defense',
				modeimage:'ftg',
				global:'nigeiwogun',
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					'step 0'
					var move=1;
					move=game.checkMod(player,move,'move',player);
					player.chooseToMove(move,null,true).forced=true;
					"step 1"
					if(ui.confirm){
						ui.confirm.classList.add('removing');
					}
					if(!result.bool){
						event.goto(0);
					}
				},
				ai:{
					basic:{
						order:1,
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2,
					tag:{
						move:1
					}
				}
			},
			wuzhuang:{			//飞虎：专属装备暂未实装
				fullskin:true,
				type:'trick',
				subtype:'support',
				modeimage:'ftg',
				enable:true,
				filterTarget:function(card,player,target){
					return target==player;
				},
				selectTarget:-1,
				content:function(){
					'step 0'
					var list=[];
					for(var i in lib.card){
						if(lib.card[i].type=='equip'){
							list.push(i);
						}
					}
					list=list.randomGets(3);
					var cards=[];
					for(var i=0;i<list.length;i++){
						cards.push(game.createCard(list[i], get.suit(card), get.number(card)));
					}
					player.chooseCardButton(cards,'选择一张使用',true);
					'step 1'
					player.useCard(result.links,player);			//飞虎：后边涉及到专属装备的话，琪露诺的冰冻青蛙怎么对别人用？
				},
			},
			jitui:{
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				modeimage:'ftg',
				unique:true,
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					var direct = "";
					if(player.getPos()<target.getPos()){
						direct = "moveLeft";
					}else if(player.getPos()>target.getPos()){
						direct = "moveRight";
					}
					if(direct == "")direct = ["moveLeft","moveRight"].randomGet();
					if(target.movable(direct == "moveLeft"?2:-2)){
						target.move(direct == "moveLeft"?2:-2);
					}
					else{
						if(target.movable(direct == "moveLeft"?1:-1)){
							target.move(direct == "moveLeft"?1:-1);
						}
						target.damage();
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,target)>0&&target.movable(target.getPos()<player.getPos()?-2:2)){
							if(!target.hp==1||Math.random()<0.7) return 0;
						}
					},
					basic:{
						order:9,
						useful:[5,1],
						value:5
					},
					result:{
						target_use:function(player,target){
							var nh=Math.abs(target.getPos()-4);
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
						target:function(player,target){
							var nh=Math.abs(target.getPos()-4);
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
					},
					tag:{
						respond:1,
						damage:1,
						move:1,
					}
				},
			},
			touxi:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				modeimage:'ftg',
				unique:true,
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					var direct = "";
					if(player.getPos()<target.getPos()){
						direct = "moveLeft";
					}else if(player.getPos()>target.getPos()){
						direct = "moveRight";
					}
					if(direct == ""||!player.movable(direct == "moveLeft"?(get.distance(target,player)+1):(-1-get.distance(target,player))))return false;
					return target!=player;
				},
				content:function(){
					"step 0"
					var direct = "";
					if(player.getPos()<target.getPos()){
						direct = "moveLeft";
					}else if(player.getPos()>target.getPos()){
						direct = "moveRight";
					}
					if(direct == "")game.log(player+"无法移动");
					else{
						player.move(direct == "moveLeft"?(get.distance(target,player)+1):(-1-get.distance(target,player)));
						player.addTempSkill("qiangming");
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
							if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
						}
					},
					basic:{
						order:9,
						useful:[5,1],
						value:5
					},
					result:{
						target_use:function(player,target){
							if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
						target:function(player,target){
							var nh=target.countCards('h');
							if(get.mode()=='identity'){
								if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
							}
							if(nh==0) return -2;
							if(nh==1) return -1.7
							return -1.5;
						},
					},
					tag:{
						respond:1,
						move:1,
					}
				},
			},
			stg_mingyun:{
				fullskin:true,
				type:'jinji',
				modeimage:'ftg',
				unique:true,
				global:['mingyun','mingyun2'],
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					'step 0'
					player.$skill('打牌技术',null,null,true);
					var cards=[];
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						cards.push(ui.cardPile.childNodes[i]);
					}
					target.chooseCardButton('你的打牌技术太强了，随便从牌堆挑一张牌吧',cards).set('filterButton',function(button){
						return true;
					});			//飞虎：请让目标选
					'step 1'
					if (result.bool){
						target.gain(result.links[0]);			//飞虎：请让目标获得
						target.$gain2(result.links[0]);			//飞虎：同上
					}
				},
				ai:{
					basic:{
						order:1,
						useful:[4,2],
						value:[4,2],
					},
					result:{
						target:function(player,target){
							return 2;
						}
					},
					tag:{
						draw:1
					}
				}
			},
			//非想天则非符
			SpreadAmulet:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			AscensionKick:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'attack',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					if(!player.countUsed("PermanentBorder_shan")){
						player.judge("AscensionKick",function(card){
							if(get.color(card)=="red") return 2;
							return -1;
						});
					}
					"step 1"
					if(result&&result.bool){
						target.damage();
					}
				},
				ai:{
					basic:{
						order:5,
						useful:1,
						value:4.5
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(ai.get.damageEffect(target,player,target)>0&&ai.get.attitude(player,target)>0&&ai.get.attitude(target,player)>0){
								return 0;
							}
							return -0.5;
						}
					},
					tag:{
						damage:0.5,
					}
				}
			},
			PermanentBorder_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					//本回合【升天脚AscensionKick】生效时不判定执行判定成功后的效果
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2,
				},
			},
			DemonSealing:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			BoskySweeper:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			GreenSpread:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'attack',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					var next=target.chooseToRespond({name:'sha'});
					next.set('ai',function(card){
						var evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
						if(evt.player.hasSkillTag('notricksource')) return 0;
						if(evt.target.hasSkillTag('notrick')) return 0;
						return 11-get.value(card);
					});
					next.autochoose=lib.filter.autoRespondSha;
					"step 1"
					if(result.bool==false){
						player.useCard({name:'sha'},target);
					}
				},
				ai:{
					basic:{
						order:5,
						useful:1,
						value:4.5
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(ai.get.damageEffect(target,player,target)>0&&ai.get.attitude(player,target)>0&&ai.get.attitude(target,player)>0){
								return 0;
							}
							return -0.5;
						}
					},
					tag:{
						respond:1,
						respondSha:1,
						useSha:1,
					}
				}
			},
			ReusableBomb:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'attack',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					target.damage();
				},
				ai:{
					basic:{
						order:5,
						useful:1,
						value:4.5
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(ai.get.damageEffect(target,player,target)>0&&ai.get.attitude(player,target)>0&&ai.get.attitude(target,player)>0){
								return 0;
							}
							return -0.5;
						}
					},
					tag:{
						damage:1,
					}
				}
			},
			RadialStrike:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['RadialStrike_skill'],
			},
			PerfectMaid:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			Misdirection:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			ThrownEdge:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if(ai.get.attitude(viewer,player)>0&&ai.get.attitude(viewer,target)>0){
							return 0;
						}
						if (ai.get.attitude(viewer, player) <= 0 && player.storage.enhance && ai.get.attitude(viewer,target) > 0){
							return 2;
						}
					},
					basic:{
						order:9,
						useful:2,
						value:5,
					},
					result:{
						target:function(player,target){
							if(ai.get.attitude(player,target)<=0) return (target.num('hej'))?-1.5:1;
							return -1.5;
						},
					},
					tag:{
						loselili:1.5,
					}
				}
			},
			DancingStar:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['DancingStar_skill'],
			},
			VolatileDoll_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				filter:function(){},
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2,
				},
			},
			DollAmbush:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,player)>0) return 0;
						return 1;
					},
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:0.5},
					expose:0.2,
				},
				notarget:true,
				content:function(){
					var evt=event.getParent();
						event.result={
							wuxied:true,
							directHit:evt.directHit||[],
							nowuxie:evt.nowuxie,
						};
					if(player.isOnline()){
						player.send(function(player){
							if(ui.tempnowuxie&&!player.hasWuxie()){
								ui.tempnowuxie.close();
								delete ui.tempnowuxie;
							}
						},player);
					}
					else if(player==game.me){
						if(ui.tempnowuxie&&!player.hasWuxie()){
							ui.tempnowuxie.close();
							delete ui.tempnowuxie;
						}
					}
				},
			},
			DollArchers:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			SPDoll:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['SPDoll_skill'],
			},
			FallSlasher:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				enhance:1,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					if(_status.currentPhase.skipList.contains("phaseUse"))target.addTempSkill("qiangming","phaseAfter");
					target.chooseUseTarget({name:"sha"});
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.countCards('h',{name:'sha'}) < 2) return 1;
							return 0.5;
						},
					},
					tag:{
						respond:1,
						respondShan:1,
						useSha:1,
					}
				}
			},
			SummerFlame:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'attack',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				content:function(){
					"step 0"
					var next=target.chooseToRespond({name:'sha'});
					next.set('ai',function(card){
						var evt=_status.event.getParent();
						if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
						if(evt.player.hasSkillTag('notricksource')) return 0;
						if(evt.target.hasSkillTag('notrick')) return 0;
						return 11-get.value(card);
					});
					next.autochoose=lib.filter.autoRespondSha;
					"step 1"
					if(result.bool==false){
						target.damage();
					}
				},
				ai:{
					basic:{
						order:5,
						useful:1,
						value:4.5
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(ai.get.damageEffect(target,player,target)>0&&ai.get.attitude(player,target)>0&&ai.get.attitude(target,player)>0){
								return 0;
							}
							return -0.5;
						}
					},
					tag:{
						respond:1,
						respondSha:1,
						damage:1,
					}
				}
			},
			DiamondHardness_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					"step 0"
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					player.chooseToCompare(event.getParent("sha").player);
					"step 1"
					if (!result.tie){
						if(result.bool){
							player.gain(event.cards);
							player.$gain2(event.cards);
						}
					}
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			CondensedBubble:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					if(player.skipList.contains("phaseUse")){
						target.skip('phaseUse');
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:function(player,target){
							var num=target.hp-target.countCards('h')-2;
							if(num>-1) return -0.01;
							if(target.hp<3) num--;
							if(target.isTurnedOver()) num/=2;
							var dist=get.distance(player,target,'absolute');
							if(dist<1) dist=1;
							return num/Math.sqrt(dist);
						}
					},
					tag:{
						draw:1,
						skip:'phaseUse'
					}
				}
			},
			SpringWind:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					if (target.num('hej')){
						player.discardPlayerCard('hej',target,true).ai = function(button){
							if (target.countCards('ej') == 1 && target.countCards('hej') > 1 &&player.storage._enhance) return !target.getCards('ej').contains(button.link);
						};
					}
					"step 1"
					if(target.skipList.contains("phaseUse")){
						player.chooseBool();
					} else return;
					"step 2"
					if(result.bool){
						player.draw(3);
						target.skipList.remove("phaseUse");
					}
				},
				ai:{
					basic:{
						order:1,
						useful:1,
						value:8,
					},
					result:{
						target:function(player,target){
							var num=target.hp-target.countCards('h')-2;
							if(num>-1) return -0.01;
							if(target.hp<3) num--;
							if(target.isTurnedOver()) num/=2;
							var dist=get.distance(player,target,'absolute');
							if(dist<1) dist=1;
							return num/Math.sqrt(dist);
						}
					},
					tag:{
						loseCard:1,
						draw:2.25,
					}
				}
			},
			MediumBind:{
				fullskin:true,
				type:'equip',
				subtype:'equip5',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['MediumBind_skill'],
			},
			LifeDeath:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return true;
				},
				modTarget:true,
				content:function(){
					"step 0"
					_status.currentPhase.draw();
					player.addTempSkill('LifeDeath_skill','phaseAfter');
					if(target.hasSkill("成为过杀的目标")){
						player.discardPlayerCard('hej',target,true).ai = function(button){
							if (target.countCards('ej') == 1 && target.countCards('hej') > 1 &&player.storage._enhance) return !target.getCards('ej').contains(button.link);
						};
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
					tag:{
						draw:1,
						loseCard:0.5,
					}
				}
			},
			CrescentMoon:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			NetherReflection_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				content:function(){
					var card = event.getParent("sha").card;
					if(get.color(card)&&get.color(card)==get.color(event.card)){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					} else player.getStat().card.shan--;
					player.useCard({name:"sha", suit:card.suit, number:card.number, nature:card.nature, bonus:card.bonus},event.getParent("sha").player);
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2,
				},
			},
			VampireClaw:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:function(card,player,target){
					if(player.countUsed("VampireClaw")==3)return 1;
					else return -1;
				},
				filterTarget:function(card,player,target){
					if(player.countUsed("VampireClaw")==3)return target!=player;
					else return target==player;
				},
				modTarget:true,
				content:function(){
					"step 0"
					if(player.countUsed("VampireClaw")==3){
						target.damage();
					}
					else{
						target.draw();
						_status.currentPhase.addTempSkill('VampireClaw_skill','phaseAfter');
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
					tag:{
						draw:1,
						use:1,
						damage:0.5,
					}
				}
			},
			ChainGang:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					target.addTempSkill("qiangming");
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.hasSha()) return 1;
							return 0.5;
						},
					},
				}
			},
			DemonLordCradle:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			DemonLordArrow:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					target.draw(2);
					target.chooseToDiscard(1,"hej",true);
				},
				ai:{
					basic:{
						order:7.2,
						useful:4,
						value:9.2
					},
					result:{
						target:2,
					},
					tag:{
						draw:2,
						loseCard:1,
					}
				}
			},
			GhostlyButterfly:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			ManjiParasol:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			ChangesEye:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:function(card,player,target){
					if(player.countUsed("ChangesEye")==2)return 1;
					else return -1;
				},
				filterTarget:function(card,player,target){
					if(player.countUsed("ChangesEye")==2)return target!=player;
					else return target==player;
				},
				modTarget:true,
				content:function(){
					"step 0"
					player.draw();
					if(player.countUsed("ChangesEye")==2){
						target.damage();
					}
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
					tag:{
						draw:1,
						damage:0.5,
					}
				}
			},
			BewitchingBait:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			ChimeraWings_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				content:function(){
					"step 0"
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					_status.currentPhase.draw();
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2,
				},
			},
			OniSpiritBomb:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			UnpleasantMist:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					var num = 0;
					if(false)num++;
					target.gainlili(1+num);
				},
				ai:{
					basic:{
						order:7.2,
						useful:4,
						value:9.2
					},
					result:{
						target:2,
					},
					tag:{
						gainlili:1,
					}
				}
			},
			FireOni:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:1,
				filterTarget:function(card,player,target){
					return target!=player;
				},
				modTarget:true,
				content:function(){
					if(target.lili-player.lili>=2){
						target.damage();
					}else{
						target.gainlili();
						player.draw(2);
					}
				},
				ai:{
					basic:{
						order:7.2,
						useful:4,
						value:9.2
					},
					result:{
						target:2,
					},
					tag:{
						damage:1,
						draw:2,
					}
				}
			},
			GatheringOni:{
				fullskin:true,
				type:'equip',
				subtype:'equip3',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['GatheringOni_skill'],
			},
			MindDropping:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					"step 0"
					target.draw();
					_status.currentPhase.addTempSkill('VampireClaw_skill','phaseAfter');
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
					tag:{
						draw:1,
						useSha:1,
					}
				}
			},
			UltravioletField_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false}
					if(event.getParent("sha").player.countUsed("sha")>1){
						player.useCard({name:"sha"},event.getParent("sha").player);
					}
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			DisbeliefAspect:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			EyesightCleaning:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				ai:{
					wuxie:function(target,card,player,viewer){
						if(get.attitude(viewer,player)>0) return 0;
						return 1;
					},
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:0.5},
					expose:0.2,
				},
				notarget:true,
				content:function(){
					var evt=event.getParent();
						event.result={
							wuxied:true,
							directHit:evt.directHit||[],
							nowuxie:evt.nowuxie,
						};
					if(player.isOnline()){
						player.send(function(player){
							if(ui.tempnowuxie&&!player.hasWuxie()){
								ui.tempnowuxie.close();
								delete ui.tempnowuxie;
							}
						},player);
					}
					else if(player==game.me){
						if(ui.tempnowuxie&&!player.hasWuxie()){
							ui.tempnowuxie.close();
							delete ui.tempnowuxie;
						}
					}
				},
			},
			GracefulDash:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					"step 0"
					target.chooseButton();//弃牌堆一张牌，加入牌堆底
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
				}
			},
			TenguDrum:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			GustFan_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				content:function(){
					"step 0"
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					event.getParent("sha").player.chooseBool();
					"step 1"
					if (result.bool){
						player.draw();
						event.getParent("sha").player.gain(event.cards);
						event.getParent("sha").player.$gain2(event.cards);
					}
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			WindSickle_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					player.draw();
					if(!event.getParent("sha").player.storage.huibi)event.getParent("sha").player.storage.huibi=0;
					event.getParent("sha").player.storage.huibi++;	
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			DracoEye:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			AbleSwimmer:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				enable:true,
				selectTarget:-1,
				filterTarget:function(card,player,target){
					return target==player;
				},
				modTarget:true,
				content:function(){
					"step 0"
					target.judge("AbleSwimmer");
					"step 1"
					if(result.bool){
						if(get.color(result.card)=="black"||target.storage.exclusive.contains(result.card.name)){
							target.gainlili();
						}
						if(get.color(result.card)=="red"||target.storage.exclusive.contains(result.card.name)){
							target.draw();
						}
					}
				},
				ai:{
					basic:{
						order:7.2,
						useful:4,
						value:9.2
					},
					result:{
						target:2,
					},
					tag:{
						draw:2,
						loseCard:1,
					}
				}
			},
			BahamutWrath:{
				fullskin:true,
				type:'equip',
				subtype:'equip4',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['BahamutWrath_skill'],
			},
			Veils_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					"step 0"
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					player.judge("Veils_shan",function(card){
						if(get.color(card) == "black") return 1;
						return -1;
					});
					"step 1"
					if(result.bool==true){
						player.chooseControl("回收","反伤").set("choiceList",["将【天女羽衣】收回手牌","对"+get.translation(event.getParent("sha").player)+"造成1点伤害"]);
					}
					"step 2"
					if(result.control=="回收"){
						player.gain(event.cards);
						player.$gain2(event.cards);
					}
					if(result.control=="反伤")event.getParent("sha").player.damage();
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			ScarletPerception:{
				fullskin:true,
				type:'trick',
				subtype:'disrupt',
				mode:['ftg'],
				modeimage:'ftg',
			},
			EarthAwakening:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'attack',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					target.damage();
				},
				ai:{
					basic:{
						order:5,
						useful:1,
						value:4.5
					},
					result:{
						target:-1.5,
						player:function(player,target){
							if(ai.get.damageEffect(target,player,target)>0&&ai.get.attitude(player,target)>0&&ai.get.attitude(target,player)>0){
								return 0;
							}
							return -0.5;
						}
					},
					tag:{
						damage:1,
					}
				}
			},
			FateSword:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			UniversePress:{
				audio:true,
				fullskin:true,
				type:'trick',
				subtype:'support',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					"step 0"
					event.getParent("sha").player.addTempSkill("UniversePress","useCardToAfter");
					target.draw(3);
				},
				ai:{
					wuxie:function(target,card,player,viewer){
						if (ai.get.attitude(viewer, target) < 0 && target.countCards('h', {name:'sha'})>1) return 10;
						return 0;
					},
					basic:{
						order:3,
						useful:4,
						value:5,
					},
					result:{
						target:function(player,target){
							if (player.lili > 2) return 1;
							if (player.hasSha()) return 1;
							if (player.countCards('h',{name:'sha'}) < 2) return 0;
							return 0.5;
						},
					},
					tag:{
						draw:3,
					}
				}
			},
			SkySummon:{
				fullskin:true,
				type:'equip',
				subtype:'character',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					target.draw();
					target.equip(event.card);
				},
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['SkySummon_skill'],
			},
			EarthSummon:{
				fullskin:true,
				type:'equip',
				subtype:'character',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					target.draw();
					target.equip(event.card);
				},
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['EarthSummon_skill'],
			},
			FrostPillars:{
				fullskin:true,
				type:'equip',
				subtype:'equip1',
				mode:['ftg'],
				modeimage:'ftg',
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['FrostPillars_skill'],
			},
			FrozenTechnique:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			FreezeTouchMe:{
				type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			IceKick_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'trick',
				subtype:'defense',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false};
					player.chooseToUse({
						filterCard:function(card,player){
							if(card.name!='houtiao') return false;
							var mod=game.checkMod(card,player,'unchanged','cardEnabled',player.get('s'));
							if(mod!='unchanged') return mod;
							return true;
						},
					prompt:'你可以使用一张【轰！】',});
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			WaterTaichiFist_shan:{
				audio:"shan",
				fullskin:true,
				notarget:true,
				type:'basic',
				subtype:'attack'||'defense',//['attack','defense'],
				mode:['ftg'],
				content:function(){
					event.trigger('shaMiss');
					event.responded={bool:true};
					event.result={bool:false}
				},
				ai:{
					basic:{
						useful:[6,4],
						value:[6,4],
					},
					result:{player:1},
					expose:0.2
				},
			},
			ShoweringBrillance:{
			    type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			EarthDragonWave:{
			    type:'basic',
				subtype:'attack',
				mode:['ftg'],
			},
			TigerChiRelease:{
				fullskin:true,
				type:'equip',
				subtype:'equip2',
				mode:['ftg'],
				modeimage:'ftg',
				content:function(){
					target.recover();
					target.equip(event.card);
				},
				ai:{
					basic:{
						equipValue:4
					}
				},
				skills:['TigerChiRelease_skill'],
			},
		},
		characterPack:{
			mode_ftg:{
				Th7_5:['male','0',0,['ftg_suimu'],['boss'],'zhu'],
				//Th10_5:['male','0',0,['ftg_hisou'],['boss'],'zhu'],
				//Th12_3:['male','0',0,['ftg_tensoku'],['boss'],'zhu'],
				//Th13_5:['male','0',0,['ftg_shinki'],['boss'],'zhu'],
				//Th14_5:['male','0',0,['ftg_shinpi'],['boss'],'zhu'],
				//Th15_5:['male','0',0,['ftg_hyoui'],['boss'],'zhu'],
				//Th7_5_free:['male','0',0,['ftg_suimu_free'],['boss',"db:image/mode/ftg/character/Th7_5.jpg"],'zhu'],
				Th10_5_free:['male','0',0,['ftg_hisou_free'],['boss',"character:zhaoyun"],'zhu'],
				Th12_3_free:['male','0',0,['ftg_tensoku_free'],['boss',"character:Th12_3"],'zhu'],
				Th13_5_free:['male','0',0,['ftg_shinki_free'],['boss',"character:Th13_5"],'zhu'],
				Th14_5_free:['male','0',0,['ftg_shinpi_free'],['boss',"character:Th14_5"],'zhu'],
				Th15_5_free:['male','0',0,['ftg_hyoui_free'],['boss',"character:Th15_5"],'zhu'],
			},
		},
		cardPack:{
			mode_ftg:['huosha','jiu','royal2','lebu','shuiyanqijunx','jinchan','suijiyingbian','kuabu','houtiao','wuzhuang','jitui','touxi','stg_mingyun'],
			nature:{
			    sha:{
					fire:"huosha",thunder:"leisha",
					SA:"SpreadAmulet",DSDR:"DemonSealing",
					BS:"BoskySweeper",
					PM:"PerfectMaid",Ms:"Misdirection",
					DAs:"DollArchers",
					CMS:"CrescentMoon",
					DLC:"DemonLordCradle",
					GB:"GhostlyButterfly",
					IMP:"ManjiParasol",BB:"BewitchingBait",
					OSB:"OniSpiritBomb",
					DbA:"DisbeliefAspect",
					TD:"TenguDrum",
					DsE:"DracoEye",
					SoF:"FateSword",
					FT:"FrozenTechnique",FTM:"FreezeTouchMe",
					WTF:"WaterTaichiFist_shan",SB:"ShoweringBrillance",EDW:"EarthDragonWave",
				},
				wuxie:{
					DA:"DollAmbush",
					NRS:"NetherReflection_shan",
					CWs:"ChimeraWings_shan",
					GF:"GustFan_shan",
					EC:"EyesightCleaning",
				},
			},
			deck:{
				Th7_5:[["spade",0,'sha'],["spade",0,'sha'],["spade",0,'sha'],["club",0,'sha'],["club",0,'sha'],["club",0,'sha'],
					["heart",0,'shan'],["heart",0,'shan'],["heart",0,'shan'],["diamond",0,'shan'],["diamond",0,'shan'],["diamond",0,'shan'],
					["spade",0,'jiu'],["club",0,'jiu'],["heart",0,'guohe'],["diamond",0,'guohe'],["heart",0,'wuxie'],
					["club",0,'shunshou'],["club",6,'lebu'],["diamond",2,'wuzhong']],
				Th10_5:[["spade",0,'sha'],["spade",0,'sha'],["spade",0,'sha'],["club",0,'sha'],["club",0,'sha'],["club",0,'sha'],
					["heart",0,'shan'],["heart",0,'shan'],["heart",0,'shan'],["diamond",0,'shan'],["diamond",0,'shan'],["diamond",0,'shan'],
					["spade",0,'jiu'],["club",0,'jiu'],["heart",0,'guohe'],["diamond",0,'guohe'],["heart",0,'wuxie'],
					["club",0,'shunshou'],["club",6,'lebu'],["diamond",2,'wuzhong']],
				Th12_3:[["spade",4,'shunshou'],["spade",10,'guohe'],["heart",6,'jiu'],["heart",12,'wuxie'],["club",8,'sha'],["club",6,'lebu'],["diamond",2,'shan'],["diamond",2,'wuzhong']],
				reimu:[["spade",0,'SpreadAmulet'],["club",0,'SpreadAmulet'],["diamond",0,'SpreadAmulet'],["spade",0,'AscensionKick'],["club",0,'AscensionKick'],["heart",0,'PermanentBorder_shan'],["diamond",0,'PermanentBorder_shan'],["heart",0,'DemonSealing']],
				marisa:[["spade",0,'BoskySweeper'],["club",0,'BoskySweeper'],["spade",0,'GreenSpread'],["club",0,'GreenSpread'],["diamond",0,'GreenSpread'],["heart",0,'ReusableBomb'],["diamond",0,'ReusableBomb'],["heart",0,'RadialStrike']],
				sakuya:[["club",0,'PerfectMaid'],["diamond",0,'PerfectMaid'],["spade",0,'Misdirection'],["spade",0,'Misdirection'],["club",0,'Misdirection'],["heart",0,'ThrownEdge'],["diamond",0,'ThrownEdge'],["heart",0,'ThrownEdge']],
				alice:[["heart",0,'VolatileDoll_shan'],["diamond",0,'VolatileDoll_shan'],["heart",0,'DollAmbush'],["diamond",0,'DollAmbush'],["spade",0,'DollArchers'],["club",0,'DollArchers'],["club",0,'DollArchers'],["spade",0,'SPDoll']],
				patchouli:[["spade",0,'FallSlasher'],["spade",0,'FallSlasher'],["club",0,'SummerFlame'],["club",0,'SummerFlame'],["heart",0,'DiamondHardness_shan'],["diamond",0,'DiamondHardness_shan'],["diamond",0,'CondensedBubble'],["heart",0,'SpringWind']],
				youmu:[["heart",0,'MediumBind'],["spade",0,'LifeDeath'],["club",0,'LifeDeath'],["diamond",0,'LifeDeath'],["club",0,'CrescentMoon'],["diamond",0,'CrescentMoon'],["spade",0,'NetherReflection_shan'],["heart",0,'NetherReflection_shan']],
				remilia:[["spade",0,'VampireClaw'],["club",0,'VampireClaw'],["spade",0,'ChainGang'],["club",0,'ChainGang'],["heart",0,'DemonLordCradle'],["diamond",0,'DemonLordCradle'],["heart",0,'DemonLordArrow'],["diamond",0,'DemonLordArrow']],
				yuyuko:[["spade",0,'GhostlyButterfly'],["spade",0,'GhostlyButterfly'],["heart",0,'GhostlyButterfly'],["heart",0,'GhostlyButterfly'],["club",0,'GhostlyButterfly'],["club",0,'GhostlyButterfly'],["club",0,'GhostlyButterfly'],["diamond",0,'GhostlyButterfly'],["diamond",0,'GhostlyButterfly']],
				yukari:[["club",0,'ManjiParasol'],["club",0,'ManjiParasol'],["spade",0,'ChangesEye'],["spade",0,'ChangesEye'],["diamond",0,'BewitchingBait'],["diamond",0,'BewitchingBait'],["heart",0,'ChimeraWings'],["heart",0,'ChimeraWings']],
				suika:[["spade",0,'OniSpiritBomb'],["club",0,'OniSpiritBomb'],["spade",0,'UnpleasantMist'],["club",0,'UnpleasantMist'],["diamond",0,'UnpleasantMist'],["heart",0,'FireOni'],["diamond",0,'FireOni'],["heart",0,'GatheringOni']],
				reisen:[["spade",0,'MindDropping'],["heart",0,'UltravioletField_shan'],["diamond",0,'UltravioletField_shan'],["spade",0,'DisbeliefAspect'],["club",0,'DisbeliefAspect'],["club",0,'DisbeliefAspect'],["heart",0,'EyesightCleaning'],["diamond",0,'EyesightCleaning']],
				aya:[["heart",0,'GracefulDash'],["spade",0,'TenguDrum'],["club",0,'TenguDrum'],["club",0,'TenguDrum'],["spade",0,'GustFan_shan'],["heart",0,'GustFan_shan'],["diamond",0,'WindSickle_shan'],["diamond",0,'WindSickle_shan']],
				komachi:[["spade",0,''],["spade",0,''],["spade",0,''],["spade",0,'']],
				iku:[["spade",0,'DracoEye'],["club",0,'DracoEye'],["spade",0,'AbleSwimmer'],["club",0,'AbleSwimmer'],["diamond",0,'AbleSwimmer'],["heart",0,'BahamutWrath'],["heart",0,'Veils_shan'],["diamond",0,'Veils_shan']],
				tenshi:[["spade",0,'ScarletPerception'],["club",0,'ScarletPerception'],["spade",0,'EarthAwakening'],["club",0,'EarthAwakening'],["heart",0,'FateSword'],["diamond",0,'FateSword'],["heart",0,'UniversePress'],["diamond",0,'UniversePress']],
				sanae:[["spade",0,'SkySummon'],["spade",0,'SkySummon'],["club",0,'SkySummon'],["club",0,'SkySummon'],["heart",0,'EarthSummon'],["heart",0,'EarthSummon'],["diamond",0,'EarthSummon'],["diamond",0,'EarthSummon']],
				cirno:[["diamond",0,'FrostPillars'],["spade",0,'FrozenTechnique'],["club",0,'FrozenTechnique'],["spade",0,'FreezeTouchMe'],["club",0,'FreezeTouchMe'],["heart",0,'IceKick_shan'],["heart",0,'IceKick_shan'],["diamond",0,'IceKick_shan']],
				meiling:[["diamond",0,'WaterTaichiFist_shan'],["spade",0,''],["spade",0,''],["heart",0,'TigerChiRelease']],
				utsuho:[["spade",0,''],["spade",0,''],["spade",0,''],["spade",0,'']],
				suwako:[["spade",0,''],["spade",0,''],["spade",0,''],["spade",0,'']],
			},
			pile:{
				default:['shunshou','guohe','jiu','wuxie','sha','lebu','shan','wuzhong'],
				reimu:['SpreadAmulet','AscensionKick','PermanentBorder_shan','DemonSealing'],
				marisa:['BoskySweeper','GreenSpread','ReusableBomb','RadialStrike'],
				sakuya:['PerfectMaid','Misdirection','ThrownEdge','ThrownEdge'],
				alice:['VolatileDoll_shan','DollAmbush','DollArchers','SPDoll'],
				patchouli:['FallSlasher','SummerFlame','DiamondHardness_shan','CondensedBubble','SpringWind'],
				youmu:['MediumBind','LifeDeath','CrescentMoon','NetherReflection_shan'],
				remilia:['VampireClaw','ChainGang','DemonLordCradle','DemonLordArrow'],
				yuyuko:['GhostlyButterfly'],
				yukari:['ManjiParasol','ChangesEye','BewitchingBait','ChimeraWings'],
				suika:['OniSpiritBomb','UnpleasantMist','FireOni','GatheringOni'],
				reisen:['MindDropping','UltravioletField_shan','DisbeliefAspect','EyesightCleaning'],
				aya:['GracefulDash','TenguDrum','GustFan_shan','WindSickle_shan'],
				komachi:['','','',''],
				iku:['DracoEye','AbleSwimmer','BahamutWrath','Veils_shan'],
				tenshi:['ScarletPerception','EarthAwakening','FateSword','UniversePress'],
				sanae:['SkySummon','EarthSummon'],
				cirno:['FrostPillars','FrozenTechnique','FreezeTouchMe','IceKick_shan'],
				meiling:['WaterTaichiFist_shan','ShoweringBrillance','EarthDragonWave','TigerChiRelease'],
				utsuho:['','','',''],
				suwako:['','','',''],
			},
			/*reimu:['lantern','stg_yinyangyu','stg_needle'],
			marisa:['hakkero','stg_bagua','stg_missile'],
			sakuya:['lunadial','stg_deck','stg_watch'],
			alice:['hourai'],
			patchouli:['book','stone','stg_goldbook'],
			youmu:['louguan','stg_bailou'],
			remilia:['gungirs'],
			//flandre:['laevatein'],
			yuyuko:['deathfan'],
			yukari:[],
			suika:['ibuki'],
			kasen茨木华扇
			ichirin云居一轮
			byakuren圣白莲
			mononobe 物部布都
			toyosatomimi丰聪耳神子
			mokou
			shinmyoumaru:[],
			nitori
			koishi
			mamizou
			kokoro
			sumireko
			reisen:[],
			aya:['windfan'],
			komachi
			iku:[],
			tenshi:[],
			sanae:[],
			cirno:['frog'],
			meiling:[],
			utsuho
			suwako:[],*/			//飞虎：武装用的专属装备，虽然只需要非想天则……呃，现在改成只需要凭依华的角色就可以，但还是感觉要写好多
		},
		init:function(){
			lib.mode.ftg.config["free_choose"]={
				name:'自由选将',
				init:true,
				frequent:true,
				onclick:function(bool){
					game.saveConfig('free_choose',bool,this._link.config.mode);
					if(!_status.event.getParent().showConfig&&!_status.event.showConfig) return;
					if(!ui.cheat2&&get.config('free_choose')) ui.create.cheat2();
					else if(ui.cheat2&&!get.config('free_choose')){
						ui.cheat2.close();
						delete ui.cheat2;
					}
				}
			};
			lib.mode.ftg.config["first_less"]={
				name:'先攻首轮',
				init:'less',
				frequent:true,
				item:{
					zero:'不摸牌',
					less:'少摸一张',
					lesast:'少摸两张',
					off:'正常摸牌',
				},
				intro:'开启后一号位第一回合少摸一张牌',
			};
			/*//异名卡牌
			// 查找并替换
			var patchedSource = lib.element.card.init.toString().replace(
				/(if\s*\(\s*Array\.isArray\s*\(\s*card\s*\)\s*\)\s*\{)/,
				`$1
						if(card[2]=='huosha'){
							card[2]='sha';
							card[3]='fire';
						}`
			).replace(/火/g,'爆').replace(/雷/g,'震荡');
			
			// 解析并重建函数
			var paramMatch = patchedSource.match(/function\s*\((.*?)\)\s*\{([\s\S]*)\}/);
			if (!paramMatch) {
				// 尝试箭头函数等格式
				lib.element.card.init = eval('(' + patchedSource + ')');
			}
			// 创建新函数
			else lib.element.card.init = new Function(paramMatch[1], paramMatch[2]);
			console.log(lib.element.card.init.toString());*/
			
			lib.element.card.init=function(card){
					if(Array.isArray(card)){
						//console.log("花色"+card[0]+"类别或点数"+card[1]+"卡名"+card[2]+"属性"+card[3]+"灵力"+card[4]);
						/*if(card[2]=='huosha'){
							card[2]='sha';
							card[3]='fire';
						}*/
						for(var i in lib.cardPack.nature){
							for(var j in lib.cardPack.nature[i]){
								if(card[2]==lib.cardPack.nature[i][j]){
									card[2]=i;
									card[3]=j;
								}
							}
						}
					}
					else if(typeof card=='object'){
						card=[card.suit,card.number,card.name,card.nature];
					}
					if(!lib.card[card[2]]){
						lib.card[card[2]]={};
					}
					
					// 这里是设置卡的灵力加成的。
					if (!lib.card[card[4]]){
						lib.card[card[4]]=0;
					}

					var info=lib.card[card[2]];
					if(info.global&&!this.classList.contains('button')){
						if(Array.isArray(info.global)){
							while(info.global.length){
								game.addGlobalSkill(info.global.shift());
							}
						}
						else if(typeof info.global=='string'){
							game.addGlobalSkill(info.global);
						}
						delete info.global;
					}
					if(this.name){
						this.classList.remove('epic');
						this.classList.remove('legend');
						this.classList.remove('gold');
						this.classList.remove('unique');
						this.style.background='';
						var subtype=get.subtype(this);
						if(subtype){
							this.classList.remove(subtype);
						}
					}
					if(info.epic){
						this.classList.add('epic');
					}
					else if(info.legend){
						this.classList.add('legend');
					}
					else if(info.gold){
						this.classList.add('gold');
					}
					else if(info.unique){
						this.classList.add('unique');
					}
					/*
					if (ui.arena.classList.contains('observe')){
						this.classList.add('infohidden');
					}*/
					var bg=card[2];
					if(info.cardimage){
						bg=info.cardimage;
					}
					var img=lib.card[bg].image;
					if(img){
						if(img.indexOf('db:')==0){
							img=img.slice(3);
						}
						else if(img.indexOf('ext:')!=0){
							img=null;
						}
					}
					this.classList.remove('fullskin');
					this.classList.remove('fullimage');
					this.classList.remove('fullborder');
					this.dataset.cardName=card[2];
					this.dataset.cardType=info.type||'';
					this.dataset.cardSubtype=info.subtype||'';
					this.dataset.cardMultitarget=info.multitarget?'1':'0';
					this.node.name.dataset.nature='';
					this.node.info.classList.remove('red');
					if(!lib.config.hide_card_image&&lib.card[bg].fullskin){
						this.classList.add('fullskin');
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.image.setBackgroundImage(img.replace(/ext:/,'extension/'));
							}
							else{
								this.node.image.setBackgroundDB(img);
							}
						}
						else{
							if(lib.card[bg].modeimage){
								this.node.image.setBackgroundImage('image/mode/'+lib.card[bg].modeimage+'/card/'+bg+'.png');
							}
							else{
								//this.node.image.setBackgroundImage('image/card/'+bg+'.png');
								this.node.image.setBackground(bg, 'card');
							}
						}
					}
					else if(lib.card[bg].image=='background'){
						if(card[3]) this.node.background.setBackground(bg+'_'+card[3],'card');
						else this.node.background.setBackground(bg,'card');
					}
					else if(lib.card[bg].fullimage){
						this.classList.add('fullimage');
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							if(lib.card[bg].image.indexOf('character:')==0){
								this.setBackground(lib.card[bg].image.slice(10),'character');
							}
							else{
								this.setBackground(lib.card[bg].image);
							}
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].fullborder){
						this.classList.add('fullborder');
						if(lib.card[bg].fullborder=='gold'){
							this.node.name.dataset.nature='metalmm';
						}
						else if(lib.card[bg].fullborder=='silver'){
							this.node.name.dataset.nature='watermm';
						}
						if(!this.node.avatar){
							this.node.avatar=ui.create.div('.cardavatar');
							this.insertBefore(this.node.avatar,this.firstChild);
						}
						if(!this.node.framebg){
							this.node.framebg=ui.create.div('.cardframebg');
							this.node.framebg.dataset.auto=lib.card[bg].fullborder;
							this.insertBefore(this.node.framebg,this.firstChild);
						}
						if(img){
							if(img.indexOf('ext:')==0){
								this.node.avatar.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.node.avatar.style.backgroundSize='cover';
							}
							else{
								this.node.avatar.setBackgroundDB(img);
							}
						}
						else if(lib.card[bg].image){
							this.node.avatar.setBackground(lib.card[bg].image);
						}
						else{
							var cardPack=lib.cardPack['mode_'+get.mode()];
							if(Array.isArray(cardPack)&&cardPack.contains(bg)){
								this.node.avatar.setBackground('mode/'+get.mode()+'/card/'+bg);
							}
							else{
								this.node.avatar.setBackground('card/'+bg);
							}
						}
					}
					else if(lib.card[bg].image=='card'){
						if(card[3]) this.setBackground(bg+'_'+card[3],'card');
						else this.setBackground(bg,'card');
					}
					else if(typeof lib.card[bg].image=='string'&&!lib.card[bg].fullskin){
						if(img){
							if(img.indexOf('ext:')==0){
								this.setBackgroundImage(img.replace(/ext:/,'extension/'));
								this.style.backgroundSize='cover';
							}
							else{
								this.setBackgroundDB(img);
							}
						}
						else{
							this.setBackground(lib.card[bg].image);
						}
					}
					else{
						this.node.background.innerHTML=lib.translate[bg+'_cbg']||lib.translate[bg+'_bg']||get.translation(bg)[0];
						// this.node.background.style.fontFamily=lib.config.card_font;
						if(this.node.background.innerHTML.length>1) this.node.background.classList.add('tight');
						else this.node.background.classList.remove('tight');
					}
					if(!lib.card[bg].fullborder&&this.node.avatar&&this.node.framebg){
						this.node.avatar.remove();
						this.node.framebg.remove();
						delete this.node.avatar;
						delete this.node.framebg;
					}
					if(info.noname&&!this.classList.contains('button')){
						this.node.name.style.display='none';
					}
					if(info.color){
						this.style.color=info.color;
					}
					if(info.textShadow){
						this.style.textShadow=info.textShadow;
					}
					if(info.opacity){
						this.node.info.style.opacity=info.opacity;
						this.node.name.style.opacity=info.opacity;
					}
					if(info.modinfo){
						this.node.info.innerHTML=info.modinfo;
					}
					else{
						var num;
						switch(card[1]){
							case 1:num='A';break;
							case 11:num='J';break;
							case 12:num='Q';break;
							case 13:num='K';break;
							default:num = card[1];
						}
						this.node.info.innerHTML=get.translation(card[0])+'<span> </span>'+num;
					}
					if(info.addinfo){
						if(!this.node.addinfo){
							this.node.addinfo=ui.create.div('.range',this);
						}
						this.node.addinfo.innerHTML=info.addinfo;
					}
					else if(this.node.addinfo){
						this.node.addinfo.remove();
						delete this.node.addinfo;
					}
					if(card[0]=='heart'||card[0]=='diamond'){
						this.node.info.classList.add('red');
					}
					this.node.name.innerHTML='';
					this.node.image.className='image';
					var name=get.translation(card[2]);
					if(card[2]=='sha'||card[2]=='wuxie'){
						if(card[3]=='fire'){
							name='爆'+name;			//飞虎：改个名
							this.node.image.classList.add('fire');
						}
						else if(card[3]=='thunder'){
							name='神薙'+name;			//飞虎：改个名
							this.node.image.classList.add('thunder');
						}
						else if(card[3])name=get.translation(lib.cardPack.nature[card[2]][card[3]]);
					}
					for(var i=0;i<name.length;i++){
						//this.node.name.innerHTML+=name[i]+'<br/>';
						this.node.name.innerHTML+=name[i];
					}
					if(name.length>=5){
						this.node.name.classList.add('long');
						if(name.length>=7){
							this.node.name.classList.add('longlong');
						}
					}
					this.node.name.style.fontSize = '13px';
					var num;
						switch(card[1]){
							case 1:num='A';break;
							case 11:num='J';break;
							case 12:num='Q';break;
							case 13:num='K';break;
							default:num = card[1];
						}
					this.node.name2.innerHTML=get.translation(card[0])+num+' '+name;
					this.suit=card[0];
					this.number=parseInt(card[1])||0;
					this.name=card[2];
					this.bonus=card[4]||info.cost;
					this.classList.add('card');
					if(card[3]){
						/*if(lib.nature.contains(card[3])) */this.nature=card[3];
						this.classList.add(card[3]);
					}
					else if(this.nature){
						this.classList.remove(this.nature);
						delete this.nature;
					}
					if(info.subtype) this.classList.add(info.subtype);
					if(this.inits){
						for(var i=0;i<lib.element.card.inits.length;i++){
							lib.element.card.inits[i](this);
						}
					}
					if(typeof info.init=='function') info.init();
					this.node.range.innerHTML='';
					// 贴个灵力加成在底下
					// 这里可能要被换掉吧……
					if (this.bonus && this.bonus != 0) {
						if (this.bonus > 0){
							this.node.range.innerHTML = '灵力：+' + this.bonus;
							//this.node.range.style.color = 'rgb(255,0,0)';
						}else{
							this.node.range.innerHTML = '灵力：' + this.bonus;
							//this.node.range.style.color = 'rgb(0,0,255)';
						}
						//this.node.range.innerHTML.style.color = 'rgb()';
					}
					switch(get.subtype(this)){
						case 'equip1':
							var added=false;
							if(lib.card[this.name]&&lib.card[this.name].distance){
								var dist=lib.card[this.name].distance;
								if(dist.attackFrom){
									added=true;
									this.node.range.innerHTML='范围: '+(-dist.attackFrom+1);
								}
							}
							if(!added){
								//this.node.range.innerHTML='范围: 1';
							}
							break;
						case 'equip3':
						if(info.distance&&info.distance.globalTo){
							this.node.range.innerHTML='防御: '+info.distance.globalTo;
							this.node.name2.innerHTML+='+';
						}
						break;
						case 'equip4':
						if(info.distance&&info.distance.globalFrom){
							this.node.range.innerHTML='进攻: '+(-info.distance.globalFrom);
							this.node.name2.innerHTML+='-';
						}
						break;
					}
					if(_status.connectMode&&!game.online&&lib.cardOL&&!this.cardid){
						this.cardid=get.id();
						lib.cardOL[this.cardid]=this;
					}
					if(!_status.connectMode&&!_status.video){
						this.cardid=get.id();
					}
					var tags=[];
					if(Array.isArray(card[4])){
						tags.addArray(card[4]);
					}
					if(this.cardid){
						if(!_status.cardtag){
							_status.cardtag={};
						}
						for(var i in _status.cardtag){
							if(_status.cardtag[i].contains(this.cardid)){
								tags.add(i);
							}
						}
						if(tags.length){
							var tagstr=' <span class="cardtag">';
							for(var i=0;i<tags.length;i++){
								var tag=tags[i];
								if(!_status.cardtag[tag]){
									_status.cardtag[tag]=[];
								}
								_status.cardtag[tag].add(this.cardid);
								tagstr+=lib.translate[tag+'_tag'];
							}
							tagstr+='</span>';
							this.node.range.innerHTML+=tagstr;
						}
					}
					// 在这里追加因禁忌牌而更改的东西应该就可以了吧？
					// 为什么这个会出现两次呢？难道每次加载的时候都要跑两次？不过对于我要做的事情没有影响就是了……
					if (info.type == 'jinji'){
						this.node.name.style.color='rgb(255, 255, 255)';
						this.node.name.style.border='1px solid rgb(255,255,255)';
						this.node.info.style.color='rgb(255,255,255)';
						this.setBackgroundImage('theme/card.png');
					} else if (info.type == 'zhenfa'){
						this.node.name.style.color='rgb(255, 255, 255)';
						this.node.name.style.fontSize='16px';
						this.node.name.style.border='0px solid rgb(255,255,255)';
						this.node.info.style.color='rgb(255,255,255)';
						this.setBackgroundImage('theme/zhenfa.png');
					} else if (info.type == 'delay'){
						if (this.node.info.innerHTML != '技能<span> </span>') this.node.info.innerHTML = '';
						this.node.name.style.fontSize = '15px';
					}
					return this;
				};
			
			//改变卡牌描述，失败
			/*var neouiintro = get.nodeintro.toString().replace(
				'es.length;i++){',
				`es.length;i++){
						if(lib.card[es[i].name].cardPrompt) uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+lib.card[es[i].name].cardPrompt(es[i])+'</div></div>');
						else `
			).replace(
				/\}\s*if\s*\(\s*lib\.translate\s*\[\s*name\s*\+\s*(['"])_info\1\s*\]\s*\)\s*\{/g,
				`}
						if(lib.card[name].cardPrompt){
							var str=lib.card[name].cardPrompt(node.link||node),placetext=uiintro.add('<div class="text" style="display:inline">'+str+'</div>');
							if(str.indexOf('<div class="skill"')!=0){
								uiintro._place_text=placetext;
							}
						} else if(lib.translate[name+'_info']){`
			).match(/function\s*\((.*?)\)\s*\{([\s\S]*)\}/);
			get.nodeintro = new Function(neouiintro[1], neouiintro[2]);*/
			
			for(var i in lib.characterPack.mode_ftg){
				if(lib.characterPack.mode_ftg[i][4].contains('hiddenboss')) continue;
				lib.mode.boss.config[i+'_boss_config']={
					name:get.translation(i),
					init:true,
					unfrequent:true,
				}
			}
		},
		game:{
			reserveDead:true,
			addBossFellow:function(position,name,cards){
				var fellow=game.addFellow(position,name,'zoominanim');
				fellow.directgain(get.cards(cards));
				fellow.side=true;
				fellow.identity='zhong';
				fellow.setIdentity('zhong');
				game.addVideo('setIdentity',fellow,'zhong');
			},
			addRecord:function(bool){
				if(typeof bool=='boolean'){
					if (get.config('practice_mode')) return;
					if (!lib.config.gameRecord.ftg) lib.config.gameRecord["ftg"] = {data:{}};
					var data=lib.config.gameRecord.ftg.data;
					var name = _status.bosschoice.name;
					if(!data[name]){
						data[name]=[0,0,0,0,0];
					}
					if(bool){
						data[name][0]++;
						if (data[name][1] == 0 || data[name][1] > game.phaseNumber){
							data[name][1] = game.phaseNumber;
							data[name][2] = game.me.storage.fuhuo;
						}
					}
					else{
						data[name][3]++;
					}
					if(lib.config.gameRecord.ftg.data[name][4])data[name][4]=lib.config.gameRecord.ftg.data[name][4];
					var list = [];
					for(var i in lib.character){
						var info=lib.character[i];
						if(info[4] && info[4].contains('boss')){
							list.push(i);
						}
					}
					var str='';
					for(var i=0;i<list.length;i++){
						if(data[list[i]]){
							str+=lib.translate[list[i]] + ': <br> 通关次数：'+data[list[i]][0]+'  最快纪录：'+data[list[i]][1]+'回合   剩余残机：'+data[list[i]][2]+'<br>挑战失败次数：'+ data[list[i]][3]+'<br>';
						}
					}
					lib.config.gameRecord.ftg.str=str;
					game.saveConfig('gameRecord',lib.config.gameRecord);
				}
			},
			changeBoss:function(name,player){
				if(!player){
					if(game.additionaldead){
						game.additionaldead.push(game.boss);
					}
					else{
						game.additionaldead=[game.boss];
					}
					player=game.boss;
					delete game.boss;
				}

				player.delete();
				game.players.remove(player);
				game.dead.remove(player);
				var boss=ui.create.player();
				boss.getId();
				boss.init(name);
				boss.side=true;
				game.addVideo('bossSwap',player,(game.boss?'_':'')+boss.name);
				boss.dataset.position=2;//player.dataset.position;
				/*if(game.me==player){
					game.swapControl(boss);
				}*/
				ui.boss.style.display = 'initial';
				game.players.push(boss.animate('zoominanim'));
				game.arrangePlayers();
				if(!game.boss){
					game.boss=boss;
					boss.setIdentity('zhu');
					boss.identity='zhu';
				}
				else{
					boss.setIdentity('zhong');
					boss.identity='zhong';
				}
				ui.arena.appendChild(boss);
				var enterEvt = game.createEvent('enterGame', false);
				enterEvt.player = boss;
				enterEvt.setContent(function(){
					event.trigger('enterGame');
				});
				//boss.directgain(get.cards(4));
				var drawEvt = game.createEvent('gameDraw');
				drawEvt.player = boss;
				drawEvt.num = game.bossinfo.gameDraw || 4;
				drawEvt.onlyBoss = true;
				drawEvt.setContent(function(){
					'step 0'
					var n = event.num;
					if (typeof n === 'function') n = n(player);
					var cards;
					if (player.storage.otherPile) {
						cards = game.otherGetCards(player, n);
					} else {
						cards = get.cards(n);
					}
					player.directgain(cards);
					if (player.singleHp === true) {
						player.doubleDraw();
						delete player.singleHp;
						}
						'step 1'
				});
				//boss.draw(game.bossinfo.gameDraw(game.boss));

				if (game.me.storage.skill){			//飞虎：设置技能和专属音乐？
					for (var i = 0; i < game.me.storage.skill.length; i ++){
						boss.addSkill(game.me.storage.skill[i]);
					}
				}
				if (game.me.storage.unskill){
					for (var i = 0; i < game.me.storage.unskill.length; i ++){
						boss.removeSkill(game.me.storage.unskill[i]);
					}
				}
				if (!game.me.storage.musicchange){
					ui.backgroundMusic.pause();
					game.swapMusic(true);
				} else delete game.me.storage.musicchange;
			},
			checkResult:function(){
				if(game.boss==game.me){
					game.over(game.boss.isAlive());
				}
				else{
					game.over(!game.boss.isAlive());
				}
			},
			getVideoName:function(){
				var str=get.translation(game.me.name);
				if(game.me.name2){
					str+='/'+get.translation(game.me.name2);
				}
				var str2='挑战';
				if(game.me!=game.boss){
					str2+=' - '+get.translation(game.boss);
				}
				var name=[str,str2];
				return name;
			},
			// 游戏回合顺序
			bossPhaseLoop:function(){
				var next=game.createEvent('phaseLoop');
				// boss先行
				if(game.bossinfo.loopFirst){
					next.player=game.bossinfo.loopFirst();
				}
				else{
					//next.player=game.boss;
					// 因为不能选boss,由玩家视角先动。
					next.player=game.me;
				}
				_status.looped=true;
				next.setContent(function(){
					"step 0"
					if(player.identity=='zhu'&&game.boss!=player){
						player=game.boss;
					}
					player.phase();
					"step 1"
					if(game.bossinfo.loopType==2){
						_status.roundStart=true;
						if(event.player==game.boss){
							if(!_status.last||_status.last.nextSeat==game.boss){
								event.player=game.boss.nextSeat;
								_status.roundStart=event.player;   // 新一轮的第一个玩家
							}
							else{
								event.player=_status.last.nextSeat;
							}
						}
						else{
							_status.last=player;
							event.player=game.boss;
							if(player.nextSeat==game.boss){
								delete _status.roundStart;
							}
						}
					}
					else{
						event.player=event.player.nextSeat;
						if(event.player==game.boss){
							_status.roundStart=game.boss;          // loopType 1：boss 回合即新一轮
						}
					}
					event.goto(0);
				});
			},
			/*onSwapControl:function(){			//飞虎：应该可以不需要
				//if(game.me==game.boss) return;
				game.addVideo('onSwapControl');
				var name=game.me.name;
				if(ui.fakeme&&ui.fakeme.current!=name){
					ui.fakeme.current=name;
					if(ui.versushighlight&&ui.versushighlight!=game.me){
						ui.versushighlight.classList.remove('current_action');
					}
					ui.versushighlight=game.me;
					game.me.classList.add('current_action');
					// game.me.line(ui.fakeme,{opacity:0.5,dashed:true});

					ui.fakeme.style.backgroundImage=game.me.node.avatar.style.backgroundImage;
					// ui.fakeme.style.backgroundSize='cover';
				}
				ui.updatehl();
			},
			modeSwapPlayer:function(player){
				var bool=(game.me==game.boss||player==game.boss);
				game.swapControl(player);
				game.onSwapControl();
				if(!bool) return;
				if(game.me==game.boss){
					game.singleHandcard=false;
					ui.arena.classList.remove('single-handcard');
					ui.window.classList.remove('single-handcard');
					ui.fakeme.style.display='none';
					game.me.dataset.position=0;
					game.me.nextSeat.dataset.position=2;
					game.me.nextSeat.nextSeat.dataset.position=4;
					game.me.nextSeat.nextSeat.nextSeat.dataset.position=6;
				}
				else{
					game.singleHandcard=true;
					ui.arena.classList.add('single-handcard');
					ui.window.classList.add('single-handcard');
					ui.fakeme.style.display='';
					game.boss.dataset.position=7;
					game.boss.nextSeat.dataset.position=1;
					game.boss.nextSeat.nextSeat.dataset.position=2;
					game.boss.nextSeat.nextSeat.nextSeat.dataset.position=3;
					if(game.me&&game.me.node.handcards2.childNodes.length){
						while(game.me.node.handcards2.childNodes.length){
							game.me.node.handcards1.appendChild(game.me.node.handcards2.firstChild);
						}
					}
				}
			},*/
			// 检测是否相邻
			isNeighbour:function(a,b){
				if(a&&a.dataset){
					a=a.dataset.position;
				}
				if(b&&b.dataset){
					b=b.dataset.position;
				}
				if((a!=b)&&Math.abs(parseInt(a)-parseInt(b))==1) return true;

				return false;
			},
			chooseCharacter:function(func){
				var next=game.createEvent('chooseCharacter',false);
				//next.showConfig=true;
				next.customreplacetarget=func;
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
					console.log(lib.config.current);
					console.log(_status.bosschoice.name);
					// 这里应该是选角色页面
					// 要怎么做，才能获得当前BOSS呢？
					var list=[];
					event.list=list;
					for (var j in lib.forbidftg){
						//if (lib.forbidftg[j][0] == _status.bosschoice.name){
							list = lib.forbidftg[_status.bosschoice.name];//.slice(1);
						//}
					}
					//list.randomSort();
					var dialog=ui.create.dialog('选择自机角色','hidden');
					dialog.id = 'choosecharacter';
					dialog.classList.add('fixed');
					ui.window.appendChild(dialog);
					dialog.classList.add('bosscharacter');
					dialog.classList.add('modeshortcutpause');
					dialog.classList.add('withbg');
					// dialog.add('0/3');
					dialog.add([list,'character']);
					dialog.noopen=true;
					var next=game.me.chooseButton(dialog,true).set('onfree',true);
					next._triggered=null;
					next.custom.replace.target=event.customreplacetarget;
					next.selectButton=1;
					// next.custom.add.button=function(){
					// 	if(ui.cheat2&&ui.cheat2.backup) return;
					// 	_status.event.dialog.content.childNodes[1].innerHTML=
					// 	ui.selected.buttons.length+'/3';
					// };
					event.changeDialog=function(){
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
							return;
						}
						list.randomSort();

						var buttons=ui.create.div('.buttons');
						var node=_status.event.dialog.buttons[0].parentNode;
						_status.event.dialog.buttons=ui.create.buttons(list.slice(0,20),'character',buttons);
						_status.event.dialog.content.insertBefore(buttons,node);
						buttons.animate('start');
						node.remove();

						game.uncheck();
						game.check();
					};
					var createCharacterDialog=function(){
						event.dialogxx=ui.create.characterDialog();
						event.dialogxx.classList.add('bosscharacter');
						event.dialogxx.classList.add('withbg');
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
						_status.createControl=event.asboss;
						ui.cheat2=ui.create.control('自由选自机',function(){
							if(this.dialog==_status.event.dialog){

								this.dialog.close();
								_status.event.dialog=this.backup;
								ui.window.appendChild(this.backup);
								delete this.backup;
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.animate('controlpressdownx',500);
									ui.cheat.classList.remove('disabled');
								}
								if(_status.bosschoice){
									_status.bosschoice.animate('controlpressdownx',500);
									_status.bosschoice.classList.remove('disabled');
								}
							}
							else{
								this.backup=_status.event.dialog;
								_status.event.dialog.close();
								_status.event.dialog=_status.event.parent.dialogxx;
								this.dialog=_status.event.dialog;
								ui.window.appendChild(this.dialog);
								game.uncheck();
								game.check();
								if(ui.cheat){
									ui.cheat.classList.add('disabled');
								}
								if(_status.bosschoice){
									_status.bosschoice.classList.add('disabled');
								}
							}
						});
						if(lib.onfree){
							ui.cheat2.classList.add('disabled');
						}
						delete _status.createControl;
					}
					if(!ui.cheat2&&get.config('free_choose'))
					ui.create.cheat2();

					"step 1"
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					}
					if(event.boss){
						event.result={
							boss:true,
							links:event.enemy
						};
					}
					else{
						event.result={
							boss:false,
							links:result.links
						};
						_status.coinCoeff=get.coinCoeff(result.links);
					}
				});
				return next;
			},
			swapMusic:function(increment){
				if (increment) lib.config.currentMusic = lib.config.currentMusic + 1;
				ui.backgroundMusic.pause();
				setTimeout(function(){
					game.playBackgroundMusic(lib.config.musiccchange[lib.config.currentMusic][0], false, true);
					ui.backgroundMusic.currentTime=lib.config.musiccchange[lib.config.currentMusic][1];
				}, 0);
			},
			playConvo:function(lines){
				var num = 0;
				var step1 = function(){
					var dialog = ui.create.dialog();
					var player = ui.create.div('.avatar', dialog).setBackground(lines[num][0],'character');
					dialog.style.minHeight = '120px';
					dialog.add('<div><div style="width:260px;margin-left:120px;font-size:18px;">'+lines[num][1]+'</div></div>');
					player.style.float = 'left';
					ui.auto.hide();
					dialog.open();
					ui.create.control('继续',function(){
						ui.dialog.close();
						while(ui.controls.length) ui.controls[0].close();
						num ++;
						if (num >= lines.length){
							game.resume();
						} else {
							step1();
						}
					});
					ui.create.control('跳过',function(){
						ui.dialog.close();
						while(ui.controls.length) ui.controls[0].close();
						game.resume();
					});
				};
				game.pause();
				step1();
			},
			moveTox:function(player,pos){
				if(player&&player.dataset){
					delete game.playerMap[player.dataset.position];
					player.dataset.position=pos;
					game.playerMap[pos]=player;
					game.delay();
				}
				else{
					console.log(player);
				}
			},
			kofChange:function(){
				lib.skill["exclusive"]={
					direct:true,
					trigger:{player:"enterGame"},
					content:function(){
						trigger.player.addSkill("exclusive_record");
						game.initPile(trigger.player);
					}
				};
				game.addGlobalSkill('exclusive');
				lib.element.content.draw=function(){
					//trigger.set("otherGetCards", lib.skill.test_deck.getCards);
					if(typeof event.minnum=='number'&&num<event.minnum){
						num=event.minnum;
					}
					if(event.drawDeck){
						if(event.drawDeck>num){
							event.drawDeck=num;
						}
						num-=event.drawDeck;
					}
					if(event.log!=false){
						if(num>0){
							game.log(player,'摸了'+get.cnNumber(num)+'张牌');
						}
						if(event.drawDeck){
							game.log(player,'从牌库中获得了'+get.cnNumber(event.drawDeck)+'张牌');
						}
					}
					var cards=[];
					if(num>0){
						//if (player.storage.otherPile) {
							cards.addArray(game.otherGetCards(player,num));//player.storage.otherPile.slice(0, num));
						//}
					}
					else{
						cards=[];
					}
					event.result=cards;
					if(event.animate!=false){
						if(event.visible){
							player.gain(cards,'gain2');
							game.log(player,'摸了'+get.cnNumber(num)+'张牌（',cards,'）');
						}
						else{
							player.gain(cards,'draw');
						}
					}
					else{
						player.gain(cards);
						if(event.$draw){
							player.$draw(cards.length);
						}
					}
				};
				//game.me.draw=lib.element.player.draw;
				/*lib.element.player.lose = function(){
					var next = game.createEvent('lose');
					next.player = this;
					for(var i = 0; i < arguments.length; i++){
						if(get.itemtype(arguments[i]) == 'player'){
							next.source = arguments[i];
						}
						else if(get.itemtype(arguments[i]) == 'cards'){
							next.cards = arguments[i].slice(0);
						}
						else if(get.itemtype(arguments[i]) == 'card'){
							next.cards = [arguments[i]];
						}
						else if(get.objtype(arguments[i]) == 'div'){
							next.position = arguments[i];
						}
					}
					if(next.cards){
						var hej = this.getCards('hej');
						for(var i = 0; i < next.cards.length; i++){
							if(!hej.contains(next.cards[i])){
								next.cards.splice(i--, 1);
							}
						}
					}
					if(!next.cards || !next.cards.length){
						_status.event.next.remove(next);
					}
					else{
						if(next.position == undefined) next.position = ui.discardPile;
						next.cards = next.cards.slice(0);
						
						// ★★★ 新增：专属弃牌堆拦截 ★★★
						if(next.position === ui.discardPile && this.storage.otherDiscarded){
							next._originalPosition = ui.discardPile;   // 备份原位置
							game.initDiscardPile(this);
							next.position = this.storage.otherDiscarded;
							game.updatePile(this, next.cards, true);
						}
					}
					next.setContent('lose');
					return next;
				};*/
				lib.element.content.lose = function(){
					"step 0"
					var hs=[],es=[],js=[];
					var hej=player.getCards('hej');
					event.stockcards=cards.slice(0);
					for(var i=0;i<cards.length;i++){
						cards[i].style.transform+=' scale(0.2)';
						cards[i].classList.remove('glow');
						cards[i].classList.remove('unequip');
						cards[i].recheck();
						if (cards[i].name != cards[i].dataset.cardName) cards[i].name = cards[i].dataset.cardName;
						var info=lib.card[cards[i].name];
						if(info.destroy||cards[i]._destroy){
							cards[i].delete();
							cards[i].destroyed=info.destroy||cards[i]._destroy;
						}
						else if(event.position){
							if(get.info(cards[i]).type == 'delay'){
								cards[i].goto(ui.skillPile);
							} else {
								var pileOwner = cards[i]._pileOwner;
								var shouldGoToPile = false;
								if(event.position === ui.discardPile && pileOwner && pileOwner.storage.otherPile !== undefined){
									// 数组：push 进专属弃牌堆
									//if(!pileOwner.storage.otherDiscarded) pileOwner.storage.otherDiscarded = [];
									//pileOwner.storage.otherDiscarded.push(cards[i]);
									// DOM：扔 ui.special
									cards[i].goto(ui.special);
									game.updatePile(pileOwner, [cards[i]]);
									shouldGoToPile = true;
								} else {
									cards[i].goto(event.position);
								}
								if(_status.discarded){
									if(!shouldGoToPile && event.position === ui.discardPile/* && pileOwner.storage.otherPile === undefined*/){
										_status.discarded.add(cards[i]);
									} else {
										_status.discarded.remove(cards[i]);
									}
								}
							}
						}
						else{
							cards[i].delete();
						}
						// 明置的话就去除标记
						if (player.storage.mingzhi && player.storage.mingzhi.contains(cards[i])){
							if (player.storage.mingzhi.length == 1) {
								delete player.storage.mingzhi;
								player.unmarkSkill('mingzhi');
							} else {
								player.storage.mingzhi.remove(cards[i]);
								player.syncStorage('mingzhi');
							}
						}
						if(!hej.contains(cards[i])){
							cards.splice(i--,1);
						}
						else if(cards[i].parentNode){
							if(cards[i].parentNode.classList.contains('equips')){
								cards[i].original='e';
								es.push(cards[i]);
							}
							else if(cards[i].parentNode.classList.contains('judges')){
								cards[i].original='j';
								js.push(cards[i]);
							}
							else if(cards[i].parentNode.classList.contains('handcards')){
								cards[i].original='h';
								hs.push(cards[i]);
							}
							else{
								cards[i].original=null;
							}
						}
					}
					if(player==game.me) ui.updatehl();
					ui.updatej(player);
					game.broadcast(function(player,cards,num1, num2){
						for(var i=0;i<cards.length;i++){
							cards[i].classList.remove('glow');
							cards[i].delete();
						}
						if(player==game.me){
							ui.updatehl();
						}
						ui.updatej(player);
						_status.cardPileNum=num1;
						_status.skillPileNum=num2;
					},player,cards,ui.cardPile.childNodes.length, ui.skillPile.childNodes.length);
					game.addVideo('lose',player,[get.cardsInfo(hs),get.cardsInfo(es),get.cardsInfo(js)]);
					player.update();
					game.addVideo('loseAfter',player);
					event.num=0;
					"step 1"
					if(num<cards.length){
						if(cards[num].original=='e' || cards[num].original=='j'){
							if (cards[num].original=='e'){ 
								event.loseEquip=true;
								player.removeEquipTrigger(cards[num]);
							} else {
								var info1=get.info(cards[num]);
								if(info1.skills){
									for(var i=0;i<info1.skills.length;i++){
										if (!player.countCards('j', {name:cards[num].name})) player.removeSkill(info1.skills[i]);
									}
								}
							}
							var info=get.info(cards[num]);
							if(info.onLose&&(!info.filterLose||info.filterLose(cards[num],player))){
								event.goto(2);
								return;
							}
						}
						event.num++;
						event.redo();
					}
					else{
						if(event.loseEquip){
							//player.addEquipTrigger();
						}
						event.finish();
					}
					"step 2"
					var info=get.info(cards[num]);
					if(info.loseDelay!=false){
						player.popup(cards[num].name);
						game.delayx();
					}
					if(Array.isArray(info.onLose)){
						for(var i=0;i<info.onLose.length;i++){
							var next=game.createEvent('lose_'+cards[num].name);
							next.setContent(info.onLose[i]);
							next.player=player;
							next.card=cards[num];
						}
					}
					else{
						var next=game.createEvent('lose_'+cards[num].name);
						next.setContent(info.onLose);
						next.player=player;
						next.card=cards[num];
					}
					event.num++;
					event.goto(1);
				};
				lib.element.card.discard = function(bool){
					if(!this.destroyed){
						if (get.type(this) == 'delay') {
							ui.skillPile.appendChild(this);
						} else {
							var owner = this._pileOwner;
							var isOwned = owner && owner.storage && owner.storage.otherPile !== undefined && game.players.contains(owner);
							if (isOwned) {
								this.fix();
								this.classList.remove('glow');
								if (this.parentNode !== ui.special) ui.special.appendChild(this);
								if (bool === false) {
									if (!owner.storage.otherPile) owner.storage.otherPile = [];
									var idx = owner.storage.otherPile.indexOf(this);
									if (idx != -1) owner.storage.otherPile.splice(idx, 1);
									var pos = Math.floor(Math.random() * (owner.storage.otherPile.length + 1));
									owner.storage.otherPile.splice(pos, 0, this);
								} else {
									if (!owner.storage.otherDiscarded) owner.storage.otherDiscarded = [];
									if (owner.storage.otherDiscarded.indexOf(this) == -1) {
										owner.storage.otherDiscarded.push(this);
									}
								}
								if (typeof game.updatePile === 'function') game.updatePile(owner);
								return this;
							}
							ui.discardPile.appendChild(this);
						}
					}
					this.fix();
					this.classList.remove('glow');
					if(bool===false){
						ui.cardPile.insertBefore(this,ui.cardPile.childNodes[Math.floor(Math.random()*ui.cardPile.childNodes.length)]);
					} else if(_status.discarded){
						_status.discarded.add(this);
					}
					return this;
				};
				lib.element.content.judge=function(){
					"step 0"
					var judgestr=get.translation(player)+'的'+event.judgestr+'判定';
					event.videoId=lib.status.videoId++;
					var judgeCard;
					if (typeof game.otherGetCards === 'function' && player.storage && player.storage.otherPile !== undefined) {
						judgeCard = game.otherGetCards(player, 1)[0];
					}
					if (!judgeCard) {
						judgeCard = get.cards()[0];
					}
					player.judging.unshift(judgeCard);
					game.addVideo('judge1',player,[get.cardInfo(player.judging[0]),judgestr,event.videoId]);
					game.broadcastAll(function(player,card,str,id,cardid){
						var event;
						if(game.online){
							event={};
						}
						else{
							event=_status.event;
						}
						if(game.chess){
							event.node=card.copy('thrown','center',ui.arena).animate('start');
						}
						else{
							event.node=player.$throwordered(card.copy(),true);
						}
						if(lib.cardOL) lib.cardOL[cardid]=event.node;
						event.node.cardid=cardid;
						event.node.classList.add('thrownhighlight');
						ui.arena.classList.add('thrownhighlight');
						event.dialog=ui.create.dialog(str);
						event.dialog.classList.add('center');
						event.dialog.videoId=id;
					},player,player.judging[0],judgestr,event.videoId,get.id());

					game.log(player,'进行'+event.judgestr+'判定，亮出的判定牌为',player.judging[0]);
					game.delay(2);
					event.trigger('judge');
					"step 1"
					event.result={
						card:player.judging[0],
						number:get.number(player.judging[0]),
						suit:get.suit(player.judging[0]),
						color:get.color(player.judging[0]),
						judge:event.judge(player.judging[0]),
						node:event.node,
					};
					if(event.result.judge>0) event.result.bool=true;
					else if(event.result.judge<0) event.result.bool=false;
					else event.result.bool=null;
					player.judging.shift();
					game.checkMod(player,event.result,'judge',player);
					if(event.result.bool==true){
						player.popup('洗具');
						game.log(player, '的'+event.judgestr+'判定成功');
					}
					else if(event.result.bool==false){
						player.popup('杯具');
						game.log(player, '的'+event.judgestr+'判定失败');
					}
					if(event.clearArena!=false){
						game.broadcastAll(ui.clear);
					}
					game.broadcast(function(id){
						var dialog=get.idDialog(id);
						if(dialog){
							dialog.close();
						}
						ui.arena.classList.remove('thrownhighlight');
					},event.videoId);
					event.dialog.close();
					game.addVideo('judge2',null,event.videoId);
					ui.arena.classList.remove('thrownhighlight');
					game.log(player,'的判定结果为',event.result.card);
					if(!get.owner(event.result.card)) {
						var jcard = event.result.card;
						var pileOwner = jcard._pileOwner;
						if (event.position === ui.discardPile && pileOwner && pileOwner.storage && pileOwner.storage.otherPile !== undefined) {
							jcard.fix();
							if (jcard.parentNode !== ui.special) {
								ui.special.appendChild(jcard);
							}
							game.broadcastAll(function(owner, card){
								if (!owner.storage.otherDiscarded) owner.storage.otherDiscarded = [];
								owner.storage.otherDiscarded.push(card);
							}, pileOwner, jcard);
							if (typeof game.updatePile === 'function') {
								game.updatePile(pileOwner);
							}
						} else {
							event.position.appendChild(jcard);
						}
					}
				};
				game["initPoker"]=function(player,suit = "none", number = "none") {
					var card = game.createCard("test_deck_poker", suit, number);
					lib.translate.test_deck_poker='扑克';
					lib.card.test_deck_poker.fullskin =true;
					game.broadcastAll(
						function(card, suit) {
							card.node.image.setBackgroundImage('image/card/'+suit+'.png');
							//处理移出游戏的部分
							/*card.destroyed = function(card, position, player, event) {
								//如果要移入的位置是弃牌堆，直接转移到special
								if (position == "discardPile") {
									game.discard(player,card, true);
								}
								return false;
							};*/
						},
						card,
						suit
					);
					return card;
				};
				game["initPile"]=function(player,nocardpile) {
					if (nocardpile) {
						game.broadcastAll(function(player) {
							if (!player.storage.otherPile) player.storage.otherPile = [];
							if (!player.storage.otherDiscarded) player.storage.otherDiscarded = [];
						}, player);
						game.updatePile(player);
						return;
					}
					var modename = null;
					if (_status.bosschoice) {
						if (typeof _status.bosschoice == 'string') {
							modename = _status.bosschoice;
						} else if (_status.bosschoice.name) {
							modename = _status.bosschoice.name;
						}
					}
					if (!modename) modename = lib.storage.current;
					var cardlist = [];
					var seen = {};
					var addDeck = function(key, source) {
						if (!key || seen[key]) return 0;
						var d = lib.cardPack.deck && lib.cardPack.deck[key];
						if (!d) return 0;
						seen[key] = true;
						if (!d.length) return 0;
						var added = 0;
						for (var i = 0; i < d.length; i++) {
							var c = d[i];
							if (!c) continue;
							cardlist.push([c[0], c[1], c[2], c[3], c[4], source]);//cardlist.addArray(d);
							added++;
						}
						return added;
					};
					addDeck(modename, 'mode');          // 模式推荐牌堆
					if (modename && /_free$/.test(modename)) {
						addDeck(modename.replace(/_free$/, ''), 'mode_base');
					}
					var charAdded = addDeck(player.name, 'character');       // 玩家角色专属（玩家选 boss 时就是 boss 专属）
					if (!charAdded)addDeck(player.name2, 'character2');      // 双将第二角色
					if (cardlist.length) {
						game.broadcastAll(function(cardlist, player) {
							var cards = [];
							for (var i = 0; i < cardlist.length; i++) {
								var c = cardlist[i];
								if (!lib.card[c[2]]) continue;
								var card = game.createCard(c[2], c[0], c[1], c[3], c[4]);
								card._pileOwner = player;
								card._pileSource = c[5];
								cards.push(card);
							}
							cards.randomSort();
							player.storage.otherPile = cards;
							if (!player.storage.otherDiscarded) player.storage.otherDiscarded = [];
							for (var i = 0; i < cards.length; i++) {
								ui.special.appendChild(cards[i]);
							}
						}, cardlist, player);
					}/* else {
						var suits = lib.suit.slice().randomSort();
						game.broadcastAll(function(suits, player) {
							var cards = [];
							for (var j = 0; j < suits.length; j++) {
								for (var k = 1; k < 14; k++) {
									var card = game.initPoker(player, suits[j], k);
									card._pileOwner = player;
									cards.push(card);
								}
							}
							cards.randomSort();
							player.storage.otherPile = cards;
							if (!player.storage.otherDiscarded) player.storage.otherDiscarded = [];
							for (var i = 0; i < cards.length; i++) {
								ui.special.appendChild(cards[i]);
							}
						}, suits, player);
					}*/
					game.updatePile(player);
					
					var PILE_TARGET = 28;
					var deficit = PILE_TARGET - (player.storage.otherPile ? player.storage.otherPile.length : 0);
					if (deficit > 0) {
						var evt = game.createEvent('extra_pile_choose', false);
						evt.player = player;
						evt.deficit = deficit;
						evt.setContent(function(){
							"step 0"
							var deficit = event.deficit;
							var available = ui.cardPile.childNodes.length;
							var need = deficit * 3;
							var take = Math.min(need, available - (available % 3));
							if (take < 3) { event.finish(); return; }
							
							var all = [];
							for (var i = 0; i < take; i++) {
								all.push(ui.cardPile.removeChild(ui.cardPile.firstChild));
							}
							event.groups = [];
							for (var i = 0; i < all.length; i += 3) {
								event.groups.push(all.slice(i, i + 3));
							}
							event.chosen = [];
							event.index = 0;
							"step 1"
							if (event.index >= event.groups.length) {
								var unchosen = [];
								for (var i = 0; i < event.groups.length; i++) {
									for (var j = 0; j < event.groups[i].length; j++) {
										if (event.chosen.indexOf(event.groups[i][j]) == -1) {
											unchosen.push(event.groups[i][j]);
										}
									}
								}
								game.broadcastAll(function(player, chosen, unchosen){
									if (!player.storage.otherPile) player.storage.otherPile = [];
									for (var i = 0; i < chosen.length; i++) {
										player.storage.otherPile.push(chosen[i]);
										ui.special.appendChild(chosen[i]);
									}
									for (var i = 0; i < unchosen.length; i++) {
										ui.cardPile.appendChild(unchosen[i]);
									}
								}, player, event.chosen, unchosen);
								game.updatePile(player);
								event.finish();
								return;
							}
							
							var group = event.groups[event.index];
							var next = player.chooseCardButton(
								group,
								'还需要' + (event.groups.length-event.index) + '张牌构筑你的牌堆',
								true
							);
							next.set('filterButton', function(){ return true; });
							next.set('ai', function(button){
								return get.value(button.link, player);
							});
							"step 2"
							if (result.bool && result.links[0]) {
								event.chosen.push(result.links[0]);
							}
							event.index++;
							event.goto(1);
						});
					}
					game.broadcastAll(function(player){
						player.storage.otherPile.randomSort();
					}, player);
				};
				game["washCard"]=function(player) {
					if (!player.storage.otherPile || !player.storage.otherDiscarded) {
						game.initPile(player,true);
					}
					if (!player.storage.otherPile.length && !player.storage.otherDiscarded.length) {
						return;
					}
					var cards = player.storage.otherPile.concat(player.storage.otherDiscarded);
					game.broadcastAll(function(cards,player) {
						player.storage.otherDiscarded = [];
						cards.randomSort();
						player.storage.otherPile = cards;
					}, cards, player);
					//game.updatePile(player);
				};
				game["updatePile"]=function(player,discarded, nobroadcast) {
					if (discarded&&discarded.length) {
						game.broadcastAll(function(list, player) {
							if(!player.storage.otherDiscarded) player.storage.otherDiscarded = [];
							player.storage.otherDiscarded.addArray(list);
							game.log(list, '移入<span class="bluetext">'+get.translation(player)+'</span>专属弃牌堆');
						}, discarded, player);
					}
					if (!nobroadcast) {
						game.filterPlayer(function(target) {target.hasSkill("exclusive_record");}).forEach(function(target) {target.markSkill("exclusive_record");});
					}
				};
				game["otherGetCards"]=function(player,num) {
					if (typeof num != "number") {
						num = 1;
					}
					if (num <= 0) {
						return [];
					}
					var list = [];
					while (num > 0) {
						if (!player.storage["otherPile"]?.length) {
							game.washCard(player);
						}
						if (!player.storage.otherPile.length) {
							break;
						}
						game.broadcastAll(function() {
							_status.onePoker = player.storage.otherPile.shift();
						});
						var cardx = _status.onePoker;
						if (!cardx) {
							break;
						}
						cardx.original = "c";
						list.push(cardx);
						num--;
					}
					//数量不够，用牌堆补一下
					if (num > 0) {
						list.addArray(get.cards(num));
					}
					delete _status.onePoker;
					game.updatePile(player);
					return list;
				};
				lib.element.content.gameDraw=function(){
					if(_status.brawl&&_status.brawl.noGameDraw){
							event.finish();
							return;
						}
						var end=player;
						var numx=num;
						do{
							if(typeof num=='function'){
								numx=num(player);
							}
							var cards = [];
							var otherGetCards=[];
							var otherDiscacrd = [];
							if(player.storage.otherPile){
								otherGetCards=game.otherGetCards(player,numx);
								cards.addArray(otherGetCards);//.slice(0, numx));
							} else {
								cards.addArray(get.cards(numx));
							}
							player.directgain(cards);
							if(player.singleHp===true){
								player.doubleDraw();
								delete player.singleHp;
							}
							player=player.next;
						}
						while(player!=end);
				};
				
				lib.translate.sha_info='出牌阶段，对一名角色使用；对目标造成1点弹幕伤害。';
				lib.translate.huosha_info='出牌阶段，对一名角色使用；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。';
				lib.translate.leisha_info='出牌阶段，你弃置你场上一张牌，对一名角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。';
				lib.translate.shan_info+="<br><u>追加效果：出牌阶段，对你使用：目标本回合可以额外使用一张【轰！】。</u>";
				lib.translate.jiu_info="出牌阶段，对你使用：目标本回合下一张【轰！】造成的伤害+1。";
				lib.translate.guohe_info='出牌阶段，对一名角色使用；弃置其区域内的一张牌。</br><u>强化(-1)：再弃置其一张装备或技能牌。</u>';
				lib.translate.juedou_info='出牌阶段，对一名角色使用：由目标开始，其与你轮流打出一张【轰！】，直到其中一方未打出【轰！】为止。未打出【轰！】的一方受到另一方对其造成的1点弹幕伤害。';
				lib.translate.shunshou_info='出牌阶段，对一名角色使用：获得其区域内的一张牌。';
				lib.translate.royal2_info='出牌阶段，对所有其他角色使用：目标各打出一张【轰！】/受到你造成的1点弹幕伤害。';
				lib.card.sha.cardPrompt=function(card){
					if(card.nature=='fire') return '出牌阶段，对一名其他角色使用；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。';
					if(card.nature=='thunder') return '出牌阶段，你弃置你场上一张牌，对一名其他角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。';
					if(card.nature=='SA') return '【轰！】的一种，此【轰！】造成伤害时，你选择一项：对目标造成1点灵击伤害；或弃置其一张牌。';
					if(card.nature=='DSDR') return '【轰！】的一种，你可以无视限制使用此【轰！】且不计入次数，此【轰！】进入弃牌堆时，可以弃置一张【扩散护符】，将此【轰！】收回手牌。';
					if(card.nature=='BS') return '【轰！】的一种，此【轰！】造成伤害时，若你的手牌多于体力值，你可以弃置两张牌令伤害+1。';
					if(card.nature=='PM') return '【轰！】的一种，若你本回合抵消过目标角色的牌，此【轰！】造成的伤害+1。';
					if(card.nature=='Ms') return '【轰！】的一种，你可以对灵力不少于你的角色无视限制使用此【轰！】且不计入次数。';
					if(card.nature=='DAs') return '【轰！】的一种，若直到游戏开始或上回合结束，你于回合外受到过伤害，则此【轰！】不能使用牌响应。';
					if(card.nature=='CMS') return '【轰！】的一种，若此【轰！】为你本回合使用的第一张牌，目标跳过下个出牌阶段，然后结束你的出牌阶段。';
					if(card.nature=='DLC') return '【轰！】的一种，你可以无视限制使用此【轰！】，若此【轰！】生效则结束你的出牌阶段。';
					if(card.nature=='GB') return '【轰！】的一种，使用时，你可以将一张手牌扣置于角色牌旁，在对手响应或造成伤害时翻开此牌并弃置：若为蓝色，此牌不能被响应；若为红色，此伤害+1。';
					if(card.nature=='IMP') return '【轰！】的一种，此【轰！】结算完毕后或被抵消后，你可以消耗1点灵力将之收回手牌。';
					if(card.nature=='BB') return '【轰！】的一种，若本回合为第二张【魅惑的诱饵】，则此【轰！】伤害+1。';
					if(card.nature=='OSB') return '【轰！】的一种，若你的灵力大于目标，你可以消耗1点灵力令此【轰！】的伤害+1。';
					if(card.nature=='DbA') return '【轰！】的一种，你可以对本回合使用过牌的其他角色无视限制使用此【轰！】且不计入次数。';
					if(card.nature=='TD') return '【轰！】的一种，若你在回合外使用此【轰！】，不能使用牌响应。';
					if(card.nature=='DsE') return '【轰！】的一种，你判定，若为黑色，此【轰！】造成伤害时，你摸一张牌；若为红色，本回合你可以多使用一张【轰！】；若为专属牌，背水。';
					if(card.nature=='SoF') return '【轰！】的一种，若你本回合使用过连招技，此【轰！】伤害+1。\
					<br><u>追加效果：出牌阶段，对你使用：目标摸一张牌。</u>';
					if(card.nature=='FT') return '【轰！】的一种，目标选择一项：弃置一张方片牌；或此【轰！】伤害+1。';
					if(card.nature=='FTM') return '【轰！】的一种，此【轰！】造成伤害时，你将手牌数补至与目标相同。';
					if(card.nature=='WTF') return '【轰！】的一种。也能如【躲～】般抵消【轰！】的效果。';
					if(card.nature=='SB') return '【轰！】的一种。此【轰】进入弃牌堆时，你可以选择一项：摸一张牌；或调换〖星脉〗中“一张【轰！】”与“一种基本牌”的位置。';
					if(card.nature=='EDW') return '【轰！】的一种，生效时你先摸一张牌；此【轰！】对目标造成X点弹幕伤害（X为其与你的距离），然后目标可以使用一张牌。\
					<br><u>追加效果：你决死时，也能对你使用此【轰！】。</u>';
					return '出牌阶段，对一名其他角色使用；对目标造成1点弹幕伤害。';
				},
				lib.card.sha.savable=function(card,player,dying){			//地龙波的小灶
					return card.nature=='EDW'&&dying==player;
				};
				lib.card.sha.selectTarget=function(card){
					if((_status.event.getParent("sha")&&card.nature=="WTF")||(_status.event.getParent("dying")&&card.nature=="EDW"))return -1;
				};
				lib.card.sha.notarget=function(card){return card.nature=='WTF'&&_status.event.getParent("sha");};
				lib.card.sha.filterTarget=function(card,player,target){
					if(_status.event.getParent("sha")&&card.nature=="WTF")return false;			//水形太极拳的小灶
					else return player!=target;
				};
				lib.card.sha.content=function(){
					"step 0"
					if(_status.event.getParent("sha")&&get.nature(event.card)=="WTF"){
						event.trigger('shaMiss');
						event.responded={bool:true};
						event.result={bool:false};
						event.goto(4);
					}
					if(get.nature(event.card)=="EDW")player.draw();
					if(typeof event.shanRequired!='number'||!event.shanRequired||event.shanRequired<0){
						event.shanRequired=1;
					}
					event.baseDamage=1;
					if(get.nature(event.card)=="fire")event.baseDamage++;
					if(get.nature(event.card)=="EDW")event.baseDamage=get.distance(target,player)||0;
					//if(typeof player.storage.extraDamage!='number') 
						event.extraDamage=player.storage.extraDamage||0;
					"step 1"
					if(event.skipShan){
						event._result={bool:true};
					}
					else if(event.directHit){
						event._result={bool:false};
					}
					else{
						var next = target.chooseToUse({
							filterCard:function(card,player){
								if(card.name!='shan'&&card.name.indexOf('_shan')==-1&&(!card.nature||lib.cardPack.nature[card.name][card.nature].indexOf('_shan')==-1)) return false;			//闪和_shan都能响应
								var mod=game.checkMod(card,player,'unchanged','cardEnabled',player.get('s'));
								if(mod!='unchanged') return mod;
								return true;
							},
							prompt:'【'+get.translation(event.card.nature?lib.cardPack.nature.sha[event.card.nature]:"sha")+'】来了，请使用'+get.cnNumber(event.shanRequired,false)+'张【躲~】',});
							//filterCard:{name:'shan'}, selectCard:[1,1]});
						next.set('ai1',function(){
							var target=_status.event.player;
							var evt=_status.event.getParent();
								if(_status.event.shanRequired>1&&target.countCards('h','shan')<_status.event.shanRequired){
								return -1
								}
							var sks=target.get('s');
							if(sks.contains('leiji')||
								sks.contains('releiji')||
								sks.contains('lingbo')){
								return 1;
							}
							if (target.hp > 10) return -1;
							//if(ai.get.damageEffect(target,evt.player,target,evt.card.nature)>=0) return -1;
							return 1;
						}).set('shanRequired',event.shanRequired);
						//next.autochoose=lib.filter.autoRespondShan;
					}
					"step 2"
					if(event._result.bool == false || event._result.result.bool!=false){
						event.trigger('shaHit');
					}
					else{
						event.shanRequired--;
						if(event.shanRequired>0){
							event.goto(1);
						}
						else{
							event.trigger('shaMiss');
							event.responded=result;
						}
					}
					"step 3"
					if(!event.responded){
						if(get.nature(event.card)=="fire")target.chooseToDiscard(function(card,player){
								return(card.name=='sha');
							},'是爆【轰！】，可以再弃置一张【轰！】减少伤害');
						if(get.nature(event.card)=="SA"){
							player.chooseControl("灵击","拆牌").set("choiceList",["对目标再造成1点伤害","再弃置目标一张牌"]);
						}
						if(get.nature(event.card)=="BS"){
							player.chooseToDiscard(2, "he", "你可以弃置两张牌令此伤害+1");
						}
						if(get.nature(event.card)=="OSB"&&player.lili>target.lili){
							player.chooseBool("你可以消耗1点灵力令伤害+1");
						}
						if(get.nature(event.card)=="FT")target.chooseToDiscard(function(card,player){
								return(get.suit(card)=='diamond');
							},'你选择一项：弃置一张方片牌；或该【急冻冷冻法】伤害+1');
					}
					"step 4"
					if(!event.responded){
						if(get.nature(event.card)=="fire"||get.nature(event.card)=="thunder")event.nature=get.nature(event.card);
						if(get.nature(event.card)=="fire"&&result.bool)event.baseDamage--;
						if(get.nature(event.card)=="thunder"){
							target.damage(null,event.baseDamage+event.extraDamage);
							event.extraDamage=0;
						}
						if(((get.nature(event.card)=="BS"||get.nature(event.card)=="OSB")&&result.bool)||(get.nature(event.card)=="PM"&&player.hasSkill("抵消过卡牌"))||(get.nature(event.card)=="BB"&&player.countUsed("BewitchingBait"))||(get.nature(event.card)=="SoF"&&player.countUsed("连招技"))||(get.nature(event.card)=="FT"&&!result.bool)){
							if(get.nature(event.card)=="OSB")player.loselili();
							event.baseDamage++;
						}
						//if(get.nature(event.card)=="EDW")event.nature="thunder";
						target.damage(event.nature,event.baseDamage+event.extraDamage);
						if(get.nature(event.card)=="SA"){
							if(result.control=="灵击")target.damage("thunder",1);
							if(result.control=="拆牌")player.discardPlayerCard(target,1,"hej",true);
						}
						if((get.nature(event.card)=="CMS"&&!player.countUsed())||get.nature(event.card)=="DLC"){
							target.skip('phaseUse');
							var evt=_status.event.getParent('phaseUse');
							if(evt&&evt.name=='phaseUse'){
								evt.skipped=true;
							}
						}
						if(get.nature(event.card)=="FTM"&&player.countCards("h")<target.countCards("h"))player.draw(target.countCards("h")-player.countCards("h"));
						if(get.nature(event.card)=="EDW")target.chooseToUse().set("prompt","【地龙波】：请选择要使用的牌").set("prompt2","对对方进行反击或使自己脱离决死");
						event.result={bool:true};
						event.trigger('shaDamage');
					}
				};
				lib.card.shan.type="trick";
				lib.card.shan.enable=true;
				lib.card.shan.selectTarget=-1;
				lib.card.shan.filterTarget=function(card,player,target){
					if(!_status.event.getParent("sha"))return target==player;
				};
				lib.card.shan.content=function(){
					if(event.getParent("sha")){
						event.trigger('shaMiss');
						event.responded={bool:true};
						event.result={bool:false};
					}else{
						if(!target.storage.huibi)target.storage.huibi=0;
						target.storage.huibi++;
						target.addTempSkill('huibi_skill','phaseAfter');
					}
				};
				lib.card.tao.type="trick";
				lib.card.wuxie["cardPrompt"]=function(card){
					if(card.nature=='DA') return get.translation("DollAmbush");
					if(card.nature=='NRS') return get.translation("NetherReflection_shan");
					if(card.nature=='CWs') return get.translation("ChimeraWings_shan");
					if(card.nature=='GF') return get.translation("GustFan_shan");
					if(card.nature=='EC') return get.translation("EyesightCleaning");
					return get.translation("wuxie");
				},
				lib.card.wuxie.content=function(){
				    "step 0"
				    if(event.card.nature=="NRS")player.useCard(event.getParent("useCard").card,event.getParent("useCard").player);
				    if(event.getParent("sha")&&((event.card.nature=="NRS"&&get.color(event.getParent("sha").card)==get.color(event.card))||event.card.nature=="CWs"||event.card.nature=="GF")){
				        event.trigger('shaMiss');
				        event.responded={bool:true};
				        event.result={bool:false}
				    } else {
				        if (player.name == 'patchouli'){
					        game.trySkillAudio('riyin2',player,true,Math.ceil(2*Math.random()));
				        }
				        var evt=event.getParent();
					    event.result={
					    	wuxied:true,
					    	directHit:evt.directHit||[],
					    	nowuxie:evt.nowuxie,
				    	};
			    	    if(player.isOnline()){
				            player.send(function(player){
					    	    if(ui.tempnowuxie&&!player.hasWuxie()){
						    	    ui.tempnowuxie.close();
					    		    delete ui.tempnowuxie;
					    	}
				    	},player);
				    }
				        else if(player==game.me){
					        if(ui.tempnowuxie&&!player.hasWuxie()){
				    	    	ui.tempnowuxie.close();
					    	    delete ui.tempnowuxie;
				    	    }
				        }
				    }
				    if(event.card.nature=="CWs")_status.currentPhase.draw();
				    if(event.card.nature=="GF")event.getParent("useCard").player.chooseBool("令"+player+"摸一张牌，你收回"+event.getParent("useCard").card);
				    if(event.card.nature=="EC"&&event.getParent("useCard").player.hasSkill("第二张锦囊")){
				        target.skip('phaseUse');
							var evt=_status.event.getParent('phaseUse');
							if(evt&&evt.name=='phaseUse'){
								evt.skipped=true;
							}
						}
				    "step 1"
					if (result.bool){
						player.draw();
						event.getParent("useCard").player.gain(event.getParent("useCard").cards);
						event.getParent("useCard").player.$gain2(event.getParent("useCard").cards);
					}
			    };
				delete lib.card.guohe.range;
				delete lib.card.shunshou.range;
				delete lib.card.shunshou.outrange;
				lib.card.jiu.type="trick";
				delete lib.card.jiu.savable;
				
				lib.skill._move={};
				lib.skill.yinyang.content=function(){
					'step 0'
					player.storage.yinyang = false;
					var controls=['draw_card'];
					if(trigger.player.countCards('hej')){
						controls.push('spin_card');
					}
					player.chooseControl(controls).set('ai',function(){
						var trigger=_status.event.getTrigger();
						if(trigger.player.countCards('hej')&&get.attitude(player,trigger.player)<0 && player.countCards('h') > 2){
							return 'spin_card';
						}
						else{
							return 'draw_card';
						}
					}).set('prompt',get.prompt('yinyang'));
					"step 1"
					if(result.control=='draw_card'){
						player.draw();
					}
					else if(result.control=='spin_card'&&trigger.player.countCards('he')){
						//player.discardPlayerCard(trigger.target,'he',true).logSkill=['moukui',trigger.target];
						player.choosePlayerCard(trigger.player,'hej', 1 ,get.prompt('yinyang',trigger.player));
					}
					'step 2'
					if (result.bool&&result.links.length){
						game.log(player,'将',trigger.player,'的',result.links[0],'置入牌堆底');
						trigger.player.showCards(result.links[0]);
						if (trigger.player.storage.otherPile !== undefined)trigger.player.lose(result.links[0], ui.special);
						else trigger.player.lose(result.links[0], get.type(result.links[0]) == 'delay'?ui.skillPile:ui.cardPile);
						trigger.player.update();
						result.links[0].fix();
						event.card = result.links[0];
						event.card.fix();			//飞虎：牌堆会丢牌
					}
					'step 3'
					if (event.card){
						if (trigger.player.storage.otherPile !== undefined) {
							ui.special.appendChild(card);
							game.broadcastAll(function(owner, card){
								var idx = owner.storage.otherPile.indexOf(card);
								if (idx != -1) owner.storage.otherPile.splice(idx, 1);
								owner.storage.otherPile.push(card);
							}, trigger.player, card);
						}
						else if (get.type(event.card) == 'delay'){
							ui.skillPile.appendChild(event.card);
						} else {
							ui.cardPile.appendChild(event.card);
						}
					}
				};
				lib.skill.qiyao2.content=function(){
					'step 0'
					var list = [];
					var packs = lib.config.all.cards.diff(lib.config.cards);
					for (var i in lib.card){
						if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
						if(lib.card[i].forbid&&lib.card[i].forbid.contains(lib.config.mode)) continue;
						if (packs){
								var f = false;
								for (var j = 0; j < packs.length; j ++){
								if (lib.cardPack[packs[j]].contains(i)){
										f = true;
										break;
									}
								}
								if (f) continue;
							}
						if(lib.card[i].type == 'trick'){
							if(lib.cardPack.pile.default.contains(i)||
							(lib.cardPack.pile[player.name]&&lib.cardPack.pile[player.name].contains(i))||
							(lib.cardPack.pile[player.name2]&&lib.cardPack.pile[player.name2].contains(i)))list.add(i);
						}
					}
					for(var i=0;i<list.length;i++){
						list[i]=['法术','',list[i]];
					}
					if(list.length){
						player.chooseButton(['视为使用一张法术牌',[list,'vcard']]).set('filterButton', function(button){
							return game.filterPlayer(function(target) {
								return player.canUse({name:button.link[2]}, target, true);
							}).length > 0;	
						}).set('ai',function(button){
							var player=_status.event.player;
							var recover=0,lose=1,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(!players[i].isOut()){
									if (get.attitude(player, players[i]) >= 0) recover ++;
									if (get.attitude(player, players[i]) < 0){
										if (players[i].hp == 1 && get.effect(players[i],{name:'juedou'},player,player) && player.canUse('juedou', players[i])) return (button.link[2] == 'juedou')?2:-1;
										lose ++;
									}
								}
							}
							if (recover - 2 >= lose) return (button.link[2] == 'reidaisai')?2:-1;
							return get.value({name:button.link[2]});
						});
					}
					'step 1'
					if(result&&result.bool&&result.links[0]){
						var card = {name:result.links[0][2]};
						event.fakecard=card;
						var select = get.info(card).selectTarget;
						if(select==undefined){
							if(get.info(card).filterTarget==undefined) return[0,0];
							range=[1,1];
						}
						else if(typeof select=='number') range=[select,select];
						else if(get.itemtype(select)=='select') range=select;
						else if(typeof select=='function') range=select(card,player);
						game.checkMod(card,player,range,'selectTarget',player);
						if (get.info(card).multitarget && range == [-1, -1]) range = [game.filterPlayer().length,game.filterPlayer().length];
						if (range == [-1, -1]) range = [1, 1];
						player.chooseTarget(range, function(card,player,target){
							return player.canUse(event.fakecard,target,true);
						},true,'选择'+get.translation(card.name)+'的目标<br><br><div><div style="width:100%;text-align:center;font-size:14px">显示为-1的话，点一下框以外就会自动用了</div>').set('ai',function(target){
							return get.effect(target,event.fakecard,_status.event.player);
						});
					} else {
						event.finish();
					}
					'step 2'
					if(result.bool&&result.targets&&result.targets.length){
						player.useCard(event.fakecard,result.targets);
					}
				};
				lib.skill.qiyao3.chooseButton.dialog=function(event,player){
					var packs = lib.config.all.cards.diff(lib.config.cards);
					var list = [];
					for (var i in lib.card){
						if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
						if(lib.card[i].forbid&&lib.card[i].forbid.contains(lib.config.mode)) continue;
						if (packs){
							var f = false;
							for (var j = 0; j < packs.length; j ++){
								if (lib.cardPack[packs[j]].contains(i)){
									f = true;
									break;
								}
							}
							if (f) continue;
						}
						if(lib.card[i].type == 'trick'){
							if(lib.cardPack.pile.default.contains(i)||
							(lib.cardPack.pile[player.name]&&lib.cardPack.pile[player.name].contains(i))||
							(lib.cardPack.pile[player.name2]&&lib.cardPack.pile[player.name2].contains(i)))list.add(i);
						}
					}
					for(var i=0;i<list.length;i++){
						list[i]=['法术','',list[i]];
					}
					return ui.create.dialog([list,'vcard']);
				};
				lib.skill.xingmai.chooseButton.dialog=function(event,player){
					var list = [];
					var packs = lib.config.all.cards.diff(lib.config.cards);
					for (var i in lib.card){
						if(lib.card[i].mode&&lib.card[i].mode.contains(lib.config.mode)==false) continue;
						if(lib.card[i].forbid&&lib.card[i].forbid.contains(lib.config.mode)) continue;
						if (packs){
							var f = false;
							for (var j = 0; j < packs.length; j ++){
								if (lib.cardPack[packs[j]].contains(i)){
									f = true;
									break;
								}
							}
							if (f) continue;
						}
						if(lib.card[i].type == 'basic'){
							if(lib.cardPack.pile.default.contains(i)||
							(lib.cardPack.pile[player.name]&&lib.cardPack.pile[player.name].contains(i))||
							(lib.cardPack.pile[player.name2]&&lib.cardPack.pile[player.name2].contains(i)))list.add(i);
						}
					}
					for(var i=0;i<list.length;i++){
						var nature = "";
						for (var nature1 in lib.cardPack.nature.sha) {
							if (lib.cardPack.nature.sha[nature1] === list[i]) {
								nature = nature1;
								break;
							}
						}
						list[i]=[get.type(list[i]),'',list[i],nature];
					}
					return ui.create.dialog([list,'vcard']);
				};
			}
		},
		boss:{
			Th7_5:{
				//chongzheng:0,
				//loopType:2,
				checkResult:function(player){
					var win = game.boss.name=='suika';
					if(game.me.name=="suika")win=game.boss.name=='reimu';
					if(!game.me.storage.fuhuo){
						if(game.me.name=="reimu")win=(game.boss.name=='remilia'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="marisa")win=(game.boss.name=='reimu'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="sakuya")win=(game.boss.name=='yuyuko'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="alice")win=(game.boss.name=='youmu'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="patchouli")win=(game.boss.name=='yuyuko'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="youmu")win=(game.boss.name=='remilia'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="remilia")win=(game.boss.name=='yuyuko'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="yuyuko")win=(game.boss.name=='remilia'||game.boss.name=='yukari'||game.boss.name=='suika');
						if(game.me.name=="yukari")win=(game.boss.name=='reimu'||game.boss.name=='yuyuko'||game.boss.name=='suika');
						if(game.me.name=="suika")win=(game.boss.name=='marisa'||game.boss.name=='remilia'||game.boss.name=='reimu');
					}
					if(player==game.boss&&!win){
						return false;
					}
					/*if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}*/
				},
				init:function(){
					//lib.init.layout('newlayout');
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
					//game.addGlobalSkill('kof_deck');
					_status.additionalReward=function(){
						return 500;
					}
					ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					//game.playBackgroundMusic('music_gathering');
					//ui.backgroundMusic.currentTime=4111;			//飞虎：无法按指定时间播放？
					game.playBackgroundMusic('immaterial');
					ui.backgroundMusic.currentTime=0;
					ui.backgroundMusic.play();
					if (game.me.name == 'reimu'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['reimu','这个森林。<br>真是一年比一年糟了呢。',
								'好像的确是在这边……。',
								'',
								'啊，有了。魔理沙的家',
								'',
								'来确认一点事情的。',
								'',
								'不是，就算确认那样的事也没用。',
								'',
								'魔理沙，关于三天后宴会的事……',
								'有没有隐瞒着什么？',
								'',
								'我在想会不会有什么坏家伙。',
								'',
								'对宴会有不好的预感！',
							''],
							['marisa','在别人家门前说什么这边不这边的。<br>你看不见眼前的东西吗？',
								'',
								'我家一直在这。',
								'说起来，你能来这里真是难得啊。',
								'发生了什么事吗？',
								'',
								'是啊。今天的粘菌的繁殖率是中吉的。',
								'',
								'难道是末吉的？',
								'',
								'哈啊？<br>如果隐瞒着的事说出来，就变得和没隐瞒一样了。',
								'所以我什么都没有隐瞒！',
								'那么，到底发生什么事了？',
								'',
								'生剥鬼？',
								'',
								'都说了什么都没有隐瞒了。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_marisa.jpg');
					} else if (game.me.name == 'marisa'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['marisa','首先从近的地方开始处理吧。',
								'虽然好像和这家伙没什么关系。',
								'',
								'啊ー？<br>我想从比较近的地方开始处理。',
								'',
								'要处理你的话在哪里好？',
								'',
								'抱歉。你的处理人偶占卜信不过。',
								'',
								'虽然这里阴暗，也算了。把你给处理掉。',
							''],
							['alice','什么呀。在计划着什么？',
								'',
								'真巧。我也是在处理不用的人偶。',
								'不过。要处理的是时间的话，去红色的地方。<br>如果要处理的是空闲的话，红白那里比较吉利。',
								'',
								'是呢。在明亮的地方比较好吧。',
								'',
								'那是当然了。根本就没有占卜过。',
								'',
								'顺便一提，暗的地方处理的话，大凶。',
							'end'],
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'sakuya'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['sakuya','有人在吗。',
								'',
								'是呢。我是来对神明祈愿一下。',
								'',
								'没这回事。你以为我几岁了啊。',
								'',
								'换个话题，关于后天宴会的事<br>我有想稍微调查一下的事。',
								'',
								'总觉得有点奇怪呢。现在的空气。',
								'你也应该明白吧？<br>妖气竟然这么满。',
								'',
								'你说每晚，也就是三天一次哟。而且我感觉随着宴会的临近<br>妖气在不断增强……。',
								'',
								'很可疑呢。你。',
							'end'],
							['reimu','唉呀，你一个人还真少见呢。<br>有什么事吗？',
								'',
								'是、是吗？这样啊。莫非你到厄年了还是怎么的？',
								'',
								'那你确实有必要驱除厄运呢。<br>顺便一提，赛钱箱在那里哦。',
								'',
								'啊啊，哪怕给一日圆纸币也好啊，<br>话说，宴会有什么问题吗？',
								'',
								'因为你们每晚聚集起来，<br>所以残留下了妖气。',
								'',
								'是你的错觉吧。顺便，赛钱箱在那里。',
							''],
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'alice'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['alice','真是的。',
								'这样的“降伏妖怪”不是人类干的东西吗？',
								'',
								'我想说的也是“怎么了”，<br>你“们”最近太懒了。',
								'怎么不管这次的异变。',
								'',
								'说什么啊，一看就知道了吧？',
								'',
								'和热不热没关系！妖气呀，妖气，还有宴会。',
								'',
								'真有胆量呢。你不干，<br>那就干掉你。',
							'end'],
							['marisa','怎么了，妖怪。有什么事吗？',
								'',
								'啊—？异变，是什么？',
								'',
								'的确最近是很热，不过也会有这么热的夏天啊。',
								'',
								'妖气？宴会？啊—，的确最近两种都多了。<br>但是也会有这么热的夏天啊。',
							''],
						];
						ui.background.setBackgroundImage('image/background/ftg_marisa.jpg');
					} else if (game.me.name == 'patchouli'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['patchouli','……',
								'……好像又有老鼠了。',
								'记得好像……书架后面还有老鼠药的。',
								'',
								'哎呀，黑老鼠居然自己走出来了，<br>连老鼠药也不需要了。',
								'',
								'都偷偷进来了，还说不是偷偷进来的呢。',
								'',
								'果然还是想要猫。',
								'',
								'把偷偷潜入的老鼠——<br>狠狠赶走的猫。',
							'end'],
							['marisa','给我等一下，老鼠药对人没用。',
								'',
								'啊啊，是误会啊，今天不是偷偷进来的。',
								'只是稍微来查一下东西。',
								'',
								'那也稍微不同。只是来偷偷地查东西。',
								'',
								'猫？',
							''],
						];
						ui.background.setBackgroundImage('image/background/stg_library.jpg');
					} else if (game.me.name == 'youmu'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['youmu','照一般情况来看的话……',
								'',
								'灵梦是最可疑的。',
								'',
								'因为，对了。每次开宴会的时候都是在这里集中。',
								'',
								'你那么说，是在图谋什么吗？<br>这股妖气可是很不寻常哦？',
								'',
								'为了斩可疑的东西而来的。',
							''],
							['reimu','咦？今天一个人吗？有什么事？',
								'',
								'看来又是些麻烦事啊。',
								'',
								'那还不是因为你们把宴会会场选在神社的缘故？',
								'要让我来说倒是希望在你家里开宴会呢。',
								'',
								'就算有妖气也是你们这些家伙的妖气吧？人类就算再怎么胡来也不会发出妖气的哦。',
								'所以，你说那个妖气不寻常，到底有什么事啊。',
								'',
								'那也太武断了吧。',
							'end'],
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'remilia'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['remilia','',
								'我要稍微出一下门。',
								'',
								'所以呢，就拜托你看家了。',
								'',
								'你在跟谁说话啊。',
								'而且，今天有点急事',
								'',
								'这事我不快点去可就不行了。',
								'今晚，要去把幻想乡都恐吓一下',
								'',
								'当然有事情了。',
								'和咲夜说话的时间真是太浪费了，<br>快点去看家就好了。',
							'end'],
							['sakuya','把我叫到这里来，是有什么事吗？',
								'',
								'不对，是普通的时间吧。',
								'',
								'您在说什么啊，请让我和您一起去。<br>晚上出去很危险的。',
								'',
								'那么，请尽管交给我好了。<br>如果要拜托急事的话这里可是幻想乡第一的。',
								'',
								'……发生什么事了吗？<br>明天可就是宴会的日子了啊。',
							''],
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['yuyuko','',
								'是啊，难得这么好的天气，<br>你偶尔也到外面去怎么样？',
								'',
								'话说回来，妖梦你的职务是什么啊？',
								'',
								'不对吧。妖梦不是看守的么？',
								'',
								'真正的看守……<br>不看好从屋子里向外出去的人是不行的哟。',
							'end'],
							['youmu','哎？大小姐要出去呀？',
								'',
								'我本来就是在外面工作啊。',
								'',
								'哎？哎哎。这个我记的很清楚哦，就是跟着大小姐您。',
								'',
								'嘛，是有兼职看守……',
							''],
						];
						ui.background.setBackgroundImage('image/background/ftg_hakugyokurou.jpg');
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['yukari','那边路过的吸血鬼小姐<br>可以稍微耽误你一点时间吗？',
								'',
								'说起来换个话题，你这有很好的酒吧？',
								'',
								'电气白兰',
								'白兰地',
								'',
								'为什么就一定要和你两个人喝呀？',
								'我是来拿走那瓶酒的。<br>因为明天是宴会……。',
								'',
								'为什么那么生气啊？',
								'',
								'是钙吧？',
							'end'],
							['remilia','谁呀？我已经很困了。',
								'……你是怎么来到这里的？',
								'',
								'话题……<br>还没开始就被改变了也真可怜。',
								'',
								'那又怎么样？<br>别说是用来两个人喝酒直到天亮的',
								'',
								'开玩笑。虽然不知道你从哪里进来，<br>这就把你赶回去。',
								'',
								'因为钾不足。',
							''],
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['suika','啊？<br>已经被发现了？',
								'',
								'你的事我很清楚哦。<br>因为一直看着呢。',
								'你在宴会上总是做料理和收拾的吧。<br>真是伟大。',
								'但是，谁也没有去留意那样的事。<br>谁也没有感谢你。',
								'',
								'跑到这里来的不是你吗？',
								'',
								'说谎。做料理和收拾的工作差不多已经干腻了吧？',
							'end'],
							['sakuya','终于被我逮到了，你就是犯人吧？',
								'话说，你是谁？',
								'',
								'你不觉得在大家热闹起来的时候，<br>收拾是件很不礼貌的事吗？',
								'所以在收拾的时候特意不让任何人注意到。',
								'不让任何人来操心。<br>本来就应该那样的。',
								'说起来，你是谁？',
								'',
								'是被令人头痛的家伙带来的。',
							''],
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					} else game.me.storage.reinforce = ['marisa'];
					game.me.storage.tongguan = 0;
					game.me.storage.stage = 'ftg_suimu2';
					game.me.storage.fuhuo = 1;
					if (get.config('practice_mode')){
						game.me.storage.fuhuo = 10;
					}
					game.me.storage.unskill = ['yuezhi'];
					lib.config.musiccchange=[
						['music_gathering', 0],//遍参
						['music_gathering', 159],//東方妖恋談
						['music_gathering', 337],//月輪
						['music_gathering', 381],//恋色マジック
						['music_gathering', 514],//あゆのかぜ
						['music_gathering', 603],//メイドと血と懐中時計 
						['music_gathering', 819],//Intermezzo
						['music_gathering', 887],//ブクレシュティの人形師
						['music_gathering', 1132],//魔所
						['music_gathering', 1211],//ラクトガール ～ 少女密室
						['music_gathering', 1425],//裏心
						['music_gathering', 1481],//広有射怪鳥事 ～ Till When
						['music_gathering', 1630],//亡き王女の為のセプテット 
						['music_gathering', 1764],//幽雅に咲かせ、黒染の桜 ～ Border of Life.
						['music_gathering', 1874],//夏明き
						['music_gathering', 1996],//恋色マジック 体験版 Ver
						['music_gathering', 2179],//広有射怪鳥事 体験版 Ver
						['music_gathering', 2330],//東方妖恋談 弐符アレンジ
						['music_gathering', 2611],//恋色マジック 弐符アレンジ
						['music_gathering', 2887],//メイドと血と懐中時計 弐符アレンジ
						['music_gathering', 3138],//ブクレシュティの人形師 弐符アレンジ
						['music_gathering', 3474],//ラクトガール 弐符アレンジ
						['music_gathering', 3709],//広有射怪鳥事 弐符アレンジ
						['music_gathering', 3906],//亡き王女の為のセプテット 弐符アレンジ
						['music_gathering', 4111],//萃夢想
						['music_gathering', 4303],//少女綺想曲 ～ Capriccio
						['music_gathering', 4449],//森閑
						['music_gathering', 4543],//魔女達の舞踏会
						['music_gathering', 4688],//紅夜
						['music_gathering', 4771],//月時計 ～ ルナダイアル
						['music_gathering', 4953],//幽境
						['music_gathering', 5037],//人形裁判
						['music_gathering', 5175],//珍客
						['music_gathering', 5286],//ヴワル魔法図書館
						['music_gathering', 5460],//禍機
						['music_gathering', 5539],//東方妖々夢 ～ Ancient Temple
						['music_gathering', 5709],//仰空
						['music_gathering', 5802],//Demystify Feast
						['music_gathering', 6083],//戦迅
						['music_gathering', 6174],//夜が降りてくる ～ Evening Star
						['music_gathering', 6475],//砕月
						['music_gathering', 6582],//御伽の国の鬼が島
						['music_gathering', 6980],//東方萃夢想
						['music_gathering', 7068],//Demystify Feast (Arrange)
						['music_gathering', 7296],//夜が降りてくる ～ Evening Star (Arrange)
						['music_gathering', 7385],//御伽の国の鬼が島 (Arrange)
						['music_gathering', 7685],//東方萃夢想 (Arrange)
						['music_gathering', 7955],//over
					];
					var musicnum = 0;
					if (game.me.name == 'reimu')musicnum = 2;//6+24+4+36+38+40
					else if (game.me.name == 'marisa')musicnum = 30;//4+32+11+36+38+40
					else if (game.me.name == 'sakuya')musicnum = 0;//30+26+34+12+38+40
					else if (game.me.name == 'alice')musicnum = 2;
					else if (game.me.name == 'patchouli')musicnum = 26;
					else if (game.me.name == 'youmu')musicnum = 24;
					else if (game.me.name == 'remilia')musicnum = 4;
					else if (game.me.name == 'yuyuko')musicnum = 10;
					else if (game.me.name == 'yukari')musicnum = 11;
					else if (game.me.name == 'suika')musicnum = 4;
					else musicnum = 2;
					lib.config.currentMusic = musicnum;
					/* 这里是把牌换成红魔乡风格的。需要一个法子检测皮肤有没有下载。
					for (var i1 in lib.config.skinSet[1]){
						if (lib.config.skinSet[1][i1] == 0){
							delete lib.config.skin[i1];
						} else {
							lib.config.skin[i1] = lib.config.skinSet[1][i1];
						}
					}
					for(var f=0;f<ui.cardPile.childElementCount;f++){
						ui.cardPile.childNodes[f].node.image.setBackground(ui.cardPile.childNodes[f].name, 'card');
					}
					*/
					game.me.addSkill('revive');
					game.me.addSkill('reinforce');
					if (lib.config.connect_nickname == '黑白葱') game.me.addSkill('finalspark');
					game.me.addSkill('handcard_max');
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;			//飞虎：设置成0牌堆里会丢一张牌，只能留下了
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th10_5:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th12_3:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th13_5:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th14_5:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th15_5:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th7_5_free:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th10_5_free:{
				loopType:1,
				checkResult:function(player){
					return true;
				},
				init:function(){
					//lib.init.layout('newlayout');
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu',
					'windfan','lunadial','ibuki','pantsu','yinyangyu','lantern','louguan','mirror','book','stone','laevatein','zhiyuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
						
						windfan:"wuzhuang",
						lunadial:"wuzhuang",
						ibuki:"wuzhuang",
						pantsu:"wuzhuang",
						yinyangyu:"wuzhuang",
						lantern:"wuzhuang",
						louguan:"wuzhuang",
						mirror:"wuzhuang",
						book:"wuzhuang",
						stone:"wuzhuang",
						laevatein:"wuzhuang",
						zhiyuu:"wuzhuang",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
					//game.addGlobalSkill('');
					_status.additionalReward=function(){
						return 500;
					}
					ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					game.playBackgroundMusic('music_perception');
					ui.backgroundMusic.currentTime=6130;
					ui.backgroundMusic.play();
					game.me.storage.reinforce = [game.boss.name];
					/*if (game.me.name == 'reimu'){			//飞虎：开局对话怎么搞？
						game.playConvo([['reimu', '异变啊，这是异变啊']]);
						game.me.storage.dialog = [
							['reimu','。',,
							'end'],
						];
					}
					game.me.storage.tongguan = 0;
					game.me.storage.stage = '';*/
					game.me.storage.fuhuo = 1;
					/*if (get.config('practice_mode')){
						game.me.storage.fuhuo = 5;
					}*/
					lib.config.musiccchange=[
						['music_perception', 0],//緋想天
						['music_perception', 232],//日常坐臥
						['music_perception', 359],//地の色は黄色
						['music_perception', 549],//甲論乙駁
						['music_perception', 674],//風光明媚
						['music_perception', 801],//香る樹葉花
						['music_perception', 998],//踊る水飛沫
						['music_perception', 1196],//以魚駆蠅
						['music_perception', 1318],//冷吟閑酔
						['music_perception', 1441],//嘲りの遊戯
						['music_perception', 1638],//放縦不羈
						['music_perception', 1744],//雲外蒼天
						['music_perception', 1870],//黒い海に紅く　～ Legendary Fish
						['music_perception', 2207],//天衣無縫
						['music_perception', 2349],//有頂天変　～ Wonderful Heaven
						['music_perception', 2595],//幼心地の有頂天
						['music_perception', 2720],//暮色蒼然
						['music_perception', 2876],//東方緋想天
						['music_perception', 2964],//緋想天 (Piano Version)
						['music_perception', 3077],//東方妖恋談
						['music_perception', 3254],//星の器　～ Casket of Star
						['music_perception', 3427],//Flowering Night
						['music_perception', 3629],//ブクレシュティの人形師
						['music_perception', 3837],//広有射怪鳥事　～ Till When？
						['music_perception', 4014],//ラクトガール　～ 少女密室
						['music_perception', 4206],//幽雅に咲かせ、墨染の桜　～ Border of Life 
						['music_perception', 4381],//亡き王女の為のセプテット
						['music_perception', 4575],//夜が降りてくる
						['music_perception', 4758],//砕月
						['music_perception', 4965],//狂気の瞳　～ Invisible Full Moon
						['music_perception', 5151],//風神少女
						['music_perception', 5398],//彼岸帰航　～ Riverside View
						['music_perception', 5574],//黒い海に紅く　～ Legendary Fish
						['music_perception', 5824],//有頂天変　～ Wonderful Heaven
						['music_perception', 6130],//東方緋想天
						['music_perception', 6358],//over
					];
					//lib.config.currentMusic = 34;			//飞虎：有这东西就限制播放顺序，烦
					game.me.storage.reskill=['suimu_win'];
					game.me.addSkill('revive');			//飞虎：三局两胜应该就是各一次复活机会？
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th12_3_free:{
				loopType:1,
				checkResult:function(player){
					if(player==game.boss&&game.boss.name!='suika'){
						return false;
					}
				},
				init:function(){
					game.kofChange();
					
					var list=['kuabu','kusanagi','magatama','ryuuuu'];
					var map={
						kuabu:"sha",
						kusanagi:"juedou",
						magatama:"guohe",
						ryuuuu:"wuxie",
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th13_5_free:{
				loopType:1,
				checkResult:function(player){
					return true;
				},
				init:function(){
					//lib.init.layout('newlayout');
					lib.element.content.phaseDraw=function(){
						"step 0"
						if(game.modPhaseDraw){
							game.modPhaseDraw(player,event.num);
						}
						else{
							if((get.config('first_less')=="zero"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num=0;
							}
							if((get.config('first_less')=="less"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
							}
							if((get.config('first_less')=="lesast"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
								if(event.num>0)event.num--;
							}
							if(event.num>0||get.config('first_less')=="less"||get.config('first_less')=="lesast"){
								var num=event.num;
								if(event.attachDraw){
									for(var i=0;i<event.attachDraw.length;i++){
										ui.cardPile.insertBefore(event.attachDraw[i],ui.cardPile.firstChild);
									}
									num+=event.attachDraw.length;
								}
								var next=player.draw(num+1);
								if(event.attachDraw){
									next.minnum=event.attachDraw.length;
								}
							}
						}
						player.chooseToDiscard("弃置一张红色牌本回合获得三点移动力，或弃置一张黑色牌本回合获得一点移动力",true);
						"step 1"
						if(result.bool){
							if(get.color(result.cards[0])=="red")player.addTempSkill("moveadd1");
							if(get.color(result.cards[0])=="black")player.addTempSkill("moveminus1");
						}
						if(Array.isArray(result)){
							event.cards=result;
						}
					};
					var list=['kusanagi','magatama','ryuuuu','houraiyuzhi','reidaisai','saiqianxiang','caifang','deathfan','frog','hourai','gungnir','hakkero','bailou'];
					var map={
						kusanagi:"wuzhong",//草薙剑换无中生有
						magatama:"jitui",
						ryuuuu:"jitui",//八咫琼勾玉和龙宫羽衣换-1击退
						houraiyuzhi:"wuxie",//蓬莱玉枝换无懈可击
						reidaisai:"houtiao",
						saiqianxiang:"houtiao",//例大祭换-1后跳
						caifang:"shuiyanqijunx",//知己知彼换水淹七军
						deathfan:"royal2",
						frog:"royal2",//凤蝶纹扇和冰冻青蛙换-1南蛮入侵
						hourai:"touxi",
						gungnir:"touxi",//替身人形和冈格尼尔换偷袭
						hakkero:"lebu",
						bailou:"lebu",//八卦炉和白楼换-1乐不思蜀
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
					//game.addGlobalSkill('');
					_status.additionalReward=function(){
						return 500;
					}
					ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					game.playBackgroundMusic('music_perception');
					ui.backgroundMusic.currentTime=6130;
					ui.backgroundMusic.play();
					game.me.storage.reinforce = [game.boss.name];
					/*if (game.me.name == 'reimu'){			//飞虎：开局对话怎么搞？
						game.playConvo([['reimu', '异变啊，这是异变啊']]);
						game.me.storage.dialog = [
							['reimu','。',,
							'end'],
						];
					}
					game.me.storage.tongguan = 0;
					game.me.storage.stage = '';*/
					game.me.storage.fuhuo = 1;
					/*if (get.config('practice_mode')){
						game.me.storage.fuhuo = 5;
					}*/
					//lib.config.musiccchange=[
					//];
					//lib.config.currentMusic = 34;			//飞虎：有这东西就限制播放顺序，烦
					game.me.storage.reskill=['suimu_win'];
					game.me.addSkill('revive');			//飞虎：三局两胜应该就是各一次复活机会？
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th14_5_free:{
				loopType:1,
				checkResult:function(player){
					return true;
				},
				init:function(){
					//lib.init.layout('newlayout');
					lib.element.content.phaseDraw=function(){
						"step 0"
						if(game.modPhaseDraw){
							game.modPhaseDraw(player,event.num);
						}
						else{
							if((get.config('first_less')=="zero"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num=0;
							}
							if((get.config('first_less')=="less"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
							}
							if((get.config('first_less')=="lesast"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
								if(event.num>0)event.num--;
							}
							if(event.num>0||get.config('first_less')=="less"||get.config('first_less')=="lesast"){
								var num=event.num;
								if(event.attachDraw){
									for(var i=0;i<event.attachDraw.length;i++){
										ui.cardPile.insertBefore(event.attachDraw[i],ui.cardPile.firstChild);
									}
									num+=event.attachDraw.length;
								}
								var next=player.draw(num+1);
								if(event.attachDraw){
									next.minnum=event.attachDraw.length;
								}
							}
						}
						player.chooseToDiscard("弃置一张红色牌本回合获得三点移动力，或弃置一张黑色牌本回合获得一点移动力",true);
						"step 1"
						if(result.bool){
							if(get.color(result.cards[0])=="red")player.addTempSkill("moveadd1");
							if(get.color(result.cards[0])=="black")player.addTempSkill("moveminus1");
						}
						if(Array.isArray(result)){
							event.cards=result;
						}
					};
					var list=['kusanagi','magatama','ryuuuu','houraiyuzhi','reidaisai','saiqianxiang','caifang','deathfan','frog','hourai','gungnir','hakkero','bailou'];
					var map={
						kusanagi:"wuzhong",//草薙剑换无中生有
						magatama:"jitui",
						ryuuuu:"jitui",//八咫琼勾玉和龙宫羽衣换-1击退
						houraiyuzhi:"wuxie",//蓬莱玉枝换无懈可击
						reidaisai:"houtiao",
						saiqianxiang:"houtiao",//例大祭换-1后跳
						caifang:"shuiyanqijunx",//知己知彼换水淹七军
						deathfan:"royal2",
						frog:"royal2",//凤蝶纹扇和冰冻青蛙换-1南蛮入侵
						hourai:"touxi",
						gungnir:"touxi",//替身人形和冈格尼尔换偷袭
						hakkero:"lebu",
						bailou:"lebu",//八卦炉和白楼换-1乐不思蜀
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
					//game.addGlobalSkill('');
					_status.additionalReward=function(){
						return 500;
					}
					ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					game.playBackgroundMusic('music_perception');
					ui.backgroundMusic.currentTime=6130;
					ui.backgroundMusic.play();
					game.me.storage.reinforce = [game.boss.name];
					/*if (game.me.name == 'reimu'){			//飞虎：开局对话怎么搞？
						game.playConvo([['reimu', '异变啊，这是异变啊']]);
						game.me.storage.dialog = [
							['reimu','。',,
							'end'],
						];
					}
					game.me.storage.tongguan = 0;
					game.me.storage.stage = '';*/
					game.me.storage.fuhuo = 1;
					/*if (get.config('practice_mode')){
						game.me.storage.fuhuo = 5;
					}*/
					//lib.config.musiccchange=[
					//];
					//lib.config.currentMusic = 34;			//飞虎：有这东西就限制播放顺序，烦
					game.me.storage.reskill=['suimu_win'];
					game.me.addSkill('revive');			//飞虎：三局两胜应该就是各一次复活机会？
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			Th15_5_free:{
				loopType:1,
				checkResult:function(player){
					return true;
				},
				init:function(){
					//lib.init.layout('newlayout');
					lib.element.content.phaseDraw=function(){
						"step 0"
						if(game.modPhaseDraw){
							game.modPhaseDraw(player,event.num);
						}
						else{
							if((get.config('first_less')=="zero"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num=0;
							}
							if((get.config('first_less')=="less"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
							}
							if((get.config('first_less')=="lesast"||_status.connectMode||_status.first_less_forced)&&game.phaseNumber==1/*&&_status.first_less*/){
								event.num--;
								if(event.num>0)event.num--;
							}
							if(event.num>0||get.config('first_less')=="less"||get.config('first_less')=="lesast"){
								var num=event.num;
								if(event.attachDraw){
									for(var i=0;i<event.attachDraw.length;i++){
										ui.cardPile.insertBefore(event.attachDraw[i],ui.cardPile.firstChild);
									}
									num+=event.attachDraw.length;
								}
								var next=player.draw(num+1);
								if(event.attachDraw){
									next.minnum=event.attachDraw.length;
								}
							}
						}
						player.chooseToDiscard("弃置一张红色牌本回合获得三点移动力，或弃置一张黑色牌本回合获得一点移动力",true);
						"step 1"
						if(result.bool){
							if(get.color(result.cards[0])=="red")player.addTempSkill("moveadd1");
							if(get.color(result.cards[0])=="black")player.addTempSkill("moveminus1");
						}
						if(Array.isArray(result)){
							event.cards=result;
						}
					};
					var list=['kusanagi','magatama','ryuuuu','houraiyuzhi','reidaisai','saiqianxiang','caifang','deathfan','frog','hourai','gungnir','hakkero','bailou','windfan','lunadial','ibuki','pantsu','yinyangyu','lantern','louguan','mirror','book','stone','laevatein','zhiyuu'];
					var map={
						kusanagi:"wuzhong",//草薙剑换无中生有
						magatama:"jitui",
						ryuuuu:"jitui",//八咫琼勾玉和龙宫羽衣换-1击退
						houraiyuzhi:"wuxie",//蓬莱玉枝换无懈可击
						reidaisai:"houtiao",
						saiqianxiang:"houtiao",//例大祭换-1后跳
						caifang:"shuiyanqijunx",//知己知彼换水淹七军
						deathfan:"royal2",
						frog:"royal2",//凤蝶纹扇和冰冻青蛙换-1南蛮入侵
						hourai:"touxi",
						gungnir:"touxi",//替身人形和冈格尼尔换偷袭
						hakkero:"lebu",
						bailou:"lebu",//八卦炉和白楼换-1乐不思蜀
						windfan:"wuzhuang",
						lunadial:"wuzhuang",
						ibuki:"wuzhuang",
						pantsu:"wuzhuang",
						yinyangyu:"wuzhuang",
						lantern:"wuzhuang",
						louguan:"wuzhuang",
						mirror:"wuzhuang",
						book:"wuzhuang",
						stone:"wuzhuang",
						laevatein:"wuzhuang",
						zhiyuu:"wuzhuang",//装备全换武装
					};
					for(var i=0;i<list.length;i++){
						if (!lib.card[list[i]].forbid) lib.card[list[i]].forbid = ['ftg'];
						else lib.card[list[i]].forbid.push('ftg');
						game.removeCard(list[i], map[list[i]]);
					}
					//game.addGlobalSkill('');
					_status.additionalReward=function(){
						return 500;
					}
					ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					game.playBackgroundMusic('music_perception');
					ui.backgroundMusic.currentTime=6130;
					ui.backgroundMusic.play();
					game.me.storage.reinforce = [game.boss.name];
					/*if (game.me.name == 'reimu'){			//飞虎：开局对话怎么搞？
						game.playConvo([['reimu', '异变啊，这是异变啊']]);
						game.me.storage.dialog = [
							['reimu','。',,
							'end'],
						];
					}
					game.me.storage.tongguan = 0;
					game.me.storage.stage = '';*/
					game.me.storage.fuhuo = 1;
					/*if (get.config('practice_mode')){
						game.me.storage.fuhuo = 5;
					}*/
					//lib.config.musiccchange=[
					//];
					//lib.config.currentMusic = 34;			//飞虎：有这东西就限制播放顺序，烦
					game.me.storage.reskill=['suimu_win'];
					game.me.addSkill('revive');			//飞虎：三局两胜应该就是各一次复活机会？
				},
				gameDraw:function(player){
					if (player == game.boss) return 4;
					if (player == game.me) return 4;
					return 0;
				},
			},
			global:{
				loopType:1,
				chongzheng:6
			},
		},
		skill:{
			jiu:{
				/*trigger:{player:'useCard'},
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				forced:true,
				content:function(){
					if(!trigger.baseDamage) trigger.baseDamage=1;
					trigger.baseDamage+=player.storage.jiu;
					trigger.jiu=true;
					trigger.jiu_add=player.storage.jiu;
					game.addVideo('jiuNode',player,false);
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
				},
				temp:true,
				vanish:true,
				silent:true,
				popup:false,
				nopop:true,
				onremove:function(player){
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
					delete player.storage.jiu;
				},
				ai:{
					damageBonus:true
				},
				group:'jiu2'
			},
			jiu2:{
				trigger:{player:'useCardAfter',global:'phaseAfter'},
				priority:2,
				firstDo:true,
				charlotte:true,
				filter:function(event,player){
					//if(player.hasSkillTag('jiuSustain',null,event.name)) return false;
					if(event.name=='useCard') return (event.card&&(event.card.name=='sha'));
					return true;
				},
				forced:true,
				popup:false,
				audio:false,
				content:function(){
					game.broadcastAll(function(player){
						player.removeSkill('jiu');
					},player);
					game.addVideo('jiuNode',player,false);
				},*/
			},
			jiu_skill:{			//飞虎：过关不清buff= =
				direct:true,
				trigger:{player:['useCardAfter','phaseAfter']},
				filter:function(event,player){
					if(event.name=="phase"||event.card.name=="sha")return player.storage.extraDamage;
				},
				content:function(){
					player.storage.extraDamage=0;
					if(player.node.jiu){
						player.node.jiu.delete();
						player.node.jiu2.delete();
						delete player.node.jiu;
						delete player.node.jiu2;
					}
					player.storage.baseDamage--;
					if(player.storage.baseDamage==0)delete player.storage.baseDamage;
				}
			},
			g_jinchan: {
				cardSkill: true,
				trigger: { target: "useCardToBefore" },
				forced: true,
				popup: false,
				filter:function(event, player) {
					if (player.hasSkill('kedan')) return true;
					if (event.player == player) {
						return false;
					}
					/*if (event.getParent().directHit.contains(player)) {
						return false;
					}*/
					var num = player.countCards("h", player.countCards("h")?player.getCards("h")[0].name:"jinchan");
					return num && num == player.countCards("h");
				},
				content:function() {
					"step 0";
					player
						.chooseToUse("是否对" + get.translation(trigger.card) + "使用【抱头蹲防】？")
						.set("ai1", function (card) {
							return _status.event.bool;
						})
						.set("bool", -get.effect(player, trigger.card, trigger.player, player))
						.set("respondTo", [trigger.player, trigger.card])
						.set("filterCard", function (card, player) {
							if (card.name != "jinchan") {
								return false;
							}
							return lib.filter.cardEnabled(card, player, "forceEnable");
						});
					trigger.jinchan = true;
					"step 1";
					if(result.bool){
						trigger.player.draw();
						trigger.untrigger();
						trigger.finish();
					}
					delete trigger.jinchan;
				},
			},
			g_jinchan2: {
				trigger: {
					player: "useCardAfter",
				},
				forced: true,
				cardSkill: true,
				filter:function(event, player) {
					if (!event || !event.cards || !event.cards.length) {
						return false;
					}
					for (var i of event.cards) {
						if (i.name == "jinchan") {
							return true;
						}
					}
					return false;
				},
				content:function() {
					var num = 0,
						cards = trigger.cards;
					for (var i = 0; i < cards.length; i++) {
						if (cards[i].name == "jinchan") {
							num++;
						}
					}
					if (num) {
						player.draw(num);
					}
				},
			},
			_suijiyingbian_skill: {
				mod: {
					cardname:function(card, player) {
						if (card.name == "suijiyingbian" && player.storage.suijiyingbian) {
							return player.storage.suijiyingbian;
						}
					},
					cardnature:function(card, player) {
						if (card.name == "suijiyingbian" && player.storage.suijiyingbian_nature) {
							return player.storage.suijiyingbian_nature;
						}
					},
				},
				trigger: {
					player: ["useCard", "respond"],
					global: "phaseBeginStart",
				},
				silent: true,
				filter:function(event, player, name) {
					if (name == "phaseBeginStart") {
						return true;
					}
					var type = get.type(event.card);
					return type == "basic" || type == "trick";
				},
				content:function() {
					if (event.triggername == "phaseBeginStart") {
						delete player.storage.suijiyingbian;
						delete player.storage.suijiyingbian_nature;
					} else {
						player.storage.suijiyingbian = trigger.card.name;
						if(trigger.card.nature)player.storage.suijiyingbian_nature = trigger.card.nature;
						if(player.countCards('h','suijiyingbian'))lib.skill["suijiyingbian_skill"].viewAs = {name:player.storage.suijiyingbian};
					}
				},
			},
			suijiyingbian_skill: {
				mod:{
					cardEnabled:function(card,player){
						if(card.name == "suijiyingbian" && !player.storage.suijiyingbian) return false;
					},
					cardUsable:function(card,player){
						if(card.name == "suijiyingbian" && !player.storage.suijiyingbian) return false;
					},
					cardRespondable:function(card,player){
						if(card.name == "suijiyingbian" && !player.storage.suijiyingbian) return false;
					},
					cardSavable:function(card,player){
						if(card.name == "suijiyingbian" && !player.storage.suijiyingbian) return false;
					}
				},
				audio:2,
				enable:['chooseToUse','chooseToRespond'],
				filter:function(event,player){
					return player.countCards('h','suijiyingbian')>0;
				},
				filterCard:{name:"suijiyingbian"},
				viewAs:{name:'suijiyingbian'},
				viewAsFilter:function(player){
					if(!player.countCards('h','suijiyingbian')) return false;
				},
				check:function(){return 1},
				hiddenCard:function(player, name){
					return name==player.storage.suijiyingbian;
				},
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			},
			_gugugu: {
				trigger: {
					global: ["loseAfter",'judgeAfter'],
				},
				forced: true,
				cardSkill: true,
				filter:function(event, player) {
					if (player != _status.currentPhase) {
						return false;
					}
					if (!event || !event.cards || !event.cards.length) {
						if(event.result&&event.result.card.parentNode.id=='discardPile'&&event.result.card.name == "suijiyingbian")return true;
						return false;
					}
					else for (var i of event.cards) {
						if (i.name == "suijiyingbian") {
							return true;
						}
					}
					return false;
				},
				content:function() {
					var num = 0;
					if (trigger.cards&&trigger.cards.length)for (var i = 0; i < trigger.cards.length; i++) {
						if (trigger.cards[i].name == "suijiyingbian") {
							num++;
						}
					}
					else if(trigger.result&&trigger.result.card.parentNode.id=='discardPile'&&trigger.result.card.name == "suijiyingbian")num ++;
					if (num) {
						player.loseHp(num);
					}
				},
			},
			nigeiwogun: {
				cardSkill: true,
				trigger: { target: "useCardToBefore" },
				forced: true,
				popup: false,
				filter:function(event,player){
					var skills=player.getSkills(true).concat(lib.skill.global);
					game.expandSkills(skills);
					for(var i=0;i<skills.length;i++){
						var ifo=get.info(skills[i]);
						if(ifo.viewAs&&ifo.viewAs.name=='houtiao'){
							if(!ifo.viewAsFilter||ifo.viewAsFilter(player)){
								return true;
							}
						}
						else{
							var hiddenCard=get.info(skills[i]).hiddenCard;
							if(typeof hiddenCard=='function'&&hiddenCard(player,'houtiao')){
								return true;
							}
						}
					}
					return player.countCards('h', {name:'houtiao'});
				},
				content:function(){
					'step 0'
					var next = player.chooseToUse({
						filterCard:function(card,player){
							if(card.name!='houtiao') return false;
							var mod=game.checkMod(card,player,'unchanged','cardEnabled',player.get('s'));
							if(mod!='unchanged') return mod;
							return true;
						},
						prompt:'是否使用【缩地】移动一格？',});
					next.set('ai1',function(){
						var target=_status.event.player;
						var evt=_status.event.getParent();
						var sks=target.get('s');
						return 1;
					});
					'step 1'
					if(result.bool){
						trigger.untrigger();
						if(!lib.filter.targetInRange(trigger.card,trigger.player,trigger.target)||!lib.filter.targetEnabled2(trigger.card,trigger.player,trigger.target)){
							game.log('<span class="bluetext">'+get.translation(player)+'</span>逃逸了<span class="bluetext">'+get.translation(trigger.player)+'</span>的<span class="yellowtext">'+get.translation(trigger.card.name)+'</span>');
							trigger.finish();
						}
					}
				},
			},
			qiangming:{
				trigger:{player:'shaBegin'},
				logTarget:'target',
				filter:function(event,player){
					return true;
				},
				content:function(){
					trigger.directHit=true;
					player.removeSkill("qiangming");
				},
				forced:true,
			},
			mingyun:{
				direct:true,
				trigger:{player:'drawAfter'},
				filter:function(event,player){
					if (!_status.event.getParent('phaseDraw')) return false;
					for (var i = 0; i < event.num; i ++){
						if (player.countCards('h') < i){
							return false;
						}
						if (player.getCards('h')[i].name == 'stg_mingyun'){
							return true;
						}
					}
					return false;
				},
				content:function(){
					player.chooseToUse(function(card){
						return card.name == 'stg_mingyun';
					},'我的手牌在闪光！！！');
				},
			},
			mingyun2:{
				audio:2,
				trigger:{global:'judge'},
				filter:function(event,player){
					return player.countCards('h',{name:'stg_mingyun'})>0;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
					get.translation(trigger.player.judging[0])+'，'+'是否打出【打牌技术】替换之','h',function(card){
						return card.name == 'stg_mingyun';
					}).set('ai',function(card){
						var trigger=_status.event.getTrigger();
						var player=_status.event.player;
						var judging=_status.event.judging;
						var result=trigger.judge(card)-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) return 0;
						if(attitude>0){
							return result;
						}
						else{
							return -result;
						}
					}).set('judging',trigger.player.judging[0]);
					"step 1"
					if(result.bool){
						event.trigger("superaddition");
						player.respond(result.cards,'highlight');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.$skill('打牌技术');
						player.logSkill('_stg_mingyun2');
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0]=result.cards[0];
						if(!get.owner(result.cards[0],'judge')){
							trigger.position.appendChild(result.cards[0]);
						}
						game.log(trigger.player,'的判定牌改为',result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai:{
					tag:{
						rejudge:1
					}
				}
			},
			sha_skill:{
				trigger:{player:["shaBegin","shaEnd"]},
				filter:function(event,player){
					if(_status.event.triggername=="shaBegin"&&(get.nature(event.card)=="GB"||get.nature(event.card)=="DAs"||get.nature(event.card)=="TD"))return true;
					if(_status.event.triggername=="shaBegin"&&(get.nature(event.card)=="DSDR"||get.nature(event.card)=="IMP"))return true;
				},
				content:function(){
					if(event.triggername=="shaBegin"){
						if(get.nature(event.card)=="GB"){}//扣一张手牌
						if((get.nature(event.card)=="DAs"&&player.hasSkill("受过伤"))||(get.nature(event.card)=="TD"&&player!=_status.currentPhase)){
							
						}
					}
					if(event.triggername=="shaEnd"){
						if(get.nature(event.card)=="DSDR")player.chooseToDiscard(function(card,player){
								return card.name=='sha'&&get.nature(card)=="SA";
							},'可以弃置一张【扩散护符】回收此【封魔亚空穴】');
						if(get.nature(event.card)=="IMP")player.chooseBool("可以消耗1点灵力回收此【幻想卍伞】");
					}
				},
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha'&&get.nature(event.card)=="DSDR"||"DLC") return Infinity;
						if(card.name=='sha'&&get.nature(event.card)=="Ms"&&game.filterPlayer(function(target){
							return target.side!=player.side&&target.isIn()&&target.lili>=player.lili;
						})) return Infinity;
						if(card.name=='sha'&&get.nature(event.card)=="DbA"&&game.filterPlayer(function(target){
							return target.side!=player.side&&target.isIn()&&target.countUsed('');
						})) return Infinity;
					}
				},
			},
			huibi_skill:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num + player.storage.huibi||0;//.countUsed('shan');
					}
				},
				onremove:function(player){
					player.storage.huibi=0;
				},
			},
			exclusive_record:{
				mark: true,
				marktext: "🃏",
				intro: {
					name: "个人牌堆",
					markcount:function(storage, player) {
						var pile = player.storage.otherPile, discarded = player.storage.otherDiscarded;
						if (!pile || !discarded) {
							return 0;
						}
						return "" + (pile.length || 0) + "/" + (discarded.length || 0);
					},
					mark:function(dialog, storage, player) {
						var pile = player.storage.otherPile, discarded = player.storage.otherDiscarded;
						if (pile?.length) {
							dialog.addText("牌堆");
							dialog.addText(`共${pile.length}张牌`);
						}
						if (discarded?.length) {
							dialog.addText("弃牌堆");
							dialog.addSmall(discarded);
						}
						if (!pile?.length && !discarded?.length) {
							dialog.addText("空空如也");
						}
					},
				},
				"_priority": 0,
			},
			// 拿复活币复活。game.me.storage.fuhuo 是复活币的数量。
			revive:{
				trigger:{player:'dieBefore'},
				direct:true,
				filter:function(event,player){
					return player.storage.fuhuo;
				},
				content:function(){
					event.cards=player.getDiscardableCards(player, 'hej');
					//player.$throw(event.cards,1000);
					player.discard(event.cards);
					//game.log(player,'弃置了',event.cards);
					game.playAudio('effect','die_female');
					if (player.isTurnedOver()){
						player.turnOver();
					}
					player.node.turnedover.innerHTML = '';
					player.node.turnedover.setBackgroundImage('');
					player.node.turnedover.style.opacity=0.7;
					game.delay(3);
					setTimeout(function(){
						game.log(player,'消耗了1个残机复活');
						player.node.turnedover.style.opacity=0;
						player.hp = player.maxHp;
						player.lili = 2;
						player.update();
						player.storage.fuhuo --;
						player.draw(4);
						trigger.cancel();
					}, 1000);
				},
			},
			_revive_boss:{
				trigger:{player:'dieBefore'},
				direct:true,
				locked:true,
				fixed:true,
				filter:function(event,player){
					return game.me.storage.reskill && game.me.storage.reskill.length > 0 && player == game.boss;
				},
				content:function(){
					game.log(player,'进入下一个阶段！');
					if (player.maxHp <= 0){
						player.maxHp = 1;
					}
					player.hp = player.maxHp;
					player.lili = player.maxlili;
					player.update();
					player.addSkill(game.me.storage.reskill[0]);
					game.me.storage.reskill.remove(game.me.storage.reskill[0]);
					trigger.cancel();
				},
			},
			// 增援：game.me.storage.reinforce是增援列表（最后一个自动是BOSS），game.me.storage.stage是给boss的，换场景使用的技能
			reinforce:{
				trigger:{player:'phaseBefore'},
				direct:true,
				priority:1000,
				filter:function(event,player){
					var num = 0;
					for (var i = 0; i < game.players.length; i ++){
						if (game.players[i].identity == 'zhu' || game.players[i].identity == 'zhong') num ++;
					}
					return game.me.storage.reinforce.length && num < 2;
				},
				content:function(){
					var num = [1, 2, 3, 5, 6, 7];
					for (var i = 0; i < game.players.length; i ++){
						if (game.players[i].identity == 'zhu' || game.players[i].identity == 'zhong') num.splice(num.indexOf(parseInt(game.players[i].dataset.position)), 1);
					}
					if (game.me.storage.reinforce.length > 1){
						game.addBossFellow(num.randomGet(),game.me.storage.reinforce[0],parseInt(lib.character[game.me.storage.reinforce[0]][1]));
						game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
					} else {
						game.boss.addSkill('ftg_converse');
					}
				},
			},
			// 手牌上限+关卡数
			// 同时，装备不能弃置/获得也在这里进行。
			handcard_max:{
				alter:true,
				intro:{
					content:function(storage, player){
						return '手牌上限+'+(player.storage.tongguan || 0)+"<br>你的宝具牌不能被弃置/获得。";
					}
				},
				mod:{
					maxHandcard:function(player,num){
						/*
						var nums = 0;
						for (var i = 0; i < game.players.length; i ++){
							if (game.players[i].identity == 'zhu' || game.players[i].identity == 'zhong') nums ++;
						}
						if (nums != 0) return num;
						return Infinity;
						*/
						return num + (player.storage.tongguan || 0);
					},
					canBeDiscarded:function(card,player,target,event){
						if(get.is.altered('handcard_max')&&get.subtype(card) == 'equip4') return false;
					},
					cardDiscardable:function(card,player,target,event){
						if(get.is.altered('handcard_max')&&get.subtype(card) == 'equip4') return false;
					},
					canBeGained:function(card,player,target,event){
						if(get.is.altered('handcard_max')&&get.subtype(card) == 'equip4') return false;
					},
					cardGainable:function(card,player,target,event){
						if(get.is.altered('handcard_max')&&get.subtype(card) == 'equip4') return false;
					},
				},
			},
			_move:{
				enable:'phaseUse',
				usable:1,
				global:true,
				changeSeat:true,
				direct:true,
				delay:false,
				preservecancel:true,
				filter:function(event,player){
					if(!player.movable(1)&&!player.movable(-1)){
						return false;
					}
					var move=typeof (player.storage.move) == "number"?player.storage.move:2;
					move=game.checkMod(player,move,'move',player);
					return move>(player.getStat().skill._move||0);
				},
				content:function(){
					"step 0"
					var move=typeof (player.storage.move) == "number"?player.storage.move:2;
					move=move-(player.getStat().skill._move-1||0);
					move=game.checkMod(player,move,'move',player);
					player.chooseToMove(move,null,true).phasing=true;
					event.pos=player.getPos();
					"step 1"
					if(ui.confirm){
						ui.confirm.classList.add('removing');
					}
					var skill=player.getStat().skill;
					skill._move--;
					if(!result.bool){
						if(typeof skill._movetried=='number'){
							skill._movetried++;
						}
						else{
							skill._movetried=1;
						}
					}else skill._move+=Math.abs(result.move-event.pos);
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
							neighbour=player.getNeighbour(1);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							neighbour=player.getNeighbour(-1);
							if(neighbour&&game.players.contains(neighbour)&&neighbour.side!=player.side){
								if(get.distance(player,neighbour,'attack')<1) return 1;
								return 0;
							}
							return 1;
						},
						player:function(player){
							if(player.getStat().skill._movetried>=10){
								return 0;
							}
							var x=lib.skill._move.ai.result.playerx(player);
							return x;
						}
					}
				}
			},
			moveadd1:{
				init:function(player){
					player.storage.move=3;
				},
				onremove:function(player){
					player.storage.move=2;
				},
			},
			moveminus1:{
				init:function(player){
					player.storage.move=1;
				},
				onremove:function(player){
					player.storage.move=2;
				},
			},
			moveadd:{			//飞虎：会改变跨步的移动距离
				mod:{
					move:function(player,num){
						if(player.hasSkill("moveadd"))return num+1;
					},
				},
			},
			moveminus:{
				mod:{
					move:function(player,num){
						if(player.hasSkill("moveminus"))return num-1;
					},
				},
			},
			_reCardPile:{
				trigger:{global:'gameDrawEnd'},
				direct:true,
				filter:function(event, player){
					if(_status.bosschoice.name.indexOf("_free")>-1)return false;
					return game.me!=game.boss&&game.boss.name == _status.bosschoice.name;
				},
				content:function(){
					ui.cardPile.append(...game.boss.getCards("he"));			//飞虎：把被虚拟角色拿走的牌置于牌堆底。
				}
			},
			
			// 关底对话
			ftg_converse:{
				mode:['ftg'],
				trigger:{player:'dieBegin'},
				direct:true,
				silent:true,
				popup:false,
				unique:true,
				fixed:true,
				init:function(event,character){
					var a = [];					// 创建一个对话人数数量长的数列，用于记录玩家和敌人对话位置
					if (!game.me.storage.dialog){	// 没对话就刷出boss然后直接跳过
						if (game.me.storage.reinforce[0]){
							game.changeBoss(game.me.storage.reinforce[0]);
							game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
							game.me.addSkill(game.me.storage.stage);
						}
						return ;
					}
					for (var h = 0; h < game.me.storage.dialog.length; h++){
						a.push(1);
					}
					var name = game.me.name;		// 记录当前检测名字的
					var j = 0;						// 记录当前检测谁的对话的
					var step1=function(){
						// 读取当前对话
						var dialog = ui.create.dialog();
						for (var i = 0; i < game.me.storage.dialog.length; i ++){
							if (game.me.storage.dialog[i][0] == name){
								// '' = 只有两个人的时候，切换说话人物
								if (game.me.storage.dialog[i][a[j]] === ''){
									a[j] ++;
									if (name == game.boss.name){
										j = 0;		// 切换到主角
										name = game.me.name;
									} else {
										j ++;		// 切换到boss
										// 没boss的话把boss刷出来
										if (game.me.storage.reinforce[0] && game.boss.name != game.me.storage.reinforce[0]){
											game.changeBoss(game.me.storage.reinforce[0]);
											game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
										}
										name = game.boss.name;
									}
									i = -1;		// 换完了之后从头再来一次
								// 有多少个人的时候，一个数字 = 切换对话人物（切换到dialog[数字]）
								} else if (Number.isInteger(game.me.storage.dialog[i][a[j]])){
									name = game.me.storage.dialog[game.me.storage.dialog[i][a[j]]][0];		// 切换到记录的数字的位置的[0]
									a[j] ++;
									j = game.me.storage.dialog[i][a[j] - 1];
									// 如果是boss的话把boss刷出来
									if (game.me.storage.reinforce[0] && name == game.me.storage.reinforce[0] && game.boss.name != game.me.storage.reinforce[0]){
										game.changeBoss(game.me.storage.reinforce[0]);
										game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
									} 
									if (!game.findPlayer(function(current){
										return current.name == name;
									})){
										if (game.findPlayer(function(current){
											return current.dataset.position == 2;
										})){
											game.addBossFellow(5, name, 0);
										} else {
											game.addBossFellow(3, name, 0);
										}
									}
									i = -1;		// 换完了之后从头再来一次
								} else if (game.me.storage.dialog[i][a[j]] == 'end'){
									game.resume();
									return;
								} else {
									var player = ui.create.div('.avatar',dialog).setBackground(name,'character');
									dialog.style.minHeight = '120px';
									dialog.add('<div><div style="width:260px;margin-left:120px;font-size:18px;">'+game.me.storage.dialog[i][a[j]]+'</div></div>');
									player.style.float = 'left';
									//dialog.style.overflow = 'auto';
									a[j] ++;
								}
							}
						}
						ui.auto.hide();
						dialog.open();
						ui.create.control('继续',function(){
							ui.dialog.close();
							while(ui.controls.length) ui.controls[0].close();
							// 检查是否还剩对话
							var num1 = -1;
							for (var i = 0; i < game.me.storage.dialog.length; i ++){
								// 如果对话结束就继续游戏，要不然的话继续对话
								if (game.me.storage.dialog[i][0] == name){
									num1 = i;
									if (game.me.storage.dialog[i][a[j]] == 'end') num1 = -2;
									break;
								}
							}
							// 如果玩家使用的角色并没有对话，跳出boss然后直接跳过所有对话
							if (num1 == -1){
								if (game.me.storage.reinforce[0]){
									game.changeBoss(game.me.storage.reinforce[0]);
									game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
								}
								game.resume();
							}
							// 已经结束的话，结束对话流程然后游戏继续
							else if (num1 == -2){
								// 如果对话人多的话就把额外的人给删掉
								if (game.me.storage.dialog.length > 2){
									for (var i = 2; i < game.me.storage.dialog.length; i ++){
										for (var k = 0; k < game.players.length; k ++){
											if (game.players[k].name == game.me.storage.dialog[i][0]){
												game.players[k].hide();
												game.addVideo('hidePlayer', game.players[k]);
												game.players[k].delete();
												game.players.remove(game.players[k]);
												k = 10;
											}
										}	
									}
								}
								game.resume();
							}
							else step1();
						});
						ui.create.control('跳过',function(){
							ui.dialog.close();
							while(ui.controls.length) ui.controls[0].close();
							// 如果跳过的时候，boss还没刷出来的话，把boss刷出来
							if (game.me.storage.reinforce[0]){
								game.changeBoss(game.me.storage.reinforce[0]);
								game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
							}
							// 如果跳过的时候，刷出来了对话露脸的人，把那些人刷掉
							if (game.me.storage.dialog.length > 2){
								for (var i = 2; i < game.me.storage.dialog.length; i ++){
									for (var k = 0; k < game.players.length; k ++){
										console.log(game.players[k]);
										console.log(game.me.storage.dialog[i]);
										if (game.players[k].name == game.me.storage.dialog[i][0]){
											game.players[k].hide();
											game.addVideo('hidePlayer', game.players[k]);
											game.players[k].delete();
											game.players.remove(game.players[k]);
											k = 10;
										}
									}	
								}
							}
							game.resume();
						});
					};
					game.pause();
					if (!game.me.storage.dialog){
						if (game.me.storage.reinforce[0]){
							game.changeBoss(game.me.storage.reinforce[0]);
							game.me.storage.reinforce.remove(game.me.storage.reinforce[0]);
						}
						game.resume();
					} else { 
						step1(); 
					}
					game.me.addSkill(game.me.storage.stage);
				},
				filter:function(event,player){
					return player==game.boss;
				},
				content:function(){
					//ui.cardPile.append(...player.getCards("hej"));			//飞虎：为啥装备凭空消失了？
					for (var key in player.storage) {
						if (key === 'otherPile' || key === 'otherDiscarded') continue;
						var v = player.storage[key];
						var t = get.itemtype(v);
						if (t === 'cards') {
							while (v.length) {
								var c = v.shift();
								if (c && c.parentNode) c.discard();
							}
							delete player.storage[key];
						} else if (t === 'card') {
							if (v && v.parentNode) v.discard();
							delete player.storage[key];
						}
					}
					ui.skillPile.append(...player.getCards("j"));
					game.log(player,'坠机');
					var cards=player.getCards('hej');
					if(event.cards.length){
						player.$throw(cards,1000);
						game.log(player,'弃置了',cards,game.logv(player,'die'));
					}
					if(game.playerMap[player.getPos()])delete game.playerMap[player.getPos()];
					player.hide();
					game.addVideo('hidePlayer',player);
					player.delete();
					game.players.remove(player);
					game.dead.remove(player);
				}
			},
			//萃梦想
			//第一关
			ftg_suimu:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				fixed:true,
				content:function(){
					"step 0"
					//ui.arena.setNumber(8);
					player.hide();
					game.addVideo('hidePlayer',player);
					player.delete();
					game.players.remove(player);
					game.dead.remove(player);
					event.target = game.me;
					game.triggerEnter(game.me);
					"step 1"
					// 制作关卡开始的对话框
					var stagename = "";
					if(game.me.name=="reimu")stagename="瘴雨之森";
					else if(game.me.name=="marisa")stagename="同朋异种";
					else if(game.me.name=="sakuya")stagename="神前的比试";
					else if(game.me.name=='alice')stagename="依靠别人的魔法";
					else if(game.me.name=='patchouli')stagename="火炉之鼠";
					else if(game.me.name=='youmu')stagename="斩空";
					else if(game.me.name=='remilia')stagename="超越光速";
					else if(game.me.name=='yuyuko')stagename="幽明境内";
					else if(game.me.name=='yukari')stagename="血色的酒";
					else if(game.me.name=='suika')stagename="超越光速";
					var dialog=ui.create.dialog("第一关<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
				},
			},
			// 第二关
			ftg_suimu2:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','嗯，魔理沙还是和以前一样啊。',
								'',
								'还是能感觉到妖气……。<br>看来你什么也没有隐瞒。',
								'',
								'没有在这种地方喝茶的时间了……<br>要快点到下一个地方。',
							'end'],
							['marisa','可恶，到底干什么啊？',
								'',
								'我一开始就已经说了……。',
							'']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','只有时间被处理掉了。',
								'',
								'哎呀，我只是来处理时间和空闲和坏孩子罢了。',
							'end'],
							['alice',
								'那就和我没关系了。<br>还有更加可疑的地方吧？',
							'']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','不对，这好像不是巫女放出来的妖气呢。',
								'',
								'总之，我会在宴会开始之前想办法解决掉这妖气的。',
								'',
								'抱歉。我不信神。',
							'end'],
							['reimu','真是的～。什么嘛～。',
								'',
								'随便你了。我还要忙宴会的准备和整理呢。',
								'还有，漂亮的赛钱箱在那里哦。',
							'']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','真是的，怎样？',
								'有没有什么关于这妖气的情报？',
								'',
								'是了。没办法。<br>去看看其他可能有情报的家伙吧。',
								'',
								'那么，可能那家伙就是犯人也说不定？',
							'end'],
							['marisa','有的话我都自己去做了。',
								'',
								'那家伙吗？',
								'我想那家伙也是知道了什么就会自己干的',
							'']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','接下来，我堂堂正正地调查。<br>老鼠就乖乖地回去吧。',
								'',
								'那个，我正在调查。',
								'',
								'这次的异变，老鼠是解决不了的。<br>像你这样的，调查也是没用的。',
							'end'],
							['marisa','唔—，我想调查这次异变的事啊。',
								'',
								'可恶，打算一个人独占吗。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','难道，猜错了吗。',
								'',
								'当然不是，斩过之后自然就知道了。',
							''],
							['marisa','受不了——，是不是猜错了，难道说不斩人就不会明白吗？',
								'',
								'你那不就和对行人行凶的歹徒一样了吗？',
							'end']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','那么，有劳你看家了。',
								'',
								'啊，对了。顺道带上遮阳伞。',
								'',
								'防止摔倒就要事先准备好那个。给我学着点。',
							'end'],
							['sakuya','我明白了。请在太阳升起之前回来。',
								'',
								'您打算天亮也不回来了吗？',
							'']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','那么，就拜托你看家吧。',
								'',
								'那样的看守，看起来有点不放心呢。',
								'',
								'哎呀，那我回来的时候好像要辛苦下了。',
							'end'],
							['youmu','都说了我明白了。真是的。',
								'',
								'没问题的。我不会让任何人通过这里的。',
							'']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','太阳已经出来了',
								'',
								'咦？可以吗？<br>不是挺温柔的嘛。',
								'',
								'那温柔的火焰～♪<br>被取走性命消失～♪',
							'end'],
							['sakuya','没办法<br>白兰地之类的想要就给你吧。',
								'',
								'……',
							'']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','区区人类，别以为可以和我们鬼作对。',
								'',
								'好了，大家都在等着。<br>差不多就请回吧。',
								'',
								'“饭还没好吗～”之类的已经吵着了。',
							'end'],
							['sakuya','鬼……？<br>我们？',
								'',
								'真是不甘心。',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "";
					if(game.me.name=="reimu")stagename="魔法使的血";
					else if(game.me.name=="marisa")stagename="神的女仆";
					else if(game.me.name=="sakuya")stagename="认错人偶";
					else if(game.me.name=="alice")stagename="直感的巫女";
					else if(game.me.name=="patchouli")stagename="金属的老鼠药";
					else if(game.me.name=="youmu")stagename="斩魔";
					else if(game.me.name=="remilia")stagename="夜之王";
					else if(game.me.name=="yuyuko")stagename="人魔战";
					else if(game.me.name=="yukari")stagename="葡萄色的酒";
					else if(game.me.name=="suika")stagename="人魔的降鬼";
					var dialog=ui.create.dialog("第二关<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++; 
					game.me.storage.stage = 'ftg_suimu3';
					if (game.me.name == 'reimu'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['reimu','啊真是的，天完全暗下来了。',
								'都是因为和魔理沙玩太久的关系……。',
								'说起来，回去的路还很长呢。',
								'这条路对吗。',
								'',
								'居然无视我出现。',
								'',
								'对对，你也一样的。',
								'',
								'你就是犯人的事。',
								'',
								'你没有注意到吗？<br>现在发生了什么也不知道吗？',
								'而且，嫌疑犯就是犯人。<br>还是说你不是犯人？',
								'',
								'怎么说也很奇怪。',
								'就算大家都喜欢热闹事，<br>但想不到连你也喜欢。',
								'',
								'或者说，你就是最可疑的。从一开始就是。',
							'end'],
							['alice','啊～。对这种地方来说真是稀客呢？<br>虽然人类本身就是很少见。',
								'',
								'啊～？不对哦～。回去的路！',
								'',
								'这次说的又是什么事？',
								'',
								'……不是嫌疑犯吗？',
								'哎，完全不明白你在说什么。',
								'',
								'完全听不懂你在说什么……<br>难道是说，最近宴会的事？',
								'不管怎么说。<br>我也是觉得奇怪……。',
								'',
								'什么呀。',
							'']
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'marisa'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['marisa','说是处理空闲的话到红白那里会吉利。',
								'虽然我一直都是万年大吉所以怎么都好了。<br>算了，又不知道敌人在哪里。',
								'稍微去处理一下空闲吧。',
								'',
								'哦哦？因为我是很低调的。',
								'',
								'什么时候做了神社的女仆了？',
								'',
								'说起来，巫女也是神的女仆之类的东西吧。',
								'',
								'夜晚没人的神社……<br>你，非常可疑。',
							'',],
							['sakuya','哎呀，有一个黑得在夜晚会不起眼的家伙。',
								'',
								'来神社有什么事？<br>灵梦的话不在。',
								'',
								'我的主人没有变。',
								'',
								'是呀。不过，现在好像在偷懒。<br>没什么事的话就回去吧。',
								'',
								'哎呀，还不及眼前低调的家伙可疑啊。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_clocktower.jpg');
					} else if (game.me.name == 'sakuya'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['sakuya','说起来，我几乎没进入这个森林呢。',
								'那家伙……据说好像就住在这一带的肮脏潮湿的地方。',
								'',
								'说人家的脸少见，真是失礼呢。',
								'',
								'果然，不该在夜晚来这里。',
								'',
								'我的目的是黑色家伙的住处。<br>走错了。',
								'',
								'嘛算了。反正还有一天。<br>能不能告诉我回去的路？',
								'',
								'正是如此。',
							'end'],
							['alice','啊呀？真是少见的脸啊。',
								'',
								'有什么事吗？',
								'',
								'夜晚进入这个森林的家伙，<br>只有“相当笨的笨蛋”了吧。',
								'',
								'……相当笨的笨蛋。',
								'',
								'你是不是想着认错人就可以一走了之。',
							'']
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'alice'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['alice','灵梦的话应该知道些什么的。',
								'好歹也是以降伏妖怪为生计的，<br>因为是巫女嘛。',
								'',
								'为什么我就一定是来讨饭的啊。',
								'',
								'先别管这个了，灵梦。',
								'关于包围着整个幻想乡的妖气……。',
								'',
								'为什么放着不管呢……。',
								'',
								'如果是平时早就会把事情搞得很大，为什么这次什么也不做。',
								'',
								'很可疑呢。这么可疑的灵梦，很少见呢。',
							'end'],
							['reimu','咦？<br>这么晚有什么事？<br>晚饭的话已经吃完了。',
								'',
								'既然住在森林，夜里溜进神社的，<br>多数是来讨东西的吧。',
								'',
								'嗯？<br>妖气？',
								'',
								'妖气……？<br>是什么危险的东西？',
								'',
								'因为没有发生什么麻烦的事啊。',
								'虽然宴会多得有些麻烦。',
							'']
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'patchouli'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['patchouli','',
								'明天，有些一定要干的事情要到外面去。',
								'所以我想拜托你看家。',
								'',
								'关于看家的事……',
								'',
								'最近，老鼠又多了。<br>也许你管不过来呢。',
								'',
								'不行。',
								'',
								'需要纠正的是你的猫脾气吧。',
							'end'],
							['sakuya','怎么了？突然叫我出来。',
								'',
								'哎呀，真少见。',
								'好的，看家的事就请交给我吧。',
								'',
								'有什么事吗？',
								'',
								'老鼠？<br>看，特制的老鼠药不行吗？',
								'',
								'需要毒性更强的老鼠药呢。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'youmu'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['youmu','这个……',
								'看来不应该选择下午过来呢。<br>路根本找不到。',
								'到这里的时候天都这么黑了。',
								'',
								'很抱歉在休息的时候打扰……。',
								'',
								'幽灵和打雷不是同一回事吧！',
								'',
								'总之，是为了斩而来的。其他的话都放在那之后。',
								'',
								'因为你看起来是个不管问什么都不会说实话的家伙。<br>但是……剑不会撒谎。',
								'',
								'把眼前所有的黑色，一剑斩！',
							'end'],
							['marisa','噢噢？在夜里看到些不吉利的东西啊。',
								'',
								'这附近也开始有幽灵出没了。老天保佑老天保佑。',
								'',
								'啊，有啥事？诸位幽灵。',
								'',
								'那么危险的事也有点太唐突了吧……。',
								'',
								'对于在这么晚的魔法森林里，找到我家来的你表示的敬意，<br>我就做你的对手玩一会好了。',
							'']
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'remilia'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['remilia','这森林还是比较适合夜色啊。',
								'',
								'我打算在明天天亮之前稍微把幻想乡走个遍。',
								'',
								'对，所以不把你打倒，快点去下个人那里可不行。',
								'',
								'就是因为这么晚啊。敢小看我的话就会是这个下场，给我记好了。',
							'end'],
							['marisa','什么啊？这么晚了真是稀奇。',
								'',
								'不过，应该说你会在这种地方真是稀奇，<br>这么晚倒是不稀奇。',
								'',
								'啊～？<br>那还真是一趟相当狭窄的小旅行啊。',
								'',
								'不过，还真亏你能找到这里。<br>在这魔法森林里，在这么晚的时候。',
							'']
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['yuyuko','',
								'特意跑到这里来……不就是为了“那件事”么？',
								'',
								'你的事？还是巫女的事？',
								'',
								'正解。',
								'',
								'唉呀，即使是白天，亡灵也是可以出现的啊。',
							'end'],
							['marisa','哦哦？你怎么会在这种地方？',
								'',
								'那件事啊。',
								'话说回来，白天的神社出现了亡灵。<br>真是悠哉啊。',
								'',
								'是你和巫女的事',
								'',
								'如果亡灵出现在晚上的神社就一点也不奇怪了。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_marisa.jpg');
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['yukari','那虚幻的火焰～♪<br>被残酷的风吹灭～♪',
								'那边路过的魔法使小姐<br>可以稍微耽误你一点时间吗？',
								'',
								'一边唱着歌一边来的。',
								'',
								'你也有不错的酒呢。',
								'',
								'范艾伦',
								'',
								'我就是来拿那个的。',
								'',
								'不突然呀。<br>看，预告信都带来了。',
							'end'],
							['alice','唔，谁？<br>怎么来到这里的？',
								'',
								'流浪艺人？<br>还算合适呢。',
								'',
								'拜托，这里不是郊区的酒馆。<br>要流浪就去别的地方。',
								'',
								'葡萄酒',
								'',
								'说些什么啊突然之间。<br>而且，反正也会拿到今天的宴会上去的。',
								'说起来，没有人邀请你参加宴会吧。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_marisa.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['suika','咦~？<br>还想着可以继续玩呢。',
								'',
								'真是的，就只会说这些话吗？',
								'',
								'慢着，你的事我很清楚哦。<br>因为一直看着呢。',
								'宴会上总是只找人类谈话。羡慕着人类吗？',
								'还是说，不想和比自己强的家伙扯上关系呢？',
								'但是，却没有注意到那些人类才是最可怕的。真是可怜。',
								'',
								'就只会说这些话。',
								'',
								'说谎。差不多该觉察到真正的孤独了吧？',
							'end'],
							['alice','你是谁啊。',
								'',
								'没办法啊，又不知道你是谁？<br>顺带一提，我是……。',
								'',
								'要是那样，我就是最有勇气的吧？',
								'倒不如说，是那些人类有着像妖怪一样的行为。所以去戏弄一下她们。',
								'说来，你是谁？<br>这是什么地方啊。',
								'',
								'因为刚一回过神你就在眼前了，没办法啊？',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					} else game.me.storage.reinforce = ['alice'];
					game.me.removeSkill('ftg_suimu2');
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					var musicnum = 0;
					if (game.me.name == 'reimu')musicnum = 6;
					else if (game.me.name == 'marisa')musicnum = 4;
					else if (game.me.name == 'sakuya')musicnum = 30;
					else if (game.me.name == 'alice')musicnum = 24;
					else if (game.me.name == 'patchouli')musicnum = 32;
					else if (game.me.name == 'youmu')musicnum = 26;
					else if (game.me.name == 'remilia')musicnum = 26;
					else if (game.me.name == 'yuyuko')musicnum = 26;
					else if (game.me.name == 'yukari')musicnum = 6;
					else if (game.me.name == 'suika')musicnum = 6;
					else musicnum = 6;
					lib.config.currentMusic = musicnum;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			// 第三关
			ftg_suimu3:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','啊真是的，果然和你没有关系的。<br>又浪费了时间。',
								'',
								'不是嫌疑犯是犯人。',
								'',
								'一开始就很随便了。<br>说起来，天黑了不知道回去的路……',
							'end'],
							['alice','是你自己突然出现，',
								'随便把别人当嫌疑犯，',
								'随便地攻过来……',
								'',
								'……算了，随便你。',
							'']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','不对吗。那你怎么会在神社这里啊。',
								'',
								'算了，我想不是灵梦干的。我不觉得那家伙<br>会干这么转弯抹角的事。',
								'',
								'原来如此，就像爱丽丝说的，<br>说不定已经处理掉空闲了。',
							'end'],
							['sakuya','只是来看看宴会场地的。<br>看有没有线索。',
								'又找不到犯人……。',
								'',
								'啊啊，结果，浪费时间了。',
							'']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','那么，今天都这么晚了……回去了。',
								'',
								'唉呀，我明明都没拜托你，真是热情呢。',
								'',
								'嘿嘿。',
							'end'],
							['sakuya','你不知道回去的路吧？<br>你是不是想着能让我送你回去就好了？',
								'',
								'因为相当笨的笨蛋，好像会说出从这个魔法森林飞回去之类的话。',
							'']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','怎么？<br>真的什么情报也没有吗？',
								'',
								'唔。降伏妖怪没怎么干过，也不知道妖气的发生源在哪里。',
								'',
								'灵梦没了直觉还剩下什么？',
								'真是的，偷懒太多了会使直觉变迟钝。',
							'end'],
							['reimu','是真的啊。因为又没有感到很危险。',
								'',
								'降伏妖怪……那你，<br>也不是人类啊。',
								'不过这次的妖气的发生源啊。<br>它在哪里连我也不知道。为什么呢？',
							'']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','你的猫度是２４分。',
								'',
								'顺便一提，满分不是100分，是96分。',
								'96是100以下被2或3都可以整除的最大的数<br>所以很方便，不会引起争执。',
								'',
								'差４分就是很大的不同了。',
								'一直都马虎的你也许是不会明白的',
							'end'],
							['sakuya','真是严格。',
								'',
								'这个，评价严格这点还是没有变。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','嗯——。果然不是啊。',
								'',
								'能够在如此广的范围操纵妖气的人吗……。',
								'',
								'因为，那已经是“果然”了。',
							'end'],
							['marisa','啊——？虽然搞不太明白，但那句“果然”怎么听都让人觉得不爽啊。',
								'',
								'妖气？啊——，你说这股妖气啊。<br>那不是我干的。',
							'']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','',
								'明天的宴会我是主角。给我记好。',
								'',
								'我可不会让不明来路的家伙掌握绝对主导权的。',
							'end'],
							['marisa','那，结果你到底是找我有什么事啊。',
								'',
								'你就是为了来说这个的？',
							'']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','那么，另一个悠哉的人呢？',
								'',
								'或是在那边喝着茶吧。<br>真是奇妙的选择呢。',
								'',
								'是啊。特別是后半段。',
							'end'],
							['marisa','不知道，大概在那边准备着喝茶，',
								'',
								'是吗？',
							'']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','',
								'这样一来，葡萄酒也拿走啦。',
								'',
								'也对……<br>那边的松脆饼干也拿走吧。',
							'end'],
							['alice','就算带着预告信一起来也……',
								'',
								'葡萄酒也，那还要带走别的什么吗？',
								'',
								'饼干……？<br>哪里有那种东西啊？',
							'']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','这种程度的魔法，别以为可以和我们鬼作对。',
								'',
								'差不多，例行的宴会要开始了。',
								'',
								'就算你不在，我想宴会也会开始哦。',
							'end'],
							['sakuya','太强了……。<br>而且，这力量是什么啊。',
								'',
								'今天……<br>还是去宴会吧。',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "";
					if(game.me.name=="reimu")stagename="白天的幽灵";
					else if(game.me.name=="marisa")stagename="对眼睛不好";
					else if(game.me.name=="sakuya")stagename="雾雨魔法店";
					else if(game.me.name=="alice")stagename="瞬间∞";
					else if(game.me.name=="patchouli")stagename="水的原型";
					else if(game.me.name=="youmu")stagename="斩断精灵";
					else if(game.me.name=="remilia")stagename="十万火急";
					else if(game.me.name=="yuyuko")stagename="界线之茶";
					else if(game.me.name=="yukari")stagename="半透明的酒";
					else if(game.me.name=="suika")stagename="虚宴的降鬼";
					var dialog=ui.create.dialog("第三关<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++; 
					game.me.storage.stage = 'ftg_suimu4';
					if (game.me.name == 'reimu'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['reimu','总觉得没有头绪啊。',
								'不知什么时候覆盖的妖雾……<br>出现的源头、方向、种类也不知道。',
								'总觉得说是雾好呢，还是说是空间好呢……。',
								'有这种妖气的敌人，<br>好像没有遇到过。',
								'完全地把妖气散成雾……。<br>谁干的呢？目的又是什么呢？',
								'不管怎样，大家都没有觉察到这妖雾，<br>是因为这没结束的宴会吧。',
								'所谓的把树叶隐藏在树叶里。',
								'谁也没有对吵闹的宴会提出意见，<br>果然妖雾很可疑。',
								'',
								'我想大概不是。',
								'',
								'到底在说什么事啊。',
								'',
								'啊—？真巧，和我想的一样。',
								'不过我呢，已经大概找到谁是犯人了。',
								'',
								'那还真是巧。',
								'',
								'哎呀，我也省得外出了。<br>我也觉得「妖雾」是很可疑的。',
							'end'],
							['youmu','你就是犯人，吗？',
								'',
								'确实如此，我也感觉不到灵梦是。',
								'',
								'最近的宴会怎么看都很可疑。',
								'有这么多的妖气，<br>不知为什么谁也没有留意。',
								'应该是参加者的某人在计划着干坏事……。',
								'所以我就出来调查看看……。',
								'',
								'是吗？',
								'其实我也是大概找到谁是犯人了。',
								'',
								'看吧，就在眼前就在眼前。',
							'']
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'marisa'){
						game.me.storage.reinforce = ['patchouli'];
						game.me.storage.dialog = [
							['marisa','果然正面进去不适合我的个性。',
								'这样，从后面偷偷地进去……。',
								'',
								'在这么暗的地方看书的话，眼睛会变坏的。',
								'',
								'那么反过来。书会变坏。',
								'',
								'是自然现象。',
								'',
								'那个，你没有注意到吗？<br>外面有大量可疑的妖气啊。',
								'',
								'那是什么啊。你很可疑。',
							''],
							['patchouli','喂',
								'又随便进来了。这里是我的房间呀。',
								'',
								'眼睛变坏？是说变得看不清楚远处的东西？<br>那可不是眼睛变坏。',
								'只是眼睛适应了不需要远看的环境而已。',
								'你在学校没学过吗？',
								'',
								'那又是什么？',
								'',
								'说起来，有什么事？',
								'',
								'啊，那个？那个是无害的。<br>……而且那也不是气。　',
								'',
								'自然现象＋１罢了。<br>是魔法使的话就应该知道那种程度的东西。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/stg_scarletstairs.jpg');
					} else if (game.me.name == 'sakuya'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['sakuya','今天不会错了。',
								'即使这片森林再暗，白天的话一定好点',
								'',
								'昨天也是少见的脸。',
								'',
								'很久以前你不就被赶出家门了吗？',
								'',
								'虽然这么说，客人什么的不会来这个地方啊。<br>倒不如说会迷路。',
								'',
								'我是特别的哟。怎么可能迷路呢。',
								'',
								'对了对了，关于明天宴会的事……。',
								'',
								'我还什么也没有说呢……。莫非。',
							''],
							['marisa','哦？真是少见的脸呐。',
								'',
								'那么，那个少见的脸有什么事吗。有什么工作要找我做吗？',
								'',
								'啊—？工作本身还没有停止。',
								'',
								'但是你不是没有迷路并且也到了这里吗。<br>还是说只有你是特别的？',
								'',
								'那么？那个有着少见的脸不会迷路的家伙有什么事吗？',
								'',
								'啊啊，我不会让你死的哦。',
								'',
								'啊啊，真的是那样吗？',
							'end']
						];
						ui.background.setBackgroundImage('image/background/yongyuan.jpg');
					} else if (game.me.name == 'alice'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['alice','',
								'符合条件的差不多没了。<br>虽然你好像没什么情报，总之。',
								'',
								'那个大小姐在做着什么坏事吧。',
								'',
								'唔，是那样吧。一定。<br>（不是很想见面……）',
								'',
								'是吗？我就去那人那里吧。',
								'',
								'那么，一开始不说不就好了嘛。',
								'',
								'你这样也算是女仆吗？',
								'不过，我可不觉得这样算是休息。',
							'end'],
							['sakuya','所以，不知怎么办就来我这里？',
								'',
								'现在不是那个问题。最近宴会多了，<br>大小姐也一直情绪高涨。',
								'',
								'不过，不会有那样的事。真的。一定。',
								'',
								'对了，我这里有一位对那方面比较清楚的。',
								'',
								'不过，当然不会让你见的。',
								'',
								'因为……',
								'不稍微休息一下的话，<br>我的情绪也会高涨的。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'patchouli'){
						game.me.storage.reinforce = ['alice'];
						game.me.storage.dialog = [
							['patchouli','接下来，差不多该出门了。',
								'不过，比蕾米还活得久的家伙……<br>几乎没多少呢。',
								'',
								'虽然好像要出门了……稍微等一下！',
								'',
								'……老鼠药，老鼠药。',
								'',
								'家里的猫是笊篱呢。',
								'刚一说过就让老鼠进来了。',
								'',
								'妖气，那个雾一样的东西？',
								'那样的东西不是妖气也不是别的什么。<br>只是很大的废物。',
								'',
								'偷偷进来的家伙根本是错的。',
								'没规矩的家伙，完全没有礼貌。',
								'',
								'现在，刚好要出门。',
								'离下次的宴会不就剩两天了么？',
								'没有查书的时间了！',
							'end'],
							['alice','虽然好像要出门了……稍微等一下！',
								'有些事想问一下。',
								'',
								'你知道的吧？<br>关于将幻想乡包围起来的这妖气究竟……',
								'',
								'你有听吗？',
								'',
								'什么呀，那么不负责任的态度。<br>我专程、有礼地来询问的说。',
								'',
								'那可是现在为止还没见过的力量呀！<br>不是除了这里就没别的地方可以调查了吗。',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_scarletstairs.jpg');
					} else if (game.me.name == 'youmu'){
						game.me.storage.reinforce = ['patchouli'];
						game.me.storage.dialog = [
							['youmu','这里还是第一次来呢。',
								'虽然我不是很喜欢太暗的地方……',
								'',
								'斩。',
								'',
								'说怨灵也太过分了吧。',
								'我从来就没恨过任何人，<br>况且也没死。大概。',
								'',
								'啊，因为假若真的有人在放出妖气的话，没有比这个洋馆更可疑的地方了。',
								'',
								'为了斩而来。',
								'那么，被斩之后就乖乖地露出狐狸尾巴吧。',
							'end'],
							['patchouli','谁？',
								'',
								'哎哎？看来我的图书馆里有怨灵啊～。',
								'',
								'啊，这种时候，的确应该找恶灵退散的咒文……。',
								'等等，干什么啊你这是，到这种地方来。',
								'',
								'然后呢？',
								'',
								'唉，说的没有一点关联性还真是搞不明白。',
								'……虽然不太明白，不过是个尝试新魔法的机会呢。',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_library.jpg');
					} else if (game.me.name == 'remilia'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['remilia','丑三时的神社，吗，但是巫女却还没有睡觉啊。',
								'',
								'等一下，我还有别的事呢。<br>今天能乖乖地被我打倒吗？',
								'',
								'我想在明天之前，稍许把大家的力量都夺过来一下。',
								'',
								'所以得打倒你然后快一点。不对，还是快一点打倒？<br>哪个都好。',
								'',
								'来，老实一些。',
							'end'],
							['reimu','是你把我弄起来的吧？<br>我想睡觉了。',
								'',
								'还有事的话就别管我自己去做不就好了嘛。',
								'',
								'啊ー？',
								'',
								'哈～啊。丑三时出没的妖怪，<br>果然没有正常的家伙呢。',
							'']
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['yuyuko','',
								'唉呀，我还以为你是特意把这里打扫成便于打斗的样子呢。',
								'',
								'在那边泡着茶，或是在那边喝着茶吧。',
								'',
								'那么，轮到换你去喝茶了。',
								'',
								'不过在喝之前，是做那件事的时间了。',
								'',
								'是啊，就是那个哦。',
							''],
							['reimu','喂。我好不容易刚打扫完，马上就被你弄乱了啦！<br>这样的话不是没有意义了吗。',
								'',
								'话说，魔理沙呢？',
								'',
								'是嘛。',
								'',
								'茶的话，自然是要喝的',
								'',
								'那件事？是那个啊。',
								'',
								'还真是个血气旺盛的亡灵啊。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_hakugyokurou.jpg');
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['yukari','没有血气的石头下面～♪<br>未来永劫的石头下面～♪',
								'那边路过的半幽灵小姐。<br>可以稍微耽误你一点时间吗？',
								'',
								'哎呀，看你说的。',
								'我要不要向幽幽子投诉呢？<br>三成有的，八成没有的。',
								'',
								'说起来，你也有好酒吧。',
								'',
								'老李',
								'',
								'好啦好啦，别那么说嘛。',
							'end'],
							['youmu','咦？紫大人。<br>今天也和平常一样唐突呢。',
								'',
								'我不是什么坏话都没有说吗～。',
								'',
								'好酒？<br>好不好就不知道了，只是今晚要用的东西……',
								'',
								'醪醴。',
								'因为是今晚要用的，所以不会交出来哦？',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_stairs.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['suika','咦～？又被发现了？',
								'',
								'真是烦死了～。<br>你们第二句话就总要问“你是谁？这是什么地方？”',
								'',
								'看吧，第二句。因为你的事我知道得很清楚。<br>我一直看着呢。',
								'宴会里总是被大家戏弄吧。<br>唔～，真可怜。',
								'但是，你在宴会举行的同时，一点点地来调查我的事',
								'真是不爽。',
								'',
								'但绝妙的是，虽然剑锋很锐利，但是本人很迟钝。',
								'',
								'啊，紫说的东西不可以相信啊。<br>因为她的存在本身都就很假。',
							'end'],
							['youmu','你究竟是谁？',
								'',
								'我可是第一句问的。<br>而且我又没问这是什么地方……',
								'那这是什么地方～？',
								'',
								'你的事？',
								'我只是对举行宴会的时候变浓的妖气觉得有点不安而已。',
								'……难道你就是犯人？',
								'',
								'但是……幽幽子也好紫也好，尽说些让人听不懂的话……。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					} else game.me.storage.reinforce = ['youmu'];
					game.me.removeSkill('ftg_suimu3');
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					var musicnum = 0;
					if (game.me.name == 'reimu')musicnum = 24;
					else if (game.me.name == 'marisa')musicnum = 32;
					else if (game.me.name == 'sakuya')musicnum = 26;
					else if (game.me.name == 'alice')musicnum = 4;
					else if (game.me.name == 'patchouli')musicnum = 8;
					else if (game.me.name == 'youmu')musicnum = 8;
					else if (game.me.name == 'remilia')musicnum = 24;
					else if (game.me.name == 'yuyuko')musicnum = 24;
					else if (game.me.name == 'yukari')musicnum = 10;
					else if (game.me.name == 'suika')musicnum = 10;
					else musicnum = 10;
					lib.config.currentMusic = musicnum;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			// 第四关
			ftg_suimu4:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','喂，也该露出你的狐狸尾巴了吧！',
								'是你干的吧？用奇怪的妖雾把幻想乡包起来！<br>让大家变得怪怪的！',
								'',
								'算了，就是说，共犯。<br>犯人有两个。',
								'',
								'如果是我就不在神社，<br>而在你家搞宴会了！',
							'end'],
							['youmu','不是我啊～，',
								'',
								'犯人不是灵梦吗？',
							'']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','',
								'来回答吧！外面的世界充满着的这个妖气，<br>到底是什么？',
								'',
								'真是没用的家伙。这个家怎么会养着这种家伙？',
							'end'],
							['patchouli','姆Q～。',
								'',
								'我要暂时休息一下了……。',
							'']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','那么，玩笑就开到这里吧。',
								'',
								'我明明是来和你商量的，不都是因为你一直在开玩笑<br>才害得话题根本没有进展吗！',
								'或者说，找魔理沙商量原本就是个错误。',
								'',
								'原来你是为那个生气啊。算了，<br>不管怎样至少知道这次不是魔理沙所为就行了。',
							'end'],
							['marisa','明天宴会的事，发生什么事了吗？',
								'',
								'真过分啊。你以为我是负责商量的人吗？<br>要商量的话找别人更好啊。',
							'']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','来吧，带我去那个知道得很清楚的人那里吧。',
								'',
								'不过，那个人既然知道了异变的事情<br>为什么自己不去处理？',
								'',
								'Armchair Detective么。<br>真是狡猾。',
							'end'],
							['sakuya','真是的~，没办法。',
								'',
								'她一直是那样的。只要没有很大的事，自己不会主动去干什么的。',
							'']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','又浪费时间了。',
								'',
								'快点回去。<br>这里很快就要用银色老鼠药封锁了。',
								'',
								'家里的老鼠药总是发呆，老鼠越来越多真是麻烦。',
							'end'],
							['alice','结果，什么也没有告诉我。',
								'',
								'知道了……。会回去的。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','看来不对。但是，这个洋馆里还有好多可疑的家伙……。',
								'',
								'不过说起来，这个图书馆的书。不管是浇水还是火烧都没事呢。',
								'',
								'哼。但是……我对书没什么兴趣。<br>写的不过都是些古老的事情。',
							'end'],
							['patchouli','咦？这个魔法，还稍微有点不完全吗。',
								'',
								'当然。耐火，防水，退魔，除灵，全部哦。',
							'']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','下次，会要你的命哦。',
								'',
								'明天的主导权在我。你就老实点吧。',
								'',
								'那么，你就稍许死一会吧。',
							'end'],
							['reimu','三更半夜把人叫起来就打……<br>找茬也该有个限度吧。',
								'',
								'好好。你是头。',
							'']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','',
								'茶还是在神社喝最好。<br>可以给我一杯吗。',
								'',
								'啊，可是今天不快一点不行。',
								'',
								'喝饱了茶也可充饥一时。<br>留着胃口到明天吃个饱。',
							''],
							['reimu','这就跟秋刀鱼要选目黑的一样，都是误解。',
								'',
								'你不是一直都比我悠闲么。<br>只是喝杯茶的话没关系吧。',
							'end']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','终于浊酒也到手了～。',
								'',
								'今天会去的。虽然没有人邀请我。',
								'',
								'今晚打算带多一个人去。<br>一定，会变得很热闹吧。',
							'end'],
							['youmu','紫大人今晚来参加宴会吗？',
								'',
								'那么，请把那瓶酒也带去啊。',
							'']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','不是比紫还要弱嘛。根本不是我的对手。',
								'',
								'那把剑，好像对上鬼还是第一次呢。',
								'',
								'宴会已经开始了，你要再是不去，<br>那个巫女就要代替你被戏弄了。',
							'end'],
							['youmu','剑砍上去的手感好奇怪……？',
								'',
								'鬼？<br>你说鬼……。',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "";
					if(game.me.name=="reimu")stagename="无限刻";
					else if(game.me.name=="marisa")stagename="红色的饲养主";
					else if(game.me.name=="sakuya")stagename="升天之魂";
					else if(game.me.name=="alice")stagename="知识之墓";
					else if(game.me.name=="patchouli")stagename="木灵墓地";
					else if(game.me.name=="youmu")stagename="斩断时空";
					else if(game.me.name=="remilia")stagename="不可侵之国";
					else if(game.me.name=="yuyuko")stagename="幽灵学的死";
					else if(game.me.name=="yukari")stagename="霖雨之酒";
					else if(game.me.name=="suika")stagename="魔精的降鬼";
					var dialog=ui.create.dialog("第四关<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++; 
					game.me.storage.stage = 'ftg_suimu5';
					if (game.me.name == 'reimu'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['reimu','',
								'我想，提到放出妖雾的犯人就只有那家伙吧？<br>所以特意来了。',
								'',
								'她有干坏事的嫌疑，所以来惩戒一下。',
								'',
								'就是这样，那家伙在哪里？',
								'',
								'好啦，不能快点让我打败吗？',
								'我知道犯人不是你。',
								'',
								'离明天的宴会已经只剩一天了！',
								'',
								'你只是个按发条走的钟表。<br>现在犯人也还在逍遥自在……。',
								'',
								'明明是无限，又说什么很久呢。',
								'但是不知为什么。觉得好像以前也发生过这样的事。',
								'',
								'「那时候」也是令人头痛的雾引起的……<br>对了，「那时候」的结局变得怎样？',
							''],
							['sakuya','喂，别擅自闯进来！',
								'',
								'哼～。找大小姐有什么事？',
								'',
								'不要只是有嫌疑就来。',
								'虽然是有嫌疑。',
								'',
								'好像以前也说过，<br>没有让你和大小姐见面的理由吧。',
								'这种时间到红魔馆来真有胆量……',
								'不过无谋和有胆量完全不同。',
								'',
								'那可真是失礼的说法。',
								'慢慢来也没关系，时间是无限的。',
								'',
								'因为是明天，所以才只剩一天吧。',
								'不过，对我来说的时间是无限的。',
								'',
								'给我等一下。',
								'好像「很久」之前也说过了<br>没有理由让你和大小姐见面吧。',
								'',
								'发生过了。<br>「那时候」也是令人头痛地来捣乱……',
								'',
								'哼，变成这样了！',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'marisa'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['marisa','……终于，该大人物了。',
								'差不多该决斗了。恶魔的饲养主啊。',
								'',
								'从正面进来的。普通地。',
								'',
								'听说你在干着什么坏事。',
								'',
								'所以我就挺身而出来驱除恶魔。<br>反正我本来就是吸血鬼猎人。',
								'',
								'来吧，乖乖地被我猎捕吧，<br>这也是为你自己着想啊。',
								'',
								'是啊，关于这次的异变。<br>我是来指责你在干坏事的。',
								'',
								'算了。打倒你之后，就会露出真面目了吧。',
							'end'],
							['remilia','在哪里进来的呢。真是的。',
								'',
								'我家的正门什么时候变得那么开放了呢？',
								'',
								'那是，没有在干好事呀。',
								'',
								'那还是第一次听到。',
								'',
								'那么，有什么事呢？',
								'',
								'不知道。你弄错了吧？',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'sakuya'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['sakuya','还可疑的，就是这些家伙了呢。',
								'为了看樱花甚至去收集春，这次又有什么不良企图也不奇怪呢。',
								'',
								'明明死人来人间却没什么。<br>人类没死就不能来冥界了吗？',
								'',
								'不过呢，就算是向上的也好，危险的事在哪里都不会被容许的 ！',
								'即使是幽灵，如果会给人带来危害的话……。',
								'',
								'哼。你赶快成佛就行了。',
								'',
								'没有像幽灵这么麻烦的生物了。<br>不，不是生物呢。是东西吗？',
								'',
								'因为死法不怎么样所以不能成佛吧。',
								'人类是……很聪明的啊。 带着迷茫死掉了的话，<br>就能不用成佛而自由的活着……没活着呢。',
								'',
								'“你也”，这种说法就好像你刚刚斩杀过似的呢。',
							''],
							['youmu','又活着来冥界了……。<br>你就那么想死吗？',
								'',
								'因为有向上兼容哦。在人类与幽灵之间。',
								'',
								'被人类杀掉？但是那可是幽灵哦？<br>无论什么时候幽灵都是自由之身。',
								'',
								'成佛被禁止了。<br>佛已经是饱和状态了。',
								'',
								'没有像幽灵这么美妙的死物了。<br>你不会明白这些的。',
								'',
								'话就说到那为止，<br>你也想成为这把楼观剑上的锈吗？',
								'',
								'哎呀嘛……',
								'幽灵的话就算是斩了，也不会变成锈吧。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/stg_tree.jpg');
					} else if (game.me.name == 'alice'){
						game.me.storage.reinforce = ['patchouli'];
						game.me.storage.dialog = [
							['alice','',
								'是的，我听人说只要是你的话，就会知道是谁干的吧？',
								'',
								'你知道吗？',
								'',
								'怎么回事啊。',
								'',
								'虽然不是很明白……。然后呢？',
								'',
								'真是不知道。为什么幻想乡里<br>有这么多啰嗦的家伙。',
								'',
								'哼，不是很能说吗。<br>来吧，再来教教我「饶舌」吧。',
							'end'],
							['patchouli','将幻想乡包围起来的妖气的发生源？',
								'',
								'没有留意过那样的东西，',
								'不过，不是很简单吗。',
								'',
								'这个并不是妖气，<br>而且也没有发生源。',
								'',
								'如果一定要说，气一样的东西<br>其本身就是发生源吧？',
								'',
								'我不想回答笼统的问题。<br>说的话就这么多了。',
								'',
								'直接开战就不啰嗦了吧？',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_library.jpg');
					} else if (game.me.name == 'patchouli'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['patchouli','',
								'不是找你。是找你的头子。',
								'',
								'为什么？',
								'',
								'啊啊，是了。说起看守这职业——',
								'我想只是无能的代名词，<br>经验上。',
								'',
								'不死族是怕火的。',
							''],
							['youmu','……对冥界来说是个生面孔。<br>虽然是很像死人的脸。',
								'',
								'诶？<br>找幽幽子大人？',
								'就算找谁也不能让你通过。',
								'',
								'那是因为，我兼职看守的。',
								'没理由让可疑的家伙安安稳稳地通过吧。',
								'',
								'算了，乖乖地被斩，还是说——',
								'普通地被斩呢。',
								'',
								'幽灵就不是那样了！',
							'end']
						];
						ui.background.setBackgroundImage('image/background/stg_tree.jpg');
					} else if (game.me.name == 'youmu'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['youmu','',
								'终于要到最后的候选人了。',
								'',
								'是你吗？这股妖气，以及宴会的黑幕。',
								'',
								'就那么多吗？<br>感觉你在装傻啊。',
								'',
								'看来，还想被斩呢。',
								'',
								'连被斩的记忆也一起被斩坏了吗？',
								'就算你这样，还是会被斩的。',
							''],
							['sakuya','这么突然，怎么了？很少看到你到我们这里来呢。',
								'',
								'什么最后的候选人？',
								'',
								'哎，哎呀，妖气？',
								'啊啊，的确最近妖气很重呢。',
								'',
								'但是，反正什么都没有发生呢，况且……。',
								'要是和最近发生的春天没有到来<br>那样的大骚动般的异变比起来呢。',
								'',
								'还？看你最近好像没怎么学习的样子我就好心告诉你。',
								'“还”这个字是在以前发生过相同的事情，<br>之后又重复发生的时候使用的字。',
								'我可没有被你给斩过的记忆哦。',
								'',
								'我说，你说要办的事情，就是为了斩而来的吗？',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_clocktower.jpg');
					} else if (game.me.name == 'remilia'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['remilia','死后的世界，都还没怎么来过呢。',
								'',
								'来这里就是放倒你。ＯＫ？',
								'',
								'我想在天亮前把大伙都打倒。',
								'现在已经是３点过了３０分了。<br>到天亮已经没多少时间了。',
								'',
								'当然是打倒你了。除此以外干嘛还要找你。',
								'',
								'来，老实一些。',
							'end'],
							['youmu','天都快亮了啦……<br>稀奇的家伙挑了个稀奇的时间出现。',
								'那么就简短地说明来意。不然的话…',
								'',
								'太短了吧。',
								'',
								'先冷静一点。<br>至少先告诉我你的目的吧？',
								'',
								'哇，这也太短了吧。<br>所以我才讨厌恶魔来的～。',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_tree.jpg');
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.reinforce = ['sakuya'];
						game.me.storage.dialog = [
							['yuyuko','',
								'好了，该做那件事了。',
								'',
								'你看，右脚的旁边就是左脚。<br>这可是常识哟。',
								'',
								'我不是说过了吗，就是那件事。',
								'',
								'对，成佛。',
								'',
								'连神社的巫女都无能为力了，<br>我想你也办不到吧。成佛。',
								'',
								'刚才是谁说想要成佛的啊。',
								'',
								'能够看出来缺少什么，那是因为既有长的部分又有短的部分。',
								'这样说的话常人是听不懂的呢。',
							''],
							['sakuya','好像看到了什么怪物……。',
								'我有那么强的灵感吗？',
								'',
								'那件事？可是你有脚吗？',
								'',
								'那请问你来这里有何贵干？',
								'',
								'那件事是.....成佛？',
								'',
								'不说得清楚些的话我很难回答你的。',
								'',
								'那个……拜托巫女去做成佛，<br>这件事本身好像就不太对。',
								'',
								'你话语里好像缺少了些什么？',
								'',
								'我就是个常人。<br>如果拥有究极的短，那也会看不见其姿态。',
								'悠哉的你，是否能看见我的动作呢？',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_clocktower.jpg');
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['yukari','耸立着的冰冷石塔～♪<br>腐朽尽的机械城市～♪',
								'那边路过的人类小姐。<br>可以稍微耽误你一点时间吗？',
								'',
								'出门，去神社？',
								'',
								'说起来换个话题，<br>你也有便宜的酒吧？',
								'',
								'奇烧酒',
								'',
								'我是来拿那个的。',
								'',
								'不老老实实地交出来，<br>就别想离开这个森林。',
							'end'],
							['marisa','啊——？什么？<br>我正想着差不多该出门了。',
								'',
								'因为今晚就是宴会了。',
								'话说，你也来吗？　因为一直不知道你在哪儿，<br>所以没有叫你。',
								'',
								'还不错的酒。那又怎样？',
								'',
								'没有加东西的烧酒。<br>别说得像寄生虫一样。',
								'',
								'现在喝掉的话我很为难的。<br>今晚带去的东西就没有了。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_marisa.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['patchouli'];
						game.me.storage.dialog = [
							['suika','受够了～。<br>总是被发现！',
								'',
								'我是伊吹萃香！一开始就是在这里的！',
								'',
								'因为最近三天生气一次已经成为家常便饭了。',
								'不过你的事我很清楚哦，因为一直看着呢。',
								'在宴会里总是看上去很无聊。<br>说话也少，存在本身也好像被遗忘了一样。',
								'但是，其实你对宴会是最期待的吧？<br>平时很少出门，所以很寂寞吧。',
								'今天，终于来到我这里，是因为好奇心？',
								'还是…….<br>原则？',
								'',
								'那么，就是说输的一方就是发怒的吧。',
								'',
								'可惜。我可是很烦躁的。',
							'end'],
							['patchouli','谁……？从哪里出来的？',
								'',
								'……为什么一开始就那么怒气冲冲的？',
								'',
								'你很烦呢。',
								'说话多就是很烦躁的证明。',
								'发怒的一方是会输的。',
								'',
								'对。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					} else game.me.storage.reinforce = ['sakuya'];
					game.me.removeSkill('ftg_suimu4');
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					var musicnum = 0;
					if (game.me.name == 'reimu')musicnum = 4;
					else if (game.me.name == 'marisa')musicnum = 11;
					else if (game.me.name == 'sakuya')musicnum = 34;
					else if (game.me.name == 'alice')musicnum = 32;
					else if (game.me.name == 'patchouli')musicnum = 10;
					else if (game.me.name == 'youmu')musicnum = 28;
					else if (game.me.name == 'remilia')musicnum = 10;
					else if (game.me.name == 'yuyuko')musicnum = 4;
					else if (game.me.name == 'yukari')musicnum = 26;
					else if (game.me.name == 'suika')musicnum = 32;
					else musicnum = 4;
					lib.config.currentMusic = musicnum;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			// 第五关
			ftg_suimu5:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','想起来了！<br>那时候也是这样。',
								'',
								'来吧，快点去叫主人来。不是女仆吗？<br>只擅长给客人带路的女仆。',
								'',
								'都到这里了，不能就这样回去吧？',
								'',
								'下次就会吃到苦头的。',
							'end'],
							['sakuya','唔。又输了……。',
								'',
								'真是没办法',
								'不过，大小姐这次什么也没干。<br>是真的。大概。',
								'',
								'不舍得回去的话，总有一天吃到苦头的。',
							'']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','咦？什么都没有变。搞错了吗？',
								'',
								'难办了。明天就已经是宴会了啊？<br>结果，这次的宴会也是要充满妖气的吗？',
								'',
								'是那样吗？<br>真是的，这样的话就只能从神社着手了吗。',
							'end'],
							['remilia','一开始我就是真面目了，真是的。',
								'',
								'这妖气的话，是以神社为中心啊。<br>那样的事也不知道吗？',
							'']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','唉呀，犯人不是你「们」？',
								'',
								'说了事情，也只会撒谎吧。计划着坏事的家伙的话。',
								'',
								'好了，下面就是最强的了。',
							'end'],
							['youmu','妖气的事？ 不对啊。<br>以后把事情说清楚后再战斗。',
								'',
								'嘛，也许是这样。',
							'']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','怎样？<br>这个妖气怎么处理？',
								'',
								'只是那样？<br>不过都做到这地步了，不能就这样放弃吧。',
								'',
								'……好像很难啊。',
							'end'],
							['patchouli','虽然不是妖气，好像也没什么危险。<br>别管它吧？',
								'',
								'说的也是。直接和那个妖气一样的东西……<br>试着好好听听它的话怎么样？',
							'']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','原来是真的。不如说人类那边比较怕火。',
								'',
								'说起来……已经很迟了。',
								'',
								'诶？<br>明明是亡灵却早睡？',
							'end'],
							['youmu','和幽灵比较，人类是强不了多少的。',
								'',
								'啊啊，顺便一提',
								'我想幽幽子大人已经睡了。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','错了吗……。',
								'',
								'到开宴会已经没多少时间了，不赶快到下一个地方去的话。',
								'',
								'那是相当大的误会。',
							'end'],
							['sakuya','受不了了，这到底算什么啊。',
								'',
								'不过说起来，你现在堕落成强闯民宅的强盗了呢。',
							'']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','时间上还够一个人。',
								'',
								'你很明事理嘛。确实这就行了。',
								'',
								'对了，这种顺从的态度。果然，<br>我家的女仆不重新教育一下不行呢。',
							'end'],
							['youmu','是是，被你打倒了。这样总行了吧？',
								'',
								'已经习惯了没道理的要求了。',
							'']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','哎呀，看不看得见对手的动作<br>好像和胜负没有关系呢',
								'',
								'有目的哦。',
								'',
								'看不到的敌人。说不定明天就能看到。',
							'end'],
							['sakuya','可恶，输给连目的都没有的家伙，真是不甘心呀。',
								'',
								'没有吧？',
							'']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','下一个路过的，会是谁呢？',
								'',
								'会去宴会的。<br>不过，没问题。',
								'',
								'今晚谁也不能带酒去。<br>除了我……和另一个人以外。',
							'end'],
							['marisa','那，你到底会来宴会吗？<br>没了那酒很难办的。',
								'',
								'没问题？',
							'']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','用那么低等的精灵(魔法)，别以为可以和我们鬼作对。',
								'',
								'来吧，差不多宴会该开始了。<br>快点回去乖乖地呆着吧。',
								'',
								'没用没用没用！没有什么资料的。<br>回你的图书馆去大吃一惊好了。',
							'end'],
							['patchouli','鬼……。',
								'',
								'下次来之前先调查一下鬼的资料……',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "";
					if(game.me.name=="reimu")stagename="红雾再次……";
					else if(game.me.name=="marisa")stagename="幻想乡传说";
					else if(game.me.name=="sakuya")stagename="最平和的丑时三刻";
					else if(game.me.name=="alice")stagename="幽灵的温度";
					else if(game.me.name=="patchouli")stagename="在土地之下睡觉";
					else if(game.me.name=="youmu")stagename="未来永劫斩";
					else if(game.me.name=="remilia")stagename="黎明的亡灵";
					else if(game.me.name=="yuyuko")stagename="可视化仪式";
					else if(game.me.name=="yukari")stagename="献给神的酒";
					else if(game.me.name=="suika")stagename="英雄的降鬼";
					var dialog=ui.create.dialog("化妆舞会<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++; 
					game.me.storage.stage = 'ftg_suimu6';
					if (game.me.name == 'reimu'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['reimu','来吧，给我出来！我知道你在。',
								'',
								'这个，大概是来打倒你的，<br>在打倒看门的之后。',
								'',
								'是了是了。<br>你做这样的事的目的不知道是什么。',
								'',
								'是那个吧？你。<br>明天的宴会，是不是在计划着什么？',
								'',
								'果然。这附近充满着危险的妖雾。',
								'',
								'危险的东西就是危险的。<br>从以前开始就这样决定了。',
								'',
								'有在听人家说话吗？',
								'',
								'算了。',
								'虽然不知道到底发生了什么。<br>把你打倒了就能全部解决是不会错的！',
							'end'],
							['remilia','那当然是在了。',
								'啊——？很吵啊。<br>这么晚有什么事呀。',
								'',
								'该给我把目的说出来了吧！',
								'真是的，也不知道战斗的意义是什么。',
								'',
								'这样的事？突然打到红魔馆来……',
								'反而被打得有气无力地走回去的事？',
								'那样的事，我不知道。',
								'',
								'计划是计划着……<br>为什么灵梦会知道那些事的？',
								'',
								'妖雾？',
								'说起来，好像是这样。这种东西不是没什么大不了吗。',
								'',
								'比起那样的事，明天要在神社举行宴会。<br>不如回神社准备一下吧，怎样？',
								'',
								'如果连这种程度的妖雾的出处也找不到……<br>还是回去准备宴会比较合适。',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_scarlet.jpg');
					} else if (game.me.name == 'marisa'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['marisa','',
								'我一直都很早的。',
								'',
								'什么时候都是追求第一的。',
								'',
								'你是第〇吧？<br>因为宴会在神社举行。',
								'',
								'你没有注意到吗？',
								'',
								'还问什么，那当然是妖气了。<br>神社这里不是充满着吗？',
								'',
								'可疑啊。<br>平时的话不是把事情搞得很大的吗！',
								'',
								'你一直在神社所以麻痹了。<br>别人家的味道会注意到吧？',
								'',
								'还是说，你，吗？<br>怎么会呢。',
							'end'],
							['reimu','哎呀。真早，还有半天的时间呀。',
								'',
								'嘛，只有宴会之类的会一直早来。',
								'',
								'说什么呀。我才是第一的。',
								'',
								'算了。我还要扫地，在那边喝茶吧。',
								'还有很多时间。',
								'',
								'什么？',
								'',
								'是那样，吗。不是前次的宴会留下来的妖气吗。',
								'',
								'这样的，不是什么大事情呀！<br>没感觉到危险',
								'',
								'真是的，不像魔理沙的作风啊。<br>在那边喝茶吧。',
							'']
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'sakuya'){
						game.me.storage.reinforce = ['yuyuko'];
						game.me.storage.dialog = [
							['sakuya','',
								'幽灵不是没早睡早起的习惯么。',
								'',
								'亡灵不要说听不明白的话！',
								'',
								'这次……先试着和你讲清楚。',
								'',
								'明天，不是在神社又要举行宴会吗。<br>你也被邀请了吧。',
								'但是，我总觉得有点可疑。<br>频率很异常，谁也没说什么。',
								'而且，妖气不是也在不断增强吗。',
								'',
								'是你干的吧？',
								'',
								'只是问是没用的呢。',
								'',
								'果然是你吧？我一开始就那么想了。',
							'end'],
							['yuyuko','怎么那么吵？这种时候？我好困啊。',
								'',
								'我不是幽灵，是亡灵哦。现在是丑时三刻。<br>要是有什么事发生了怎么办啊。',
								'',
								'即使是我也会害怕的啦。如果有妖怪之类的出现了。',
								'',
								'？',
								'',
								'那么？那又怎么样了？',
								'',
								'不是。',
								'',
								'那种事，问的方法有点奇怪啊。而且……',
								'计划着坏事的人不可能不撒谎啊。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_hakugyokurou.jpg');
					} else if (game.me.name == 'alice'){
						game.me.storage.reinforce = ['youmu'];
						game.me.storage.dialog = [
							['alice','',
								'是的，没有实体，但是有意识……',
								'这样想的话就只能是幽灵了。',
								'',
								'唔。是这样的……。',
								'是非常大的幽灵，能把幻想乡包起来的程度。',
								'',
								'我可是很认真的。怎么你就不明白呢？',
								'',
								'是那个了！',
								'那么，最近有什么大国什么的死了吗？',
								'',
								'不管怎样，告诉我和幽灵沟通的方法。',
								'',
								'如果在宴会之前学会，就可以在宴会上表演了吧。',
							'end'],
							['youmu','那么，是说想变得能跟幽灵说话？',
								'',
								'你说是幽灵呢。',
								'它生前是怎样的生物和怎样活着的，决定了它是不是能沟通。',
								'那么，想跟什么样的幽灵说话？',
								'',
								'啊ー？<br>你当幽灵是笨蛋吗？',
								'',
								'如果是那么大的幽灵，生前就是那么大的。',
								'不是城市或者国家的幽灵吗？',
								'',
								'你至少给我明白我是在讽刺啊。',
								'那样的东西不可能沟通吧？<br>不是灵是神了。',
								'',
								'可以，不过，很快就是宴会了哦？',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_tree.jpg');
					} else if (game.me.name == 'patchouli'){
						game.me.storage.reinforce = ['yuyuko'];
						game.me.storage.dialog = [
							['patchouli','',
								'抱歉打搅了休息。稍微<br>陪我一下吧。',
								'',
								'总觉得最近，有个用未知的力量操纵着幻想乡全体的家伙。',
								'好像是相当古老的原住民一样的力量……',
								'就算调查，在家里的书里也找不到记载。<br>应该什么样的魔导书都有了的说……。',
								'',
								'所以，除了你没其他人像是会知道的了。',
								'',
								'好啦，再不处理异变的话。',
								'',
								'果然是知道什么吧？',
								'',
								'知道的吧。',
								'',
								'……不死族是怕火的。',
							'end'],
							['yuyuko','啊，真是的，干什么呀，在这种时间~。',
								'',
								'晚安。',
								'',
								'所以—？<br>那又怎样？',
								'',
								'真是失礼。我明明很年轻的。',
								'',
								'别管了。反正什么也没有发生。',
								'',
								'啊，这个呀，虽然我不知道，但这是很厉害的怀念的力量。',
								'在像现在这样细分化之前。',
								'',
								'都说了不知道了。',
								'',
								'哎呀，怎么办呢。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_hakugyokurou.jpg');
					} else if (game.me.name == 'youmu'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['youmu','',
								'基本上已经都斩过一遍，剩下的就只有你了。',
								'这次异变是你搞的鬼吧。',
								'',
								'虽然要说明的话是很麻烦的……<br>总之就是现在充满幻想乡的这股妖气。',
								'',
								'等到事情发生不就已经迟了吗？',
								'',
								'说的真是相当慢条斯理呢。',
								'',
								'不管怎样，能发出这样妖气的家伙，已经没剩下几个了。',
								'就来试试看你是不是犯人吧。',
								'',
								'剑，白楼剑会告诉我真相。',
							'end'],
							['remilia','很吵呢。究竟，这是怎么回事啊。',
								'',
								'异变？那是什么啊？',
								'',
								'啊啊，那个？那又不是什么大不了的事。<br>你看，实际上还什么都没发生不是吗？',
								'',
								'没有什么发生的话……<br>仅凭预测做出的行动不过只能是个借口而已。',
								'一切，如果不以结果为因子行动的话……<br>会被命运给玩弄的哦。',
								'',
								'因为我所生活过的时间是你所无法比拟的………<br>对了，你没活着吗。',
								'',
								'好吧，反正我什么也没做，随便你了。',
								'就来试试好了。不过说要试，怎么试呢？',
							'']
						];
						ui.background.setBackgroundImage('image/background/stg_scarlet.jpg');
					} else if (game.me.name == 'remilia'){
						game.me.storage.reinforce = ['yuyuko'];
						game.me.storage.dialog = [
							['remilia','',
								'你总在这个时候起床的吗？',
								'真像个老婆婆。',
								'',
								'现在这个时间，再过一点正好是我睡觉的时间。',
								'早睡早起可是我自豪的哦。',
								'',
								'明天的宴会，我想请你交给我。',
								'',
								'放心吧，明天会有现在为止都没有过的宴会。',
								'',
								'快到日出的时间了。',
								'别废话了，老实点吧。',
								'',
								'好了，乖乖地去享受回笼觉吧。',
							'end'],
							['yuyuko','哎呀呀，早上好。',
								'您来得还真早呢。',
								'',
								'就算是老爷爷，也不会在这么早的时候来别人家串门吧。',
								'',
								'那么？有什么事情。一个人来这种地方。',
								'',
								'不是明天而是今晚啦……<br>但是怎么觉得交给你不大放心的样子。',
								'那么，你是来说这个的？',
								'',
								'交给你的话，也许真会是那样呢。',
								'',
								'让我代替你的随从，陪你玩到日出吧？',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_hakugyokurou.jpg');
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['yuyuko','',
								'做到这种程度，明天一定会变得快乐的。',
								'',
								'大家都认为自己是按照自身的意志行动，<br>没注意到其实是被操纵的。',
								'所以今天我为了使大家不拥有自己的意志而自由行动着。',
								'这样的话明天也许可以看到有趣的东西呢。',
								'',
								'有趣的东西？是指什么。',
								'',
								'话说回来，我拿到了新的茶呢。',
								'',
								'神社。',
								'',
								'神的新茶，简称こう茶（koucha）。',
							''],
							['remilia','发生什么事了？吵死了。',
								'',
								'主动的亡灵。有何贵干啊？',
								'',
								'这种事我怎么没听说过……<br>那个有趣的东西我也能看到吗？',
								'',
								'那真是相当……。',
								'原来如此，用这种方式来蒙蔽黑幕的意志。',
								'',
								'嘿，简称新茶吧。从哪里拿的？',
								'',
								'那真的是新茶吗？',
								'',
								'讨厌的符号……。<br>可是我只喝红茶，所以不需要。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/ftg_scarlet.jpg');
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['yukari','崩溃散落的砂之城～♪<br>融化消失的土之国～♪',
								'那边路过的巫女小姐。<br>可以稍微耽误你一点时间吗？',
								'',
								'哎呀，在那点上吐糟的灵梦是第一个呀。',
								'',
								'说起来换个话题，<br>你也有不错的酒吧。',
								'',
								'吟酿酒',
								'',
								'来吧，交给我吧。',
								'',
								'那酒是怎样来到这里的，你知道吗？',
								'',
								'真是的，外面的世界就没有神了吗？',
							'end'],
							['reimu','啊——？<br>今天又是什么？',
								'还有，路过的人是你吧？',
								'',
								'大家都很迟钝的。<br>怎样，来干什么？',
								'',
								'普通的酒就有……。<br>今晚用的。',
								'',
								'是的，大概是吟酿酒。<br>不过是外面来的酒所以是外来酒。',
								'',
								'什么呀。<br>还在神前供奉着呢，所以不行。',
								'',
								'注意到的时候就放在神棚里了。<br>是那样的吧？',
							'']
						];
						ui.background.setBackgroundImage('image/background/shenshe.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['marisa'];
						game.me.storage.dialog = [
							['suika','唉～开始变得麻烦起来了。<br>这次就输了算了吧。',
								'',
								'前言撤回。我可不会输给你。',
								'',
								'我很清楚你的事。<br>你根本打不过我的。',
								'你不管是不是在宴会上也总是很吵闹。<br>明明一个人的时候并不会那样。',
								'不过因此你成了宴会的组织者。<br>代替我。',
								'因为如果由你来组织宴会，才不会显得很不自然。',
								'',
								'看吧那个性格。<br>就和我想的一样。',
								'',
								'我可不会输给你的。',
							'end'],
							['marisa','你是谁啊。难道这样的小鬼就是犯人？<br>这样赢了都没法炫耀啊。',
								'',
								'如果你不认真打的话，我这边也不会有趣啊。',
								'',
								'啊～？在开玩笑吗？',
								'开宴会是我想开的啊。<br>把大家聚集起来也是因为那样会更热闹些。',
								'你要是那么说的话，你也可以来参加呀。<br>其实本来谁也没打算不让你来。',
								'',
								'不过在那以前要先把眼前的犯人打倒。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					} else game.me.storage.reinforce = ['remilia'];
					game.me.removeSkill('ftg_suimu5');
					game.me.storage.skill = ['suimu_win'];
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					var musicnum = 0;
					if (game.me.name == 'sakuya')musicnum = 12;
					else if (game.me.name == 'remilia')musicnum = 12;
					else if (game.me.name == 'yukari')musicnum = 24;
					else musicnum = 36;
					lib.config.currentMusic = musicnum;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			// 第六关
			ftg_suimu6:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					if(game.me.storage.fuhuo<1){
						lib.boss.Th7_5.checkResult=function(player){
							if(player==game.boss&&game.boss.name!='remilia'){
								return false;
							}
						};
						event.finish();
					}
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','来吧！虽然不知道你计划着什么，<br>不过你还是放弃吧。',
								'',
								'哎？是这样吗？',
								'',
								'就是不知道才来这里的！',
							''],
							['remilia','在说什么呀。这妖雾不是我的东西。<br>这样的事也看不出吗？',
								'',
								'说到底，这妖雾是什么力量造成的，到底意味着什么，<br>你知道吗？',
								'',
								'被你逞威风也是很令人头痛的……。',
							'end']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','',
								'真奇怪。早就觉得不是灵梦……。',
								'',
								'是吗？',
								'算了。我代替你干掉邪恶的头目吧。<br>后来找到了吗？',
							''],
							['reimu','在想什么呀。',
								'',
								'我又不会放出妖气什么的。说到底，<br>我还在这里设下了陷阱来找了！',
								'',
								'完全找不到。',
							'end']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','',
								'好像真的弄错了。啊-啊，又浪费时间了。<br>虽然时间是无限的。',
								'',
								'奇怪了。剩下能想到的坏人……',
								'',
								'接下来，是那家伙吗？',
							'end'],
							['yuyuko','我没有说谎话啊～。',
								'',
								'不是“啊-啊”的问题吧？ 我去睡觉了。',
								'',
								'晚安～。',
							'']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','要分清楚幽灵是很简单的，',
								'-14.7℃的幽灵，就是生前借了钱就死了，留有遗恨的人。',
								'',
								'唔。渐渐地觉得那个并不是幽灵。',
								'',
								'没办法。看来只能到宴会会场处理这事了。',
							'end'],
							['youmu','那么？<br>很大的幽灵是什么东西。',
								'',
								'那也是吧。能将幻想乡包住，这么大的幽灵只能是幻想乡的灵啊。',
							'']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','来吧，死心了吗？',
								'',
								'死鸭子嘴硬。',
								'',
								'在哪里？',
								'',
								'结果，还是不知道在哪里。',
							'end'],
							['yuyuko','都说了不知道啦。',
								'',
								'啊，不过，这方面我的朋友很清楚的。',
								'',
								'不知道……。晚安。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','不，不对！？你不是犯人。',
								'',
								'伤脑筋了。宴会的成员中<br>已经没有其他可疑的家伙了……。',
								'',
								'不是，那种事情应该……。<br>这个，虽然可疑，非常的。',
							'end'],
							['remilia','真受不了，衣服都给你弄脏了。',
								'就算不靠那把剑……<br>我从一开始就把真相告诉你了啊。',
								'',
								'哎呀，你的头子难道不是最可疑吗？',
							'']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','早上了。太阳一会就要升起来了……<br>得赶紧回家去睡觉。',
								'',
								'因为最近一直被来路不明的家伙握着主导权……',
								'',
								'今晚，不对是明天的晚上，会变得很有意思的。',
							'end'],
							['yuyuko','知道了啦。明天，我是说今晚。<br>今晚的宴会就交给你了。',
								'',
								'哎呀，你发现了？',
								'我从来不去在意谁要去做什么……<br>只要好玩的话。',
							'']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','到了这种地步，被预定了的明天应该会有所改变吧？',
								'',
								'唉呀，你知道欲速则不达吗？',
								'',
								'银制的小刀呢。',
								'但是真正的说来，银制的杯子才拥有<br>让时间停止的特性呢。',
							'end'],
							['remilia','果然很拐弯抹角。我的话就直接找幕后黑手算账。',
								'',
								'时间是金属制的。',
							'']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','神酒也拿到了～。',
								'',
								'那当然是在宴会上喝的了。',
								'',
								'期待今晚的宴会。',
							'end'],
							['reimu','说起来，大家马上就要来了哟？<br>现在把酒拿走想干什么呀。',
								'',
								'嘛，也许是吧……。',
							'']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','看，根本不是我的对手吧。',
								'',
								'那么……宴会会继续举行呢。',
								'',
								'今天也尽量地热闹起来吧～。',
							'end'],
							['marisa','真是没办法。在你参加之前,宴会都会继续举行,<br>随便什么时候来都可以。',
								'',
								'总之，要走了。我是干事,不可以不去宴会的。',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "一日结界";
					if(game.me.name=="alice")stagename="爱丽丝的妖怪降伏";
					else if(game.me.name=="patchouli")stagename="月之记忆";
					else if(game.me.name=="youmu")stagename="界面活性斩";
					else if(game.me.name=="remilia")stagename="神社应有之貌";
					else if(game.me.name=="yuyuko")stagename="故交之友";
					else if(game.me.name=="yukari")stagename="超古老的酒";
					else if(game.me.name=="suika")stagename="西魔的降鬼";
					var dialog=ui.create.dialog("分界线<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++;
					game.me.storage.reinforce = ['yukari'];
					game.me.storage.stage = 'ftg_suimu7';
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','结果，宴会当天还是到了……。<br>妖雾出现的源头和目的还不知道。',
								'既然这样，等宴会里发生了什么的时候，<br>那时候再解决吧。',
								'今天要喝少点酒才行……。',
								'',
								'！？',
								'',
								'是吗？ 可是看起来已经发生了什么了……。',
								'',
								'稍等一下。',
								'有叫你参加宴会吗？',
								'',
								'没有叫吧。',
								'',
								'说到底。又不知道你在哪里住',
								'又只会给人添麻烦。',
								'',
								'说起来，你在计划着什么吧。',
								'这次的连续宴会和妖雾也是你干的吧？',
								'',
								'太可疑了。<br>说到底一直都是可疑的。',
								'没叫你，你却出现了。',
								'叫了你，你又不出现……',
								'',
								'没有！',
								'',
								'夜晚……是属于幻想乡的东西！',
							''],
							['yukari','哦呵呵。<br>今天的宴会上会发生什么呢？',
								'',
								'快点开始宴会吧？<br>没问题，今天什么也不会发生的。',
								'',
								'没问题，我拿来了让大家高兴的酒。<br>度数90度。直角呢。',
								'',
								'哎呀，叫了呀～',
								'',
								'真是的，大家真过分。<br>不当我是好朋友了吗？',
								'',
								'下次，要带路去我家吗？',
								'',
								'哎呀，就算没有被叫到我也没有空去做那些事呀。',
								'',
								'哎呀，有叫过我的时候吗？',
								'',
								'算了。很快就是夜晚了。',
								'正如你那样的使坏，我要对天空使坏，<br>让白天和黑夜同时出现，看看会多么有趣。',
								'如果像现在这样黑夜来临的话，天空就会亮吧。',
								'阳光和月光的境界是我的东西，<br>就算那样也能举行夜宴？',
								'',
								'那就有些不对了！',
							'end']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','太阳好像要下山了。',
								'妖怪要出来的话都从这段时间开始的吧。',
								'',
								'来了吗。',
								'',
								'当然是战斗啦。这里就是战场。战神社啊。',
								'',
								'究竟，什么啊。你一直都没有带酒……。<br>说起来你有参加宴会吗？',
								'',
								'有什么企图？',
								'',
								'啊啊真是的，太可疑了。',
								'',
								'我想我还没那家伙那么失礼。',
								'不管怎样，你的企图就在这里完了。<br>只有这个是没有错的。',
								'',
								'不是，是看中了你拿着的大吟酿！',
							'end'],
							['yukari','哎呀，很紧张的气氛呢',
								'',
								'今天是宴会吧？<br>总觉得好像要开始战斗的气氛。',
								'',
								'就这么想要我拿着的酒吗？<br>也难怪，这么名贵的酒。',
								'',
								'因为，没有来叫我。<br>在蓝那里听到就自己过来了。',
								'',
								'听说吸血鬼会带贵重的白兰地来。',
								'看中那个了。',
								'',
								'真失礼。像你这么失礼的人类我只知道还有一个左右。',
								'',
								'哎呀，你也看中了白兰地吗？<br>是竞争对手了。',
							'']
						];
					} else if (game.me.name == 'sakuya'){
						/*game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['sakuya','头疼啊……。',
								'',
								'不知道紫住在哪里……',
							''],
							['reimu','怎么了？',
								'',
								'即便是我也不知道啊。',
							'end']
						];
						lib.skill['ftg_converse'].init();
						game.boss.useSkill('ftg_converse');
						//game.boss.removeSkill('ftg_converse');
						game.pause();
						game.me.storage.reinforce = ['yukari'];*/			//飞虎：群口相声怎么搞= =
						game.me.storage.dialog = [
							['sakuya','头疼啊……。',
								'',
								'不知道紫住在哪里……',
								'',
								'飞鸟也无法逃脱我的匕首哦。',
								'',
								'来得还真是时候啊。<br>好像在一旁偷听似的。',
								'',
								'此次的异变事件，真庆幸你是主谋呢。<br>就在刚才。',
								'你又在图谋着什么坏事吧？<br>你呀，一年到头总是这样！',
								'',
								'图谋不轨的家伙就会撒谎。',
								'',
								'谁也没问你饮料的事！',
								'',
								'企图做坏事的家伙没什么好问的。<br>一定是在撒谎。你这个骗子！',
								'',
								'说起来，没人邀请你，<br>你却来宴会了。',
								'',
								'那么，不要再做坏事和撒谎了。',
							''],
							['yukari','博丽灵梦：怎么了？',
								'',
								'博丽灵梦：即便是我也不知道啊。',
								'八云紫应呼飞出',
								'',
								'不要嘛。被打落下来。',
								'',
								'就是在听哦。',
								'那么，已经就要开始了么？梦之大宴会。',
								'',
								'真过分啊。我可是特意地拿来这酒。<br>绝对没想过空手参加宴会这种事情。',
								'',
								'喏。幻之大吟酿。',
								'就是幻得过头了所以这种一升装的都飘在空中了呢。',
								'',
								'啊——。',
								'对了—。你说的异变事件是什么？',
								'',
								'没说谎啊～。<br>喏，是在空中飘浮着吧？　幻之大吟酿。',
								'',
								'哎呀，那就是异变？<br>我是移动的异变吗。',
								'',
								'(什么坏事和谎言，是那个吗？<br>各种各样太多了……)',
							'end']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','',
								'好像那不是妖气。虽然不是很明白。',
								'',
								'真正的战斗现在才开始呢。',
								'',
								'没有叫到但是又出现，很有坏家伙的味道。',
								'',
								'所以你就用来泄愤了？<br>这次的事件也是。',
								'',
								'暂时？<br>的确是就算充满了像妖气的东西，也没有发生什么事……',
								'',
								'是的，这个将幻想乡包着的象妖气的东西。',
								'',
								'这家伙？那边不是没有人在吗？',
								'',
								'好了好了，那家伙在哪里？',
								'',
								'嘛，眼前的确是有个令人头痛的家伙……。',
							''],
							['yukari','博丽灵梦：之后怎么样了。妖气什么的吵吵闹闹的。',
								'',
								'博丽灵梦：所以最后还是回到了这里。',
								'',
								'？？？<br>用那么险恶的脸参加宴会？',
								'来吧，现在不是要开始快乐的宴会吗？',
								'',
								'不叫上我的才是坏家伙。',
								'',
								'泄愤？<br>什么坏事也没有干啊？<br>暂时。',
								'',
								'像妖气的东西？',
								'',
								'啊啊，这个就和我无关了。<br>是这家伙干的吧？',
								'',
								'虽然是令人头痛的小女孩，但没有什么恶意的。<br>虽然是个令人头痛的小女孩。',
								'',
								'你眼睛看不见的吗？<br>不就在你眼前吗？',
								'',
								'是那个了，那个啊！',
							'end']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','结果，还是不知道在哪里。',
								'',
								'算了，没办法。关于这个异变，看来只能自己调查了。',
								'',
								'咦？<br>什么啊。原来是住在神社的。',
								'',
								'是了。说起来，最近的异变是什么？',
								'是你的话就知道了吧？<br>听说你是最老的。',
								'',
								'回答我的问题。',
								'',
								'宴会？<br>是吗……那目的是什么？',
								'',
								'她本人又在哪里？',
								'',
								'那样的事。',
								'',
								'真是令人头痛的家伙。',
							'end'],
							['yukari','博丽灵梦：幽幽子的朋友？<br>是说紫？<br>不想那家伙出现的时候就经常看见。',
								'',
								'博丽灵梦：异变，是指什么？',
								'哎呀，我觉得没有想要我在的时候呀。',
								'',
								'叫我的是你吗？',
								'',
								'是住着的。',
								'',
								'说我老真是过分。是谁说的？',
								'',
								'不是当然知道的吗。',
								'或者说是我认识的令人头痛的家伙。<br>就是这个宴会的犯人。',
								'',
								'那样的事去问她本人。',
								'',
								'真是的，这么多问题，找我就为了那样的事？',
								'',
								'真无聊。',
								'这么想见那家伙的话，<br>就不让你见。',
							'']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','虽然我还是相信这些不是幽幽子大人的所为，但是……',
								'',
								'恩。结果还是不明白发出这股妖气的犯人啊。',
								'',
								'咦？紫大人。你会来这里真是很少见呢。',
								'',
								'为什么这么突然？',
								'',
								'先是没被邀请，又是被叫来，刚才起你说的话难道不矛盾吗？',
								'',
								'这个……从来就没细想过呢。是为了什么啊？',
								'',
								'是吗。',
								'',
								'紫大人才是犯人呢。这股妖气。',
								'',
								'幽幽子大人，怀疑您真是太对不起了。<br>竟然忘了身边就有如此可疑之人。',
								'',
								'来吧，剑会在所有的界线上都开个洞！',
							'end'],
							['yukari','博丽灵梦：哎呀，好早呢。今天一个人？<br>离宴会开始还有一段时间哦。',
								'',
								'博丽灵梦：难道你寻找犯人的方法就是一直这样斩过来？',
								'？？？<br>真是个不安定的世界呢。',
								'我说，要是一直都只知道这样斩的话……<br>总有一天你的地方（冥界）也会满员的哦。',
								'',
								'还不是因为没被邀请参加宴会嘛。<br>所以说，就算不叫我也自己过来了啊。',
								'不过说起来……',
								'',
								'还不是因为有人如此的要叫我来吗。',
								'',
								'哎呀，你还是修行不足呢。<br>你的眼睛是为了什么而生的？',
								'',
								'无所谓了。你们只要开宴会的话。<br>对，集中起来…呢。',
								'',
								'是啊。',
								'',
								'又太武断了呢。',
								'',
								'把我给忘了你很过分呢。',
							'']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','',
								'到现在，执掌宴会的都是谁？',
								'',
								'是那家伙的话就好了。',
								'你啊，把你作为巫女的灵感再锻炼得敏锐点不好吗。',
								'',
								'哎，宴会上没有邀请的家伙出现了。',
								'',
								'图谋？<br>我是要把有图谋的家伙揪出来的来着。',
								'',
								'你才更让人不知道你在图谋什么吧？',
								'',
								'哎呀真巧。我也是那么想的。',
								'',
								'……来，老实一点。',
							''],
							['yukari','博丽灵梦：真早啊。那，今天是来负责的？',
								'',
								'博丽灵梦：到现在的话……负责的是魔理沙吧？',
								'',
								'？？？<br>哎呀哎呀。',
								'跟灵梦说那些话是没有用的啦。',
								'',
								'虽然我不知道你在图谋什么。',
								'',
								'呵呵呵。<br>这次的宴会我包下来吧？',
								'',
								'这么有意思的人，可不会交给任何人的哦。',
								'',
								'那么，什么也不用说都明白了吧。',
								'',
								'哎呀，一开始就很老实的啊～',
							'end']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','早安。',
								'',
								'最近有没有什么奇怪和有趣的事发生？',
								'',
								'是吗？<br>不过你看，你的登场已经在预料之外了啊。',
								'',
								'如果是紫的话，<br>应该是想戏弄朋友吧？。',
								'',
								'话说回来，我拿到了新的茶呢。',
								'',
								'是吗？',
								'那你知道为什么茶新鲜的香味<br>会随着时间慢慢变淡？',
							''],
							['yukari','博丽灵梦：晚安。不过，来的真早呢。<br>离宴会开始还有一点时间。要不要先喝杯茶？',
								'',
								'博丽灵梦：这个……<br>昨天有个奇怪的亡灵跑来不知道算不算？',
								'那可不行喔。',
								'想借着扰乱意识来防止被操纵。',
								'幽幽子的方法一直都很温和呢。',
								'',
								'嘛，只是想看看朋友坚强努力的样子嘛。',
								'',
								'不，是想要把她打败喔。',
								'',
								'哎呀真巧。我也是。',
								'',
								'真可惜。我的茶香不会变淡，所以我不知道。永远的那种。',
							'end']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.reinforce = ['yuyuko'];
						game.me.storage.dialog = [
							['yukari','只有天空～和往昔一样的美丽湛蓝～♪<br>国～破～山河在～♪',
								'哎呀幽幽子，真是很久不见了。',
								'',
								'还要问怎么了吗？',
								'这样了还打算举行和平常一样的宴会吗？',
								'',
								'幽幽子真迟钝。<br>我还想着你应该差不多行动了……。',
								'',
								'说起来',
								'换个话题，<br>那酒是很古老的酒吧。',
								'',
								'你不会有效利用的话，交给我吧。',
								'',
								'当然，今晚“大家一起”喝掉哟。',
								'',
								'反过来，要把毒去掉。',
							''],
							['yuyuko','怎么了？<br>宴会前还这么捣乱。',
								'',
								'现在和以前都是那么打算的。',
								'',
								'是说什么事呢。',
								'',
								'没有那样的事。<br>保质期还有一千年以上的。',
								'',
								'哎呀哎呀，我想今晚大家一起喝掉的说。',
								'',
								'要放毒进去吗？',
								'',
								'不愧是紫，从一开始就发现我放了毒呀。',
							'end']
						];
						ui.background.setBackgroundImage('image/background/stg_sakura.jpg');
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['remilia'];
						game.me.storage.dialog = [
							['suika','从我来到幻想乡，已经很长的时间了。<br>要举行多少次宴会我的能力才会被注意到呢？',
								'或者说，对手真是太弱了。<br>开始觉得有点无聊了。',
								'',
								'哎呀，欢迎。你就是本周来宾吧。',
								'',
								'你的事我很清楚哦。',
								'宴会里总是说些任性的话。<br>就算不是宴会也是很任性吧？',
								'实际上一直在注意着我的样子。<br>尽管已经分散得相当细小……',
								'就算那样你也没有行动，是因为……因为一直看着呢。',
								'',
								'其实是想让其他的……特别是人类注意到。',
								'',
								'不过，你也开始变得有点不安了吧？',
								'',
								'说谎。',
								'因为看到对手实在太强大了。<br>觉得如果交给人类做会很危险吧！',
							'end'],
							['remilia','啊~,就是你吗？<br>近来把幻想乡当成自己的东西包着的犯人。',
								'',
								'虽然不知道你是谁……<br>在这里不允许那种自作主张的行为。',
								'',
								'你在说什么？',
								'',
								'理所当然了。因为降妖除魔是人类的工作。',
								'',
								'只是周围的人实在太迟钝，等得不耐烦了而已。',
							'']
						];
						ui.background.setBackgroundImage('image/background/ftg_suika.jpg');
					}
					game.me.removeSkill('ftg_suimu6');
					ui.background.setBackgroundImage('image/background/ftg_yukari.png');
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					var musicnum = 38;
					if (game.me.name == 'suika')musicnum = 11;
					lib.config.currentMusic = musicnum;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			// 第七关
			ftg_suimu7:{
				trigger:{global:'dieEnd'},
				forceDie:true,
				forced:true,
				priority:-10,
				//fixed:true,
				//globalFixed:true,
				unique:true,
				filter:function(event){
					if(lib.config.mode!='ftg') return false;
					return event.player==game.boss;
				},
				content:function(){
					'step 0'
					if(game.me.storage.fuhuo<1){
						lib.boss.Th7_5.checkResult=function(player){
							if(player==game.boss&&game.boss.name!='yukari'){
								return false;
							}
						};
						event.finish();
					}
					game.boss.hide();
					game.addVideo('hidePlayer',game.boss);
					game.delay();
					'step 1'
					var line;
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','',
								'结果，是什么？',
								'',
								'那家伙是谁？',
							''],
							['yukari','唔。',
								'',
								'唔。和我没关系呀～。',
								'大家都被那家伙耍了～',
								'不知不觉地开始的宴会也是，<br>妖梦不知不觉地喝醉开始跳舞也是。',
								'',
								'没办法。<br>看吧。我让你也能看得见。',
							'end']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','',
								'差不多该现出你的真面目了吧？',
								'是你安排的吧？这宴会和妖气。',
								'',
								'是可以看到千里之外的透明度。<br>听说人的眼睛不会变坏的。',
							''],
							['yukari','就算不那么急。酒之类的多少都有。<br>呀。真是的',
								'',
								'妖气是密度的根本。',
								'妖气把各种各样的人、恶魔、幽灵都聚集起来了。<br>和我没关系呀。',
								'',
								'好了。这样一来可以看见这孩子的样子了吧？',
							'end']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','好了，这次不会让你说谎了。',
								'你让妖气包围幻想乡……<br>到底在图谋什么？',
								'',
								'喏，在这段期间妖气在不断增强……。',
								'',
								'就是因为注意到了，<br>所以才在追问……。',
							''],
							['yukari','总觉得不太明白,不过，不是我干的哟～。<br>我没图谋做那种奇怪的事情啊～。',
								'',
								'气？<br>是这个啊。你没注意到？',
								'',
								'不是那么回事……',
								'看吧。这个世界上最细小的百鬼夜行。',
							'end']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','差不多，思维好像变得奇怪起来了！',
								'',
								'好了？<br>这个像是妖气的东西到底是什么？',
								'',
								'鱼会聚集起来？',
							''],
							['yukari','一开始就是很奇怪了。<br>真是的，我不可能做吧？',
								'',
								'唔。你想想，如果在湖里滴一滴血会变得怎样？',
								'',
								'答案是对的但是答错了，那个湖里没有鱼。',
								'来吧，让那一滴血变回原来的身体去。',
							'end']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','可以让我见了吧？',
								'',
								'我又不是为了找有趣的东西。',
							''],
							['yukari','没办法。',
								'那种家伙，并不怎么有趣呀？',
								'',
								'看呀，不断地聚集着了……。',
							'end']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','啊啊真是。这究竟是怎么一回事啊！<br>竟然也不是紫大人……。',
								'',
								'已经到宴会的时间了呢。<br>结果，还是不知道犯人和其目的啊……。',
								'',
								'果然，是幽幽子大人！？',
							''],
							['yukari','斩过别人之后反而生气这会让别人为难呢。',
								'',
								'修行不足呢果然。',
								'',
								'真没样子啊，给你点提示好了。<br>看吧，不是还有一个可疑的人在吗。',
								'',
								'不是不是，不是啦。<br>看，变得能看见了。你的眼睛也……',
							'end']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','差不多该说出事实了吧。<br>真正把宴会包下来的是谁？',
								'',
								'真直率。令人佩服呢。',
							''],
							['yukari','好吧。',
								'虽然不是很想……<br>不过要是你说想见见的话…',
								'',
								'一开始就很直率了啦。<br>又不是你和你身边的人。',
							'end']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','正确答案是……',
								'茶的香味只会因为扩散而变淡，<br>但绝对不会消失。',
								'',
								'把扩散了的香味，<br>再次聚集成一个整体的方法……',
								'总而言之，就是把范围很广的界线一口气变小。拜托了。',
							''],
							['yukari','所谓拐弯抹角就是这么回事吧。',
								'',
								'真没办法啊。<br>因为是幽幽子的请求嘛。',
							'end']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','这样就……',
								'会拿酒来的家伙基本都空手了吧？',
								'',
								'真是的，幽幽子明明也知道的说。',
							''],
							['yuyuko','在谋划着什么？',
								'',
								'“大家一起”把酒喝掉？',
							'end']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.dialog = [
							['suika','还差得远呢。<br>凭你的力量，远远赶不上我们鬼。',
								'',
								'是啊，宴会已经开始了。<br>赶快点比较好吧~。',
								'',
								'很诚实呢~。只有这方面上。',
							'end'],
							['remilia','这次只是没时间了。<br>因为听到了来参加宴会的咲夜叫我的声音。',
								'',
								'下次再打倒你。',
							'']
						];
					}
					lib.skill['ftg_converse'].init();
					game.boss.useSkill('ftg_converse');
					//game.boss.removeSkill('ftg_converse');
					game.pause();
					var control=ui.create.control('下一关',function(){
						game.resume();
						control.close();
					});
					lib.init.onfree();
					'step 2'
					var stagename = "萃集的梦想、思念";
					if(game.me.name=="patchouli")stagename="日之国";
					else if(game.me.name=="remilia")stagename="小小的军队";
					else if(game.me.name=="yuyuko")stagename="萃梦幻想";
					else if(game.me.name=="yukari")stagename="在梦幻中涌出的酒";
					else if(game.me.name=="suika")stagename="酒吞童子降鬼";
					var dialog=ui.create.dialog("萃梦想<br><br>"+stagename);
					dialog.open();
					game.pause();
					var control=ui.create.control('走起！',function(){
						dialog.close();
						control.close();
						game.resume();
					});
					lib.init.onfree();
					'step 3'
					while(_status.event.name!='phaseLoop'){
						_status.event=_status.event.parent;
					}
					game.me.storage.tongguan ++; 
					game.me.storage.reinforce = ['suika'];
					game.me.storage.stage = 'suimu_win';
					if (game.me.name == 'reimu'){
						game.me.storage.dialog = [
							['reimu','',
								'说起来，你是谁？',
								'',
								'你就是这场骚动的主犯吧？<br>为什么要干这样的事。',
								'',
								'最近的宴会不是很多吗。<br>而且，出现了妖雾……。',
								'还对我的行动了如指掌，这么说来果然是……！',
								'',
								'紫是这样说的。',
								'',
								'看吧，就和我说的一样！',
								'',
								'像你这样的，有去宴会吗？',
								'',
								'都说了，到底什么时候在什么地方？<br>我好像从来没见过你啊！',
								'',
								'啊啊，原来如此。',
								'原来妖雾本身就是犯人，<br>所以我才会不知道。太好了。',
								'',
								'证明了不是我的直觉迟钝。',
								'现在觉得必须打倒你<br>大概也是正确的。',
								'',
								'就算那么说，反正也是妖怪吧？',
								'降伏妖怪是我的工作。<br>可以打倒是理所当然的了。',
								'',
								'！？',
							''],
							['suika','咦？怎么了？紫<br>说起来，那家伙是谁？',
								'',
								'我只是在高兴地玩着呢。',
								'话说回来，为什么你可以看见我？',
								'',
								'那种事情，我当然知道。',
								'虽然我只看到你一个人到各种地方捣乱。',
								'',
								'等一下等一下，宴会多也是我干的？',
								'',
								'虽然是这样没错。',
								'',
								'这样说的是紫吧？',
								'算了，继续宴会热闹点不是很好吗？',
								'我就很喜欢热闹。<br>不能再热闹点了吗。',
								'',
								'说什么啊。我不是一直都在吗。',
								'今年的冬天很长吧？',
								'然后我最喜欢的赏花推迟又推迟……',
								'终于到了春天，可刚到一春天，<br>眨眼工夫樱花就全开了，又很快地凋谢……',
								'这么遗憾的年份根本就没有吧？',
								'',
								'嗯？一直都在宴会里啊！',
								'的确，因为一直都是以雾状散开，<br>只要感觉不是很敏感的家伙应该都注意不到吧？',
								'我很高兴啊。<br>妖怪、魔女、吸血鬼、幽灵，就像百鬼夜行一样',
								'',
								'什么太好了？',
								'',
								'我一直在看着你们。',
								'你们全都因为我的「聚集的能力」而不得不举行宴会。',
								'那是什么原因你知道吗？',
								'因为你「们」打不倒我。',
								'',
								'啊——，哈哈哈哈——',
								'认为我是妖怪的时候，你已经不是我的对手了。',
								'',
								'我的队伍是百鬼夜行，<br>在鬼聚集的地方人类和妖怪都没有立足之地！',
							'end']
						];
					} else if (game.me.name == 'marisa'){
						game.me.storage.dialog = [
							['marisa','',
								'啊啊，宴会中止了。',
								'',
								'防危险于未然是吉，这是今天的占卜结果',
								'',
								'是危险的未然吧？<br>……你。',
								'',
								'我不记得有叫过你这样的东西来参加。<br>我是干事，不会弄错的。',
								'',
								'啊啊，是吗。虽然不知道怎样把大家聚集起来，<br>目的是什么？',
								'',
								'那是为什么啊。',
								'',
								'樱花的季节短了不是我干的。<br>是亡灵和春风和自然现象造成的。',
								'',
								'算了。宴会的次数再少些也好。',
								'实在是太多了。那个灵梦不是也少见地累了吗。',
								'',
								'看来在那之前不把你打倒是不行的了。',
								'',
								'鬼什么的没理由在幻想乡吧？<br>不是约定了吗！',
							''],
							['suika','哎呀？怎么了？不是快开始宴会了吗？',
								'',
								'为什么。都准备到这个程度了～。',
								'',
								'那是说。也许是能够防危险于未然是吉吧。',
								'',
								'失礼的家伙啊。你知道我有多期待宴会吗？',
								'',
								'让你做干事的是我。',
								'让大家无意中聚集起来的，也是，我。',
								'需要你们聚集起来，所以聚集了你们。',
								'',
								'不是一开始就说了吗。目的是宴会！',
								'',
								'今年樱花的季节太短了。',
								'赏樱不够多。我明明喜欢更加更加热闹些。',
								'所以继续举行宴会。<br>因为喜欢更加更加热闹。',
								'',
								'怎么都好了。<br>不过，稍微更加热闹点吧。',
								'',
								'唉～。还差一点，我的同伴也会加入的说。',
								'',
								'希望每晚都百鬼夜行。',
								'幻想乡的夜晚变成为了我们鬼的夜晚。<br>很热闹美好哦。',
								'',
								'既然认为鬼不在，那就给你见识一下。<br>让你知道鬼聚集的宴会是什么东西！',
							'end']
						];
					} else if (game.me.name == 'sakuya'){
						game.me.storage.dialog = [
							['sakuya','',
								'那么笼罩着的妖气都消失了……。',
								'你是幕后主使吧。',
								'',
								'（图谋不轨的家伙就会说谎呢）',
								'',
								'哎。',
								'',
								'是吗。',
								'',
								'那真是厉害呢。',
								'',
								'说起来差不多到宴会的时间了呢。<br>大家也都集中过来了。',
								'',
								'那么差不多，该打倒你这个最后的家伙了。',
								'说起来你啊，鬼什么的……',
								'撒谎也太不着边际了吧。<br>又不是那种小孩子似的谎言。',
							''],
							['suika','啊啦啦，最初，不对应该是很久以前就在这里哦。<br>恶魔的女仆小姐？',
								'',
								'我说，幕后主使这种说法，不觉得很奇怪吗？<br>而且那并不是妖气……。',
								'',
								'那个雾，就是我哟。',
								'',
								'化身为雾以包住整个幻想乡，<br>以此来把大家都聚集到一起的啊。',
								'',
								'宴会玩的好开心呢。',
								'完全是百鬼夜行的样子。',
								'所以呢，用我的力量来聚集更多更多的人类，妖怪和幽灵，<br>开一个盛大的宴会吧……。',
								'',
								'你在听吗？',
								'',
								'今夜也是百鬼夜行。变得小到无法看见的<br>鬼们包围了幻想乡。',
								'',
								'但是……你不是连我的身影也无法捕捉吗？',
								'是不是谎言……给你看看我的萃集之力，<br>让你被我华丽地杀死再说吧！',
							'end']
						];
					} else if (game.me.name == 'alice'){
						game.me.storage.dialog = [
							['alice','',
								'哈？到底怎么……。',
								'',
								'在哪里看啊。你这个色鬼。',
								'',
								'说起来，妖气消失了？',
								'',
								'这样的事你也能做到？<br>真厉害。',
								'',
								'是吗？<br>看起来好像没什么差别。',
								'怎么，有什么目的？',
								'',
								'你说什么——。<br>哦，原来不是什么了不起的目的啊。',
								'',
								'是吗？<br>那么我来反抗给你看？',
								'',
								'百鬼夜行……失礼呢。<br>把人当作怪物一样。',
							''],
							['suika','啊，啊咧？<br>明明是宴会前了，干什么啊，紫~。',
								'',
								'？？？<br>啊，你好。',
								'一直看着你的动向……<br>很有趣。',
								'采取不对头的行动……<br>虽然那样却避开了看起来很强大的妖怪……',
								'',
								'已经知道了吧？',
								'我是很大的幽灵，能将幻想乡包住的。',
								'',
								'一开始就不是妖气。<br>稍微变薄变大，进行了瞭望。感觉很好啊。',
								'',
								'我和你们魔族是不同的。',
								'',
								'啊，目的早就达成了。',
								'',
								'你们不是在举行宴会吗？<br>我只是想把一大群人聚集热闹起来。',
								'结果到最后也没人能反抗我的萃集之力。',
								'得强到紫那样才行吧？<br>靠我的力量大概还萃集不过来。',
								'',
								'哼。',
								'在这里之时就是中了我的圈套',
								'在你们不注意的情况下，明明连自己变成了百鬼夜行的<br>一员这事也没注意到。',
								'',
								'你不也是怪物吗？',
								'你这样的魔法使——',
								'想要忤逆我们鬼这样的高贵种族，<br>比光的速度还要快（早）呢！',
							'end']
						];
					} else if (game.me.name == 'patchouli'){
						game.me.storage.dialog = [
							['patchouli','终于……找到了。',
								'',
								'你说可以玩，结果，你是谁？<br>到底干了什么？',
								'',
								'！？<br>那个角，难道你……',
								'',
								'是这样啊，所以才会这样。',
								'我知道为什么家里的书到处都没有记载了。',
								'记载有那样的东西的书，家里……<br>幻想乡里也应该不存在的吧。',
								'',
								'你的力量，散和聚，是吗？<br>变成雾……诱发宴会……。',
								'说起来，“鬼”是怕什么的呢？',
								'',
								'是这样啊。<br>的确是怕炒过的大豆的……',
								'不过现在，那样的东西没有带过来。',
								'',
								'发生了什么……？<br>宴会……吗？',
							''],
							['suika','咦？<br>到时间了~？',
								'本以为我可以更多更多地玩会。',
								'',
								'唔？<br>稍微把幻想乡变热闹点罢了。',
								'看啊，我只是稍微捏一下手——',
								'大家就没任何疑问地参加宴会了',
								'我只是看着那，得到享受罢了。',
								'',
								'不是鹿啊。',
								'',
								'也不是山羊啦~。',
								'',
								'哎~？<br>很强喔——。什么也不怕。',
								'',
								'哼。',
								'虽然好像知道很多知识……<br>但是，似乎都没法使用。',
								'反正，对于住在现在和平的幻想乡的家伙们来说，<br>连发生了什么也不会知道吧？',
								'',
								'鬼的力量，聚集的力量，痛痛快快地尝尝吧！',
							'end']
						];
					} else if (game.me.name == 'youmu'){
						game.me.storage.dialog = [
							['youmu','',
								'哎！？什么？你是谁啊？<br>究竟是从哪里冒出来的？',
								'',
								'咦，妖气完全消失了。',
								'你就是犯人吧。',
								'',
								'说起来，为什么目的？',
								'放出那样的妖气……竟然把整个幻想乡<br>都包裹起来，怎么看都不寻常啊。',
								'',
								'之前幻想乡不是到处都充满妖气吗。',
								'在刚才，因为你的出现妖气才全部都消失了……',
								'',
								'我……',
								'真相用眼睛是看不见的，用耳朵是听不到的，',
								'真相是通过斩而得知的。<br>师父曾经这么告诉过我。',
								'所以，一切不斩就无法开始。<br>剑会引导我发现真相。',
								'',
								'鬼？',
								'',
								'鬼什么的……不知道。<br>本来鬼什么的……',
							''],
							['suika','哎，这个，该说初次见面，吗？',
								'',
								'我从最初，从很久以前就在这里哦。<br>你干的坏事我全部都看到了。',
								'',
								'什么“犯人”，不要把人说的跟犯罪者一样。<br>不过是个只会斩人的武士。',
								'',
								'我只是让大家开宴会罢了……<br>在无意识当中呢。',
								'而且，我才没放出什么妖气哦。',
								'',
								'明白吗？',
								'不是只有妖怪放出的才叫妖气。',
								'不能被惯性思维给迷惑了。',
								'说到底，所谓妖气是什么？',
								'那种东西不用眼睛去看的话，是看不到真相的哦。<br>你的修行还不够呢。',
								'',
								'真有趣呢，幽灵。',
								'我不觉得你理解了你师父的教诲',
								'而且……',
								'你那把剑，从来就没有斩过鬼，对吧？',
								'',
								'就是说，那把剑和你都不知道什么是鬼。',
								'',
								'鬼之力，萃集之力，以及分力，<br>那些究竟是不是能被斩断的东西……',
								'就让我来告诉那把剑吧！',
							'end']
						];
					} else if (game.me.name == 'remilia'){
						game.me.storage.dialog = [
							['remilia','',
								'游戏已经结束了哦。小不点小姐。',
								'',
								'已经玩够了吧？<br>都已经让你放肆了这么长时间了。',
								'',
								'能啊。不如说现在开始才是真正的游戏吧？',
								'',
								'敌得过也好什么也好……<br>我和你程度差太多了不是吗？',
								'像我这样高傲的贵族，<br>可不是土气的土著民能比的。',
								'',
								'是呢。看看程度上的差别也好。',
								'',
								'你在说什么啊。幻想乡的大家都是那么叫我的。',
								'吸血「鬼」。',
							''],
							['suika','哎～？我本以为我可以更多更多地玩会。',
								'',
								'算了。',
								'最后好像能玩一个大点的游戏。',
								'',
								'但是……能玩游戏虽然很好。',
								'不过你和我的程度差太多了。',
								'像你那样的一介吸血鬼，<br>以为能敌得过我们鬼吗？',
								'',
								'那程度上的差别，要试试？',
								'',
								'啊，对了，你没见过鬼吧。<br>刚来幻想乡的吧。',
								'',
								'那么你该知道了吧？鬼是强者的代名词哦。',
								'如果你觉得自己有多么强，就意味着鬼会有多么强。',
								'我的力量，萃集的力量，只有鬼才会拥有的力量……<br>在未知的力量面前幻想破灭吧！',
							'end']
						];
					} else if (game.me.name == 'yuyuko'){
						game.me.storage.dialog = [
							['yuyuko','',
								'讨厌啦。好不容易才见到的说<br>真面目却是个小鬼……。',
								'',
								'……像鬼这种东西，一点香气也没有。',
								'',
								'栴檀出叶就芬芳。<br>跟不太干净的鬼没关系。',
								'',
								'小孩子不知道也好。',
								'',
								'话说回来，我拿到了新的茶呢。',
								'',
								'那是当然的，是天然的哦。<br>神社的茶。',
								'',
								'咦？还真厉害。',
								'',
								'我的台词被猜中，到这里来还是第一次。',
							''],
							['suika','啊～啊，被发现了。<br>都是被你奇怪的话题诱导。',
								'',
								'还以为能再玩一下的说。',
								'会出现像你这种奇怪的亡灵……<br>真是没想到啊。',
								'',
								'失礼呢。<br>我就是被用萃集香气的方式叫出来的不是吗？',
								'',
								'那些话在夸奖我吗？',
								'我就是萃集的香气。刚好合你的心意吧？<br>还是说只是偶然？',
								'',
								'把鬼当成小孩，真是有勇气。',
								'还是说，那不是勇气是幽气？',
								'',
								'我已经在这里了，再转移话题<br>没什么意义吧……。',
								'……还是说你不是故意的，而是天然呆吗？',
								'',
								'神社的茶不可能是天然的。',
								'总而言之你是想比较神社的茶<br>和我之间哪个比较香吧。',
								'',
								'厉害的从现在才开始。',
								'',
								'我可是……天生的鬼哟。',
								'我天生的鬼之力。<br>可不是像你那样没用的天然呆！',
							'end']
						];
					} else if (game.me.name == 'yukari'){
						game.me.storage.dialog = [
							['yukari','来吧，游戏也差不多该结束了。',
								'',
								'虽然操纵大家继续聚集下去也可以……',
								'但是不适可而止的话，差不多该有谁注意到了。',
								'',
								'就算和那些家伙全员为敌也不怕？',
								'',
								'今天的宴会本来应该有的酒都没了。',
								'这样下去宴会没有酒会发生什么事？',
								'',
								'哎呀，可能会那样吧。',
								'不过，我会说全部被你喝掉了。<br>怎么说也不是我一个人能喝掉的分量。',
								'',
								'在那里又有个怎么看也是喜欢酒的萃香。',
								'真是妙。会变得与她们全员为敌哦。<br>我也是，你也是。',
								'',
								'来吧，你只能在大家面前现身了。',
								'那样你的能力也就曝光了。<br>举行宴会也就是自由意志了。',
								'',
								'哎呀，可能是那样吧。',
								'但是没问题。让你的酒葫芦出席宴会。<br>无论多少酒也会涌出来吧？大家都高兴的。',
								'',
								'喂，打算背叛同伴吗？',
							''],
							['suika','咦～紫～，怎么了？',
								'',
								'那些家伙不可能会注意到吧？',
								'而且就算注意到。<br>我是鬼啊。什么也不怕。',
								'',
								'你在谋划什么？',
								'',
								'紫会被杀掉吧？',
								'',
								'啊，狡猾，太狡猾了！',
								'',
								'和平常一样手段卑鄙啊。',
								'',
								'不过～，就算在大家面前出现，<br>我们不一样还是大家的敌人吗？',
								'那些酒是紫抢来的吧？',
								'',
								'……',
								'',
								'可是我找到了更好的方法。',
								'',
								'全部推说是紫干的好事。',
								'说起来，好像从一开始就是紫干的好事。<br>我要把你和那些酒一起送给她们！',
							'end']
						];
					} else if (game.me.name == 'suika'){
						game.me.storage.reinforce = ['reimu'];
						game.me.storage.dialog = [
							['suika','',
								'差不多游戏该结束了吧。',
								'',
								'真是没想到大家都这么迟钝。',
								'令大家聚集起来举行宴会的就是我。<br>你说的妖雾就是我本身。',
								'',
								'看吧。就算鬼抛弃幻想乡后经过了很久……',
								'没想到真的被完全遗忘了。',
								'',
								'我说谎！？',
								'别开玩笑了！我们鬼不会对人类说谎的。<br>只有人类才会说谎！',
								'',
								'哎呀嘛，一点点还是会说的。',
								'但是，讨厌说谎是真的。<br>你是不爱骗人的人类吧。',
								'你们的事我很清楚哦，<br>因为一直看着呢。',
								'你无论在宴会还是在其他时候……<br>都正直得像空气一样难以捉摸。',
								'到底你都在想什么呢？',
								'',
								'很好啊。把胜利让给正直的人好像也不错。',
								'不过在那之前，对你能来到这里，<br>有必要表示一下敬意。',
								'',
								'来吧，从幻想乡消失了的鬼之力，聚集之力——',
								'渗进你的体内，唤醒人类身上附着的太古的记忆吧！',
							'end'],
							['reimu','是你吧！放出这些妖雾的家伙！',
								'',
								'一上来就那么软弱呢。<br>算了，你就是犯人吧？',
								'',
								'宴会？<br>宴会和妖雾有什么关系吗？',
								'',
								'鬼？鬼什么的早就不存在了。<br>用那样的谎话来骗人是没用的。',
								'',
								'真的？',
								'',
								'什么也没有想啊。<br>关于说谎是不是有什么讨厌的回忆呢……。',
								'先不管那些，不稍微惩罚一下你是不行的了。',
								'',
								'那还真是客气。',
								'但是好像觉得怪怪的。',
							'']
						];
					}
					game.me.removeSkill('ftg_suimu7');
					ui.background.setBackgroundImage('image/background/ftg_suika.png');
					game.resetSkills();
					_status.paused=false;
					_status.event.player=game.me;
					_status.event.step=0;
					_status.roundStart=game.me;
					lib.config.currentMusic = 40;
					ui.backgroundMusic.play();
					//game.phaseNumber=0;
					//game.roundNumber=0;
					if(game.bossinfo){
						game.bossinfo.loopType=1;
					}
				}
			},
			suimu_win:{			//飞虎：为啥没发动
				trigger:{player:'dieBefore'},
				direct:true,
				filter:function(event, player){
					if(player!=game.boss)return false;
					return game.me.storage&&(
						(game.me.storage.fuhuo==0&&((game.me.name!="suika"&&game.boss.name!="suika")
													||(game.me.name=="suika"&&game.boss.name!="reimu")))
						||(game.me.storage.fuhuo>0&&((game.me.name!="suika"&&game.boss.name=="suika")
													||(game.me.name=="suika"&&game.boss.name=="reimu")))
					);
				},
				content:function(){
					game.boss.hide();
					var clear=function(){
							ui.dialog.close();
							while(ui.controls.length) ui.controls[0].close();
					};
					var clear2=function(){
						ui.auto.show();
						ui.arena.classList.remove('only_dialog');
					};
					var step1=function(){
						ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">就这样，红雾异变的黑幕被击退了。没过几天，红雾就从幻想乡彻底的散去了。恭喜你闯关成功！');
						ui.create.div('.avatar',ui.dialog).setBackground('akyuu','character');
						ui.create.control('呼……累死人了',step3);
					}
					var step3=function(){
						clear();
						if (lib.config.gameRecord.ftg && lib.config.gameRecord.ftg.data['stg_scarlet'] && lib.config.gameRecord.ftg.data['stg_scarlet'][0] > 1){
							step5();
						} else {
							ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">总之呢，作为通关奖励解锁了在其他模式中使用蕾米莉亚（神枪符卡）和带了五本魔导书的魔导书架。这些可以在左上角[扩展]打开或关闭。</div></div><div><div style="width:260px;margin-left:120px;font-size:8px">将联机昵称改为“路人”可以不通关也解锁这些角色哟。</div></div>');
							ui.create.div('.avatar',ui.dialog).setBackground('akyuu','character');
							ui.create.control('不错不错',step4);
						}
					};
					var step4=function(){
						clear();
						ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">还会继续更新更多关卡的。下次再见？</div></div>');
						ui.create.div('.avatar',ui.dialog).setBackground('akyuu','character');
						ui.create.control('下次再见！',step6);
					};
					var step5=function(){
						clear();
						ui.create.dialog('<div><div style="width:260px;margin-left:120px;font-size:18px">下次欺负蕾米的时候轻一点啊人家也是很累的。</div></div>');
						ui.create.div('.avatar',ui.dialog).setBackground('akyuu','character');
						ui.create.control('哎，好吧',step6);
					};
					var step6=function(){
						clear();
						clear2();
						game.resume();
					};
					game.pause();
					step1();
					//if(lib.config.gameRecord.ftg.data["Th7_5"][4]){
						var data5=0,record = lib.config.gameRecord.ftg;
						if(game.me.name=="reimu"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%64) < 32)data5=32;
						else if(game.me.name=="marisa"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%32) < 16)data5=16;
						else if(game.me.name=="sakuya"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%4) < 2)data5=2;
						else if(game.me.name=="patchouli"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%8) < 4)data5=4;
						else if(game.me.name=="alice"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%2) < 1)data5=1;
						else if(game.me.name=="youmu"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%16) < 8)data5=8;
						else if(game.me.name=="remilia"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%128) < 64)data5=64;
						else if(game.me.name=="yuyuko"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%254) < 128)data5=128;
						else if(game.me.name=="yukari"&&record && record.data['Th7_5'] && (record.data['Th7_5'][4]%512) < 254)data5=254;
						else if(game.me.name=="suika"&&record && record.data['Th7_5'] && record.data['Th7_5'][4] < 512)data5=512;
						lib.config.gameRecord.ftg.data["Th7_5"][4]+=data5;
					//}
				}
			},
			ftg_hisou:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				fixed:true,
				content:function(){
					"step 0"
					//ui.arena.setNumber(8);
					player.hide();
					game.addVideo('hidePlayer',player);
					player.delete();
					game.players.remove(player);
					game.dead.remove(player);
					event.target = game.me;
					game.triggerEnter(game.me);
				},
			},
			ftg_tensoku:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				fixed:true,
				content:function(){
					"step 0"
					//ui.arena.setNumber(8);
					player.hide();
					game.addVideo('hidePlayer',player);
					player.delete();
					game.players.remove(player);
					game.dead.remove(player);
					event.target = game.me;
					game.triggerEnter(game.me);
				},
			},
			ftg_shinki:{},
			ftg_shinpi:{},
			ftg_hyoui:{},
			//绯想天对决模式
			ftg_hisou_free:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
					var chars = lib.forbidftg.Th10_5_free.contains(game.me.name)?lib.forbidftg.Th10_5_free.remove(game.me.name):lib.forbidftg.Th10_5_free;
					player.init(chars.randomGet());
					game.playerMap[player.getPos()]=player;
					event.target = game.me;
					player.removeSkill("ftg_hisou_free");
					game.triggerEnter(game.me);
				},
			},
			//非想天则对决模式
			ftg_tensoku_free:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
					var chars = lib.forbidftg.Th12_3_free.contains(game.me.name)?lib.forbidftg.Th12_3_free.remove(game.me.name):lib.forbidftg.Th12_3_free;
					player.init(chars.randomGet());
					game.playerMap[player.getPos()]=player;
					event.target = game.me;
					player.removeSkill("ftg_tensoku_free");
					game.triggerEnter(game.me);
				},
			},
			//心绮楼对决模式
			ftg_shinki_free:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
					get.distance=function(from,to,method){			//飞虎：格斗距离
						if(from==to) return 0;
						if(!game.players.contains(from)&&!game.dead.contains(from)) return Infinity;
						if(!game.players.contains(to)&&!game.dead.contains(to)) return Infinity;
						var player=from,m,n=1,i;
						var length=game.players.length;
						//if(player.isAlive()&&!player.isOut()&&!player.hasSkill('undist')) 
						if(method=='absolute') return n;
						n=Math.abs(from.dataset.position-to.dataset.position);//Math.min(n,length-n);
						if(method=='raw'||method=='pure') return n;

						n=game.checkMod(from,to,n,'globalFrom',from);
						n=game.checkMod(from,to,n,'globalTo',to);
						m=n;
						m=game.checkMod(from,to,m,'attackFrom',from);
						m=game.checkMod(from,to,m,'attackTo',to);
						var equips1=from.getCards('e'),equips2=to.getCards('e');
						for(i=0;i<equips1.length;i++){
							var info=get.info(equips1[i]).distance;
							if(!info) continue;
							if(info.globalFrom){
								m+=info.globalFrom;
								n+=info.globalFrom;
							}
							if(info.attackFrom){
								m+=info.attackFrom;
							}
						}
						for(i=0;i<equips2.length;i++){
							var info=get.info(equips2[i]).distance;
							if(!info) continue;
							if(info.globalTo){
								m+=info.globalTo;
								n+=info.globalTo;
							}
							if(info.attaclTo){
								m+=info.attaclTo;
							}
						}
						// 灵力值等于攻击范围！烦死了！
						m-=(from.lili-1);

						if(method=='attack') return m;
						return n;
					};
					"step 1"
					var chars = lib.forbidftg.Th13_5_free.contains(game.me.name)?lib.forbidftg.Th13_5_free.remove(game.me.name):lib.forbidftg.Th10_5_free;
					player.init(chars.randomGet());
					game.playerMap[player.getPos()]=player;
					event.target = game.me;
					player.removeSkill("ftg_shinki_free");
				},
			},
			//深秘录对决模式
			ftg_shinpi_free:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
					get.distance=function(from,to,method){
						if(from==to) return 0;
						if(!game.players.contains(from)&&!game.dead.contains(from)) return Infinity;
						if(!game.players.contains(to)&&!game.dead.contains(to)) return Infinity;
						var player=from,m,n=1,i;
						var length=game.players.length;
						//if(player.isAlive()&&!player.isOut()&&!player.hasSkill('undist')) 
						if(method=='absolute') return n;
						n=Math.abs(from.dataset.position-to.dataset.position);//Math.min(n,length-n);
						if(method=='raw'||method=='pure') return n;

						n=game.checkMod(from,to,n,'globalFrom',from);
						n=game.checkMod(from,to,n,'globalTo',to);
						m=n;
						m=game.checkMod(from,to,m,'attackFrom',from);
						m=game.checkMod(from,to,m,'attackTo',to);
						var equips1=from.getCards('e'),equips2=to.getCards('e');
						for(i=0;i<equips1.length;i++){
							var info=get.info(equips1[i]).distance;
							if(!info) continue;
							if(info.globalFrom){
								m+=info.globalFrom;
								n+=info.globalFrom;
							}
							if(info.attackFrom){
								m+=info.attackFrom;
							}
						}
						for(i=0;i<equips2.length;i++){
							var info=get.info(equips2[i]).distance;
							if(!info) continue;
							if(info.globalTo){
								m+=info.globalTo;
								n+=info.globalTo;
							}
							if(info.attaclTo){
								m+=info.attaclTo;
							}
						}

						if(method=='attack') return m;
						return n;
					};
					delete lib.skill._move.usable;
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						var card = ui.cardPile.childNodes[i];
						if(card.name=="sha"){
							var str = "1";
							if(card.node.name.innerHTML=="爆轰！")str = "2";
							if(card.node.name.innerHTML=="神薙轰！")str = "2~3";
							card.node.range.innerHTML+="<br>范围："+str;
						}
						if(card.name=="shunshou"){
							card.node.range.innerHTML+="<br>距离：1";
						}
					}
					lib.translate.guohe_info='出牌阶段，对一名角色使用；弃置其区域内的一张牌。</br><u>强化(-1)：再弃置其一张装备或技能牌。</u>';
					delete lib.card.guohe.range;
					"step 1"
					var chars = lib.forbidftg.Th14_5_free.contains(game.me.name)?lib.forbidftg.Th14_5_free.remove(game.me.name):lib.forbidftg.Th14_5_free;
					player.init(chars.randomGet());
					game.playerMap[player.getPos()]=player;
					event.target = game.me;
					player.removeSkill("ftg_shinpi_free");
				},
			},
			//凭依华对决模式
			ftg_hyoui_free:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
					get.distance=function(from,to,method){
						if(from==to) return 0;
						if(!game.players.contains(from)&&!game.dead.contains(from)) return Infinity;
						if(!game.players.contains(to)&&!game.dead.contains(to)) return Infinity;
						var player=from,m,n=1,i;
						var length=game.players.length;
						//if(player.isAlive()&&!player.isOut()&&!player.hasSkill('undist')) 
						if(method=='absolute') return n;
						n=Math.abs(from.dataset.position-to.dataset.position);//Math.min(n,length-n);
						if(method=='raw'||method=='pure') return n;

						n=game.checkMod(from,to,n,'globalFrom',from);
						n=game.checkMod(from,to,n,'globalTo',to);
						m=n;
						m=game.checkMod(from,to,m,'attackFrom',from);
						m=game.checkMod(from,to,m,'attackTo',to);
						var equips1=from.getCards('e'),equips2=to.getCards('e');
						for(i=0;i<equips1.length;i++){
							var info=get.info(equips1[i]).distance;
							if(!info) continue;
							if(info.globalFrom){
								m+=info.globalFrom;
								n+=info.globalFrom;
							}
							if(info.attackFrom){
								m+=info.attackFrom;
							}
						}
						for(i=0;i<equips2.length;i++){
							var info=get.info(equips2[i]).distance;
							if(!info) continue;
							if(info.globalTo){
								m+=info.globalTo;
								n+=info.globalTo;
							}
							if(info.attaclTo){
								m+=info.attaclTo;
							}
						}

						if(method=='attack') return m;
						return n;
					};
					delete lib.skill._move.usable;
					for(var i=0;i<ui.cardPile.childElementCount;i++){
						var card = ui.cardPile.childNodes[i];
						if(card.name=="sha"){
							var str = "1";
							if(card.node.name.innerHTML=="爆轰！")str = "2";
							if(card.node.name.innerHTML=="神薙轰！")str = "2~3";
							card.node.range.innerHTML+="<br>范围："+str;
						}
						if(card.name=="shunshou"){
							card.node.range.innerHTML+="<br>距离：1";
						}
					}
					lib.translate.sha_info='出牌阶段，对一名范围1的角色使用；对目标造成1点弹幕伤害。';
					lib.translate.huosha_info='出牌阶段，对一名范围2的角色使用；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。';
					lib.translate.leisha_info='出牌阶段，你弃置你场上一张牌，对一名距离2~3的角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。';
					lib.translate.guohe_info='出牌阶段，对一名距离1~2的角色使用；弃置其区域内的一张牌。</br><u>强化(-1)：再弃置其一张装备或技能牌。</u>';
					lib.translate.juedou_info='出牌阶段，对一名距离1的角色使用：由目标开始，其与你轮流打出一张【轰！】，直到其中一方未打出【轰！】为止。未打出【轰！】的一方受到另一方对其造成的1点弹幕伤害。';
					lib.translate.shunshou_info='出牌阶段，对一名距离1的角色使用：获得其区域内的一张牌。';
					lib.translate.lebu_info='出牌阶段，对一名距离1的其他角色使用：目标角色进行一次判定，若结果不为红色，其跳过其下个出牌阶段。';
					lib.translate.royal2_info='出牌阶段，对所有距离2的其他角色使用：目标各打出一张【轰！】/受到你造成的1点弹幕伤害。';
					lib.translate.shuiyanqijunx_info='出牌阶段，对一名距离1的其他角色使用：目标弃置装备区内所有牌/受到你对其造成的1点弹幕伤害。';
					lib.translate.kuabu_info='出牌阶段，对你使用：目标本回合获得3点移动力。';
					lib.card.sha.cardPrompt=function(card){
						if(card.nature=='fire') return '出牌阶段，对一名范围2的角色使用；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。';
						if(card.nature=='thunder') return '出牌阶段，你弃置你场上一张牌，对一名距离2~3的角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。';
						//if(lib.linked.contains(card.nature)) return '出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，否则你对其造成1点'+get.translation(card.nature)+'属性伤害。';
						return '出牌阶段，对一名范围1的角色使用；对目标造成1点弹幕伤害。';
					};
					lib.card.guohe.range={attack:2};
					lib.card.juedou.range={global:1};
					lib.card.shunshou.range={global:1};
					delete lib.card.shunshou.outrange;
					lib.card.lebu.range={global:1};
					lib.card.royal2.range={global:[2,2]};
					lib.card.shuiyanqijunx.range={global:1};
					"step 1"
					var chars = lib.forbidftg.Th15_5_free.contains(game.me.name)?lib.forbidftg.Th15_5_free.remove(game.me.name):lib.forbidftg.Th15_5_free;
					player.init(chars.randomGet());
					game.playerMap[player.getPos()]=player;
					event.target = game.me;
					player.removeSkill("ftg_hyoui_free");
				},
			},
			ftg_UBW:{
				trigger:{global:'gameStart'},
				forced:true,
				popup:false,
				unique:true,
				//fixed:true,
				content:function(){
					"step 0"
				}
			},
			
			RadialStrike_skill:{},
			DancingStar_skill:{},
			SPDoll_skill:{},
			MediumBind_skill:{},
			LifeDeath_skill:{},
			VampireClaw_skill:{},
			GatheringOni_skill:{},
			BahamutWrath_skill:{},
			SkySummon_skill:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:function(card){
					return get.color(card)=="red";
				},
				selectCard:1,
				prompt:'弃置红色牌执行一项【轰！】相关效果',
				check:function(card){
					return 6-get.value(card)
				},
				content:function(){
					"step 0"
					var list = ["使用","次数"];
					if(!player.countUsed("jiu"))list.push("增伤");
					player.chooseControl(list).set("choiceList",["视为使用一张【轰！】","本回合可以额外使用一张【轰！】","视为使用一张【坏苹果】"]);
					"step 1"
					if(result.control=="使用"){
						player.chooseUseTarget({name:"sha"});
					}
					if(result.control=="次数"){
						if(!target.storage.huibi)target.storage.huibi=0;
						target.storage.huibi++;
						player.addTempSkill("huibi_skill");
					}
					if(result.control=="增伤"){
						player.useCard({name:"jiu"},player);
					}
				},
				ai:{
					order:1,
					result:{
						player:1
					},
					threaten:1.5
				},
			},
			EarthSummon_skill:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				position:'he',
				filterCard:function(card){
					return get.color(card)=="black";
				},
				selectCard:1,
				prompt:'弃置黑色牌执行一项效果',
				check:function(card){
					return 6-get.value(card)
				},
				content:function(){
					"step 0"
					player.chooseControl("偷牌","屯牌").set("choiceList",["视为使用一张【顺手牵羊】","摸两张牌，然后结束出牌阶段并跳过弃牌阶段"]);
					"step 1"
					if(result.control=="偷牌"){
						player.chooseUseTarget({name:"shunshou"});
					}
					if(result.control=="屯牌"){
						var evt=_status.event.getParent('phaseUse');
						if(evt&&evt.name=='phaseUse'){
							evt.skipped=true;
						}
						player.skip("phaseDiscard");
					}
				},
				ai:{
					order:1,
					result:{
						player:1
					},
					threaten:1.5
				},
			},
			FrostPillars_skill:{},
			TigerChiRelease_skill:{},
			/////////////////////////////// 这里开始是正经的角色技能 ////////////////////////////////////////////////////
			royal1:{			//飞虎：stg模式经常加载不了，要手撸一遍吗，太怪了
				audio:2,
				forced:true,
				trigger:{player:'phaseBegin'},
				content:function(){
					"step 0"
					event.current=player.next;
					event.players=game.filterPlayer().remove(player);
					player.line(event.players,'fire');
					"step 1"
						var next=event.current.chooseToRespond({name:'sha'});
						next.set('ai',function(card){
							var evt=_status.event.getParent();
							if(get.damageEffect(evt.target,evt.player,evt.target)>=0) return 0;
							return 11-get.value(card);
						});
						next.autochoose=lib.filter.autoRespondSha;
						"step 2"
						if(result.bool==false){
							event.current.damage();
						}
					if(event.current.next!=player){
						event.current=event.current.next;
						game.delay(0.5);
						event.goto(1);
					}
				},
			},
		},
		forbidftg:{
			Th7_5:['reimu','marisa','sakuya','alice','patchouli','youmu'/*,'remilia','yuyuko','yukari','suika'*/],
			Th10_5:['reimu','marisa','sakuya'/*,'alice','patchouli','youmu','remilia','yuyuko','yukari','suika','reisen','aya','komachi','iku','tenshi'*/],
			Th12_3:[/*'suika','yukari','yuyuko','remilia','youmu','patchouli','alice','marisa','reimu',*/'sanae'/*,'cirno','meiling','utsuho','suwako','reisen','aya','komachi','iku','tenshi'*/],
			Th13_5:['reimu','marisa'],
			Th14_5:['reimu','marisa'],
			Th15_5:['reimu','marisa','yukari'],
			Th7_5_free:['reimu','marisa','sakuya','alice','patchouli','youmu'/*,'remilia','yuyuko','yukari','suika','meiling'*/],
			Th10_5_free:['reimu','marisa','sakuya','alice','patchouli','youmu','remilia','yuyuko','yukari','suika','reisen','aya','komachi'/*,'iku','tenshi'*/],
			Th12_3_free:[/*'suika','yukari','yuyuko','remilia','youmu','patchouli','alice',*/'marisa','reimu','sanae','cirno','meiling'/*,'utsuho','suwako','reisen','aya','komachi','iku','tenshi'*/],
			Th13_5_free:['reimu','marisa'/*,'ichirin','byakuren','mononobe','toyosatomimi','nitori','koishi','mamizou'*/],
			Th14_5_free:['reimu','marisa'/*,'kasen','ichirin','byakuren','mononobe','toyosatomimi','mokou','shinmyoumaru','nitori','koishi','mamizou','kokoro','sumireko','reisen'*/],
			Th15_5_free:['reimu','marisa','yukari'/*,'kasen','ichirin','byakuren','mononobe','toyosatomimi'*/,'mokou','shinmyoumaru'/*,'nitori','koishi','mamizou','kokoro','sumireko'*/,'reisen','tenshi'],
			fateUC_free:['bazett','medusa','heracles','saber_lily','fate_archer','medea','gilgamesh','luviagelita',/*'saber',*/'HF_sakura','scathach','kuro',/*'zero_lancer',*/'fate_rin','jack_rapper','kirei'/*,'leysritt'*/],
			//飞虎：计划用saberlily代替普通saber，saber代替黑saber，小黑代替士郎，斯卡哈代替lancer，最开始是想用妖梦代替冲田总司顶掉小次郎登场，最后还是考虑用开膛手杰克代替小次郎，其他的都要重新设计了
		},
		translate:{
			mode_ftg_card_config:'FTG卡牌',
			mode_ftg_character_config:'FTG角色',
			zhu:'BOSS',
			zhu2:'BOSS',
			zhu_win:'<u>胜利条件：</u>那个该死的自机快点坠机',
			zhu_lose:'<u>失败条件：</u>最终的黑幕坠机',
			cai:'自',
			cai2:'自',
			cai_win:'<u>胜利条件：</u>最终关的BOSS，最大的黑幕坠机！',
			cai_lose:'<u>失败条件：</u>你坠机',
			zhong:'从',
			zhong2:'从',
			Th7_5:'东方萃梦想',
			Th10_5:'东方绯想天',
			Th12_3:'东方非想天则',
			Th13_5:'东方心绮楼',
			Th14_5:'东方深秘录',
			Th15_5:'东方凭依华',
			Th7_5_free:'萃梦想对战',
			Th10_5_free:'绯想天对战',
			Th12_3_free:'非想天则对战',
			Th13_5_free:'心绮楼对战',
			Th14_5_free:'深秘录对战',
			Th15_5_free:'凭依华对战',
			
			ftg_suimu:'东方萃梦想',
			ftg_suimu_info:'因为弥漫的妖气幻想乡连续开启了多场宴会，在三天后的下次宴会开启前找到这次异变的元凶吧！ <br>\
			<br> 关卡数：7 <br>\
			<br> 关卡机制：无	  每击败一名角色可以摸两张牌或回复1点体力<br>\
			<br> 特殊规则：①每击败一名角色可以摸两张牌或回复1点体力\
			<br>		   ②通关后，按顺序解锁五个角色的选将框。',
			ftg_hisou:'东方绯想天',
			ftg_hisou_info:'仅发生在单个人身边的异常气象交织，最终导致足以摧毁幻想乡地标建筑——博丽神社的大地震，但似乎博丽巫女并没有出山的意图？ <br>\
			<br> 关卡数：6 <br>\
			<br> 关卡机制：①所有技能卡均被替换成特殊天气；\
			<br>		   ②每击败一名角色可以摸两张牌或回复1点体力。<br>\
			<br> 特殊规则：①角色的符卡被替换成等同于灵力上限的多张符卡；\
			<br>		   ②通关后，将所有角色加入《非想天则对战》的选将框。<br>\
			<br> 卡牌修改：取消【疾风骤雨】的使用距离限制。',
			ftg_tensoku:'东方非想天则',
			ftg_tensoku_info:'伴随着晨雾而遮挡阳光的巨大人形，不会又引发一场异变吧……<br>\
			<br> 关卡数：5 <br>\
			<br> 关卡机制：①继承《东方绯想天》的机制；\
			<br>		   ②符卡替换为特定条件的连招技<br>\
			<br> 特殊规则：通关后，按顺序解锁两个角色的选将框，并解锁《非想天则对战》的额外选将框。<br>\
			<br> 卡牌修改：\
			<br>①。',
			ftg_shinki:'东方心绮楼',
			ftg_shinpi:'东方深秘录',
			ftg_hyoui:'东方凭依华',
			ftg_shinki_free:'心绮楼对战',
			ftg_shinki_free_info:'东方心绮楼的对决模式<br>\
			<br> 关卡机制：①摸牌阶段的摸牌数+1，然后弃置一张手牌，根据弃置的牌的颜色获得移动力：黑色~1点；红色~3点；\
			<br>		   ②一回合一次，可以移动至多移动力上限的格子；\
			<br>		   ③每击败一名角色可以摸两张牌或回复1点体力。<br>\
			<br> 特殊规则：。<br>\
			<br> 卡牌修改：加入【神行】【缩地】【灵崩】【瞬身】移动相关的卡，\
			并将【蓬莱玉枝】【例大祭】【赛钱箱】【突击采访】【凤蝶纹扇】【冰冻青蛙】【替身人形】【冈格尼尔】【八卦炉】【白楼剑】\
			替换为爆【轰！】【坏苹果】【皇家烈焰】【恐怖催眠】【碎月击】。',
			ftg_shinpi_free:'深秘录对战',
			ftg_shinpi_free_info:'东方深秘录的对决模式<br>\
			<br> 关卡机制：①继承《东方心绮楼》的移动机制和牌堆修改；\
			<br>		   ②灵力不再提供攻击范围；\
			<br>		   ③基础移动一回合一次改为可以多次直至本回合的移动力上限；\
			<br>		   ④每击败一名角色可以摸两张牌或回复1点体力。<br>\
			<br> 特殊规则：。<br>\
			<br> 卡牌修改：取消【疾风骤雨】的使用距离限制。',
			ftg_hyoui_free:'凭依华对战',
			ftg_hyoui_free_info:'东方凭依华的对决模式<br>\
			<br> 关卡机制：①继承《东方深秘录》的机制；\
			<br>		   ②大部分卡牌效果修改<br>\
			<br> 特殊规则：。<br>\
			<br> 卡牌修改：\
			<br>①【轰！】的使用距离变为1，爆【轰！】的使用距离变为2；\
			<br>②【葱】替换为神薙【轰！】且使用距离变为2~3；\
			<br>③【坏苹果】变为法术牌；\
			<br>④【疾风骤雨】使用距离变为1~2；\
			<br>⑤【决斗】使用距离变为1；\
			<br>⑥【顺手牵羊】使用距离变为1；\
			<br>⑦【恐怖催眠】使用距离变为1；\
			<br>⑧【皇家烈焰】变为法术/攻击牌且使用距离变为2；\
			<br>⑨是笨蛋；\
			<br>⑩【碎月击】使用距离变为1；\
			<br>⑪【神行】改为获得3点移动力\
			<br>⑫牌堆中所有装备牌替换为【凭依】。',

			huosha:'爆轰',
			huosha_info:'出牌阶段，对距离为2~X的一名角色使用（X为攻击范围+1）；对目标造成2点弹幕伤害，目标可以弃置一张【轰！】抵消1点伤害。',
			leisha:'神薙轰',
			leisha_info:'出牌阶段，你弃置你场上一张牌，对距离2~3的一名角色使用；对目标各造成X-1点弹幕伤害和1点灵击伤害（X为目标的距离）。',
			jiu:'坏苹果',
			jiu_info:'出牌阶段，对你使用：目标本回合下一张【轰！】造成的伤害+1。\
			<br><u>追加效果：你决死时，对你使用：改为目标回复1点体力。</u>',
			royal2:'皇家烈焰',
			royal2_info:'出牌阶段，对所有其他角色使用：目标各打出一张【轰！】/受到你造成的1点弹幕伤害。',
			lebu:'恐怖催眠',
			lebu_info:'出牌阶段，对一名其他角色使用：目标角色进行一次判定，若结果不为红色，其跳过其下个出牌阶段。',
			shuiyanqijunx:'碎月击',
			shuiyanqijunx_info:'出牌阶段，对一名其他角色使用：目标弃置装备区内所有牌/受到你对其造成的1点弹幕伤害。',
			jinchan:'抱头蹲防',
			jinchan_info:'你成为其他角色使用基本牌或法术牌的目标后，若你有手牌且均为同一卡名，对此牌使用：此牌的使用者摸一张牌，抵消此牌对目标的效果。\
			<br><u>追加效果：你因使用而失去此牌时，你摸一张牌。</u>',
			suijiyingbian:'咕咕咕',
			suijiyingbian_info:'此牌需当你本回合内使用/打出的上一张基本牌或法术牌使用/打出。\
			<br><u>追加效果：此牌因失去或判定而进入弃牌堆时，当前回合角色失去1点体力。</u>',
			suijiyingbian_skill:'转化【咕咕咕】',
			kuabu:'神行',
			//kuabu_info:'出牌阶段，对你使用：目标获得2点灵力，然后若此时为目标的出牌阶段，结束此阶段。',
			//kuabu_info:'出牌阶段，对你使用：目标本回合获得3点移动力。',
			kuabu_info:'出牌阶段，对你使用：目标进行一次至多三格的移动。',
			houtiao:'缩地',
			//houtiao_info:'你成为非装备牌的目标后，对你使用：另外的角色本回合与目标的距离+1，然后若那张牌的使用者不能使用同一张牌指定此时的目标角色，则该牌对目标角色无效。',
			houtiao_info:'你成为非装备牌的目标后，对你使用：目标移动一格，然后若那张牌的使用者不能使用同一张牌指定此时的目标角色，则该牌对目标角色无效。',
			wuzhuang:'凭依',
			wuzhuang_info:'出牌阶段，对你使用：目标发现一张专属装备。',
			jitui:'灵崩',//'慑退',
			//jitui_info:'出牌阶段，对一名其他角色使用：目标角色按远离你的方向移动，直至其后退两格，若无法后退两步，你对其造成1点弹幕伤害。',
			jitui_info:'出牌阶段，对一名其他角色使用：目标角色按远离你的方向移动两格，若后退不足两格，你对其造成1点弹幕伤害。',
			touxi:'瞬身',
			//touxi_info:'出牌阶段，对一名其他角色使用：你按接近目标角色方向移动，直至经过距离最远的目标，你本回合对所有以此法经过的角色使用的下一张【轰！】无法被【躲~】响应。',
			touxi_info:'出牌阶段，对一名你能经过的其他角色使用：你按接近目标角色方向移动X+1格（X为你与其的距离），你本回合对以此法经过的角色使用的下一张【轰！】无法被【躲~】响应。',
			stg_mingyun:'打牌技术',
			stg_mingyun_info:'你于摸牌阶段摸到此牌时，对你使用；目标观看牌堆，获得其中一张牌。<br><u>追加效果：一张判定牌生效前，你可以打出此牌替换之。</u>',
			
			SpreadAmulet:'扩散护符',
			SpreadAmulet_info:'【轰！】的一种，此【轰！】造成伤害时，你选择一项：对目标造成1点灵击伤害；或弃置其一张牌。',
			AscensionKick:'升天脚',
			AscensionKick_info:'出牌阶段，对一名其他角色使用，你判定，若结果为红色，你对目标造成1点弹幕伤害。',
			PermanentBorder_shan:'常置阵',
			PermanentBorder_shan_info:'如【躲～】般抵消【轰！】的效果，本回合【升天脚】生效时不判定，执行判定成功后的效果。',
			DemonSealing:'封魔亚空穴',
			DemonSealing_info:'【轰！】的一种，你可以无视限制使用此【轰！】且不计入次数，此【轰！】进入弃牌堆时，可以弃置一张【扩散护符】，将此【轰！】收回手牌。',
			
			BoskySweeper:'街头卖艺的扫除者',
			BoskySweeper_info:'【轰！】的一种，此【轰！】造成伤害时，若你的手牌多于体力值，你可以弃置两张牌令伤害+1。',
			GreenSpread:'绿之蔓延',
			GreenSpread_info:'出牌阶段，对一名其他角色使用：目标选择一项：弃置一张【轰！】；或你视为对其使用一张不计入次数的【轰！】。',
			ReusableBomb:'魔法废物再利用炸弹',
			ReusableBomb_info:'你使用【顺手牵羊】结算完毕后，若此次结算中未使用过牌，对相同的目标使用：你对目标造成1点伤害。',
			RadialStrike:'辐射强袭',
			RadialStrike_info:'锁定技，当你使用【顺手牵羊】时，目标需展示手牌直至回合结束。',
			
			PerfectMaid:'完美女仆',
			PerfectMaid_info:'【轰！】的一种，若你本回合抵消过目标角色的牌，此【轰！】造成的伤害+1。',
			Misdirection:'错误引导',
			Misdirection_info:'【轰！】的一种，你可以对灵力不少于你的角色无视限制使用此【轰！】且不计入次数。',
			ThrownEdge:'离剑之见',
			ThrownEdge_info:'其他角色获得灵力时，对你使用：目标代替该角色获得灵力，',
			DancingStar:'舞星剑',
			DancingStar_info:'锁定技，出牌阶段结束时，若你没有灵力，你获得1点灵力。',
			
			VolatileDoll_shan:'人形无操',
			VolatileDoll_shan_info:'如【躲～】般抵消【轰！】的效果，你成为【轰！】的目标后，若此牌在“手办”中，对那张【轰！】使用：该【轰！】对你无效，然后你选择一项：摸两张牌；或对该【轰！】的使用者造成1点伤害。',
			DollAmbush:'人形伏兵',
			DollAmbush_info:'【请你住口】的一种，一名角色或一张牌成为法术牌的目标后，若此牌在“手办”中，对那张牌使用：抵消该牌对一个目标的效果，然后你选择一项：摸两张牌；或对该法术的使用者造成1点伤害。',
			DollArchers:'人形弓兵',
			DollArchers_info:'【轰！】的一种，若直到游戏开始或上回合结束，你于回合外受到过伤害，则此【轰！】不能使用牌响应。',
			SPDoll:'人形SP',
			SPDoll_info:'你每放置一个手办获得1点灵力。',
			
			FallSlasher:'落叶强袭者',
			FallSlasher_info:'出牌阶段，对你使用：目标可以视为使用一张【轰！】，若当前回合角色已跳过本回合出牌阶段，此【轰！】不能使用牌响应。',
			SummerFlame:'夏日烈焰',
			SummerFlame_info:'出牌阶段，对一名其他角色使用：目标打出一张【轰！】/受到你造成的1点弹幕伤害。',
			DiamondHardness_shan:'钻石之坚',
			DiamondHardness_shan_info:'如【躲～】般抵消【轰！】的效果，与该【轰！】的使用者拼点，若你赢，你将此牌收回手牌。',
			CondensedBubble:'黏性气泡',
			CondensedBubble_info:'出牌阶段，对一名其他角色使用：你摸一张牌，若你已跳过本回合出牌阶段，目标跳过下个出牌阶段。',
			SpringWind:'春之微风',
			SpringWind_info:'出牌阶段，对一名其他角色使用：你弃置目标一张牌，然后若目标已跳过下个出牌阶段，你可以摸三张牌令其复原。',
			
			MediumBind:'凭坐之缚',
			MediumBind_info:'锁定技，出牌阶段，你可以多使用一张【轰！】。当你使用每回合的第二张【轰！】时，你可以摸一张牌。',
			LifeDeath:'生死流转斩',
			LifeDeath_info:'出牌阶段，对一名角色使用：当前回合角色摸一张牌，你本回合使用的下一张牌结算完毕后，你将之收回手牌。然后若你本回合对目标使用过【轰！】，你弃置其一张牌。',
			CrescentMoon:'弦月斩',
			CrescentMoon_info:'【轰！】的一种，若此【轰！】为你本回合使用的第一张牌，目标跳过下个出牌阶段，然后结束你的出牌阶段。',
			NetherReflection_shan:'反射下界斩',
			NetherReflection_shan_info:'其他角色使用【轰！】或法术牌时，对你使用：目标视为使用一张相同的牌，然后若此牌与指定你的牌颜色相同，抵消之。',
			
			VampireClaw:'吸血鬼之爪',
			VampireClaw_info:'出牌阶段，对你使用：目标摸一张牌，本回合当前回合角色可以将一张红色手牌当此牌使用，若此时为本回合使用的第三张【吸血鬼之爪】，此牌的效果改为<u>出牌阶段，对一名其他角色使用：你对目标造成1点伤害。</u>',
			ChainGang:'锁链之枷',
			ChainGang_info:'出牌阶段，对你使用：本回合目标使用的下一张【轰！】不能使用牌响应。',
			DemonLordCradle:'魔头之源',
			DemonLordCradle_info:'【轰！】的一种，你可以无视限制使用此【轰！】，若此【轰！】生效则结束你的出牌阶段。',
			DemonLordArrow:'魔头之箭',
			DemonLordArrow_info:'出牌阶段，对你使用：目标摸两张牌，然后弃置一张牌',
			
			GhostlyButterfly:'冥蝶',
			GhostlyButterfly_info:'【轰！】的一种，使用时，你可以将一张手牌扣置于角色牌旁，在对手响应或造成伤害时翻开此牌并弃置：若为蓝色，此牌不能被响应；若为红色，此伤害+1。',
			
			ManjiParasol:'幻想卍伞',
			ManjiParasol_info:'【轰！】的一种，此【轰！】结算完毕后或被抵消后，你可以消耗1点灵力将之收回手牌。',
			ChangesEye:'静观其变之眼',
			ChangesEye_info:'出牌阶段，对你使用：你摸一张牌，然后若此时为本回合使用的第二张【静观其变之眼】，此牌的效果改为<u>出牌阶段，对一名其他角色使用：你对目标造成1点伤害。</u>',
			BewitchingBait:'魅惑的诱饵',
			BewitchingBait_info:'【轰！】的一种，若本回合为第二张【魅惑的诱饵】，则此【轰！】伤害+1。',
			ChimeraWings_shan:'奇美拉之翼',
			ChimeraWings_shan_info:'【请你住口！】的一种，也能如【躲～】般抵消【轰！】的效果，抵消该牌的效果；当前回合角色摸一张牌。',            //其他角色使用【轰！】或法术牌对你生效时
			
			OniSpiritBomb:'元鬼玉',
			OniSpiritBomb_info:'【轰！】的一种，若你的灵力大于目标，你可以消耗1点灵力令此【轰！】的伤害+1。',
			UnpleasantMist:'厌雾',
			UnpleasantMist_info:'出牌阶段，对你使用：目标获得1点灵力，你弃牌堆每有一张【厌雾】，额外获得1点灵力。',
			FireOni:'火鬼',
			FireOni_info:'出牌阶段，对一名其他角色使用：若目标灵力比你多至少2点，你对其造成1点伤害，否则，目标获得1点灵力，你摸两张牌。',
			GatheringOni:'萃鬼',
			GatheringOni_info:'锁定技，出牌阶段开始时，若你没有灵力，你获得1点灵力，若如此做，本回合结束时，你失去1点灵力。',
			
			MindDropping:'意识下沉',
			MindDropping_info:'出牌阶段，对你使用：目标摸一张牌，本回合你可以将所有专属牌当【轰！】使用。',
			UltravioletField_shan:'紫外领域',
			UltravioletField_shan_info:'如【躲～】般抵消【轰！】的效果，若被抵消的牌不是使用者本回合使用的第一张【轰！】，视为对其使用一张【轰！】。',
			DisbeliefAspect:'怀疑维度',
			DisbeliefAspect_info:'【轰！】的一种，你可以对本回合使用过牌的其他角色无视限制使用此【轰！】且不计入次数。',
			EyesightCleaning:'视野净化',
			EyesightCleaning_info:'【请你住口】的一种，若被抵消的牌不是使用者本回合使用的第一张法术，结束当前阶段',
			
			//:'',
			//_info:'你于回合外使用的牌结算完成后，你可以选择一项：视为使用一张【轰！】，然后本回合不能再使用牌；或使用一张【轰！】。若你于回合内未使用过牌，你可以跳过本回合的弃牌阶段。',
			GracefulDash:'疾走优美',
			GracefulDash_info:'出牌阶段，对你使用：将弃牌堆一张牌置于牌堆底。\
			<br><u>追加效果：此牌被弃置时，你视为使用一张不计入次数的【轰！】。</u>',
			TenguDrum:'天狗的太鼓',
			TenguDrum_info:'【轰！】的一种，若你在回合外使用此【轰！】，不能使用牌响应。',
			GustFan_shan:'疾风扇',
			GustFan_shan_info:'【请你住口！】的一种，也能如【躲～】般抵消【轰！】的效果，被抵消牌的使用者可以令你摸一张牌：其将被抵消的牌收回手牌。',          //其他角色使用【轰！】或法术牌对你生效时
			WindSickle_shan:'镰风壁障',
			WindSickle_shan_info:'如【躲～】般抵消【轰！】的效果，你摸一张牌，被抵消牌的使用者本回合可以多出一张【轰！】。',
			
			DracoEye:'龙之眼',
			DracoEye_info:'【轰！】的一种，你判定，若为黑色，此【轰！】造成伤害时，你摸一张牌；若为红色，本回合你可以多使用一张【轰！】；若为专属牌，背水。',
			AbleSwimmer:'水得的龙鱼',
			AbleSwimmer_info:'出牌阶段，对你使用：目标判定，若为黑色，你获得1点灵力；若为红色，你摸一张牌；若为专属牌，背水。\
			<br><u>追加效果：此牌作为判定牌生效后，你将此牌收回手牌。</u>',
			BahamutWrath:'龙神之怒',
			BahamutWrath_info:'出牌阶段限一次，你判定时，你摸两张牌，然后将一张手牌置于牌堆顶。',
			Veils_shan:'天女羽衣',
			Veils_shan_info:'如【躲～】般抵消【轰！】的效果，你判定，若为黑色，选择一项：将此牌收回手牌；或对被抵消牌的使用者造成1点伤害。\
			<br><u>追加效果：此牌作为判定牌生效后，你弃置其他角色一张牌。</u>',
			
			ScarletPerception:'绯想之剑',
			ScarletPerception_info:'你的【轰！】被抵消时，对此【轰！】使用，你将此【轰！】收回手牌，然后你本回合可以多使用一张【轰！】\
			<br><u>追加效果：出牌阶段，对你使用：目标摸一张牌。</u>',
			EarthAwakening:'地精的起床',
			EarthAwakening_info:'你受到伤害后，对伤害来源使用：对目标造成等量伤害。\
			<br><u>追加效果：出牌阶段，对你使用：目标摸一张牌。</u>',
			FateSword:'因果之剑',
			FateSword_info:'【轰！】的一种，若你本回合使用过连招技，此【轰！】伤害+1。\
			<br><u>追加效果：出牌阶段，对你使用：目标摸一张牌。</u>',
			UniversePress:'天地之压',
			UniversePress_info:'你成为【轰！】的目标时使用，令此伤害+1，然后你摸三张牌。\
			<br><u>追加效果：出牌阶段，对你使用：目标摸一张牌。</u>',
			
			SkySummon:'乾神招来',
			SkySummon_info:'此牌进入你的装备区时，你摸一张牌。\
			<br>出牌阶段限一次，你可以弃置一张红色牌，然后你选择一项：视为使用一张【轰！】；或你本回合可以额外使用一张【轰！】；或视为使用一张【坏苹果】。\
			<br>你失去装备区的黑桃牌时，视为使用一张不计入次数的【轰！】。',
			EarthSummon:'坤神招来',
			EarthSummon_info:'此牌进入你的装备区时，你摸一张牌。\
			<br>出牌阶段限一次，你可以弃置一张黑色牌，然后你选择一项：视为使用一张【顺手牵羊】；或摸两张牌，结束出牌阶段然后跳过本回合弃牌阶段；或视为使用了连招技的两个花色。\
			<br>你失去装备区的红桃牌时，视为使用一张不计入次数的【轰！】。',
			
			FrostPillars:'霜之方阵',
			FrostPillars_info:'锁定技，其他角色使用普通【躲~】抵消你的【轰！】时，或你使用普通【躲~】抵消其他角色的【轰！】时，目标选择一项：额外弃置一张手牌；或此【轰！】仍造成伤害。',
			FrozenTechnique:'急冻冷冻法',
			FrozenTechnique_info:'【轰！】的一种，目标选择一项：弃置一张方片牌；或此【轰！】伤害+1。',
			FreezeTouchMe:'触即冻伤',
			FreezeTouchMe_info:'【轰！】的一种，此【轰！】造成伤害时，你将手牌数补至与目标相同。',
			IceKick_shan:'冰踢',
			IceKick_shan_info:'如【躲～】般抵消【轰！】的效果，你可以使用一张【轰！】。',
			
			WaterTaichiFist_shan:'水形太极拳',
			WaterTaichiFist_shan_info:'【轰！】的一种。也能如【躲～】般抵消【轰！】的效果。',
			//<br><u>追加效果：出牌阶段，对攻击范围内的一名角色使用：对目标造成1点弹幕伤害。</u>',
			ShoweringBrillance:'降华蹴',
			ShoweringBrillance_info:'【轰！】的一种。此【轰】进入弃牌堆时，你可以选择一项：摸一张牌；或调换〖星脉〗中“一张【轰！】”与“一种基本牌”的位置。',
			EarthDragonWave:'地龙波',
			EarthDragonWave_info:'【轰！】的一种，生效时你先摸一张牌；此【轰！】对目标造成X点弹幕伤害（X为其与你的距离），然后目标可以使用一张牌。\
			<br><u>追加效果：你决死时，也能对你使用此【轰！】。</u>',			//原计划是1点灵击伤害，只允许使用支援牌或装备牌?
			TigerChiRelease:'虎劲',
			TigerChiRelease_info:'此牌进入你的装备区时，你回复1点体力；你受到弹幕伤害后，你可以摸一张牌，若如此做：你弃置一张牌。',
			
			kasen:'茨木华扇',
			ichirin:'云居一轮',
			byakuren:'圣白莲',
			mononobe:'物部布都',
			toyosatomimi:'丰聪耳神子',
			koishi:'恋',
			mamizou:'猯藏',
			kokoro:'心',
			sumireko:'堇子',
			doremy:'哆来咪',
			jyoon:'女苑',
			shion:'紫苑',
			
			fateUC_free:'命运/无限代码',
			ftg_UBW:'命运/无限代码',
			ftg_UBW_info:'<br>\
			<br> 关卡机制：无	  每击败一名角色可以摸两张牌或回复1点体力<br>\
			<br> 特殊规则：①卡牌不再直接获得灵力；\
			<br>		   ②准备阶段获得1点灵力；\
			<br>		   ③使用装备消耗的灵力转移给该装备，每个角色的回合结束，若装备仍有灵力，消耗1点灵力，否则，卸载该装备；\
			<br>		   ④一名角色受到伤害后，可以减少装备的灵力代替受伤。',
			bazett:'巴泽特',
			medusa:'美杜莎',
			heracles:'赫拉克勒斯',
			saber_lily:'阿尔托莉雅',
			fate_archer:'英灵卫宫',
			UnlimitedBladeWorks:'无限剑制',
			UnlimitedBladeWorks_info:'符卡技（0）<永续>取消〖投影〗使用次数限制；你需要使用一张因〖投影〗而转化的牌时，你可以重铸之；你失去一张〖投影〗牌时，视为使用一张原牌。',
			medea:'美狄亚',
			luviagelita:'露维亚瑟琳塔',
			saber:'Saber Alter',
			HF_sakura:'樱',
			fate_lancer:'库',
			shirou:'士郎',
			vitality_caution:'干将镆铘',
			vitality_caution_info:'准备阶段，你可以从弃牌堆获得一张红色【轰！】；你的红色【轰！】不计入次数限制且伤害+1。',
			zero_lancer:'迪卢木多',
			fate_rin:'凛',
			jack_rapper:'小次郎',
			kirei:'绮礼',
			leysritt:'莉洁莉特',
			
			_move:'移动',
			_tanpai:'明置异变',
			_tanpai_bg:'变',
		},
		ui:{
			create:{
				playergrid:function(player,s){
					var pos=player.getDataPos(s);
					var node=ui.create.div('.player',player.parentNode);
					node.link=player;
					node.dataset.position=pos;
					return node;
				},
			},
			click:{
				playergrid:function(){
					if(!_status.paused) return;
					var pos=parseInt(this.dataset.position);
					this.link.moveTo(pos);
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
			}
		},
		get:{
			// 描述框的显示
			nodeintro:function(node,simple,evt){
				var uiintro=ui.create.dialog('hidden','notouchscroll');
				if(node.classList.contains('player')&&!node.name){
					return uiintro;
				}
				var i,translation,intro,str;
				if(node._nointro) return;
				if(typeof node._customintro=='function'){
					if(node._customintro(uiintro)===false) return;
				}
				else if(Array.isArray(node._customintro)){
					var caption=node._customintro[0];
					var content=node._customintro[1];
					if(typeof caption=='function'){
						caption=caption(node);
					}
					if(typeof content=='function'){
						content=content(node);
					}
					uiintro.add(caption);
					uiintro.add('<div class="text center" style="padding-bottom:5px">'+content+'</div>');
				}
				else if (node.classList.contains('actcount')){
					uiintro.addText('灵力值：' + node.parentNode.lili +'/' + node.parentNode.maxlili);
					uiintro.addText('攻击范围：' + node.parentNode.getAttackRange());
					if (node.parentNode.lili == 0) uiintro.addText('因灵力为0，不能造成伤害。');
				}
				else if (node.classList.contains('hp')){
					uiintro.addText('体力值：' + node.parentNode.hp +' / ' + node.parentNode.maxHp);
				}
				else if(node.classList.contains('player')||node.linkplayer){
					if(node.linkplayer){
						node=node.link;
					}
					var capt=get.translation(node.name);
					// 这里是往描述框添加势力的。再见~
					/*
					if(lib.character[node.name]&&lib.character[node.name][1]){
						capt+='&nbsp;&nbsp;'+lib.translate[lib.character[node.name][1]];
					}
					*/
					uiintro.add(capt);
					/*
					lib.characterTitle['monika'] = '？';
					if(lib.characterTitle[node.name]){
						uiintro.addText(get.colorspan(lib.characterTitle[node.name]));
					}
					*/
					if(node.node.hp.style.display!='none'){			//飞虎：闯关剧本隐藏血量用node.node.hp.outerHTML.indexOf("display: none")==-1
						if(game.me.node.hp.classList && game.me.node.hp.classList.length == 1 && game.me.node.hp.classList[0] == "hp" && typeof(node.maxHp)=="number" && !isNaN(node.maxHp))uiintro.addText('体力：' + node.hp + '/' + node.maxHp + '  灵力：' + node.lili + '/' + node.maxlili);
						else uiintro.addText('体力：' + '未知'+ '  灵力：' + node.lili + '/' + node.maxlili);			//飞虎：实在没办法了，只能改这里了
					}
					if(node.isUnderControl()){
						var hs=node.getCards('h');
						if(hs.length){
							uiintro.add('<div class="text center">手牌</div>');
							uiintro.addSmall(node.getCards('h'));
						}
					}

					var skills=node.getSkills(false,false);
					for(var i in node.forbiddenSkills){
						skills.add(i);
					}
					skills=skills.slice(0);
					var skills2=game.filterSkills(skills,node);
					if(node==game.me&&node.hiddenSkills.length){
						skills.addArray(node.hiddenSkills);
					}
					for(var i in node.disabledSkills){
						if(node.disabledSkills[i].length==1&&
							node.disabledSkills[i][0]==i+'_awake'&&
							!node.hiddenSkills.contains(i)){
							skills.push(i);
						}
					}
					for(i=0;i<skills.length;i++){
						if(lib.skill[skills[i]]&&lib.skill[skills[i]].nopop) continue;
						if(lib.translate[skills[i]+'_info']){
							translation=get.translation(skills[i]).slice(0,15);
							if(node.forbiddenSkills[skills[i]]){
								var forbidstr='<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>';
								if(node.forbiddenSkills[skills[i]].length){
									forbidstr+='（与'+get.translation(node.forbiddenSkills[skills[i]])+'冲突）<br>';
								}
								else{
									forbidstr+='（双将禁用）<br>';
								}
								forbidstr+=get.skillInfoTranslation(skills[i])+'</div></div>'
								uiintro.add(forbidstr);
							}
							else if(!skills2.contains(skills[i])){
								uiintro.add('<div style="opacity:0.5"><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
							}
							else if (skills[i][0] == '_'){

							}
							else if(lib.skill[skills[i]].temp||!node.skills.contains(skills[i])||lib.skill[skills[i]].thundertext){
								uiintro.add('<div><div class="skill thundertext thunderauto">【'+translation+'】</div><div class="thundertext thunderauto">'+get.skillInfoTranslation(skills[i])+'</div></div>');
							}
							else if(lib.skill[skills[i]].frequent||lib.skill[skills[i]].subfrequent){
								uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'<br><div class="underlinenode on gray" style="position:relative;padding-left:0;padding-top:7px">自动发动</div></div></div>');
								var underlinenode=uiintro.content.lastChild.querySelector('.underlinenode');
								if(lib.skill[skills[i]].frequent){
									if(lib.config.autoskilllist.contains(skills[i])){
										underlinenode.classList.remove('on');
									}
								}
								if(lib.skill[skills[i]].subfrequent){
									for(var j=0;j<lib.skill[skills[i]].subfrequent.length;j++){
										if(lib.config.autoskilllist.contains(skills[i]+'_'+lib.skill[skills[i]].subfrequent[j])){
											underlinenode.classList.remove('on');
										}
									}
								}
								if(lib.config.autoskilllist.contains(skills[i])){
									underlinenode.classList.remove('on');
								}
								underlinenode.link=skills[i];
								underlinenode.listen(ui.click.autoskill2);
							}
							else if(lib.skill[skills[i]].clickable&&node.isIn()&&node.isUnderControl(true)){
								var intronode=uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'<br><div class="menubutton skillbutton" style="position:relative;margin-top:5px">点击发动</div></div></div>').querySelector('.skillbutton');
								if(!_status.gameStarted||(lib.skill[skills[i]].clickableFilter&&!lib.skill[skills[i]].clickableFilter(node))){
									intronode.classList.add('disabled');
									intronode.style.opacity=0.5;
								}
								else{
									intronode.link=node;
									intronode.func=lib.skill[skills[i]].clickable;
									intronode.classList.add('pointerdiv');
									intronode.listen(ui.click.skillbutton);
								}
							}
							else if(lib.skill[skills[i]].nobracket){
								uiintro.add('<div><div class="skill">'+get.translation(skills[i])+'</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
							}
							else{
								uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
							}
							if(lib.translate[skills[i]+'_append']){
								uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
							}
						}
					}
					// if(get.is.phoneLayout()){
					//	 var storage=node.storage;
					//	 for(i in storage){
					//		 if(get.info(i)&&get.info(i).intro){
					//			 intro=get.info(i).intro;
					//			 if(node.getSkills().concat(lib.skill.global).contains(i)==false&&!intro.show) continue;
					//			 var name=intro.name?intro.name:get.translation(i);
					//			 if(typeof name=='function'){
					//				 name=name(storage[i],node);
					//			 }
					//			 translation='<div><div class="skill">『'+name.slice(0,2)+'』</div><div>';
					//			 var stint=get.storageintro(intro.content,storage[i],node,null,i);
					//			 if(stint){
					//				 translation+=stint+'</div></div>';
					//				 uiintro.add(translation);
					//			 }
					//		 }
					//	 }
					// }


					if(lib.config.right_range&&_status.gameStarted){
						uiintro.add(ui.create.div('.placeholder'));
						var table,tr,td;
						table=document.createElement('table');
						tr=document.createElement('tr');
						table.appendChild(tr);
						td=document.createElement('td');
						td.innerHTML='距离';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='手牌/上限';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='行动';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='伤害';
						tr.appendChild(td);

						tr=document.createElement('tr');
						table.appendChild(tr);
						td=document.createElement('td');
						if(node==game.me||!game.me||!game.me.isIn()){
							td.innerHTML='-';
						}
						else{
							var dist1=get.numStr(Math.max(1,game.me.distanceTo(node)));
							var dist2=get.numStr(Math.max(1,node.distanceTo(game.me)));
							if(dist1==dist2){
								td.innerHTML=dist1;
							}
							else{
								td.innerHTML=dist1+'/'+dist2;
							}
						}
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML=node.countCards('h') + '/' + node.getHandcardLimit();
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML=node.stat.length-1;
						tr.appendChild(td);
						td=document.createElement('td');

						(function(){
							num=0;
							for(var j=0;j<node.stat.length;j++){
								if(typeof node.stat[j].damage=='number') num+=node.stat[j].damage;
							}
							td.innerHTML=num;
						}());
						tr.appendChild(td);
						table.style.width='calc(100% - 20px)';
						table.style.marginLeft='10px';

						uiintro.content.appendChild(table);
						if(!lib.config.show_favourite){
							table.style.paddingBottom='5px'
						}
					}
					if(!simple||get.is.phoneLayout()){
						var es=node.getCards('e');
						for(var i=0;i<es.length;i++){			//飞虎：好像没啥用？
							if(lib.card[es[i].name].cardPrompt) uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+lib.card[es[i].name].cardPrompt(es[i])+'</div></div>');
							else uiintro.add('<div><div class="skill">'+es[i].outerHTML+'</div><div>'+lib.translate[es[i].name+'_info']+'</div></div>');
							uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
						}
						var js=node.getCards('j');
						for(var i=0;i<js.length;i++){
							if(js[i].viewAs&&js[i].viewAs!=js[i].name){
								uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].viewAs]+'：'+lib.translate[js[i].viewAs+'_info']+'</div></div>');
							}
							else{
								uiintro.add('<div><div class="skill">'+js[i].outerHTML+'</div><div>'+lib.translate[js[i].name+'_info']+'</div></div>');
							}
							uiintro.content.lastChild.querySelector('.skill>.card').style.transform='';
						}
						if(get.is.phoneLayout()){
							var markCoutainer=ui.create.div('.mark-container.marks');
							for(var i in node.marks){
								var nodemark=node.marks[i].cloneNode(true);
								nodemark.classList.add('pointerdiv');
								nodemark.link=node.marks[i];
								nodemark.style.transform='';
								markCoutainer.appendChild(nodemark);
								nodemark.listen(function(){
									uiintro.noresume=true;
									var rect=this.link.getBoundingClientRect();
									ui.click.intro.call(this.link,{
										clientX:rect.left+rect.width,
										clientY:rect.top+rect.height/2,
									});
									if(lib.config.touchscreen){
										uiintro._close();
									}
								});
							}
							if(markCoutainer.childElementCount){
								uiintro.addText('标记');
								uiintro.add(markCoutainer);
							}
						}
					}
					var modepack=lib.characterPack['mode_'+get.mode()];
					if(lib.config.show_favourite&&lib.character[node.name]&&game.players.contains(node)&&
						(!modepack||!modepack[node.name])&&(!simple||get.is.phoneLayout())){
						var addFavourite=ui.create.div('.text.center.pointerdiv');
						addFavourite.link=node.link;
						if(lib.config.favouriteCharacter.contains(node.name)){
							addFavourite.innerHTML='移除收藏';
						}
						else{
							addFavourite.innerHTML='添加收藏';
						}
						addFavourite.listen(ui.click.favouriteCharacter)
						uiintro.add(addFavourite);
					}
					if(!simple||get.is.phoneLayout()){
						if(!node.isUnseen()){
							var num=1;
							var introadded=false;
							var createButtons=function(num,avatar2){
								if(!introadded){
									introadded=true;
									uiintro.add('<div class="text center">更改皮肤</div>');
								}
								var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
								lib.setMousewheel(buttons);
								var nameskin=(avatar2?node.name2:node.name);
								if(nameskin.indexOf('gz_')==0){
									nameskin=nameskin.slice(3);
								}
								for(var i=0;i<=num;i++){
									var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
										if(this._link){
											if(avatar2){
												lib.config.skin[nameskin]=this._link;
												node.node.avatar2.style.backgroundImage=this.style.backgroundImage;
											}
											else{
												lib.config.skin[nameskin]=this._link;
												node.node.avatar.style.backgroundImage=this.style.backgroundImage;
											}
										}
										else{
											if(avatar2){
												delete lib.config.skin[nameskin];
												node.node.avatar2.setBackground(nameskin,'character');
											}
											else{
												delete lib.config.skin[nameskin];
												node.node.avatar.setBackground(nameskin,'character');
											}
										}
										game.saveConfig('skin',lib.config.skin);
									});
									button._link=i;
									if(i){
										button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
									}
									else{
										button.setBackground(nameskin,'character','noskin');
									}
								}
								uiintro.add(buttons);
							};
							var loadImage=function(avatar2){
								var img=new Image();
								img.onload=function(){
									num++;
									loadImage(avatar2);
								}
								img.onerror=function(){
									num--;
									if(num){
										createButtons(num,avatar2);
									}
									if(!avatar2){
										if(!node.classList.contains('unseen2')&&node.name2){
											num=1;
											loadImage(true);
										}
									}
								}
								var nameskin=(avatar2?node.name2:node.name);
								if(nameskin.indexOf('gz_')==0){
									nameskin=nameskin.slice(3);
								}
								img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
							}
							if(!node.isUnseen(0)){
								loadImage();
							}
							else{
								loadImage(true);
							}
						}
					}

					uiintro.add(ui.create.div('.placeholder.slim'));
				}
				else if(node.classList.contains('mark')&&node.info&&
					node.parentNode&&node.parentNode.parentNode&&node.parentNode.parentNode.classList.contains('player')){
					var info=node.info;
					var player=node.parentNode.parentNode;
					if(info.name){
						if(typeof info.name=='function'){
							var named=info.name(player.storage[node.skill],player);
							if(named){
								uiintro.add(named);
							}
						}
						else{
							uiintro.add(info.name);
						}
					}
					else if(info.name!==false){
						uiintro.add(get.translation(node.skill));
					}
					if(typeof info.id=='string'&&info.id.indexOf('subplayer')==0&&
						player.isUnderControl(true)&&player.storage[info.id]&&!_status.video){
						var storage=player.storage[info.id];
						uiintro.addText('当前体力：'+storage.hp+'/'+storage.maxHp);
						if(storage.hs.length){
							uiintro.addText('手牌区');
							uiintro.addSmall(storage.hs);
						}
						if(storage.es.length){
							uiintro.addText('装备区');
							uiintro.addSmall(storage.es);
						}
					}
					if(typeof info.mark=='function'){
						var stint=info.mark(uiintro,player.storage[node.skill],player);
						if(stint){
							var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
							if(stint.indexOf('<div class="skill"')!=0){
								uiintro._place_text=placetext;
							}
							// if(stint.length<=100){
							//	uiintro.add('<div class="text center">'+stint+'</div>');
							// }
							// else{
							//	uiintro.add('<div class="text">'+stint+'</div>');
							// }
						}
					}
					else{
						var stint=get.storageintro(info.content,player.storage[node.skill],player,uiintro,node.skill);
						if(stint){
							if(stint[0]=='@'){
								uiintro.add('<div class="caption">'+stint.slice(1)+'</div>');
							}
							else{
								var placetext=uiintro.add('<div class="text" style="display:inline">'+stint+'</div>');
								if(stint.indexOf('<div class="skill"')!=0){
									uiintro._place_text=placetext;
								}
							}
							// else if(stint.length<=100){
							//	uiintro.add('<div class="text center">'+stint+'</div>');
							// }
							// else{
							//	uiintro.add('<div class="text">'+stint+'</div>');
							// }
						}
					}
					uiintro.add(ui.create.div('.placeholder.slim'));
				}
				else if(node.classList.contains('card')){
					if(ui.arena.classList.contains('observe')&&node.parentNode.classList.contains('handcards')){
						return;
					}
					var name=node.name;
					if(node.parentNode.cardMod){
						var moded=false;
						for(var i in node.parentNode.cardMod){
							var item=node.parentNode.cardMod[i](node);
							if(Array.isArray(item)){
								moded=true;
								uiintro.add(item[0]);
								uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+item[1]+'</div>');
							}
						}
						if(moded) return uiintro;
					}
					if(node.link&&node.link.name&&lib.card[node.link.name]){
						name=node.link.name;
					}
					if(get.position(node)=='j'&&node.viewAs&&node.viewAs!=name){
						uiintro.add(get.translation(node.viewAs));
						uiintro.add('<div class="text center">（'+get.translation(get.translation(node))+'）</div>');
						// uiintro.add(get.translation(node.viewAs)+'<br><div class="text center" style="padding-top:5px;">（'+get.translation(node)+'）</div>');
						uiintro.nosub=true;
						name=node.viewAs;
					}
					else{
						var nm = get.translation(node);
						if(node.name=='sha'||node.name=='wuxie'){
							if(node.nature=='fire'){
								nm='爆'+nm;			//飞虎：改个名
							}
							else if(node.nature=='thunder'){
								nm='神薙'+nm;			//飞虎：改个名
							}
							//else if(node.link[3] && lib.cardPack?.nature?.[node.name]?.[node.link[3]])nm=get.translation(lib.cardPack.nature[node.name][node.link[3]]);
							else if(node.nature && lib.cardPack?.nature?.[node.name]?.[node.nature])nm=get.translation(lib.cardPack.nature[node.name][node.nature]);
						}
						uiintro.add(nm);
					}
					if(node._banning){
						var clickBanned=function(){
							var banned=lib.config[this.bannedname]||[];
							if(banned.contains(name)){
								banned.remove(name);
							}
							else{
								banned.push(name);
							}
							game.saveConfig(this.bannedname,banned);
							this.classList.toggle('on');
							if(node.updateBanned){
								node.updateBanned();
							}
						};
						var modeorder=lib.config.modeorder||[];
						for(var i in lib.mode){
							modeorder.add(i);
						}
						var list=[];
						uiintro.contentContainer.listen(function(e){
							ui.click.touchpop();
							e.stopPropagation();
						});
						for(var i=0;i<modeorder.length;i++){
							if(node._banning=='online'){
								if(!lib.mode[modeorder[i]].connect) continue;
							}
							else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
								continue;
							}
							if(lib.config.all.mode.contains(modeorder[i])){
								list.push(modeorder[i]);
							}
						}
						var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
						var banall=false;
						for(var i=0;i<list.length;i++){
							var cfg=ui.create.div('.config',lib.translate[list[i]]+'模式',page);
							cfg.classList.add('toggle');
							if(node._banning=='offline'){
								cfg.bannedname=list[i]+'_bannedcards';
							}
							else{
								cfg.bannedname='connect_'+list[i]+'_bannedcards';
							}
							cfg.listen(clickBanned);
							ui.create.div(ui.create.div(cfg));
							var banned=lib.config[cfg.bannedname]||[];
							if(!banned.contains(name)){
								cfg.classList.add('on');
								banall=true;
							}
						}
						ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
							if(this.innerHTML=='全部禁用'){
								for(var i=0;i<page.childElementCount;i++){
									if(page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
										clickBanned.call(page.childNodes[i]);
									}
								}
								this.innerHTML='全部启用';
							}
							else{
								for(var i=0;i<page.childElementCount;i++){
									if(page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
										clickBanned.call(page.childNodes[i]);
									}
								}
								this.innerHTML='全部禁用';
							}
						}).style.marginTop='-10px';
						ui.create.div('.placeholder.slim',uiintro.content);
					}
					else{
						if(lib.translate[name+'_info']){
							if(!uiintro.nosub){
								if (get.bonus(node) && get.bonus(node) != 0){
									uiintro.add('<div class="text center">灵力：'+ get.bonus(node) +'</div>');
								}
								// 跳过整个武器部分。
								if(get.subtype(node)){
									//uiintro.add('<div class="text center">'+get.translation(get.subtype(node))+'</div>');
									uiintro.add('<div class="text center">'+get.translation(get.type(node))+'/'+get.translation(get.subtype(node))+'</div>');
								}
								else if(lib.card[name]&&lib.card[name].addinfomenu){
									uiintro.add('<div class="text center">'+lib.card[name].addinfomenu+'</div>');
								}
								else if(lib.card[name]&&lib.card[name].derivation){
									if(typeof lib.card[name].derivation=='string'){
										uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivation)+'</div>');
									}
									else if(lib.card[name].derivationpack){
										uiintro.add('<div class="text center">来源：'+get.translation(lib.card[name].derivationpack+'_card_config')+'包</div>');
									}
								}
								else{
									if(lib.card[name].unique){
										uiintro.add('<div class="text center">特殊'+get.translation(lib.card[name].type)+'牌</div>');
									}
									else{
										uiintro.add('<div class="text center">'+get.translation(lib.card[name].type)+'牌</div>');
									}
								}
								if(lib.card[name].unique&&lib.card[name].type=='equip'){
									uiintro.add('<div class="text center">特殊装备</div>').style.marginTop='-5px';
								}
							}
							if(lib.card[name].cardPrompt){			//飞虎：一顿醋
								var str=lib.card[name].cardPrompt(node.link||node);
								for(var i in lib.cardPack.nature){
									if(node.link&&node.link[2]==i){
										/*if(node.link[3]&&node.link[3]=='fire'){
											str=lib.translate['huosha_info'];
										}else if(node.link[3]&&node.link[3]=='thunder'){
											str=lib.translate['leisha_info'];
										}*/
										if(node.link[3]){
											str=lib.translate[lib.cardPack.nature[i][node.link[3]]+'_info'];
										}
									}
								}
								var placetext=uiintro.add('<div class="text" style="display:inline">'+str+'</div>');
								if(str.indexOf('<div class="skill"')!=0){
									uiintro._place_text=placetext;
								}
							} else if(lib.translate[name+'_info']){
								var placetext=uiintro.add('<div class="text" style="display:inline">'+get.skillInfoTranslation(name)+'</div>');
								//var placetext=uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_info']+'</div>');
								if(lib.translate[name+'_info'].indexOf('<div class="skill"')!=0){
									uiintro._place_text=placetext;
								}
							}
							if(lib.translate[name+'_append']){
								uiintro.add('<div class="text" style="display:inline">'+lib.translate[name+'_append']+'</div>');
							}
							if(!simple||get.is.phoneLayout()){
								if(true){
									var num=1;
									var introadded=false;
									var createButtons=function(num,avatar2){
										if(!introadded){
											introadded=true;
											uiintro.add('<div class="text center">更改皮肤</div>');
										}
										var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
										lib.setMousewheel(buttons);
										var nameskin=name;
										for(var i=0;i<=num;i++){
											var button=ui.create.div('.button.card.pointerdiv',buttons,function(){
												if(this._link){
													lib.config.skin[nameskin]=this._link;
													//node.node.avatar.style.backgroundImage=this.style.backgroundImage;
													node.node.image.setBackground(nameskin, 'card');
												}
												else{
													delete lib.config.skin[nameskin];
													node.node.image.setBackground(nameskin,'card');
												}
												game.saveConfig('skin',lib.config.skin);
											});
											button._link=i;
											if(i){
												button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.png');
											}
											else{
												button.setBackground(nameskin,'card','noskin');
											}
										}
										uiintro.add(buttons);
									};
									var loadImage=function(avatar2){
										var img=new Image();
										img.onload=function(){
											num++;
											loadImage(avatar2);
										}
										img.onerror=function(){
											num--;
											if(num){
												createButtons(num,avatar2);
											}
											if(!avatar2){
												if(!node.classList.contains('unseen2')&&node.name2){
													num=1;
													loadImage(true);
												}
											}
										}
										var nameskin=node.name;
										img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.png';
									}
									loadImage();
								}
							}
						}
						uiintro.add(ui.create.div('.placeholder.slim'));
					}
				}
				else if (node.classList.contains('count')){
					uiintro.addText('手牌数：' + node.innerHTML);
					uiintro.addText('手牌上限：' + node.parentNode.getHandcardLimit());
				}
				else if (node.id == 'handcards1' && !lib.device){
					uiintro.addText('手牌区');
					uiintro.addText('手牌数：' + game.me.countCards('h'));
					uiintro.addText('手牌上限：' + game.me.getHandcardLimit());
				}
				else if(node.classList.contains('character')){
					var character=node.link;
					if(lib.character[node.link]&&lib.character[node.link][1]){
						//uiintro.add(get.translation(character)+'&nbsp;&nbsp;'+lib.translate[lib.character[node.link][1]]);
						uiintro.add(get.translation(character));
					}
					else{
						uiintro.add(get.translation(character));
					}
					/*
					if(lib.characterTitle[node.link]){
						uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
					}
					*/
					if(node._banning){
						var clickBanned=function(){
							var banned=lib.config[this.bannedname]||[];
							if(banned.contains(character)){
								banned.remove(character);
							}
							else{
								banned.push(character);
							}
							game.saveConfig(this.bannedname,banned);
							this.classList.toggle('on');
							if(node.updateBanned){
								node.updateBanned();
							}
						};
						var modeorder=lib.config.modeorder||[];
						for(var i in lib.mode){
							modeorder.add(i);
						}
						var list=[];
						uiintro.contentContainer.listen(function(e){
							ui.click.touchpop();
							e.stopPropagation();
						});
						for(var i=0;i<modeorder.length;i++){
							if(node._banning=='online'){
								if(!lib.mode[modeorder[i]].connect) continue;
								if(!lib.config['connect_'+modeorder[i]+'_banned']){
									lib.config['connect_'+modeorder[i]+'_banned']=[];
								}
							}
							else if(modeorder[i]=='connect'||modeorder[i]=='brawl'){
								continue;
							}
							if(lib.config.all.mode.contains(modeorder[i])){
								list.push(modeorder[i]);
							}
						}
						var page=ui.create.div('.menu-buttons.configpopped',uiintro.content);
						var banall=false;
						for(var i=0;i<list.length;i++){
							var cfg=ui.create.div('.config',lib.translate[list[i]]+'模式',page);
							cfg.classList.add('toggle');
							if(node._banning=='offline'){
								cfg.bannedname=list[i]+'_banned';
							}
							else{
								cfg.bannedname='connect_'+list[i]+'_banned';
							}
							cfg.listen(clickBanned);
							ui.create.div(ui.create.div(cfg));
							var banned=lib.config[cfg.bannedname]||[];
							if(!banned.contains(character)){
								cfg.classList.add('on');
								banall=true;
							}
						}
						if(node._banning=='offline'){
							var cfg=ui.create.div('.config','AI可选',page);
							cfg.classList.add('toggle');
							cfg.listen(function(){
								this.classList.toggle('on');
								if(this.classList.contains('on')){
									lib.config.forbidai_user.remove(character);
								}
								else{
									lib.config.forbidai_user.add(character);
								}
								game.saveConfig('forbidai_user',lib.config.forbidai_user);
							});
							ui.create.div(ui.create.div(cfg));
							if(!lib.config.forbidai_user.contains(character)){
								cfg.classList.add('on');
							}
						}
						ui.create.div('.menubutton.pointerdiv',banall?'全部禁用':'全部启用',uiintro.content,function(){
							if(this.innerHTML=='全部禁用'){
								for(var i=0;i<page.childElementCount;i++){
									if(page.childNodes[i].bannedname&&page.childNodes[i].classList.contains('on')){
										clickBanned.call(page.childNodes[i]);
									}
								}
								this.innerHTML='全部启用';
							}
							else{
								for(var i=0;i<page.childElementCount;i++){
									if(page.childNodes[i].bannedname&&!page.childNodes[i].classList.contains('on')){
										clickBanned.call(page.childNodes[i]);
									}
								}
								this.innerHTML='全部禁用';
							}
						}).style.marginTop='-10px';
						ui.create.div('.placeholder.slim',uiintro.content);
					}
					else{
						var infoitem=lib.character[character];
						if(!infoitem){
							for(var itemx in lib.characterPack){
								if(lib.characterPack[itemx][character]){
									infoitem=lib.characterPack[itemx][character];break;
								}
							}
						}
						if (infoitem[6] == '0'){
							uiintro.addText('体力上限：'+infoitem[2]);
						} else {
							uiintro.addText('体力上限：'+infoitem[2] + '  灵力：' + infoitem[1] + '/' + (infoitem[6]?infoitem[6]:'5'));
						}
						var skills=infoitem[3];
						for(i=0;i<skills.length;i++){
							if(lib.translate[skills[i]+'_info']){
								translation=get.translation(skills[i]).slice(0,15);
								if(lib.skill[skills[i]]&&lib.skill[skills[i]].nobracket){
									uiintro.add('<div><div class="skill">'+get.translation(skills[i])+'</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
								}
								else{
									uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
								}
								if(lib.translate[skills[i]+'_append']){
									uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
								}
							}
						}
						var modepack=lib.characterPack['mode_'+get.mode()];
						if(lib.config.show_favourite&&
						lib.character[node.link]&&(!modepack||!modepack[node.link])&&(!simple||get.is.phoneLayout())){
							var addFavourite=ui.create.div('.text.center.pointerdiv');
							addFavourite.link=node.link;
							addFavourite.style.marginBottom='15px';
							if(lib.config.favouriteCharacter.contains(node.link)){
								addFavourite.innerHTML='移除收藏';
							}
							else{
								addFavourite.innerHTML='添加收藏';
							}
							addFavourite.listen(ui.click.favouriteCharacter)
							uiintro.add(addFavourite);
						}
						else{
							uiintro.add(ui.create.div('.placeholder.slim'));
						}
						var addskin=false;
						if(node.parentNode.classList.contains('menu-buttons')){
							addskin=!lib.config.show_charactercard;
						}
						else{
							addskin=true;
						}
						if(addskin&&(!simple||get.is.phoneLayout())){
							var num=1;
							var introadded=false;
							var nameskin=node.link;
							if(nameskin.indexOf('gz_')==0){
								nameskin=nameskin.slice(3);
							}
							var createButtons=function(num){
								if(!num) return;
								if(!introadded){
									introadded=true;
									uiintro.add('<div class="text center">更改皮肤</div>');
								}
								var buttons=ui.create.div('.buttons.smallzoom.scrollbuttons');
								lib.setMousewheel(buttons);
								for(var i=0;i<=num;i++){
									var button=ui.create.div('.button.character.pointerdiv',buttons,function(){
										if(this._link){
											lib.config.skin[nameskin]=this._link;
											node.style.backgroundImage=this.style.backgroundImage;
											game.saveConfig('skin',lib.config.skin);
										}
										else{
											delete lib.config.skin[nameskin];
											node.setBackground(nameskin,'character');
											game.saveConfig('skin',lib.config.skin);
										}
									});
									button._link=i;
									if(i){
										button.setBackgroundImage('image/skin/'+nameskin+'/'+i+'.jpg');
									}
									else{
										button.setBackground(nameskin,'character','noskin');
									}
								}
								uiintro.add(buttons);
							};
							var loadImage=function(){
								var img=new Image();
								img.onload=function(){
									num++;
									loadImage();
								}
								img.onerror=function(){
									num--;
									createButtons(num);
								}
								img.src=lib.assetURL+'image/skin/'+nameskin+'/'+num+'.jpg';
							}
							loadImage();
						}
					}
				}
				else if (node.classList.contains('identity') && !node.classList.contains('guessing')){
					uiintro.addText(get.translation(node.parentNode.identity + '2') + '身份');
					uiintro.addText(get.translation(node.parentNode.identity + '_win'));
					uiintro.addText(get.translation(node.parentNode.identity + '_lose'));
					if (get.mode() == 'identity') uiintro.addText(get.translation(node.parentNode.identity + '_flip'));
				}
				else if(node.classList.contains('equips')&&ui.arena.classList.contains('selecting') && lib.config.popequip && get.is.phoneLayout()){
					(function(){
						uiintro.add('选择装备');
						uiintro.addSmall(Array.from(node.childNodes),true);
						uiintro.clickintro=true;
						ui.control.hide();
						uiintro._onclose=function(){
							ui.control.show();
						}
						var confirmbutton;
						for(var i=0;i<uiintro.buttons.length;i++){
							var button=uiintro.buttons[i];
							button.classList.add('pointerdiv');
							if(button.link.classList.contains('selected')){
								button.classList.add('selected');
							}
							button.listen(function(e){
								ui.click.card.call(this.link,'popequip');
								ui.click.window.call(ui.window,e);
								if(this.link.classList.contains('selected')){
									this.classList.add('selected');
								}
								else{
									this.classList.remove('selected');
								}
								if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
									confirmbutton.classList.remove('disabled');
								}
								else{
									confirmbutton.classList.add('disabled');
								}
							});
						}
						var buttoncontainer=uiintro.add(ui.create.div());
						buttoncontainer.style.display='block';
						confirmbutton=ui.create.div('.menubutton.large.pointerdiv','确定',function(){
							if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
								uiintro._clickintro();
								ui.click.ok(ui.confirm.firstChild);
							}
						},buttoncontainer);
						confirmbutton.style.position='relative';
						setTimeout(function(){
							if(ui.confirm&&ui.confirm.str&&ui.confirm.str.indexOf('o')!=-1){
								confirmbutton.classList.remove('disabled');
							}
							else{
								confirmbutton.classList.add('disabled');
							}
						},300);
					}());
				}
				else if (node.classList.contains('equips') && !lib.device){
					uiintro.addText('装备区');
					uiintro.addText('放装备牌的地方。任何装备都可以装。');
					uiintro.addText('装备牌上限：'+game.me.maxequip+'张');
				}
				else if (node.classList.contains('judges') && !lib.device){
					uiintro.addText('技能牌区');
					uiintro.addText('放技能牌的地方。');
					uiintro.addText('技能牌上限：'+game.me.maxjudge+'张');
				}
				else if(node.parentNode==ui.historybar){
					if(node.dead){
						if(!node.source||node.source==node.player){
							uiintro.add('<div class="text center">'+get.translation(node.player)+'阵亡</div>');
							uiintro.addSmall([node.player]);
						}
						else{
							uiintro.add('<div class="text center">'+get.translation(node.player)+'被'+get.translation(node.source)+'杀害</div>');
							uiintro.addSmall([node.source]);
						}
					}
					if(node.skill){
						uiintro.add('<div class="text center">'+get.translation(node.skill,'skill')+'</div>');
						uiintro._place_text=uiintro.add('<div class="text" style="display:inline">'+get.translation(node.skill,'info')+'</div>');
					}
					if(node.targets&&node.targets.length){
						uiintro.add('<div class="text center">目标</div>');
						uiintro.addSmall(node.targets);
					}
					if(node.players&&node.players.length>1){
						uiintro.add('<div class="text center">使用者</div>');
						uiintro.addSmall(node.players);
					}
					if(node.cards&&node.cards.length){
						uiintro.add('<div class="text center">卡牌</div>');
						uiintro.addSmall(node.cards);
					}
					for(var i=0;i<node.added.length;i++){
						uiintro.add(node.added[i]);
					}
					if(node.added.length){
						uiintro.add(ui.create.div('.placeholder.slim'));
					}
					if(uiintro.content.firstChild){
						uiintro.content.firstChild.style.paddingTop='3px';
					}
				}
				if(lib.config.touchscreen){
					lib.setScroll(uiintro.contentContainer);
				}
				return uiintro;
			},
		
			rawAttitude:function(from,to){
				return (from.side===to.side?100:-100);
			}
		},
	};
});
