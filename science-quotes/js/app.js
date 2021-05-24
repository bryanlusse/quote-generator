//immediate invoked function expression
(function() {
  const quotes = [
            {quote: "Most people would rather be certain they’re miserable than risk being happy.",
            author: "Robert Anthony"},
            {quote: "Careful. We don’t want to learn from this.",
            author: "Bill Watterson, cartoonist, Calvin and Hobbes"},
            {quote: "Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.",
            author: "Bill Watterson, cartoonist, Calvin and Hobbes"},
            {quote: "The greatest challenge to any thinker is stating the problem in a way that will allow a solution",
            author: "Bertrand Russell"},
            {quote: "The time you enjoy wasting is not wasted time.",
            author: "Bertrand Russell"},
            {quote: "My definition of an expert in any field is a person who knows enough about what’s really going on to be scared.",
            author: "PJ Plauger"},
            {quote: "You know that children are growing up when they start asking questions that have answers.",
            author: "John J. Plomp"},
            {quote: "If the facts don’t fit the theory, change the facts.",
            author: "Albert Einstein"},
            {quote: "I went into a McDonald’s yesterday and said, ’I’d like some fries.’ The girl at the counter said, ’Would you like some fries with that?’",
            author: "Jay Leno"},
            {quote: "God runs electromagnetics by wave theory on Monday, Wednesday, and Friday, and the Devil runs them by quantum theory on Tuesday, Thursday, and Saturday.",
            author: "Sir William Bragg"},
            {quote: "There are sadistic scientists who hurry to hunt down errors instead of establishing the truth.",
            author: "Marie Curie"},
            {quote: "A writer is a person for whom writing is more difficult than it is for other people.",
            author: "Thomas Mann"},
            {quote: "We live on an island surrounded by a sea of ignorance. As our island of knowledge grows, so does the shore of our ignorance.",
            author: "John Archibald Wheeler"},
            {quote: "Know how to solve every problem that has ever been solved.",
            author: "Richard Feynman"},
            {quote: "I believe that professional wrestling is clean and everything else in the world is fixed.",
            author: "Frank Deford"},
            {quote: "It is better to deserve honors and not have them than to have them and not to deserve them.",
            author: "Mark Twain"},
            {quote: "The more original a discovery, the more obvious it seems afterwards.",
            author: "Arthur Koestler"},
            {quote: "Any man who afflicts the human race with ideas must be prepared to see them misunderstood.",
            author: "HL Mencken"},
            {quote: "If someone wants a sheep, then that means that he exists.",
            author: "Antoine de Saint-Exupery"},
            {quote: "By the time a man realizes that maybe his father was right, he usually has a son who thinks he’s wrong.",
            author: "Charles Wadsworth"},
            {quote: "We should be taught not to wait for inspiration to start a thing. Action always generates inspiration. Inspiration seldom generates action.",
            author: "Frank Tibolt"},
            {quote: "Ars Conjectandi, (The Art of Conjecturing)",
            author: "Jacobi Bernoulli"},
            {quote: "We do not know what we want and yet we are responsible for what we are - that is the fact.",
            author: "Jean-Paul Sartre"},
            {quote: "There is a great deal of difference between an eager man who wants to read a book and the tired man who wants a book to read.",
            author: "GK Chesterton"},
            {quote: "Anarchism is founded on the observation that since few men are wise enough to rule themselves, even fewer are wise enough to rule others.",
            author: "Edward Abbey"},
            {quote: "If you tell the truth you don’t have to remember anything.",
            author: "Mark Twain"},
            {quote: "Computer games don’t affect kids, I mean if Pac Man affected us as kids, we’d all be running around in darkened rooms, munching pills and listening to repetitive music.",
            author: "Marcus Brigstocke"},
            {quote: "There are no such things as applied sciences, only applications of science.",
            author: "Louis Pasteur"},
            {quote: "If mankind minus one were of one opinion, then mankind is no more justified in silencing the one than the one - if he had the power - would be justified in silencing mankind.",
            author: "John Stuart Mill"},
            {quote: "We are not lost. We’re locationally challenged.",
            author: "John M. Ford"},
            {quote: "Most advances in science come when a person for one reason or another is forced to change fields.",
            author: "Peter Borden"},
            {quote: "The worst thing about Europe is that you can’t go out in the middle of the night and get a Slurpee.",
            author: "Tellis Frank"},
            {quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
            author: "Albert Einstein"}
                ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
