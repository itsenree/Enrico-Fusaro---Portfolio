// Container auswählen, in dem die Partikel erscheinen sollen.
const particleField = document.querySelector(".particles");

// Farbnamen entsprechen den CSS-Selektoren [data-color="..."].
const particleColors = ["pink", "cyan", "yellow", "purple", "violet"];

// Anzahl der Partikel, die beim Laden der Seite erzeugt werden.
const particleCount = 28;

// Nur weitermachen, wenn der Partikel-Container im HTML vorhanden ist.
if (particleField) {
  // Für jedes Partikel ein eigenes span-Element erzeugen.
  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");

    // Zufällige Größe und Geschwindigkeit für natürliche Variation.
    const size = Math.random() * 0.4 + 0.1;
    const duration = Math.random() * 10 + 12;

    // Grundklasse für das gemeinsame Partikel-Layout setzen.
    particle.className = "particle";

    // Farben zyklisch aus der verfügbaren Farbpalette auswählen.
    particle.dataset.color = particleColors[index % particleColors.length];

    // CSS Custom Properties mit zufälligen Werten befüllen.
    // CSS verwendet diese Werte für Position, Größe, Dauer, Startzeit und Transparenz.
    particle.style.setProperty("--x", `${Math.random() * 100}%`);
    particle.style.setProperty("--size", `${size}rem`);
    particle.style.setProperty("--duration", `${duration}s`);
    particle.style.setProperty("--delay", `${-Math.random() * duration}s`);
    particle.style.setProperty("--opacity", `${Math.random() * 0.6 + 0.2}`);
    particle.dataset.depth = `${Math.random() * 0.7 + 0.3}`;

    // Das fertige Partikel an den Container anhängen.
    particleField.append(particle);
  }

  // Bewegt die Partikel leicht mit der Maus für einen dezenten Parallax-Effekt.
  window.addEventListener("pointermove", (event) => {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 24;

    particleField.querySelectorAll(".particle").forEach((particle) => {
      const depth = Number(particle.dataset.depth);
      particle.style.setProperty("--parallax-x", `${offsetX * depth}px`);
    });
  });
}
