function typeWriter(elementId, text, speed) {
    return new Promise((resolve) => {  // Ein Promise wird zurückgegeben
        const element = document.getElementById(elementId);
        if (!element) return;

        let i = 0;
        const intervalId = setInterval(() => {
            element.innerHTML += text.charAt(i);
            i++;
            if (i === text.length) {
                clearInterval(intervalId);
                resolve();  // Resolve wird aufgerufen, wenn der Text fertig ist
            }
        }, speed);
    });
}







async function startTyping() {
    await typeWriter('intro', 'Ich bin Rene Marchner', 50);
    
}

startTyping();
