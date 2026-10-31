'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'naivasamjna',
		connect:true,
		character:{
			iku:['female','1',3,['yj_leiji','feiyi']],
			tenshi:['female','2',4,['dimai','feixiang']],
			utsuho:['female','2',4,['sy_chizhen','td_xiongjie']],
			hisoutensoku:['none','0',5,["_hisoutensoku"],['unseen','forbidai']],
		},
		characterIntro:{
			iku:'全名永江衣玖，好孩子不要衣玖衣玖的连读哦~<br><b>画师：HxxG/ホン</b>',
			tenshi:'原名比那名居地子，龙傲天开局的不良天人，似乎有很强的耐击打能力<br><b>设计：终末的百合花	画师：竜崎いち</b>',
			utsuho:'全名灵乌路空，附有能够核融合的八咫乌的地狱鸦。<br><b>画师：山中梅</b>',
			hisoutensoku:'是尼斯湖水怪？是大太法师？是太岁星君？不，是非想天则',
		},
		perfectPair:{
		},
		skill:{
			yj_leiji:{
				audio:2,
				trigger:{player:'loseEnd'},
				filter:function(event,player){
					var hasRed;
					for(var i = 0;i<event.cards.length;i++){
						if(get.color(event.cards[i])&&get.color(event.cards[i])=="red"){
							hasRed = true;	
							break;
						}
					}
					return hasRed&&(!player.storage.leiji||player.storage.leiji<player.hp);
				},
				direct:true,
				content:function(){
					"step 0";
					event.suits=[];
					for(var i = 0;i<trigger.cards.length;i++){
						if(get.suit(trigger.cards[i])&&get.color(trigger.cards[i])=="red")event.suits.push(get.suit(trigger.cards[i]));
					}
					player.chooseTarget(get.prompt2('yj_leiji'),function(card,player,target){
						return target!=player;
					}).ai=function(target){
						if(target.hasSkill('hongyan')) return 0;
						return get.damageEffect(target,_status.event.player,_status.event.player,'thunder');
					};
					"step 1"
					if(result.bool){
						player.logSkill('yj_leiji',result.targets,'thunder');
						event.target=result.targets[0];
						player.judge(function(card){
							if(event.suits.contains(get.suit(card))) return -1;
							return 2;
						})/*.judge2=function(result){
							return result.bool==false?true:false;
						}*/;
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool==true){
						player.addTempSkill("yj_leiji_count");
						player.gain(result.card);
						player.$gain2(result.card);
						event.target.damage(1,'thunder');
					}
				},
				ai:{
					useShan:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')){
								var hastarget=game.hasPlayer(function(current){
									return get.attitude(target,current)<0;
								});
								var be=target.countCards('e',{color:'black'});
								if(target.countCards('h','shan')&&be){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('he')/2:0];
								}
								if(target.countCards('h','shan')&&target.countCards('h')>2){
									if(!target.hasSkill('guidao')) return 0;
									return [0,hastarget?target.countCards('h')/4:0];
								}
								if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
									return [0,0];
								}
								if(target.countCards('h')==0){
									return [1.5,0];
								}
								if(target.countCards('h')==1&&!be){
									return [1.2,0];
								}
								if(!target.hasSkill('guidao')) return [1,0.05];
								return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
							}
						}
					}
				}
			},
			yj_leiji_count:{
				sourceSkill:"yj_leiji",
				trigger:{source:"damageAfter"},
				direct:true,
				onremove:function(player){
					player.storage.leiji=0;
				},
				filter:function(event,player){
					return event.source==player&&event.parent.skill=="yj_leiji"&&event.nature=="thunder"&&event.num>0;
				},
				content:function(){
					if(player.storage.leiji)player.storage.leiji++;
					else player.storage.leiji=1;
				},
			},
			feiyi:{
				group:"feiyi_equip",
				derivation:['ryuuuu'],
				trigger:{source:["damageBefore"]},
				filter:function(event,player){
					return player.countCards("e",{name:"ryuuuu"})&&event.source==player&&event.nature=="thunder";
				},
				content:function(){
					trigger.num=0;
					trigger.player.loseHp();
					trigger.untrigger();
					trigger.finish();
				},
			},
			feiyi_equip:{
				trigger:{player:["damageBegin","damageEnd"]},
				forced:true,
				filter:function(event,player){
					if(player.countCards("e",{name:"ryuuuu"}))return false;
					if(_status.event.triggername=="damageBegin")return event.player==player&&event.nature=="thunder";
					if(_status.event.triggername=="damageEnd")return event.player==player&&event.nature!="thunder";
				},
				content:function(){
					if(event.triggername=="damageBegin")trigger.cancel();
					if(event.triggername=="damageEnd")trigger.source.damage("thunder");
				},
			},
			yy_hunhuo:{
				trigger:{target:["useCardToBegin"]},
				filter:function(event,player){
					return event.card&&get.subtype(event.card)=="attack"&&player.hasSkill("yy_hunhuo")&&event.player!=player&&event.target==player;
				},
				content:function(){
					"step 0"
					trigger.player.addTempSkill("yy_fanchang");
					"step 1"
					trigger.player.storage.yy_fanchang.player=player;
					trigger.player.storage.yy_fanchang.position=player.dataset.position;
					//trigger.player.storage.yy_fanchang.maxHp=player.dataset.maxHp;
					//trigger.player.storage.yy_fanchang.hp=player.dataset.hp;
					//trigger.player.storage.yy_fanchang.lili=player.dataset.lili;
					//player.lose(player.getCards("hej"));
					//player.$throw(player.getCards("hej"));
					"step 2"
					game.removePlayer(player);
					trigger.untrigger();
					trigger.finish();
				},
				prompt2:"你成为攻击牌的目标后，你可以直至本回合结束移除游戏，令之无效。",
			},
			yy_fanchang:{
				init:function(player){
					player.storage.yy_fanchang={
						player:player,
						position:0,
						maxHp:3,
						hp:3,
						maxlili:5,
						lili:3,
						handcard:4,
					}
				},
				onremove:function(player){
					var target = player.storage.yy_fanchang.player,position = player.storage.yy_fanchang.position;
					game.restorePlayer(target);
					/*game.addPlayer(position,target.name,target.name2);
					var pl = game.players[position];*/
					//pl.directgain(target.getCards());
					/*delete pl.removed;
					//pl.removeAttribute('style');
					pl.animate('start');
					ui.arena.appendChild(pl);
					pl.draw(4)._triggered=null;
					pl.init(target.name, target.name2);
					ui.arena.classList.add('observe');*/
					//if (get.mode() == 'boss' || get.mode() == 'chess'){
					//	if(target==game.me||target.isOnline()||target.side==game.me.side){
					//		game.swapControl(pl);
					//		game.onSwapControl();
					//	}
					//} else {
					/*	if(target==game.me||target.isOnline())game.swapPlayer(pl);*/
					//}
					/*pl.identity = target.identity;
					pl.identityShown = target.identityShown;
					if(pl.identityShown)pl.setIdentity(pl.identity);
					else pl.setIdentity("cai");
					pl.side = target.side;
					pl.maxlili = target.maxlili;
					pl.lili = target.lili;
					pl.maxHp = target.maxHp;
					pl.hp = target.hp;
					pl.removed=false;*/
					//game.triggerEnter(pl);
					/*pl.classList.remove("out");*/
					ui.me.classList.remove("hidden");
					/*ui.auto.classList.remove("hide");
					ui.wuxie.classList.remove("hide");*/
				},
			},
			wuxiang:{
				init:function(player){
					player.storage.wuxiang=Math.max(player.maxHp,player.getHandcardLimit()?player.getHandcardLimit():4);
					player.isDamaged=function(){
						if (this.hasSkill("wuxiang"))return false;
						else return this.hp<this.maxHp;
					},
					player.getDamagedHp=function(){
						if(this.hasSkill("wuxiang"))return 0;
						else Math.max(this.maxHp-this.hp,0);
					}
				},
				trigger:{player:"loseEnd"},
				usable:1,
				forced:true,
				content:function(){
					player.draw();
					player.storage.wuxiang=Math.max(player.maxHp,player.getHandcardLimit());
				},
				mod:{
					maxHandcard:function(player,num){
						return Math.max(player.storage.wuxiang,player.maxHp);
					},
					/*playerEnabled:function (card,player,target){
						if(card.name=="tao")return true;
					},
					cardEnabled:function (card,player){
						if(card.name=="tao")return true;
					},*/
				},
			},
			feixiang:{
				audio:2,
				cost:0,
				init:function(player){
					lib.skill.feixiang.cost=Math.ceil(game.countPlayer()/2)-1;
				},
				spell:['feixiang2'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.feixiang.cost;
				},
				content:function(){
					if (!player.hasSkill('feixiang2')){
						player.loselili(lib.skill.feixiang.cost);
						player.turnOver();
					}
				},
			},
			feixiang2:{
				onremove:function(player){
					var players=game.filterPlayer();
					for(var i = 0;i < players.length;i++){
						players[i].discard(players[i].getCards("h"));
					}
					var targets=game.filterPlayer().remove(player);
					for(var i = 0;i < targets.length;i++){
						targets[i].draw(4);
					}
					for(var i = 0;i < targets.length;i++){
						player.gainPlayerCard(targets[i],true,'hej');
					}
				},
			},
			td_xiongjie:{
				trigger:{source:"damageBegin"},
				forced:true,
				content:function(){
					if(!player.storage.td_xiongjie){
						player.storage.td_xiongjie=trigger.num;
					} else {
						trigger.num=player.storage.td_xiongjie;
						player.storage.td_xiongjie+=trigger.num;
					}
				}
			},
			sy_chizhen:{
				audio: 2,
				enable: "phaseUse",
				usable:1,
				filter:function(event,player){
				    return player.countCards('he', {type:'equip'})>0;
				},
				position:'he',
				viewAs: {
					name: "juedou",
					isCard: true,
				},
				filterCard: function(card){
					return get.type(card)=='equip';;
				},
				selectCard: 1,
				precontent:function() {
					//player.awakenSkill("juesheng");
					//player.addTempSkill("juesheng_counter");
				},
				ai: {
					result: {
						player:function(player, target) {
							var num = 0;//let num = target.getAllHistory("useCard", evt => evt.card.name == "sha").length + 1;
							if (num < target.hp) {
								return 0;
							}
							return num * lib.card.juedou.ai.result.player.apply(this, arguments);
						},
						target:function(player, target) {
							var num = 0;//let num = target.getAllHistory("useCard", evt => evt.card.name == "sha").length + 1;
							if (num < target.hp) {
								return 0;
							}
							var res = num * lib.card.juedou.ai.result.target.apply(this, arguments);
							if (res >= 0) {
								return 0;
							}
							return res;
						},
					},
					wuxie:function(target, card, player, viewer, status) {
						if (player === game.me && get.attitude(viewer, player._trueMe || player) > 0) {
							return 0;
						}
						if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5,
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1,
					},
				},
			},
			dimai:{
				usable:1,
				enable:'phaseUse',
				group:['dimai_ganglie'],
				filter:function(event,player){
					if (!_status.event.getParent('phaseUse') && !_status.event.getParent('dimai_ganglie')) return false;
					return player.countCards('hej') > 0||_status.currentPhase.countCards('hej') > 0;
				},
				filterTarget:function(card,player,target){
					return target==player||target==_status.currentPhase;
				},
				selectTarget:1,
				//contentBefore:function(){},
				content:function(){
					"step 0"
					player.choosePlayerCard(target,"hej","选择目标一张牌重铸",true);
    				"step 1"
    				if(result.bool){
						event.bool=true;
    					target.recast(result.cards);
    				}
					"step 2"
    				if(event.bool){
						if(get.color(result.cards[0])=="none"||!get.color(result.cards[0])){
							event.list = ["摸一张牌","获得1点灵力","视为使用【疾风骤雨】","视为使用【轰！】"];
							var str='选择两项';
							event.dialog = ui.create.dialog(str, 'forcebutton');
							var table = ui.create.div('.placeholder');
							table.classList.add('add-setting');
							table.style.margin = '0';
							table.style.width = '100%';
							table.style.position = 'relative';
							for (var i = 0; i < event.list.length; i++) {
								var td = ui.create.div('.container');
								td.innerHTML = '<div class="popup text pointerdiv" style="left:0px;width:calc(100%);display:inline-block">'+event.list[i]+'</div>';
								td.style.margin = '10px';
								td.style.height = '25px';
								td.style.width = '80%';
								td.style.position = 'relative';
								td.link = event.list[i];
								td.addEventListener('click', ui.click.button);
								table.appendChild(td);
								event.dialog.buttons.add(td);
							}
							event.dialog.content.appendChild(table);
							//event.dialog.style='background-image:url("image/.jpg");border-radius: 25px;background-size:100% 100%; background-repeat: no-repeat;';
							var next = player.chooseButton([2,2]);
							next.set('forced', true);
							//next.set('dialog', event.dialog);
						}
    				}
					"step 3"
					if(event.bool){
						if((player!=game.me&&!player.isOnline())||_status.auto){
							var choose = [];
							var result= {
								bool:true,
								links:[],
							}
							var choose = [];
							if (player.countCards("h")>player.hp){
								choose.push('摸一张牌');
							}
							if (player.lili>=player.maxlili){
								choose.push('获得1点灵力');
							}
							if(game.countPlayer(function(current){return current.countCards("hej")>0})){
								choose.push('视为使用【疾风骤雨】');
							}
							if(game.countPlayer(function(current){return current.side!=player.side})==0){
								choose.push('视为使用【轰！】');
							}
							if(choose.length>1)result.links=choose.randomGets(2);
							else result.links=event.list.randomGets(2);
						}
						if (event.dialog) event.dialog.close();
						if(result.links.contains("摸一张牌")||get.suit(result.links[0])=="heart")player.draw();
    					if(result.links.contains("获得1点灵力")||get.suit(result.links[0])=="diamond")player.gainlili();
    					if(result.links.contains("视为使用【疾风骤雨】")||get.suit(result.links[0])=="club")player.chooseUseTarget({name:"guohe"},null,true);
    					if(result.links.contains("视为使用【轰！】")||get.suit(result.links[0])=="spade")player.chooseUseTarget({name:"sha"},null,true);
    				}
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							if (player.lili > 2 ) return 0.5;
							return -1;
						}
					},
					threaten:1,	
				}
			},
			dimai_ganglie:{
				trigger:{player:'damageEnd'},
				sourceSkill:"dimai",
				usable:1,
				filter:function(event,player){
					if (event.player!=player) return false;
					return player.countCards('hej') > 0 && _status.currentPhase.countCards('hej') > 0;
				},
				content:function(){
					'step 0'
					var next=player.chooseToUse(function(event){return event.getParent(3)=='dimai'});
					//next.logSkill='dimai';
					next.set('openskilldialog','重铸你或当前回合角色一张牌');
					next.set('norestore',true);
					next.set('_backupevent','dimai');
					next.backup('dimai');
					/*player.chooseToUse(function(card){
						return false;
					},'重铸你或当前回合角色一张牌',true).set('logSkill','dimai');*/
				},
				check:function(){
					return true;
				},
			},
			_hisoutensoku:{
				trigger:{player:"equipBegin"},
				filter:function(event,player){
					var types=[];
					if(lib.card[event.card.name].subtype&&!types.contains(lib.card[event.card.name].subtype))types.push(lib.card[event.card.name].subtype);
					for(var card of player.getCards("e")){
						if(lib.card[card.name].subtype&&!types.contains(lib.card[card.name].subtype))types.push(lib.card[card.name].subtype);
					}
					return types.length>=4;
				},
				content:function(){
					player.lose(player.getCards("e"));
					if(!player.name2){
						player.classList.add('fullskin2');
						player.node.avatar2.setBackground('hisoutensoku','character');
						player.node.avatar2.show();
						player.name2=get.translation('hisoutensoku');
					}else player.reinit(player.name2,"hisoutensoku",true);
					player.addSkill("_hisoutensoku");
					game.filterPlayer(function(target){
						target.awakenSkill('_hisoutensoku');
					});
					trigger.cancel();
				},
			},
		},
		translate:{
			iku:'衣玖',
			yj_leiji:'雷棘',
			yj_leiji_count:'雷棘',
			yj_leiji_info:'你失去牌时，若其中有红色牌且本回合以此法造成的灵击伤害少于你的体力，你可以令一名角色并判定：你获得与其中的红色牌花色均不同的判定牌并对该角色造成1点灵击伤害',
			feiyi:'绯衣天使',
			feiyi_info:'若你的装备区有【龙宫羽衣】，一回合每名角色限一次，你对其他角色造成灵击伤害时，可以改为其失去1点体力；若你装备区没有【龙宫羽衣】，你视为装备着【龙宫羽衣】。',
			ryuuuu:'龙宫羽衣',
			ryuuuu_info:'锁定技，你受到灵击伤害时，防止该伤害；你受到伤害后，对伤害来源造成1点灵击伤害。',
			yy_hunhuo:'天羽',
			yy_hunhuo_info:'你成为攻击牌的目标后，你可以直至本回合结束移除游戏，令之无效。',
			//yy_hunhuo_info:'当你需要使用或打出牌时，你可以摸一张牌（之后使用无法响应，打出视同响应），然后若此时为你的出牌阶段，你不能再发动此技能。<span class="greentext">一局一次</span>，你成为攻击牌的目标后，你可以直至本回合结束移除游戏，令之无效。',
			//yy_hunhuo_append:'注：你摸牌时，若不为【请你住口！】或决死求【葱】则跳过响应，若为打出则视同响应，你离场后，你的技能失去所有时点。',
			yy_fanchang:'天羽·返场',
			tenshi:'天子',
			wuxiang:'无想之境',
			wuxiang_info:'锁定技，一回合一次，你失去牌时，摸一张牌；你的手牌上限不会随体力减少而减少；其他角色不会将你视为处于已受伤状态，其他角色计算你已受伤值时，始终为0。',
			feixiang:'全人类的绯想天',
			feixiang_info:'符卡技（X-1）<u>游戏开始、你登场或获得此技能时，将X调整为存活角色数的一半（向上取整）</u>，符卡结束时，你弃置所有角色的手牌：令所有其他角色手牌补至四张，然后你获得所有其他角色一张牌。',
			dimai:'地脉掌握',
			dimai_ganglie:'地脉掌握',
			dimai_info:'一回合各限一次，出牌阶段，或你受到伤害后，你可以选择你或当前回合角色的一张牌，重铸之，然后选择的牌为：\
			<br>红桃：你摸一张牌；方片：你获得1点灵力；梅花：你视为使用一张【疾风骤雨】；黑桃：你视为使用一张【轰！】；无色牌：按顺序执行上述两项。',
			
			utsuho:'路空',
			sy_chizhen:'搦战',
			sy_chizhen_info:'出牌阶段限一次，你可以将一张装备当【决斗】使用。',
			td_xiongjie:'核爆',
			td_xiongjie_info:'锁定技，你造成伤害时，若你造成过伤害，此伤害改为你合计造成过的伤害值。',
			
			hisoutensoku:'非想天则',
			_hisoutensoku:'非想天则',
			_hisoutensoku_info:'法则技，“非想天则”不能正常选出使用，装备牌进入一名角色装备区时，若此牌与其装备区的牌共有四属性，销毁这些牌，将“非想天则”加入游戏。',
		},
	};
});