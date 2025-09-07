const initialFacts = [
  { id: null, fact: null },
  [
    { id: 1, fact: "Bald eagles mate for life." },

    { id: 2, fact: "Abraham Lincoln was a licensed bartender." },
    {
      id: 3,
      fact: "During his entire lifetime, Vincent Van Gogh is known to have sold only a single painting.",
    },
    { id: 4, fact: "Lobsters have blue blood." },
    {
      id: 5,
      fact: "Napoleon Bonaparte was once attacked by a swarm of rabbits.",
    },
    {
      id: 6,
      fact: "There are more stars in the universe than there are grains of sand on earth.",
    },
    {
      id: 7,
      fact: "The liver is the only human organ that can fully regenerate itself.",
    },
    {
      id: 8,
      fact: "Babies are born with 275 to 300 bones. By the time they're adults, they only have 206 since some bones fuse together as they grow.",
    },
    {
      id: 9,
      fact: "Including its territories, France has 12 time zones, the most of any other country.",
    },
    {
      id: 10,
      fact: "After Steve Carell left “The Office,” James Gandolfini of the “Sopranos” was reportedly offered the role and turned it down.",
    },
    {
      id: 11,
      fact: "It takes roughly 540 peanuts to make a jar of peanut butter.",
    },
    {
      id: 12,
      fact: "Actor Roy Scheider improvised the famous “Jaws” quote, “You’re gonna need a bigger boat.",
    },
    {
      id: 13,
      fact: "In 1971, astronaut Alan Shepard played golf on the moon.",
    },

    { id: 14, fact: "Sir Isaac Newton invented the color wheel in 1666." },

    { id: 15, fact: "The hardest bone in the human body is the femur." },

    { id: 16, fact: "A group of owls is called a parliament." },

    {
      id: 17,
      fact: "The deepest part of the ocean is approximately 35,876 feet down.",
    },

    { id: 18, fact: "A silverback gorilla can lift over 1,763 pounds." },

    {
      id: 19,
      fact: "Winds on Neptune can blow faster than 1,200 miles an hour.",
    },

    { id: 20, fact: "The Caesar salad was invented in 1924." },

    { id: 21, fact: "The sun is about 400 times larger than the moon." },

    { id: 22, fact: "The average person blinks 14 to 17 times per minute." },

    {
      id: 23,
      fact: "90 % of the world’s population lives in the Northern Hemisphere.",
    },

    { id: 24, fact: "Honey doesn't spoil." },

    {
      id: 25,
      fact: "Central Park in New York City is larger than the entire country of Monaco.",
    },

    {
      id: 26,
      fact: "Cuvier’s beaked whales can hold their breath underwater for over two hours.",
    },

    { id: 27, fact: "The average golf ball has 336 dimples." },

    { id: 28, fact: "Over 60% of the world’s lakes are located in Canada." },

    {
      id: 29,
      fact: "The International Space Station orbits Earth approximately every 90 minutes.",
    },

    {
      id: 30,
      fact: "Somewhere between 50% and 80% of earth's living organisms are in the ocean.",
    },

    { id: 31, fact: "Australia is wider than the moon." },

    { id: 32, fact: "Venus is the only planet to spin clockwise." },

    { id: 33, fact: "Allodoxaphobia is the fear of other people’s opinions." },

    {
      id: 34,
      fact: "Human teeth are the only part of the body that cannot heal themselves.",
    },

    { id: 35, fact: "Competitive art used to be an Olympic sport." },

    {
      id: 36,
      fact: "The specks on strawberries are single seeds called achenes.",
    },

    {
      id: 37,
      fact: "The first person processed at Ellis Island was a 15-year-old girl from Ireland.",
    },

    {
      id: 38,
      fact: "Google Images was created after Jennifer Lopez wore the green dress at the 2000 Grammys.",
    },

    { id: 39, fact: "Lemons float in water, but limes sink." },

    { id: 40, fact: "The Eiffel Tower was originally made for Barcelona." },

    {
      id: 41,
      fact: "It would take 19 minutes to fall to the center of the Earth.",
    },

    { id: 42, fact: "The Venus Flytrap is considered a Carnivorous plant." },

    { id: 43, fact: "Neil Armstrong’s hair was sold in 2004 for $3,000." },

    { id: 44, fact: "The longest English word is 189,819 letters long." },

    {
      id: 45,
      fact: "The tiny pocket in jeans was designed to store pocket watches.",
    },

    { id: 46, fact: "People once ate arsenic to improve their skin." },

    {
      id: 47,
      fact: "The largest bowling alley in the world is in Japan and has 116 lanes.",
    },

    { id: 48, fact: "“The Terminator” script was sold for $1." },

    {
      id: 49,
      fact: "A fear of long words is called Hippopotomonstrosesquippedaliophobia.",
    },

    {
      id: 50,
      fact: "The quickest commercial flight in the world is in Scotland.",
    },

    { id: 51, fact: "Penicillin was first called “mold juice.”" },

    {
      id: 52,
      fact: "The first commercial passenger flight lasted only 23 minutes.",
    },

    { id: 53, fact: "No number before 1,000 contains the letter A." },

    {
      id: 54,
      fact: "There were active volcanoes on the moon when dinosaurs were alive.",
    },

    { id: 55, fact: "Sudan has more pyramids than any country in the world." },

    {
      id: 56,
      fact: "The human circulatory system is more than 60,000 miles long.",
    },

    { id: 57, fact: "The Pope can’t be an organ donor." },

    { id: 58, fact: "Tug of war was in the Olympics from 1900 to 1920." },

    { id: 59, fact: "The world’s longest concert lasted 453 hours." },

    { id: 60, fact: "It’s impossible to hum while holding your nose." },

    { id: 61, fact: "Africa is the only continent in all four hemispheres." },

    { id: 62, fact: "All mammals get goosebumps." },

    { id: 63, fact: "Japan has one vending machine for every 40 people." },

    {
      id: 64,
      fact: "Cleopatra was born in Egypt but comes from Macedonian descent.",
    },

    { id: 65, fact: "McDonald’s once made bubblegum-flavored broccoli." },

    { id: 66, fact: "Finland has more saunas than cars." },

    {
      id: 67,
      fact: "The longest time someone has spent holding their breath underwater is 24 minutes and 37 seconds.",
    },

    { id: 68, fact: "Avocados are actually fruits, not vegetables." },

    {
      id: 69,
      fact: "The shortest war in history, the Anglo-Zanzibar war, lasted 38 minutes.",
    },

    { id: 70, fact: "NFL Super Bowl referees also get Super Bowl rings." },

    { id: 71, fact: "It’s illegal to own only one guinea pig in Switzerland." },

    {
      id: 72,
      fact: "Only four countries in the world have national anthems with no lyrics.",
    },

    {
      id: 73,
      fact: "The letter “Q” doesn’t appear in any American state’s name.",
    },

    {
      id: 74,
      fact: "Walt Disney currently holds the most Academy Awards at a lifetime total of 22.",
    },

    {
      id: 75,
      fact: "The Paris Catacombs contain the remains of over six million people.",
    },

    {
      id: 76,
      fact: "The average cloud weighs over one million pounds.",
    },

    {
      id: 77,
      fact: "Wearing a necktie could reduce blood flow to your brain by up to 7.5 percent.",
    },

    { id: 78, fact: "Animals can also be allergic to humans." },

    {
      id: 79,
      fact: "Finland has ranked as the happiest country in the world for 7 years straight.",
    },

    {
      id: 80,
      fact: "Bottlenose dolphins are the only other species to have names for themselves.",
    },

    {
      id: 81,
      fact: "All clown fish are born male and can become female later in life.",
    },

    {
      id: 82,
      fact: "Your brain alone burns around 400 to 500 calories each day.",
    },

    { id: 83, fact: "Approximately 10% of people are left-handed." },

    {
      id: 84,
      fact: "Besides water, tea is the most popular beverage worldwide.",
    },

    { id: 85, fact: "Your heart beats an average of 100,000 times each day." },

    {
      id: 86,
      fact: "The first animals to travel to outer space were fruit flies.",
    },

    {
      id: 87,
      fact: "The longest-named dinosaur is the Micropachycephalosaurus.",
    },

    {
      id: 88,
      fact: "Dolphins can hold their breath underwater for eight to ten minutes.",
    },

    { id: 89, fact: "A baby kangaroo is called a joey." },

    { id: 90, fact: "A group of hyenas is called a cackle." },

    { id: 91, fact: "Like fingerprints, everyone’s tongue print is unique." },

    {
      id: 92,
      fact: "The plastic or metal tip of your shoelace is called an aglet.",
    },

    { id: 93, fact: "Cats sleep an average of 15 hours per day." },

    { id: 94, fact: "A watermelon is 92% water." },

    { id: 95, fact: "Buzz Lightyear’s original name was Lunar Larry." },

    { id: 96, fact: "A chicken once lived for 18 months without its head." },

    { id: 97, fact: "Pineapples can take two to three years to fully grow." },

    { id: 98, fact: "A mile is 5,280 feet long." },

    { id: 99, fact: "Blue is the most favourite colour in the world." },

    { id: 100, fact: "Only male toads make loud croaking sounds." },

    {
      id: 101,
      fact: "Massachusetts is the home of basketball and volleyball.",
    },

    { id: 102, fact: "Bananas glow blue under black lights." },

    {
      id: 103,
      fact: "A woman in the United Kingdom once called the police when her ice cream didn’t have enough sprinkles.",
    },

    { id: 104, fact: "Russia has 11 time zones." },

    {
      id: 105,
      fact: "The American white pelican can hold up to three gallons of water in its mouth.",
    },

    { id: 106, fact: "Japan released sushi-inspired Kit Kats." },

    { id: 107, fact: "Comets smell like rotten eggs." },

    {
      id: 108,
      fact: "The oldest cat ever recorded lived to be 38 years and three days old.",
    },

    { id: 109, fact: "Vatican City is the smallest country in the world." },

    { id: 110, fact: "Bees can fly higher than Mount Everest." },

    { id: 111, fact: "Almonds and peaches are related." },

    { id: 112, fact: "Cap’n Crunch’s full name is Horatio Magellan Crunch." },

    { id: 113, fact: "Giraffe tongues can be 20 inches long." },

    { id: 114, fact: "The Hollywood sign used to say Hollywoodland." },

    {
      id: 115,
      fact: "Peanuts aren’t a type of nut. (They are actually legumes.)",
    },

    { id: 116, fact: "Blue whale tongues can weigh as much as an elephant." },

    { id: 117, fact: "New Zealand has more sheep than humans." },

    { id: 118, fact: "Skin is the body’s largest organ." },

    { id: 119, fact: "President Theodore Roosevelt had a pet hyena." },

    { id: 120, fact: "The national animal of Scotland is a unicorn." },

    { id: 121, fact: "Fingernails grow faster than toenails." },

    { id: 122, fact: "Shrimp’s hearts are located in their heads." },

    { id: 123, fact: "The Amazon River is the biggest river on earth." },

    {
      id: 124,
      fact: "The Burj Khalifa in Dubai is the world’s tallest building.",
    },

    { id: 125, fact: "The largest continent in the world is Asia." },

    { id: 126, fact: "Ants don’t have lungs." },

    { id: 127, fact: "The fastest animal in the world is a cheetah." },

    { id: 128, fact: "There’s a planet made almost entirely of diamonds." },

    { id: 129, fact: "Golf was the first sport played on the moon." },

    {
      id: 130,
      fact: "Rhode Island is the smallest state in the United States.",
    },

    {
      id: 131,
      fact: "The Great Barrier Reef in Australia is the world's largest coral reef.",
    },

    { id: 132, fact: "The largest animal in the world is the blue whale." },

    { id: 133, fact: "Sea otters sleep while holding hands." },

    { id: 134, fact: "Dogs sweat through their paws." },

    {
      id: 135,
      fact: "The surface of the sun is around 10,000 degrees Fahrenheit.",
    },

    {
      id: 136,
      fact: "Approximately one quarter of the bones in your body are in your feet.",
    },

    { id: 137, fact: "Around 80 percent of orange cats are male." },

    { id: 138, fact: "M&M's were the first candy that eaten in space." },

    { id: 139, fact: "Lions can sleep up to 21 hours in a day." },

    {
      id: 140,
      fact: "You could survive a couple of minutes in a leaky spacesuit.",
    },

    {
      id: 141,
      fact: "1 tsp of neutron star weighs the same as the human population.",
    },

    {
      id: 142,
      fact: "Gamma-ray bursts release more energy in 10 seconds than our Sun in its entire life.",
    },

    { id: 143, fact: "A day on Venus is longer than its year." },

    {
      id: 144,
      fact: "Black holes have theoretical opposites known as white holes.",
    },

    { id: 145, fact: "Jupiter’s magnetic field is bigger than the Moon." },

    {
      id: 146,
      fact: "Rainforests cover about 6% of the Earth‘s land surface.",
    },

    {
      id: 147,
      fact: "In Central American rainforests, rival strawberry poison dart frogs might wrestle for up to 20 minutes.",
    },

    {
      id: 148,
      fact: "It can take ten minutes for a falling raindrop to travel from a rainforest’s thick canopy to the floor.",
    },

    {
      id: 149,
      fact: "The Arctic and Antarctic are referred to as polar deserts.",
    },

    {
      id: 150,
      fact: "The Sahara Desert is in northern Africa and extends over 12 nations.",
    },
  ],
];

export { initialFacts };
