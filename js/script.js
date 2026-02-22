function scrollToProposal(){
document.getElementById("proposal-section").scrollIntoView({behavior:"smooth"});
}

function showProposal(num){

let content = document.getElementById("proposal-content");

if(num === 1){
content.innerHTML = `
<h3>Zoo Visit Plan</h3>
<p>Total Distance: 68 km</p>
<p>Transport: ₹49</p>
<p>Entry: ₹3</p>
<p>Food: ₹95</p>
<h4>Total: ₹147 per student</h4>
`;
}

if(num === 2){
content.innerHTML = `
<h3>Indroda Nature Park</h3>
<p>Transport: ₹18</p>
<p>Entry + Bus: ₹10</p>
<p>Food: ₹105</p>
<h4>Total: ₹133 per student</h4>
<p>Saving: ₹17</p>
`;
}

if(num === 3){
content.innerHTML = `
<h3>Science City</h3>
<p>Transport: ₹25</p>
<p>Entry: ₹20</p>
<p>Aquarium: ₹50</p>
<p>Food: ₹55</p>
<h4>Total: ₹150 per student</h4>
`;
}
}

/* Animated Counter */

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
counter.innerText = '0';
const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target / 200;
if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter, 10);
} else {
counter.innerText = target;
}
};
updateCounter();
});
