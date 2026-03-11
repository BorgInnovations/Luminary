async function insertLFile() {
    const DB_NAME    = "luminaryIDE";
    const DB_VERSION = 1;
    const STORE_NAME = "editorStore";
    const SAVE_KEY   = "file";

    try {
        const db = await new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };
            request.onsuccess = (event) => resolve(event.target.result);
            request.onerror   = (event) => reject(event.target.error);
        });

        const saved = await new Promise((resolve, reject) => {
            const tx      = db.transaction(STORE_NAME, "readonly");
            const store   = tx.objectStore(STORE_NAME);
            const request = store.get(SAVE_KEY);
            request.onsuccess = (event) => resolve(event.target.result || "");
            request.onerror   = (event) => reject(event.target.error);
        });

        document.getElementById("ide-body").innerHTML = saved;
        console.log("insertLFile: content loaded into #ide-body.");

    } catch (err) {
        console.error("insertLFile failed:", err);
    }
}