'use strict';
game.import('play',function(lib,game,ui,get,ai,_status){
	return {
		name:'boss',
		init:function(){
			lib.characterPack.mode_extension_boss={
			}
			//lib.characterIntro['boss_zhaoyun'] = '幻想乡是一切皆有可能的地方。<br>即使是原本不可能打得过的人物……！';
			if (lib.config.gameRecord.boss){
				lib.characterPack.mode_extension_boss={
					yuri:['female', '3', 3, ['chongzou', 'moxin1'], ["des:全名仲村由理，死后世界的学校中，死后世界战线的领导者，旨在与神，与神的天使对抗。<br>出自：angel beats! <b>画师：戦-G</b>"]],
					priestress:['female', '3', 3, ['xiaoyu', 'jinhua', 'shengbi'], ["des:日本轻小说《哥布林杀手》及改编作品中的女主角，身材娇小的金发少女，会使用信仰地母神的教会法术。协助哥布林杀手一起不停地讨伐哥布林。<br><b>画师：月影みゅう</b>"], '', '3'],
					tamamo:['female', '2', 3, ['liyu', 'zhoufa', 'shuitian'], ["des:TYPE-MOON的游戏《Fate/EXTRA》、《Fate/EXTRA CCC》、《Fate/EXTELLA》、《Fate/EXTELLA LINK》及《Fate/Grand Order》中登场的Servant。<br><b>画师：SekiHcc</b>"]],
				};
				if (lib.config.gameRecord.boss.data['boss_reimu2']){
					lib.characterPack.mode_extension_boss.boss_reimu2 = ['female','5',4,['lingji','mengxiangtiansheng'], ["des:不要在灵梦面前提钱，不要动灵梦的赛钱箱，不要对博丽神社做任何事情。<br>——来自造成了目前整个事态的某个魔法师的灵梦三戒律<br><b>画师：Ran</b>"], 'shu'];
				}
				if (lib.config.gameRecord.boss.data['boss_cirno2']){
					lib.characterPack.mode_extension_boss.boss_cirno2 = ['female', '9', 4, ['jiqiang','zuanshi','jubing'], ["des:虽然成功的获得了超越常人的力量，但是这力量对于超越常人的家伙们来说……还是⑨级别的。<br><b>画师：しがらき</b>"], 'wei', '9'];
				}
				if (lib.config.gameRecord.boss.data['boss_mokou2']){
					lib.characterPack.mode_extension_boss.boss_mokou2 = ['female', '5', 8, ['huoniao2', 'businiao_boss'],["des:不知道为啥西方神话的不死鸟的设定被套在中国的凤凰头上了，那么在幻想乡里提到的不死鸟和凤凰一点关系没有吗？<br><b>画师：りひと</b>"], 'shu'];
				}  
				if (lib.config.gameRecord.boss.data['boss_zhaoyun']){
					lib.characterPack.mode_extension_boss.boss_zhaoyun = ['male','0',1,['boss_juejing','new_longhun'],["character:zhaoyun","des:幻想乡是一切皆有可能的地方。<br>即使是原本不可能打得过的人物……！"], 'shen'];
				}
				if (lib.config.gameRecord.boss.data['boss_nianshou'] && lib.config.gameRecord.boss.data['boss_nianshou'][0] >= 50){
					lib.characterPack.mode_extension_boss.boss_nianshou = ['female','0',10000,['boss_qixiang','boss_nianrui'],["des:比起加一堆没人想要的大杂烩设定，把本来欢乐的活动变成一个累死人的掀桌活动，还是回到最开始的简单欢乐日子好。<br><b>画师：モグ</b>"],'shu','10000'];
				}
				if (lib.config.gameRecord.boss.data['boss_saitama'] && lib.config.gameRecord.boss.data['boss_saitama'][0] >= 5){
					lib.characterPack.mode_extension_boss.boss_saitama = ['male','0',Infinity,['punch'],["des:买菜时因走错路偶然路过幻想乡的光头<br>………等等，什么？<br>画师："],'shen'];
				}
				//if (lib.config.gameRecord.boss.data['boss_fapaiji'] && lib.config.gameRecord.boss.data['boss_fapaiji'][0] >= 5){
					lib.characterPack.mode_extension_boss.boss_fapaiji = ['female','5', 3,['huanri', 'toutian'],["des:本次四轰鬼抽由Love Live!赞助提供。<br>谢谢来自μ\'s的东条希的友情出演！<br><b>画师：醐味屑</b>"],'shen'];
				//}
				for(var i in lib.characterPack.mode_extension_boss){
					lib.characterPack.mode_extension_boss[i][4].push('mode:boss');
					lib.character[i]=lib.characterPack.mode_extension_boss[i];
					if(!lib.config.boss_enableai_playpackconfig){
						lib.config.forbidai.push(i);
					}
				}
				var skill={
					new_longhun:{
						group:["new_longhun_tao","new_longhun_sha","new_longhun_shan","new_longhun_wuxie","new_longhun_chongzhen"],
						trigger:{
							global:["damageBegin","recoverBegin"],
						},
						forced:true,
						popup:false,
						filter:function (event) {
							return (event.parent.skill=="new_longhun_tao"||event.parent.skill=="new_longhun_sha") && event.cards && event.cards.length == 2;
						},
						content:function () {
							trigger.num++;
						},
					},
					new_longhun_tao:{
						audio:"new_longhun",
						sub:true,
						sourceSkill:"new_longhun",
						enable:["chooseToUse","chooseToRespond"],
						prompt:function (){
							return '将一至两张红桃牌当作【葱】使用';
						},
						position:"he",
						check:function (card,event){
							return 10-get.value(card);
						},
						selectCard:[1,2],
						viewAs:{
							name:"tao",
							cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"heart","number":8,"name":"tianguo","cardid":"351409286","original":"h","_transform":"translateX(448px)","clone":{"name":"tianguo","suit":"heart","number":8,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":170},"timeout":158}],
							suit:"heart",
							number:8,
						},
						filter:function (event,player){
							return player.countCards('he',{suit:'heart'})>0;
						},
						filterCard:function (card){
							return get.suit(card)=='heart';
						},
						ai:{
							save:true,
							basic:{
								order:function (card,player){
									//if(player.hasSkillTag('pretao')) return 5;
									return 2;
								},
								useful:[8,6.5],
								value:[8,6.5],
							},
							result:{
								target:function (player,target){
									// if(player==target&&player.hp<=0) return 2;
									var nh=target.num('h');
									var keep=false;
									if(nh<=target.hp){
										keep=true;
									}
									else if(nh==target.hp+1&&target.hp>=2&&target.num('h','tao')<=1){
										keep=true;
									}
									var mode=get.mode();
									if(target.hp>=2&&keep&&target.hasFriend()){
										if(target.hp>2) return 0;
										if(target.hp==2){
											for(var i=0;i<game.players.length;i++){
												if(target!=game.players[i]&&ai.get.attitude(target,game.players[i])>=3){
													if(game.players[i].hp<=1) return 0;
													if(mode=='identity'&&game.players[i].isZhu&&game.players[i].hp<=2) return 0;
												}
											}
										}
									}
									if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
									var att=ai.get.attitude(player,target);
									if(att<3&&att>=0&&player!=target) return 0;
									var tri=_status.event.getTrigger();
									if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
										if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
											var num=0;
											for(var i=0;i<game.players.length;i++){
												if(game.players[i].identity=='fan'){
													num+=game.players[i].num('h','tao');
													if(num>2) return 2;
												}
											}
											if(num>1&&player==target) return 2;
											return 0;
										}
									}
									if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
										if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
											return 0;
										}
									}
									return 2;
								},
							},
							tag:{
								recover:1,
								save:1,
								revertsave:1,
							},
						},
					},
					new_longhun_sha:{
						audio:"new_longhun",
						sub:true,
						sourceSkill:"new_longhun",
						enable:["chooseToUse","chooseToRespond"],
						prompt:function (){
							return '将一至两张方片牌当作具有火焰伤害的【轰！】使用或打出';
						},
						position:"he",
						check:function (card,event){
							return 10-get.value(card);
						},
						selectCard:[1,2],
						viewAs:{
							name:"sha",
							nature:"fire",
							suit:"diamond",
							number:12,
							cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"diamond","number":2,"name":"shan","cardid":"6413459117","original":"h","_transform":"translateX(112px)","clone":{"name":"shan","suit":"diamond","number":2,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":951},"timeout":894}],
						},
						filter:function (event,player){
							return player.countCards('he',{suit:'diamond'})>0;
						},
						filterCard:function (card){
							return get.suit(card)=='diamond';
						},
						ai:{
							respondSha:true,
							basic:{
								useful:[5,2],
								value:[5,2],
							},
							order:3,
							result:{
								target:function (player,target){
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
								damage:function (card){
									if(card.nature=='poison') return;
									return 1;
								},
								natureDamage:function (card){
									if(card.nature) return 1;
								},
								fireDamage:function (card,nature){
									if(card.nature=='fire') return 1;
								},
								thunderDamage:function (card,nature){
									if(card.nature=='thunder') return 1;
								},
								poisonDamage:function (card,nature){
									if(card.nature=='poison') return 1;
								},
							},
						},
					},
					new_longhun_shan:{
						audio:"new_longhun",
						sub:true,
						sourceSkill:"new_longhun",
						enable:["chooseToUse","chooseToRespond"],
						prompt:function (){
							return '将一至两张梅花牌当作【躲～】使用或打出';
						},
						position:"he",
						check:function (card,event){
							return 10-get.value(card);
						},
						selectCard:[1,2],
						viewAs:{
							name:"shan",
							suit:"club",
							number:7,
							cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":7,"name":"sha","cardid":"9025141103","original":"h","_transform":"translateX(0px)","clone":{"name":"sha","suit":"club","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":689},"timeout":672}],
						},
						filterCard:function (card){
							return get.suit(card)=='club';
						},
						ai:{
							basic:{
								useful:[6,4],
								value:[6,4],
							},
							result:{
								player:1,
							},
							expose:0.2,
							tag:{
								respond:1,
								respondSha:1,
								respondShan:1,
							},
						},
					},
					new_longhun_wuxie:{
						audio:"new_longhun",
						sub:true,
						sourceSkill:"new_longhun",
						enable:["chooseToUse","chooseToRespond"],
						prompt:function (){
							return '将一至两张黑桃牌当作【请你住口！】使用';
						},
						position:"he",
						check:function (card,event){
							return 7-get.value(card);
						},
						selectCard:[1,2],
						viewAs:{
							name:"wuxie",
							suit:"spade",
							number:2,
							cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":11,"name":"wuxie","cardid":"271665999","original":"h","_transform":"translateX(0px)","clone":{"name":"wuxie","suit":"spade","number":11,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":426},"timeout":383},{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":5,"name":"hakkero","bonus":1,"cardid":"389795292","original":"h","_transform":"translateX(112px)","clone":{"name":"hakkero","suit":"spade","number":5,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":427},"timeout":384}],
						},
						viewAsFilter:function (player){
							return player.countCards('he',{suit:'spade'})>0;
						},
						filterCard:function (card){
							return get.suit(card)=='spade';
						},
						ai:{
							wuxie:function (target,card,player,viewer){
								if(get.attitude(viewer,player)>0) return 0;
								return 1;
							},
							basic:{
								useful:[6,4],
								value:[6,4],
							},
							result:{
								player:0.5,
							},
							expose:0.2,
						},
					},
					new_longhun_chongzhen:{
						sub:true,
						sourceSkill:"new_longhun",
						trigger:{
							player:["useCard","respond"],
						},
						forced:true,
						popup:false,
						filter:function (event, player) {
							return (event.card.name=="shan"||event.card.name=="wuxie") && (event.skill == "new_longhun_shan"||event.skill=="new_longhun_wuxie") && event.cards && event.cards.length == 2 && _status.currentPhase && _status.currentPhase != player;
						},
						content:function () {
							//game.log(trigger.card)
							//game.log(trigger.cards);
							//player.line(_status.currentPhase, "green");
							player.discardPlayerCard(_status.currentPhase, "hej", true);
						},
					},
				};
				for (var i in skill){
					lib.skill[i] = skill[i];
				}
				var list={
					mode_extension_boss_character_config:'大魔王！',
					boss_saitama:'斗篷光头',
					boss_cirno2:'琪露诺',
					boss_zhaoyun:'赵云',
					boss_nianshou:'年兽',
					boss_fapaiji:'发牌姬',
					boss_reimu2:'灵梦',
					boss_mokou2:'妹红',
					yuri:'由理',
					tamamo:'玉藻前',
					priestress:'女神官',
					new_longhun:"龙魂",
					boss_juejing_append:'<span style="opacity:0.8">注：【冰镇青蛙】有不触发失去牌的BUG</span>',
					new_longhun_info:'你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【葱】，方块当具火焰伤害的【轰！】，梅花当【躲～】，黑桃当【请你住口!】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1。若你以此法使用了两张黑色牌，则你弃置当前回合角色一张牌。',
					new_longhun_tao:'龙魂-葱',
					new_longhun_tao_info:'你可以将红桃当【葱】使用',
					new_longhun_sha:'龙魂-轰',
					new_longhun_sha_info:'你可以将方片当火【轰！】使用',
					new_longhun_shan:'龙魂-躲',
					new_longhun_shan_info:'你可以将梅花当【躲~】使用',
					new_longhun_wuxie:'龙魂-嘘',
					new_longhun_wuxie_info:'你可以将黑桃当【请你住口!】使用',
					new_longhun_chongzhen:'龙魂',
					new_longhun_chongzhen_info:'你以龙魂转化两张黑色牌时，需弃置当前回合角色一张牌',
				};
				if(get.mode()!='boss'){
					for(var i in list){
						lib.translate[i]=lib.translate[i]||list[i];
					}
				}
				lib.translate['shengbi_info'] = '一名角色的回合开始时，你可以消耗1点灵力并指定一名角色：其本回合第一次受到伤害时，该伤害-1。';
			}
		},
		arenaReady:function(){
			if (get.mode() == 'boss' || get.mode() == 'puzzle') return;
			lib.card.list = lib.card.list.concat([[null,0,'boss_sansi'],[null,0,'boss_sansi'],[null,0,'boss_gushou'],[null,0,'boss_gushou'],[null,0,'boss_poxian'],[null,0,'boss_poxian']]);
			game.loadModeAsync('boss',function(mode){
				for(var i in mode.translate){
					lib.translate[i]=lib.translate[i]||mode.translate[i];
					//lib.translate[i]=mode.translate[i];
				}
				for(var i in mode.skill){
					if(lib.skill[i]) console.log(i);
					//console.log(i);
					lib.skill[i]=mode.skill[i];
					game.finishSkill(i);
				}
				for(var i in mode.card){
					if(lib.card[i]) console.log(i);
					//console.log(i);
					lib.card[i]=mode.card[i];
					game.finishCards();
				}
				lib.skill.boss_juejing2.usable = 20;
				lib.translate["boss_juejing_info"] = get.translation("boss_juejing_info") + '（<span class="greentext">每回合限二十次</span>）';
			});
		},
	};
});
