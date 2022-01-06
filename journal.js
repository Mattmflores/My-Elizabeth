class JournalEntry{
    constructor(month,day,year,hr,min){
        this.month = month
        this.day = day
        this.year = year
        this.hr = hr
        this.min = min
        this.subJournal = []
        this.heading = `${month}/${day}/${year} ${hr}:${min}`
    }
    enterJournal(){
        this.subJournal.push(this.heading, this.entry)
        journal.unshift(this.subJournal)
    }
}

let journal = []

let july152021 = new JournalEntry(07,15,2021,12,33)
july152021.entry = 'My heart sank in that moment yesterday at work. I had an unsettling feeling before that but I often did in time when Elizabeth would ignore me. I was hopeful that this would be no different and in a few days whe she has had time to recharge she would come back to me. Prior to that day I recieved a friend request from a guy I never met. He didn\'t seem like a scammer. I figured I had no real reason not to accept. What did he already know about me? I would have continued to live in ignorance if I did not accept. Was that a good or bad decision? While on lunch I see a picture of him and Elizabeth together with the caption "love you." I was so confused. How long had this been going on? Has she mentioned him before? Is this the reason why she has been ignorming me? I want to be mad but the sorrow drowns out any anger. They say temper is just the part of you that cares deeply about your well-being and is acting out to protect you. Maybe I just don\'t care enough about myself.'
july152021.enterJournal()

let july122021 = new JournalEntry(07,12,2021,21,13)
july122021.entry = `I just had my first wrestling practice. My body feels like shit but I'm so excited. Its like all the pieces of my life are starting to fall into place. My health is improving. I'm working towards a career. I'm pursuing my passions. All that I'm missing is someone to share it with. There isn't anyone else I'd like to talk to besides Elizabeth. I'm afraid I've raised one too many red flags. If only I can hold her in my arms once more and tell her how I feel. She hasn't spoken to me in days. My life is finally on an upwards trajectory but its all for not if I can't share it with her. Please come back Elizabeth.`
july122021.enterJournal()

let june242021 = new JournalEntry(06,24,2021,17,04)
june242021.entry = `My first mistake was allowing myself to hope. My next mistake was allowing myself to feel. "I know. I'm sorry. I wanted to avoid this." -her message reads. You know what? You know I'm hurting? You know because you're hurting? Sorry about what? Sorry you lead me on for so long? Sorry I'm upset? Why do I feel the need to pick apart her words? I was too easy. We chase and crush after the unattainable. She may have liked me but thats why I was not desirable. One cannot know true happiness without knowing the full effects of sadness. I console myself by telling myself that I'm just being built up for the full blessings headed my way when in reality I may just be destined to atone for my sins. The slivers of solace to remind me the true impact of my depression. So I don't become complacent in the sadness. Build me up to knock me down.`
june242021.enterJournal()

let june222021 = new JournalEntry(06,22,2021,21,46)
june222021.entry = `I read my previous entry not realising I had already wrote of Elizabeth. In the early hours of Sunday morning we shared our first kiss. With the way things currently are I wonder if it was also our last. The day was a rollercoaster. We were supposed to have our first date. After an impulsive reaction we parted ways before I succumbed only to call her not much later. She kept me waiting for about 3 hours before I finally made it to her apartment around 3am. She invited me onto the loveseat next to her. We cuddled into the night with our faces constantly caressing one another. She asked what was on my mind. "I'm wondering if your thinking what I'm thinking. I want to kiss you." "We shouldn't." After that point I don't know who initiated but I believe it was me. The kissing advanced to me sucking on her neck. As I sucked and stroked her inner thigh I could sense her arousal. I continued to creep my hands towards her vagina. Every inch I advanced I paused to gauge her reaction just to sense no hesitation. First it was over the panties. "Do you feel how wet I am for you." As the moment intensified, I found myself fingering her. At that moment she was mine. I groped her ass. Squeezed her breasts. "Do you want to suck on my nipple?" Oh I love this girl! That was 3 nights ago. Now I find myself here. She's distancing herself from me. I may not ever share her body again.`
june222021.enterJournal()

let may102021 = new JournalEntry(05,10,2021,19,11)
may102021.entry = `Will Elizabeth be remembered of will she be another temporal body I attempt to latch my heart onto. I'm so alone. My best friend is my ex-wife. It's hard speaking to someone that scarred you so deeply. So if not her, who can I turn to? All I write is of dread. I hope one day the tone of this journal changes to something more optmistic. We all have our roles. She plays the part of the beautiful damsel. He plays the part of a background extra. Ripened heart ready to be plucked. Caress my soul.`
may102021.enterJournal()

for (let i = 0; i < journal.length; i++){
    let section = document.createElement("section")
    section.classList.add("journalSection")
    let divHeader = document.createElement("div")
    divHeader.innerHTML = journal[i][0]
    let divEntry = document.createElement("div")
    divEntry.classList.add("journalDiv")
    divEntry.innerHTML = journal[i][1]
    section.append(divHeader)
    section.append(divEntry)
    document.getElementById("mainBody").append(section)
}