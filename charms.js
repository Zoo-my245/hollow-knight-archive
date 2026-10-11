
/* =========================================
   HALLOWNEST ARCHIVE — CHARM COMPENDIUM
   Complete JavaScript
   =========================================

   Features:
   - 45 charm forms
   - Search all entry details
   - Filter by location and notch cost
   - Previous / Next navigation
   - One open-book spread at a time
   - One blank map page after each charm
   - Every image src intentionally blank
*/

/* =========================================
   1. CHARM DATABASE
   ========================================= */

const charms = [
  {
    name: "Wayward Compass",
    cost: 1,
    area: "Dirtmouth",
    effect: "Displays the Knight's position on the map.",
    prerequisites: "A map of the relevant area.",
    people: "Iselda and Cornifer.",
    location: "Iselda's shop in Dirtmouth.",
    guide: "Locate Cornifer in an area and purchase its map, then return to Dirtmouth. Buy Wayward Compass from Iselda for 220 Geo. Equip it at a Bench when exploring unfamiliar regions."
  },
  {
    name: "Gathering Swarm",
    cost: 1,
    area: "Dirtmouth",
    effect: "A swarm collects loose Geo dropped nearby.",
    prerequisites: "Rescue Sly from the Forgotten Crossroads.",
    people: "Sly.",
    location: "Sly's shop in Dirtmouth.",
    guide: "Find Sly in a concealed room in the Forgotten Crossroads. Speak to him, then visit his shop in Dirtmouth. Purchase Gathering Swarm for 300 Geo. It cannot retrieve Geo from inaccessible hazards."
  },
  {
    name: "Stalwart Shell",
    cost: 2,
    area: "Dirtmouth",
    effect: "Extends the period of invulnerability after taking damage.",
    prerequisites: "Rescue Sly.",
    people: "Sly.",
    location: "Sly's shop in Dirtmouth.",
    guide: "Rescue Sly in the Forgotten Crossroads and visit his shop in Dirtmouth. Purchase Stalwart Shell for 200 Geo."
  },
  {
    name: "Soul Catcher",
    cost: 2,
    area: "Forgotten Crossroads",
    effect: "Increases the SOUL gained from Nail hits.",
    prerequisites: "Access to the Ancestral Mound.",
    people: "Elder Baldur.",
    location: "Ancestral Mound.",
    guide: "Enter the Ancestral Mound in the Forgotten Crossroads. Deal with the Elder Baldur guarding the route, continue through the passage beyond the encounter, and collect Soul Catcher."
  },
  {
    name: "Shaman Stone",
    cost: 3,
    area: "Forgotten Crossroads",
    effect: "Increases spell damage and enlarges certain spell projectiles.",
    prerequisites: "Reach Salubra's hut.",
    people: "Salubra.",
    location: "Salubra's shop in the Forgotten Crossroads.",
    guide: "Find Salubra in the upper-right part of the Forgotten Crossroads. Reach her hut using the available platforms and movement abilities. Purchase Shaman Stone for 220 Geo."
  },
  {
    name: "Soul Eater",
    cost: 4,
    area: "Resting Grounds",
    effect: "Greatly increases SOUL gained from Nail hits.",
    prerequisites: "Desolate Dive or Descending Dark.",
    people: "Soul Master provides Desolate Dive.",
    location: "A concealed chamber in the Resting Grounds.",
    guide: "Obtain Desolate Dive from Soul Master in the City of Tears, or its upgrade Descending Dark. Return to the Resting Grounds and break the suspicious floor leading into the hidden chamber. Explore the chamber to find Soul Eater."
  },
  {
    name: "Dashmaster",
    cost: 2,
    area: "Fungal Wastes",
    effect: "Allows downward dashing and reduces the dash cooldown.",
    prerequisites: "Access to the lower Fungal Wastes.",
    people: "None directly required.",
    location: "Beneath a statue south of Mantis Village.",
    guide: "Explore the lower Fungal Wastes south of Mantis Village. Search around the statue near the Royal Waterways route and investigate the concealed space beneath it."
  },
  {
    name: "Sprintmaster",
    cost: 1,
    area: "Dirtmouth",
    effect: "Increases the Knight's running speed.",
    prerequisites: "Return the Shopkeeper's Key to Sly.",
    people: "Sly.",
    location: "Sly's expanded shop in Dirtmouth.",
    guide: "Find the Shopkeeper's Key in Crystal Peak and return it to Sly. Visit his expanded shop and purchase Sprintmaster for 400 Geo."
  },
  {
    name: "Grubsong",
    cost: 1,
    area: "Forgotten Crossroads",
    effect: "Grants SOUL when the Knight takes damage.",
    prerequisites: "Rescue ten Grubs.",
    people: "Grubfather.",
    location: "Reward from Grubfather.",
    guide: "Free ten Grubs from their glass jars throughout Hallownest. Return to Grubfather's home in the Forgotten Crossroads and speak to him to receive Grubsong."
  },
  {
    name: "Grubberfly's Elegy",
    cost: 3,
    area: "Forgotten Crossroads",
    effect: "Fires a ranged Nail beam while the Knight is at full health.",
    prerequisites: "Rescue all 46 Grubs.",
    people: "Grubfather.",
    location: "Reward from Grubfather.",
    guide: "Find and free all 46 Grubs throughout Hallownest. Check your maps for missed jars. Return to Grubfather after the final rescue to receive Grubberfly's Elegy."
  },
  {
    name: "Fragile Heart",
    cost: 2,
    area: "Fungal Wastes",
    effect: "Adds two Masks. Breaks if the Knight dies while carrying it.",
    prerequisites: "Enough Geo to purchase it.",
    people: "Leg Eater.",
    location: "Leg Eater's shop in the Fungal Wastes.",
    guide: "Find Leg Eater in the lower Fungal Wastes. Purchase Fragile Heart for 350 Geo, or 280 Geo while wearing Defender's Crest. If it breaks on death, return to Leg Eater and pay for repairs."
  },
  {
    name: "Unbreakable Heart",
    cost: 2,
    area: "Dirtmouth",
    effect: "Adds two Masks and never breaks on death.",
    prerequisites: "Fragile Heart and the Grimm Troupe quest.",
    people: "Divine.",
    location: "Divine's tent in Dirtmouth.",
    guide: "Begin the Grimm Troupe quest and obtain Fragile Heart. Give the charm to Divine inside the troupe's tent and pay 12,000 Geo for the unbreakable version. Complete the exchange before banishing the troupe."
  },
  {
    name: "Fragile Greed",
    cost: 2,
    area: "Fungal Wastes",
    effect: "Increases Geo obtained from enemies. Breaks on death.",
    prerequisites: "Enough Geo to purchase it.",
    people: "Leg Eater.",
    location: "Leg Eater's shop in the Fungal Wastes.",
    guide: "Find Leg Eater in the lower Fungal Wastes. Purchase Fragile Greed for 250 Geo, or 200 Geo while wearing Defender's Crest. Return to Leg Eater for repairs if the charm breaks."
  },
  {
    name: "Unbreakable Greed",
    cost: 2,
    area: "Dirtmouth",
    effect: "Increases Geo obtained from enemies and cannot break.",
    prerequisites: "Fragile Greed and the Grimm Troupe quest.",
    people: "Divine.",
    location: "Divine's tent in Dirtmouth.",
    guide: "Own Fragile Greed and speak to Divine during the Grimm Troupe quest. Give her the charm and pay 9,000 Geo. Do not banish the troupe before completing the exchange."
  },
  {
    name: "Fragile Strength",
    cost: 3,
    area: "Fungal Wastes",
    effect: "Increases Nail damage by 50%. Breaks on death.",
    prerequisites: "Enough Geo to purchase it.",
    people: "Leg Eater.",
    location: "Leg Eater's shop in the Fungal Wastes.",
    guide: "Find Leg Eater in the lower Fungal Wastes. Purchase Fragile Strength for 600 Geo, or 480 Geo while wearing Defender's Crest. If it breaks, return to Leg Eater and pay for repairs. Its damage bonus applies to Nail attacks, not spells."
  },
  {
    name: "Unbreakable Strength",
    cost: 3,
    area: "Dirtmouth",
    effect: "Increases Nail damage by 50% and never breaks.",
    prerequisites: "Fragile Strength and the Grimm Troupe quest.",
    people: "Divine.",
    location: "Divine's tent in Dirtmouth.",
    guide: "Own Fragile Strength and speak to Divine during the Grimm Troupe quest. Give her the charm and pay 15,000 Geo. Complete the exchange before banishing the troupe."
  },
  {
    name: "Spell Twister",
    cost: 2,
    area: "City of Tears",
    effect: "Reduces the SOUL cost of casting spells.",
    prerequisites: "Access to the Soul Sanctum.",
    people: "Soul Master is located in the Soul Sanctum.",
    location: "A concealed chamber in the Soul Sanctum.",
    guide: "Enter the Soul Sanctum in the City of Tears. Explore its rooms and upper passages around the Soul Master route. Search for a concealed room containing Spell Twister."
  },
  {
    name: "Steady Body",
    cost: 1,
    area: "Forgotten Crossroads",
    effect: "Removes backward recoil when striking enemies with the Nail.",
    prerequisites: "Reach Salubra.",
    people: "Salubra.",
    location: "Salubra's shop.",
    guide: "Reach Salubra's hut in the Forgotten Crossroads and purchase Steady Body for 120 Geo."
  },
  {
    name: "Heavy Blow",
    cost: 2,
    area: "Dirtmouth",
    effect: "Increases Nail knockback and changes some enemy stagger interactions.",
    prerequisites: "Return the Shopkeeper's Key to Sly.",
    people: "Sly.",
    location: "Sly's expanded shop in Dirtmouth.",
    guide: "Find the Shopkeeper's Key in Crystal Peak and return it to Sly. Purchase Heavy Blow from his expanded shop for 350 Geo."
  },
  {
    name: "Quick Slash",
    cost: 3,
    area: "Kingdom's Edge",
    effect: "Allows the Knight to swing the Nail much faster.",
    prerequisites: "Reach Kingdom's Edge.",
    people: "Oro's hut is a useful landmark.",
    location: "An old, concealed chamber southeast of Oro's hut.",
    guide: "Reach Kingdom's Edge and locate Oro's hut. Explore the passages southeast of the hut and look for breakable walls and a concealed chamber containing Quick Slash."
  },
  {
    name: "Longnail",
    cost: 2,
    area: "Forgotten Crossroads",
    effect: "Increases Nail range.",
    prerequisites: "Reach Salubra.",
    people: "Salubra.",
    location: "Salubra's shop.",
    guide: "Find Salubra in the Forgotten Crossroads and purchase Longnail for 300 Geo."
  },
  {
    name: "Mark of Pride",
    cost: 3,
    area: "Fungal Wastes",
    effect: "Greatly increases Nail range.",
    prerequisites: "Defeat the Mantis Lords to open the relevant route.",
    people: "Mantis Lords.",
    location: "A chest in Mantis Village beyond the Mantis Lords arena.",
    guide: "Reach Mantis Village and challenge the Mantis Lords. After defeating them, explore the area beyond their arena and search the opened village chambers for the chest containing Mark of Pride."
  },
  {
    name: "Fury of the Fallen",
    cost: 2,
    area: "King's Pass",
    effect: "Increases Nail damage when only one Mask remains.",
    prerequisites: "Return to King's Pass and navigate its hazards.",
    people: "None.",
    location: "A concealed cavern in King's Pass.",
    guide: "Return to King's Pass and explore the starting area around the spike pits. Navigate the narrow platforms and hazards to reach the hidden chamber containing Fury of the Fallen."
  },
  {
    name: "Thorns of Agony",
    cost: 1,
    area: "Greenpath",
    effect: "Creates damaging thorns around the Knight after taking damage.",
    prerequisites: "Careful platforming through the thorn maze.",
    people: "None.",
    location: "A thorn-filled maze in Greenpath.",
    guide: "Explore central Greenpath and locate the thorn maze. Follow the safe platforms through the narrow passages, avoid the spikes, and collect Thorns of Agony at the end."
  },
  {
    name: "Baldur Shell",
    cost: 2,
    area: "Howling Cliffs",
    effect: "Creates a protective shell while focusing. The shell can break after absorbing hits.",
    prerequisites: "Access to Howling Cliffs.",
    people: "Elder Baldur enemies are relevant to the area.",
    location: "A concealed chamber in Howling Cliffs.",
    guide: "Reach Howling Cliffs from King's Pass or Greenpath. Explore the lower paths and look for a concealed chamber or chest. Navigate around the Baldur enemies to reach the charm."
  },
  {
    name: "Flukenest",
    cost: 3,
    area: "Royal Waterways",
    effect: "Changes Vengeful Spirit and Shade Soul into a cluster of volatile flukes.",
    prerequisites: "Access to the Royal Waterways.",
    people: "Flukemarm.",
    location: "Reward for defeating Flukemarm.",
    guide: "Enter the Royal Waterways and explore until you find Flukemarm's arena. Defeat the boss and collect Flukenest."
  },
  {
    name: "Defender's Crest",
    cost: 1,
    area: "Royal Waterways",
    effect: "Emits a damaging cloud around the Knight.",
    prerequisites: "Defeat Dung Defender.",
    people: "Dung Defender.",
    location: "Reward for defeating Dung Defender.",
    guide: "Explore the Royal Waterways until you reach Dung Defender's arena. Defeat him to receive Defender's Crest."
  },
  {
    name: "Glowing Womb",
    cost: 2,
    area: "Forgotten Crossroads",
    effect: "Spends SOUL to create hatchlings that attack nearby enemies.",
    prerequisites: "Crystal Heart is needed to cross the relevant long gap.",
    people: "None.",
    location: "A concealed chamber near the eastern Forgotten Crossroads.",
    guide: "Obtain Crystal Heart in Crystal Peak. Return to the Forgotten Crossroads and explore the passages east of the False Knight area. Use the crystal dash across the long gap and search the concealed chamber."
  },
  {
    name: "Quick Focus",
    cost: 3,
    area: "Forgotten Crossroads",
    effect: "Allows healing Focus to complete more quickly.",
    prerequisites: "Reach Salubra.",
    people: "Salubra.",
    location: "Salubra's shop.",
    guide: "Find Salubra in the Forgotten Crossroads and purchase Quick Focus for 800 Geo."
  },
  {
    name: "Deep Focus",
    cost: 4,
    area: "Crystal Peak",
    effect: "Heals two Masks per Focus, but takes longer to complete.",
    prerequisites: "Crystal Heart and careful platforming.",
    people: "None.",
    location: "A concealed crystal chamber in Crystal Peak.",
    guide: "Obtain Crystal Heart and explore the lower and southern Crystal Peak passages. Use crystal dash across long gaps and inspect suspicious walls and hidden openings until you reach Deep Focus."
  },
  {
    name: "Lifeblood Heart",
    cost: 2,
    area: "Forgotten Crossroads",
    effect: "Provides two temporary blue Lifeblood Masks when resting at a Bench.",
    prerequisites: "Reach Salubra.",
    people: "Salubra.",
    location: "Salubra's shop.",
    guide: "Find Salubra in the Forgotten Crossroads and purchase Lifeblood Heart for 250 Geo."
  },
  {
    name: "Lifeblood Core",
    cost: 3,
    area: "The Abyss",
    effect: "Provides four temporary blue Lifeblood Masks when resting at a Bench.",
    prerequisites: "Meet the blue Lifeblood door's mask requirement.",
    people: "None.",
    location: "A hidden chamber behind the blue Lifeblood door in the Abyss.",
    guide: "Reach the Abyss and locate the sealed blue door. Meet its Lifeblood Mask requirement, then enter and explore the chamber to collect Lifeblood Core. The requirement is at least 14 Lifeblood Masks, or 15 with Joni's Blessing equipped."
  },
  {
    name: "Joni's Blessing",
    cost: 4,
    area: "Howling Cliffs",
    effect: "Converts health into blue Lifeblood Masks but prevents healing with Focus.",
    prerequisites: "Access to Howling Cliffs.",
    people: "Joni is associated with the shrine.",
    location: "Joni's Repose.",
    guide: "Explore Howling Cliffs and locate the hidden cave known as Joni's Repose. Follow the chamber to its shrine and collect Joni's Blessing."
  },
  {
    name: "Hiveblood",
    cost: 4,
    area: "The Hive",
    effect: "Regenerates the last lost Mask after a period without taking damage.",
    prerequisites: "Access to the Hive and its boss arena.",
    people: "Hive Knight.",
    location: "A chamber beyond the Hive Knight encounter.",
    guide: "Enter the Hive through Kingdom's Edge and explore its honeycomb passages. Defeat Hive Knight and search the chambers beyond the arena for Hiveblood."
  },
  {
    name: "Spore Shroom",
    cost: 1,
    area: "Fungal Wastes",
    effect: "Releases a damaging spore cloud while focusing.",
    prerequisites: "Access to the western Fungal Wastes.",
    people: "None.",
    location: "A hidden chamber in the western Fungal Wastes.",
    guide: "Explore the western Fungal Wastes around the route toward Queen's Gardens. Search for a concealed opening among the fungal terrain and follow the passage to Spore Shroom."
  },
  {
    name: "Sharp Shadow",
    cost: 2,
    area: "Deepnest",
    effect: "Damages enemies passed through during Shade Cloak dashes and slightly extends the dash.",
    prerequisites: "Shade Cloak.",
    people: "None.",
    location: "A concealed chamber southeast of the Deepnest Hot Spring.",
    guide: "Obtain Shade Cloak in the Abyss. Return to Deepnest and travel southeast from the Hot Spring. Use the shadow dash through the dark barrier to reach Sharp Shadow."
  },
  {
    name: "Shape of Unn",
    cost: 2,
    area: "Greenpath",
    effect: "Allows movement in a slug-like form while focusing, helping dodge attacks.",
    prerequisites: "Isma's Tear for the acid route.",
    people: "Unn is associated with the lake.",
    location: "A chamber beneath the Lake of Unn.",
    guide: "Obtain Isma's Tear in the Royal Waterways so acid no longer blocks the route. Reach the Lake of Unn in Greenpath, explore the chamber beneath it, and collect Shape of Unn."
  },
  {
    name: "Nailmaster's Glory",
    cost: 1,
    area: "Dirtmouth",
    effect: "Reduces the time needed to charge Nail Arts.",
    prerequisites: "Learn all three Nail Arts.",
    people: "Sly and the three Nailmasters.",
    location: "Reward from Sly in Dirtmouth.",
    guide: "Learn Cyclone Slash, Dash Slash and Great Slash from their respective Nailmasters. Return to Sly in Dirtmouth and speak to him to receive Nailmaster's Glory."
  },
  {
    name: "Weaversong",
    cost: 2,
    area: "Deepnest",
    effect: "Summons small weaverlings that follow the Knight and attack enemies.",
    prerequisites: "Reach the Weavers' Den.",
    people: "The Weavers.",
    location: "The Weavers' Den in Deepnest.",
    guide: "Explore Deepnest and locate the Weavers' Den. Navigate the web-filled passages and search the chamber for Weaversong."
  },
  {
    name: "Dream Wielder",
    cost: 1,
    area: "Resting Grounds",
    effect: "Charges the Dream Nail faster and increases SOUL gained from Dream Nail strikes.",
    prerequisites: "Collect 500 Essence.",
    people: "The Seer.",
    location: "Reward from the Seer.",
    guide: "Obtain the Dream Nail in the Resting Grounds. Collect Essence from Whispering Roots, Dream Warriors and Dream Bosses. Return to the Seer after reaching 500 Essence to receive Dream Wielder."
  },
  {
    name: "Dreamshield",
    cost: 3,
    area: "Resting Grounds",
    effect: "Creates a rotating shield that can block certain attacks and damage enemies.",
    prerequisites: "Explore the chamber near the Seer.",
    people: "The Seer is a useful landmark.",
    location: "A chamber south of the Seer's location.",
    guide: "Explore the lower passages around the Seer's area in the Resting Grounds. Follow the route into the chamber containing Dreamshield."
  },
  {
    name: "Grimmchild",
    cost: 2,
    area: "Dirtmouth",
    effect: "Summons Grimmchild, which attacks after the Knight collects flames for the troupe.",
    prerequisites: "Begin the Grimm Troupe ritual.",
    people: "Troupe Master Grimm and Grimmkin enemies.",
    location: "Given by Troupe Master Grimm.",
    guide: "Summon the Grimm Troupe and speak to Troupe Master Grimm to receive Grimmchild. Visit the flame-marked locations and defeat Grimmkin enemies as the ritual advances. Returning to Grimm progresses the quest. The banishment route can replace Grimmchild with Carefree Melody."
  },
  {
    name: "Carefree Melody",
    cost: 3,
    area: "Dirtmouth",
    effect: "Builds a chance to negate damage through repeated hits.",
    prerequisites: "Choose the Grimm Troupe banishment route.",
    people: "Brumm and Nymm.",
    location: "Given by Nymm in Dirtmouth.",
    guide: "Begin the Grimm Troupe quest and follow Brumm's banishment route instead of completing the normal ritual. After the troupe leaves, return to Dirtmouth and speak with Nymm to receive Carefree Melody. It replaces Grimmchild."
  },
  {
    name: "Kingsoul",
    cost: 5,
    area: "Queen's Gardens and White Palace",
    effect: "Slowly generates SOUL and opens the path to the Birthplace when equipped.",
    prerequisites: "Obtain both halves of the charm.",
    people: "The White Lady and the Pale King.",
    location: "One half from the White Lady; the other at the end of the White Palace.",
    guide: "Visit the White Lady in Queen's Gardens to obtain one half. Obtain the King's Brand to open the Abyss, acquire the Awoken Dream Nail, and complete the White Palace to obtain the other half. The two halves combine into Kingsoul. Equip it to open the Birthplace route in the Abyss."
  },
  {
    name: "Void Heart",
    cost: 0,
    area: "The Abyss",
    effect: "Unifies the Void, changes certain endings and cannot be unequipped. Replaces Kingsoul.",
    prerequisites: "Kingsoul and the Awoken Dream Nail.",
    people: "The Knight's past is central to this memory.",
    location: "The Birthplace, deep within the Abyss.",
    guide: "Assemble Kingsoul and equip it. Use the Awoken Dream Nail to enter the hidden Birthplace memory in the Abyss. Follow the memory sequence to its conclusion. Kingsoul transforms permanently into Void Heart."
  }
];

