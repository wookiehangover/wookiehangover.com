## Abstraction &amp; Concretions

Lately, I'm always catching myself talking about dependency inversion. It's one of the things I say all the time to sound smart. It sounds fancy and it's quite conveniently a pretty groovy way of framing things most of the time.

_Almost every answer you get out of me will contain some amount of dependency inversion._

It's a fancy idiom for a simple concept:

> Depend on abstractions rather than concretions.

Great, another word-jumble that's we need to sit down and unpack.

Let's start with the first word, **"depend"**: What are we depending on? Exactly! What are we building? Clearly it's not isolated, which must mean it's something in the real world that needs to interact with something else or we wouldn't be getting told this platitude<sup>2</sup>. Ok, so this establishes us as a being in the universe while also asserting the existential need for the _other_. Combine that with the preposition "on" and, heck, we're _depending on them!_

Unfortunately then things take a bit of a interesting turn next:

**"Abstractions."**

Jeez, that's a mouthful. And... a little tough to define. What is an abstraction anyway? In software, you can say an abstraction is anything that will allow you a measure of control over how you're interacting with another entity. It's why we use an API sdk instead of making raw HTTP requests. For that matter, it's why we use HTTP requests instead of raw TCP socket connections in the first place. It's why so many programming languages compile to C. This pattern repeats itself infinitely; it's inherent to all computing.

> We're only 2 words in and we're already talking about otherness and the fundamentals of computing.

Great advice, Sam, everyone's surely nodding along by now, since you're probably (definitely) not bothering to mansplain this at every conceivable opportunity.

It's good for us then that the next two words are a bit easier to parse. "Rather than," simple enough. The direct object preceding this _has gotta_ be preferable to whatever's coming up next.

**"Concretions."**

That's just not something people say, like, ever. Similar to "orthogonal," it has no place in any conversation other than when you want to sound smart and use a polysyllabic SAT word.

Too bad for us, this one is a pretty good fit as a contrast to "abstractions." Concrete such a good antonym of abstract it kills me:

* Concrete is hard, rigid; Abstract is fluid, vaporous.
* Concrete is something direct and heavy; Abstract is something ephemeral and empty.
* Concrete is a solid impenetrable mass; Abstract is a room that allows a concept to exist.

And so on.

Assembling all this together gives you, in my opinion, a piece of truly sage-like wisdom: don't depend on anything but yourself. That's what separating the abstract from the concrete means. If you rely on the concretion _always_ being there you're forever tied to it's fate.

<aside>
  <ol>
    <li>A platitude is a platypus with attitude.</li>
  </ol>
</aside>
