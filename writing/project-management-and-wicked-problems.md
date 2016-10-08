## The Wicked Problem Machine

Recently I’ve caught myself telling people that I don't wanna micromanage anyone’s code, and it's true. Hawkishly lording over every single line that's written across a team of any size isn't just futile, it's downright harmful to both the reviewer and the team.

That’s not to say code review isn’t important. It is. Only that it reduces the autonomy and agency of a team if it’s overly rigorous. People need some breathing room.

Similarly, teams are discomfited by the ambiguities and information gaps that occur in complex projects. It isn’t always easy to decide “what’s next,” so elaborate systems exist to keep  track of all the details of a project. Work is broken down and divided in an infinite number of permutations on a theme: something needs to be thought of and designed, then turned into something that “works,” then tested to ensure that it actually does “work,” and finally released to its intended audience. With more than a few people, the need for "process" always emerges, as if a law of nature somehow demands its existence.

What the heck is _process_ and why are people asking to fix it?

The problems of project management boil down to data collection. First, you need to convert plans into a list of tasks. Then, you need to convert those tasks into plans that fit some sort of schedule. Finally, you then need to track your check-ins and deploys and make sure updates make it to the task list as they occur. Simple, right?

**Teams need a way of negotiating hand-offs.** From an initial product conception to design; from design, to marketing, pr, copy, legal, and last but not least, to development; then in development, the whole cycle turns over on itself with the grind ing persistence of repetition—the 'iteration' we keep hearing so much about.

I get it. **You need to track this stuff somewhere.**

Most companies get sold big-box, enterprise-grade software for this, with enough configurable workflows and swimlanes and scrum boards and help portals to make your eyes bleed.

> Project management software is all fancy book-keeping

Like any other made-up human endeavor, that type of project management software only gives back what you put into it. You pay a high sweat-tax in order to get much use out of it; without a person dedicated to maintaining your walled-garden PM software, don't expect for it to work very well for you.

There's a disproportionate amount of work that can be dedicated to planning, estimating, and measuring software projects, and then only for strictly diminishing returns. It's a problem that takes on fractal complexity: every layer is filled with different challenges with often contradictory solutions—the very definition of a [wicked problem][wicked-problems].

You might be thinking _these tools work for my team because we_ 

1. Have enough discipline
2. Perform _X_ agile ritual correctly
3. Determine your own ship dates

Or whatever other justifications you stomach in order to sleep better at night.

> No true Scotsman is ever failed by agile

In my career I've only learned 2 things that always hold true:

1. You cannot coach enthusiasm
2. Process cannot fix social problems<sup>[2](#wicked-problems-footnote02)</sup>

Those are obviously related. And a central theme to another phrase I didn't coin but often repeat: software is easy, people are hard.

All software management systems ignore that people are simultaneously the weak link and the solution to most production pipeline problems.

**Agile rituals are degrading to individualism.**

They're the definition of groupthink and preclude the possibility of quiet, thoughtful study of a problem by forcing all work into a limiting formal structure. When applied consistently, this process is remarkably successful at producing completely acceptable, thoroughly mediocre software. But it does so at the expense of essential freedoms and their success depends entirely on existing group dynamics.

That's not to say organization isn't a good thing. You need a certain amount of structure in order to reign in the chaos. But agile practices only work when the social context are well-aligned with the particular methodology.

So what I'm saying is that it all comes down to people and team building in order for any of this to work anyway, why even bother with the extra ritual and scare tactics and thought-policing, and rather just focus on individuals and team interactions?

> Chaos Driven Development

I first hear this phrase from my good friend Boaz Sender a few years ago and immediately scoffed. I probably argued a bit with him that he couldn't be serious and it must be terrible, because at the time I was up to my neck trying in vain to run Pivotal style agile on a 20 developer consultancy.

I don't know Boaz made the point that night, but the frankness of his "we just get the work done" approach that he had used to grow a successful and well regarded company. If we're measuring by results, as I like to say

Now I fully embrace it as the most accurate way of describing what works.

<aside>
  <ol>
    <li></li>
    <li id="wicked-problems-footnote02">h/t [@jdn](https://twitter.com/jsdnxx)</li>
  </ol>
</aside>

[wicked-problems]: https://en.wikipedia.org/wiki/Wicked_problem

~~The real world, it turns out, is banal and cold.~~

~~<small class="lh-solid gray">_Disclaimer: A few years ago I worked on a project management product, so I'm relatively jaded and my non-traditional and probably totally wrong™ opinions come from seeing the inside of the sausage factory. All stunts performed by professionals: do not attempt at home._</small>~~

~~The difference between wanting to micromanage code and “fix process” is that the latter is loose and mushy.~~

Is code management really a wicked problem?


But not everyone feels that way.

I’ve worked with folks who weren’t nearly as laid back about all the code that a team can output. My first business partner and early mentor insisted on reading every line of code that our team wrote, and then proceed to be worried as hell about it.

When a business is growing and moving fast, it can often feel like software is the only thing that can be consistently monitored and kept in-check. After all, code is simpler than most business problems: it either works or it doesn’t. If you’re surrounded by uncertainty—wondering when those invoices from last month will be paid, or where the next round of funding will come from—you’ll find yourself clinging to almost any concrete, complete-able task. When you’re making software, it’s easier to read and obsess over every line of code than to deal with the often dire realities of running a business. A lack of information and clarity in an area of weakness triggers a reaction in an area of strength.

These two problems mirror one another. On one hand, the leader of a startup concocts an implausible task: read every line of code obsessively because it’s an area where the problems will _really_ be solved. On the other hand, a team gets stuck the weeds of planning and coordination, because that’s where the problems will _really_ get solved.

Both approaches are tragically flawed, but the patterns are unfortunately all too common.

These are _wicked problems_.

Wicked problems can only be approximately solved. There are no total solutions, owning to a fractal complexity.