/* =========================================
   2. ELEMENT REFERENCES
   ========================================= */

const entries = document.getElementById("entries");
const search = document.getElementById("search");
const areaFilter = document.getElementById("area-filter");
const costFilter = document.getElementById("cost-filter");
const count = document.getElementById("count");
const previousButton = document.getElementById("previous-entry");
const nextButton = document.getElementById("next-entry");
const resetButton = document.getElementById("reset");

let currentResults = [];
let currentIndex = 0;

/* =========================================
   3. POPULATE LOCATION FILTER
   ========================================= */

const areas = [...new Set(charms.map(charm => charm.area))].sort();

areas.forEach(area => {
  const option = document.createElement("option");
  option.value = area;
  option.textContent = area;
  areaFilter.appendChild(option);
});

/* =========================================
   4. CREATE JOURNAL SECTIONS
   ========================================= */

function makeSection(title, content) {
  const section = document.createElement("section");
  section.className = "field-section";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = content;

  section.append(heading, paragraph);

  return section;
}

/* =========================================
   5. CREATE THE CHARM PAGE
   ========================================= */

function makeCharmPage(charm, number) {
  const page = document.createElement("section");
  page.className = "charm-page";
  page.dataset.charm = charm.name;

  const top = document.createElement("div");
  top.className = "charm-topline";

  const volume = document.createElement("span");
  volume.textContent = "Hallownest Archive";

  const numberLabel = document.createElement("span");
  numberLabel.textContent =
    "Entry " + String(number).padStart(2, "0");

  top.append(volume, numberLabel);

  const article = document.createElement("article");
  article.className = "charm-entry";

  /* Charm heading */

  const heading = document.createElement("div");
  heading.className = "charm-heading";

  const icon = document.createElement("img");
  icon.className = "charm-icon";

  // Intentionally blank: add your own icon path later.
  icon.src = "";
  icon.alt = charm.name + " charm icon";

  const titleBlock = document.createElement("div");
  titleBlock.className = "charm-title-block";

  const title = document.createElement("h2");
  title.className = "charm-title";
  title.textContent = charm.name;

  const cost = document.createElement("span");
  cost.className = "charm-cost";
  cost.textContent =
    charm.cost + (charm.cost === 1 ? " Notch" : " Notches");

  titleBlock.append(title, cost);
  heading.append(icon, titleBlock);

  /* Effect */

  const effect = document.createElement("div");
  effect.className = "charm-effect";

  const effectLabel = document.createElement("strong");
  effectLabel.textContent = "Effect — ";

  effect.append(
    effectLabel,
    document.createTextNode(charm.effect)
  );

  /* Detailed information */

  const prerequisites = makeSection(
    "Prerequisites",
    charm.prerequisites
  );

  const people = makeSection(
    "People and encounters",
    charm.people
  );

  const location = makeSection(
    "Recorded location",
    charm.location
  );

  const guide = makeSection(
    "Field guide · How to find it",
    charm.guide
  );

  /* Location and cost labels */

  const tags = document.createElement("div");
  tags.className = "field-tags";

  const areaTag = document.createElement("span");
  areaTag.className = "tag";
  areaTag.textContent = charm.area;

  const costTag = document.createElement("span");
  costTag.className = "tag";
  costTag.textContent = charm.cost + " notch cost";

  tags.append(areaTag, costTag);

  /* Handwritten note */

  const note = document.createElement("p");
  note.className = "field-note";
  note.textContent =
    "Field note: add your own observations and annotations.";

  article.append(
    heading,
    effect,
    prerequisites,
    people,
    location,
    guide,
    tags,
    note
  );

  /* Page footer */

  const footer = document.createElement("div");
  footer.className = "page-footer";

  const left = document.createElement("span");
  left.textContent = "Charm Compendium";

  const right = document.createElement("span");
  right.textContent = "Journal page " + number;

  footer.append(left, right);

  page.append(top, article, footer);

  return page;
}

