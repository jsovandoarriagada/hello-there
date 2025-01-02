const classSelect = document.getElementById("class");
const specSelect = document.getElementById("spec");

const specs = {
  warrior: ["Arms", "Fury", "Protection"],
  paladin: ["Holy", "Protection", "Retribution"],
  hunter: ["Beast Mastery", "Marksmanship", "Survival"],
  rogue: ["Assassination", "Combat", "Subtlety"],
  priest: ["Discipline", "Holy", "Shadow"],
  "death-knight": ["Blood", "Frost", "Unholy"],
  shaman: ["Elemental", "Enhancement", "Restoration"],
  mage: ["Arcane", "Fire", "Frost"],
  warlock: ["Affliction", "Demonology", "Destruction"],
  monk: ["Brewmaster", "Mistweaver", "Windwalker"],
  druid: ["Balance", "Feral", "Guardian", "Restoration"],
};

classSelect.addEventListener("change", function () {
  const selectedClass = classSelect.value;
  specSelect.innerHTML = '<option value="">Select a Spec</option>'; // reset the specialization options

  if (selectedClass && specs[selectedClass]) {
    specs[selectedClass].forEach((spec) => {
      const option = document.createElement("option");
      option.value = spec.toLowerCase().replace(/\s+/g, "-");
      option.textContent = spec;
      specSelect.appendChild(option);
    });
  }
});
