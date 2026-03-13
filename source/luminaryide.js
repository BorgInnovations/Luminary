/*

document.getElementById("textEditor").value =
   localStorage["file"] || ""; // default text

   
   setInterval(function () { 
    localStorage["file"] = document.getElementById("textEditor").value + ' ';
    console.log(document.getElementById("textEditor").value)

   }, 1000);

   */

   const DB_NAME    = "luminaryIDE";
   const DB_VERSION = 1;
   const STORE_NAME = "editorStore";
   const SAVE_KEY   = "file";
   const SAVE_DELAY = 1000; // ms between saves
   
   // Opens (or creates) the database
   function openDB() {
     return new Promise((resolve, reject) => {
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
   }
   
   // Saves a value to the store by key
   async function idbSet(key, value) {
     try {
       const db = await openDB();
       return new Promise((resolve, reject) => {
         const tx      = db.transaction(STORE_NAME, "readwrite");
         const store   = tx.objectStore(STORE_NAME);
         const request = store.put(value, key);
   
         request.onsuccess = () => resolve();
         request.onerror   = (event) => reject(event.target.error);
       });
     } catch (err) {
       console.error("idbSet failed:", err);
     }
   }
   
   // Retrieves a value from the store by key
   async function idbGet(key) {
     try {
       const db = await openDB();
       return new Promise((resolve, reject) => {
         const tx      = db.transaction(STORE_NAME, "readonly");
         const store   = tx.objectStore(STORE_NAME);
         const request = store.get(key);
   
         request.onsuccess = (event) => resolve(event.target.result || "");
         request.onerror   = (event) => reject(event.target.error);
       });
     } catch (err) {
       console.error("idbGet failed:", err);
       return "";
     }
   }
   
   // AUTO-LOAD — call this via <body onload="loadEditor()">
   async function loadEditor() {
     const saved = await idbGet(SAVE_KEY);
     document.getElementById("textEditor").value = saved;
     console.log("Editor content loaded.");
   }
   
   // AUTO-SAVE — starts a 1s interval that saves editor content
   function startAutoSave() {
     setInterval(async () => {
       const content = document.getElementById("textEditor").value;
       await idbSet(SAVE_KEY, content);
       console.log("Auto-saved:", content);
     }, SAVE_DELAY);
   }
   
   // Kick off auto-save immediately when script loads
   startAutoSave();
   
      //End

     // Clears all entries from the store
function idbClear() {
  document.getElementById("textEditor").value =''
  document.getElementById("lFile").src = './lfile.html'
}

//end
   
   function saveFile() {
       var blob = new Blob([document.getElementById("textEditor").value],
          { type: "text/plain;charset=utf-8" });
       saveAs(blob, "luminaryDocument.html");
    }
   
   
   let abus = 'color: var(--mercury); background-color: var(--luminary); border-style: solid; border-color: var(--mercury); border-width: 1px; padding: 5px; opacity: 0.5;'
   
   
   
   function defaultMenu(){
       document.getElementById("ide-menu-item-1").style = abus
       document.getElementById("ide-menu-item-2").style = abus
       document.getElementById("ide-menu-item-3").style = abus
   }
   
   const node = document.createElement("div");
   
   function insertBody(){
       var editorContent = document.getElementById("textEditor").value
       document.getElementById("ide-body").innerHTML = editorContent
       
   }
   
   function updateBody(){
       var bodyContent = document.getElementById("ide-body").innerHTML
       document.getElementById("textEditor").value = bodyContent

   }

   function updateLFile(){
    document.getElementById("lFile").src = './lfile.html'
   }
   
   function copyCode() {


    const text = document.getElementById('textEditor').value
    navigator.clipboard.writeText(text);

}

   function versionID(){
     cv = 'Alpha 1.3.3'
     document.getElementById("versionID").innerHTML = cv
   }

   /*
===
Change log: Alpha 1.3.3 and on
===

Alpha 1.3.3
   *Updated Luminary "File" menu
   *Corrected Snippets bugs
   *CSS updates
   *Python script bug to resolve JSON errors

===
End of line
===
   */