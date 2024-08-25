'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'random',
		connect:true,
		character:{
			kanade:['female','3',3,['zhongzou','moxin']],
			shigure:['female','2',4,['kc_yuzhi','zuoshibaozhan']],
			arisa:['female','2',3,['yaowu','huanrao','sliver_arrow']],
			yudachi:['female','2',4,['hongxi','solomon']],
			megumin:['female','4',3,['honglian','sbrs_liansuo','explosion']],
			satone:['female','2',3,['guyin','tianze']],
			nero:['female','2',4,['muqi','AestusDomusAurea']],
			kurumi:['female','2',3,['kedan','shishu','shishi']],
			miku:['female', '3', 3, ['geying', 'wuyan', 'stage']],
			sinon:['female', '3', 3, ['yanju', 'shangtang']],
			scathach:['female', '1', 4, ['ruizhi','mojing']],
			niuzhanshi:['female','2',4,['ng_wenhao','ng_wenhao2']],
			mordred:['female','2',4,['niguang','ClarentBloodArthur'],["unseen","forbidai"]],
			twob:['female', '1', 4, ['qiyue','yueding']],
			illyasviel:['female','1',3,['huanzhao','wuxian','quintette_fire']],
			kuro:['female', '1', 3, ['touying','wenmo','heyi']],
			daria:['female', '1', 3, ['zhuanhuan', 'moli', 'chaoyue']],
			rylai:['female', '3', 3, ['tanxue', 'bingfeng', 'aoshu']],
			jack:['female', '3', 3, ['wulin', 'yejiang', 'maria']],
			yuuko:['female', '1', 3, ['waimai', 'heike']],
			tsubaki:['female', '2', 4, ['xiangyi', 'chunse']],
			m4a1:['female', '2', 4, ['huoli', 'zhihui', 'shenyuan']],
			tohka:['female', '3', 4, ['iphone3', 'Halvanhelev']],
			nurseryrhyme:['female', '3', 3, ['lvtu', 'mengjin', 'weimo']],

			saber:['female','3',4,['shengguang','excalibur']],
			saber_lily:['female','3',4,['hualu','caliburn']],
			nero_wedding:['female', '2', 4, ['muqi', 'FaxCaelestis']],
			HF_sakura:['female', '1', 3, ['jiushu', 'mengsui']],
			//FSawaken:['female', '1', 3, ['wuxian','xuwu', 'chunhui']],
			fate_sakura:['female', '1', 3, ['jiushu', 'yingmeng']],
			fate_rin:['female', '3', 3, ['cuican', 'shanyao']],
			gilgamesh:['male','1',3,['wanglv','tiansuo','enuma_elish']],
			nero_claus:['female', '2', 4, ['muqi', 'XmasEveTheater']],
			helena:['female', '2', 3, ['tongdiao','tanqiu','Sanat_Kumara']],
			Mysterious_Heroine_X:['female', '2', 4, ['guangcai','X_yuanhu','Himitsu_Calibur']],
			unknown_eks:['female', '1', 4, ['anduan','wangshou','Cross_Calibur']],
		},
		characterIntro:{
			illyasviel:'全名伊莉雅丝菲尔·冯·爱因兹贝伦，在日本的动漫中十分常见的那种使用特殊能力帮助他人或对抗恶役的女孩子<br>出自：Fate/kaleid liner 魔法少女☆伊莉雅 <b>画师：永恒之舞MK_2',
			shigure:'白露级驱逐舰2号舰，名是从前代神风级驱逐舰10号舰所继承。<br>出自：舰队collection <b>画师：konomi★きのこのみ</b>',
			yudachi:'白露级驱逐舰4号舰，以初春级为基础，加固了舰体，提高了稳定性。<br>出自：舰队collection <b>画师：ﾏｸｰ</b>',
			megumin:'以“艺术就是爆炸”为人生信条的小萝莉红魔法师。<br>出自：为美好的世界献上祝福！<b>画师：seki</b>',
			satone:'全名索菲亚琳·SP·撒旦七世，传说中的魔法魔王少女，可以召唤天使！<br>出自：中二病也要谈恋爱！ <b>设计：子规    画师：あかつき聖</b>',
			kanade:'啊，是天使，我死了——<br>全名立华奏，死后世界的学校中的学生会长，标准的无口萌妹。<br>出自：Angel Beats! <b>画师：sua(スア)</b>',
			arisa:'守护森林的妖精弓手。（不过森林里的东西比她要恐怖多了）<br>出自：暗影之诗 <b>画师：黒井ススム</b>',
			nero:'全名尼禄·克劳狄乌斯·凯萨·奥古斯都·日耳曼尼库斯。古罗马的皇帝，比起皇帝更像个偶像，奢华浪费和浮夸无人能出其右。<br>出自:Fate/Extra <b>画师：demercles</b>',
			kurumi:'全名时崎狂三。咕咕咕<br>出自：Date-A-Live! <b>画师：kyuriin</b>',
			miku:'全名初音未来，我们天下第一的公主大人~<br>出自：Vocaloid<b>画师：saberii</b>',
			sinon:'被称为“冰之狙击手”的GGO玩家。“死枪”事件后在桐谷和人的邀请下转换到新生了ALO中，扮演擅长使用弓箭狙击的猫妖精。<br>出自：刀剑神域<b>画师：PCManiac88</b>',
			scathach:'影之国的女王，当女王当了几千年了。<br>出自：Fate/Grand Order <b>设计：冰茶	画师：saberii</b>',
			niuzhanshi:'还能是谁呢这。<br>出自：Fate/Apocrypha <b>画师：イセ川</b>',
			mordred:'圆桌骑士之一，亚瑟王的儿子——同时也是终结父王的叛逆骑士。<br>出自：Fate/Apocrypha <b>画师：Shigure</b><br><br>（注：莫德雷德由？发动【？】变身而成，不能正常选出使用）',
			twob:'——机器人会梦见电子绵羊吗？<br>——不，机器人会梦见和小男朋友一起去商城买T恤衫————<br>出自：NieR:Automata <b>设计：雪樱   画师：saberii</b>',
			kuro:'全名克洛伊·冯·爱因兹贝伦，小腹上的那个不是○纹，不要问了！<br>出自：Fate/kaleid liner 魔法少女☆伊莉雅 <b>画师：トミフミ</b>',
			daria:'先手，5费，巨像突击，守护者巨像，命运的指引，智慧之光，剑仙，使徒，魔法剑，魔法剑，奇美拉，多萝西，引导，啊，这3个大眼下不去了，到你了吧<br>出自：影之诗 <b>设计：雪樱  画师：アカトネ</b>',
			rylai:'<b>出自：dota2 设计：路人orz  画师：forest</b>',
			jack:'同时是杀人狂和暴露狂的幼女？快收住你奇怪的想法……<br>出自：Fate/Apocrypha <b>画师：オウカ</b>',
			yuuko:'<br>出自：神的记事本 <b>画师：岸田メル 设计：伶</b>',
			tsubaki:'全名朱雀院椿。“这是你为我锻造的翅膀，我将用它们尽情翱翔。”。。。椿姐赛高！<br>出自：牵绊闪耀的恋之伊吕波 <b>画师：ぺろ 设计：冰茶</b>',
			m4a1:'<br>出自：少女前线 <b>画师：怠惰姬空白 设计：Freyr</b>',	
			tohka:'传说中的有史以来最敷衍最没有良心的技能组！<br>就跟原作的能力设置差不多。<br>出自：Date-A-Live!<b>画师：mmrailgun</b>',
			nurseryrhyme:'<br>出自：Fate/Extra <b>画师：十八三</b>',

			saber:"你们光炮太多我很为难诶<br>出自：Fate/Stay Night <b>画师：冬ゆき</b>",
			saber_lily:"全名阿尔托莉雅·潘德拉贡，英格兰亚瑟王传说主角……的性转<br>出自：Fate/Grand Order <b>画师：未知</b>",
			nero_wedding:"唔姆，有谁会拒绝偶像穿着婚纱来表白呢？<br>出自:Fate/Extra CCC <b>画师：Kirra</b>",
			HF_sakura:"全名间桐樱，笑容最美丽反而内心是最痛苦的<br>出自：Fate/Stay Night <b>画师：缶子</b>",
			fate_sakura:"间桐樱，远坂凛的妹妹，因魔术师家族传承制度过继给间桐家。<br>出自：Fate/Stay Night <b>画师：bomhat</b>",
			fate_rin:"全名远坂凛，这双锻炼到正好的大腿我也能玩一年，葱抱怨过“我去练撑杆跳能找到这么萌的妹子吗？”<br>出自：Fate/Stay Night <b>画师：基月</b>",
			gilgamesh:"据传拥有数量无可比拟但实际上是青铜的黄金，人类史上最古老的熊孩子，在以其名命名的苏美尔史诗中有个同性CP恩奇都<br>出自：Fate/Stay Night <b>画师：ユリリエンス</b>",
			nero_claus:"每年发病一次<br>出自：Fate/Extra",
			Jeanne:"全名珍奴·达尔克，法国圣女，名梗“只有女人矮子和外国人救得了法国”中女人的代表<br>出自：Fate/Apocrypha <b>画师：我美蘭</b>",
			helena:"全名海伦娜·布拉瓦茨基，俗称布拉瓦茨基夫人。十九世纪的女性神秘学者，坚信雷姆利亚大陆的存在，投身于神秘主义，神智学的创始人。<br>出自：Fate/Grand Order <b>画师：市倉とかげ</b>",
		},	   
		perfectPair:{
		},
		skill:{
			zhongzou:{
				audio:2,
				trigger:{global:'phaseEnd'},
				group:["zhongzou_2","zhongzou_3",'zhongzou_5'],
				filter:function(event,player){
					if (player.lili <= 0) return false;
					return game.hasPlayer(function(current){
						return current.storage.zhongzou == true;
					});
				},
				content:function(){
					'step 0'
					player.loselili();
					var targets = [];
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i ++){
						if (players[i].storage.zhongzou == true) targets.push(players[i]);
					}
					if (targets.length) player.useCard({name:'sha'},targets,false);
				},
				check:function(event,player){
					var num = 0;
					num += game.countPlayer(function(current){
						return current.storage.zhongzou && get.attitude(player,current) < 0;
					});
					num -= game.countPlayer(function(current){
						return current.storage.zhongzou && get.attitude(player,current) > 0;
					});
					return player.lili > 1 && num > 0;
				},
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(current){
						return current.storage.zhongzou;
					});
					var str='是否发动【终奏】消耗1点灵力对'+get.translation(list)+'视为使用一张【轰！】？';
					return str;
				},
			},
			zhongzou_2:{
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					if (!event.source) return false;
					return !event.card||get.subtype(event.card)!='attack';
				},
				direct:true,
				content:function(){
					trigger.source.storage.zhongzou = true;
				},
			},
			zhongzou_3:{
				trigger:{global:'useCard'},
				filter:function(event, player){
					return event.targets.length;
				},
				direct:true,
				content:function(){
					lib.skill['zhongzou_4'].trigger = {global:trigger.card.name + 'Cancelled'};
					player.removeSkill('zhongzou_4')
					player.addSkill('zhongzou_4');
				},
			},
			zhongzou_4:{
				direct:true,
				//trigger:{global:'shaCancelled'},
				trigger:{},
				content:function(){
					trigger.target.storage.zhongzou = true;
					player.removeSkill('zhongzou_4');
					/*
					if (trigger.targets){
						for (var i = 0; i < trigger.targets.length; i ++){
							trigger.targets[i].storage.zhongzou = true;
						}
					}*/
					//delete lib.skill['zhongzou_4'].trigger;
				},
			},
			zhongzou_5:{
				direct:true,
				trigger:{global:'phaseAfter'},
				content:function(){
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i ++){
						players[i].storage.zhongzou = false;
					}
				}
			},
			moxin:{
				trigger:{global:'phaseEnd'},
				//direct:true,
				filter:function(event,player){
					return event.player.isAlive()&&(!event.player.countUsed('sha')&&!event.player.countUsed('juedou')&&!event.player.getStat('damage'));
				},
				check:function(event,player){
					return get.attitude(player,event.player) >= 0;
				},
				content:function(){
					'step 0'
					var list = [];
					if (trigger.player.lili<trigger.player.maxlili){
						list.push(get.translation(trigger.player)+'恢复灵力');
					}
					list.push('摸一张牌，交给'+get.translation(trigger.player)+'一张牌');
					player.chooseControl(list,function(event,player){
						if (!_status.currentPhase.isTurnedOver() && _status.currentPhase.lili < 3) return get.translation(trigger.player)+'恢复灵力';
						return '摸一张牌，交给'+get.translation(trigger.player)+'一张牌';
					});
					'step 1'
					if (result.control == get.translation(trigger.player)+'恢复灵力'){
						trigger.player.gainlili();
					} else if (result.control == '摸一张牌，交给'+get.translation(trigger.player)+'一张牌'){
						player.draw();
						if (trigger.player != player){
							player.chooseCard('hej','交给'+get.translation(trigger.player)+'一张牌',true).set('ai',function(card){
								return 5-get.value(card);
							});
						}
					}
					'step 2'
					if(result.bool){
						trigger.player.gain(result.cards[0]);
						player.$give(1,trigger.player);
					}
				},
			},
			kc_yuzhi:{
				audio:2,
				group:["kc_yuzhi_2"],
				forced:true,
				trigger:{global:"gameStart"},
				content:function(){
					'step 0'
					player.drawSkill('shenyou', '啊嘞，没有【神佑】了吗……');
				},
			},
			kc_yuzhi_2:{
				audio:2,
				trigger:{global:'phaseBegin'},
				filter:function(event,player){
					return (player.countCards('hej')>0);
				},
				check:function(event, player){
					//if (player.countCards('he') <= player.hp) return false;
					if (get.attitude(player, event.player) > 0) return false;
					if (player.countCards('hej') < 3) return false;
					var good_att = false;
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if (get.attitude(player, players[i]) && players[i].hp <= player.hp) good_att = true;
					}
					return good_att;
				},
				content:function(){
					"step 0"
					player.chooseCardTarget({
						prompt:'将一张牌交给一名其他角色，令【轰！】本回合对其无效',
						filterCard:function(card,player){
							return true;
						},
						position:'hej',
						filterTarget:function(card,player,target){
							if(player==target) return false;
							return true;
						},
						ai1:function(card){
							if(_status.event.check) return 0;
							return 6-get.value(card);
						},
						ai2:function(target){
							if (get.attitude(player, target) > 0 && target.hp == 1) return 1000;
							return get.attitude(player, target);
						},
					});
					"step 1"
					if(result.targets){
						result.targets[0].gain(result.cards[0],'draw');
						player.$give(result.cards.length,result.targets[0]);
						player.line(result.targets[0],'green');
						player.logSkill('kc_yuzhi',result.targets[0]);
						result.targets[0].addTempSkill('kc_yuzhi_3');
					}
				},
			},
			kc_yuzhi_3:{
				audio:2,
				mark:true,
				intro:{
					content:'本回合免疫【轰！】',
				},
				onremove:true,
				trigger:{target:'shaBefore'},
				forced:true,
				filter:function(event,player){
					//return event.card.subtype == 'attack';
					return event.card.name == 'sha';
				},
				content:function(){
					game.log('雨至：',trigger.card,'对',player,'无效');
					trigger.untrigger();
					trigger.finish();
				},
				check:function(){
					return true;
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(card.name=='sha') return 'zerotarget';
						}
					},
				},
			},
			zuoshibaozhan:{
				cost:2,
				audio:2,
				roundi:true,
				spell:["zuoshibao_2"],
				trigger:{
					player:"phaseBegin",
				},
				filter:function(event,player){
					return player.lili > lib.skill.zuoshibaozhan.cost;
				},
				check:function(event,player){
					return player.countCards('h') < 2 || player.hp == 1;
				},
				content:function(){
					'step 0'
					player.loselili(lib.skill.zuoshibaozhan.cost);
					player.turnOver();
					'step 1'
					if(player.countCards('h')<3)player.draw(3-player.countCards('h'));
					'step 2'
					player.drawSkill('shenyou', '啊嘞，没有【神佑】了吗……');
				},
			},
			zuoshibao_2:{
				audio:2,
				trigger:{player:['discardAfter','useCardAfter']},
				filter:function(event,player){
					if(event.name=='useCard'&&player==_status.currentPhase)return false;
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				},
				direct:true,
				popup:false,
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					event.cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.position(trigger.cards[i])=='d'){
							event.cards.push(trigger.cards[i]);
							ui.special.appendChild(trigger.cards[i]);
						}
					}
					"step 1"
					if(event.cards.length){
						var goon=false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].name=='du'){
								goon=true;break;
							}
						}
						if(!goon){
							goon=game.hasPlayer(function(current){
								return player!=current&&get.attitude(player,current)>1;
							});
						}
						player.chooseCardButton(get.prompt('zuoshibao_2'),event.cards,[1,event.cards.length]).set('ai',function(button){
							if(!_status.event.goon||ui.selected.buttons.length) return 0;
							if(button.link.name=='du') return 2;
							return 1;
						}).set('goon',goon);
					} else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true,function(card,player,target){
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
						}).set('enemy',get.value(event.togive[0])<0);
					} else{
						for(var i=0;i<event.cards.length;i++){
							event.cards[i].discard();
						}
						event.finish();
					}
					"step 3"
					if(result.bool){
						player.logSkill('zuoshibao_2',result.targets);
						for(var i=0;i<event.togive.length;i++){
							event.cards.remove(event.togive[i]);
						}
						result.targets[0].gain(event.togive,player);
						result.targets[0].$gain2(event.togive);
						event.goto(1);
					} else{
						for(var i=0;i<event.cards.length;i++){
							event.cards[i].discard();
						}
						event.finish();
					}
				},
				ai:{
					expose:0.1,
					player:1,
					effect:{
						target:function(card,player,target,current){
							if(target.hasFriend()&&get.tag(card,'discard')){
								if(current<0) return 0;
								return [1,1];
							}
						}
					}
				}
			},
			yaowu:{
				audio:2,
				trigger:{
					player:"phaseEnd",
				},
				priority:2,
				check:function(event,player){
					return true;
				},
				filter:function (event,player){
					return player.countUsed()>2;
				},
				content:function(){
					'step 0'
					player.chooseTarget('令一名角色收回一张装备牌',function(card,player,target){
						return target.countCards('e');
					}).set('ai',function(target){
							if (get.attitude(player, target) > 0 && target.countCards('e', function(card){
								return get.bonus(card) > 0 || card.name == 'frog';
							})){
								return 1;
							}
							return get.attitude(player, target) < 0 && target.countCards('e', function(card){
								return get.bonus(card) < 0 || get.subtype(card) == 'equip2';
							});
						});
					'step 1'
					if(result.targets){
						event.target = result.targets[0];
						player.choosePlayerCard(event.target,'e',true).set('ai',function(button){
							if (get.attitude(player, event.target) > 0){
								return get.bonus(button.link) > 0 || button.link.name == 'frog';
							} else {
								return get.bonus(button.link) < 0 || get.subtype(button.link) == 'equip2';
 							}
						});
					}
					'step 2'
					if(result.bool){
						event.target.gain(result.links,'gain2');
						player.chooseTarget('弃置场上一张牌',function(card,player,target){
							return target.countCards('ej');
						}).set('ai', function(target){
							return get.attitude(player, target) < 0;
						});
					}
					'step 3'
					if(result.bool){
						player.discardPlayerCard(result.targets[0],'ej',true);
					}
				},
			},
			huanrao:{
				audio:2,
				group:["huanrao_2"],
				enable:'phaseUse',
				viewAs:{name:'wuzhong'},
				usable:1,
				filterCard:true,
				position:'he',
				viewAsFilter:function(player){
					return player.countCards('he')>0;
				},
				check:function(card){
					return 7-get.value(card);
				}
			},
			huanrao_2:{
				trigger:{
					target:"useCardToBegin",
				},
				direct:true,
				filter:function(event,player){
					return event.skill && event.skill == 'huanrao';
				},
				content:function(){
					"step 0"
					player.addTempSkill('huanrao_3');
				},
			},
			huanrao_3:{
				trigger:{player:'gainBegin'},
				forced:true,
				popup:false,
				filter:function(event,player){
					console.log(event);
					return true;
				},
				content:function(){
					player.addTempSkill('huanrao_4');
					if(!player.storage.huanrao){
						player.storage.huanrao=[];
					}
					for(var i=0;i<trigger.cards.length;i++){
						player.storage.huanrao.add(trigger.cards[i]);
					}
					player.showCards(trigger.cards);
					if (trigger.parent.name != 'drawSkill'){
						player.removeSkill('huanrao_3');
					}
				}
			},
			huanrao_4:{
				mod:{
					cardEnabled:function (card,player){
						if(_status.event.skill==undefined&&player.storage.huanrao.contains(card)) return false;
					},
					cardUsable:function (card,player){
						if(_status.event.skill==undefined&&player.storage.huanrao.contains(card)) return false;
					},
					cardRespondable:function (card,player){
						if(_status.event.skill==undefined&&player.storage.huanrao.contains(card)) return false;
					},
					cardSavable:function (card,player){
						if(_status.event.skill==undefined&&player.storage.huanrao.contains(card)) return false;
					},
				},
				enable:["chooseToUse"],
				filter:function(){
					return true;
				},
				onremove:function(player){
					player.storage.huanrao = [];
				},
				filterCard:function(card){
					var player=_status.event.player;
					return player.storage.huanrao.contains(card);
				},
				viewAs:{name:"sha"},
				prompt:"将【环绕】牌当【轰！】使用",
				sub:true,
			},
			sliver_arrow:{
				audio:2,
				spell:["sliver_arrow_2"],
				cost:4,
				audio:2,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.sliver_arrow.cost;
				},
				check:function(event,player){
					return game.countPlayer(function(current){
						return get.attitude(player, current) < 0 && current.countCards('hej') <= player.countCards('h') + 2;
					});
				},
				content:function(){
					player.loselili(lib.skill.sliver_arrow.cost);
					player.turnOver();
				},
			},
			sliver_arrow_2:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				filter:function(event,player){
					return player.countCards('h');
				},
				content:function(){
					"step 0"
					player.chooseTarget('弃置一名角色, 弃置其'+player.countCards('h')+'张牌',function(card,player,target){
						return player!=target;
					}).set('ai',function(target){
						if (target.countCards('hej') && target.countCards('hej') <= player.countCards('h')) return - (get.attitude(player,target) - 10);
                        return -get.attitude(player,target);
                    }); 
					'step 1'
					if (result.bool){
						event.bool = true;
						event.target = result.targets[0];
						event.target.addTempSkill('sliver_arrow_3');
						player.discardPlayerCard(event.target,'hej',Math.min(event.target.countCards('hej'),player.countCards('h')),true);
					}
					"step 2"
					if (event.bool){
						event.target.removeSkill('sliver_arrow_3');
						player.skip('phaseDiscard');
						trigger.cancel();
					}
				},
				prompt:'是否发动【白银之箭】跳过出牌阶段？',			
				check:function(){
					return true;	
				}
			},
			sliver_arrow_3:{
				trigger:{player:'loseEnd'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('hej')) return false;
					return true;
				},
				content:function(){
					player.damage();
					player.damage('thunder');
				},
			},
			hongxi:{
				audio:2,
				enable:['chooseToUse'],
				group:['hongxi_2'],
				filterCard:function(card,player){
					return true;
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					if(!player.countCards('he')) return false;
				},
				prompt:'将一张牌当【轰！】使用',
				check:function(card){return 6-get.value(card)},
				intro:{
					content:function(storage,player){
						if(player.storage.hongxi){
							return '你可以将一张牌当【轰！】使用；此【轰！】指定目标后，你根据转化牌的种类执行下列效果：<br />攻击或武器～你与目标角色拼点：若你赢，此【轰！】不能成为【躲～】的目标；防御或防具～你弃置目标角色各一张牌；辅助、宝物或道具～此【轰！】造成的弹幕伤害＋１。';
						}
					}
				},
				ai:{
					result:{
						player:1,
					},
					respondSha:'use',
					order:4,
					skillTagFilter:function(player){
						if(!player.countCards('he')) return false;
					},
				}
			},
			hongxi_2:{
				forced:true,
				trigger:{player:'shaBefore'},
				filter:function(event,player){
					if(event.skill!='hongxi') return false;
					if(event.triggername=='shaBefore'&&event.target.countCards('h')==0)return false;
					if(event.triggername=='damageBefore'&&event.nature == 'thunder')return false;
					return true;
				},
				logTarget:'target',
				content:function(){
					'step 0'
					if(event.triggername=='shaBefore'){
						if(get.subtype(trigger.cards[0])=='attack'||get.subtype(trigger.cards[0])=='equip1'){//get.itemtype(trigger.card)==''){
							player.chooseToCompare(trigger.target);
						}
						if(get.subtype(trigger.cards[0])=='defense'||get.subtype(trigger.cards[0])=='equip2'){
							if(player.countCards('he'))player.discardPlayerCard('he',trigger.target,true);
						}
					}
					if(player.storage.hongxi){
						if(get.subtype(trigger.cards[0])=='support'||get.subtype(trigger.cards[0])=='equip3'||get.subtype(trigger.cards[0])=='equip5'){
							player.addTempSkill('hongxi_3','damageBegin');
						}
					}
					'step 1'
					if(result.bool){
						trigger.directHit=true;
					}
				}
			},
			hongxi_3:{
				forced:true,
				onremove:function (player){
					delete player.storage.hongxi;
					player.unmarkSkill('hongxi');
				},
				trigger:{source:'damageBefore'},
				filter:function(event,player){
					return event.nature != 'thunder';
				},
				content:function(){
					if(player.storage.hongxi){
						if(get.subtype(trigger.cards[0])=='support'||get.subtype(trigger.cards[0])=='equip3'||get.subtype(trigger.cards[0])=='equip5'){
							trigger.num++;
						}
					}
				}
			},
			solomon:{
				cost:2,
				audio:1,
				spell:["hongxi_3"],
				trigger:{
					player:"phaseBegin",
				},
				filter:function(event,player){
					return (player.hp < 3 && player.lili > 0) || player.lili > lib.skill.solomon.cost;
				},
				check:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					if(player.hp < 3){
						player.loselili(0);
					} else{
						player.loselili(lib.skill.solomon.cost);
					}
					player.turnOver();
					'step 1'
					player.drawSkill('lianji', '居然没有【连击】了poi？');
					'step 2'
					game.log(player,'更改了','【轰袭】','的描述');
					player.markSkill('hongxi');
					player.storage.hongxi=true;
				},
			},
			honglian:{
				audio:2,
				trigger:{
					player:'phaseBegin',
				},
				content:function (event,player){
					'step 0'
					player.chooseTarget('选择一名靶子',true).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					}).set('enemy');
					'step 1'
					if(result.targets.length){
						player.logSkill('honglian',result.targets);
						player.addTempSkill('honglian_2');
						result.targets[0].addTempSkill('honglian_3', 'phaseBegin');
					}
				},
				ai:{
					threaten:1,
				},
			},
			honglian_2:{
				trigger:{
					source:'damageEnd',
				},
				usable:1,
				forced:true,
				filter:function(event,player){
					return (event.player.hasSkill('honglian_3'));
				},
				content:function(event,player){
					'step 0'
					var list=[];
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(get.distance(event.player,players[i])<=player.lili)list.push(players[i]);
					}
					player.useCard({name:'sha'},list,false);
				},
			},
			honglian_3:{
				mark:true,
			},
			sbrs_liansuo:{
				audio:2,
				trigger:{
					player:'phaseBegin',
				},
				content:function (event,player){
					'step 0'
					player.chooseTarget('选择一名靶子',true).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					}).set('enemy');
					'step 1'
					if(result.targets){
						player.logSkill('sbrs_liansuo', result.targets);
						result.targets[0].addTempSkill('sbrs_liansuo_4');
						player.addTempSkill('sbrs_liansuo_2');
					}
				},
				ai:{
					threaten:1,
				},
			},
			sbrs_liansuo_2:{
				trigger:{global:'loseAfter'},
				/*init:function(player){
					player.storage.sbrs_liansuo=false;
				},*/
				forced:true,
				filter:function(event,player){
					if(event.player.hasSkill('sbrs_liansuo_4')){
						if (event.getParent().name == 'discard' || event.getParent().name == 'gain' || event.getParent(2).name == 'gainPlayerCard'){
							return true;
						}
					}
					return false;
				},
				usable:1,
				content:function(event,player){
					'step 0'
					var list=[];
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(get.distance(event.player,players[i])<=player.lili){
							list.push(players[i]);
							players[i].addTempSkill('sbrs_liansuo_4');
						}
					}
					player.useCard({name:'sha'},list,false);
				},
			},
			sbrs_liansuo_4:{
				mark:true,
				trigger:{target:'useCardToBegin'},
				filter:function(event,player){
					return event.getParent().getParent().name == 'sbrs_liansuo_2';
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('he','是否弃置一张非基本牌令莲锁无效？',function(card,player){
						return get.type(card)!='basic';
					}).set('ai', function(card){
						return 8 - get.value(card);
					});
					'step 1'
					if (result.bool){
						trigger.cancel();
					}
				},
				check:function(){
					return true;	
				},
			},
			explosion:{
				cost:4,
				audio:0,
				spell:["explosion_2"],
				trigger:{
					player:"phaseBegin",
				},
				filter:function(event,player){
					return player.lili > lib.skill.explosion.cost;
				},
				check:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					player.loselili(lib.skill.explosion.cost);
					player.turnOver();
				},
				ai:{
					threaten:2,
					tag:{
						damage:2,
						thunderdamage:2,
					},
				},
			},
			explosion_2:{
				audio:2,
				trigger:{player:'phaseUseBefore'},
				skillAnimation:true,
				forced:true,
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('explosion'),true).set('ai',function(target){
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.bool){
						player.logSkill('explosion',result.targets);
						result.targets[0].damage(2);
						result.targets[0].damage(2,'thunder');
						result.targets[0].discard(result.targets[0].getCards('e'));
						trigger.cancel();
					}
				}
			},
			guyin:{
				forced:true,
				group:['guyin_2','guyin_3'],
				trigger:{player:'useCard'},
				filter:function(event, player){
					 return lib.card[event.card.name].enhance;
				},
				content:function(){
					game.log(player,'发动','【孤樱】','强化了',trigger.card);
					if (!player.storage._enhance) player.storage._enhance = 1;
					else player.storage._enhance++; 
				},
			},
			guyin_2:{
				forced:true,
				trigger:{player:'useCardToBegin', target:'useCardToBegin'},
				filter:function(event,player){
					return get.type(event.card) == 'basic' && event.targets.length == 1;
				},
				content:function(){
					'step 0'
					trigger.cancel();
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
                        if(lib.card[i].type == 'trick' && lib.card[i].subtype == get.subtype(trigger.card)){
                            list.add(i);
                        }
                    }
                    for(var i=0;i<list.length;i++){
                        list[i]=['法术','',list[i]];
                    }
                    if(list.length){
                        trigger.player.chooseButton(['视为使用一张法术牌',[list,'vcard']]).set('ai',function(button){
                            var player=_status.event.player;
                            var card={name:button.link[2]};
                            return get.value(card);
                        });
                    } else {
                    	event.finish();
                    }
                    'step 1'
                    if(result&&result.bool&&result.links[0]){
                        var card = {name:result.links[0][2]};
                        event.fakecard=card;
                        if (lib.filter.targetEnabled2(event.fakecard,trigger.player,trigger.target)){
                        	trigger.player.useCard(event.fakecard, trigger.targets[0]);
                    	}
                    } else {
                        event.finish();
                    }       
				},
			},
			guyin_3:{
				audio:2,
				enable:'chooseToUse',
				filterCard:function(card){
					return card.name == 'shan';
				},
				viewAsFilter:function(player){
					return player.countCards('h',{name:'shan'})>0;
				},
				viewAs:{name:'wuxie'},
				prompt:'将一张【躲～】当【请你住口！】使用',
				check:function(card){return 8-get.value(card)},
				threaten:1.2,
				mod:{
					cardEnabled:function(card,player){
						if(card.name=='shan'&&_status.event.skill!='guyin_3') return false;
					},
					cardUsable:function(card,player){
						if(card.name=='shan'&&_status.event.skill!='guyin_3') return false;
					},
					cardRespondable:function(card,player){
						if(card.name=='shan'&&_status.event.skill!='guyin_3') return false;
					},
					cardSavable:function(card,player){
						if(card.name=='shan'&&_status.event.skill!='guyin_3') return false;
					},
				},
			},
			tianze:{
				forced:true,
				group:'tianze2',
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return event.nature != 'thunder' && event.source;
				},
				content:function(){
					trigger.source.damage('thunder', trigger.num);
				},
			},
			tianze2:{
				forced:true,
				trigger:{target:'useCardToBegin'},
				filter:function(event,player){
					return event.card && get.suit(event.card) == 'heart' && get.subtype(event.card) == 'support' && player.lili >= 1;
				}, 
				content:function(){
					player.loselili();
					player.recover();
				},
			},
			muqi:{
				audio:2,
				group:'muqi2',
				enable:'chooseToUse',
				init:function(player){
					player.storage.muqi = [];
					player.node.framebg.dataset.auto='gold';
					player.node.framebg.dataset.decoration='gold';
				},
				filter:function(event,player){
                    return player.countCards('he')>1;
                },
                chooseButton:{
                    dialog:function(){
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
                            if(lib.card[i].type == 'trick' || lib.card[i].type == 'basic'){
                                list.add(i);
                            }
                        }
                        for(var i=0;i<list.length;i++){
                            list[i]=[get.type(list[i]),'',list[i]];
                        }
                        return ui.create.dialog([list,'vcard']);
                    },
                    filter:function(button,player){
                    	return _status.event.getParent().filterCard({name:button.link[2]},player) && !player.storage.muqi.contains(button.link[2]) && player.getCardUsable(button.link[2]);
                        //return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent()) && !player.storage.muqi.contains(button.link[2]);
                    },
                    check:function(button){
                        var player=_status.event.player;
                        return get.value({name:button.link[2]}) >= 6 && player.countCards('he') >= 3 && !player.countCards('he', {name:button.link[2]});
                    },
                    backup:function(links,player){
                        return {
                            filterCard:function(card,player){
                                return true;
                            },
                            audio:2,
                            position:'he',
                            selectCard:2,
                            audio:2,
                            popname:true,
                            viewAs:{name:links[0][2]},
                            onuse:function(result,player){
                            	if (get.type(result.card.name) == 'trick') player.storage.muqi.push(result.card.name);
                            },
							check:function(card){
								return get.value(card) < 6;
							},
                        }
                    },
                    prompt:function(links,player){
                        return '将两张牌当作'+get.translation(links[0][2])+'使用';
                    },
                },
				hiddenCard:function(player,name){
                    return name == 'shan' || name == 'wuxie';
                },
                ai:{
                	save:true,
                    order:2,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    },
                    threaten:1,
                }
			},
			muqi2:{
				direct:true,
				trigger:{global:'phaseAfter'},
				content:function(){
					player.storage.muqi = [];
				}
			},
			AestusDomusAurea:{
				  audio:2,
                  cost:2,
                  roundi:true,
                  spell:['ADA2','ADA3'],
                  trigger:{player:'phaseBegin'},
                  filter:function(event,player){
                      return player.lili > lib.skill.AestusDomusAurea.cost;
                  },
                  content:function(){
                      if (!player.hasSkill('ADA2')){
                      	player.loselili(lib.skill.AestusDomusAurea.cost);
                      	player.turnOver();
                  	  }
                      var num = player.getHandcardLimit() - player.countCards('h');
                      if (!player.countCards('h')){
                      	player.draw(player.getHandcardLimit());
                      }
                      else if (num > 0){
                      	player.draw(num);
                      }
                  },
                  check:function(event,player){
                  	return player.getHandcardLimit() - player.countCards('h') >= 2;
                  },
			},
			ADA2:{
				audio:2,
				enable:'phaseUse',
				init:function(player){
					game.pause();
					player.storage.ADA = [lib.config.background_music, ui.background.style.backgroundImage];
                    setTimeout(function(){
                    	ui.backgroundMusic.src = '';
                    	player.say('目睹余之才华！耳闻万雷之喝彩！心怀掌权者的荣耀！');
                    	setTimeout(function(){
							game.playBackgroundMusic('nero');
                    		player.say('如花般怒放……开幕吧！黄金的剧场！！');
                    		setTimeout(function(){
                    			player.say('以这一轮为供奉吧……飞舞散落为华，斩开切裂为星！这才是至高的美……');
                    			setTimeout(function(){
                    				player.say('然后赞颂吧！黄金的剧场！！');
                    				player.$skill('黄金剧场',null,null,true);
                    				ui.background.setBackgroundImage('image/background/nero.jpg');
                    				game.resume();
                    			}, 1500);
                    		}, 1500);
                    	},1500);
                    },1500);
				},
				filter:function(event,player){
                    return player.countCards('h')>0;
                },
                onremove:function(player){
					game.playBackgroundMusic(player.storage.ADA[0]);
					ui.background.style.backgroundImage = player.storage.ADA[1];
                },
                chooseButton:{
                    dialog:function(){
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
							if(lib.card[i].type == 'delay'){
                                list.add(i);
                            }
                        }
                        for(var i=0;i<list.length;i++){
                            list[i]=['delay','',list[i]];
                        }
                        return ui.create.dialog([list,'vcard']);
                    },
                    filter:function(button,player){
                    	return true;
                    },
                    check:function(button){
                        var player=_status.event.player;
                        return get.value({name:button.link[2]}) > 4;
                    },
                    backup:function(links,player){
                        return {
                            filterCard:function(card,player){
                                return true;
                            },
                            position:'h',
                            selectCard:1,
                            audio:2,
                            popname:true,
							check:function(card){
								return get.value(card) < 6 && player.countCards('j') < 3;
							},
  							content:function(event,player){
								player.drawSkill(event.getParent().getParent()._result.links[0][2], '什么，余居然没有这种技能？');
  							}
                        }
                    },
                    prompt:function(links,player){
                        return '弃置一张牌，获得一张'+get.translation(links[0][2]);
                    },
                },
                ai:{
                    order:4,
                    result:{
                        player:function(player){
                            return 3 - player.countCards('j');
                        }
                    },
                    threaten:1,
                }
			},
			ADA3:{
				audio:2,
				trigger:{player:'turnOverBefore'},
				filter:function(event,player){
					return player.lili > 1;
				},
				content:function(){
					player.loselili();
					trigger.cancel();
					player.useSkill('AestusDomusAurea');
				},
				prompt:'是否消耗1点灵力，让符卡不结束？',
				check:function(player){
					return true;
				},
			},
			kedan:{
				audio:2,
				group:['kedan2','kedan3'],
				enable:'chooseToUse',
				init:function(player){
					player.storage.kedan = [];
				},
				filter:function(event,player){
                    return player.countCards('he',function(card){
						return get.bonus(card) > 0;	
					});
                },
                chooseButton:{
                    dialog:function(){
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
							if(lib.card[i].type == 'jinji'){
                                list.add(i);
                            }
                        }
                        for(var i=0;i<list.length;i++){
                            list[i]=[get.type(list[i]),'',list[i]];
                        }
                        return ui.create.dialog([list,'vcard']);
                    },
                    filter:function(button,player){
                    	return _status.event.getParent().filterCard({name:button.link[2]},player) && !player.storage.kedan.contains(button.link[2]);
                    },
                    check:function(button){
                        var player=_status.event.player;
                        return get.value({name:button.link[2]}) - 5;
                    },
                    backup:function(links,player){
                        return {
                            filterCard:function(card,player){
                                return get.bonus(card) && get.bonus(card) > 0;
                            },
                            audio:2,
                            position:'he',
                            selectCard:1,
                            audio:2,
                            popname:true,
                            viewAs:{name:links[0][2]},
                            onuse:function(result,player){
                            	if (get.type(result.card.name) == 'jinji') player.storage.kedan.push(result.card.name);
                            },
                        }
                    },
                    prompt:function(links,player){
                        return '将一张牌当作'+get.translation(links[0][2])+'使用';
                    },
                },
                ai:{
                    order:4,
                    result:{
                        player:function(player){
                            return 1;
                        }
                    },
                    threaten:1,
                }
			},
			kedan2:{
				direct:true,
				trigger:{global:'phaseAfter'},
				content:function(){
					player.storage.kedan = [];
				}
			},
			kedan3:{
				trigger:{player:'useCard'},
				filter:function(event,player){
					return get.type(event.card) == 'jinji' && !player.hasSkill('kedan4');
				},
				content:function(){
					'step 0'
					player.chooseTarget('选择一名角色成为'+get.translation(trigger.card)+'的唯一目标',function(card,player,target){
						return player.canUse({name:trigger.card.name},target,false);
					}).set('ai',function(target){
						return get.effect(target,{name:trigger.card.name},player, player);
					});
					"step 1"
					if(result.bool){
						player.logSkill(event.name,result.targets);
						trigger.target=result.targets[0];
						trigger.targets = [];
						trigger.targets.push(result.targets[0]);
					}
					else{
						event.finish();
					}
					"step 2"
					trigger.untrigger();
					player.addTempSkill('kedan4', 'useCardAfter');
					trigger.trigger('useCard');
					game.delay();
				},
				prompt:'是否改变禁忌牌的目标？',
			},
			kedan4:{
			},
			shishu:{
				audio:2,
				group:['shishu2','shishu3','shishu4'],
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					var players = game.filterPlayer();
					var num = 0;
					var ej = false;
					for (var i = 0; i < players.length; i ++){
						if (players[i] != player) num += players[i].hp;
						if (players[i].countCards('e',function(card){
							return get.bonus(card) > 0;	
						})) ej = true;
					}
					return num < player.storage.shishu && (ej || player.storage.shishu3);
				},
				content:function(){
					'step 0'
					var players = game.filterPlayer();
					var num = 0;
					for (var i = 0; i < players.length; i ++){
						if (players[i] == player) continue;
						num += players[i].hp;
					}
					event.num = num;
					player.storage.shishu -= event.num;
					'step 1'
					if (player.storage.shishu <= 0) event.finish();
					var ej = false;
					var players = game.filterPlayer();
					for (var i = 0; i < players.length; i ++){
						if (players[i] != player) num += players[i].hp;
						if (players[i].countCards('e',function(card){
							return get.bonus(card) > 0;	
						})) ej = true;
					}
					var list = [];
					if (player.storage.shishu3 && player.storage.shishu3.length > 0) list.push('翻弃牌堆');
					if (ej) list.push('从场上抢');
					if (list.length == 0) event.finish();

					player.chooseControl(list,function(event,player){
						if (list['从场上抢']) return '从场上抢';
						if (list['翻弃牌堆']) return '翻弃牌堆';
						return false;
					});
					'step 2'
					if (result.control == '从场上抢'){
						event.control = 1;
						player.chooseTarget('选择一个倒霉人，抢她一张有灵力的牌',function(card,player,target){
							return target.countCards('e',function(card){
								return get.bonus(card) > 0;	
							});
						}).set('ai',function(target){
							return -get.attitude(player,target);
						});
					} else if (result.control == '翻弃牌堆'){
						event.control = 2;
						player.chooseCardButton(player.storage.shishu3,'捡回一张牌',1,true).ai=function(button){
	                        var val=get.value(button.link);
	                        if(val<0) return -10;
	                        return val;
	                    }
					}
					'step 3'
					if (event.control == 2) {
						if (result.links){
							player.gain(result.links)._triggered=null;
		                    for(var i=0;i<result.links.length;i++){
		                        ui.discardPile.remove(result.links[i]);
		                        player.storage.shishu3.remove(result.links[i]);
		                        player.syncStorage('shishu3');
		                    }
	                	}
					}
					if (event.control == 1){
						if (result.targets){
							player.gainPlayerCard(result.targets[0],1,'e',true).set('filterButton',function(button){
								return get.bonus(button.link) > 0;
							});
						}
					}
					'step 4'
					player.storage.shishu --;
					if (player.storage.shishu > 0) event.goto(1);
				},
			},
			shishu2:{
				direct:true,
				trigger:{player:'phaseBefore'},
				content:function(){
					var players = game.filterPlayer();
					var num = 0;
					for (var i = 0; i < players.length; i ++){
						if (players[i] == player) continue;
						num += players[i].hp;
					}
					player.storage.shishu = num;
				},
			},
			shishu3:{
				intro:{
					content:'cards'
				},
 				trigger:{global:'loseEnd'},
                direct:true,
                filter:function(event,player){
                    if (_status.currentPhase!=player) return false;
                    for(var i=0;i<event.cards.length;i++){
                    	if(get.type(event.cards[i]) == 'equip' && event.getParent().name == 'useCard' && event.getParent().card.name == event.cards[i].name) continue;
                        if(get.type(event.cards[i]) != 'jinji' && !get.bonus(event.cards[i]) > 0) continue;
                        if(get.position(event.cards[i])=='d'){
                            return true;
                        }
                    }
                    return false;
                },
                content:function(){
                    for (var i = 0; i < trigger.cards.length; i ++){
                    	if (get.type(trigger.cards[i]) != 'jinji' && !get.bonus(trigger.cards[i]) > 0) continue;
                        if (!player.storage.shishu3) player.storage.shishu3 = [trigger.cards[i]];
                        else player.storage.shishu3.push(trigger.cards[i]); 
                    }
                    player.markSkill('shishu3');
                    player.syncStorage('shishu3');
                },   
			},
			shishu4:{
				direct:true,
				trigger:{player:'phaseAfter'},
				content:function(){
					delete player.storage.shishu3;
					player.syncStorage('shishu3');
					player.unmarkSkill('shishu3');
				}
			},
			shishi:{
				audio:2,
                cost:4,
                spell:['shishi1','shishi2'],
                roundi:true,
                trigger:{player:'phaseBeginStart'},
                check:function(event,player){
                    return false;
                },
                filter:function(event,player){
                    return player.lili > lib.skill.shishi.cost;
                },
                content:function(){
                    player.loselili(lib.skill.shishi.cost);
                    player.turnOver();
                },
			},
			shishi1:{
				audio:2,
				direct:true,
				trigger:{player:['damageBefore','loseHpBefore','loseliliBefore']},
				filter:function(event,player){
					return event.num > 0;
				},
				content:function(){
					trigger.num = 0;
					//trigger.cancel();
				},
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},
					cardUsable:function(card,player,num){
						if(card.name=='sha') return Infinity;
					}
				},
			},
			shishi2:{
				audio:2,
				trigger:{source:'dieAfter'},
				forced:true,
				filter:function(event,player){
					//return !player.hasSkill('lianpo2');
					return true;
				},
				content:function(){
					player.addSkill('shishi3');
					player.insertPhase();
				}
			},
			shishi3:{
				direct:true,
				trigger:{player:'turnOverBefore'},
				content:function(){
					player.removeSkill('shishi3');
					trigger.cancel();
				},
			},
			geying:{
				audio:2,
				group:['geying1','geying2'],
				usable:3,
				trigger:{player:'loseAfter'},
				filter:function(event,player){
					return player.countCards('h') > 0;
				},
				content:function(){
					'step 0'
					var l = [];
					if (player.storage.mingzhi){
						l.push('暗置一张手牌');
					}
					if (!player.storage.mingzhi || (player.storage.mingzhi && player.storage.mingzhi.length < player.countCards('h'))){
						l.push('明置一张手牌');
					}
					if (l.length == 0) event.finish();
					player.chooseControl(l, function(event,player){
						if (l.contains('明置一张手牌')) return '明置一张手牌';
						return '暗置一张手牌';
					});
					'step 1'
					if (result.control == '明置一张手牌'){
						player.chooseCard('选择一张手牌明置！','h',function(card){
	                        if (player.storage.mingzhi) return !player.storage.mingzhi.contains(card);
	                        else return true;
	                    }).set('ai',function(card){
	                        return 1;
	                    });
					} else if (result.control == '暗置一张手牌'){
						player.chooseCard('选择一张手牌暗置！','h',function(card){
	                        if (player.storage.mingzhi) return player.storage.mingzhi.contains(card);
	                        else return false;
	                    }).set('ai',function(card){
	                        return 1;
	                    });
					} else {
						event.finish();
					}
					event.control = result.control;
					'step 2'
					if (result.bool && result.cards.length){
						if (event.control == '明置一张手牌'){
							player.mingzhiCard(result.cards[0]);
						} else if (event.control == '暗置一张手牌'){
							player.storage.mingzhi.remove(result.cards[0]);
							if (player.storage.mingzhi.length == 0){
								delete player.storage.mingzhi;
								player.unmarkSkill('mingzhi');
	                        	player.syncStorage('mingzhi');
							}
						}
					}
					if (player.hasSkill('wuyan')) player.useSkill('wuyan');
				},
			},
			geying1:{
				audio:2,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					if (!player.countCards('hej')) return false;
					if (!player.storage.mingzhi && !player.countCards('ej')) return false;
					return true;
				},
				content:function(){
					var c = player.getCards('ej');
					if (player.storage.mingzhi){
						c = c.concat(player.storage.mingzhi);
					}
					player.recast(c);
				},
				prompt2:'准备阶段，你可以重铸所有明置牌',
			},
			geying2:{
				audio:2,
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					if (!player.countCards('h')) return false;
					if (player.storage.mingzhi && player.countCards('hej') <= player.storage.mingzhi.length) return false;
					return true;
				},
				content:function(){
					var c = player.getCards('h');
					var h = [];
					for (var i = 0; i < c.length; i ++){
						if (player.storage.mingzhi && player.storage.mingzhi.contains(c[i])){
							continue;
						}
						h.push(c[i]);
					}
					player.recast(h);
				},
				prompt2:'结束阶段，你可以重铸所有暗置手牌',
			},
			wuyan:{
				global:['wuyan1','wuyan2','wuyan3','wuyan4'],
				direct:true,
				trigger:{player:['equipAfter','loseEnd','gainAfter']},
				filter:function(event,player){
					return true;
				},
				content:function(){
					player.storage.wuyan1 = 0;
					player.storage.wuyan2 = 0;
					player.storage.wuyan3 = 0;
					player.storage.wuyan4 = 0;
					if (!player.countCards('e') && !player.storage.mingzhi){
						player.unmarkSkill('wuyan1');
						player.unmarkSkill('wuyan2');
						player.unmarkSkill('wuyan3');
						player.unmarkSkill('wuyan4');
						event.finish();
					}
					var c = player.getCards('e');
					if (player.storage.mingzhi) c = c.concat(player.storage.mingzhi);
					for (var i = 0; i < c.length; i ++){
						if (get.suit(c[i]) == 'spade'){
							player.storage.wuyan2 = player.storage.wuyan2 + 1;
						} else if (get.suit(c[i]) == 'club'){
							player.storage.wuyan1 = player.storage.wuyan1 + 1;
						} else if (get.suit(c[i]) == 'heart'){
							player.storage.wuyan3 = player.storage.wuyan3 + 1;
						} else if (get.suit(c[i]) == 'diamond'){
							player.storage.wuyan4 = player.storage.wuyan4 + 1;
						}
					}
					var max = Math.max(player.storage.wuyan1, player.storage.wuyan2, player.storage.wuyan3, player.storage.wuyan4);
					if (player.hasSkill('stage1') || max == 0) max = 1;
					if (player.storage.wuyan1 >= max){
						player.markSkill('wuyan1');
					} else {
						player.unmarkSkill('wuyan1');
						player.storage.wuyan1 = 0;
					}
					if (player.storage.wuyan2 >= max){
						player.markSkill('wuyan2');
					} else {
						player.unmarkSkill('wuyan2');
						player.storage.wuyan2 = 0;
					}
					if (player.storage.wuyan3 >= max){
						player.markSkill('wuyan3');
					} else {
						player.unmarkSkill('wuyan3');
						player.storage.wuyan3 = 0;
					}
					if (player.storage.wuyan4 >= max){
						player.markSkill('wuyan4');
					} else {
						player.unmarkSkill('wuyan4');
						player.storage.wuyan4 = 0;
					}
					player.syncStorage('wuyan1');
					player.syncStorage('wuyan2');
					player.syncStorage('wuyan3');
					player.syncStorage('wuyan4');
				},
			},
			// 舞燕梅花
			wuyan1:{
				intro:{
                    content:function(storage,player){
                        return '所有角色在摸牌阶段额外摸一张牌。';
                    }
                },
				forced:true,
				trigger:{player:'phaseDrawBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target.hasSkill('wuyan') && target.storage.wuyan1 && target.storage.wuyan1 != 0;
					});
				},
				content:function(){
					trigger.num++;
				},
			},
			// 舞燕黑桃
			wuyan2:{
				intro:{
                    content:function(storage,player){
                        return '所有角色在准备阶段获得1点灵力';
                    }
                },
				forced:true,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target.hasSkill('wuyan') && target.storage.wuyan2 && target.storage.wuyan2 != 0;
					});
				},
				content:function(){
					player.gainlili();
				}
			},
			// 舞燕红桃
			wuyan3:{
				intro:{
                    content:function(storage,player){
                        return '所有角色一回合一次，出牌阶段，可以将一张牌当作【葱】使用';
                    }
                },
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target.hasSkill('wuyan') && target.storage.wuyan3 && target.storage.wuyan3 != 0;
					}) && player.countCards('he');
				},
				enable:'phaseUse',
				usable:1,
				selectCard:1,
				position:'he',
				viewAs:{name:'tao'},
				prompt:'可以将一张牌当作【葱】使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					recover:1,
					order:7.5,
					result:{
						target:1,
					}
				}
			},
			// 舞燕方片
			wuyan4:{
				intro:{
                    content:function(storage,player){
                        return '所有角色在弃牌阶段开始时，可以交给初音一张牌';
                    }
                },
				trigger:{player:'phaseDiscardBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(target){
						return target.hasSkill('wuyan') && target.storage.wuyan4 && target.storage.wuyan4 != 0;
					});
				},
				content:function(){
					'step 0'
                    player.chooseCardTarget({
                      prompt:'交给初音一张牌~',
                      selectCard:1,
                      filterTarget:function(card,player,target){
                        return target.hasSkill('wuyan') && target.storage.wuyan4 != 0;
                      },
                      position:'hej',
                      ai2:function(target){
                        return get.attitude(_status.event.player,target);
                      }
                    });
                    'step 1'
                    if(result.targets&&result.targets[0]){
                      result.targets[0].gain(result.cards,player);
                      player.$give(result.cards.length,result.targets[0]);
                      result.targets[0].say('谢谢你的应援~！');  
                    }
				},
				check:function(event,player){
					return game.hasPlayer(function(target){
						return target.hasSkill('wuyan') && target.storage.wuyan4 && target.storage.wuyan4 != 0 && get.attitude(player,target) && player.countCards('h') > target.countCards('h');
					});
				},
			},
			stage:{
				spell:['stage1'],
				cost:2,
				audio:2,
				roundi:true,
                trigger:{player:'phaseBegin'},
                check:function(event,player){
                    return player.countCards('h') < 2;
                },
                filter:function(event,player){
                    return player.lili > lib.skill.stage.cost;
                },
                content:function(){
                    player.loselili(lib.skill.stage.cost);
                    if (!player.countCards('h')) player.draw(3);
                    else if (player.countCards('h') < 3) player.draw(3 - player.countCards('h'));
					player.mingzhiCard(player.getCards('h'));
                    player.turnOver();
                },
			},
			stage1:{},
			yanju:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return player.lili > 0;
				},
				content:function(){
					'step 0'
					player.chooseControl(['无视距离','无视装备效果','不能成为牌的目标'],function(event,player){
								return '不能成为牌的目标';
							}).set('prompt','选择一个效果赋予你的下一张【轰！】');
					'step 1'
					if (result.control){
						if (result.control == '无视距离'){
							player.addTempSkill('yanju1', 'useCardAfter');
							game.trySkillAudio('yanju',player,true,1);
						} else if (result.control == '无视装备效果'){
							player.addTempSkill('louguan_skill','useCardAfter');
							game.trySkillAudio('yanju',player,true,2);
						} else if (result.control == '不能成为牌的目标'){
							player.addTempSkill('yanju3', 'useCardAfter');
							game.trySkillAudio('yanju',player,true,3);
						}
						player.chooseTarget('选择一名狙击目标',function(card,player,target){
							return player.canUse({name:'sha'},target);
						}).set('ai',function(target){
							return get.effect(target,{name:'sha'},_status.event.player);
						});
					}
					'step 2'
					if(result.bool){
						player.loselili();
						player.logSkill('yanju',result.targets);
						player.useCard({name:'sha'},result.targets[0],false);
					} else {
						player.removeSkill('yanju1');
						player.removeSkill('louguan_skill');
						player.removeSkill('yanju3');
					}
				},
			},
			yanju1:{
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},
				},
			},
			yanju3:{
				trigger:{player:'shaBegin'},
				logTarget:'target',
				filter:function(event,player){
					return true;
				},
				content:function(){
					trigger.directHit=true;
				},
				forced:true,
			},
			shangtang:{
				audio:2,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili < 3 || player.countCards('h') < 4;
				},
				content:function(){
					'step 0'
					var l = [];
					if (player.lili < 3){
						l.push('将灵力补至3');
					}
					if (player.countCards('h') < 4){
						l.push('将手牌数补至4');
					}
					player.chooseControl(l).set('ai',function(){
                        if (player.countCards('h') < 4 && 4-player.countCards('h') > 3 - player.lili) return '将手牌数补至4';
                        return '将灵力补至3';
                    });
					'step 1'
					if (result.control == '将手牌数补至4'){
						player.draw(4-player.countCards('h'));
						player.addTempSkill('shangtang1',{player:'phaseBegin'});
					} else if (result.control == '将灵力补至3'){
						player.gainlili(3-player.lili);
						player.addTempSkill('shangtang1',{player:'phaseBefore'});
					}
				},
				check:function(event,player){
					return player.countCards('h') < 2 || player.lili < 2;
				},
			},
			shangtang1:{
				mark:true,
				intro:{
					content:'不能对其他角色使用牌<br>手牌上限至少为3',
				},
				mod:{
					playerEnabled:function(card,player,target){
						if(player!=target) return false;
					},
					maxHandcard:function(player,num){
						if (num < 3) return 3;
						else return num;
					},
					/*
                    globalTo:function(from,to,distance){
                        if (to.hasSkill('shangtang1')) return distance+10000;
                        return distance;
                    },
                    */
				}
			},
			ruizhi:{
				audio:2,
				trigger:{player:'phaseBegin'},
				filter:function(){
					return true;
				},
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					event.cards = [result.card];
					player.judge();
					'step 2'
					event.cards.push(result.card);
					player.judge();
					'step 3'
					event.cards.push(result.card);
					var list = [];
					for (var i = 0; i < event.cards.length; i ++){
						if (get.suit(event.cards[i]) == 'spade'){
							if (!list.contains('♠：获得2点灵力')) list.push('♠：获得2点灵力');
						} else if (get.suit(event.cards[i]) == 'club'){
							if (!list.contains('♣：将一名角色的一张牌置于牌堆顶')) list.push('♣：将一名角色的一张牌置于牌堆顶');
						} else if (get.suit(event.cards[i]) == 'diamond'){
							if (!list.contains('♢：视为使用一张【轰！】')) list.push('♢：视为使用一张【轰！】');
						}
					}
					if (list.length == 0) event.finish();
					event.list = list;
					'step 4'
					if (event.list.length == 0) event.finish();
					var str = '选择一项效果执行';
					if (player.hasSkill('mojing0')) str = '选择下一项执行的效果';
					player.chooseControl(event.list).set('ai',function(){
						if (event.list.contains('♠：获得2点灵力') && player.lili < 2) return '♠：获得2点灵力';
                    	if (event.list.contains('♣：将一名角色的一张牌置于牌堆顶')) return '♣：将一名角色的一张牌置于牌堆顶';
                    	if (event.list.contains('♢：视为使用一张【轰！】')) return '♢：视为使用一张【轰！】';
                		return event.list.randomGet();
                	}).set('prompt',str);
                    'step 5'
                    event.control = result.control;
                    if (result.control == '♠：获得2点灵力'){
                    	player.gainlili(2);
                    } else if (result.control == '♣：将一名角色的一张牌置于牌堆顶'){
                    	player.chooseTarget('选择一名角色，将其一张牌置于牌堆顶',function(card,player,target){
							return target.countCards('he');
						}).set('ai',function(target){
							return -get.attitude(player,target);
						});
                    } else if (result.control == '♢：视为使用一张【轰！】'){
                    	player.chooseTarget('选择【轰！】的目标',function(card,player,target){
							return player.canUse({name:'sha'},target);
						}).set('ai',function(target){
							return get.effect(target,{name:'sha'},_status.event.player);
						});
                    } else {
                    	event.finish();
                    }
                    'step 6'
                    if(result.bool){
	                    if (event.control == '♢：视为使用一张【轰！】'){
	                  		player.logSkill('ruizhi',result.targets);
							player.useCard({name:'sha'},result.targets[0],false);  	
	                    } else if (event.control == '♣：将一名角色的一张牌置于牌堆顶'){
	                    	event.target = result.targets[0];
	                    	player.choosePlayerCard('he','将'+get.translation(event.target)+'的一张牌置于牌堆顶',true,event.target);
	                    }
	                }
                    'step 7'
                    if (result.bool && event.control == '♣：将一名角色的一张牌置于牌堆顶'){
                    	player.logSkill('ruizhi',event.target);
                    	game.log(event.target,'的一张牌置于牌堆顶');
                    	var card=result.links[0];
                    	event.target.lose(card,ui.special);
						card.fix();
						event.card = card;
                    }
                    'step 8'
					if (event.card && event.control == '♣：将一名角色的一张牌置于牌堆顶'){
						ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					}
					'step 9'
                	if (player.hasSkill('mojing0')){
                		event.list.remove(event.control);
                		if (event.list.length) event.goto(4);
                	}
				},
			},
			mojing:{
				cost:4,
				spell:['mojing1'],
				audio:2,
				roundi:true,
                trigger:{player:'phaseBegin'},
                check:function(event,player){
                    return false;
                },
                filter:function(event,player){
                    return player.lili > lib.skill.mojing.cost;
                },
                content:function(){
                    player.loselili(lib.skill.mojing.cost);
                    player.addSkill('mojing0');
					player.turnOver();
                    player.useCard({name:'simen'},game.filterPlayer().remove(player));
                },
			},
			mojing0:{
				init:function(){
					lib.translate['ruizhi_info'] = '准备阶段，你可以判定3次，然后选择所有项：若结果中有黑桃，你获得2点灵力；若有方片，你视为使用一张【轰！】；若有梅花，你将一张角色的一张牌置于牌堆顶。';
				},
			},
			mojing1:{
				forced:true,
				trigger:{global:'discardAfter'},
				filter:function(event,player){
					for(var i=0;i<event.cards.length;i++){
						if(get.suit(event.cards[i])=='heart'&&get.position(event.cards[i])=='d'){
							return true;
						}
					}
					return false;
				},
				content:function(){
					"step 0"
					if(trigger.delay==false) game.delay();
					"step 1"
					var cards=[];
					for(var i=0;i<trigger.cards.length;i++){
						if(get.suit(trigger.cards[i])=='heart'&&get.position(trigger.cards[i])=='d'){
							cards.push(trigger.cards[i]);
						}
					}
					if(cards.length){
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i ++){
							if (players[i] != player){
								players[i].loseHp();
							}
						}
					}
				},
			},
			ng_wenhao:{
				group:['ng_pinjian','ng_pinjian3'],
			},
			niguang:{
				group:['ng_pinjian','ng_pinjian3'],
			},
			ng_pinjian:{
				audio:2,
				trigger:{player:'useCardToBegin',target:'useCardToBegin'},
				filter:function(event, player){
					if(event._notrigger.contains(player)) return false;
					return event.card&&get.subtype(event.card) == 'attack' &&event.player && event.target && event.player!=event.target &&event.player.countCards('h') && event.target.countCards('h');
				},
				check:function(event,player){
					if(event.target==player) return -get.attitude(player,event.player);
					return -get.attitude(player,event.target);
				},
    			content:function(){
    				"step 0"
					event.target = trigger.target;
					if(trigger.target==player) event.target = trigger.player;
    				player.chooseToCompare(event.target);
    				"step 1"
        			if (!result.tie){
						if(result.bool){
							player.discardPlayerCard('hej',event.target,true);
						}else{
							event.target.discardPlayerCard('hej',player,true);
						}
					}
    			},
    			ai:{
    				expose:0.3
    			},
			},
			ng_pinjian3:{
				trigger:{player:'chooseCardBegin'},
				filter:function(event, player){
					return event.type=='compare'&&!event.directresult&&player.lili > 0;
				},
				content:function(){
					if (trigger.parent && trigger.parent.target){
						player.loselili();
						if (player == trigger.parent.target){
							player.discardPlayerCard('hej',trigger.parent.player,true);
						} else {
							player.discardPlayerCard('hej',trigger.parent.target,true);
						}
					}
				},
				prompt2:'消耗1点灵力，弃置与你拼点的角色一张牌',
			},
			ng_wenhao2:{
				audio:1,
				derivation:'ClarentBloodArthur',
				init:function(player){
					player.storage.ng_wenhao2=false;
				},
				filter:function(event,player){
					if(player.storage.ng_wenhao2) return false;
					return player.lili > 1;
				},
				trigger:{player:'phaseBegin'},
				content:function (event,player){
					'step 0'
					player.draw(player.maxHp-player.hp);
					'step 1'
					player.awakenSkill('ng_wenhao2');
					player.storage.ng_wenhao2=true;
					'step 2'
					var hp = player.hp;
					var lili = player.lili;
					player.init('mordred');
					player.hp=hp;
					player.lili=lili;
					player.useSkill('ClarentBloodArthur');
					player.update();
					lib.translate['ng_pinjian'] = '逆光';
					lib.translate['ng_pinjian3'] = '逆光';
				},
				check:function(event,player){
					return player.lili > 3 || player.hp < 3;
				},
			},
			ClarentBloodArthur:{
				audio:2,
				cost:1,
				roundi:true,
				spell:['CBA2'],
				group:['CBA3'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.ClarentBloodArthur.cost;
				},
				content:function(){
					player.loselili(lib.skill.ClarentBloodArthur.cost);
					player.turnOver();
					player.maxlili = 8;
				},
			},
			CBA2:{
				mod:{
					number:function(card,number){
						if(number!=-1)return 13;
					}
				},
			},
			CBA3:{
				trigger:{player:'turnOverAfter'},
				forced:true,
				filter:function(event,player){
					return !player.isTurnedOver();
				},
				content:function(){
					"step 0"
					player.chooseTarget('对一名角色造成'+player.lili+'点弹幕伤害',true).set('ai',function(target){
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.bool){
						result.targets[0].damage(player.lili);
					}
					"step 2"
					player.maxlili = parseInt(lib.character[player.name][6]);
					player.loselili(player.lili);
				},
			},
			qiyue:{
				trigger:{player:'shaBegin'},
				filter:function(event,player){
					return event.target.countCards('hej')>0;
				},
				audio:2,
				logTarget:'target',
				content:function(){
					'step 0'
					player.discardPlayerCard(trigger.target,'hej',true);
					'step 1'
					if (trigger.target.countCards('h') == 0) player.gainlili();
				},
				ai:{
					expose:0.2
				},
				check:function(event,player){
					return -get.attitude(player,event.target);
				},
			},
			yueding:{
				audio:2,
				cost:2,
				spell:['yueding1','yueding2'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.yueding.cost;
				},
				content:function(){
					player.loselili(lib.skill.yueding.cost);
					player.turnOver();
				},
				check:function(event,player){
					return player.lili > 4;
				},
			},
			yueding1:{
				trigger:{player:'shaBegin'},
				filter:function(event,player){
					return event.target.countCards('hej')>0;
				},
				audio:2,
				logTarget:'target',
				content:function(){
					'step 0'
					player.discardPlayerCard(trigger.target,'hej',true);
					'step 1'
					if (trigger.target.countCards('e') == 0) player.draw();
				},
				prompt2:'你使用【轰！】指定目标后，可以弃置目标一张牌；然后，若目标没有装备牌，你摸一张牌。',
				ai:{
					expose:0.2
				},
				check:function(event,player){
					return -get.attitude(player,event.target);
				}
			},
			yueding2:{
                audio:2,
                enable:['chooseToUse'],
                filter:function(event,player){
                  return true;
                },
                position:'he',
                selectCard:1,
                usable:1,
                viewAs:{name:'sha'},
                filterCard:true,
                prompt:'将一张牌当【轰！】使用',
                check:function(card){return 4-get.value(card)},
                ai:{
					respondSha:'use',
                },
                mod:{
                  cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+1;
                  }
                },
            },
			touying:{
				audio:2,
				usable:1,
				enable:'chooseToUse',
				group:['touying_recast','touying_target'],
				filter:function(event,player){
					if (!_status.event.getParent('phaseUse') && !_status.event.getParent('touying_target')) return false;
                    return player.countCards('h') > player.countCards('h', {type:'equip'}) && player.lili > 0;
                },
                chooseButton:{
                    dialog:function(){
                        var list = [];
						var packs = lib.config.all.cards.diff(lib.config.cards);
                        for (var i in lib.card){
							if (!lib.translate[i]) continue;
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
							if(lib.card[i].type == 'equip'){
                                list.add(i);
                            }
                        }
                        for(var i=0;i<list.length;i++){
                            list[i]=[get.type(list[i]),'',list[i]];
                        }
                        return ui.create.dialog([list,'vcard']);
                    },
					/*
                    filter:function(button,player){
                    	return _status.event.getParent().filterCard({name:button.link[2]},player);
                        //return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent()) && !player.storage.muqi.contains(button.link[2]);
                    },
					*/
                    check:function(button){
                        var player=_status.event.player;
                        return get.value({name:button.link[2]}) - 5;
                    },
                    backup:function(links,player){
                        return {
                            filterCard:function(card,player){
                                return get.type(card) != 'equip';
                            },
                            audio:2,
                            position:'h',
                            selectCard:1,
                            audio:2,
                            popname:true,
                            viewAs:{name:links[0][2]},
                            onuse:function(result,player){
                            	player.loselili();
								if (!player.storage.counttrigger){
									player.addSkill('counttrigger');
									player.storage.counttrigger={};
								}
								if(!player.storage.counttrigger['touying_target']){
									player.storage.counttrigger['touying_target']=1;
								}
								else{
									player.storage.counttrigger['touying_target']++;
								}
                            },
                        }
                    },
                    prompt:function(links,player){
                        return '将一张非装备牌当作'+get.translation(links[0][2])+'使用';
                    },
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
			touying_target:{
				audio:'touying_backup',
				trigger:{target:'useCardToBefore'},
				usable:1,
				filter:function(event,player){
					if (get.subtype(event.card) != 'attack') return false;
                    return player.countCards('h') > player.countCards('h', {type:'equip'}) && player.lili > 0;
                },
				content:function(){
					'step 0'
					 player.chooseToUse(function(card){
						return false;
					},'使用【投影】将非装备牌当作装备牌使用').set('logSkill','touying');
				},
				check:function(){
					return true;
				},
			},
			touying_recast:{
				trigger:{global:'phaseEnd'},
				direct:true,
				filter:function(event,player){
					return player.countCards('e');
				},
				content:function(){
					var cards = player.getCards('e');
					var list = [];
					for (var i = 0; i < cards.length; i ++){
						if(cards[i] && cards[i].dataset.cardType != 'equip'){
							list.push(cards[i]);
						}
					}
					player.recast(list);
				},
			},
			wenmo:{
				audio:2,
				usable:1,
				enable:'phaseUse',
				filter:function(event,player){
					if(player.countCards('hej')==0) return false;
					return game.hasPlayer(function(current){
						return current.countCards('hej');
					});
				},
				filterTarget:function(card,player,target){
					return target.countCards('hej') && target != player;
				},
				content:function(){
					"step 0"
					if(player.countCards('h')==0){
						event.finish();
						return;
					}
					player.chooseCard('吻魔：选择一张牌展示给'+get.translation(target),true,'hej').ai=function(card){
						if(_status.event.getRand()<0.5) return Math.random();
						return get.value(card);
					};
					"step 1"
					player.showCards(result.cards);
					event.card2=result.cards[0];
					game.log(player,'展示了',event.card2);
					if(target.countCards('h')==0){
						event.finish();
						return;
					}
					if (target.name == 'illyasviel') game.trySkillAudio('wenmo', target, true, 3);
					target.chooseCard('吻魔：选择一张牌与'+get.translation(player)+'的'+get.translation(event.card2)+
					'交换<br>相同颜色的话，'+get.translation(player)+'获得1点灵力',true, 'hej').ai=function(card){
						if (get.attitude(target, player) >= 0) return get.color(card) == get.color(event.card2);
						else return get.color(card) != get.color(event.card2);
					};
					"step 2"
					if (result.bool){
						target.showCards(result.cards);
						target.gain(event.card2,player);
                		player.$give(event.card2, target);
						player.gain(result.cards, target);
						target.$give(result.cards, player);
						if (get.color(result.cards[0]) == get.color(event.card2)){
							player.gainlili();
						};
					}
				},
				ai:{
					result:{
						target:1,
						player:1,
					},
					order:7,
				},
			},
			heyi:{
				audio:1,
				cost:0,
				spell:['heyi_skill'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.heyi.cost;
				},
				content:function(){
					player.loselili(lib.skill.heyi.cost);
					player.turnOver();
				},
				check:function(event,player){
					return player.lili > 3 || player.countCards('e') > 1;
				},
			},
			heyi_skill:{
				audio:2,
				trigger:{player:'shaBegin'},
				init:function(player){
					lib.skill.touying.usable = 3;
					lib.skill.touying_target.usable = 3;
				},
				onremove:function(player){
					lib.skill.touying.usable = 1;
					lib.skill.touying_target.usable = 1;
				},
				filter:function(event,player){
					return player.countCards('e');
				},
				content:function(){
					'step 0'
					player.chooseCard('e',[1,Infinity],'重铸任意张装备牌，弃置'+get.translation(trigger.target)+'等量张牌').set('ai',function(card){
                        return get.value(card);
                    });
					'step 1'
					if (result.bool){
						player.recast(result.cards);
						player.discardPlayerCard(trigger.target,'hej',result.cards.length);
					}
				},
				check:function(){
					return true;
				},
			},
			zhuanhuan:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				content:function(){
					player.discard(player.getCards('h'));
					player.draw(player.lili);
				},
				ai:{
					order:1,
					result:{
						player:function(player, target){
							return player.lili - player.countCards('h');
						}
					},
				}
			},
			moli:{
				audio:2,
				usable:1,
				enable:'phaseUse',
				selectTarget:[1, 3],
				selectCard:1,
				filterTarget:function(card, player, target){
					return target.countCards('hej');
				},
				filterCard:true,
				position:'hej',
				content:function(){
					player.discardPlayerCard('hej', target);
				},
				contentAfter:function(){
					'step 0'
					var cards=[];
                    for (var i = targets.length; i > 0; i--){
                        if (ui.cardPile.childNodes.length < i){
                            var card = get.cards(i);
                            //ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
                        }
                        cards.push(ui.cardPile.childNodes[ui.cardPile.childNodes.length-i]);
                    }
                    event.cards = cards;
					event.num = 0;
					'step 1'
					player.chooseCardButton('将一张牌分给'+get.translation(targets[event.num]),true,event.cards,1).set('ai',function(button){
						if(ui.selected.buttons.length==0) return 1;
						return 0;
					});
					'step 2'
					if (result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						targets[event.num].gain(result.links,'draw');
						player.line(targets[event.num],'green');
						game.log(targets[event.num],'获得了'+get.cnNumber(result.links.length)+'张牌');
					}
					if (event.cards.length == 0 || event.num >= targets.length) event.finish();
					else {
						event.num ++;
						event.goto(1);
					}
				},
				ai:{
					result:{
						player:-1,
						target:0.5,
					},
				}
			},
			chaoyue:{
				audio:2,
				cost:7,
				spell:['chaoyue_skill'],
				group:'chaoyue_reduce',
				trigger:{player:'phaseBegin'},
				init:function(player){
					player.storage.chaoyue = 0;
				},
				intro:{
					content:function(storage,player){
						return '符卡消耗-'+player.storage.chaoyue;
					},
				},
				filter:function(event,player){
					return player.lili > (lib.skill.chaoyue.cost - player.storage.chaoyue);
				},
				content:function(){
					player.loselili(lib.skill.chaoyue.cost - player.storage.chaoyue);
					player.turnOver();
					player.storage.chaoyue = 0;
					player.syncStorage('chaoyue');
					player.unmarkSkill('chaoyue');
				},
				check:function(event,player){
					return player.storage.chaoyue > 5;
				},	
			},
			chaoyue_skill:{
				trigger:{player:'phaseAfter'},
				direct:true,
				content:function(){
					player.insertPhase();
				}
			},
			chaoyue_reduce:{
				direct:true,
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
				},
				content:function(){
					if (!player.storage.chaoyue) player.storage.chaoyue = 0;
					player.storage.chaoyue ++;
					player.markSkill('chaoyue');
				},
			},
			tanxue:{
				trigger:{target:'shaBefore'},
				audio:2,
				filter:function(event,player){
					return player.lili > event.player.lili;
				},
				content:function(){
					player.addTempSkill('tanxue_damage');
				},
				check:function(){
					return true;
				},
			},
			tanxue_damage:{
				direct:true,
				trigger:{player:'damageBefore'},
				filter:function(event, player){
					return event.card && event.card.name == 'sha' && event.nature != 'thunder';
				},
				content:function(){
					player.damage(trigger.source, 'thunder', trigger.num);
					trigger.cancel();
				},
			},
			bingfeng:{
				audio:2,
				trigger:{global:'useCard'},
				filter:function(event, player){
					return !event.player.storage._enhance && player.countCards('hej') && get.type(event.card) == 'trick';
				},
				content:function(){
					'step 0'
					player.chooseToDiscard('hej', 1);
					'step 1'
					if (result.bool){
						trigger.player.addTempSkill('bingfeng_enhance',{player:'useCardAfter'});
						lib.skill.bingfeng_enhance.trigger = {player: trigger.card.name};
						console.log(lib.skill.bingfeng_enhance.trigger); 
						trigger.player.storage._enhance = 1;
					}
				},
				check:function(event, player){
					return player.countCards('hej') > 3 && get.attitude(player, event.player) > 0;
				},
			},
			bingfeng_enhance:{
				direct:true,
				trigger:{player:'useCardToBegin'},
				filter:function(event, player){
					return player.storage._enhance && event.target;
				},
				content:function(){
					for (var i = 0; i < player.storage._enhance; i ++){
						trigger.target.damage('thunder');
					}
				},
			},
			aoshu:{
				audio:2,
				usable:1,
				enable:'phaseUse',
				filter:function(event, player){
					return player.lili > 0;
				},
				content:function(){
					'step 0'
					event.num = player.lili;
					player.loselili(player.lili);
					'step 1'
					if (event.num > 0){
						player.chooseTarget('令一名角色获得1点灵力<br>还剩'+event.num+'点灵力可分配', true).set('ai',function(target){
							return target.lili < target.maxlili && get.attitude(player, target) > 0;
						});
					}
					'step 2'
					if (result.bool){
						result.targets[0].gainlili();
						event.num --;
						if (event.num > 0) event.goto(1);
					}
					'step 3'
					player.addSkill('aoshu_lili');
				},
				ai:{
					result:{
						player:1,
					},
				},
			},
			aoshu_lili:{
				audio:2,
				forced:true,
				/*
				trigger:{global:'useSkillAfter'},
				filter:function(event,player){
					return lib.skill[event.skill].spell;
				},
				*/
				trigger:{global:'turnOverAfter'},
				filter:function(event, player){
					return event.player.isTurnedOver();
				},
				content:function(){
					player.gainlili();
				},
			},
			wulin:{
				audio:2,
				trigger:{global:'phaseBegin'},
				limited:true,
				mark:true,
				intro:{
					content:'limited'
				},
				filter:function(event,player){
					return (player.countCards('hej')>0);
				},
				check:function(event, player){
					var bad_att = false;
					var players = game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if (-get.attitude(player, players[i]) && players[i].countCards('h') > 3) bad_att = true;
					}
					return bad_att && get.attitude(player, event.player) && event.player.countCards('h','sha') > 1;
				},
				content:function(){
					"step 0"
					player.chooseTarget('雾临：洗混一名角色手牌，且其本回合可以被轰两次',true, function(card, player, target){
							return get.distance(player,target,'attack')<=1;
						}).ai=function(target){
							return -get.attitude(player, target);
						};
					"step 1"
 					if (result.bool){
                        player.awakenSkill('wulin');
						player.logSkill(event.name,result.targets);
                        result.targets[0].addTempSkill('shiming_2');
                        result.targets[0].addTempSkill('shiming_3');
						result.targets[0].addTempSkill('wulin_skill');
                    }
				},
			},
			wulin_skill:{
				direct:true,
				usable:1,
				trigger:{target:'shaBefore'},
				content:function(){
					trigger.player.getStat().card.sha--;
				},
			},
			yejiang:{
				audio:2,
				trigger:{global:'phaseBegin'},
				limited:true,
				mark:true,
				intro:{
					content:'limited',
				},
				filter:function(event,player){
					return (player.countCards('hej')>0);
				},
				check:function(event, player){
					var bad_att = false;
					var players = game.filterPlayer();
					if (-get.attitude(player, event.player) && event.player.countCards('h') > 3) bad_att = true;
					return bad_att;
				},
				content:function(){
					"step 0"
					player.chooseTarget('夜降：一名角色攻击范围为0，且其本回合装备无效', true, function(card, player, target){
							return get.distance(player,target,'attack')<=1;
						}).ai=function(target){
							return -get.attitude(player, target) && target == trigger.player;
						};
					"step 1"
 					if (result.bool){
						player.awakenSkill('yejiang');
                        player.logSkill(event.name,result.targets);
                        result.targets[0].addTempSkill('yejiang_2');
						result.targets[0].addTempSkill('unequip');
                    }
				}
			},
			yejiang_2:{
				mod:{
					attackFrom:function(from,to,distance){
						// 数场上符合条件的角色，不错
						return distance + 10;
					}
				},
    		},
			maria:{
				audio:2,
				cost:2,
				spell:['maria_skill'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.maria.cost;
				},
				content:function(){
					player.loselili(lib.skill.maria.cost);
					player.turnOver();
				},
				check:function(event,player){
					//return player.awakenedSkills.contains('yejiang') && player.awakenSkills.contains('wulin');
					return player.hasSha();
				},	
			},
			maria_skill:{
				forced:true,
				onremove:function(player){
					player.restoreSkill('yejiang');
					player.restoreSkill('wulin');
				},
				audio:2,
				trigger:{source:'damageEnd'},
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return (event.card&&event.card.name=='sha'&&
						event.player.classList.contains('dead')==false&&
						event.player.countCards('h'));
				},
				check:function(event,player){
					return get.attitude(player,event.player)<0;
				},
				content:function(){
					"step 0"
					trigger.player.discard(trigger.player.getCards('h'));
				}
			},
			guankan:{
				enable:'phaseUse',
				content:function(){
					var cards=[];
					for(var i=0;i<ui.cardPile.childNodes.length;i++){
						cards.push(ui.cardPile.childNodes[i]);
					}
					player.chooseCardButton('傲才：选择一张卡牌打出',cards).set('filterButton',function(button){
						return true;
					});
				}
			},
			waimai:{
				forced:true,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili == 0;
				},
				content:function(){
					player.draw(2);
				},
			},
			heike:{
				enable:'phaseUse',
				usable:1,
				selectTarget:1,
				filterTarget:function(card, player, target){
					return target.countCards('h') && player.lili > 0;
				},
				content:function(){
					'step 0'
					player.loselili();
					event.videoId=lib.status.videoId++;
					var cards=target.getCards('h');
					if(player.isOnline2()){
						player.send(function(cards,id){
							ui.create.dialog('黑客',cards).videoId=id;
						},cards,event.videoId);
					}
					event.dialog=ui.create.dialog('黑客',cards);
					event.dialog.videoId=event.videoId;
					if(!event.isMine()){
						event.dialog.style.display='none';
					}
					player.chooseButton().set('filterButton',function(button){
						return true;
					}).set('dialog',event.videoId);
					"step 1"
					if(result.bool){
						player.gain(result.links[0], target);
						if(player.isOnline2()){
							player.send('closeDialog',event.videoId);
						}
						event.dialog.close();
						event.finish();
					}
				},
				ai:{
					result:{
						target:function(player,target){
							return -target.countCards('h');
						}
					},
					order:10,
					expose:0.4,
				}
			},
			xiangyi:{
				group:['xiangyi_2','xiangyi_3'],
				audio:1,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card,player){
					if (!player.countCards('e', {color:'black'})){
						if (get.color(card) == 'black') return false;
					}
					if (!player.countCards('e', {color:'red'})){
						if (get.color(card) == 'red') return false;
					}
					return true;
				},
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					return player.countCards('e');
				},
				prompt:'将一张牌当作轰！使用/打出',
				check:function(card){return 4-get.value(card)},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('e');
					},
					respondSha:true,
				}
			},
			xiangyi_2:{
				audio:'xiangyi',
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card, player){
					if (!player.countCards('e', {color:'black'})){
						if (get.color(card) == 'black') return false;
					}
					if (!player.countCards('e', {color:'red'})){
						if (get.color(card) == 'red') return false;
					}
					return true;
				},
				position:'he',
				viewAs:{name:'shan'},
				viewAsFilter:function(player){
					return player.countCards('e');
				},
				prompt:'将一张牌当作躲～使用/打出',
				check:function(){return 1},
				ai:{
					respondShan:true,
					skillTagFilter:function(player){
						return player.countCards('e');
					},
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')&&current<0) return 0.6
						}
					}
				}
			},
			xiangyi_3:{
				audio:3,
				trigger:{player:'useCardAfter'},
				filter:function(event, player){
					return _status.currentPhase != player;
				},
				content:function(){
					'step 0'
                    player.chooseTarget('翔翼：可以对一名角色造成1点灵击伤害').set('ai',function(target){
                        if (_status.currentPhase == target && get.attitude(player, _status.currentPhase) < 0 && target.lili == 1) return 100;
                        return -get.attitude(_status.event.player,target);
                    });
                    'step 1'
                    if (result.bool){
                        player.logSkill(event.name,result.targets);
						result.targets[0].damage('thunder');
                    }
                },
			},
			chunse:{
				forced:true,
				audio:2,
				group:['chunse_2'],
				trigger:{global:'phaseAfter'},
				filter:function(event, player){
					return event.player.hp > player.hp || event.player.countCards('h') > player.countCards('h');
				},
				content:function(){
					player.gainlili();
				},
			},
			chunse_2:{
				audio:2,
				trigger:{source:'damageBefore'},
				filter:function(event, player){
					return event.nature == 'thunder' && player.lili == player.maxlili;
				},
				content:function(){
					trigger.untrigger();
					trigger.finish();
					trigger.player.damage(trigger.num);
				},
			},
			huanzhao:{
				unique:true,
				init:function(player){
					player.storage.huanzhao={
						list:[],
						shown:[],
						owned:{},
						player:player,
					}
				},
				get:function(player,msg){
					var name = msg;
					if(typeof msg!='number'){
						msg=1;
					}
					var list=[];
					game.log(player,'获得了'+msg+'张“梦幻”');
					while(msg--){
						if(typeof name != 'string'){
							name=player.storage.huanzhao.list.randomRemove();
						}
						var skills=lib.character[name][3].slice(0);
						for(var i=0;i<skills.length;i++){
							var info=lib.skill[skills[i]];
							if (!info) continue;
							if(info.unique&&!info.gainable){
								skills.splice(i--,1);
							}
						}
						player.storage.huanzhao.owned[name]=skills;
						list.push(name);
						name = msg;
					}
					if(player.isUnderControl(true)){
						var cards=[];
						for(var i=0;i<list.length;i++){
							var cardname='huanzhao_card_'+list[i];
							lib.card[cardname]={
								fullimage:true,
								image:'character:'+list[i]
							}
							lib.translate[cardname]=lib.translate[list[i]];
							cards.push(game.createCard(cardname,'',''));
						}
						player.$draw(cards);
					}
				},
				group:['huanzhao1','huanzhao2','huanzhao4'],
				intro:{
					content:function(storage,player){
						var str='';
						var slist=storage.owned;
						var list=[];
						for(var i in slist){
							list.push(i);
						}
						if(list.length){
							str+=get.translation(list[0]);
							for(var i=1;i<list.length;i++){
								str+='、'+get.translation(list[i]);
							}
						}
						var skill=player.additionalSkills.huanzhao[0];
						if(skill){
							str+='<p>当前技能：'+get.translation(skill);
						}
						return str;
					},
					mark:function(dialog,content,player){
						var slist=content.owned;
						var list=[];
						for(var i in slist){
							list.push(i);
						}
						if(list.length){
							dialog.addSmall([list,'character']);
						}
						if(!player.isUnderControl(true)){
							for(var i=0;i<dialog.buttons.length;i++){
								if(!content.shown.contains(dialog.buttons[i].link)){
									dialog.buttons[i].node.group.remove();
									dialog.buttons[i].node.hp.remove();
									dialog.buttons[i].node.intro.remove();
									dialog.buttons[i].node.lili.remove();
									dialog.buttons[i].node.name.innerHTML='未<br>知';
									dialog.buttons[i].node.name.dataset.nature='';
									dialog.buttons[i].style.background='';
									dialog.buttons[i]._nointro=true;
									dialog.buttons[i].classList.add('menubg');
								}
							}
						}
						if(player.additionalSkills.huanzhao){
							var skill=player.additionalSkills.huanzhao[0];
							if(skill){
								dialog.add('<div><div class="skill">【'+get.translation(skill)+'】</div><div>'+lib.translate[skill+'_info']+'</div></div>');
							}
						}
					}
				},
				mark:true
			},
			huanzhao1:{
				audio:1,
				trigger:{global:'gameStart'},
				forced:true,
				filter:function(event,player){
					return !player.storage.huanzhaoinited;
				},
				content:function(){
					for(var i in lib.character){
						if(lib.filter.characterDisabled2(i)) continue;
						var add=false;
						for(var j=0;j<lib.character[i][3].length;j++){
							var info=lib.skill[lib.character[i][3][j]];
							if(!info){
								continue;
							}
							if(info.gainable||!info.unique){
								add=true;break;
							}
						}
						if(add){
							player.storage.huanzhao.list.push(i);
						}
					}
					for(var i=0;i<game.players.length;i++){
						player.storage.huanzhao.list.remove([game.players[i].name]);
						player.storage.huanzhao.list.remove([game.players[i].name1]);
						player.storage.huanzhao.list.remove([game.players[i].name2]);
					}
					lib.skill.huanzhao.get(player,2);
					player.storage.huanzhaoinited=true;
				}
			},
			huanzhao2:{
				audio:2,
				trigger:{player:['phaseBegin']},
				filter:function(event,player,name){
					return true;
				},
				prompt2:'明置一张“梦幻”并暗置其余；你视为持有明置“梦幻”牌的第一项技能。',
				content:function(){
					'step 0'
					event.trigger('playercontrol');
					'step 1'
					var slist=player.storage.huanzhao.owned;	//获取化身库
					var list=[];
					for(var i in slist){
						list.push(i);
					}
					var dialog=ui.create.dialog('选择一张“梦幻”明置','hidden');
					dialog.add([list.randomGets(list.length),'character']);
					player.chooseButton(dialog,true).ai=function(button){
						return get.rank(button.link,true);
					};
					var skills=[];
					for(var i=0;i<list.length;i++){
						var sub=lib.character[list[i]][3];
						skills.addArray(sub);
					}
					var add=player.additionalSkills.huanzhao;
					if(typeof add=='string'){
						add=[add];
					}
					if(Array.isArray(add)){
						for(var i=0;i<add.length;i++){
							skills.remove(add[i]);	
						}
					}
					'step 2'	//标记
					player.storage.huanzhao.shown = [];
					player.storage.huanzhao.shown.add(result.links[0]);
					var mark=player.marks.huanzhao;
						mark.hide();
						mark.style.transition='all 0.3s';
						setTimeout(function(){
							mark.style.transition='all 0s';
							ui.refresh(mark);
							mark.setBackground(result.links[0],'character');
							if(mark.firstChild){
								mark.firstChild.remove();
							}
							setTimeout(function(){
								mark.style.transition='';
								mark.show();
							},50);
						},500);
					'step 3'
					var name=result.links[0];
					event.char = name;
					if (name == 'kuro') game.trySkillAudio('huanzhao2', player, true, 3);
					if(!player.additionalSkills.huanzhao||!player.additionalSkills.huanzhao.contains(lib.character[name][3][0])){
						player.addAdditionalSkill('huanzhao',lib.character[name][3][0]);
						game.log(player,'获得技能','【'+get.translation(lib.character[name][3][0])+'】');
						player.popup(lib.character[name][3][0]);
					}
					'step 4'
					player.update();
					'step 5'
					if (player.lili > 0){
						player.chooseBool('幻召：你可以消耗1点灵力，获得'+get.translation(event.char)+'的全部技能，直到回合结束').set('choice',player.lili>4);
					}
					'step 6'
					if (result.bool){
						player.loselili();
						for (var i = 1; i < lib.character[event.char][3].length; i ++){
							player.addTempSkill(lib.character[event.char][3][i]);
						}
					}
				}
			},
			huanzhao4:{
				audio:2,
				trigger:{source:'dieAfter'},
				forced:true,
				filter:function(event,player){
					return !(get.mode() == 'boss' && game.bossinfo.chongzheng);
				},
				content:function(){
					lib.skill.huanzhao.get(player, trigger.player.name);
					player.storage.huanzhao.shown.add(trigger.player.name);
				}
			},
			wuxian:{
				audio:2,
				forced:true,
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return true;
				},
				content:function(){
					"step 0"
					player.gainlili();
					"step 1"
					if(player.lili==player.maxlili){
						game.trySkillAudio('wuxian', player, true, Math.ceil(2*Math.random())+2);
						player.draw();
					}
				}
			},
			quintette_fire:{
				cost:0,
				audio:2,
				spell:["quintette_fire_2"],
				trigger:{
					player:"phaseBegin",
				},
				filter:function(event,player){
					var slist=player.storage.huanzhao.owned;	//获取化身库
					var num = 7;
					for(var i in slist){
						num --;
						if (num <= 0) break;
					}
					return player.lili > num;
				},
				check:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					var slist=player.storage.huanzhao.owned;	//获取化身库
					var num = 7;
					for(var i in slist){
						num --;
						if (num <= 0) break;
					}
					player.loselili(num);
					player.turnOver();
					player.chooseTarget(get.prompt('quintette_fire'),true).set('ai',function(target){
						return -get.attitude(player,target);
					});
					"step 1"
					if(result.bool){
						result.targets[0].damage(3);
					}
					"step 2"
					player.discard(player.getCards('h'));
				}
			},
			huoli:{
				usable:1,
				audio:1,
				trigger:{player:'shaBefore'},
				filter:function(event, player){
					return player.countCards('hej');
				},
				content:function(){
					'step 0'
					player.chooseToDiscard(1,'hej').set('ai', function(card){
						return get.value(card) < 8;
					});
					'step 1'
					if (result.bool){
						player.addTempSkill('huoli_1', {player:'shaAfter'});
					}
				},
				check:function(event, player){
					return get.attitude(event.targets[0], player) < 0 && event.targets[0].lili == 1;
				},
			},
			huoli_1:{
				trigger:{source:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';
				},
				content:function(){
					player.line(trigger.player,'green');
					trigger.player.damage('thunder');
				}
			},
			zhihui:{
				audio:2,
				trigger:{global:'phaseBegin'},
				filter:function(event, player){
					return event.player != player && player.lili > 0;
				},
				content:function(){
					'step 0'
					player.loselili();
					player.line(trigger.player,'green');
					trigger.player.chooseControl(['摸一张牌','多出一张轰','获得1点灵力'], true).set('ai',function(){
						if (trigger.player.countCards('h', {name:'sha'}) > 1) return '多出一张轰';
						if (trigger.player.lili < 2) return '获得1点灵力';
						return '摸一张牌';
					});
					'step 1'
					if (result.control == '摸一张牌'){
						trigger.player.draw();
					} else if (result.control == '多出一张轰'){
						trigger.player.addTempSkill('zhihui_1');
					} else if (result.control == '获得1点灵力'){
						trigger.player.gainlili();
					}
				},
				check:function(event, player){
					return get.attitude(player, event.player) > 0 && player.lili > 1;
				},
			},
			zhihui_1:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='sha') return num + 1;
					}
				},
			},
			shenyuan:{
				audio:2,
				cost:2,
				spell:['shenyuan_1'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.shenyuan.cost;
				},
				content:function(){
					player.loselili(lib.skill.shenyuan.cost);
					player.turnOver();
				},
				check:function(event, player){
					return player.countCards('h', {name:'sha'}) && player.lili > 3;
				},
			},
			shenyuan_1:{
				trigger:{player:'shaBegin'},
				content:function(){
					trigger.directHit=true;
				},
				mod:{
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1] = player.maxHp - player.hp;
					},
				},
			},
			iphone3:{
				audio:2,
				enable:['chooseToRespond','chooseToUse'],
				filterCard:function(card,player){
					return true;
				},
				selectCard:0,
				position:'he',
				viewAs:{name:'sha'},
				viewAsFilter:function(player){
					return true;
				},
				prompt:'视为使用或打出一张【轰！】',
				check:function(card){return 4-get.value(card)},
				ai:{
					order:function(card,player){
						if (player.countCards('h',function(card){
							return card.name == 'sha' && get.bonus(card) > 0;	
						})) return 2;
						return 4;
					},
					skillTagFilter:function(player){
						return true;
					},
					respondSha:true,
				}
			},
			Halvanhelev:{
				audio:2,
				cost:3,
				spell:['Halvanhelev_1'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.Halvanhelev.cost;
				},
				content:function(){
					player.loselili(lib.skill.Halvanhelev.cost);
					player.turnOver();
				},
				check:function(event, player){
					return player.lili > 3;
				},
			},
			Halvanhelev_1:{
				trigger:{source:'damageBegin'},
				filter:function(event){
					return true;
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					damageBonus:true
				}
			},
			lvtu:{
				audio:2,
				trigger:{player:'phaseBegin'},
				content:function(){
					'step 0'
					event.num = [player.maxHp, player.lili, player.countCards('h'), player.countCards('j')];
					var choices = ['体力上限', '灵力值', '手牌数', '技能牌数'];
					var low = Math.min.apply(null, event.num);
					for (var i = 0; i < event.num.length; i ++){
						if (event.num[i] == low){
							event.num.remove(event.num[i]);
							choices.remove(choices[i]);
							i = 0;
						}
					}
					//choices.remove(event.num.indexOf(low));
					event.low = low;
					var str = "选择一项，将该项调整为与最少的一项相同（最少的一项为"+low+"）";
					player.chooseControl(choices).set('prompt', str);
					'step 1'
					if (result.control){
						event.choices = ['体力上限', '灵力值', '手牌数', '技能牌数'];
						event.choices.remove(result.control);
						if (result.control == '体力上限'){
							player.loseMaxHp(player.maxHp - event.low);
						} else if (result.control == '灵力值'){
							player.loselili(player.lili - event.low);
						} else if (result.control == "手牌数"){
							player.chooseToDiscard('h', true, [player.countCards('h') - event.low]);
						} else if (result.control == "技能牌数"){
							player.chooseToDiscard('j', true, [player.countCards('j') - event.low]);
						}
					}
					'step 2'
					if (event.choices){
						event.num = [player.maxHp, player.lili, player.countCards('h'), player.countCards('j')];
						event.high = Math.max.apply(null, event.num);
						var str = "选择一项，将该项调整为与最多的一项相同（最多的一项为"+event.high+"）";
						player.chooseControl(event.choices).set('prompt', str);
					}
					'step 3'
					if (result.control){
						if (result.control == '体力上限'){
							player.gainMaxHp(event.high - player.maxHp);
						} else if (result.control == '灵力值'){
							player.gainlili(event.high - player.lili);
						} else if (result.control == "手牌数"){
							player.draw(event.high - player.countCards('h'));
						} else if (result.control == "技能牌数"){
							player.drawSkill(event.high - player.countCards('j'));
						}
					}
				},
				check:function(event, player){
					return false;
				},
			},
			mengjin:{
				enable:'phaseUse',
				group:'mengjin_unmark',
				usable:1,
				intro:{
					content:function (storage){
						return '已发动【梦镜】，决死时重置';
					},
				},
				filter:function(event, player){
					return !player.storage.mengjin;
				},
				content:function(){
					'step 0'
					var num = player.maxHp - player.hp;
					if (num > player.hp){
						player.recover(num - player.hp);
					} else if (num < player.hp){
						player.loseHp(player.hp - num);
					}
					'step 1'
					var num = 3 - player.countCards('h');
					if (num < 0) num = 0;
					if (num > player.countCards('h')){
						player.draw(num - player.countCards('h'));
					} else if (num < player.countCards('h')){
						player.chooseToDiscard('h', true, [player.countCards('h') - num, player.countCards('h') - num]);
					}
					'step 2'
					var num = 5 - player.lili;
					if (num > player.lili){
						player.gainlili(num - player.lili);
					} else if (num < player.lili){
						player.loselili(player.lili - num);
					}
					player.storage.mengjin = 1;
					player.markSkill('mengjin');
				},
				ai:{
					threaten:-1,
					order:1,
					result:{
						player:function(player, target){
							if ((player.maxHp - player.hp) > 1){
								return 2;
							}
							return -1;
						}
					}
				}
			},
			mengjin_unmark:{
				direct:true,
				trigger:{player:'dyingBegin'},
				content:function(){
					delete player.storage.mengjin;
					player.unmarkSkill('mengjin');
				},
			},
			weimo:{
				audio:2,
				cost:1,
				spell:['weimo_1'],
				trigger:{player:'phaseBegin'},
				roundi:true,
				filter:function(event,player){
					return player.lili > lib.skill.weimo.cost;
				},
				content:function(){
					player.loselili(lib.skill.weimo.cost);
					player.turnOver();
				},
				check:function(event, player){
					return player.hp < 2;
				},
			},
			weimo_1:{
				global:['weimo_2', 'weimo_3', 'weimo_4'],
			},
			weimo_2:{
				mod:{
					maxHandcard:function(player,num){
						return num - 2 * game.countPlayer(function(current){
							return current.hasSkill('weimo_1') && current.isMinHandcard();
						});
					}
				}
			},
			weimo_3:{
				trigger:{player:'damageBegin'},
				forced:true,
				filter:function(event, player){
					return game.countPlayer(function(current){
						return current.hasSkill('weimo_1') && current.isMinHp();
					});
				},
				content:function(){
					trigger.num ++;
				}
			},
			weimo_4:{
				init:function(player,skill){
					if (!game.hasPlayer(function(current){
						return current.hasSkill('weimo_1') && current.isMinlili();
					})) return;
                    var skills=player.getSkills(true,false);
                    for(var i=0;i<skills.length;i++){
                        if(get.is.locked(skills[i])){
                            skills.splice(i--,1);
                        }
                    }
                    player.disableSkill(skill,skills);
                },
                onremove:function(player,skill){
                    player.enableSkill(skill);
				},
				trigger:{global:['loseliliAfter', 'gainliliAfter']},
				content:function(){
					if (!game.hasPlayer(function(current){
						return current.hasSkill('weimo_1') && current.isMinlili();
					})){
						player.enableSkill(skill);
					} else {
						var skills=player.getSkills(true,false);
						for(var i=0;i<skills.length;i++){
							if(get.is.locked(skills[i])){
								skills.splice(i--,1);
							}
						}
						player.disableSkill(skill,skills);
					}
				}
			},
						
			//阿尔托莉雅
			shengguang: {
				trigger: { player: 'useCardToBegin', target: 'useCardToBegin' },
				init:function(player){
						player.storage.shengguang=false;
				},
				/*mark:true,
				intro:{
					content:function(){
						if(get.is.altered('shengguang')){
							lib.translate['shengguang'] = '霸光';
							lib.translate['shengguang_win'] = '霸光';
						}else{
							lib.translate['shengguang'] = '胜光';
							lib.translate['shengguang_win'] = '胜光';
						}
						return lib.translate['shengguang_info'];
					},
				},*/
				filter: function (event, player) {
					if (event._notrigger.contains(player)) return false;
					let pl=(event.player==player) ? event.target : event.player;
					return event.card && get.subtype(event.card) == 'attack' && event.player && event.target && event.player!=event.target && event.player.countCards('h') && event.target.countCards('h');// && player.canCompare(pl)
				},
				check: function (event, player) {
					if (event.target == player) return -get.attitude(player, event.player);
					return -get.attitude(player, event.target);
				},
				alter:true,
				content:function(){
					"step 0"
					if(lib.config.compare_discard){
						player.storage.shengguang = lib.config.compare_discard;
						game.saveConfig('compare_discard',false);
					}
					event.target = trigger.target;
					if(trigger.target==player) event.target = trigger.player;
					player.chooseToCompare(event.target);
					"step 1"
					if(player.storage.shengguang){
						game.saveConfig('compare_discard',player.storage.shengguang);
						if (!result.tie){
							if(result.bool){
								player.draw();
							}else{
								event.target.draw();
							}
						}
					}
				},
				group: 'shengguang_win',
				subSkill: {
					win: {
						trigger: {
							player: "compare",
							target: "compare",
						},
						filter: function (event, player) {
							return player.lili > 0;
						},
						check: function (event, player) {
							var num1 = event[player == event.player ? 'num1' : 'num2'];
							var num2 = event[player == event.player ? 'num2' : 'num1'];
							var num3 = event[player == event.player ? 'num1' : 'num2'] * 2;
							return num1 < num2 && num3 > num2 && num2 != 13;
						},
						//alter:get.is.altered('shengguang'),
						prompt:function() {
							if(get.is.altered('shengguang'))return'是否消耗1点灵力令另一方拼点牌数字减半（不小于1）';
							return'是否消耗1点灵力令拼点牌数字翻倍（不大于13）';
						},
						content: function () {
							player.loselili();
							if(get.is.altered('shengguang')){
								if (player != trigger.target || trigger.iwhile) {
									var num = Math.ceil(trigger[player != trigger.player ? 'num1' : 'num2'] / 2);
									trigger[player != trigger.player ? 'num1' : 'num2'] = Math.max(num, 1);
									game.log(trigger.target, '的拼点牌点数减半，变为'+num+'点');
								}
							}else{
								if (player == trigger.target || !trigger.iwhile) {
									var num = Math.min(trigger[player == trigger.player ? 'num1' : 'num2'] * 2, 13);
									trigger[player == trigger.player ? 'num1' : 'num2'] = Math.min(num, 13);
									game.log(player, '的拼点牌点数翻倍，变为'+num+'点');
								}
							}
						}
					}
				}
			},
			excalibur: {
				audio: 2,
				cost: 1,
				roundi: true,
				spell: ['excalibur_spell'],
				trigger: { player: 'phaseBegin' },
				filter: function (event, player) {
					//if (!player.canUseFuka()) return false;
					return player.lili > lib.skill.excalibur.cost;
				},
				content: function () {
					player.loselili();
					player.turnOver();
					player.maxlili = Infinity;
				},
			},
			excalibur_spell: {
				mod: {
					maxHandcard: function (player, num) {
						return Infinity;
					},
				},
				onremove: function (player) {
					player.maxlili = parseInt(lib.character[player.name][6]);
					if (player.lili > 0) player.useSkill('excalibur_attack');
				}
			},
			excalibur_attack: {
				content: function () {
					"step 0"
					player.chooseTarget('对一名角色造成' + player.lili + '点伤害', true).set('ai', function (target) {
						return -get.attitude(player, target);
					});
					"step 1"
					if (result.bool) {
						result.targets[0].damage(player.lili);
					}
					"step 2"
					player.maxlili = parseInt(lib.character[player.name][6]);
					//if (!player.node.fuka) player.maxlili = 5;
					player.loselili(player.lili);
				},
			},
			//阿尔托莉雅lily
			hualu: {
				trigger: { player: 'useCardToBegin', target: 'useCardToBegin' },
				init:function(player){
					player.storage.hualu=false;
				},
				filter: function (event, player) {
					if (event._notrigger.contains(player)) return false;
					let pl=(event.player==player) ? event.target : event.player;
					return event.card && get.subtype(event.card) == 'attack' && event.player && event.target && event.player!=event.target && event.player.countCards('h') && event.target.countCards('h');// && player.canCompare(pl)
				},
				check: function (event, player) {
					if (event.target == player) return -get.attitude(player, event.player);
					return -get.attitude(player, event.target);
				},
				content:function(){
					"step 0"
					if(lib.config.compare_discard){
						player.storage.hualu = lib.config.compare_discard;
						game.saveConfig('compare_discard',false);
					}
					event.target = trigger.target;
					if(trigger.target==player) event.target = trigger.player;
					player.chooseToCompare(event.target);
					"step 1"
					if(player.storage.hualu){
						game.saveConfig('compare_discard',player.storage.hualu);
						if (!result.tie){
							if(result.bool){
								player.draw();
							}else{
								event.target.draw();
							}
						}
					}
				},
				group: 'hualu_glory',
				subSkill: {
					glory: {
						trigger: {
							player: "chooseCardBegin",
						},
						prompt: '是否招募勇士？',
						filter: function (event, player) {
							var hasGlory = false,players = game.filterPlayer();
							for (var i = 0; i < players.length; i++){
								if(players[i]&&players[i].countCards('h') > 0){
									hasGlory = true;
									break;
								}
							}
							return event.type=='compare'&&!event.directresult&&hasGlory;
						},
						content: function () {
							'step 0'
							event.targets = [];
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++){
								if(players[i]&&players[i]!=player&&players[i].countCards('h') > 0){
									event.targets.push(players[i]);
								}
							}
							event.cards = [];
							event.target = trigger.target;
							if (trigger.target == player) event.target = trigger.player;
							'step 1'
							var current = event.targets.shift();
							event.current = current;
							if (!current) {
								event.goto(3);
							} else if (!current.countCards('h') || (current == event.target && current.countCards('h') == 1)) {
								event.redo();
							} else {
								current.chooseCard('是否帮' + get.translation(player) + '打出一张拼点牌？').ai = function (card) {
									if (get.attitude(current, player) > 2) {
										return get.number(card) > 8 && 7 - get.value(card);
									} else if (get.attitude(current, player) < -2 && event.cards.length == 0) {
										for(var i =0;i<event.targets.length;i++){
											if(event.targets[i].countCards('h') && get.attitude(event.targets[i], player) > 2)event.tgs.push(event.targets[i]);
										}
										// 使坏
										if(!event.tgs||event.tgs.length==0)return get.number(card) < 5 && 7 - get.value(card);
										return false;
									}
									return 0;
								}
							}
							'step 2'
							if (result.bool) {
								event.cards = event.cards.concat(result.cards[0]);
								event.cds = result.cards;
								event.current.lose(result.cards[0], ui.ordering).set('getlx', false);
								// event.current.$give(1, player);
								event.current.$throw(1, 1000);
							} else event.goto(1);
							'step 3'
							if (event.cards.length) {
								//if (!trigger.fixedResult) trigger.fixedResult = {};
								//trigger.fixedResult[player.playerid] = event.cards[0];
								event.cds[0].vanishtag.add('hualu_glory');
								trigger.directresult=event.cds;
								trigger.untrigger();
							} else event.finish();
							'step 4'
							player.chooseBool('是否令' + get.translation(event.current) + '获得1点灵力？');//.set('ai', get.attitude(player, event.current));
							'step 5'
							if (result.bool) event.current.gainlili();
						},
					}
				}
			},
			caliburn: {
				audio: 2,
				cost: 1,
				roundi: true,
				spell: ['caliburn_spell'],
				trigger: { player: 'phaseBegin' },
				filter: function (event, player) {
					//if (!player.canUseFuka()) return false;
					return player.lili > lib.skill.caliburn.cost;
				},
				content: function () {
					player.loselili();
					player.turnOver();
					player.maxlili = Infinity;
				},
			},
			caliburn_spell: {
				mod: {
					maxHandcard: function (player, num) {
						return Infinity;
					},
				},
				onremove: function (player) {
					player.maxlili = parseInt(lib.character[player.name][6]);
					if (player.lili > 0) player.useSkill('caliburn_use');
				}
			},
			caliburn_use: {
				content: function () {
					"step 0"
					event.count = player.lili;
					"step 1"
					event.count--;
					player.chooseTarget("请选择一名目标", function (card, player, target) {
						return true;
					}).set('ai', function (target) {
						var att = get.attitude(_status.event.player, target);
						if (att > 2) {
							if (target.isDamaged()) return target.maxHp-target.hp;
							return 0;
						}
						return -att;
					});
					"step 2"
					if (result.bool) {
						player.logSkill('caliburn_use', result.targets);
						event.target = result.targets[0];
						player.chooseControl(['受到伤害', '回复体力']);
					} else event.finish();
					"step 3"
					if (result.control == '回复体力') {
						event.target.recover();
					} else event.target.damage();
					if (event.count) event.goto(1);
					"step 4"
					player.maxlili = parseInt(lib.character[player.name][6]);
					player.loselili(player.lili);
				}
			},
			FaxCaelestis: {
				audio: "ext:东方project:true",
				roundi: true,
				priority: 22,
				cost:2,
				spell: ["FCN2","FCN3"],
				trigger: {
					player: "phaseBegin",
				},
				filter: function (event, player) {
					//if (player.node.fuka) return false;
					//if (!player.canUseFuka()) return false;
					return player.lili > lib.skill.FaxCaelestis.cost;
				},
				content: function () {
					if (!player.hasSkill('FCN2')){
						player.loselili(lib.skill.FaxCaelestis.cost);
						player.turnOver();
					}
					var num = player.getHandcardLimit() - player.countCards('h');
					if (!player.countCards('h')){
						player.draw(player.getHandcardLimit());
					} else if (num > 0){
						player.draw(num);
					}
				},
				check: function (event, player) {
					return player.getHandcardLimit() - player.countCards('h') >= 2;
				},
			},
			FCN2: {
				audio: "ext:东方project:2",
				init: function (player) {
					game.pause();
					player.storage.FCN = [lib.config.background_music, ui.background.style.backgroundImage];
					setTimeout(function () {
						ui.backgroundMusic.src = '';
						player.say('春日阳光，鲜花乱舞！五月之风拂面颊，祝福传向星球的远方——');
						setTimeout(function () {
							game.playBackgroundMusic('nero');
							player.say('开启吧，黄金之结婚礼堂啊！歌颂吧，『星驰的终幕蔷薇』！');
							setTimeout(function () {
								player.say('这是余的大胜利！这份爱，犹如烈焰！');
								setTimeout(function () {
									player.say('稍微说一点悄悄话吧。……这是告白哦——余的奏者，余最喜欢你了！');
									player.$skill('终幕蔷薇', null, null, true);
									ui.background.setBackgroundImage('image/background/nerobridge.jpg');
									game.resume();
								}, 1500);
							}, 1500);
						}, 1500);
					}, 1500);
				},
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					if (event.skill == 'FCN2') return false;
					if (event.targets.length > 1) return false;
					var card = event.card;
					if (get.subtype(card)=="support") return true;
					return false;
				},
				onremove:function(player){
					game.playBackgroundMusic(player.storage.FCN[0]);
					ui.background.style.backgroundImage = player.storage.FCN[1];
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseTarget(get.prompt2('FCN2'), function (card, player, target) {
						if (player == target) return false;
						var trigger = _status.event;
						/*if (trigger.card.name == "wuzhong") return player != target;
						if (trigger.card.name == "tao") return player != target;
						return player.canUse(trigger.card, target) && trigger.targets.contains(target) == false;*/
						return player != target;
					}).set('ai', function (target) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						return get.effect(target, trigger.card, player, player) + 0.01;
					}).set('targets', trigger.targets).set('card', trigger.card);
					"step 1"
					if (result.bool) {
						event.target = result.targets[0];
						game.log(event.target, '成为了', trigger.card, '的额外目标');
						player.logSkill('FCN2', event.target);
						player.line(event.target);
						trigger.targets.push(event.target);
					}
				},
			},
			FCN3: {
				audio: "ext:东方project:2",
				trigger: { player: 'useCard' },
				filter: function (event, player) {
					if (!game.hasPlayer(function (target) {
						return !event.targets.contains(target) && event.player != target && event.player.canUse(event.card.name, target, false);
					})) return false;
					if (player.hasSkill('FCN3temp')) return false;
					var card = event.card;
					if (get.tag(card, 'damage') > 0) return true;
					return false;
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseTarget(get.prompt2('FCN3'), function (card, player, target) {
						if (player == target) return false;
						var evt = _status.event.getTrigger();
						return !evt.targets.contains(target) && lib.filter.targetEnabled2(evt.card, player, target);
					}).set('ai', function (target) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						return get.effect(target, trigger.card, player, player) + 0.01;
					});
					"step 1"
					if (result.bool) {
						player.logSkill('FCN3', event.target);
						player.addTempSkill('FCN3temp');
						event.target = result.targets[0];
						var cards = [];
						for (var i = 0; i < trigger.cards.length; i++) {
							if (get.position(trigger.cards[i]) == 'd') {
								cards.push(trigger.cards[i]);
							}
						}
						if (cards.length) {
							event.target.gain(cards);
							event.target.$gain2(cards);
						}
						trigger.player = event.target;
						player.line(trigger.player, 'fire');
						game.log(event.target, '成为了', trigger.card, '的使用者');
						trigger.untrigger();
						trigger.trigger('useCardToBefore');
					}
					else {
						event.finish();
					}
				}
			},
			FCN3temp: {},
			//樱
			jiushu: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: lib.filter.notMe,
				content: function () {
					'step 0'
					if (player.countDiscardableCards(player, 'he') == 0) {
						event._result = {
							bool: true,
							control: '回复体力',
						}
					} else {
						player.chooseControl(['摸牌', '回复体力']);
					}
					'step 1'
					if (result.control == '摸牌') {
						player.chooseToDiscard('he', true);
						if (target.isMinHandcard()) target.draw(2);
						else target.draw();
					} else {
						player.loseHp();
						if (target.isMinHp()) target.recover(2);
						else target.recover();
					}
				},
			},
			jiushuying: {
				inherit: 'jiushu',
				filterTarget:function(card, player, target){
					return target.hasSkill('jiushu');
				},
				selectTarget: -1,
			},
			mengsui: {
				audio: 2,
				trigger: {
					player: "damageBegin",
				},
				derivation:['wuxian','xuwu','chunhui'],
				//juexingji: true,
				skillAnimation: true,
				//animationColor: "fire",
				forced: true,
				filter: function (event, player) {
					return player.countCards('h') < 2 && player.hp < 2;
				},
				content: function () {
					player.awakenSkill('mengsui');
					trigger.cancel();
					if(player.name=="HF_sakura")player.node.avatar.setBackgroundImage('image/skin/HF_sakura/awake.jpg');
					if(player.name2=="HF_sakura")player.node.avatar2.setBackgroundImage('image/skin/HF_sakura/awake.jpg');
					var players = game.filterPlayer();
					var tgs = [];
					for(var i =0;i<players.length;i++){
						if(players[i]!=player)tgs.push(players[i]);
					}
					for (var i of tgs) i.addSkill('jiushuying');
					player.addSkill('wuxian');
					lib.skill.wuxian.audioname = ["HF_sakura"],
					player.addSkill('xuwu');
					player.addSkill('chunhui');
					player.loselili(player.lili);
					player.maxHp = 4;
					player.hp = 4;
					player.update();
				},
			},
			wuxian_HF_sakura: { audio: 2 },
			xuwu: {
				group: ["xuwu_damage","death_normal","death_win"],
				trigger:{player:'gainliliBefore'},
				forced:true,
				popup:false,
				init:function(player){
					//player.addIncident(game.createCard('death','zhenfa',''));
					player.markSkill('xuwu',get.translation("death"/*,"death_info"*/),game.createCard('death','zhenfa',''));
				},
				filter: function (event, player) {
					return !event.getParent().skill || event.getParent().skill!="wuxian";
				},
				content: function (event) {
					//game.log('<span class="bluetext">'+get.translation(trigger.player)+'</span>发动<span class="greentext">【'+get.skillTranslation(event.skill,player)+'】</span>防止了获得灵力');
					event.str='<span class="bluetext">'+get.translation(trigger.player)+'</span>发动<span class="greentext">【'+get.skillTranslation(event.skill,player)+'】</span>防止了获得灵力';
					game.notify(event.str);
					trigger.cancel();
				},
			},
			xuwu_damage:{
				trigger: {
					player: "phaseEnd",
				},
				forced: true,
				filter: function (event, player) {
					var inRange = 0;
					var players = game.filterPlayer();
					for(var i =0;i<players.length;i++){
						if(get.distance(player,players[i]) <= player.getAttackRange())inRange++;
					}
					return inRange;
				},
				content: function () {
					"step 0"
					event.tgs = [];
					event.dms = [];
					var players = game.filterPlayer();
					for(var i =0;i<players.length;i++){
						if(get.distance(player,players[i]) <= player.getAttackRange())event.tgs.push(players[i]);
					}
					if (!event.tgs.length)event.finish();
					for(var i =0;i<event.tgs.length;i++){
						event.tgs[i].damage('thunder');
						//if(tgs[i].lili == 0)dms.push(tgs[i]);
					}
					"step 1"
					for(var i =0;i<event.tgs.length;i++){
						//tgs[i].damage('thunder');
						if(event.tgs[i].lili == 0)event.dms.push(event.tgs[i]);
					}
					//if (!tgs2.length)event.finish();
					for(var i =0;i<event.dms.length;i++){
						event.dms[i].damage();
					}
				},
			},
			chunhui: {
				trigger: {
					player: "recoverAfter",
				},
				init:function(player){
					var players = game.filterPlayer();
					for(var i =0;i<players.length;i++){
						if(players[i]!=player)players[i].storage.chunhui = 0;
					}
				},
				forced: true,
				silent: true,
				filter: function (event, player) {
					return event.source && event.source != player;
				},
				content: function () {
					'step 0'
					if(!trigger.source.storage.chunhui){
						trigger.source.storage.chunhui=trigger.num;
					}else{
						trigger.source.storage.chunhui=trigger.source.storage.chunhui + trigger.num;
					}
					player.addTempSkill("chunhui_count");
					'step 1'
					if (trigger.source.storage.chunhui >= 2) {
						player.$skill('春回樱开');
						player.loseMaxHp();
						player.awakenSkill('chunhui');
						player.removeSkill('xuwu');
						var players = game.filterPlayer();
						for(var i =0;i<players.length;i++){
							players[i].recover();
						}
					}
				},
			},
			chunhui_count:{
				forced: true,
				popup:false,
				silent: true,
				trigger:{global:["phaseAfter"]},
				content: function () {
					var players = game.filterPlayer();
					for(var i =0;i<players.length;i++){
						if(players[i]!=player)players[i].storage.chunhui = 0;
					}
				},
			},
			yingmeng:{
				group:["yingmeng_buff"],
				trigger:{
					player: "recoverBefore",
				},
				filter: function (event, player) {
					return player.isDying()&&event.source!=player;
				},
				direct: true,
				//silent: true,
				//popup: false,
				content:function(){
					"step 0";
					player.storage.yingmeng = trigger.source;
					player.draw();
					player.addTempSkill("yingmeng_awake");
				},
			},
			yingmeng_buff:{
				trigger:{
					global:["recoverBegin","drawBegin"],
				},
				direct: true,
				//silent: true,
				//popup: false,
				filter:function(event, player){
					return event.source && event.source == player && event.parent.name && event.parent.name == "jiushu" && player.storage.yingmeng && player.storage.yingmeng == event.player;
				},
				content:function(){
					"step 0";
					trigger.num++;
				},
			},
			yingmeng_awake:{
				trigger:{player: "dyingAfter"},
				forced: true,
				popup: false,
				content:function(){
					player.recover(player.maxHp - player.hp);
					player.$skill(lib.skill['yingmeng'].animationStr||lib.translate['yingmeng'],lib.skill['yingmeng'].skillAnimation,lib.skill['yingmeng'].animationColor,true);
					player.awakenSkill('yingmeng');
				},
			},
			//凛
			cuican: {
						/*mod: {
							liliExtend: function (player, num) {
								return num + player.countCards('h', function (card) {
									return get.info(card).enhance;
								}) + (player.storage.cuican ? 3 : 0);
							}
						},*/
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				init:function(player){
					player.storage.cuican=[];
				},
				filter: function (event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				forced: true,
				locked: false,
				content: function () {
					"setep 0"
					player.storage.cuican.push(get.cards(1)[0]);
					game.log('<span class="bluetext">'+get.translation(player)+'</span>将<span class="yellowtext">'+get.translation(player.storage.cuican[0])+'</span>置于角色牌上');
					//lib.translate['cuican_bg']=lib.translate[player.storage.cuican[0]];
					"step 1"
					player.markSkill('cuican',player.storage.cuican[0].name,player.storage.cuican[0]);
				},
				group: 'cuican_coins',
				subSkill: {
					coins: {
						trigger: {
							player: "loseliliBegin",
						},
						filter: function (event, player) {
							/*var cards = player.storage.cuican;
							cards.addArray(player.getCards('h', function (card) {
								return get.bonus(card) && get.bonus(card) > 0;
							}));*/
							var cards = [];
							var handCards = player.getCards('he');
							for (var i of handCards) {
								if (get.bonus(i) && get.bonus(i) > 0) cards.push(i);
							}
							if(player.storage.cuican&&player.storage.cuican.length > 0)cards.push(player.storage.cuican[0]);
							return cards.length > 0;
						},
						direct: true,
						content: function () {
							'step 0'
							/*var cards = player.storage.cuican;
							cards.addArray(player.getCards('h', function (card) {
								return get.bonus(card) && get.bonus(card) > 0;
							}));*/
							event.cards=[];
							if(player.storage.cuican&&player.storage.cuican.length > 0)event.cards.push(player.storage.cuican[0]);
							var handCards = player.getCards('he');
							for (var i of handCards) {
								if (get.bonus(i) && get.bonus(i) > 0)event.cards.push(i);
							}
							if(!event.cards||event.cards.length == 0)event.finish();
							var next = player.chooseCardButton(event.cards, '选择灵力消耗的代替品', [1, event.cards.length]);
							next.set('filterButton', function (button) {
								var checknum = 0;
								if (ui.selected.buttons.length) {
									for (var i of ui.selected.buttons) {
										if (player.storage.cuican.contains(i)) checknum += 3;
										else checknum++;
									}
									//if (checknum == _status.event.num) return false;
									return true;
								}
								return true;
							});
							next.set('filterOk', function (button) {
								var checknum = 0;
								if (ui.selected.buttons.length) {
									for (var i of ui.selected.buttons) {
										if (player.storage.cuican.contains(i)) checknum += 3;
										else checknum++;
									}
									//if (checknum <= _status.event.num) return true;
									return false;
								}
							});
							next.set('num', trigger.num);
							next.set('ai', function (button) {
								var val = get.value(button.link);
								return val;
							});
							if (player.lili < trigger.num) next.set('forced', true);
							'step 1'
							//player.storage.cuican = [player.marks.cuican];
							if (result.bool && result.links) {
								game.log(player.marks.cuican);
								var num = 0;
								for (var i of result.links) {
									if (player.storage.cuican.contains(i)) num += 3;
									else num++;
								}
								player.discard(result.links);
								if (result.links.contains(player.storage.cuican[0])){
									player.storage.cuican.remove(player.storage.cuican[0]);
									player.unmarkSkill("cuican");
								}
								trigger.num -= num;
							}
						}
					}
				}
			},
			shanyao: {
				enable: 'phaseUse',
				filter: function (event, player) {
					var list = [];
					for (var name of lib.inpile) {
						var info = get.info({ name: name });
						if (info.type != 'trick') continue;
						if (info.notarget) continue;
						if (!info.selectTarget) continue
						var card = { name: name, isCard: true };
						var num = game.countPlayer(function(current){
							return player.canUse(card, current);
						});
						if (num > player.lili) continue;
						if (player.hasUseTarget(card)) {
							list.push([info.type, '', name]);
						}
					}
					return list.length > 0;
				},
				content: function () {
					'step 0'
					var list = [];
					for (var name of lib.inpile) {
						var info = get.info({ name: name });
						if (info.type != 'trick') continue;
						if (info.notarget) continue;
						if (!info.selectTarget) continue
						var card = { name: name, isCard: true };
						var num = game.countPlayer(function(current){
							return player.canUse(card, current);
						});
						if (num > player.lili) continue;
						if (player.hasUseTarget(card)) {
							list.push([info.type, '', name]);
						}
					}
					if (list.length) {
						player.chooseButton(['是否视为使用一张法术牌？', [list, 'vcard']]).set('ai', function (button) {
							return _status.event.player.getUseValue({ name: button.link[2] });
						});
					}
					else event.finish();
					'step 1'
					if (result.bool) {
						event.card = { name: result.links[0][2], nature: result.links[0][3], isCard: true };
						var num = game.countPlayer(function(current){
							return player.canUse({ name: result.links[0][2], nature: result.links[0][3], isCard: true }, current);
						});
						player.loselili(num);
					} else event.finish();
					'step 2'
					player.chooseUseTarget(event.card, true, false);
				},
				group: 'shanyao_moretg',
				subSkill: {
					moretg: {
						forced:true,
						popup:false,
						trigger: {
							player: "useCard",
						},
						filter: function (event, player) {
							var type = get.type(event.card, false);
							return type == 'trick' && player.lili > 0 && game.hasPlayer(function(target){
							return((!event.targets.contains(target) && lib.filter.targetEnabled2(event.card, player, target))? 1 : 0)
							});
						},
						prompt: '闪耀：额外指定目标',
						content: function () {
							'step 0'
							var num = player.lili;
							var filter = function (event, player) {
								var card = event.card, info = get.info(card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (game.hasPlayer(function (current) {
										return !event.targets.contains(current) && lib.filter.targetEnabled2(card, player, current);
									})) {
										return true;
									}
								}
								return false;
							}
							if (!filter(trigger, player)) event.finish();
							else {
								var prompt = '为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(num) + '个合法目标？';
								trigger.player.chooseTarget(get.prompt('shanyao'), prompt, [1, num], function (card, player, target) {
									var player = _status.event.player;
									return !_status.event.targets.contains(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
								}).set('ai', function (target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, player, player);
								}).set('card', trigger.card).set('targets', trigger.targets);
							}
							'step 1'
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayx();
							}
							else event.finish();
							'step 2'
							player.logSkill('shanyao', result.targets);
							game.log(result.targets, '也成为了', trigger.card, '的目标');
							trigger.targets.addArray(result.targets);
							player.loselili(result.targets.length);
						},
					}
				}
			},
			//吉尔伽美什
			wanglv:{
				audio:2,
				trigger:{
					player:"phaseDrawBefore",
				},
				filter:function (event,player){
					return player.isDamaged();
				},
				check:function (event,player){
					if(player.isHealthy())return false;
					return true;
				},
				content:function (){
					"step 0"
					trigger.cancel();
					event.cards=get.cards(2+ player.maxHp-player.hp);
					for (i=0;i<event.cards.length;i++){
						if(event.cards[i]&&(get.subtype(event.cards[i])=='attack'||get.type(event.cards[i])=='equip')){
							if(!event.canUse){
								event.canUse=[event.cards[i]];
							}else{
								event.canUse.push(event.cards[i]);
							}
						}
					}
					if(event.canUse){
						player.storage.wanglv=event.canUse;
						event.count = Math.min(event.canUse.length,player.maxHp-player.hp);
					}else{
						event.count = 0;
					}
					game.log(player,'亮出了',event.cards);
					if (event.count==0)event.goto(4);
					"step 1"
					event.count--;
					/*var next = player.chooseCardButton(event.canUse);
					next. set('filterButton' , function(button){
						return (get.subtype(button.link)=="attack"||get.type(button.link)=="equip");
					});*/
					var next=player.chooseToUse();
					next.logSkill='wanglv';
					next.set('openskilldialog','wanglv');
					next.set('norestore',true);
					next.set('_backupevent','wanglvx');
					next.backup('wanglvx');
					"step 2"
					if(result.bool){
						//event.toUse = result.links;
						event.cards.remove(result.cards[0]);
						event.canUse.remove(result.cards[0]);
						//player.chooseUseTarget('sha','请选择【轰！】的目标',event.toUse);
					} else event.goto(4);
					"step 3"
					if(result.targets){
						player.getStat().card.sha--;
						if(event.count)event.goto(1);
					}
					"step 4"
					player.gain(event.cards);
					player.$gain2(event.cards);
				},
				ai:{
					threaten:function (player,target){
						if(target.hp==1) return 2;
						if(target.hp==2) return 1.5;
						return 1;
					},
				},
			},
			wanglvx:{
				enable:["phaseUse","chooseToUse"],
				filter:function (event,player){
					return player.storage.wanglv.length>0;
				},
				chooseButton:{
					dialog:function (event,player){
						return ui.create.dialog('王律',player.storage.wanglv,'hidden').addText(lib.translate["wanglv_info"]);
					},
					backup:function (links,player){
						return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:{name:'sha'},
							cards:links,
							onuse:function(result,player){
								result.cards=lib.skill[result.skill].cards;
								var card=result.cards[0];
								player.storage.wanglv.remove(card);
								player.syncStorage('wanglv');
								if(!player.storage.wanglv.length){
									player.unmarkSkill('wanglv');
								}
								else{
									player.markSkill('wanglv');
								}
								player.logSkill('wanglv',result.targets);
							}
						}
					},
					prompt:function (links,player){
						return '选择【轰！】的目标';
					},
				},
				ai:{
					order:10,
					result:{
						player:function (player){
							return player.storage.wanglv.length-1;
						},
					},
				},
			},
			tiansuo:{
				forced: true,
				popup:false,
				silent: true,
				trigger: { player: 'phaseBegin', target: 'shaBegin' },
				filter: function (event, player) {
					return !player.isMaxCard() && (_status.event.triggername=="phaseBegin" || event.target==player);
				},
				content:function(){
					"step 0"
					player.chooseCard(get.prompt('tiansuo'),lib.translate["tiansuo_info"],'hej').set('ai',function(card){
						if(!_status.event.player.countCards('h','shan')){
							return 8-get.value(card);
						}
						return 6-get.value(card);
					});
					"step 1"
					if(result.cards){
						player.lose(result.cards,ui.special);
						player.$throw(result.cards);
						event.card = result.cards[0];
						player.chooseTarget(get.prompt('tiansuo_lock'),lib.translate["tiansuo_lock_info"],function(card,player,target){
							return target.countCards('hej') > player.countCards('hej');
						}, true).set('ai',function(target){
							return get.attitude(player,target);
						});
						//player.logSkill('tiansuo');
					}else{
						event.finish();
					}
					'step 2'
					if(result.targets){
						event.target = result.targets[0];
						event.target.addTempSkill('tiansuo_lock','phaseEnd');
						if(event.card){
							ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
						}
					}else{
						event.finish();
					}
					'step 3'
					if(event.triggername=="shaBegin"){
						if(event.target==trigger.player)trigger.cancel();
					}else{
						event.finish();
					}
				},
			},
			tiansuo_lock:{
				mark:true,
				intro:{
					content:'当前回合不能使用或打出牌',
				},
				init:function(player){
					player.storage.tiansuo_lock = player.node.framebg.dataset.auto;
					player.node.framebg.dataset.auto='lock';
				},
				onremove:function(player){
					player.node.framebg.dataset.auto=player.storage.tiansuo_lock;
					delete player.storage.tiansuo_lock;
				},
				mod:{
					cardEnabled:function(){
						return false;
					},
					cardUsable:function(){
						return false;
					},
					cardRespondable:function(){
						return false;
					},
					cardSavable:function(){
						return false;
					},
				},
			},
			enuma_elish:{
				audio:2,
				spell:["EE_damage"],
				cost:1,/*function(){
					return player.hp+game.countPlayer(function(target){
						return target != player;
					});
				},*/
				audio:2,
				trigger:{player:'phaseBeginStart'},
				filter:function(event,player){
					return player.lili > player.hp+game.countPlayer(function(target){return target != player});//lib.skill.enuma_elish.cost;
				},
				content:function(){
					player.loselili(player.hp+game.countPlayer(function(target){return target != player}));//lib.skill.enuma_elish.cost);
					player.turnOver();
				},
			},
			EE_damage:{
				audio:2,
				forced: true,
				group:"death_win",
				trigger:{player:['phaseBegin','phaseEnd']},
				content:function(){
					"step 0"
					if(event.triggername=="phaseBegin"){
						var players = game.filterPlayer();
						for(var i =0;i<players.length;i++){
							if(players[i]!=player)players[i].damage(players[i].maxHp);
						}
					}
					if(event.triggername=="phaseEnd"){
						if(!game.hasPlayer(function(target){return target != player}))game.over(true);
					}
				},
			},
			//圣诞尼禄
			XmasEveTheater:{
				audio:2,
				cost:2,
				spell:['ChrisET','ChrisET2'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.XmasEveTheater.cost;
				},
				content:function(){
					if (!player.hasSkill('ChrisET')){
						player.loselili(lib.skill.XmasEveTheater.cost);
						player.turnOver();
					}
					var num = player.getHandcardLimit() - player.countCards('h');
					if (!player.countCards('h')){
						player.draw(player.getHandcardLimit());
					}
					else if (num > 0){
						player.draw(num);
					}
				},
				check:function(event,player){
					return player.getHandcardLimit() - player.countCards('h') >= 2;
				},
			},
			ChrisET:{
				audio:2,
				init:function(player){
					game.pause();
					player.storage.ChrisET = [lib.config.background_music, ui.background.style.backgroundImage];
					setTimeout(function(){
						ui.backgroundMusic.src = '';
						player.say('Hashire sori yo, Kaze no you ni');
						setTimeout(function(){
							game.playBackgroundMusic('padoru');
							player.say('Padoru padoru, Pado all the way');
							setTimeout(function(){
								player.say('Come with me and we will see<br>All the stars in outer space hey');
								setTimeout(function(){
									player.say('Padoru padoru, Pado all the way');
									player.$skill('圣夜剧场',null,null,true);
									ui.background.setBackgroundImage('image/background/nerosanta.jpg');
									game.resume();
								}, 1500);
							}, 1500);
						},1500);
					},1500);
				},
				enable:'phaseUse',
				position:'h',
				filterCard:function(card){
					return true;
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				onremove:function(player){
					game.playBackgroundMusic(player.storage.ChrisET[0]);
					ui.background.style.backgroundImage = player.storage.ChrisET[1];
				},
				check:function(card){return 8-get.value(card)},
				selectTarget:1,
				multitarget:false,
				discard:false,
				targetprompt:['得到牌'],
				prepare:'give',
				filterTarget:function(card,player,target){
					return true;
				},
				content:function(){
					"step 0"
					targets[0].gain(cards,player);
					"step 1"
					targets[0].chooseToUse(function(card){
						if(!lib.filter.cardEnabled(card,_status.event.player,_status.event)){
							return false;
						}
						//var type=get.type(card,'trick');
						return card==cards[0];
					},'你可以使用这张牌').set('logSkill','ChrisET');//chooseUseTarget(cards[0], "你可以使用这张牌");
					"step 2"
					if (result.targets) targets[0].gainlili();
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							return 3 - player.countCards('j');
						}
					},
					threaten:1,
				}
			},
			ChrisET2:{
				mod:{
					selectTarget:function(card,player,range){
						if(range[1]==-1) return;
						if(player.getEquip(1)) return;
						if(card.name=='sha') range[1]+=2;
					},
					cardUsable:function(card,player,num){
						if(player.getEquip(1)) return;
						if(card.name=='sha') return num+1;
					}
				},
			},
			//海伦娜
			tongdiao:{
				audio:2,
				usable:1,
				enable:'phaseUse',
				//multitarget:true,
				//multiline:true,
				//complexSelect:true,
				filter:function(){
					return ui.selected.cards.length == ui.selected.targets.length;
				},
				filterCard:function(card,player){
					return lib.filter.cardDiscardable(card,player);
				},
				selectCard:[1,Infinity],
				selectTarget:function(){
					if(ui.selected.targets.length>ui.selected.cards.length){
						game.uncheck('target');
					}
					return ui.selected.cards.length;
				},
				//complexCard:true,
				filterTarget:function(card,player,target){
					var tgs = ui.selected.targets;
					var canChoose = [];
					for(var i = 0; i < tgs.length; i++){
						//if(!canChoose)canChoose=[tgs[i].previousSeat()];
						if (!canChoose.contains(tgs[i].previous))canChoose.push(tgs[i].previous);
						if (!canChoose.contains(tgs[i].next))canChoose.push(tgs[i].next);
					}
					//canChoose.remove(player);
					if (tgs.length == 0)return target == player;
					if (tgs.length >= 1)return canChoose.contains(target);
				},
				content:function(){
					target.gainlili();
				},
				ai:{
					order:4,
					result:{
						player:function(player){
							if (player.lili < 5 &&player.countCards('h')>player.getHandcardLimit()) return 0.5;
							return -1;
						},
						target:function(player,target){
							if(target.lili < 5 && get.attitude(player,target)>2) return 5;
							if(player==target&&player.countCards('h')>player.getHandcardLimit()) return 5;
							return 2;
						}
					},
					threaten:1,	
				}
			},
			tanqiu:{
				enable:'phaseUse',
				usable:1,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>0
				},
				content:function(){
					'step 0'
					player.showHandcards();
					event.types = [];
					event.hands = player.getCards("h");
					for(var i = 0; i < event.hands.length; i++){
						if(!event.types.contains(get.type(event.hands[i])))event.types.push(get.type(event.hands[i]));
					}
					"step 1"
					event.cards=get.cards(event.hands.length);
					if(event.isMine()==false){
						event.dialog=ui.create.dialog('探求',event.cards);
						game.log(player,'亮出了',event.cards);
						game.delay(2);
					}
					'step 2'
					if(event.dialog) event.dialog.close();
					var dialog=ui.create.dialog('探求',event.cards).addText(lib.translate["tanqiu_info"]);
					player.chooseButton([0,1],dialog,true).set('ai',function(button){
						return get.value(button.link);
					}).filterButton=function(button){
						return !event.types.contains(get.type(button.link));
					}
					"step 3"
					if(result.buttons.length){
						player.gain(result.buttons[0].link,'log');
						event.cards.remove(result.buttons[0].link);
						player.$gain2(result.buttons[0].link);
						game.log(event.cards,'置入弃牌堆');
						for(var i=0;i<event.cards.length;i++){
							event.cards[i].discard();
						}
					}else{
						game.log(event.cards,'回到牌堆顶');
						for(var i=0;i<event.cards.length;i++){
							ui.cardPile.insertBefore(event.cards[event.cards.length-1-i],ui.cardPile.firstChild);
						}
					}
					game.delay(2);
				},
			},
			Sanat_Kumara:{
				audio:2,
				cost:2,
				spell:["SK_recast"],
				trigger:{
					player:"phaseBegin",
				},
				filter:function(event,player){
					return player.lili > lib.skill.Sanat_Kumara.cost;
				},
				check:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					player.loselili(lib.skill.Sanat_Kumara.cost);
					player.turnOver();
				},
			},
			SK_recast:{
				audio:2,
				usable:1,
				enable:'phaseUse',
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterCard:function(card){
					return true;
				},
				check:function(card){
					return 5-get.useful(card);
				},
				content:function(){
					"step 0"
					player.draw()
					event.type = get.type(player.getCards('h')[0]);
					player.chooseTarget("请选择重铸手牌的角色",[1,game.filterPlayer().length],function(card,player,target){
						return target.countCards('h')>0;
					}).set('ai',function(target){
						var att=-get.attitude(_status.event.player,target);
						return att/3;
					});
					"step 1"
					if(result.bool){
						var targets=result.targets.sortBySeat();
						for(var i=0;i<targets.length;i++){
							targets[i].showHandcards();
							if(targets[i].countCards('h',{type:event.type})){
								targets[i].addTempSkill('SK_lock');
								var list = [];
								var cards = targets[i].getCards('h');
								for (var j = 0; j < targets[i].countCards('h'); j ++){
									if(cards[j] && get.type(cards[j]) == event.type){
										list.push(cards[j]);
									}
								}
								targets[i].recast(list);
							}
						}
						/*var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(!result.targets.contains(players[i]))continue;
							players[i].showHandcards();
							if(players[i].countCards('h',{type:event.type})){
								players[i].addTempSkill('SK_lock');
								var list = [];
								var cards = players[i].getCards('h');
								for (var j = 0; j < players[i].countCards('h'); j ++){
									if(cards[j] && get.type(cards[j]) == event.type){
										list.push(cards[j]);
									}
								}
								players[i].recast(list);
							}
						}*/
					}
				},
				discard:false,
				prompt:'你可以重铸一张手牌，然后令任意名角色重铸同类别的手牌',
				delay:0.5,
				prepare:function(cards,player){
					player.$throw(cards,1000);
					game.log(player,'重铸了',cards);
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:1,
					},
				}
			},
			SK_lock:{
				init:function(player){
					player.storage.SK_lock = [];
				},
				trigger:{player:'gainBegin'},
				forced:true,
				popup:false,
				filter:function(event,player){
					console.log(event);
					return true;
				},
				content:function(){
					if(trigger.getParent(2).name == "recast"){
						//player.addTempSkill('huanrao_4');
						if(!player.storage.SK_lock){
							player.storage.SK_lock=[];
						}
						for(var i=0;i<trigger.cards.length;i++){
							player.storage.SK_lock.add(trigger.cards[i]);
						}
						player.showCards(trigger.cards);
						/*if (trigger.parent.name != 'drawSkill'){
							player.removeSkill('huanrao_3');
						}*/
					}
				},
				mod:{
					cardEnabled:function(card,player){
						return _status.event.skill!=undefined || !player.storage.SK_lock.contains(card);
					},
					cardUsable:function(card,player){
						return _status.event.skill!=undefined || !player.storage.SK_lock.contains(card);
					},
					cardRespondable:function(card,player){
						return _status.event.skill!=undefined || !player.storage.SK_lock.contains(card);
					},
					cardSavable:function(card,player){
						return _status.event.skill!=undefined || !player.storage.SK_lock.contains(card);
					},
				},
			},
			//谜之女主角X
			guangcai:{
				group:['X_zhungangshuo','X_liuli'],
				trigger: {
					player: "phaseUseBegin",
				},
				direct:true,
				filter: function (event, player) {
					return player.lili > 0;
				},
				content: function () {
					"step 0"
					var list = [];
					for(var i=0;i <= player.lili;i++){
						list.push(i);
					}
					player.chooseControl(list).set('prompt','选择消耗的灵力数').set('prompt2',get.translation('guangcai_info'));
					"step 1"
					if (result.control>0) {
						player.logSkill("guangcai");
						player.loselili(result.control);
						for(var i=0;i<result.control;i++){
							player.gain(ui.skillPile.childNodes[i],'draw2');
						}
					}
				},
			},
			X_zhungangshuo:{
				audio:2,
				enable:'phaseUse',
				filterCard:true,
				position:'hej',
				usable:1,
				filter:function(event, player){
					return player.lili > 3&&game.hasPlayer(function(current){
						return current.countCards('e') > 0;
					});
				},
				check:function(card){
					return 9-get.value(card)
				},
				filterTarget:function(card,player,target){
					return target.countCards('e') > 0;
				},
				content:function(){
					'step 0'
					if(target.countCards('e') == 0)event.finish();
					player.storage.guangcai=target.getCards('e');//var next = player.chooseCardButton(target.getCards('e'));
					/*next.set('filterButton', function(button){
						return true;
					});*/
					"step 1"
					//if(result.bool){
					var next=player.chooseToUse();
					next.logSkill='guangcai';
					next.set('openskilldialog','guangcai');
					next.set('norestore',true);
					next.set('_backupevent','guangcaix');
					next.backup('guangcaix');
						/*target.getCards('e').remove(result.links[0]);
						player.chooseUseTarget('sha','请选择【轰！】的目标',result.links);*/
					//} else event.finish();
					"step 2"
					if(result.targets){
						player.getStat().card.sha--;
					}
				},
				prompt:"你可以弃置一张牌，将一名角色装备区的一张牌当不计次数的【轰！】使用",
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(target.hp==1) return 5;
							if(player!=target&&target.countCards('e') > 0) return 5;
							return 2;
						}
					},
					threaten:2
				}
			},
			guangcaix:{
				enable:["phaseUse","chooseToUse"],
				filter:function (event,player){
					return player.storage.guangcai.length>0;
				},
				chooseButton:{
					dialog:function (event,player){
						return ui.create.dialog('光裁',player.storage.guangcai,'hidden').addText(lib.translate["guangcai_info"]);
					},
					backup:function (links,player){
						return {
							filterCard:function(){return false},
							selectCard:-1,
							viewAs:{name:'sha'},
							cards:links,
							onuse:function(result,player){
								result.cards=lib.skill[result.skill].cards;
								var card=result.cards[0];
								player.storage.guangcai.remove(card);
								player.syncStorage('guangcai');
								if(!player.storage.guangcai.length){
									player.unmarkSkill('guangcai');
								}
								else{
									player.markSkill('guangcai');
								}
								player.logSkill('guangcai',result.targets);
							}
						}
					},
					prompt:function (links,player){
						return '选择【轰！】的目标';
					},
				},
				ai:{
					order:10,
					result:{
						player:function (player){
							return player.storage.guangcai.length-1;
						},
					},
				},
			},
			X_liuli:{
				audio:2,
				trigger:{target:'shaBefore'},
				forced:true,
				priority:5,
				filter:function(event,player){
					if(!player.hasSha(true)&&!player.hasShan()&&!player.hasWuxie) return false;
					return player.lili<=3 && game.hasPlayer(function(current){
						return current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
					});
				},
				content:function(){
					"step 0"
					var next=player.chooseToRespond('你可以打出一张【轰！】或防御牌，将当前结算的【轰！】转移给其他角色',function(card){return card.name == 'sha'|| get.subtype(card) == 'defense'});
					/*next.set('ai',function(card){
						var evt=_status.event.getParent();
						if(_status.event.shanRequired>1&&evt.target.countCards('h','shan')<_status.event.shanRequired){
							return -1
						}
						if(evt.target.hasSkillTag('useShan')){
							return 11-get.value(card);
						}
						if(evt.target.hasSkillTag('noShan')){
							return -1;
						}
						if(get.damageEffect(evt.target,evt.player,evt.target,evt.card.nature)>=0) return -1;
						return 11-get.value(card);
					});
					next.autochoose=lib.filter.autoRespondSha;*/
					"step 1"
					if(result.bool){
						var next=player.chooseTarget('请选择要转移的目标',function(card,player,target){
							var trigger=_status.event.getTrigger();
							//if(target!=trigger.player){
								if(player.canUse(trigger.card,target)) return true;
							//}
						},true).set('ai',function(target){
							return -get.attitude(player,target);
						});
						/*var next=player.chooseCardTarget({
							position:'he',
							//filterCard:lib.filter.cardRespondable,
							selectCard:-1,
							filterTarget:function(card,player,target){
								var trigger=_status.event.getTrigger();
								if(target!=trigger.player){
									if(player.canUse(trigger.card,target)) return true;
								}
								return false;
							},
							ai1:function(card){
								return get.unuseful(card)+9;
							},
							ai2:function(target){
								if(get.attitude(_status.event.player,target)<5){
									return 6-get.attitude(_status.event.player,target);
								}
								return -1;
							},
							prompt:get.prompt('X_liuli')
						});*/
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						//player.respond(result.cards);
						//player.logSkill(event.name,result.targets);
						trigger.target=result.targets[0];
						trigger.targets.remove(player);
						trigger.targets.push(result.targets[0]);
					}
					else{
						event.finish();
					}
					"step 3"
					trigger.untrigger();
					trigger.trigger('useCardToBefore');
					trigger.trigger('shaBefore');
					game.delay();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.countCards('he')==0) return;
							if(card.name!='sha') return;
							var min=1;
							var friend=get.attitude(player,target)>0;
							var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(player!=players[i]&&
									get.attitude(target,players[i])<0&&
									target.canUse(card,players[i])){
									if(!friend) return 0;
									if(get.effect(players[i],vcard,player,player)>0){
										if(!player.canUse(card,players[0])){
											return [0,0.1];
										}
										min=0;
									}
								}
							}
							return min;
						}
					}
				}
			},
			X_yuanhu:{
				unique:true,
				enable:'phaseUse',
				audio:2,
				usable:1,
				//animationColor:'fire',
				//complexCard:true,
				//limited:true,
				selectCard:-1,
				//line:'fire',
				check:function(){return -1},
				filterTarget:true,
				selectTarget:[1,Infinity],
				content:function(){
					"step 0"
					var next=target.chooseToRespond('你可以打出一张【轰！】来封锁一名角色',{name:'sha'});
					//next.autochoose=lib.filter.autoRespondSha;
					"step 1"
					if(result.bool){
						var next=target.chooseTarget(get.prompt('yuanhu_lock'),lib.translate["yuanhu_lock_info"],function(card,player,target){
							return true;
						}, true).set('ai',function(target){
							return get.attitude(player,target);
						});
						//player.logSkill('tiansuo');
					}else{
						event.finish();
					}
					'step 2'
					if(result.targets){
						event.target = result.targets[0];
						event.target.addTempSkill('yuanhu_lock','phaseEnd');
					}else{
						event.finish();
					}
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							if(target.hasSkillTag('nofire')) return 0;
							if(lib.config.mode=='versus') return -1;
							if(player.hasUnknown()) return 0;
							return get.damageEffect(target,player);
						}
					}
				}
			},
			yuanhu_lock:{
				mark:true,
				intro:{
					content:'当前回合不能使用或打出牌',
				},
				init:function(player){
					player.storage.yuanhu_lock = player.node.framebg.dataset.auto;
					player.node.framebg.dataset.auto='lock';
				},
				onremove:function(player){
					player.node.framebg.dataset.auto=player.storage.yuanhu_lock;
					delete player.storage.yuanhu_lock;
				},
				mod:{
					cardEnabled:function (card,player){
						if(_status.event.skill==undefined&&get.position(card)=='h') return false;
					},
					cardUsable:function (card,player){
						if(_status.event.skill==undefined&&get.position(card)=='h') return false;
					},
					cardRespondable:function (card,player){
						if(_status.event.skill==undefined&&get.position(card)=='h') return false;
					},
					cardSavable:function (card,player){
						if(_status.event.skill==undefined&&get.position(card)=='h') return false;
					},
				},
			},
			Himitsu_Calibur:{
				audio:2,
				cost:2,
				roundi:true,
				group:['HC_firing'],
				spell:['HC_attack'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.Himitsu_Calibur.cost;
				},
				content:function(){
					player.loselili(lib.skill.Himitsu_Calibur.cost);
					player.turnOver();
				},
			},
			HC_firing:{
				trigger:{source:'damageEnd'},
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					if (player.hasSkill('HC_attack')) return false;
					return event.nature != 'thunder';
				},
				content:function(){
					'step 0'
					lib.skill.Himitsu_Calibur.cost = 0;
					player.useSkill('Himitsu_Calibur');
					'step 1'
					lib.skill.Himitsu_Calibur.cost = 2;
				},
				prompt2:function(){return get.translation("Himitsu_Calibur_info")},
			},
			HC_attack:{
				audio:2,
				trigger:{player:'shaBegin'},
				filter:function(event, player){
					return event.card && event.player && event.target && event.player.countCards('h') && event.target.countCards('h');
				},
				check:function(event,player){
					return -get.attitude(player,event.target);
				},
				content:function(){
					"step 0"
					event.target = trigger.target;
					//if(event.triggername=="shaBegin"){
					if(event.target==player) event.finish();//else
					player.storage.HC_attack = event.target;
					player.chooseToCompare(event.target);
					"step 1"
					if (!result.tie){
						if(result.bool){
							player.useSkill('HC_discard');
							//player.discardPlayerCard('hej',trigger.target,true);
						}
					}
					"step 2"
					if(result.num1=="13"&&player.countCards('h')&&event.target.countCards('h')){
						player.chooseBool('是否继续与'+get.translation(event.target.name)+'拼点？','你使用【轰！】每指定一名目标后，可以与目标拼点：若你赢，弃置其一张牌；若你的拼点牌为K，可以重复此流程。',function(event,player){
							return 'ok';
						}).set('logSkill','HC_attack');
					}else event.finish();
					"step 3"
					if(result.bool){
						//player.useSkill('HC_attack');
						event.goto(0);
					}
				},
				//prompt2:'你使用攻击牌每指定一名目标后，可以与目标拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
				ai:{
					expose:0.3
				},
			},
			HC_discard:{
				popup:false,
				content:function(){
					"step 0"
					player.discardPlayerCard('hej',player.storage.HC_attack,true);
				},
				ai:{
					expose:0.3
				},
			},
			anduan:{
				group:['X_chuanyun','X_duanbing'],
				trigger: {
					player:["phaseUseBegin","phaseAfter"],
				},
				direct:true,
				init:function(player){
					player.storage.anduan = 0;
				},
				filter: function (event, player) {
					if(_status.event.triggername=='phaseUseBegin')return player.getHandcardLimit() > 0;
					return _status.event.triggername=='phaseAfter';
				},
				content: function () {
					"step 0"
					if(_status.event.triggername=='phaseAfter'){
						player.storage.anduan = 0;
						event.finish();
					}
					"step 1"
					var list = [];
					for(var i=0;i <= player.getHandcardLimit();i++){
						list.push(i);
					}
					player.chooseControl(list).set('prompt','选择减少的手牌上限').set('prompt2',get.translation('anduan_info'));;
					"step 2"
					if (result.control>0) {
						player.logSkill('anduan');
						player.storage.anduan = result.control;
					}
				},
				mod: {
					maxHandcard: function (player, num) {
						return player.hasSkill('anduan') && num - player.storage.anduan;
					},
				},
			},
			X_chuanyun:{
				trigger:{player:'phaseEnd'},
				filter:function(event,player){
					return player.getHandcardLimit()<2;
				},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('X_chuanyun'),'结束阶段，你可以视为使用一张【轰！】',function(card,player,target){
						return lib.filter.targetEnabled({name:'sha'},player,target);
					}).set('ai',function(target){
						return get.effect(target,{name:'sha'},_status.event.player);
					});
					"step 1"
					if(result.bool){
						player.logSkill('X_chuanyun');
						player.useCard({name:'sha'},result.targets,false);
					}
				},
				//prompt2:'结束阶段，你可以视为使用一张【轰！】',
				ai:{
					threaten:function(player,target){
						return 1.6;
					}
				},
				mod:{
					targetInRange:function(card,player,target,now){
						if(player.hasSkill('anduan')&&player.getHandcardLimit()<4&&card.name=='sha')return true;
					},
					/*attackFrom:function(){
						return player.hasSkill('anduan')&&player.getHandcardLimit()<4&&-Infinity;
					},
					selectTarget:function(card,player,range){
						if(range[1]==-1) return;
						if(card.name=='sha'&&range[1] == 1)range[1]+=1;
					},
					filterTarget:function(card,player,target){
						if (ui.selected.targets.length >= 1)return target == ui.selected.targets[0].previous||target == ui.selected.targets[0].next;
					},*/
				},
			},
			X_duanbing:{
				trigger:{player:'useCardToBefore'},
				direct:true,
				filter:function(event,player){
					if(event.card.name!='sha' || event.targets.length != 1 || player.getHandcardLimit() >= 3) return false;
					return game.hasPlayer(function(current){
						return !event.targets.contains(current)&&(current==event.targets[0].previous||current==event.targets[0].next)&&player.canUse('sha',current);
					});
				},
				//direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('X_duanbing'),'你使用【轰！】可以改为指定两名连续的角色为目标',function(card,player,target){
						return !_status.event.source.contains(target)&&(target==trigger.targets[0].previous||target==trigger.targets[0].next)&&player.canUse('sha',target);
					}).set('source',trigger.targets).set('ai',function(target){
						var player=_status.event.player;
						return get.effect(target,{name:'sha'},player,player);
					});
					'step 1'
					if(result.bool){
						if(!event.isMine()&&!_status.connectMode) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					player.logSkill('X_duanbing',event.target);
					trigger.targets.push(event.target);
				},
				//prompt2:'你使用【轰！】可以改为指定两名连续的角色为目标',
			},
			wangshou:{
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.countCards('h')>0;
				},
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if (!result.tie){
						if(result.bool){
							player.drawSkill('lianji', '未能获得【连击】，狂化失败');
							target.addTempSkill('wangshou_2');
					}else{
							target.drawSkill('lianji', '你的【连击】呢？');
							player.addTempSkill('wangshou_2');
						}
					}
				},
				ai:{
					order:function(name,player){
						var cards=player.getCards('h');
						if(player.countCards('h','sha')==0){
							return 1;
						}
						for(var i=0;i<cards.length;i++){
							if(cards[i].name!='sha'&&cards[i].number>11&&get.value(cards[i])<7){
								return 9;
							}
						}
						return get.order({name:'sha'})-1;
					},
					result:{
						player:function(player){
							if(player.countCards('h','sha')>0) return 0;
							var num=player.countCards('h');
							if(num>player.getHandcardLimit()) return 0;
							if(num==1) return -2;
							if(num==2) return -1;
							return -0.7;
						},
						target:function(player,target){
							var num=target.countCards('h');
							if(num==1) return -1;
							if(num==2) return -0.7;
							return -0.5
						},
					},
					threaten:1.3
				}
			},
			wangshou_2:{
				mark:true,
				intro:{
					content:'装备、技能全部无效',
				},
				init:function(player){
					var ejs=player.getCards('ej');
					for(var i=0;i<ejs.length;i++){
						if(get.type(ejs[i])=="equip")player.removeEquipTrigger(ejs[i]);
						if(get.type(ejs[i])=="delay"){
							var info=get.info(ejs[i]);
							if(info.skills){
								for(var j=0;j<info.skills.length;j++){
									player.removeSkillTrigger(info.skills[j]);
								}
							}
						}
					}
					player.update();
				},
				onremove:function(player){
					var ejs=player.getCards('e');
					for(var i=0;i<ejs.length;i++){
						if(get.type(ejs[i])=="equip")player.addEquipTrigger(ejs[i]);
						if(get.type(ejs[i])=="delay"){
							var info=get.info(ejs[i]);
							if(info.skills){
								for(var j=0;j<info.skills.length;j++){
									player.addSkillTrigger(info.skills[j]);
								}
							}
						}
					}
					player.update();
				},
				ai:{unequip:true}
			},
			Cross_Calibur:{
				audio:2,
				cost:2,
				roundi:true,
				group:['CC_firing'],
				spell:['CC_attack'],
				trigger:{player:'phaseBegin'},
				filter:function(event,player){
					return player.lili > lib.skill.Cross_Calibur.cost;
				},
				content:function(){
					player.loselili(lib.skill.Cross_Calibur.cost);
					player.turnOver();
				},
			},
			CC_firing:{
				trigger:{source:'damageEnd'},
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					if (player.hasSkill('CC_attack')) return false;
					return event.nature != 'thunder';
				},
				content:function(){
					'step 0'
					lib.skill.Cross_Calibur.cost = 0;
					player.useSkill('Cross_Calibur');
					'step 1'
					lib.skill.Cross_Calibur.cost = 2;
				},
				prompt2:function(){return get.translation("Cross_Calibur_info")},
			},
			CC_attack:{
				audio:2,
				trigger:{player:'shaBegin'},
				filter:function(event, player){
					return event.card && event.player && event.target && event.player.countCards('h') && event.target.countCards('h');
				},
				check:function(event,player){
					return -get.attitude(player,event.target);
				},
				content:function(){
					"step 0"
					event.hands = trigger.target.getCards('h');
					event.equips = trigger.target.getCards('e');
					event.skills = trigger.target.getCards('j');
					//event.target = trigger.target;
					"step 1"
					if(trigger.target==player) event.finish();
					player.discardPlayerCard(trigger.target,1,"hej",true);
					"step 2"
					if((event.hands.contains(result.links[0])&&trigger.target.getCards('h').length == 0)||(event.equips.contains(result.links[0])&&trigger.target.getCards('e').length == 0)||(event.skills.contains(result.links[0])&&trigger.target.getCards('j').length == 0))event.goto(0);
				},
				//prompt2:'你使用攻击牌每指定一名目标后，可以与目标拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
				ai:{
					expose:0.3
				},
			},
		},
		translate:{
			kanade:'奏',
			kanade_die:'赐予我生命，真的，很感谢',
			zhongzou:'终奏',
			zhongzou_info:'一名角色的结束阶段，若本回合有角色：成为过牌的目标，并因防御牌以外的方式令牌取消其或无效；或以攻击牌以外的方式造成伤害；你可以消耗1点灵力，视为对所有这些角色使用一张【轰！】。',
			zhongzou_audio1:'……(#゜-゜)',
			zhongzou_audio2:'……音速手刃。',
			moxin:'默心',
			moxin_info:'一名角色的结束阶段，若其本回合：没有使用过攻击牌，没有造成过伤害，你可以令其获得一点灵力，或摸一张牌然后交给其一张牌。',
			moxin_audio1:'(゜-゜)ノ',
			moxin_audio2:'……加油。',
			shigure:'时雨',
			shigure_die:'真……真能干啊……我记住你了！',
			kc_yuzhi:'雨至',
			kc_yuzhi_info:'游戏开始时，你获得一张【神佑】技能牌。一名角色的回合开始时，你可以交给一名其他角色一张牌；若如此做，直到回合结束，当该角色成为【轰！】的目标时，令之对其无效。',
			kc_yuzhi_2:'雨至',
			kc_yuzhi_3:'雨至',
			zuoshibaozhan:'佐世保的时雨',
			zuoshibaozhan_info:'符卡技（2）<永续>符卡发动时，你将手牌数补至三张并获得一张【神佑】技能牌；你的牌因弃置而进入弃牌堆，或于回合外因使用而进入弃牌堆时，你可以将之交给一名其他角色。',
			zuoshibao_2:'佐世保的时雨',
			arisa:'亚里沙',
			yaowu:'妖舞',
			yaowu_info:'结束阶段，若你本回合使用过三张或更多的牌，你可以令一名角色收回其装备区内一张牌；若如此做，你可以弃置场上一张牌。',
			yaowu_audio1:'对空射击！',
			yaowu_audio2:'Caladbolg！',
			huanrao:'环绕',
			huanrao_info:'一回合一次，出牌阶段，你可以将一张牌当【灵光一闪】使用；你以此法获得的牌本回合只能当【轰！】使用。',
			huanrao_2:'环绕',
			huanrao_3:'环绕',
			huanrao_4:'环绕',
			huanrao_4_sha:'环绕',
			huanrao_audio1:'妖精小姐，帮一下忙啦~',
			huanrao_audio2:'来来来，来一起玩了啊~',
			sliver_arrow:'白银之箭',
			sliver_arrow_info:'符卡技（4）你可以跳过出牌阶段和弃牌阶段；若如此做，你弃置一名角色X张牌（X为你的手牌数）：若你以此法弃置了其所有牌，对其造成1点弹幕伤害和1点灵击伤害。',
			sliver_arrow_audio1:'我的箭会贯穿你！',
			sliver_arrow_audio2:'看招，白银之箭！',
			arisa_die:'你可真强呢……',
			yudachi:'夕立',
			yudachi_die:'真、真是笨蛋！这样就没法战斗了poi！？',
			hongxi:'轰袭',
			hongxi_info:'你可以将一张牌当作【轰！】使用；该【轰！】指定目标后，按照原牌属性执行对应效果：攻击／武器～与目标拼点：若你赢，该【轰！】不能成为【躲～】的目标；防御／防具～弃置目标角色一张牌。',
			hongxi_2:'轰袭',
			hongxi_3:'轰袭',
			hongxi_audio1:'首先从哪里开始打呢？',
			hongxi_audio2:'那么，让我们举办一场华丽的派对吧！',
			solomon:'所罗门的噩梦',
			solomon_info:'符卡技（2）<u>若你的体力值不大于2，此符卡消耗视为0；</u>符卡发动时，你获得一张【连击】技能牌；【轰袭】追加描述“辅助／宝物／道具～令该【轰！】造成的弹幕伤害＋１”。',
			solomon_audio1:'所罗门的噩梦，让你们见识一下！',
			megumin:'惠惠',
			megumin_die:'和真，快来背我回去啊OAQ',
			honglian:'红链',
			honglian_info:'准备阶段，你可以选择一名角色：本回合一次，你对其造成伤害后，视为对所有与其距离X以内的角色使用一张【轰！】（X为你的灵力值）。',
			honglian_2:'红链',
			honglian_3:'红链',
			honglian_audio1:'艺术就是爆炸！',
			honglian_audio2:'一切都是为了爆发！',
			sbrs_liansuo:'莲锁',
			sbrs_liansuo_info:'准备阶段，你可以指定一名角色：本回合一次，该角色因弃置或获得而失去牌后，你视为对其距离X以内的所有角色使用一张【轰！】；该【轰！】的目标角色可以弃置一张非基本牌来抵消该【轰！】（X为你的灵力）。',
			sbrs_liansuo_audio1:'别想跑掉！',
			sbrs_liansuo_audio2:'什么东西不爆炸一次怎么能行！',
			sbrs_liansuo_2:'莲锁',
			sbrs_liansuo_3:'莲锁',
			sbrs_liansuo_4:'莲锁（无效）',
			explosion:'EXPLOSIONNNNN！',
			explosion_info:'符卡技（4）跳过你的出牌阶段，然后对一名角色造成2点弹幕伤害，2点灵击伤害，并弃置其装备区内所有牌。',
			explosion_2:'EXPLOSIONNNNN！',
			explosion_audio1:'EXPLOSIONNNNN！',
			explosion_audio2:'EXPPLOSSSSSIIIIIIOOOOOOONNNNN！',
			satone:'七宫',
			guyin:'孤樱',
			guyin_2:'孤樱',
			guyin_3:'孤樱',
			guyin_info:'锁定技，你使用牌时，无视消耗强化之；你使用基本牌指定角色为目标时，或成为基本牌的目标时，取消你，然后来源视为对原目标使用一张与之属性相同的法术牌；你的【躲～】视为【请你住口！】',
			tianze:'天则',
			tianze2:'天则',
			tianze_info:'锁定技，你受到弹幕伤害后，对伤害来源造成等量灵击伤害；你成为红桃辅助牌的目标时，须消耗1点灵力，然后回复1点体力。',
			satone_die:'咕咕咕……',
			nero:'尼禄',
			muqi:'幕启',
			muqi_backup_audio1:'没有事情是余做不到的！',
			muqi_backup_audio2:'唔姆！',
			muqi_backup_audio3:'余是不是很厉害！',
			muqi_info:'你可以将两张牌当作一种基本牌，或本回合没有使用过的一种法术牌使用。',
			AestusDomusAurea:'招荡的黄金剧场',
			AestusDomusAurea_info:'符卡技（2）<永续>准备阶段，你将手牌数补至手牌上限；出牌阶段，你可以弃置一张手牌，声明一种技能牌，然后获得之；符卡结束时，你可以消耗1点灵力，令符卡不结束。',
			ADA2:'招荡的黄金剧场',
			ADA2_backup:'招荡的黄金剧场',
			ADA3:'招荡的黄金剧场',
			ADA3_audio1:'Encore!',
			ADA3_audio2:'表演还没有结束呢！',
			nero_die:'',
			kurumi:'狂三',
			kedan:'刻弹',
			kedan_info:'你可以将一张有灵力的牌当作一种禁忌牌使用，一回合一种禁忌牌名限一次；你使用禁忌牌时，可以将目标改为“一名角色”。',
			shishu:'时溯',
			shishu3:'本回合进入弃牌堆的有灵力/禁忌牌',
			shishu3_bg:'时',
			shishu_info:'结束阶段，你可以获得场上或本回合进入弃牌堆的至多Ｘ张有灵力的牌或禁忌牌（Ｘ为本回合其他角色扣减的体力总值）。',
			shishi:'食时之城',
			shishi_info:'符卡技（4）<永续>防止你扣减体力或灵力；你的攻击范围和使用【轰！】的次数限制视为无限；结束阶段，若你本回合击坠过角色，你于回合结束后进行一个额外的回合，该回合内符卡不结束。',
			miku:'初音',
			geying:'歌莺',
			geying1:'歌莺（重铸明置牌）',
			geying2:'歌莺（重铸暗置牌）',
			geying_info:'一回合三次，你失去牌后，可以明置或暗置一张手牌；准备阶段，你可以重铸所有明置牌；结束阶段，你可以重铸所有暗置手牌。',
			wuyan:'舞燕',
			wuyan_info:'所有角色根据你明置牌中数量最多的花色获得以下效果：<br>黑桃：准备阶段，获得1点灵力；<br>梅花：摸牌阶段，额外摸一张牌；<br>红桃：一回合一次，出牌阶段，可以将一张牌当作【葱】使用；<br>方片：弃牌阶段开始时，可以交给你一张牌。',
			wuyan1_bg:'♣',
			wuyan1:'舞燕（梅花）',
			wuyan2_bg:'♠',
			wuyan2:'舞燕（黑桃）',
			wuyan3_bg:'♡',
			wuyan3:'舞燕（红桃）',
			wuyan4_bg:'♢',
			wuyan4:'舞燕（方片）',
			stage:'旋转吧，舞台！',
			stage_info:'符卡技（2）<永续>准备阶段，你将手牌数补至3，并明置所有手牌；无视【舞燕】中的“数量最多”。',
			sinon:'诗乃',
			yanju:'燕狙',
			yanju_audio1:'你逃不掉的！',
			yanju_audio2:'……这种小伎俩没有用的。',
			yanju_audio3:'……',
			yanju_info:'出牌阶段开始时，你可以消耗１点灵力，并选择一项：无视距离，无视装备效果，或不能成为牌的目标；然后视为使用一张持有该效果的【轰！】。',
			shangtang:'上膛',
			shangtang_audio1:'请掩护！',
			shangtang_audio2:'你们等我一下……',
			shangtang1:'上膛（后续）',
			shangtang1_bg:'膛',
			shangtang_info:'准备阶段，若你的手牌数／灵力值小于初始值，你可以重置该数值，然后获得以下效果，直到你的下个准备阶段：你不能对其他角色使用牌；你的手牌上限至少为３。',
			sinon_die:'撤退……',
			scathach:'斯卡哈',
			ruizhi:'魔境智慧',
			ruizhi_audio1:'这是魔境，深渊的睿智。',
			ruizhi_audio2:'我杀不了的人,基本上没有。',
			ruizhi_info:'准备阶段，你可以判定3次，然后选择一项：若结果中有黑桃，你获得2点灵力；若有方片，你视为使用一张【轰！】；若有梅花，你将一张角色的一张牌置于牌堆顶。',
			mojing:'满溢死亡的魔境之门',
			mojing_audio1:'以我之名连接的力量，回应我的呼唤开启大门。',
			mojing_audio2:'来尝试将我杀死吧！',
			mojing1:'魔境之门（掉血）',
			mojing_info:'符卡技（4）<永续>符卡发动时，你视为使用了一张【死境之门】；【魔境智慧】中的“选择一项”改为“选择所有项”;一名角色因弃置而失去红桃牌后，令所有其他角色各失去1点体力。',
			niuzhanshi:'？',
			mordred:'莫德雷德',
			ng_wenhao:'？',
			ng_pinjian_audio1:'烦死了！',
			ng_pinjian_audio2:'无路赛！',
			ng_wenhao_info:'你使用攻击牌指定目标后，或成为攻击牌的目标后，可以与另一方拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
			niguang:'逆光',
			niguang_info:'你使用攻击牌指定目标后，或成为攻击牌的目标后，可以与另一方拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色���张牌。',
			ng_pinjian:'？',
			ng_pinjian3:'？',
			ng_wenhao2:'？',
			ng_wenhao2_audio1:'我不是王，而是走在王身后的人我，为了王的安危，驱逐一切敌人！',
			ng_wenhao2_info:'限定技，准备阶段，若你的灵力大于1，你可以摸X张牌（X为你已受伤值），然后获得并发动你的符卡技。',
			ClarentBloodArthur:'向端丽的吾父发起叛逆',
			ClarentBloodArthur_audio1:'[向端丽的吾父发起叛逆]！',
			ClarentBloodArthur_audio2:'这便是毁灭吾父的邪剑！',
			ClarentBloodArthur_info:'符卡技（1）<永续>你的灵力上限为无限，你的牌点数均为K，符卡结束时，你对一名角色造成X点弹幕伤害，然后消耗所有灵力（X为你的灵力值）。',
			CBA2:'向端丽的吾父发起叛逆',
			CBA3:'向端丽的吾父发起叛逆',
			twob:'2B',
			qiyue:'白之契约',
			qiyue_info:'你使用【轰！】指定目标后，可以弃置目标一张牌；然后，若目标没有手牌，你获得1点灵力。',
			qiyue_audio1:'……',
			qiyue_audio2:'哈啊——',
			yueding:'白之约定',
			yueding2:'白之约定（转化）',
			yueding1:'白之约定',
			yueding_info:'符卡技（2）一回合一次，你可以将一张牌当作【轰！】使用；你使用【轰】的次数上限+1；你使用【轰！】指定目标后，可以弃置目标一张牌；然后，若目标没有装备牌，你摸一张牌。',
			yueding_audio1:'看招——',
			yueding_audio2:'……',
			kuro:'克洛伊',
			kuro_die:'我记住你的脸了…。之后绝对要让你哭出来……',
			touying:'投影',
			touying_backup_audio1:'Trace On!……是这样的吗？',
			touying_backup_audio2:'I am the bone of my……即使对于我来说都有点羞耻啊，这台词……',
			touying_target:'投影',
			touying_recast:'投影（重铸）',
			touying_info:'一回合一次，出牌阶段，或你成为攻击牌的目标后，你可以消耗1点灵力，将一张非装备牌当作一种装备牌置于装备区内；一名角色的结束阶段，你重铸装备区内以此法置入的牌。',
			wenmo:'吻魔',
			wenmo_info:'一回合一次，出牌阶段，你可以与一名其他角色依次展示一张牌，交换这两张牌；若颜色相同，你获得1点灵力。',
			wenmo_audio1:'魔力不足啊，有没有哪里有魔力充足的可爱女孩子啊？',
			wenmo_audio2:'提供魔力就麻烦你咯？',
			wenmo_audio3:'等、等、等一下！我还没有做好心理准备呢……',
			heyi:'鹤翼三连',
			heyi_skill:'鹤翼三连',
			heyi_audio1:'就让你见识一下必杀！',
			heyi_skill_audio1:'跋山涉水也绝不坠落的这双翅膀！',
			heyi_skill_audio2:'『鹤翼三连』！',
			heyi_info:'符卡技（0）【投影】中的“一次”视为“三次”；你使用【轰！】指定目标后，可以重铸装备区内的任意张牌，然后弃置目标等量牌。',
			daria:'多萝西',
			daria_die:'这次我就好心让你赢吧！',
			zhuanhuan:'次元转换',
			zhuanhuan_info:'一回合一次，出牌阶段，你可以弃置所有手牌，然后摸X张牌（X为灵力值）。',
			zhuanhuan_audio1:'这就是大魔女的实力！',
			zhuanhuan_audio2:'我要把你打成稀巴烂了哟？',
			moli:'次元魔力',
			moli_info:'一回合一次，出牌阶段，你可以弃置一张牌，并弃置至多三名角色各一张牌；然后，你观看牌堆底等量的牌，依次交给这些角色各一张。',
			moli_audio1:'呐，这忙就让我来帮吧？',
			moli_audio2:'嗯……我应该做什么的来着？',
			chaoyue:'次元超越',
			chaoyue_info:'符卡技（7）<u>你使用法术牌时，令此符卡的消耗-1；</u>符卡发动时，重置此符卡的消耗；当前回合结束后，你进行一个额外回合。',
			chaoyue_audio1:'撒，开门了哟？',
			chaoyue_audio2:'来，见识一下次元的尽头吧？',
			rylai:'莉莱',
			tanxue:'坍雪寒裘',
			tanxue_info:'一名角色使用【轰！】指定你为目标后，若其灵力小于你，你可以令该【轰！】造成的伤害改为灵击伤害。',
			bingfeng:'冰封禁制',
			bingfeng_info:'一名角色使用法术牌时，若该牌未强化，你可以弃置一张牌，为该牌追加描述“强化（-1）：对目标造成１点灵击伤害”，然后强化之。',
			aoshu:'奥术光环',
			aoshu_lili:'奥术光环（获得灵力）',
			aoshu_info:'一回合一次，出牌阶段，你可将灵力消耗到0，并为任意名角色分配等量灵力；然后，直到你的准备阶段，一名角色发动符卡时，你获得1点灵力。',
			jack:'开膛手杰克',
			wulin:'雾临',
			wulin_info:'限定技，一名角色的回合开始时，你可以令你攻击范围内的一名角色获得以下效果，直到回合结束：<details><summary>其只能以随机选择手牌的方式使用/打出牌；弃置选择的不合理的牌。</summary><p>其不能以此法以外的方式使用牌；其需要使用牌时，可以扣置并洗混其手牌，然后展示其中一张：若可以使用，本次结算中其可以使用该牌；否则，其弃置之，并可以重复此流程。</details>其首次成为【轰！】的目标后，令之不计次数。',
			yejiang:'夜降',
			yejiang_info:'限定技，一名角色的回合开始时，你可以令你攻击范围内的一名角色获得以下效果，直到回合结束：其攻击范围视为0，不能获得灵力，且装备效果无效。',
			maria:'解体圣母',
			maria_skill:'解体圣母',
			maria_info:'符卡技（2）符卡发动时，你指定一名其他角色：你与该角色距离视为1；你使用【轰！】造成伤害后，弃置受伤角色所有手牌；符卡结束时，重置【夜降】和【雾临】。',
			yuuko:'有子',
			waimai:'外卖',
			waimai_info:'锁定技，准备阶段，若你没有灵力，摸两张牌。',
			heike:'黑客',
			heike_info:'一回合一次，出牌阶段，你可以消耗1点灵力，观看一名角色的手牌并获得其中一张。',
			tsubaki:'椿',
			xiangyi:'翔翼',
			xiangyi_audio1:'这是由你为我再一次展开的双翼',
			xiangyi_2:'翔翼（→躲）',
			xiangyi_3:'翔翼（灵击伤害）',
			xiangyi_3_audio1:'这是我的领域',
			xiangyi_3_audio2:'折翼陨落，涅槃苏生',
			xiangyi_3_audio3:'毕竟，你就是我的翅膀啊',
			xiangyi_info:'你可以将与装备区内牌颜色相同的牌当作【轰！】或【躲～】使用/打出；你于回合外使用牌后，可以对一名角色造成1点灵击伤害。',
			chunse:'椿色恋歌',
			chunse_2:'椿色恋歌（灵击→弹幕）',
			chunse_info:'其他角色回合结束时，若其手牌数或体力值大于你，你获得1点灵力；你造成灵击伤害时，若你灵力等于上限，可以改为造成等量弹幕伤害。',
			illyasviel:'伊莉雅',
			illyasviel_die:'既然牵起了伊莉雅的手，就要守护她到最后啊……',
			huanzhao:'幻召',
			huanzhao_info:'游戏开始时，你获得两张角色牌并暗置，称为“梦幻”；你击坠一名角色后，将其角色牌暗置加入“梦幻”；你视为拥有明置“梦幻”的第一项技能；准备阶段开始时，你可以明置一张“梦幻”并暗置其余，然后可以消耗1点灵力，获得该“梦幻”的所有技能，直到回合结束。',
			huanzhao1:'设置“梦幻”',
			huanzhao1_audio1:'那个、我叫伊莉雅，小学五年级。姑且……在当魔法少女。呜、虽然可能帮不上忙……但是我会努力的！',
			huanzhao2:'幻召',
			huanzhao2_audio1:'做到了，完成变身了！',
			huanzhao2_audio2:'你刚才在期待什么奇奇怪怪的东西么？',
			huanzhao2_audio3:'是小黑，和哥哥……的力量。我一定不会辜负你们的！',
			huanzhao4:'幻召',
			huanzhao4_audio1:'为什么不能老老实实的呢？',
			huanzhao4_audio2:'我已经再也……不会放弃任何东西了',
			wuxian:'无限',
			wuxian_info:'锁定技，准备阶段，你获得1点灵力；然后：若你的灵力等于上限，你摸一张牌。',
			wuxian_audio1:'感觉身体变得轻快了？',
			wuxian_audio2:'伊莉雅可是有好好的在成长呢……我是在说身高啦',
			wuxian_audio3:'好厉害……魔力好充沛……！在这之后我也会尽力战斗的。我要守护大家！',
			wuxian_audio4:'那，那个，非常感谢你栽培我至今！今后我也会更加、更加更加地努力的！',
			quintette_fire:'多元重奏饱和炮击',
			quintette_fire_info:'符卡技（7）<u>此符卡消耗-X（X为“梦幻”的数量）；</u>准备阶段，你对一名角色造成3点弹幕伤害，然后弃置所有手牌。',
			quintette_fire_audio1:'肌肉系统、神经系统、血管系统淋巴系统。拟似魔术回路变换……完成！这就是我的一切……多元重奏饱和炮击！',
			quintette_fire_audio2:'无法和伊莉雅成为朋友的话，就只能打倒妳了！',
			quintette_fire_2:'多元重奏饱和炮击',
			m4a1:'M4A1',
			huoli:'火力专注',
			huoli_info:'一回合一次，你使用【轰！】时，可以弃置一张牌：若如此做，该【轰！】造成伤害时，对受伤角色造成1点灵击伤害。',
			huoli_audio1:'报仇的机会！',
			zhihui:'指挥人形',
			zhihui_info:'一名其他角色的回合开始时，你可以消耗1点灵力，令其选择一项：摸一张牌；本回合出牌阶段可以额外使用一张【轰！】；或获得1点灵力。',
			zhihui_audio1:'目标锁定',
			zhihui_audio2:'找可以躲的地方！',
			shenyuan:'申冤者印记',
			shenyuan_info:'符卡技（2）你使用的【轰！】可以指定至多X名目标（X为你已受伤值）；你使用【轰！】指定目标后，你可以令之对目标直接造成伤害。',
			shenyuan_audio1:'你也需要脊髓吗？',
			shenyuan_audio2:'我已经没有什么怜悯之心了。',
			shenyuan_1:'申冤者印记',
			shenyuan_1_info:'你可以令该【轰！】对目标直接造成伤害',
			m4a1_die:'唔！！就算是觉醒了的我，也不行的吗……',
			tohka:'十香',
			iphone3:'尘杀',
			iphone3_info:'你可以在需要的时候，视为使用/打出了一张【轰！】。',
			Halvanhelev:'最后之剑',
			Halvanhelev_1:'最后之剑',
			Halvanhelev_info:'符卡技（3）你造成伤害时，该伤害+1。',
			nurseryrhyme:'童谣',
			lvtu:'旅兔',
			lvtu_info:'准备阶段，你可以将体力上限，灵力值，手牌数，技能牌数中不为最少的一项调整至与其中最少相同；然后，将另一项调整至与其中最多相同。',
			mengjin:'梦镜',
			mengjin_info:'一回合一次，出牌阶段，你可以将体力值调整至已受伤值，手牌数调整至（3-手牌数，至少为0），灵力值调整至（5-灵力值）；然后，此技能无效，直到你进入决死状态。',
			weimo:'为某人所写的故事',
			weimo_info:'符卡技（1）<永续>你每有以下一项为全场最低（或之一），所有该项大于你的其他角色获得对应效果：<u>体力：</u>受到伤害时，伤害+1；<u>灵力：</u>非符卡效果无效；<u>手牌数：</u>手牌上限-2。',

						
			
			saber: '阿尔托莉雅',
			shengguang: '胜光',
			shengguang_origin: '胜光',
			shengguang_alter: '霸光',
			shengguang_info: '你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点；防止没赢的一方因“拼点后摸一张牌”规则摸牌；你的拼点牌亮出后，可以消耗1点灵力，令拼点牌点数翻倍。',
			shengguang_info_origin: '你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点；防止没赢的一方因“拼点后摸一张牌”规则摸牌；你的拼点牌亮出后，可以消耗1点灵力，令拼点牌点数翻倍。',
			shengguang_info_alter: '你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点；防止没赢的一方因“拼点后摸一张牌”规则摸牌；与你进行拼点的角色的拼点牌亮出后，可以消耗1点灵力，令拼点牌点数减半。',
			shengguang_win: '胜光',
			excalibur: '契约胜利之剑',
			excalibur_spell: '契约胜利之剑',
			excalibur_attack: '契约胜利之剑',
			excalibur_info: '符卡技（1）<永续>你的手牌上限和灵力值上限视为无限；符卡结束时，对一名角色造成X点弹幕伤害（X为灵力值），然后消耗所有灵力。',
			
			saber_lily: '阿尔托莉雅Lily',
			saber_lily_ab: '阿尔托莉雅',
			hualu: '花路',
			hualu_info: '你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点；防止没赢的一方因“拼点后摸一张牌”规则摸牌；你选择拼点牌前，可委托其他角色打出拼点牌；你可以令替你出牌的角色获得1点灵力。',
			hualu_glory: '花路',
			caliburn: '胜利黄金之剑',
			caliburn_spell: '胜利黄金之剑',
			caliburn_use: '胜利黄金之剑',
			caliburn_info: '符卡技（1）<永续><仪式>你的手牌上限和灵力值上限视为无限：符卡结束时，你选择X次（X为灵力值）：令一名角色：受成1点弹幕伤害，或回复1点体力；然后，消耗所有灵力。',
			
			nero_wedding: '花嫁尼禄',
			//nero_wedding_ab: '尼禄',
			FaxCaelestis: '星驰的终幕蔷薇',
			FaxCaelestis_info: '符卡技（2）<永续>准备阶段，你将手牌数补至手牌上限；你使用辅助牌时，可以令一名其他角色也成为额外目标；一回合一次，你使用攻击牌时，可以将之交给一名角色，令其成为该牌的来源。',
			FCN2: '终幕蔷薇',
			FCN2_info: '',
			FCN3: '星驰的终幕蔷薇',
			FCN3_info: '',
			
			HF_sakura: '樱',
			jiushu: '救赎',
			jiushu_info: '一回合一次，出牌阶段，选择一名其他角色，并选择一项：弃置一张牌令其摸一张牌；或者失去1点体力令其回复1点体力。若选项条件中你是全场最低，则摸牌数/回复量+1。',
			jiushuying: '救赎·改',
			jiushuying_info: '一回合一次，出牌阶段，选择一名樱（拥有技能〖救赎〗的角色），并选择一项：弃置一张牌令其摸一张牌；或者失去1点体力令其回复1点体力。若选项条件中你是全场最低，则摸牌数/回复量+1。',
			mengsui: '梦碎',
			mengsui_info: '觉醒技，当你受到伤害时，若你的手牌数和体力均小于2，防止之。你消耗所有灵力，将体力和上限调整为4，获得〖无限〗、〖虚无〗和〖春回〗；所有其他角色获得“一名其他角色”改为“樱”的〖救赎〗。',
			wuxian_HF_sakura_audio1:'身体变得轻快了',
			wuxian_HF_sakura_audio2:'魔力……充沛……',
			xuwu: '虚无',
			xuwu_info: '锁定技，你视为拥有【皆杀】异变牌的效果；你只能因“无限”和击坠角色获得灵力；结束阶段，你对攻击范围内所有角色各造成1点灵击伤害；然后你对其中所有灵力为0的角色再造成1点弹幕伤害。',
			xuwu_damage: '虚无',
			chunhui: '春回',
			chunhui_info: '觉醒技，一名其他角色令你回复体力后，若该角色本回合令你回复至少2点体力，你减1点体力上限，失去〖虚无〗，令所有角色回复1点体力。',
			chunhui_count:'春回',
			
			fate_sakura: '樱',
			yingmeng:'樱梦',
			yingmeng_info:'觉醒技，其他角色令你回复体力脱离濒死状态后，你将体力回复至上限；若如此做，直到回合结束：你对其发动〖救赎〗时令其中的“一张牌”和“1点”各+1。',
			yingmeng_awake:'樱梦',
			yingmeng_buff:'樱梦',
			
			fate_rin: '凛',
			cuican: '璀璨',
			cuican_coins: '璀璨',
			cuican_info:'游戏开始时，你将牌堆顶一张牌置于角色牌上；你消耗灵力值时，可以任意弃置角色牌上的牌（当作+3灵力）和有灵力的牌，代替其中X点灵力消耗（X为弃置的牌的灵力之和）。',
			shanyao:'闪耀',
			shanyao_info:'你可以执行下列操作，然后消耗等量的灵力：视为使用一张额定目标数的法术牌，或为你使用的法术牌额外指定任意名目标。',
			shanyao_moretg:'闪耀',
			
			gilgamesh:'吉尔伽美什',
			wanglv:'王律',
			wanglv_info:'摸牌阶段，若你已受伤，你可以展示牌堆顶X+2张牌：你可以至多X次将其中一张攻击牌或装备牌当【轰！】使用；然后你获得其余的牌。',
			wanglvx:'王律',
			tiansuo:'天锁',
			tiansuo_info:'准备阶段，或当你成为【轰！】的目标时，你可以将一张牌置于牌堆顶，令其牌数大于你的一名其他角色直到结束阶段不能使用或打出牌，此时若你选择了此【轰！】的使用者，则对你无效。',
			tiansuo_lock:'天锁',
			tiansuo_lock_info:'被〖天锁〗指定的角色本回合不能使用或打出牌。',
			tiansuo_lock_bg:'锁',
			enuma_elish:'天地乖离开辟之星',
			enuma_elish_info:'符卡技（X）<u>（X为其他角色数+你的体力值）</u>所有角色的胜利和失败条件无效；准备阶段，你对所有其他角色造成等同于其体力上限的弹幕伤害；结束阶段，若其他角色均已坠机，你单独获得游戏胜利。',
			EE_damage:'天地乖离开辟之星',
			EE_damage_info:'符卡技（X）<u>（X为其他角色数+你的体力值）</u>所有角色的胜利和失败条件无效；准备阶段，你对所有其他角色造成等同于其体力上限的弹幕伤害；结束阶段，若其他角色均已坠机，你单独获得游戏胜利。',
			
			nero_claus:'圣诞尼禄',
			XmasEveTheater:'平安的圣夜剧场',
			XmasEveTheater_info:'符卡技（2）准备阶段，你将手牌数补至体力上限；出牌阶段，你可以将一张手牌交给一名角色；然后，其可以使用之：获得1点灵力',
			ChrisET:'平安的圣夜剧场',
			ChrisET_info:'出牌阶段，你可以将一张手牌交给一名角色；然后，其可以使用之：获得1点灵力',
			
			Jeanne:'贞德',
			qishi:'启示',
			qishi_info:'锁定技，准备阶段，你的体力值灵力值和手牌数每有一项不大于1，你便可以展示牌堆顶一张牌；若如此做：你获得其中一张，弃置其余。',
			ask_amen:'主啊，委以此身',
			ask_amen_info:'限定技，结束阶段，你可以执行下列操作来对任意名角色造成合计至多4点伤害；然后，你坠机。<br>你需先为每一名角色即将受到的伤害数来弃置等量不同花色的手牌。',
			Immanuel:'我的神，就在这里',
			Immanuel_info:'符卡技（0）<永续>你攻击范围内的角色受到伤害时，你可以消耗1点灵力，令此伤害-1；你不能对其他角色使用牌。',
			
			
			helena:'海伦娜',
			tongdiao:'同调',
			tongdiao_info:'一回合一次，出牌阶段，你可以弃置任意张牌并选择等量你在内的连续角色：这些角色各获得1点灵力。',
			tanqiu:'探求',
			tanqiu_info:'一回合一次，出牌阶段，你可以展示所有手牌并展示等量牌堆顶牌；若如此做：你可以获得其中与你手牌类型均不同的一张牌并弃置其余。',
			Sanat_Kumara:'金星神·火炎天主',
			Sanat_Kumara_info:'符卡技（2）一回合一次，出牌阶段，你可以重铸一张手牌，若如此做：你令任意名角色各展示所有手牌并重铸其中与你重铸的牌类别相同的手牌，且直到结束阶段，这些角色不能使用以此法摸到的牌。',
			SK_recast:'金星神·火炎天主',
			//SK_recast_info:'你可以重铸一张手牌，然后令任意名角色重铸同类别的手牌',
			SK_lock:'金星神·火炎天主',
			
			Mysterious_Heroine_X:'谜之女主角Ｘ',
			guangcai:'光裁',
			guangcai_info:'出牌阶段开始时，你可以消耗任意点灵力，摸等量技能牌；</br>一回合一次，出牌阶段，<font class="browntext">若你的灵力大于3，</font>你可以弃置一张牌，将一名角色装备区的一张牌当不计次数的【轰！】使用；</br>你成为【轰！】的目标时，<font class="browntext">若你的灵力不大于3，</font>可以打出一张【轰！】或防御牌，将目标转移给一名其他角色。',
			guangcaix:'光裁',
			X_zhungangshuo:'光裁',
			X_liuli:'光裁',
			X_yuanhu:'援护',
			X_yuanhu_info:'一回合一次，出牌阶段，你可以指定任意名角色，这些角色依次执行以下操作：</br>可以打出一张【轰！】；若如此做：其令一名角色直到回合结束不能使用或打出手牌。',
			yuanhu_lock:'援护',
			yuanhu_lock_info:'被〖援护〗指定的角色本回合不能使用或打出牌。',
			//yuanhu_lock_bg:'锁',
			Himitsu_Calibur:'无铭胜利剑',
			Himitsu_Calibur_info:'符卡技（2）<u>你造成弹幕伤害后，可以无视消耗发动此符卡；</u>你使用【轰！】每指定一名目标后，可以与目标拼点：若你赢，弃置其一张牌；若你的拼点牌为K，可以重复此流程。',
			HC_firing:'无铭胜利剑',
			HC_attack:'无铭胜利剑',
			HC_discard:'无铭胜利剑',
			
			unknown_eks:'谜之女主角X',
			anduan:'暗断',
			anduan_info:'出牌阶段开始时，你可以令你手牌上限直到回合结束减少任意值。</br>若你的手牌上限小于：</br>４：你使用【轰！】无距离限制；</br>３：你使用【轰！】可以改为指定两名连续的角色为目标；</br>２：结束阶段，你可以视为使用一张【轰！】。',
			X_chuanyun:'暗断',
			X_duanbing:'暗断',
			wangshou:'王手',
			wangshou_info:'一回合一次，出牌阶段，你可以与一名其他角色拼点：赢的角色获得一张【连击】技能牌，没赢的角色直到回合结束装备牌和技能牌无效。',
			wangshou_2:'王手',
			Cross_Calibur:'黑龙双克胜利剑',
			Cross_Calibur_info:'符卡技（2）<u>你造成弹幕伤害后，可以无视消耗发动此符卡；</u>你使用【轰！】每指定一名目标后，可以弃置其一张牌；若你以此法弃置其一个区域内的最后一张牌，重复此流程。',
			CC_firing:'黑龙双克胜利剑',
			CC_attack:'黑龙双克胜利剑',
			
		},
	};
});
