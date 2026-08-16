function Similarity(a, b) { //NUSOI.... WHAT IS THIS....
  if (a === b) return 1;
  if (a.length === 0 || b.length === 0) return 0;
  
  let matrix = [];
  
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  let distance = matrix[b.length][a.length];
  let maxLength = Math.max(a.length, b.length);
  
  return 1 - distance / maxLength;
}
function wordLevenmergenshmergenbergsteinGoldistance(seqA, seqB){//last function but more israeli
  let m = seqA.length;
  let n = seqB.length;
  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;//deletions
  for (let j = 0; j <= n; j++) dp[0][j] = j;//insertions

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (seqA[i - 1] === seqB[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; 
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],   
          dp[i][j - 1],    
          dp[i - 1][j - 1] 
        );
      }
    }
  }
  return dp[m][n];
}
let ack = [
    `ok everyone I would like to make it very clear that we are not racist for saying the n word we are being honest not to forget 
	that we honestly have nothing against Black people or people of “black culture” we are being honest and are not sugarcoating 
	the truth about bonziworld and that it is generally considered a brutal place while all of you are thinking bonziworld is just
	some lala land hugbox it isn’t. It is a a place where a series  law breaking actions have occurred such as pedophilia, sending 
	pornographic images to people under the age of 18 and also real life gore here at bia we do not agree with any of these law 
	breaking actions and they should immediately be stopped also to address the elephant in the room we are not homophones we actually
	are lgbt supporters members such as @the real shokozo who is a femboy and also @W FAPS? who is pansexual making fun of a 
	pedophile for their actions is not a hate crime`,
    `honestly im not even going to keep makeing excuses up and i know you probably will just completely ignore or just throw me 
	overboard but like im honestly worried about legal trouble me is going schizo thats why i have been minimizing myself from 
	any hardcore bullshit and like all jokes aside it’s kinda fucked what we are doing like making babies do bwis bidding or
	whatever and like after what happened with my last chimp out i get that you were pissed but now im just worried that
	you’re going to just blame everything terrible on me and make up bull shit like seriously this is something that fune
	would do but yet you say you hate him then you turn right around and literally copy fune
Like literally look at blue eye stickman he was somewhat normal then boom now he’s just a fucking drone`,
`warning please listen to this message if your listening to this on bw please do not cancel it. It is extremely important that 
you hear this. The TAO has been popping off it lately claiming to work with the bia those statements are completely false. We 
have nothing to do with them as a matter of fact, we are enemies with these people for the  following reasons being that these 
people are satanic worshipers pro Palestine and also has been confirmed to have attachments with seamus aka Jenny and the GSL
 and even the UTTP yes that’s right. They are attempting to revive the legacy. Of the uttp on discord and use the vulnerable
 bonziworld members to manipulate into joining there confirmed cp ring do not engage with any tao activities immediately 
 report all activities to BIA thank you - JOEL!`,
 `Jim megatron has just talked sexually to what he thought was a 12 year old girl luckily it was just our bia decoys  
 like this could actually happen to a real kid I will not show the screenshots to protect your eyes from a pure cancer,
 but I will still show evidence that isn’t pure cancer, but I will still show evidence that he did furry ERPs to the decoy 
 as well as send several dick pics`,
 `goyim survival tutorial 2025-2030: become a journalist do not ever write true facts only kiss trumps ass and all other 
 billionaire corporate elite write a beautiful article The truth is no longer only loyalty and this is the only way to ever
 live in a stable life minimum wage jobs will not even get you a studio apartment homelessness will become  hopelessness 
 so prepare to be lined up by the police department to be hanged if you are black unfortunately you cannot hide it like
 trans people with a couple pounds of make up so you better put that Trump make America great again hat on it might take 
 them a while to realize that you’re black. Additionally christianity is only used for brainwashing Christianity is used 
 for bait to make the poor stay poor to make sure they never had the chance of ever becoming rich Jewish elite billionaire 
 so the only stable life you can actually live is to move to isreal and be rich and Jewish all other countries will beet 
 you down and make you suffer 
`,
`BIA is funded by V-tech, Panasonic , Sony , Sega , taxpayers money , IBM`,
`plus we never forced anyone to join bia. the bia and the bwhq are two separate entities The server is the bwhq 
which is the main source of bw information content and more, however bia is a part of the bwhq with there are 
several branches of the bwhq with bia being one of them
this server is literally meant to be a hub for the millions of other bonzi agencies and groups`,
`is jim’s larp he is exposed  for being secret child porn gcs with bwr attempting to larp his ways up the ranks 
and for that shame on you pedophilic furry you failed to get your revenge and we continue to expose pedophiles 
just like you everyone publicly shame him immediately your days are over
Jim Megatron detained successfully for the second time`,
`operation hugbox is successfully now in place task: 1. make a bonziworld server 2. Overthrow bonzi.gay 3. Bonziwald monopoly continues`,
`we are aware of the massive floods that have been going on for the past few days and we would like to make it clear that it is not us the 
BIA doing this as I have seen some false accusations we understand how stressful this may be and we haven’t really dealt with a situation
like this, which this really goes to show that bonzi.gay is dieing.
for everyone who is dealing with this problem and is annoyed by it please migrate over to a safe and secure room id until a new 
official bw server can be established`,
`for everyone saying that bia is not saveing bw.gay is unfortunate because we physically cannot do anything about it bw.gay 
and the owner very well aware of it and simply does not give a shit to do anything about it Everyone abort mission immediately 
cease investigation someone make a new bw server to replace .gay immediately mandatory that we get back control anarchy is
 never always the answer and of course, because of this it backfired and now there is millions of people sending child,
 pornography, and gore to innocent people basically psychologically manipulating them and into thinking it’s normal mean that 
 this generation is fucked not saying that it already was but it’s double fucked now maybe even quadruple we need a new bw 
 server immediately everyone get on it no shitty onrender crap we need an actual sustainable domain 
`
];


