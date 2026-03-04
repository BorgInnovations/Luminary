async function synapse_check() {
    document.getElementById("synapse_output").style.display = 'block';
    const url = document.getElementById("index_var").value;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log(response);
        const is_ok = '<p>Ok?: ' + response.ok + '</p>'
        const is_status = '<p>Status?: ' + response.status + '</p>'
        const is_indexable = '<p>Indexable?: ' + response.ok + '</p>'
        const is_statustext = '<p>Status text: ' + response.statusText + '</p>'
        const output_head = '<p style="padding-top: 10px">Synapse Resource Indexability Check:</p>'
        document.getElementById("synapse_output").innerHTML = output_head + is_ok + is_status + is_indexable + is_statustext;
    } catch (error) {
        console.error(error.message);
        document.getElementById("synapse_output").innerHTML = error.message
    }
}



function synapse_build() {
    document.getElementById("synapse_output").style.display = 'block';
    d = new Date()
    s_id = d.getTime()

    s_title = document.getElementById("synapse_title").value
    s_url = document.getElementById("synapse_url").value
    s_author = document.getElementById("synapse_author").value
    s_content = document.getElementById("synapse_content").value
    s_ai = document.getElementById("synapse_score").value

    s_result = '<p style="padding-top:15px">{ id: ' + s_id + ', title: "' + s_title + '", content: "' + s_content + ' ' + s_author + '", author: "' + s_author + '", ai_score: "' + s_ai + '", url: "' + s_url + '"}, </p>'

    document.getElementById("synapse_output").innerHTML = s_result

    document.getElementById("synapse_options").style.display = 'block';

    
}

function synapse_clear(){
    document.getElementById("synapse_title").value = ''
    document.getElementById("synapse_url").value = ''
    document.getElementById("synapse_author").value = ''
    document.getElementById("synapse_content").value = ''
    document.getElementById("synapse_score").value = ''
}

function synapse_open(){
    window.open(document.getElementById("synapse_url").value)
}

function synapse_preview(){

    document.getElementById("synapse_preview").src = document.getElementById("synapse_url").value
}


  function synapse_copy() {


    const text = document.getElementById('synapse_output').innerText
    navigator.clipboard.writeText(text);

}

const synapse_download = () => {
    const link = document.createElement("a");
    const content = document.getElementById("synapse_output").innerHTML;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = document.getElementById("synapse_title").value+"_synapse.txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };