const journalInfo = {
  hunter: {
    title: "Hunter's Journal",
    copy: "Enemy entries, boss notes, attack patterns and defeat tracking will live here."
  },

  cartographer: {
    title: "Cartographer's Notes",
    copy: "Hallownest maps, areas, benches, stag stations and secrets will live here."
  },

  charms: {
    title: "Charm Compendium",
    copy: "Charm entries, effects, notches and collection tracking will live here."
  },

  traveller: {
    title: "Traveller's Log",
    copy: "The largest journal: grubs, abilities, spells, upgrades, collectibles, NPCs and more."
  }
};

const notice = document.querySelector("#journal-notice");
const noticeTitle = document.querySelector("#notice-title");
const noticeCopy = document.querySelector("#notice-copy");

document.querySelectorAll(".journal").forEach((journal) => {
  journal.addEventListener("click", () => {
    const entry = journalInfo[journal.dataset.journal];

    if (!entry) return;

    noticeTitle.textContent = entry.title;
    noticeCopy.textContent = entry.copy;
    notice.showModal();
  });
});

document.querySelector(".notice-close").addEventListener("click", () => {
  notice.close();
});

notice.addEventListener("click", (event) => {
  if (event.target === notice) {
    notice.close();
  }
});
