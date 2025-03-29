'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'aeolus',
		connect:true,
		character:{
			sanae:['female','2',3,['qiji','omikuji']],
			kanako:['female','2',4,['yushe','shende']],
			
			hina:['female','2',3,['chuanran','eyun']],
			sizuha:['female','2',4,['shuangsi','rangtian']],
			minoriko:['female','2',3,['dayou','rangtian']],
		},
		characterIntro:{
			sizuha:'全名秋静叶，掌管秋天的红叶之神，是秋穰子的姐姐，因为穰子的人气更高，会沉浸在给妹妹看美丽的红叶的优越感中。<br><b>画师：かいお</b>',
			minoriko:'全名秋穰子，掌管幻想乡秋天的八百万神之一，掌管着丰收，是丰收之神。作为丰裕与收成的象征，她性格比较朴素开朗，没什么神的威严。<br><b>画师：蝶蝶子</b>',
			hina:'全名键山雏，最好不要记得她的名字，和她走太近通常会走霉运。<br><b>画师：黄油吐司面包永动机</b>',
			nitori:'河城荷取',
			momizi:'犬走椛',
			sanae:'全名东风谷早苗，从外面世界来的人类，守矢神社的巫女、风祝与现人神，负责去山麓的人类村落传教收集信仰。<br><b>画师：ke-ta</b>',
			kanako:'全名八坂神奈子，守矢神社名义上祭祀的神明，喜好技术革新，有不重视传统的倾向，不管什么样的信仰都有在收集。<br>设计：纯爱妖精 <b>画师：羽々斬</b>',
			suwako:'洩矢诹访子',
		},
		perfectPair:{
		},
		skill:{
			//东风谷早苗
			qiji:{
				audio: true,
				derivation:'reidaisai2',
				trigger: { global: "useCard" },
				//usable:1,
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
				filter: function (event, player) {
					if (get.subtype(event.card) != "attack" && get.subtype(event.card) != "disrupt" && get.type(event.card) != "jinji") return false;
					//if(event.getParent(3).skill)return false;
					return !event.player.hasSkill("qiji_count");
				},
				check:function(event,player){
					return get.attitude(player,event.player) > 0;
				},
				content: function () {
					'step 0'
					//trigger.untrigger();
					trigger.player.addTempSkill("qiji_count");
					'step 1'
					//var players = trigger.targets;
					event.fakecard={name:"reidaisai2"};
					trigger.player.useCard(event.fakecard, trigger.targets);
				},
			},
			qiji_count:{},
			omikuji:{
				
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
							if(player.storage.yushe_naman&&player.storage.yushe_naman.length)player.gain(player.storage.yushe_naman,'gain2');
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
					player.addTempSkill("shende_lianhuan");
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
						if((event.current==game.me&&!_status.auto)||(get.attitude(event.current,player)>2)||event.current.isOnline()){
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
					return event.num < 0 && event.player.hp < 1 &&(player.name == "hina"||player.name2 == "hina");
				},
				check:function(event,player){
					return get.attitude(player,event.player) > 2;
				},
				content:function(){
					//lib.skill.omikuji.createCard(player.name);
					if(player.name=="hina"){
						lib.card[player.name] = {
							type:'character',
							fullskin:false,
							fullimage:true,
							image:'character:hina',
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
						//card.node.name.innerHTML=get.translation(player.name);
						card.classList.add('fullskin');
						card.node.image.style.backgroundImage=player.node.avatar.style.backgroundImage;
						card.setBackgroundImage('theme/simple/unknown.png');
						lib.translate[player.name+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
						var cards = [];
						cards.push(card);
						player.useCard({name:"tao"},cards,trigger.player);
						player.addSkill("biorhythm");
						player.name = " ";
						player.node.avatar.hide();
						player.removeSkill("eyun");
						player.removeSkill("chuanran");
					}else if(player.name2=="hina"){
						lib.card[player.name2] = {
							type:'character',
							fullskin:false,
							fullimage:true,
							image:'character:hina',
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
						card.classList.add('fullskin');
						card.node.image.style.backgroundImage=player.node.avatar2.style.backgroundImage;
						card.setBackgroundImage('theme/simple/unknown.png');
						lib.translate[player.name2+"_info"]="<u>追加效果：当你获得此牌时，展示之，你失去1点体力。</u>";
						var cards = [];
						cards.push(card);
						player.useCard({name:"tao"},cards,trigger.player);
						player.addSkill("biorhythm");
						player.name2 = " ";
						player.node.avatar2.hide();
						player.classList.remove('fullskin2');
						player.removeSkill("eyun");
						player.removeSkill("chuanran");
					}
					
				},
			},
			_eyun:{
				//skillAnimation:true,
				trigger:{player:'gainEnd'},
				forced:true,
				filter:function(event,player){
					var invoke = false;
					if(event.cards){
						for (var i = 0; i < event.cards.length; i ++){
							if (event.cards[i] && event.cards[i].name == 'hina'){
								invoke = true;
							}
						}
					}
					return invoke;
				},
				content:function(){
					var card;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].name == 'hina'){
							if(!trigger.player.hasSkill("biorhythm")){
								game.log(trigger.player,'受到键山雏的诅咒，失去1点体力。');
								trigger.player.loseHp();
							}
							card = trigger.cards[i];
						}
					}
					if(card){
						game.log('诅咒人偶被键山雏回收。');
						card.delete();
						card._destroy = true;
					}
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].name == ' '&&players[i].node.name.innerHTML=="雏"){//&& players[i].node.avatar.classList=="avatar hidden"
							players[i].name = 'hina';
							players[i].node.avatar.show();
							players[i].init("hina");
						}else if(players[i].name2 == ' '&&players[i].node.name2.innerHTML=="雏"){
							players[i].name2 = 'hina';
							players[i].node.avatar2.show();
							players[i].init(player[i].name,"hina");
						}
					}
				},
			},
			chuanran:{
				trigger:{global:["damageBefore","changeHp"]},
				forced:true,
				filter:function(event,player){
					if(_status.event.triggername=="changeHp"&&event.num>=0)return false;
					if(_status.event.triggername=="damageBefore"&&(event.nature=="thunder"||event.num<=0))return false;
					return event.player==player.previous||event.player==player||event.player==player.next;
				},
				content:function(){
					if(event.triggername=="damageBefore"){
						trigger.player.loseHp(trigger.num);
						trigger.num=0;
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
			}
		},
		translate:{
			sanae:'早苗',
			sanae_die:'果然这里还是只能被常识所束缚啊……',
			qiji:'奇迹',
			qiji_info:'<font class="greentext">一回合每名角色各一次</font>，一名角色使用攻击、控场或禁忌牌时，你可以令其视为对相同的目标使用了守矢神社【例大祭】。',//最后的手牌
			qiji_count:'qiji',
			omikuji:'暴乱神签连掷',
			omikuji_info:'符卡技（2）符卡发动时，展示所有手牌和牌堆顶牌，直到其中防御牌和禁忌牌以外的牌数等于角色数，将防御牌和禁忌牌置于牌堆顶，其余加入手牌，若如此做，你对每名角色随机使用一张手牌。',
			continuous_sortilege:'',
			continuous_sortilege_info:'',
			reidaisai2:'例大祭',
			reidaisai2_info:'出牌阶段，对任意名与你身份不同的角色使用；目标摸一张牌，你摸X张牌（X为目标数+1），然后你可以将任意张牌交给任意名其他角色。',
			
			kanako:'神奈子',
			kanako_die:'应该采用守势吗？',
			yushe:'御射山贽',
			yushe_info:'你不因以此法成为非装备牌的目标后，你可以令此牌对你无效，然后令使用者视为对你使用了一张【决斗】（若无使用者或使用者为你，你可以重新选择目标）。一张【决斗】结算后，你可以获得此次结算中打出的【轰！】。',
			shende:'神德踏渡',
			shende_info:'你因攻击牌而即将指定不仅为你的目标时或需要使用/打出牌时，你可以委托所有其他角色交给你至少一半手牌，若你为此攻击牌目标：以此法给出牌的角色和本回合受过伤的角色可以替你使用或打出牌，然后若你仍受到此牌伤害，后者全部受到相同的伤害。',
			shende_target:'神德踏渡',
			shende_give:'神德踏渡',
			shende_damage:'神德踏渡',
			shende_count:'神德踏渡',
			shende_lianhuan:'神德踏渡',
			
			hina:'雏',
			chuanran:'禊川之畔',
			chuanran_info:'锁定技，你或你相邻的角色受到弹幕伤害时，改为失去等量体力；你或你相邻的角色扣减体力时，你摸等量的牌',
			eyun:'厄运流放',
			eyun_info:'一名角色扣减体力时，若其体力值为0，你可以将键山雏的角色牌当【葱】对其使用，若如此做：你获得〖生理节律〗',
			_eyun:' ',
			_eyun_info:'一名角色摸到键山雏的角色牌时，失去1点体力，并复原键山雏机师的机体。',
			biorhythm:'生理节律',
			biorhythm_info:'防止你受到键山雏的诅咒。<br>其他角色的准备阶段，你可以摸两张牌，若如此做，本回合结束阶段，你弃置两张牌。',
			
			sizuha:'静叶',
			shuangsi:'霜飔',
			shuangsi_info:'你获得牌后，若其中有你手牌中最多的花色之一，你可以视为使用一张【疾风骤雨】，然后若你手牌中的花色数不为四种，你摸一张牌；你坠机时，你令一名其他角色获得此技能。',
			//:'',
			//_info:'你扣减体力时，若你已受伤，你可以改为减1点体力上限；你于一回合内因弃置而失去第X张牌时（X为你的体力值），你可以令一名角色加1点体力上限并回复1点体力。',
			
			minoriko:'穰子',
			dayou:'大有',
			dayou_info:'锁定技，你摸牌时，改为至少将手牌补至五张；你坠机时，你令一名其他角色获得此技能。',
			rangtian:'禳田',
			rangtian_info:'你受到弹幕伤害后，你可以令伤害来源视为对你使用一张守矢神社【例大祭】，若伤害来源为你，改为你视为对自己使用一张【例大祭】。',
			
			
		},
	};
});
