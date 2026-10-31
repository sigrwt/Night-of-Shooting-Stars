'use strict';
game.import('character',function(lib,game,ui,get,ai,_status){
	return {
		name:'shineedle',
		connect:true,
		character:{
			sekibanki:['female','2',4,['feitou']],
			seija:['female','1',5,['nifan','saoluan']],
			shinmyoumaru:['female','5',1,['buqu','tianyi']],
		},
		characterIntro:{
			seija:'全名鬼人正邪，以和天下一切事物对着干作为行为准则，缔造过在全幻想乡不择手段通缉下逃生的传奇。<br><b>画师：sheya（歌C呗）</b>',
			shinmyoumaru:'全名少名针妙丸，一寸法师后裔的小人物，拥有能实现愿望的万宝槌。<br><b>画师：米诺</b>',
			sekibanki:'拥有把头飞出去的能力，是比起辘轳首更像其原型的飞头蛮的妖怪，飞出去的头可以分裂并从眼睛放出激光进行攻击。<br><b>画师：赤樫</b>',
		},	   
		perfectPair:{
		},
		skill:{
			nifan:{
				init:function(player){
					game.log('<span class="bluetext">'+get.translation(player)+"</span>将体力值调整至2点");
					player.hp = 2;
				},
				silent:true,
				trigger:{player:["loseEnd","changeHp"]},
				filter:function(event,player){
					if(_status.event.triggername == "loseEnd")return event.player.countCards("h")<=1;
					else return event.player.hp <=1 || event.player.isHealthy();
				},
				content:function(){
					if(player.isDamaged()){
						player.draw(2);
						player.recover();
					}
					else player.die();
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card, player, target){
				    		if(get.tag(card, "recover")&& _status.event.type == "phase")return -10;
			    			if(player.countCards('h') <= 2 && target === player && card.name != 'sha'){
			    			    // 手牌本来就不多了，再用一张就要触发 loseEnd
			    			    // 如果此时接近满血，用牌收益降低
					    	    if(target.hp > target.maxHp - 2) return -1.5;
						    
					    	}
						}
					}
				}
			},
			saoluan:{
				derivation:'luanwu',
				init:function(player){
					if(!lib.card.luanwu){
						game.loadModeAsync('brawl',function(mode){
						lib.skill.saoluan_add.init = mode.brawl.pubg.init;
						});
						player.useSkill("saoluan_popup");			//飞虎：为啥必须主动发动才能添加
					}
				},
				trigger:{player:["phaseEnd"]},
				content:function(){
					"step 0"
					player.discard(player.getCards("h"));
					player.chooseTarget('请选择乱武的目标',[1,player.hp],function(player,target){
						if(player==target) return false;
						if(get.distance(player,target)<=1) return true;
						if(game.hasPlayer(function(current){
						return current!=player&&get.distance(player,current)<get.distance(player,target);
						})){
						return false;
						}
						return true;
					});
					"step 1"
					if(result.targets)player.useCard({name:"luanwu"},result.targets);
				},
			},
			saoluan_add:{},
			saoluan_popup:{
				direct:true,
				content:function(){
					player.addTempSkill("saoluan_add");
				},
			},
			yy_zhanshen:{
				audio:1,
				enable:['phaseUse','chooseToRespond','chooseToUse'],
				filter:function(event,player){
					return !player.hasSkill("yy_count");
				},
				content:function(player){
					player.draw();
					for(var i in player.tempSkills)player.removeSkill(i);
					player.addSkill("yy_count");
				},
				hiddenCard:function(){
					return "wuxie";
				},
				ai:{
					save:true,
					respondSha:true,
					wuxie:function(target,card,player,viewer){
						//if(get.attitude(viewer,player)>0) return 0;
						return 1;
					},
					basic:{
						order:function(card,player){
						//if(player.hasSkillTag('pretao')) return 5;
						return 2;
						},
						//useful:[8,6.5],
						//value:[8,6.5],
						useful:[6,4],
						value:[6,4],
						//useful:[5,2],
						//value:[5,2],
					},
					expose:0.2,
					order:3,
					result:{
						player:1,
						target:function(player,target){
						if(player.countCards('h', {name:'zuiye'})){
							if(ai.get.attitude(player,target)>0){
								return -6;
							}
							else{
								return -3;
							}
						}
						return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
						respond:1,
						respondShan:1,
						damage:function(card){
						if(card.nature=='poison') return;
						return 1;
						},
						natureDamage:function(card){
						if(lib.nature.contains(card.nature)) return 1;
						},
						fireDamage:function(card,nature){
						if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
						if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
						if(card.nature=='poison') return 1;
						},
					},
				}
			},
			buqu:{
				audio:'buqu',
				trigger:{player:'changeHp'},
				filter:function(event,player){
					return player.hp<=0&&event.num<0;
				},
				content:function(){
					"step 0"
					event.card=get.cards()[0];
					if(player.storage.buqu==undefined) player.storage.buqu=[];
					player.storage.buqu.push(event.card);
					player.syncStorage('buqu');
					player.showCards(player.storage.buqu,'不屈')
					player.markSkill('buqu');
					"step 1"
					for(var i=0;i<player.storage.buqu.length-1;i++){
						if(get.suit(event.card)&&get.suit(event.card)==get.suit(player.storage.buqu[i])) return;
					}
					if(player.hp<=0){
						player.hp=1;
						player.update();
					}
				},
				mod:{
					maxHandcard:function(player,num){
						if(player.storage.buqu&&player.storage.buqu.length) return num+player.storage.buqu.length;
					}
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
						player.$throw(storage);
						for(var i=0;i<storage.length;i++){
							storage[i].discard();
						}
						delete player.storage.buqu;
						}
					}
				}
			},
			tianyi:{
				audio:1,
				enable:['phaseUse',/*'chooseToRespondBegin'*/,'chooseToUse'],
				filter:function(event,player){
					return /*!event.filterCard({name:"shan"})&&*/!player.hasSkill("yy_count");
				},
				content:function(player){
					player.draw();
					player.addSkill("yy_count");
				},
				hiddenCard:function(player,name){
					//if(name=="wuxie"&&!player.hasSkill("yy_count"))return true;
					return "wuxie;"
				},
				ai:{
					save:true,
					respondSha:true,
					wuxie:function(target,card,player,viewer){
						if(ai.get.attitude(viewer,player)>0&&ai.get.attitude(viewer,target)>0){
						return 2;
						}
						//if(get.attitude(viewer,player)>0) return 0;
						return 2;
					},
					basic:{
						order:function(card,player){
						//if(player.hasSkillTag('pretao')) return 5;
						return 2;
						},
						//useful:[8,6.5],
						//value:[8,6.5],
						useful:[6,4],
						value:[6,4],
						//useful:[5,2],
						//value:[5,2],
					},
					expose:0.2,
					order:3,
					result:{
						player:1,
						target:function(player,target){
						if(player.countCards('h', {name:'zuiye'})){
							if(ai.get.attitude(player,target)>0){
								return -6;
							}
							else{
								return -3;
							}
						}
						return 2;
						},
					},
					tag:{
						recover:1,
						save:1,
						respond:1,
						respondShan:1,
						damage:function(card){
						if(card.nature=='poison') return;
						return 1;
						},
						natureDamage:function(card){
						if(lib.nature.contains(card.nature)) return 1;
						},
						fireDamage:function(card,nature){
						if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
						if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
						if(card.nature=='poison') return 1;
						},
					},
				},
				group:"tianyi2",
			},
			tianyi2:{
				audio:1,
				trigger:{player:[/*'chooseToUseBegin',*/'chooseToRespondBegin']},
				filter:function(event,player){
					//if(event.name=="chooseToUse")return event.filterCard({name:"shan"})&&!player.hasSkill("yy_count");			//飞虎：为啥会默认使用了闪
					return !player.hasSkill("yy_count");	
				},
				content:function(player){
					player.draw();
					player.addSkill("yy_count");
				},
				ai:{
					respondSha:true,
					basic:{
						order:function(card,player){
						//if(player.hasSkillTag('pretao')) return 5;
						return 2;
						},
						//useful:[8,6.5],
						//value:[8,6.5],
						useful:[6,4],
						value:[6,4],
						//useful:[5,2],
						//value:[5,2],
					},
					expose:0.2,
					order:3,
					result:{
						player:1,
						target:function(player,target){
						if(player.countCards('h', {name:'zuiye'})){
							if(ai.get.attitude(player,target)>0){
								return -6;
							}
							else{
								return -3;
							}
						}
						return 2;
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
						if(lib.nature.contains(card.nature)) return 1;
						},
						fireDamage:function(card,nature){
						if(card.nature=='fire') return 1;
						},
						thunderDamage:function(card,nature){
						if(card.nature=='thunder') return 1;
						},
						poisonDamage:function(card,nature){
						if(card.nature=='poison') return 1;
						},
					},
				}
			},
			yy_count:{},
			_yy_zhanshen:{
				direct:true,
				trigger:{player:["phaseUseBegin","phaseAfter","chooseToUseEnd","chooseToRespondEnd","useCardEnd","respondEnd"]},
				filter:function(event,player){
					if(!player.hasSkill("yy_count"))return false;
					if(_status.event.triggername == "phaseUseBegin"||_status.event.triggername == "phaseAfter")return true;
					if(event.type=="dying"&&event.result.bool)return false;
					/*var source;
					for(var i=0;i<=20;i++){
						if(_status.event.getParent(i)&&_status.event.getParent(i).name=='phaseUse')source=_status.event.getParent(i).player;
					}
					return source != player;*/
					return _status.event.getParent("phaseUse").player != player;
				},
				content:function(){
					player.removeSkill("yy_count");
				},
			},
			feitou:{
				init:function(player){
					"step 0"
					var overlay = document.createElement('img');
					overlay.style.position = 'absolute';         //漂浮图层，static下z-index和宽高为自适应
					//overlay.style.zIndex = '10';			//图层顺序防遮挡
					overlay.style.top = 'calc(7.5%)';			//上端距离
					overlay.style.left = 'calc(20%)';			//计算居中值
					overlay.style.width = '60%';			//或许可以改成75%左端12.5%？
					overlay.style.height = '60%';			//足够覆盖头部区域
					overlay.src = lib.assetURL+'image/card/sekibanki.png';			//图片路径
					//overlay.style.backgroundImage = "url/('image/card/sekibanki.png')";			//div图片路径，手机端不显示
					overlay.style.objectFit='contain';           //img适应尺寸
					//overlay.style.backgroundSize = 'contain';			//div适应尺寸
					//overlay.style.backgroundRepeat = 'no-repeat';			//不重复
					overlay.style.objectPosition='center top';           //img图片过小时顶部居中
					//overlay.style.backgroundPosition = 'center top';			//div图片过小时顶部居中
					overlay.style.pointerEvents = 'none';			//避免阻挡点击事件
					//overlay.style.display='block !important';            //块级元素，position为absolute或fixed自动默认
					//overlay.style.backgroundColor = 'rgba(255,0,0,0.3)';         //半透明全红背景，测试用
					//overlay.style.border= '2px solid red';   //定位边框，测试用
"step 1"
					// 清除旧图层防止重复添加
					if (player.next.node.avatar.overlayElement) {
						player.next.node.avatar.overlayElement.remove();
					}

					player.next.node.avatar.appendChild(overlay);  //将新创建的遮罩图层
					player.next.node.avatar.overlayElement = overlay;//将这个遮罩图层保存为 avatar 元素的一个自定义属性,便于后续操作（如修改或清除该图层），避免重复查找或创建；
					//也可以对card.node.image进行操作，需要逐张从头进行
				},
				enable:"phaseUse",
				content:function(){
					"step 0"
					game.pause();
					const dialog = ui.create.dialog('请输入数字<br><br><br><div><div style="text-align:center;font-size:14px">两位阿拉伯数字</div>');
					const input = document.createElement('input');
					Object.assign(input.style, {
						width: '350px',
						height: '20px',
						padding: '0',
						position: 'relative',
						top: '50px',
						border: 'none',
						borderRadius: '2px',
						boxShadow: 'rgba(0,0,0,0.2) 0 0 0 1px'
					});
					
					// 限制只输入数字，且最多两位
					input.addEventListener('input', e => {
						e.target.value = e.target.value.replace(/\D/g, '').slice(0, 2);
					});
					dialog.appendChild(input);
					/*const runCommand = () => {
						const val = input.value.trim();
						if (val === '') return;
						try {
							const result = eval(val);
							console.log(`${val} → ${result}`);
						} catch (err) {
							console.log(`${val} —— ${err}`);
						}
						input.value = '';
					};*/
					const runCommand = () => {
						const val = input.value.trim();
						if (val === '') return;
						try {
							// 将输入的数字转为整数，保存到全局变量
							window.userInputNumber = parseInt(val, 10);
							// 可选：同时使用 eval 执行其他表达式（如需保留原功能）
							// const result = eval(val);
							game.log(`用户输入的数字: ${window.userInputNumber}`);
						} catch (err) {
							game.log(`输入错误: ${err}`);
							window.userInputNumber = null;
						}
						input.value = '';
					};
					const closeAndResume = () => {
						dialog.close();
						ui.dialog.close();
						while (ui.controls.length) ui.controls[0].close();
						game.resume();
					};
					input.addEventListener('keydown', e => {
						if (e.keyCode === 13) {
							runCommand();
							closeAndResume();
						}
					});
					ui.create.control('确定', () => {
						runCommand();
						closeAndResume();
					});
					"step 1"
					const userNumber = window.userInputNumber;
					if (userNumber !== null && !isNaN(userNumber)) {
						game.log(`Step 1 获取到数字: ${userNumber}`);
						// 继续你的逻辑...
					} else {
						game.log('Step 1 未获取到有效数字，请先在 Step 0 中输入');
					}
					console.log(userNumber);
				},
			},
		},
		translate:{
			seija:'正邪',
			nifan:'天地有用',
			nifan_info:'锁定技，游戏开始、你登场或获得此技能时，你的体力值为2；你失去一张手牌或变动1点体力时，若该项少于2，你摸两张牌并回复1点体力；你的体力变动至体力上限时，你坠机。',
			saoluan:'天壤梦弓',
			saoluan_info:'结束阶段，你可以弃置所有手牌，视为对至多X名角色使用了一张【乱武】（X为你当前的体力值）',
			saoluan_add:'天壤梦弓',
			saoluan_popup:'天壤梦弓',
			
			
			yy_count:'天羽',
			
			shinmyoumaru:'针妙丸',
			buqu:'五分之魂',
			buqu_info:'锁定技，你因受到夺命伤害或失去最后的体力而扣减体力时，你将牌堆顶牌置于角色牌上，若该牌花色与你角色牌上所有牌均不同，你回复1点体力；你的手牌上限+X（X为你角色牌上牌数）。',
			tianyi:'天衣百缝',
			tianyi2:'天衣百缝',
			tianyi_info:'当你需要使用或打出牌时，你可以摸一张牌（若为闪则无法使用），然后若此时为你的出牌阶段，你本回合不能再发动此技能。',
			
			sekibanki:'赤蛮奇',
			
			},
	};
});