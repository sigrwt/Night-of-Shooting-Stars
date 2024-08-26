'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'servant',
		connect:true,
		character:{
			nero:['female','2',4,['muqi','AestusDomusAurea']],
			scathach:['female', '1', 4, ['ruizhi','mojing']],
			niuzhanshi:['female','2',4,['ng_wenhao','ng_wenhao2']],
			mordred:['female','2',4,['niguang','ClarentBloodArthur'],['unseen','forbidai']],
			illyasviel:['female','1',3,['huanzhao','wuxian','quintette_fire']],
			kuro:['female', '1', 3, ['touying','wenmo','heyi']],
			jack_rapper:['female', '3', 3, ['wulin', 'yejiang', 'maria']],
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
			illyasviel:'全名伊莉雅丝菲尔·冯·爱因兹贝伦，在日本的动漫中十分常见的那种使用特殊能力帮助他人或对抗恶役的女孩子<br>出自：Fate/kaleid liner 魔法少女☆伊莉雅 <b>画师：永恒之舞MK_2</b>',
			nero:'全名尼禄·克劳狄乌斯·凯萨·奥古斯都·日耳曼尼库斯。古罗马的皇帝，比起皇帝更像个偶像，奢华浪费和浮夸无人能出其右。<br>出自:Fate/Extra <b>画师：demercles</b>',
			scathach:'全名斯卡哈·斯卡蒂，影之国的女王，当女王当了几千年了。<br>出自：Fate/Grand Order <b>设计：冰茶	画师：saberii</b>',
			niuzhanshi:'还能是谁呢这。<br>出自：Fate/Apocrypha <b>画师：イセ川</b>',
			mordred:'圆桌骑士之一，亚瑟王的儿子——同时也是终结父王的叛逆骑士。<br>出自：Fate/Apocrypha <b>画师：Shigure</b><br><br>（注：莫德雷德由？发动【？】变身而成，不能正常选出使用）',
			kuro:'全名克洛伊·冯·爱因兹贝伦，小腹上的那个不是○纹，不要问了！<br>出自：Fate/kaleid liner 魔法少女☆伊莉雅 <b>画师：トミフミ</b>',
			jack_rapper:'同时是杀人狂和暴露狂的幼女？快收住你奇怪的想法……<br>出自：Fate/Apocrypha <b>画师：オウカ</b>',
			nurseryrhyme:'<br>出自：Fate/Extra <b>画师：十八三</b>',
			
			saber:"你们光炮太多我很为难诶<br>出自：Fate/Stay Night <b>画师：冬ゆき</b>",
			saber_lily:"全名阿尔托莉雅·潘德拉贡，英格兰亚瑟王传说主角……的性转<br>出自：Fate/Grand Order <b>画师：未知</b>",
			nero_wedding:"唔姆，有谁会拒绝偶像穿着婚纱来表白呢？<br>出自:Fate/Extra CCC <b>画师：Kirra</b>",
			JoanofArc:"法国村姑被背刺后一缕真灵不灭自灰烬中重生的亵神之人，誓要将神的光辉从世上抹除。“人类不需要神明的注视，我要将高踞御座的神明一一焚净”，，，好吧我乱编的<br>出自：Fate/Grand Order <b>画师：未知</b>",
			HF_sakura:"全名间桐樱，笑容最美丽反而内心是最痛苦的<br>出自：Fate/Stay Night <b>画师：缶子</b>",
			fate_sakura:"间桐樱，远坂凛的妹妹，因魔术师家族传承制度过继给间桐家。<br>出自：Fate/Stay Night <b>画师：bomhat</b>",
			fate_rin:"全名远坂凛，这双锻炼到正好的大腿我也能玩一年，葱抱怨过“我去练撑杆跳能找到这么萌的妹子吗？”<br>出自：Fate/Stay Night <b>画师：基月</b>",
			gilgamesh:"据传拥有数量无可比拟但实际上是青铜的黄金，人类史上最古老的熊孩子，在以其名命名的苏美尔史诗中有个同性CP恩奇都<br>出自：Fate/Stay Night <b>画师：ユリリエンス</b>",
			nero_claus:"每年发病一次<br>出自：Fate/Extra",
			Jeanne:"全名珍奴·达尔克，法国圣女，名梗“只有女人矮子和外国人救得了法国”中女人的代表<br>出自：Fate/Apocrypha <b>画师：我美蘭</b>",
			helena:"全名海伦娜·布拉瓦茨基，俗称布拉瓦茨基夫人。十九世纪的女性神秘学者，坚信雷姆利亚大陆的存在，投身于神秘主义，神智学的创始人。<br>出自：Fate/Grand Order <b>画师：市倉とかげ</b>",
			sb_zhouyu:"天赋没用来点武力和女子力的中国版Saber<br>出自：侍灵演武：将星乱 <b>画师：七口</b>",
		},	
		perfectPair:{
		},
		skill:{
			//尼禄
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
			//斯卡哈·斯卡蒂
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
			//莫德雷德
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
				prompt2:'你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
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
					player.maxlili = Infinity;
				},
			},
			CBA2:{
				mod:{
					number:function(card,number){
						if(number!=-1)return 13;
					}
				},
				onremove: function (player) {
					player.maxlili = parseInt(lib.character[player.name][6]);
					if (player.lili > 0) player.useSkill('CBA3');
				}
			},
			CBA3:{
				/*trigger:{player:'turnOverAfter'},
				forced:true,
				filter:function(event,player){
					return !player.isTurnedOver();
				},*/
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
					//player.maxlili = parseInt(lib.character[player.name][6]);
					player.loselili(player.lili);
				},
			},
			//克洛伊
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
			//开膛手杰克
			wulin:{
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
			//伊莉雅
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
									dialog.buttons[i].style.background = 'url("theme/simple/unknown.png")';
									dialog.buttons[i].style.backgroundSize = "100% 100%";
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
					
					switch (name) {
						case 'saber': {
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/skin/illyasviel/saber.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/skin/illyasviel/saber.jpg');
							break;
						}
						case 'saber_lily': {
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/skin/illyasviel/saber_lily.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/skin/illyasviel/saber_lily.jpg');
							break;
						}
						case 'nero_wedding': {
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/skin/illyasviel/nero_wedding.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/skin/illyasviel/nero_wedding.jpg');
							break;
						}
						case 'kuro': {
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/skin/illyasviel/kuro.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/skin/illyasviel/kuro.jpg');
							break;
						}
						case 'aliceWLD': {
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/skin/illyasviel/alice.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/skin/illyasviel/alice.jpg');
							break;
						}
						default:{
							if(player.name=="illyasviel")player.node.avatar.setBackgroundImage('image/character/illyasviel.jpg');
							if(player.name2=="illyasviel")player.node.avatar2.setBackgroundImage('image/character/illyasviel.jpg');
						}
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
				audio:4,
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
			//爱丽丝童谣
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
				check:function(){
					return false;
				}
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
						player:function(card, player, target){
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
			
			scathach:'斯卡哈',
			ruizhi:'魔境智慧',
			ruizhi_audio1:'这是魔境，深渊的睿智。',
			ruizhi_audio2:'我杀不了的人,基本上没有。',
			ruizhi_info:'准备阶段，你可以判定3次，然后选择一项：若结果中有黑桃，你获得2点灵力；若有方片，你视为使用一张【轰！】；若有梅花，你将一张角色的一张牌置于牌堆顶。',
			mojing:'满溢死亡的魔境之门',
			mojing_audio1:'以我之名连接的力量，回应我的呼唤开启大门。',
			mojing_audio2:'来尝试将我杀死吧！',
			mojing1:'魔境之门（掉血）',
			mojing_info:'符卡技（4）<永续>符卡发动时，你视为使用了一张【死境之门】；〖魔境智慧〗中的“选择一项”改为“选择所有项”;一名角色因弃置而失去红桃牌后，令所有其他角色各失去1点体力。',
			
			niuzhanshi:'？',
			mordred:'莫德雷德',
			ng_wenhao:'？',
			ng_pinjian_audio1:'烦死了！',
			ng_pinjian_audio2:'无路赛！',
			ng_wenhao_info:'你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
			niguang:'逆光',
			niguang_info:'你使用攻击牌每指定一名目标后，或成为攻击牌的目标后，可以与另一方拼点：赢的一方弃置没赢的一方一张牌；你选择拼点牌前，可以消耗1点灵力，弃置与你进行拼点的角色一张牌。',
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
			heyi_info:'符卡技（0）〖投影〗中的“一次”视为“三次”；你使用【轰！】每指定一名目标后，可以重铸装备区内的任意张牌，然后弃置目标等量牌。',
			
			jack_rapper:'开膛手杰克',
			wulin:'雾临',
			wulin_info:'限定技，一名角色的回合开始时，你可以令你攻击范围内的一名角色获得以下效果，直到回合结束：<details><summary>其只能以随机选择手牌的方式使用/打出牌；弃置选择的不合理的牌。</summary><p>其不能以此法以外的方式使用牌；其需要使用牌时，可以扣置并洗混其手牌，然后展示其中一张：若可以使用，本次结算中其可以使用该牌；否则，其弃置之，并可以重复此流程。</details>其首次成为【轰！】的目标后，令之不计次数。',
			yejiang:'夜降',
			yejiang_info:'限定技，一名角色的回合开始时，你可以令你攻击范围内的一名角色获得以下效果，直到回合结束：其攻击范围视为0，不能获得灵力，且装备效果无效。',
			maria:'解体圣母',
			maria_skill:'解体圣母',
			maria_info:'符卡技（2）符卡发动时，你指定一名其他角色：你与该角色距离视为1；你使用【轰！】造成伤害后，弃置受伤角色所有手牌；符卡结束时，重置〖夜降〗和〖雾临〗。',
			
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