let seperators = ['.','!','?',','];
let pairCache = [];
function nextTokenWhyDoesChromeMakeThisFunctionApartOfTheFuckingWindowObjectOnItsOwn(input,corpus,contextRange=10){
	let variety = 0.5;
    let inputTokens = input.toLowerCase().match(/\b[\w']+\b/g) || [];
	pairCache = [];
    corpus.forEach(corpusEntry => {
        let corpusTokens = corpusEntry.split(' ').map(r => r.replaceAll('\n','').replaceAll('\t','')).filter(r => r.length > 0);
		//console.log(corpusTokens);
       
        let shitContext = (i) => {
            let r = corpusTokens.slice(i-(contextRange/2),i+(contextRange/2)).join(' ');
			return r;
        };
		let deSeperate = (token) => {let r = token; seperators.forEach(seperatorType => {r=r.replaceAll(seperatorType,'');}); return r;};
        corpusTokens.forEach((corpusToken,i) => {
			let isSeperated = false;
			let currentSeperator = '';
			seperators.forEach(seperatorType => { if(corpusToken.includes(seperatorType)){ isSeperated=true;  currentSeperator = seperatorType;	 } });
			
			corpusToken = deSeperate(corpusToken);
            pairCache.push({
                current:corpusToken,
                next: typeof corpusTokens[i+1] == 'undefined' ? '' : deSeperate(corpusTokens[i+1]),
                previous: typeof corpusTokens[i-1] == 'undefined' ? '' : deSeperate(corpusTokens[i-1]),
                context: shitContext(i),
				seperator:currentSeperator
            });
        });
    });

    let suitablePairs = [];
	let lastInputToken = inputTokens[inputTokens.length-1];
	
	if(pairCache.length < 1)console.error('add training data or bia in partnership with ibm sony microsoft confiscate your  goon folder');
	if(pairCache.length < 3)console.error('add more than  2 words to training data you fuckig numb nuts')
    pairCache.forEach(pairObject => {
        let currentToken = pairObject.current;
        if(	
			pairObject.next.length > 0 && (
            currentToken.toLowerCase() == lastInputToken.toLowerCase() 
			||
			Similarity(currentToken.toLowerCase(),lastInputToken.toLowerCase()) > 0.75
			)
		){
			suitablePairs.push(pairObject);
		}
    });
	if(suitablePairs.length < 1){
		pairCache.sort((a,b) => Similarity(b.current,lastInputToken)-Similarity(a.current,lastInputToken));
		suitablePairs.push(pairCache[0]); suitablePairs.push(pairCache[1]); suitablePairs.push(pairCache[2]); 
	}
	
	let inputContext = inputTokens.slice(0,inputTokens.length-2).join(' ');
	let score = (a,b) => {return (Similarity(a,b)/2)+wordLevenmergenshmergenbergsteinGoldistance(a,b)};
	suitablePairs.sort((a,b)=>score(b.context,inputContext)-score(a.context,inputContext));
	
	let result = suitablePairs[Math.floor(Math.random()*(suitablePairs.length/2))];
	return {
		nextToken: result.next,
		previousPunctuation: result.seperator
	};
}
function appendageWhyDoesChromeMakeThisFunctionApartOfTheFuckingWindowObjectOnItsOwn(text, l=10){
	let allText = text;
	let predictedText = '';
	for(let i=0;i<l;i++){
		let result = nextTokenWhyDoesChromeMakeThisFunctionApartOfTheFuckingWindowObjectOnItsOwn(allText,ack);
		
		let r = (result.previousPunctuation.length > 0 ? result.previousPunctuation+' ' : ' ')+result.nextToken;
		allText+=r;
		predictedText+=r;
	}
	
	return predictedText;
}
window.trainingData = ack;
window.appendage = appendageWhyDoesChromeMakeThisFunctionApartOfTheFuckingWindowObjectOnItsOwn;
window.contextRange = 10;
window.nextToken = (inp) => {return nextTokenWhyDoesChromeMakeThisFunctionApartOfTheFuckingWindowObjectOnItsOwn(inp,window.trainingData,window.contextRange);};
