import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class FAQ extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://s.imgur.com/min/embed.js";
    script.async = true;

    document.body.appendChild(script);

    for (var i = 0; i < 100; i++) {
    	this.showFAQ(i);
    }
	}

	showFAQ(id) {
		if (!document.getElementById("faq-answer-" + id)) return

		if (document.getElementById("faq-answer-" + id).style.display === "block") {
			document.getElementById("faq-title-" + id).style.color = "#82817D";
			document.getElementById("faq-title-" + id).style.marginTop = "0px";
			document.getElementById("faq-answer-" + id).style.display = "none";
			document.getElementById("faq-item-" + id).classList.remove("active-item");
		} else {
			document.getElementById("faq-title-" + id).style.color = "black";
			document.getElementById("faq-title-" + id).style.marginTop = "20px";
			document.getElementById("faq-answer-" + id).style.display = "block";
			document.getElementById("faq-item-" + id).classList.add("active-item");
		}
	}

	render() {
		return (
			<div>
				<div className="hero">
					<div className="header">DMT: THE SPIRIT MOLECULE</div>
				</div>
				<div className="faq-bottom-container">
					<div>
						<p className="faq-section-title">DMT 101&nbsp; <span role="img">📚</span></p>
						<div className="faq-item" id="faq-item-2" onClick={() => { this.showFAQ(2) }}>
							<p className="faq-title" id="faq-title-2">What is DMT?</p>
							<p className="faq-answer" id="faq-answer-2" onClick={(e) => { e.stopPropagation(); }}>DMT (<i>Dimethyltryptamine</i>) is a naturally occurring drug — and is classed under the umbrella of drugs commonly referred to as <a className="link" target="_blank" href="https://en.wikipedia.org/wiki/Psychedelic_drug">“psychedelics”</a>. Psychedelics are known for the spiritual and mind-expanding experiences they can provide to users. DMT is often considered to be one of the world’s most powerful and profound psychedelic <sup className="source"><a href="https://www.therecoveryvillage.com/drug-addiction/dmt-addiction/#gref" target="_blank">1</a></sup> — it is difficult to come by, and is mostly used by frequent psychedelic users (AKA "psychonauts").</p>
						</div>
						<div className="faq-item" id="faq-item-3" onClick={() => { this.showFAQ(3) }}>
							<p className="faq-title" id="faq-title-3">Why is DMT "The Spirit Molecule"?</p>
							<p className="faq-answer" id="faq-answer-3" onClick={(e) => { e.stopPropagation(); }}>
								The term was coined by Rick Strassman — a professor & medical doctor who published the very book <a className="link" href="http://www.organiclab.narod.ru/books/DMT-The-spirit-molecule.pdf" target="_blank">DMT: The Spirit Molecule</a>.

								<blockquote className="quote" cite="https://en.wikipedia.org/wiki/Rick_Strassman#Research_into_DMT">
								Strassman came to refer to DMT as the "spirit molecule" because its effects include many features of religious experience, such as visions, voices, disembodied consciousness, powerful emotions, novel insights, and feelings of overwhelming significance.
								</blockquote>
								<p className="quote-ref"><a className="link" href="https://en.wikipedia.org/wiki/Rick_Strassman#Research_into_DMT" target="_blank"><i>— Wikipedia: Rick Strassman, Research into DMT</i></a></p>
						</p>
						</div>
						<div className="faq-item" id="faq-item-4" onClick={() => { this.showFAQ(4) }}>
							<p className="faq-title" id="faq-title-4">What does DMT look like?</p>
							<p className="faq-answer" id="faq-answer-4" onClick={(e) => { e.stopPropagation(); }}>

								<p>In molecule form: &nbsp;<sup className="source"><a href="https://en.wikipedia.org/wiki/File:DMT.svg" target="_blank">2</a></sup></p>

								<img className="ref-image" src="https://upload.wikimedia.org/wikipedia/commons/8/88/DMT.svg"/>

								<p>And as a GIF: &nbsp;<sup className="source"><a href="https://en.wikipedia.org/wiki/File:Dimethyltryptamine_27feb.gif" target="_blank">3</a></sup></p>

								<img className="ref-image" src="https://upload.wikimedia.org/wikipedia/commons/4/47/Dimethyltryptamine_27feb.gif"/>

								<p>As a crystal: &nbsp;<sup className="source"><a href="https://mycotopia.net/uploads/monthly_01_2012/post-51868-138194287916.jpg" target="_blank">4</a></sup></p>

								<img className="ref-image" src="https://mycotopia.net/uploads/monthly_01_2012/post-51868-138194287916.jpg"/>

								<p>Before it is smoked: &nbsp;<sup className="source"><a href="https://www.northpointrecovery.com/blog/dmt-trip-one-wont-want-take/" target="_blank">5</a></sup></p>

								<img className="ref-image" src="https://www.northpointrecovery.com/blog/wp-content/uploads/2017/06/what-is-dmt.jpg"/>
							</p>
						</div>
						<div className="faq-item" id="faq-item-5" onClick={() => { this.showFAQ(5) }}>
							<p className="faq-title" id="faq-title-5">Is DMT legal?</p>
							<p className="faq-answer" id="faq-answer-5" onClick={(e) => { e.stopPropagation(); }}>DMT is <strong>NOT</strong> legal in the USA (to possess, produce, or sell), and has not been legal since 1966. It is classed as a schedule 1 hallucinogen. <sup className="source"><a href="http://www.dmtsite.com/dmt/information/law.html" target="_blank">6</a></sup>
							</p>
						</div>
						<div className="faq-item" id="faq-item-6" onClick={() => { this.showFAQ(6) }}>
							<p className="faq-title" id="faq-title-6">Is DMT addictive?</p>
							<p className="faq-answer" id="faq-answer-6" onClick={(e) => { e.stopPropagation(); }}>Despite being a schedule 1 drug, it is virtually impossible to become physically dependent on DMT. <sup className="source"><a href="https://www.ashwoodrecovery.com/addiction-information/dmt-addiction.php" target="_blank">7</a></sup> There is potential for psychological addiction, but DMT experiences can be so intense, profound, strange, and often times unsettling that — for majority of people — this is highly unlikely.</p>
						</div>

						<p className="faq-section-title">The DMT Experience&nbsp; <span role="img">👽</span></p>
						<div className="faq-item" id="faq-item-7" onClick={() => { this.showFAQ(7) }}>
							<p className="faq-title" id="faq-title-7">What is the DMT experience like?</p>
							<p className="faq-answer" id="faq-answer-7" onClick={(e) => { e.stopPropagation(); }}>Every DMT experience is different, but there are underlying commonalities — users report observing infinite color fractals, visiting different dimensions, losing sense of self, communicating with omniscient entities, learning secrets about reality, etc. This happens when a user "breaks through" — when they've quickly consumed enough to snap into the DMT hyperspace. Truly, a DMT experience is impossible to convey in human language; it extends beyond our understanding of reality.

								<blockquote className="quote" cite="">Metaphorically, DMT is like an intellectual black hole in that once one knows about it, it is very hard for others to understand what one is talking about. One cannot be heard. The more one is able to articulate what it is, the less others are able to understand. This is why I think people who attain enlightenment, if we may for a moment comap these two, are silent. They are silent because we cannot understand them. Why the phenomenon of tryptamine ecstasy has not been looked at by scientists, thrill seekers, or anyone else, I am not sure, but I recommend it to your attention.
								</blockquote>
								<p className="quote-ref"><i>— Terrence McKenna, renown psychedelic expert</i></p>
							</p>
						</div>
						<div className="faq-item" id="faq-item-8" onClick={() => { this.showFAQ(8) }}>
							<p className="faq-title" id="faq-title-8">How long is the DMT experience?</p>
							<p className="faq-answer" id="faq-answer-8" onClick={(e) => { e.stopPropagation(); }}>
								DMT usually hits almost instantly, and the DMT experience — from an outsiders perspective — lasts anywhere from 5-20 minutes. <sup className="source"><a href="https://www.themix.org.uk/drink-and-drugs/drugs-a-z/dmt-9971.html" target="_blank">8</a></sup> For the user, however, depending on the dose the experience could feel like days. In fact, time loses meaning to the extent that it could feel like an eternity.
							</p>
						</div>
						<div className="faq-item" id="faq-item-9" onClick={() => { this.showFAQ(9) }}>
							<p className="faq-title" id="faq-title-9">What do people say about their DMT experiences?</p>
							<p className="faq-answer" id="faq-answer-9" onClick={(e) => { e.stopPropagation(); }}>
								Many things. Here are five cool extracts from an online collection of <a className="link" href="http://www.serendipity.li/dmt/340_dmt_trip_reports.htm#10" target="_blank">340 DMT Trip Reports</a>, with an emphasis on entity interaction.

		            	<div class="notepaper">
		            		<strong>Report #7</strong>
		            		<br/>

							      This time I was swept under a door crack and taken into a dark corridor. Everything around me was black, except for the beings, who appeared to be brightly glowing blue light beings. This time I was not greeted per se, but rather they were all doing yoga. There were several of them, poised in mannequin-like yoga positions, and sharing their wisdom through my attentiveness. I felt confused by their desire to teach me yoga, and questioned the message I was being sent. I was shown the door through which I had originally slipped under, but chose to stay and learn from them. However, after several minutes of watching them perform yoga I directed myself back towards the door. It seemed as if I was not quite prepared to hear the message, as was the case with my first trip.
									</div>

			            <div class="notepaper">
				            <strong>Report #16</strong>
				            <br/>

							      All I saw with my eyes closed were these geometric shapes that were all interlocked and gracefully flowing. The color of these shapes was like clear crystal. Each had droplets of other colors within them: blue, pink, red, green. My vision was in 3-D. Some shapes were in the foreground, others in the background. Slowly they would switch from foreground to background. I was aware of nothing else but this vision. I had no memory of anything else. I had no point of reference anymore other than this vision. Nothing else existed. This was my entire universe at that moment.
									</div>

		            	<div class="notepaper">
			            	<strong>Report #21</strong>
			            	<br/>

	                  I had left my body & ego, my memories, morals and fears, and I had entered Nirvana. I was home. Flying through a multidimensional place of pure vision and thought, I saw endless arches of golden salamanders, flowing through the very fabric of space & time, their colors changing and rotating like countless kaleidoscopes, smiling and looking at me. My form and vision were shifting all the time, and I saw countless non-defined being, animals, flowers, trees, jewels and crystals, while the salamanders were telling and showing me the secret of life. Heavenly music, harp-strings and choirs ad infinitum were caressing my mental g-spot. There were no questions anymore, all was answered, and there was eternal unity. I was omnipotent. I was the universe. And the universe laughed and laughed, about itself and the joke of life it pulled on it! The most beautiful place in the universe, and I had found it! It's soooo sweet, soooo beautifull and loving, it's magic.
							    </div>

							    <div class="notepaper">
								    <strong>Report #270</strong>
			            	<br/>

	                  I lost all my bearings; I knew I was once again in that familiar place known as hyperspace but I forgot who I was and how I got there. I was in absolutely awe as this 'web' morphed into what appeared as a plasma octopoid with flailing appendages similar to tentacles that were moving VERY fast and appeared to be tending to some task quite dilligently. In addition when these tentacles would move they would emit a reverberating set of tones each movement produced a unique set of harmonic audio expressions. Soon I became aware that this 'octopoid' was actually redirecting my awareness to these *incredible* structures that were made with his appendages/harmonic manipulations. Each time my attention would come to rest I would suddenly feel my awareness redirected to another structure being built that was more spectacular than the last. Before long I noticed a pressure in my center and I realized once again I was contained in a physical vehicle and that I was perceiving the weight of my hands interlaced on my solar plexus. My ego was reassembling itself and the web/octopoid simultaneously was losing its animate life-like qualities.
							    </div>

							    <div class="notepaper">
								    <strong>Report #289</strong>
			            	<br/>

	                  As soon as felt the rush (for lack of a better term) I leaned back and closed my eyes. Within seconds it felt as though I was being pulled into myself and at the same time my entire being was expanding out through the universe. The visuals at this point seemed to match this feeling, as if traveling through space at warp speed with far off galaxies rushing by. The expanding feeling stopped rather sharply and was replaced with a sense of ease that I can't even begin to describe. As this new feeling settled in I began to see myself among the swirling images racing by. As the feeling of peace got deeper and deeper my form sitting across from me began telling me that everything was OK, life is life, it was nothing to fear. It's crazy but this was exactly what I needed to hear, and, as soon as the words where spoken a rush of happiness/love overwhelmed me. It felt as though my body was going to explode into millions of pieces from the emotions building inside.
							    </div>
							</p>
						</div>
						<div className="faq-item" id="faq-item-10" onClick={() => { this.showFAQ(10) }}>
							<p className="faq-title" id="faq-title-10">Are these experiences... real?</p>
							<p className="faq-answer" id="faq-answer-10" onClick={(e) => { e.stopPropagation(); }}>Nobody knows. Some — especially psychonauts like Rick Strassman — believe that the DMT hyperspace and the entities in it are real. It is said that a DMT experience can feel so profound, meaningful, and truthful that it wins over those who never believed in spirituality. The unmistakable connections between DMT experiences seems even more unexplainable.
							<br/>
							<br/>
							Yet, others theorize that DMT simply produces remarkably strong effects on human brain chemistry, drawing comparisons to dream states. The <i>feeling</i> of meaningfulness in these intense visual stimuli might not correlate to real meaning; this is known as "apophenia". Entities might appear due to the brains' cognitive tendency to look for anthropomorphic patterns in things, our imaginative power, and data from our unconscious mind. <sup className="source"><a href="https://www.psychologytoday.com/us/blog/unique-everybody-else/201408/dmt-gateway-reality-fantasy-or-what" target="_blank">10</a></sup></p>
						</div>
						<div className="faq-item" id="faq-item-11" onClick={() => { this.showFAQ(11) }}>
							<p className="faq-title" id="faq-title-11">What can these experiences inform us about our condition?</p>
							<p className="faq-answer" id="faq-answer-11" onClick={(e) => { e.stopPropagation(); }}>This is a more interesting question. Both on DMT, and off DMT, we are perceiving reality through our sensory perception tools. A drug like DMT alters these tools; but we still don't know if these tools give us a true window to reality, and in which state these tools give the truer window.

							<br/>
							<br/>

							Perhaps DMT lets us observe reality in a less filtered, more chaotic, and all-encompassing form. Perhaps it doesn't! If DMT doesn't project us into a new dimension, perhaps it feeds into our unconscious mind and lets us unlock things about ourselves represented and manifested in the mystical hyperspace; this is why many report that DMT trips have helped them make important changes in their lives.

							<br/>
							<br/>

							By reading DMT reports, we can surely start to formulate questions about the power of the human mind and our interaction with reality.</p>
						</div>

						<p className="faq-section-title">DMT: Some Context&nbsp; <span role="img">☮️</span></p>
						<div className="faq-item" id="faq-item-13" onClick={() => { this.showFAQ(13) }}>
							<p className="faq-title" id="faq-title-13" onClick={(e) => { e.stopPropagation(); }}>What’s the history of DMT?</p>
							<p className="faq-answer" id="faq-answer-13">
								<div class="timeline">
								  <div class="container left">
								    <div class="content">
								      <p><strong>Late 8th Century</strong></p>
								      <p>DMT found in Chile burial site</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1496</strong></p>
								      <p>DMT found to be used by tribes in Haiti/Dominican Republic</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>16th Century</strong></p>
								      <p>Columbia natives start using DMT</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1560</strong></p>
								      <p>Native Indians start using DMT</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1931</strong></p>
								      <p>DMT made for the first time by Richard Manske</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1955</strong></p>
								      <p>DMT discovered to be naturally occurring</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1956</strong></p>
								      <p>First DMT researcher Stephen Szára discovers DMT’s psychoactive properties</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1965</strong></p>
								      <p>5-MeO-DMT found to be naturally occurring</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1966</strong></p>
								      <p>DMT made illegal in the US</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>1972</strong></p>
								      <p>DMT found to naturally occur in the human body</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>Early 1990's</strong></p>
								      <p>DMT used for addiction treatment in institutions</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>2001</strong></p>
								      <p>Rick Strassman  publishes DMT: The Spirit Molecule</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>Jan 2011</strong></p>
								      <p>5-MeO-DMT made illegal in the US</p>
								    </div>
								  </div>
								  <div class="container left">
								    <div class="content">
								      <p><strong>Oct 2018</strong></p>
								      <p>DMT.FYI goes live</p>
								    </div>
								  </div>
								</div>
								<sup style={{"float": "right"}} className="source"><a href="http://www.dmtsite.com/dmt/information/timeline.html" target="_blank">11</a></sup>
							</p>
						</div>
						<div className="faq-item" id="faq-item-16" onClick={() => { this.showFAQ(16) }}>
							<p className="faq-title" id="faq-title-16">Does DMT have any religious ties?</p>
							<p className="faq-answer" id="faq-answer-16" onClick={(e) => { e.stopPropagation(); }}>
								Absolutely. DMT is the main ingredient used in a drink called Ayahuasca. Ayahuasca is widely used by the Amazon basin indigenous tribes. It is specifically used during Shamanic rituals, where "shamans" conduct a ceremony centered around consumption of the drink and the spiritual journey following it. Ayahuasca extends the DMT trip to hours, and is extremely phyiscally tolling on the body. <sup className="source"><a href="https://en.wikipedia.org/wiki/Ayahuasca" target="_blank">12</a></sup>

								<br/>
								<br/>

								<iframe width="100%" height="315" src="https://www.youtube.com/embed/aaOfFixoxP8">
								</iframe>
							</p>
						</div>
						<div className="faq-item" id="faq-item-14" onClick={() => { this.showFAQ(14) }}>
							<p className="faq-title" id="faq-title-14">What is 5-MeO-DMT?</p>
							<p className="faq-answer" id="faq-answer-14" onClick={(e) => { e.stopPropagation(); }}>
								Good question! There are actually <i>two</i> types of DMT: our good ol' DMT — <i>N,N-Dimethyltryptamine</i> — and <i>5-methoxy-N,N-dimethyltryptamine</i>, or 5-MeO-DMT for short. 5-MeO-DMT is commonly known as "The God Molecule"; it's more potent than regular DMT but produces less intense visuals. It's also considered more dangerous than regular DMT. <sup className="source"><a href="http://www.psychedelicheaven.com/2018/06/13/dmt-vs-5-meo-dmt/" target="_blank">13</a></sup> <sup className="source"><a href="https://upload.wikimedia.org/wikipedia/commons/b/b8/5-MeO-DMT.svg" target="_blank">14</a></sup>


								<br/>
								<br/>

								<img className="ref-image" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/5-MeO-DMT.svg"/>

								<br/>
								<br/>

								5-MeO-DMT is known less for projecting users into an eventful entity-inhabited hyperspace, and more for completely destroying the user's sense of self and merging the user with the entirety of the universe and the universe's energy — somewhat like becoming God. A lot of users report feeling an overwhelming sense of void while peaking on 5-MeO-DMT. <sup className="source"><a href="https://psychedelictimes.com/psychedelics/what-is-the-difference-between-5-meo-dmt-and-dmt-choosing-a-dmt-therapy/" target="_blank">15</a></sup>
							</p>
						</div>
						<div className="faq-item" id="faq-item-18" onClick={() => { this.showFAQ(18) }}>
							<p className="faq-title" id="faq-title-18">Is it true that DMT exists in humans?</p>
							<p className="faq-answer" id="faq-answer-18" onClick={(e) => { e.stopPropagation(); }}>
								Yes. DMT is produced in the brain. Some speculate that during, or near, death, DMT is released in the brain. Before breaking through and entering the DMT hyperspace, many DMT users report traveling down a tunnel of white light. This white light tunnel is also a feature of many near death accounts. In fact, many DMT users report feeling as if they had died or were dying during their trip — and scientists <a href="https://www.bbc.co.uk/bbcthree/article/dd52796e-5935-414e-af0c-de9686d02afa" className="link" target="_blank">agree with this</a>.
							</p>
						</div>
						<div className="faq-item" id="faq-item-17" onClick={() => { this.showFAQ(17) }}>
							<p className="faq-title" id="faq-title-17">Can I appreciate some DMT visualizations?</p>
							<p className="faq-answer" id="faq-answer-17" onClick={(e) => { e.stopPropagation(); }}>
								Of course.

								<blockquote className="quote" cite="https://www.reddit.com/r/replications/comments/31skva/dmt_gif_album_oc/crerumj">If you took everyone one of those and played them back to back in my brain while inserting a woman dancing and speaking some alien language this would be pretty damn dead on</blockquote>
								<p className="quote-ref-small"><a className="link" href="https://www.reddit.com/r/replications/comments/31skva/dmt_gif_album_oc/crerumj" target="_blank"><i>— SIDKITTEH on Reddit</i></a></p>
								<img className="visual" src="https://i.imgur.com/5v7DZHP.gif"/>
								<img className="visual" src="https://i.imgur.com/lrsU9PU.gif"/>
								<img className="visual" src="https://i.imgur.com/winYRAx.gif"/>
								<img className="visual" src="https://i.imgur.com/u8Pwy8q.gif"/>
								<img className="visual" src="https://i.imgur.com/tQ0NSOd.gif"/>

								<br/>
								<br/>

								Check out more of these <a className="link" href="https://imgur.com/a/h685L" target="_blank">trippy GIFs</a>!
							</p>
						</div>

						<p className="faq-section-title" id="betting-section-title">DMT & You&nbsp; <span role="img">👊</span></p>
						<div className="faq-item" id="faq-item-23" onClick={() => { this.showFAQ(23) }}>
							<p className="faq-title" id="faq-title-23">Should I take DMT?</p>
							<p className="faq-answer" id="faq-answer-23" onClick={(e) => { e.stopPropagation(); }}>Only if you feel that you are ready... for the world's <i>strongest</i> psychedelic. Only if you don't have a predisposition towards psychosis. Only if you are prepared for the risks associated with acquiring, and taking, DMT. Only if you feel you have something to genuinely gain from the experience. Only if you are serious about it, have thought it through, and are fully committed to it. And only if <strong>YOU</strong> want to.</p>
						</div>
						<div className="faq-item" id="faq-item-24" onClick={() => { this.showFAQ(24) }}>
							<p className="faq-title" id="faq-title-24">Why take DMT? Why not?</p>
							<p className="faq-answer" id="faq-answer-24" onClick={(e) => { e.stopPropagation(); }}>
								<strong>Why take DMT?</strong> You can learn more about yourself and improve your life; you can undergo a transformative spiritual journey; you can develop new perspectives on life and the universe; you can expose yourself to an experience like no other; you can attain mental clarity; if you're an addict, you could cure your addiction; if you are depressed, you could cure your depression. These are all real things.
								<br/>
								<br/>
								<strong>Why not?</strong> Because it is <strong>ILLEGAL</strong>; because you might not be ready for it; you could experience something wildly terrifying, unsettling, upsetting; you could emotionally scar yourself, short-term and long-term; you could become belligerent during your trip (it has happened); you could come back a different person you entered, and you might not be prepared for that; just like it could make things better, it could make things worse. These are all <i>very</i> real things.
								<br/>
								<br/>
								People regret taking DMT. Others say it revolutionized their life. Be smart going into it — and hope for the best.
							</p>
						</div>
						<div className="faq-item" id="faq-item-25" onClick={() => { this.showFAQ(25) }}>
							<p className="faq-title" id="faq-title-25">How do I take DMT?</p>
							<p className="faq-answer" id="faq-answer-25" onClick={(e) => { e.stopPropagation(); }}>
								You can smoke, snort, ingest, or inject DMT. The YouTube channel PsychedSubstance has an excellent crash course on how to smoke DMT safely. It is not worth attempting to duplicate the information over here. The delivery would not be as convincing, or effective. Watching this video before taking DMT is absolutely paramount. Please test your DMT (to make sure it really is DMT), using a <a href="https://testkitplus.com/?ap_id=psychedsubstance" className="link">DMT Test Kit</a>, before taking it.
								<br/>
								<br/>
								<iframe width="100%" height="315" src="https://www.youtube.com/embed/hHmU0-2Txbc">
								</iframe>
							</p>
						</div>
						<div className="faq-item" id="faq-item-26" onClick={() => { this.showFAQ(26) }}>
							<p className="faq-title" id="faq-title-26">What advice do DMT pros have for DMT noobs?</p>
							<p className="faq-answer" id="faq-answer-26" onClick={(e) => { e.stopPropagation(); }}>
								Psychonauts are nice people. This <a className="link" href="https://www.reddit.com/r/DMT/comments/304dgp/please_post_your_advice_for_first_timers_here/">Reddit thread</a> has a ton of great advice. The five best tips are compiled below.
								<div class="notepaper">
		            		The first thing to know, and probably the most important, everything will be okay! No matter what happens, so long as you dose correctly (and even if you don't, to a degree), you will be totally fine. The medicine will take care of you, the universe will keep you safe. While the experience is indescribable and wild, your body will be perfectly fine. Wherever you go during the experience, you will come back in about 5 minutes.
									</div>
									<div class="notepaper">
		            		Do this on a good day, when your headspace is relatively clear, no responsibilities, not much to worry about. Do it in a good place where you feel comfortable, either alone or with people you trust. I recommend doing this with no music, as I feel like it forces you into reality for the beginning part of the trip. Though what really matters is what makes you comfortable!
									</div>
									<div class="notepaper">
		            		Assuming you took "the third hit", are you willing to surrender yourself? Letting go is the most important step in the process. It can mean the difference between being ripped apart (metaphorically of course) or being pulled out of yourself and into a beautiful experience. I prefer the latter, and it's easier to achieve than you might think! Just don't worry, remember the medicine wants to take you somewhere beautiful. I've struggled with this at times, relinquishing control is scary, and might require some practice.
									</div>
									<div class="notepaper">
		            		One thing I did when I really started to freak out during the trip was focus on my breathing - much in the same way you're instructed to breath during meditation or yoga. No matter how scared you are, no matter how sure you are that you are dying, the sensation of breathing will remind you everything is okay and it'll all be over soon. This is a good way to snap yourself out of being fearful, as fear will cloud your ability to interpret and enjoy the experience.
									</div>
									<div class="notepaper">
		            		Let go.
									</div>
								</p>
							</div>
							<div className="faq-item" id="faq-item-27" onClick={() => { this.showFAQ(27) }}>
								<p className="faq-title" id="faq-title-27">OK, so how can I get some DMT?</p>
								<p className="faq-answer" id="faq-answer-27" onClick={(e) => { e.stopPropagation(); }}>
									They say not to search for it — for, when the time is right, DMT will find you. 🙏
									<br/>
									<br/>
									(You can also try the dark net.)
									<br/>
									<br/>
									Good luck!
								</p>
							</div>
					</div>
				</div>
				<p style={{"color": "#eb4d4b", "font-weight": "bold", "font-size": "20px", "text-align": "center", "margin-top": "-60px", "margin-bottom": "40px"}}>🌈</p>
			</div>
		)
	}
}

export default FAQ;