/* =========================================
   6. CREATE THE BLANK MAP PAGE
   ========================================= */

function makeMapPage(charm, number) {
  const page = document.createElement("section");
  page.className = "map-page";
  page.dataset.mapFor = charm.name;

  const image = document.createElement("img");

  // Intentionally blank: add your own map image path later.
  image.src = "";
  image.alt = "";

  page.appendChild(image);

  page.setAttribute(
    "aria-label",
    "Blank location map for " + charm.name +
    ", map sheet " + number
  );

  return page;
}

/* =========================================
   7. SEARCH AND FILTERING
   ========================================= */

function render() {
  const query = search.value.trim().toLowerCase();
  const selectedArea = areaFilter.value;
  const selectedCost = costFilter.value;

  currentResults = charms.filter(charm => {
    const searchableText = [
      charm.name,
      charm.effect,
      charm.prerequisites,
      charm.people,
      charm.location,
      charm.guide,
      charm.area,
      String(charm.cost)
    ].join(" ").toLowerCase();

    const matchesSearch =
      !query || searchableText.includes(query);

    const matchesArea =
      !selectedArea || charm.area === selectedArea;

    const matchesCost =
      !selectedCost ||
      String(charm.cost) === selectedCost;

    return matchesSearch && matchesArea && matchesCost;
  });

  currentIndex = 0;

  showCurrentResult();
}

