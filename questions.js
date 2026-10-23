const Q=[];
function add(type,skill,lesson,prompt,answer,extra={}){Q.push({id:Q.length+1,type,skill,lesson,prompt,answer,...extra});}
// 10 multiple choice
add('choice','Grammar',1,'She usually ___ breakfast at 7 a.m.','has',{options:['have','has','having']});
add('choice','Grammar',1,'Look! Maria ___ to the manager.','is talking',{options:['talks','is talking','talk']});
add('choice','Grammar',2,'How ___ apples do you need?','many',{options:['much','many','any']});
add('choice','Grammar',2,'There is not ___ milk in the fridge.','any',{options:['some','many','any']});
add('choice','Grammar',3,'Quito is ___ than Guayaquil.','cooler',{options:['cooler','coolest','more cool']});
add('choice','Grammar',3,'A guide is a person ___ helps visitors.','who',{options:['where','which','who']});
add('choice','Grammar',4,'My dad ___ play football when he was young.','used to',{options:['use','used to','using to']});
add('choice','Grammar',4,'We walked ___ the bridge to the market.','over',{options:['into','over','along']});
add('choice','Grammar',5,'I ___ dinner when my friend called.','was cooking',{options:['cook','was cooking','cooked']});
add('choice','Grammar',5,'It was raining, ___ we stayed home.','so',{options:['although','so','however']});
// 10 gap
add('gap','Grammar',1,'He ___ (work) in a hospital every day.','works');
add('gap','Grammar',1,'They ___ (study) English now.','are studying');
add('gap','Grammar',2,'How ___ sugar do you need?','much');
add('gap','Grammar',2,'I need ___ tomatoes for the salad.','some');
add('gap','Grammar',3,'Cotopaxi is one of the ___ (high) mountains in Ecuador.','highest');
add('gap','Grammar',3,'A market is a place ___ you can buy food.','where');
add('gap','Grammar',4,'I didn’t ___ to drink coffee when I was a child.','use');
add('gap','Vocabulary',4,'The train went ___ the tunnel.','through');
add('gap','Grammar',5,'While I ___ (walk), I saw a dog.','was walking');
add('gap','Grammar',5,'I went to bed early ___ I was tired.','because');
// 8 unscramble exact words, word tile construction
add('order','Grammar',1,'Put the words in the correct order.','She works in a restaurant.',{tiles:['a','works','restaurant.','She','in']});
add('order','Grammar',1,'Put the words in the correct order.','They are studying English now.',{tiles:['English','now.','studying','They','are']});
add('order','Grammar',2,'Put the words in the correct order.','How many bananas do you need?',{tiles:['need?','bananas','do','How','you','many']});
add('order','Grammar',2,'Put the words in the correct order.','We do not have any rice.',{tiles:['have','any','We','rice.','not','do']});
add('order','Grammar',3,'Put the words in the correct order.','Loja is smaller than Quito.',{tiles:['than','smaller','Quito.','is','Loja']});
add('order','Grammar',4,'Put the words in the correct order.','Did you use to walk to school?',{tiles:['to','school?','Did','use','walk','you','to']});
add('order','Grammar',4,'Put the words in the correct order.','We walked along the river.',{tiles:['the','walked','river.','We','along']});
add('order','Grammar',5,'Put the words in the correct order.','I was sleeping when you called.',{tiles:['you','when','sleeping','I','called.','was']});
// 6 short writing manual review
add('writing','Writing',1,'Write 3 sentences about your normal day. Use usually or every day.',null,{hint:'Example: I usually get up at seven.'});
add('writing','Writing',2,'Write 3 sentences about food you need for a family dinner.',null,{hint:'Use some, any, many or much.'});
add('writing','Writing',3,'Compare two cities in Ecuador. Write 3 sentences.',null,{hint:'Example: Quito is cooler than Guayaquil.'});
add('writing','Writing',4,'Write 3 sentences about your life when you were a child.',null,{hint:'Use used to or didn’t use to.'});
add('writing','Writing',5,'Write a short story about a trip. Write 4 sentences.',null,{hint:'Use when, while, because or so.'});
add('writing','Writing',5,'Write 3 sentences about a problem on a trip and what happened.',null,{hint:'Example: It started to rain, so we stopped.'});
// 6 reading
const read1='Ana works at a hospital in Quito. She usually travels by bus, but today she is working from home. After work, she needs to buy some tomatoes and rice for dinner. There are three people in her family.';
add('reading','Reading',1,'Where does Ana usually work?','at a hospital',{passage:read1,options:['At a school','At a hospital','At a restaurant']});
add('reading','Reading',1,'How does Ana usually travel?','by bus',{passage:read1,options:['By bus','By train','By taxi']});
add('reading','Reading',2,'What food does Ana need?','tomatoes and rice',{passage:read1,options:['Apples and milk','Tomatoes and rice','Bread and eggs']});
const read2='Last Saturday, Carlos visited a town near Cuenca. When he was a child, he used to visit this town with his grandmother. This time, he walked along a river and visited a small market. While he was drinking coffee, it started to rain. He stayed at the café because the road was wet.';
add('reading','Reading',4,'Who did Carlos visit the town with when he was a child?','his grandmother',{passage:read2,options:['His brother','His grandmother','His teacher']});
add('reading','Reading',4,'Where did Carlos walk?','along a river',{passage:read2,options:['Along a river','Over a mountain','Into a hospital']});
add('reading','Reading',5,'Why did Carlos stay at the café?','because the road was wet',{passage:read2,options:['Because the road was wet','Because he was hungry','Because it was morning']});
// 6 listening scripts provided server-side to browser by necessity for synthesis; audio fallback not pre-generated
const l1='Woman: Hello. I need two kilos of tomatoes, please. Man: Of course. Do you need any bananas? Woman: Yes, four bananas, please.';
const l2='Man: I usually take the bus to work, but today I am walking. The weather is nice.';
const l3='Woman: My sister lives in Loja. Loja is smaller than Quito, but it is a beautiful city.';
const l4='Man: I used to play football every weekend. Now I go to the gym on Saturdays.';
const l5='Woman: I was cooking dinner when the telephone rang. It was my mother.';
const l6='Man: Yesterday our bus stopped because a tree was blocking the road. We arrived at the hotel late.';
add('listening','Listening',2,'How many kilos of tomatoes does the woman need?','two',{script:l1,voice:'female',options:['One','Two','Three']});
add('listening','Listening',1,'How is the man going to work today?','walking',{script:l2,voice:'male',options:['By bus','Walking','By car']});
add('listening','Listening',3,'Which city is smaller?','loja',{script:l3,voice:'female',options:['Quito','Loja','Guayaquil']});
add('listening','Listening',4,'What did the man use to do on weekends?','play football',{script:l4,voice:'male',options:['Play football','Go shopping','Study English']});
add('listening','Listening',5,'What was the woman doing when the phone rang?','cooking dinner',{script:l5,voice:'female',options:['Sleeping','Cooking dinner','Walking']});
add('listening','Listening',5,'Why did the bus stop?','a tree was blocking the road',{script:l6,voice:'male',options:['A tree was blocking the road','The driver was tired','There was no petrol']});
// 4 matching: each item one pair
add('matching','Vocabulary',1,'Match the phrase with its meaning.','travel from home to work',{term:'commute',options:['travel from home to work','go to sleep','eat lunch']});
add('matching','Vocabulary',2,'Match the phrase with its meaning.','food that is not old',{term:'fresh produce',options:['food that is not old','a large bridge','a past habit']});
add('matching','Vocabulary',3,'Match the phrase with its meaning.','a low area between mountains',{term:'valley',options:['a place to sleep','a low area between mountains','a busy street']});
add('matching','Vocabulary',5,'Match the phrase with its meaning.','not safe to walk on because it is wet or smooth',{term:'slippery',options:['very hot','not safe to walk on because it is wet or smooth','very expensive']});
if(Q.length!==50)throw Error('Expected 50, got '+Q.length);
module.exports=Q;
