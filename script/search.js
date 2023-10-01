function Search(){
    const ask = document.getElementById("search-input").value
    const courses = [
        "Data Science for Everybody, Everywhere.", 
        "Digital Marketing Fundamentals explained", 
        "Machine Learning and Artificial Intelligence",
        "Financial Planning for a Secure Retirement"
    ]
    console.log("run");
    var output = []
    for(var i=0 ; i<courses.length; i++){
        const data = courses[i].search(ask)
        if(data >=0 ){
            output.push(`topic-${i}`)
        }
    }

    if(output.length > 0){
        document.getElementById("search-tray").style.display = "block"
        for(var i=0 ; i<output.length ; i++){
            document.getElementById(output[i]).style.display = "flex"
        }
    }
    else{
        document.getElementById("search-tray").style.display = "block"
        document.getElementById("topic-null").style.display = "flex"
    }
}
function closeSearch(){
    document.getElementById("search-tray").style.display = "none"
    const ask = document.getElementById("search-input").value = ""
    document.getElementById("topic-null").style.display = "none"
    const output = ["topic-0","topic-1","topic-2","topic-3"]
    for(var i=0 ; i<output.length ; i++){
        document.getElementById(output[i]).style.display = "none"
    }
}