/* =========================================
   8. DISPLAY THE CURRENT BOOK SPREAD
   ========================================= */

function showCurrentResult() {
  entries.replaceChildren();

  if (currentResults.length === 0) {
    const message = document.createElement("p");

    message.textContent =
      "No charms found. Try another search.";

    message.style.padding = "30px";
    message.style.textAlign = "center";

    entries.appendChild(message);

    count.textContent = "0 matching charms";

    updateNavigation();

    return;
  }

  const charm = currentResults[currentIndex];
  const originalNumber = charms.indexOf(charm) + 1;

  /*
    Both pages belong to the same spread:
    LEFT  = charm entry
    RIGHT = blank map page
  */

  const book = document.createElement("div");
  book.className = "book-spread";

  const leftPage = makeCharmPage(charm, originalNumber);
  const rightPage = makeMapPage(charm, originalNumber);

  book.append(leftPage, rightPage);
  entries.appendChild(book);

  count.textContent =
    "Entry " + (currentIndex + 1) +
    " of " + currentResults.length +
    " matching charms";

  updateNavigation();
}

/* =========================================
   9. PREVIOUS / NEXT BUTTONS
   ========================================= */

function updateNavigation() {
  if (!previousButton || !nextButton) {
    return;
  }

  previousButton.disabled =
    currentResults.length === 0 ||
    currentIndex <= 0;

  nextButton.disabled =
    currentResults.length === 0 ||
    currentIndex >= currentResults.length - 1;
}

function goToPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    showCurrentResult();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function goToNext() {
  if (currentIndex < currentResults.length - 1) {
    currentIndex++;
    showCurrentResult();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

/* =========================================
   10. EVENT LISTENERS
   ========================================= */

search.addEventListener("input", render);

areaFilter.addEventListener("change", render);

costFilter.addEventListener("change", render);

if (previousButton) {
  previousButton.addEventListener("click", goToPrevious);
}

if (nextButton) {
  nextButton.addEventListener("click", goToNext);
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    search.value = "";
    areaFilter.value = "";
    costFilter.value = "";

    render();
  });
}

/* =========================================
   11. KEYBOARD NAVIGATION
   ========================================= */

document.addEventListener("keydown", event => {
  const target = event.target;

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLSelectElement ||
    target instanceof HTMLTextAreaElement
  ) {
    return;
  }

  if (event.key === "ArrowLeft") {
    goToPrevious();
  }

  if (event.key === "ArrowRight") {
    goToNext();
  }
});

/* =========================================
   12. START THE COMPENDIUM
   ========================================= */

render();
