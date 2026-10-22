'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'aeolus',
		connect:true,
		character:{
			sizuha:['female','2',4,['shuangsi','rangtian']],
			minoriko:['female','2',3,['dayou','rangtian']],
			hina:['female','2',3,['xichuan','eyun']],
			//nitori:['female','2',4,['muqi','shiguan']],
			momizi:['female','2',4,['shuwei']],
			sanae:['female','2',3,['qiji'/*,'shenfeng','omikuji'*/]],
			kanako:['female','2',4,['yushe','shende']],
			suwako:['female','2',3,['chiwa','fengyu']],
		},
		characterIntro:{
			sanae:'全名东风谷早苗，从外面世界来的人类，守矢神社的巫女、风祝与现人神，负责去山麓的人类村落传教收集信仰。<br><b>画师：ke-ta</b>',
			kanako:'全名八坂神奈子，守矢神社名义上祭祀的神明，喜好技术革新，有不重视传统的倾向，不管什么样的信仰都有在收集。<br>设计：纯爱妖精 <b>画师：羽々斬</b>',
			hina:'全名键山雏，最好不要记得她的名字，和她走太近通常会走霉运。<br><b>画师：黄油吐司猫咪永动机</b>',
			minoriko:'全名秋穰子，掌管幻想乡秋天的八百万神之一，掌管着丰收，是丰收之神。作为丰裕与收成的象征，她性格比较朴素开朗，没什么神的威严。<br><b>画师：蝶蝶子</b>',
			sizuha:'全名秋静叶，掌管秋天的红叶之神，是秋穰子的姐姐，因为穰子的人气更高，会沉浸在给妹妹看美丽的红叶的优越感中。<br><b>画师：かいお</b>',
			momizi:'全名犬走椛，在妖怪之山中负责巡逻和警戒的白狼天狗之一，平时都很闲，会找附近的河童下大将棋。<br><b>画师：ふぁみ</b>',
			suwako:'全名洩矢诹访子，守矢神社供奉的神之一，统领着诸多祟神，平时总是装出一副呆呆的样子，无法看透在想什么，<br><b>画师：菜乃はな</b>',
			nitori:'河城荷取',
		},
		perfectPair:{
		},
		skill:{
			//东风谷早苗
			shenfeng:{},
			qiji:{
				audio: true,
				derivation:'reidaisai2',
				trigger: { global: "useCard" },
				//usable:1,
				init:function(player){
					if(player.hasSkill("qiji_count"))player.removeSkill("qiji_count");
					game.loadModeAsync('boss',function(mode){
						lib.card["reidaisai2"]=mode.card.reidaisai2;
						game.finishCards();
					});
				},
				filter: function (event, player) {
					if (get.subtype(event.card) != "attack" && get.subtype(event.card) != "disrupt" && get.type(event.card) != "jinji") return false;
					//if(event.getParent(3).skill)return false;
					return !player.storage.qiji||!player.storage.qiji.contains(event.player.playerid);
				},
				check:function(event,player){
					return get.attitude(player,event.player) > 0;
				},
				content: function () {
					'step 0'
					//trigger.untrigger();
					var player = this.player;
					var target = trigger.player;
					game.broadcastAll(function(player, id){
						if(!player.tempSkills["qiji_count"])player.addTempSkill("qiji_count");
						if(!player.storage.qiji) player.storage.qiji = [];
						if(!player.storage.qiji.contains(id))player.storage.qiji.push(id);
					}, player, target.playerid);
					'step 1'
					//var players = trigger.targets;
					event.fakecard={name:"reidaisai2"};
					trigger.player.useCard(event.fakecard, trigger.targets);
				},
			},
			qiji_count:{
				init:function(player){
					if(!player.storage.qiji) player.storage.qiji=[];
				},
				onremove:function(player){
					delete player.storage.qiji;
				},
			},
			omikuji:{
				forced:true,
				trigger:{global:"useCardBefore"},
				filter:function(event,player){
					return event.player.getCards("h").contains(event.card)&&event.targets.length==1&&event.player.countCards("h")>=event.targets[0].countCards("h")*2&&event.getParent(0).skill!="omikuji";
				},
				content:function(){
					"step 0"
					event.canUse = trigger.player.getCards("h");
					for(var i=0;i<event.canUse.length;i++){
						if(event.canUse[i]==trigger.card||get.info(event.canUse[i]).notarget||!lib.filter.targetEnabled2(event.canUse[i],trigger.player,trigger.targets[0])){
							event.canUse.remove(event.canUse[i]);
							i--;
						}
					}
					"step 1"
					if(event.canUse&&event.canUse.length>=2){
						var cards=event.canUse.randomGets(2);
						cards.push(trigger.card);
						trigger.targets[0].chooseCardButton(1,true,cards).set('ai',function(button){return 1;});
					}
					"step 2"
					if(result.links){
						trigger.player.useCard(result.links,trigger.targets);
						trigger.untrigger();
						trigger.finish();
					}
				},
			},
			//八坂神奈子
			yushe:{
				/*trigger:{global:'useCard'},
				priority:7,
				filter:function(event,player){
					player.storage.yushe=event.card.name;
					return event.targets.contains(player);
				},
				audio:true,
				content:function(){
					player.addTempSkill("yushe3","useCardAfter");
					if(trigger.targets.length == 1){
						trigger.card.name='juedou';
						if(trigger.player==player){
							event.result=player.chooseUseTarget(trigger.card,null,true);
							trigger.targets.remove(player);
							trigger.targets.push(event.result.targets);
							trigger.cancel();
						}
					}
					else trigger.player.addTempSkill("yushe2","useCardEnd");
				}
			},
			yushe2:{
				sourceSkill:"yushe",
				forced:true,*/
				group:["yushe_naman","yushe_End"],
				trigger:{target:'useCardToBegin'},
				priority:7,
				filter:function(event,player){
					return event.getParent(3).skill != "yushe" && event.target == player && get.type(event.card)!="equip";
				},
				audio:true,
				check:function(event,player){
					return get.attitude(player,event.player) < 0 && player.countCards("h", {name:"sha"}) > event.player.countCards("h", {name:"sha"})&&!event.player.hasSkillTag('respondSha');
				},
				content:function(){
					//player.addTempSkill("yushe3","useCardAfter");
					var target = player;
					if(trigger.player==undefined||trigger.player==player)target=player.chooseUseTarget({name:'juedou',cards:trigger.cards},trigger.cards);
					else trigger.player.useCard({name:'juedou'},/*trigger.cards,*/target);
					trigger.untrigger();
					trigger.finish();
					//trigger.cancel();
				},
				subSkill:{
					naman:{
						audio:2,
						sub:true,
						sourceSkill:"yushe",
						trigger:{global:'respondEnd'},
						init:function(player){
							player.storage.yushe_naman=[];
						},
						filter:function(event,player){
							if(event.card.name!='sha') return false;
							if(event.getParent(2).name!="juedou") return false;
							if(event.cards){
								for(var i=0;i<event.cards.length;i++){
									if(get.position(event.cards[i])=='d') return true;
								}
							}
							return false;
						},
						silent:true,
						content:function(){
							var cards=trigger.cards.slice(0);
							for(var i=0;i<cards.length;i++){
								if(get.position(cards[i])!='d'){
									cards.splice(i--,1);
								}
							}
							game.delay(0.5);
							for(var i=0;i<cards.length;i++){
								player.storage.yushe_naman.push(cards[i]);
							}
							//player.gain(cards,'gain2');
						},
					},
					End:{
						audio:2,
						sub:true,
						sourceSkill:"yushe",
						trigger:{global:'useCardEnd'},
						filter:function(event,player){
							return event.card.name=='juedou';
						},
						forced:true,
						content:function(){
							if(player.storage.yushe_naman?.length)player.gain(player.storage.yushe_naman,'gain2');
							trigger.card.name=player.storage.yushe;
							player.storage.yushe_naman=[];
						},
					},
				},
			},
			shende:{
				audio:2,
				trigger:{player:['chooseToUseBegin','chooseToRespondBegin']},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(player.storage.shende) return false;
					if(get.subtype(event.getParent(2).card)!="attack") return false;
					//if(event.filterCard({name:'shan'})==false) return false;
					return true;
				},
				/*check:function(event,player){
					if(get.damageEffect(player,event.player,player)>=0) return false;
					return true;
				},*/
				content:function(){
					"step 0"
					player.addTempSkill("shende_lianhuan",{target:"useCardAfter"});
					player.useSkill("shende_give");
					"step 1"
					event.name = "sha";
					if(_status.event.getTrigger().filterCard("shan"))event.name = "shan";
					if(_status.event.getTrigger().filterCard("tao"))event.name = "tao";
					"step 2"
					if(event.current==undefined) event.current=player.next;
					if(event.current==player){
						event.finish();
					}
					else if(event.current.hasSkill("shende_count")||player.storage.shende_give.contains(event.current)){
						if(((event.current==game.me||event.current.isOnline())&&!_status.auto)||(get.attitude(event.current,player)>2)){
							//player.storage.shende=true;
							var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张'+get.translation(event.name)+'？',{name:event.name});
							next.set('ai',function(){
								//var event=_status.event;
								return (get.attitude(event.current,player)>2);
							});
							next.set('source',player);
							next.set('shende',true);
							if(event.name == "sha")next.autochoose=lib.filter.autoRespondSha;
							else if(event.name == "shan")next.autochoose=lib.filter.autoRespondShan;
						}
					}
					"step 3"
					//player.storage.shende=false;
					if(result.bool){
						event.finish();
						trigger.result=result;
						trigger.responded=true;
						trigger.animate=false;
						if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
							event.current.ai.shown+=0.3;
							if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
						}
					}
					else{
						event.current=event.current.next;
						event.goto(2);
					}
				},
				prompt2:'你需要使用/打出牌响应攻击牌时，所有其他角色交给你至少一半手牌，然后这些角色可以替你使用或打出牌。',
				group:["shende_target","shende_damage"],
			},
			shende_target:{
				audio:2,
				sub:true,
				sourceSkill:"shende",
				trigger:{player:'useCard'},
				filter:function(event, player){
					if(event.targets.length == 1 && event.targets.contains(player)) return false;
					return event.card && get.subtype(event.card) == 'attack' && event.player == player;
				},
				content:function(){
					player.useSkill("shende_give");
				},
				prompt2:'你使用攻击牌时，所有其他角色可以交给你至少一半手牌',
				ai:{
					expose:0.3
				},
			},
			shende_damage:{
				sub:true,
				sourceSkill:"shende",
				direct:true,
				trigger:{global:"damageAfter"},
				content:function(){
					trigger.player.addTempSkill("shende_count");
				},
			},
			shende_count:{},
			shende_lianhuan:{
				sub:true,
				sourceSkill:"shende",
				trigger:{player:'damageEnd'},
				forced:true,
				popup:false,
				//logv:false,
				priority:-5,
				content:function(){
					"step 0"
					var players=game.filterPlayer(function(target){
						return target!=player && target.hasSkill("shende_count");
					});
					//lib.tempSortSeat=player;
					players.sort(lib.sort.seat);
					//delete lib.tempSortSeat;
					for(var i=0;i<players.length;i++){
						if(trigger.source){
							players[i].damage(trigger.num,trigger.nature,trigger.source,trigger.cards,trigger.card);
						}
						else{
							players[i].damage(trigger.num,trigger.nature,'nosource',trigger.cards,trigger.card);
						}
					}
				}
			},
			shende_give:{
				sourceSkill:"shende",
				popup:false,
				direct:true,
				content:function(){
					"step 0"
					player.storage.shende_give=[];
					event.targets=game.filterPlayer();
					event.targets.remove(player);
					event.targets.sortBySeat();
					"step 1"
					if(event.targets.length){
						event.current=event.targets.shift();
						if(event.current.countCards('h')&&player.isAlive()){
							//if((event.current==game.me&&!_status.auto)||(get.attitude(event.current,player)>2)||event.current.isOnline()){
								var next = event.current.chooseCard('h',[Math.ceil(event.current.countCards('h')/2),event.current.countCards('h')],'交给'+get.translation(player)+'至少一半手牌');
								next.set('ai',function(card){
									return get.attitude(event.current,player) > 2 && event.current.getCards("h").contains(card) && get.value(card) > 4;
								});
								next.set('source',player);
								next.set('shende',true);
							//}
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						player.storage.shende_give.push(event.current);
						event.current.give(result.cards,player);
					}
					"step 3"
					event.goto(1);
				},
			},
			//键山雏
			eyun:{
				audio:2,
				derivation:["_eyun","biorhythm"],
				/*trigger:{global:'useCardToBegin'},
				filter:function(event,player){
					return get.subtype(event.card) == 'attack'&&(player.name == "hina"||player.name2 == "hina");
				},
				check:function(event,player){
					return get.attitude(player,event.target) > 0;
				},
				content:function(){
					if(player.name=="hina"){
						lib.card[player.name] = {
							type:'',
							fullskin:true,
							filterTarget:function(card,player,target){
								return false;
							},
							judge:function(card){
								return 0;
							},
							effect:function(){
							},
							//skills:-1,
							content:function(){
							},
						}
						var card = game.createCard(player.name,"",0);
						card.node.image.style.backgroundImage=player.node.avatar.style.backgroundImage;
						card.setBackgroundImage('theme/simple/unknown.png');
						lib.translate[player.name+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
						var cards = [];
						cards.push(card);
						player.discard(cards);
						game.log(trigger.card,'对',trigger.target,'无效');
						trigger.untrigger();
						trigger.cancel();
						event.str=get.translation(player.name)+'无效了'+get.translation(trigger.card);
						game.notify(event.str);
						player.name = "未知";
						player.node.avatar.hide();
					}else if(player.name2=="hina"){
						lib.card[player.name2] = {
							type:'',
							fullskin:true,
							filterTarget:function(card,player,target){
								return false;
							},
							judge:function(card){
								return 0;
							},
							effect:function(){
							},
							//skills:-1,
							content:function(){
							},
						}
						var card = game.createCard(player.name2,"",0);
						card.node.image.style.backgroundImage=player.node.avatar2.style.backgroundImage;
						card.setBackgroundImage('theme/simple/unknown.png');
						lib.translate[player.name2+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
						var cards = [];
						cards.push(card);
						player.discard(cards);
						game.log(trigger.card,'对',trigger.target,'无效');
						trigger.untrigger();
						trigger.cancel();
						event.str=get.translation(player.name2)+'无效了'+get.translation(trigger.card);
						game.notify(event.str);
						player.name2 = "未知";
						player.node.avatar2.hide();
						player.classList.remove('fullskin2');
					}
				},*/
				trigger:{global:"changeHp",},
				filter:function(event,player){
					return event.num < 0 && event.player.hp < 1;// &&(player.name == "hina"||player.name2 == "hina");
				},
				check:function(event,player){
					return get.attitude(player,event.player) > 2;
				},
				content:function(){
					"step 0"
					if(player.name2)player.chooseControl(["放逐"+lib.translate[player.name]+"人偶","放逐"+lib.translate[player.name2]+"人偶"]);
					"step 1"
					if(!player.name2||result.control=="放逐"+lib.translate[player.name]+"人偶"){
						game.broadcastAll(function(name, translate, translateInfo, image, background, avatarSize){
							lib.translate["xc_"+player.name]=lib.translate[player.name];
							lib.translate["xc_"+player.name+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
							lib.card["xc_"+player.name] = {
								type:'character',
								fullskin:false,
								fullimage:true,
								image:player.node.avatar.style.backgroundImage,
								cardback:background,
								cardbackSize:avatarSize,
								filterTarget:function(card,player,target){
									return false;
								},
								judge:function(card){
									return 0;
								},
								effect:function(){
								},
								//skills:-1,
								content:function(){
								},
							};
						}, player.name, lib.translate[player.name], "<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>", player.node.avatar.style.backgroundImage, 'theme/simple/unknown.png', "125% auto");
						var card = game.createCard("xc_"+player.name,"",0);
						game.broadcastAll(function(playerid, cardid, owner, slot, origin, avatarBg, avatarSize){
							var cd = lib.cardOL ? lib.cardOL[cardid] : null;
							if(!cd){
								return;
							}
							//cd.node.name.innerHTML=get.translation(player.name);
							cd._xc_owner = owner;
							cd._xc_slot  = slot;
							cd._xc_origin = origin;
							cd.classList.add('fullskin');
							cd.node.image.style.backgroundImage=avatarBg;
							cd.node.image.style.backgroundSize=avatarSize;
							cd.setBackgroundImage('theme/simple/unknown.png');
						}, player.playerid, card.cardid, player.playerid, 'name', player.name, player.node.avatar.style.backgroundImage, "125% auto");
						var cards = [];
						cards.push(card);
						player.useCard({name:"tao"},cards,trigger.player);
						player.addSkill("biorhythm");
						if(lib.character[player.name][3])event.list=lib.character[player.name][3];
						player.name = " ";
						player.node.name.hide();
						player.node.avatar.hide();
						for(var i=0;i<event.list.length;i++){
							player.removeSkill(event.list[i]);
							if(!player.storage.biorhythm)player.storage.biorhythm=[event.list[i]];
							else player.storage.biorhythm.push(event.list[i]);
						}
					//player.removeSkill("eyun");
					//player.removeSkill("xichuan");
					} else if(result.control=="放逐"+lib.translate[player.name2]+"人偶"){
						game.broadcastAll(function(name, translate, translateInfo, image, background, avatarSize){
							lib.translate["xc_"+player.name2]=lib.translate[player.name2];
							lib.translate["xc_"+player.name2+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
							lib.card["xc_"+player.name2] = {
								type:'character',
								fullskin:false,
								fullimage:true,
								image:player.node.avatar2.style.backgroundImage,
								cardback:background,
								cardbackSize:avatarSize,
								filterTarget:function(card,player,target){
									return false;
								},
								judge:function(card){
									return 0;
								},
								effect:function(){
								},
								//skills:-1,
								content:function(){
								},
							};
						}, player.name2, lib.translate[player.name2], "<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>", player.node.avatar2.style.backgroundImage, 'theme/simple/unknown.png', "125% auto");
						var card = game.createCard("xc_"+player.name2,"",0);
						game.broadcastAll(function(playerid, cardid, owner, slot, origin, avatarBg, avatarSize){
							var cd = lib.cardOL ? lib.cardOL[cardid] : null;
							if(!cd){
								return;
							}
							//cd.node.name.innerHTML=get.translation(player.name);
							cd._xc_owner = owner;
							cd._xc_slot  = slot;
							cd._xc_origin = origin;
							cd.classList.add('fullskin');
							cd.node.image.style.backgroundImage=avatarBg;
							cd.node.image.style.backgroundSize=avatarSize;
							cd.setBackgroundImage('theme/simple/unknown.png');
						}, player.playerid, card.cardid, player.playerid, 'name2', player.name2, player.node.avatar2.style.backgroundImage, "125% auto");
						var cards = [];
						cards.push(card);
						player.useCard({name:"tao"},cards,trigger.player);
						player.addSkill("biorhythm");
						if(lib.character[player.name2][3])event.list=lib.character[player.name2][3];
						player.name2 = " ";
						player.node.name2.hide();
						player.node.avatar2.hide();
						player.classList.remove('fullskin2');
						for(var i=0;i<event.list.length;i++){
							player.removeSkill(event.list[i]);
							if(!player.storage.biorhythm)player.storage.biorhythm=[event.list[i]];
							else player.storage.biorhythm.push(event.list[i]);
						}
						//player.removeSkill("eyun");
						//player.removeSkill("xichuan");
					}
					
				},
			},
			_eyun:{
				//skillAnimation:true,
				trigger:{player:'gainEnd'},
				forced:true,
				popup:false,
				filter:function(event,player){
					var invoke = false;
					if(event.cards){
						for (var i = 0; i < event.cards.length; i ++){
							if (event.cards[i] && get.type(event.cards[i])=='character'&&event.cards[i].name.indexOf("xc_")==0){
								invoke = true;
							}
						}
					}
					return invoke;
				},
				content:function(){
					var card;
					for(var i=0;i<trigger.cards.length;i++){
						if(get.type(trigger.cards[i])=='character'&&trigger.cards[i].name.indexOf("xc_")==0){
							if(!trigger.player.hasSkill("biorhythm")){
								game.log('<span class="bluetext">'+get.translation(trigger.player)+'</span>受到<span class="bluetext">键山雏</span>的诅咒，失去1点体力。');
								trigger.player.loseHp();
							}
							card = trigger.cards[i];
						}
					}
					if(card){
						game.log('<span class="yellowtext">诅咒人偶</span>被<span class="bluetext">键山雏</span>回收。');
						card.delete();
						card._destroy = true;
					}
					if(card._xc_owner !== undefined){
						var owner = null;
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].playerid == card._xc_owner){
								owner = game.players[i];
								break;
							}
						}
						if(!owner){
							for(var i=0;i<game.dead.length;i++){
								if(game.dead[i].playerid == card._xc_owner){
									owner = game.dead[i];
									break;
								}
							}
						}
						if(owner){
							var targetName = card.name.slice(3);
							var originName = card._xc_origin || targetName;
							if(card._xc_slot === 'name' && owner.name === ' '){
								owner.name = targetName;
								owner.node.name.show();
								owner.node.avatar.show();
								owner.reinit(originName, targetName, true);
								if(owner.name2 != " " && owner.hasSkill("biorhythm")){
									owner.removeSkill("biorhythm");
								}
							} else if(card._xc_slot === 'name2' && owner.name2 === ' '){
								owner.classList.add("fullskin2");
								owner.name2 = targetName;
								owner.node.name2.show();
								owner.node.avatar2.show();
								owner.reinit(originName, targetName, true);
								if(owner.name != " " && owner.hasSkill("biorhythm")){
									owner.removeSkill("biorhythm");
								}
								if(owner.storage.biorhythm){
									for(var j=0;j<owner.storage.biorhythm.length;j++){
										owner.addSkill(owner.storage.biorhythm[j]);
									}
									owner.storage.biorhythm = [];
								}
							}
							return;
						}
					}
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].name == ' '&&players[i].node.name.innerHTML==get.slimName(card.name.slice(3))){//&& players[i].node.avatar.classList=="avatar hidden"
							players[i].name = card.name.slice(3);
							players[i].node.name.show();
							players[i].node.avatar.show();
							if(players[i].name2!=" ")players[i].removeSkill("biorhythm");
							players[i].reinit(players[i].name,card.name.slice(3),true);
						}else if(players[i].name2 == ' '&&players[i].node.name2.innerHTML==get.slimName(card.name.slice(3))){
						players[i].classList.add("fullskin2");
							players[i].name2 = card.name.slice(3);
							players[i].node.name2.show();
							players[i].node.avatar2.show();
							if(players[i].name!=" ")players[i].removeSkill("biorhythm");
							players[i].reinit(players[i].name2,card.name.slice(3),true);
							if(players[i].storage.biorhythm){
								for(var j = 0;j < players[i].storage.biorhythm.length;j++){
									players[i].addSkill(players[i].storage.biorhythm[j]);
								}
								players[i].storage.biorhythm=[];
							}
						}
					}
				},
			},
			xichuan:{
				trigger:{global:["damageBefore","changeHp"]},
				forced:true,
				filter:function(event,player){
					if(_status.event.triggername=="changeHp"&&event.num>=0)return false;
					if(_status.event.triggername=="damageBefore"&&(event.nature=="thunder"||event.num<=0))return false;
					if(get.mode()=="chess")return event.player==player||player.getNeighbours().contains(event.player);
					return event.player==player.getPrevious()||event.player==player||event.player==player.getNext();
				},
				content:function(){
					if(event.triggername=="damageBefore"){
						trigger.player.loseHp(trigger.num);
						trigger.num = 0;
						trigger.untrigger();
						trigger.finish();
					}else player.draw(Math.abs(trigger.num));
				}
			},
			biorhythm:{
				trigger:{global:"phaseBegin",},
				filter:function(event,player){
					return event.player != player;
				},
				content:function(){
					player.addTempSkill("biorhythm_discard");
					player.draw(2);
				}
			},
			biorhythm_discard:{
				sourceSkill:"biorhythm",
				direct:true,
				trigger:{global:"phaseEnd",},
				content:function(){
					player.chooseToDiscard(2, "hej","你因“生理节奏”需要弃置两张牌", true);
				}
			},
			//秋静叶
			shuangsi:{
				group:"shuangsi_death",
				usable:1,
				trigger:{
					player:"gainAfter",
				},
				filter:function (event,player){
					var max = 0, cards = player.getCards("h"), map = {};
					for(var i=0;i<cards.length;i++){
						var suit = get.suit(cards[i]);
						if (!map[suit]) map[suit] = 0;
						map[suit]++;
						if (map[suit] > max) max = map[suit];
					}
					var invoke = false, gains = event.cards;
					for(var i=0;i<gains.length;i++){
						var suit = get.suit(gains[i]);
						if (map[get.suit(gains[i])] == max) invoke = true;
					}
					return invoke;
				},
				content:function (){
					"step 0"
					player.chooseUseTarget({name:'guohe'});
					"step 1"
					var cards = player.getCards("h");
					for(var i=0;i<cards.length;i++){
						var suit = get.suit(cards[i]);
						if (!event.suits) event.suits = [suit];
						event.suits.push(suit);
					}
					if(event.suits < 4)player.draw();
				}
			},
			shuangsi_death:{
				sourceSkill:"shuangsi",
				trigger:{player:"dieBegin"},
				forced:true,
				content:function(){
					"step 0"
					player.chooseTarget('选择一名角色令其获得“大有”',true,function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						if(target == player)return 0;
						var att=get.attitude(_status.event.player,target);
						if(_status.event.enemy){
							return -att;
						} else{
							if(att>2) return att/Math.sqrt(1+target.countCards('h'));
							return att/Math.sqrt(1+target.countCards('h'))/5;
						}
					});
					"step 1"
					if(result.bool){
						result.targets[0].addSkill("shuangsi");
					}
				}
			},
			//秋穰子
			dayou:{
				group:"dayou_death",
				trigger:{player:"drawBegin"},
				forced:true,
				content:function(){
					trigger.num = Math.max(trigger.num, (5-player.countCards("h")));
				}
			},
			dayou_death:{
				sourceSkill:"dayou",
				trigger:{player:"dieBegin"},
				forced:true,
				content:function(){
					"step 0"
					player.chooseTarget('选择一名角色令其获得“大有”',true,function(card,player,target){
						return target!=player;
					}).set('ai',function(target){
						if(target == player)return 0;
						var att=get.attitude(_status.event.player,target);
						if(_status.event.enemy){
							return -att;
						} else{
							if(att>2) return att/Math.sqrt(1+target.countCards('h'));
							return att/Math.sqrt(1+target.countCards('h'))/5;
						}
					});
					"step 1"
					if(result.bool){
						result.targets[0].addSkill("dayou");
					}
				}
			},
			rangtian:{
				trigger:{player:"damageEnd"},
				init:function(){
					game.loadModeAsync('boss',function(mode){
						for(var i in mode.card){
							if(i == "reidaisai2"){
								if(lib.card[i]) console.log(i);
								console.log(i);
								lib.card[i]=mode.card[i];
								game.finishCards();
								break;
							}
						}
					});
				},
				filter:function(event){
					return event.nature!="thunder";
				},
				content:function(){
					if(trigger.source&&trigger.source!=player)trigger.source.useCard({name:"reidaisai2"},player);
					else player.useCard({name:"reidaisai"},player);
				}
			},
			//犬走椛
			shuwei:{
				trigger:{global:'useCardToBefore'},
				direct:true,
				popup:false,
				priority:5,
				filter:function(event,player){
					if(!event.target || !lib.filter.targetInRange({name:'sha'},player,event.target)) return false;
					if(event.targets.length>1&&event.targets.contains(player))return false;
					var card=event.card;
					return (card.name=='sha')||(get.color(card)=='black'&&get.type(card)=='trick');
				},
				check:function(event,player){
				    return get.attitude(player,event.target)>0||(get.attitude(player,event.player)<=0&&get.value(event.card,event.target)>2);
				},
				content:function(){
					"step 0"
					var save=false;
					if(get.attitude(player,trigger.target)>2){
						if(trigger.card.name=='sha'){
							if(player.countCards('h','shan')||player.getEquip(2)||
							trigger.target.hp==1||player.hp>trigger.target.hp+1){
								if(!trigger.target.countCards('h','shan')||trigger.target.countCards('h')<player.countCards('h')){
									save=true;
								}
							}
						}
						else if(trigger.card.name=='juedou'&&trigger.target.hp==1){
							save=true;
						}
						else if(trigger.card.name=='shunshou'&&get.attitude(player,trigger.player)<0&&get.attitude(trigger.player,trigger.target)<0){
							save=true;
						}
					}
					var next=player.chooseBool(get.prompt('shuwei',trigger.target));
					next.logSkill=['shuwei',trigger.target];
					next.set('aisave',save);
					"step 1"
					if(result.bool){
						player.draw();
						if(trigger.targets.contains(player))event.finish();
						trigger.player.chooseControl('转移','反伤',function(){
							var trigger=_status.event.getTrigger();
							var player=_status.event.player;
							if(trigger.card.name=='sha'){
								if(trigger.target.countCards('h','shan')>1) return '转移';
							}
							else if(trigger.card.name=='juedou'){
								if(trigger.target.countCards('h','sha')>1) return '转移';
							}
							return '反伤';
						}).set('prompt','将【'+get.translation(trigger.card)+'】转移给'+get.translation(player)+'，或结算后令'+get.translation(player)+'可以对你使用相同的牌');
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.control=='转移'){
						//trigger.targets.remove(trigger.target);
						trigger.target=player;
						trigger.targets.length--;
						trigger.targets.push(player);
						trigger.untrigger();
						game.log('<span class="yellowtext">'+get.translation(trigger.card)+'</span>的目标转移给<span class="bluetext">'+get.translation(player)+'</span>');
						trigger.trigger(trigger.card.name+'Before');
						trigger.trigger('useCardToBegin');
						trigger.player.line(player);
					}
					else{
						if(get.itemtype(trigger.card)=='card'){
							//trigger.player.$gain2(trigger.cards);
							if(!trigger.player.storage.shuwei_use){
								trigger.player.storage.shuwei_use=[trigger.card];
							}
							else{
								trigger.player.storage.shuwei_use.push(trigger.card);
							}
							ui.special.appendChild(trigger.card);
							trigger.player.markSkill('shuwei_use');
						}
						//trigger.cancel();
						player.addTempSkill('shuwei_use');
					}
					game.delay();
				},
				ai:{
					threaten:1.1
				}
			},
			shuwei_use:{
				sourceSkill:"shuwei",
				trigger:{global:'useCardEnd'},
				direct:true,
				popup:false,
				filter:function(event, player){
					return event.player && event.player.storage.shuwei_use && event.player.storage.shuwei_use.contains(event.card);
				},
				content:function(){
					"step 0"
					if(lib.filter.targetEnabled2(trigger.card,player,trigger.player))player.chooseCard().set("prompt","请将一张手牌当【"+get.translation(trigger.card.name)+"】对"+get.translation(trigger.player)+"使用");
					else event.goto(2);
					"step 1"
					if(result.bool)player.useCard({name:trigger.card.name},result.cards,trigger.player);
					"step 2"
					trigger.player.storage.shuwei_use.remove(trigger.card);
				},
			},
			guanxing:{
				trigger:{player:["drawBegin","drawEnd"]},
				forced:false,
				filter:function(event,player){
					if(!player.getCards("hej"))return false;
					return (_status.event.triggername=="drawBegin" && !player.storage.guanxing) || (_status.event.triggername=="drawEnd" && player.storage.guanxing);
				},
				content:function(){
					"step 0"
					player.storage.guanxing = !player.storage.guanxing;
					lib.skill.guanxing.forced = !lib.skill.guanxing.forced;
					if(_status.event.triggername=="drawBegin"){
						trigger.num++;
						event.finish();
					}
					else player.chooseCard("请将一张牌置于牌堆底",'hej',true).set('ai',function(card){
						return 6-get.value(card);
					});
					"step 1"
					if(result.cards){
						if(get.type(result.cards[0]) == 'delay')ui.skillPile.appendChild(result.cards[0]);
						else ui.cardPile.appendChild(result.cards[0]);
					}
					else{
						var card = player.getCards("hej").randomGet();
						if(get.type(card) == 'delay')ui.skillPile.appendChild(card);
						else ui.cardPile.appendChild(card);
					}
				},
			},
			//泄矢诹访子
			chiwa:{
				group:"ms_jiewei",
				trigger:{
					global:["phaseUseBegin","judgeEnd","chooseToUseBegin",'chooseToCompareEnd','compareMultipleEnd'],
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(event.player!=player&&!event.player.countCards("hej"))return false;
					if(event.name=="judge")return get.color(event.result.card)=='black';
					//if(event.name=="dying")return event.parent.name=='damage'&&event.parent.source&&event.parent.source!=event.player;
					if(event.name=="chooseToUse")return event.type&&event.type=="dying"&&event.getParent("damage")&&event.getParent("damage").source&&event.player==event.getParent("damage").source&&event.dying==event.getParent("damage").player;
					if(event.name=="chooseToCompare")return !event.result.cancelled;
					return true;
				},
				content:function(){
					'step 0'
					event.player=player;
					event.target=trigger.player;
					var prompt2 = event.target==event.player?"你的出牌阶段开始时，你可以摸一张牌。":"你的出牌阶段开始时，你可以交给"+get.translation(event.player)+"一张牌，然后摸一张牌。";
					/*if(trigger.parent.name=='damage'){
						event.target=trigger.parent.source;
						prompt2 = event.target==event.player?"你对其他角色造成伤害致其决死时，你可以摸一张牌。":"你对其他角色造成伤害致其决死时，你可以交给"+get.translation(event.player)+"一张牌，然后摸一张牌。";
						
					}*/
					if(trigger.getParent("damage")){
						prompt2 = event.target==event.player?"你对其他角色造成伤害致其决死时，你可以摸一张牌。":"你对其他角色造成伤害致其决死时，你可以交给"+get.translation(event.player)+"一张牌，然后摸一张牌。";
					}
					if(trigger.name=='chooseToCompare'&&trigger.result.bool){
						event.target=trigger.target;
						prompt2 = event.target==event.player?"你拼点没赢后，你可以摸一张牌。":"你拼点没赢后，你可以交给"+get.translation(event.player)+"一张牌，然后摸一张牌。";
					}
					if(trigger.name=='judge'){
						prompt2 = event.target==event.player?"你的黑色判定牌生效后，你可以摸一张牌。":"你的黑色判定牌生效后，你可以交给"+get.translation(event.player)+"一张牌，然后摸一张牌。";
					}
					if(event.target==event.player){
						event.target.chooseBool('赤蛙神祟：是否摸一张牌？').set("prompt2",prompt2);
					}
					else{
						event.target.chooseCard('hej',1,'赤蛙神祟：你可以交给'+get.translation(event.player)+'一张牌').set('ai',function(card){
							return get.attitude(event.target,event.player) > 2 && event.target.getCards("h").contains(card) && get.value(card) > 4;
						}).set("prompt2",prompt2);
					}
					'step 1'
					if(result.bool){
						event.target.logSkill('chiwa',event.player);
						event.target.line(event.player,'green');
						if(result.cards){
							event.target.give(result.cards,event.player);
							event.target.draw();
						}
						else {
							event.player.draw();
						}
					}
				},
				ai:{
					save:true,
				},
			},
			ms_jiewei:{
				trigger:{
					global:["gainEnd","phaseDrawBegin","phaseUseBegin","phaseDiscardBegin","phaseDrawEnd","phaseUseEnd","phaseDiscardEnd"],
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(_status.event.triggername=="gainEnd")return event.player==player;
					return true;
				},
				content:function(){
					"step 0"
					if(event.triggername=="gainEnd"){
						if(trigger.cards){
							if(!player.storage.chiwa)player.storage.chiwa=trigger.cards.length;
							else player.storage.chiwa+=trigger.cards.length;
						}
						event.finish();
					}
					else if((event.triggername=="phaseDrawEnd"||event.triggername=="phaseUseEnd"||event.triggername=="phaseDiscardEnd")&&player.storage.chiwa > 1)player.chooseToUse().set("prompt","赤蛙神祟：你可以使用一张牌").set("prompt2","你于此"+get.translation(trigger.name)+"内获得过超过一张牌，你可以于此阶段结束时使用一张牌；若如此做，你获得1点灵力。");
					"step 1"
					if(result.bool){
						player.gainlili();
						if(result.cards[0].name=="sha")player.getStat().card.sha--;
					}
					player.storage.chiwa=0;
				}
			},
			fengyu:{
				enable: "chooseToUse",
				filter:function(event, player) {
					if (event.filterCard({ name: "shan" }, player, event) || event.filterCard({ name: "wuxie" }, player, event) || (lib.card.stg_lingji && event.filterCard({ name: "stg_lingji"}, player, event))) {
						return !player.storage.fengyu_count||player.hasCard(function(card) {
							return !player.storage.fengyu_count.contains(get.suit(card, player));
						}, "he");
					}
				},
				chooseButton: {
					dialog(event, player) {
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
							if(lib.card[i].subtype && lib.card[i].subtype == 'defense'){
								list.add(i);
							}
						}
						for(var i=0;i<list.length;i++){
							list[i]=[get.subtype(list[i]),'',list[i]];
						}
						return ui.create.dialog([list,'vcard']);
						/*var list = [];
						if (event.filterCard({ name: "sha" }, player, event)) {
							list.push(["基本", "", "sha"]);
						}
						if (event.filterCard({ name: "wuxie" }, player, event)) {
							list.push(["锦囊", "", "wuxie"]);
						}
						var dialog = ui.create.dialog("风雨无畏", [list, "vcard"]);
						dialog.direct = true;
						return dialog;*/
					},
					filter:function(button,player){
						var evt=_status.event.getParent();
						return evt.filterCard({name:button.link[2],nature:button.link[3]},player,evt);
					},			//不能用闯关模式的【灵击】
					check:function(button) {
						var player = _status.event.player;
						return _status.event.getParent().type == "phase" ? player.getUseValue({ name: button.link[2] }) : 1;
					},
					backup:function(links, player) {
						return {
							filterCard:function(card, player) {
								return !player.storage.fengyu_count||!player.storage.fengyu_count.contains(get.suit(card, player));
							},
							position:'he',
							precontent:function() {
								player.logSkill("fengyu");
								event.getParent().addCount = false;
							},
							log: false,
							popname: true,
							viewAs: { name: links[0][2], nature: links[0][3] },
							ai1:function(card) {
							  var player = _status.event.player;
								var num = player.countCards("h") - 2 * player.countCards("h", { type: "basic" });
							   if (Math.abs(num) == 1) {
									if (num == 1 && get.type(card) != "basic") {
									return 15 - get.value(card);
								   }
									if (num == -1 && get.type(card) == "basic") {
									return 15 - get.value(card);
									}
								}
							return 7 - get.value(card);
							},
						};
					},
					prompt:function(links) {
						return "将一张当前回合角色未使用过的花色的牌当【" + get.translation(links[0][2]) + "】使用";
					},
				},
				hiddenCard:function(player, name) {
					/*var list = [];
					for(var i = 0;i<lib.card.length;i++){
						if(lib.card[i]&&get.subtype(lib.card[i])&&get.subtype(lib.card[i])=="defense")list.push(lib.card[i]);
					}
					if (list.contains(name)) {*/
						
					/*if (name == "wuxie"||"stg_lingji") {
						return !player.storage.fengyu_count||player.countCards("he", function(card){ return !player.storage.fengyu_count.contains(get.suit(card, player)) ;//|| _status.connectMode;
						});
					}*/
					return lib.card[name].subtype == "defense" && (!player.storage.fengyu_count||player.countCards("he", function(card){ return !player.storage.fengyu_count.contains(get.suit(card, player)) ;}));
				}, 
				ai: {
					respondSha: true,
					skillTagFilter:function(player, tag, arg) {
						if (arg == "respond") {
							return false;
						}
						if ( !player.countCards("he", function(card) {
							return !player.getStorage("fengyu_count").contains(get.suit(card, player)) || _status.connectMode;
						}) ) {
							return false;
						}
					},
					order: 10,
					result: {player: 1, },
				},
				group: ["fengyu_mark","fengyu_gain"],
				subSkill: {
					mark: {
						trigger: { global: "useCard", },
						filter:function(event, player) {
							return event.player&&event.player==_status.currentPhase&&(!player.storage.fengyu_count||!player.storage.fengyu_count.contains(get.suit(event.card)));
						},
						forced: true,
						popup: false,
						content:function() {
							player.addTempSkill("fengyu_count");
							if(!player.storage.fengyu_count)player.storage.fengyu_count=[get.suit(trigger.card)];
							else player.storage.fengyu_count.push(get.suit(trigger.card));
						},
						sub: true,
						sourceSkill: "fengyu",
					},
					gain:{
						trigger:{player:"gainAfter"},
						forced:true,
						direct:true,
						popup:false,
						filter:function(event,player){
							return event.cards&&event.cards.length>0;
						},
						content:function(){
							player.addTempSkill("fengyu_count");
							player.storage.fengyu_count=["spade","heart","club","diamond"];
						},
						sub:true,
						sourceSkill:"fengyu",
					},
					count: {
						onremove:function(player){
							delete player.storage.fengyu_count;
						},
						sub: true,
						sourceSkill: "fengyu",
					},
				},
			},
			zoufang:{
				audio:2,
				trigger:{player:['chooseToUseBegin','chooseToRespondBegin']},
				filter:function(event,player){
					//if(event.responded) return false;
					//if(player.storage.fengyu) return false;
					if(get.type(event.getParent(2).card)!="basic") return false;
					//if(event.filterCard({name:'shan'})==false) return false;
					return true;
				},
				/*check:function(event,player){
					if(get.damageEffect(player,event.player,player)>=0) return false;
					return true;
				},*/
				content:function(){
					"step 0"
					event.name = "sha";
					if(_status.event.getTrigger().filterCard("shan"))event.name = "shan";
					if(_status.event.getTrigger().filterCard("tao"))event.name = "tao";
					"step 1"
					if(_status.event.getTrigger().getParent(2)&&_status.event.getTrigger().getParent(2).player&&_status.event.getTrigger().getParent(2).player!=player)_status.event.getTrigger().getParent(2).player.chooseToDiscard();
					"step 2"
					//player.storage.fengyu=false;
					if(!_status.event.getTrigger().getParent(2).player||!result.bool){
						player.addTempSkill("fengyu_yizan","useCardAfter");
					}
				},
				prompt2:'你需要使用/打出牌响应攻击牌时，所有其他角色交给你至少一半手牌，然后这些角色可以替你使用或打出牌。',
			},
			fengyu_yizan:{
				enable:["chooseToUse","chooseToRespond"],
				hiddenCard:function (player, name) {
					if (get.type(name) != "basic") return false;
					return player.hasCard(function (card) {
						return get.type(card) == "basic";
					}, "h");
				},
				filter:function (event, player) {
					if (!player.hasCard(function (card) {
						return get.type(card) == "basic";
					}, "h"))return false;
					for (var name of lib.inpile) {
						if (get.type(name) != "basic") continue;
						if (name == "sha") {
							for (var nature of lib.inpile_nature) {
								return true;
							}
						}
					}
					return false;
				},
				chooseButton:{
					dialog:function (event, player) {
						var list = [];
						for (var name of lib.inpile) {
							if (get.type(name) != "basic") continue;
							list.push(["基本", "", name]);
							if (name == "sha") {
								for (var nature of lib.inpile_nature) {
									list.push(["基本", "", "sha", nature]);
								}
							}
						}
						return ui.create.dialog("翊赞", [list, "vcard"], "hidden");
					},
					check:function (button) {
						var player = _status.event.player;
						var card = { name: button.link[2], nature: button.link[3] };
						if (
							_status.event.getParent().type != "phase" ||
							game.hasPlayer(function (current) {
								return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
							})
						) {
							switch (button.link[2]) {
								case "tao":
								case "shan":
									return 5;
								case "jiu": {
									if (player.countCards("h", { type: "basic" }) > 2) return 3;
								}
								case "sha":
									if (button.link[3] == "fire") return 2.95;
									else if (button.link[3] == "thunder" || button.link[3] == "ice") return 2.92;
									else return 2.9;
							}
						}
						return 0;
					},
					backup:function (links, player) {
						return {
							audio: "yizan_respond_shan",
							filterCard: function (card, player, target) {
								return get.type(card) == "basic";
							},
							complexCard: true,
							selectCard: function () {
								return 2;
							},
							check: function (card, player, target) {
								return 6 - get.value(card);
							},
							viewAs: { name: links[0][2], nature: links[0][3] },
							position: "he",
							popname: true,
						};
					},
					prompt:function (links, player) {
						return "将一张基本牌当做" + get.translation(links[0][3] || "") + get.translation(links[0][2]) + "使用或打出";
					},
				},
				ai:{
					order:function () {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard({ name: "jiu" }, player, event) && get.effect(player, { name: "jiu" }) > 0 && player.storage.yizan && player.countCards("he", { type: "basic" }) > 2) {
							return 3.3;
						}
						return 3.1;
					},
					skillTagFilter:function (player, tag, arg) {
						if (tag == "fireAttack") return true;
						if (!player.storage.yizan && player.countCards("hes") < 2) return false;
						if (
							!player.hasCard(function (card) {
								return get.type(card) == "basic";
							}, "hes")
						) {
							return false;
						}
					},
					result:{
						player:1,
					},
					respondSha:true,
					respondShan:true,
					fireAttack:true,
				},
			},
			
			xiumian:{
				trigger:{player:["phaseEnd","phaseBefore"]},
				forced:false,
				filter:function(event,player){
					if(_status.event.triggername=="phaseEnd")return !player.storage.xiumian;
					else return player.storage.xiumian;
				},
				content:function(){
					"step 0"
					player.storage.xiumian = !player.storage.xiumian;
					lib.skill.xiumian.forced = !lib.skill.xiumian.forced;
					if(_status.event.triggername=="phaseBefore"){
						trigger.cancel();
					} 
					//player.draw();
					player.useCard({name:"wuzhong"},player);
					var result = player.chooseToUse();
					"step 1"
					if(result.bool)player.gainlili();
				},
			},
			xiumian_2:{
				usable:1,
				trigger:{
					source:["damageEnd"],
					player:["damageEnd"],
				},
				filter:function(event,player){
					if(event._notrigger.contains(player)) return false;
					return true;
				},
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					var evt=_status.event.getParent('phase');
					if(evt){
						//game.resetSkills();
						_status.event=evt;
						_status.event.finish();
						_status.event.untrigger(true);
					}
				},
			},
			tongyu:{
				init:function(player){
					var info = get.nodeintro(player).innerHTML;
					//get.nodeintro(player).innerHTML = info.slice(0,info.indexOf("体力：")+3)+"未知"+info.slice(info.indexOf("体力：")+6,info.length);
					game.log(info.slice(0,info.indexOf("体力：")+3)+"未知"+info.slice(info.indexOf("体力：")+6,info.length));
				},
			},
		},
		translate:{
			sanae:'早苗',
			sanae_die:'果然这里还是只能被常识所束缚啊……',
			qiji:'奇迹',
			qiji_info:'<font class="greentext">一回合每名角色各一次</font>，一名角色使用攻击、控场或禁忌牌时，你可以令其视为对相同的目标使用了守矢神社【例大祭】。',//最后的手牌
			qiji_count:'qiji',
			shenfeng:'星之祭仪',
			shenfeng_info:'<span style="color:indigo">使命技</span>，<br><span style="color:purple">成功</span>：若你对所有角色均使用过守矢神社【例大祭】，你获得〖〗<br><span style="color:purple">失败</span>：当一名角色使用指定所有存活角色的【例大祭】时，你将触发〖奇迹〗的种类改为那名角色的最后的手牌。',
			omikuji:'暴乱神签连掷',
			omikuji_info:'符卡技（2）符卡结束时，你可以展示等同于存活角色数的牌堆顶牌和你的全部手牌，然后你为每名角色指定一张牌，对其使用之;你获得其余的牌。',//'符卡发动时，展示所有手牌和牌堆顶牌，直到其中防御牌和禁忌牌以外的牌数等于角色数，将防御牌和禁忌牌置于牌堆顶，其余加入手牌，若如此做，你对每名角色随机使用一张手牌。',
			continuous_sortilege:'',
			continuous_sortilege_info:'',
			reidaisai2:'例大祭',
			reidaisai2_info:'出牌阶段，对任意名与你身份不同的角色使用；目标摸一张牌，你摸X张牌（X为目标数+1），然后你可以将任意张牌交给任意名其他角色。',
			
			kanako:'神奈子',
			kanako_die:'应该采用守势吗？',
			yushe:'御射山贽',
			yushe_info:'你不因此法成为非装备牌的目标后，你可以令此牌对你无效，然后令使用者视为对你使用了一张【决斗】（若无使用者或使用者为你，你可以重新选择目标）。一张【决斗】结算后，你可以获得此次结算中打出的【轰！】。',
			//yushe_info:'你成为非装备牌的目标后，可以改为【决斗】，若无使用者或使用者为你，你为此【决斗】选择目标。你可以于【决斗】结算后获得此次结算中打出的【轰！】。',
			shende:'神德踏渡',
			//shende_info:'你因攻击牌而为之指定不仅为你的目标或需要使用/打出牌时，你可以委托所有其他角色交给你至少一半手牌，若你为此攻击牌目标或之一：以此法给出牌的角色和本回合受过伤的角色可以替你使用或打出牌，然后若你仍受到此牌伤害，后者全部受到相同的伤害。',
			shende_info:'你因攻击牌而需要使用/打出牌或为之指定不仅为你的目标时，你可以委托所有其他角色交给你至少一半手牌，若为响应：以此法给出牌的角色和本回合受过伤的角色可以替你使用或打出牌，然后若你仍受到此牌伤害，后者全部受到相同的伤害。',
			//shende_info:'你使用攻击牌时，你可以委托所有其他角色交给你至少一半手牌。<hr>你因攻击牌而需要使用/打出牌时，你可以委托所有其他角色交给你至少一半手牌：以此法给出牌的角色和本回合受过伤的角色可以替你使用或打出牌，然后若你仍受到此牌伤害，后者全部受到相同的伤害。',
			//shende_info:'你使用或响应攻击牌时，你可以委托所有其他角色交给你至少一半手牌：给出牌和本回合受过伤的角色可以替你使用或打出牌；后者同样会与你受到此牌的伤害。',
			shende_target:'神德踏渡',
			shende_give:'神德踏渡',
			shende_damage:'神德踏渡',
			shende_count:'神德踏渡',
			shende_lianhuan:'神德踏渡',
			
			suwako:'诹访子',
			chiwa:'赤蛙神祟',
			chiwa_info:'一名角色出牌阶段开始时/黑色判定牌生效后/拼点没赢后/对另一名角色造成伤害致后者决死时，若该角色为你或其能交给你一张牌，该角色摸一张牌；<hr>若你于一阶段内获得过超过一张牌，你可以于当前阶段结束时使用一张牌，若如此做，你获得1点灵力。',
			//chiwa_info:'一名角色可以于下列时机交给你一张牌（若为你自己，则无需给出），若如此做，该角色摸一张牌：<br>出牌阶段开始时；黑色判定牌生效后；拼点没赢后；或对另一名角色造成伤害致后者决死时。<hr>若你于一阶段内获得过超过一张牌，你可以于当前阶段结束时使用一张牌，若如此做，你获得1点灵力。',
			//chiwa_info:'若一名角色能于出牌阶段开始/判定为黑色/拼点没赢/致另一角色决死时交给你一张牌，其摸一张牌；你获得过两张牌的阶段结束时可以使用一张牌，获得1点灵力。',
			ms_jiewei:'赤蛙神祟',
			fengyu:'风雨无畏',
			fengyu_info:'一回合一次，若你于一回合内未获得过牌，你可以将当前回合角色本回合未使用过的花色的牌当防御牌使用或打出。',
			zoufang:'诹访大战',
			zoufang_info:'你于出牌阶段需要使用或打出基本牌时，你可以弃置一张牌，然后将一张牌当基本牌使用或打出；你因响应基本牌而需要使用或打出牌时，你可以令当前回合角色弃置一张牌；若该角色未弃置牌，你可以将一张牌当之使用或打出。',
			xiumian:'休眠',
			xiumian_info:'结束阶段，你可以跳过下个回合，然后于此时和下个被跳过的回合开始时视为对自己使用一张【灵光一闪】并可以使用一张牌，若如此做，你获得1点灵力。',
			xiumian_2:'休眠',
			guanxing:'观星',
			guanxing_info:'你摸牌时，可以令此次摸牌数+1，若如此做，你将一张牌置于牌堆底。',
			
			momizi:'椛',
			shuwei:'戍卫',
			shuwei_info:'你或你攻击范围内的角色成为【轰！】或黑色法术的目标时，若此牌并非指定你在内的多名角色为目标，则你可以摸一张牌，然后若你不是此牌的目标，使用者选择一项：令你成为此牌的目标；令你于此牌结算后可以将一张手牌转化为此牌对其使用。',
			shuwei_use:'戍卫',
			yuanmu:'',
			yuanmu:'你摸牌时，可以令此次摸牌数+1，若如此做，你将一张牌置于牌堆顶。',
			
			hina:'雏',
			xichuan:'禊川之畔',
			xichuan_info:'锁定技，你或你相邻的角色受到弹幕伤害时，改为失去等量体力；你或你相邻的角色扣减体力时，你摸等量的牌',
			eyun:'厄运流放',
			eyun_info:'一名角色扣减体力时，若其体力值为0，你可以将一张角色牌当【葱】对其使用，若如此做：你获得〖生理节律〗',
			_eyun:' ',
			_eyun_info:'一名角色获得因〖厄运流放〗而进入弃牌堆的角色牌时，该角色失去1点体力，然后将此角色牌置入键山雏的角色牌区。',
			biorhythm:'生理节律',
			biorhythm_info:'防止你受到键山雏的诅咒。<br>其他角色的准备阶段，你可以摸两张牌，若如此做，本回合结束阶段，你弃置两张牌。',
			
			sizuha:'静叶',
			shuangsi:'霜飔',
			shuangsi_info:'一回合一次，你获得牌后，若其中有你手牌中最多的花色之一，你可以视为使用一张【疾风骤雨】，然后若你手牌中的花色数不为四种，你摸一张牌；你坠机时，你令一名其他角色获得此技能。',
			//:'',
			//_info:'你扣减体力时，若你已受伤，你可以改为减1点体力上限；你于一回合内因弃置而失去第X张牌时（X为你的体力值），你可以令一名角色加1点体力上限并回复1点体力。',
			
			minoriko:'穰子',
			dayou:'大有',
			dayou_info:'锁定技，你摸牌时，改为至少将手牌补至五张；你坠机时，你令一名其他角色获得此技能。',
			rangtian:'禳田',
			rangtian_info:'你受到弹幕伤害后，你可以令伤害来源视为对你使用一张守矢神社【例大祭】，若伤害来源为你，改为你视为对自己使用一张【例大祭】。',
			
			//'一回合一次，你可以令一名手牌数少于你的角色将你的两张红色牌当【例大祭】对所有其他角色使用，若如此做：该角色摸一张牌。',
			a:'每回合限两次，你于弃牌阶段或回合外因弃置而失去牌时，你可以令至多等于你体力值数量的角色各摸一张牌。',
			b:'你于出牌阶段使用牌时，你可以令你本回合手牌上限-1，若如此做：结算后你将之置于牌堆顶，然后从牌堆底摸一张牌',
			c:'摸牌阶段摸牌时，你额外摸一张牌；你坠机时，你令一名角色获得此技能。',
			c:'出牌阶段限一次，你可以令一名体力值不大于你的角色摸一张牌，然后视为其使用仅指定其他角色为目标的一张【五谷丰登】',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			c:'',
			
		},
	};
});