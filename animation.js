const asciiFrames = [
    "     *\n    / | \\\n   /  |  \\\n    \\  |  /\n     \\ | /\n      *",
    "       *\n    \\  |  /\n     \\ | /\n      *\n    / | \\\n   /  |  \\",
    "      *\n   / | \\\n   / |  \\\n    \\ | /\n     *\n    \\  |  /",
    "    *\n   \\ |  /\n    \\| /\n     *\n    / | \\\n   /  |  \\"
];

let index = 0;
const asciiTextElement = document.getElementById('asciiText');

function updateAscii() {
    asciiTextElement.textContent = asciiFrames[index];
    index = (index + 1) % asciiFrames.length;
}

setInterval(updateAscii, 1000); // Aktualisiert alle 1 Sekunde