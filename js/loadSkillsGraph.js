// loadSkillsGraph.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/pages/skills-graph.html')  // Updated path to the HTML file
        .then(response => response.text())
        .then(data => {
            document.getElementById('skills-graph-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the graph:', error));
});
