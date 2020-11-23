'use strict'
const numChildren = [1,2,3,4,5];
const partnerNames = ['Margot Robbi','Charlize theorn','Emilia clarck','Scarlet johansen','Monica bolutchi'];
const locations = ['Amsterdam','Rotterdam','Utrecht','Enschede','NewYork'];
const jobs = ['Front-End developer','Back-End developer','Full-stack developer','JAVA developer','PHP developer'];

function tellFortune(numChildren, partnerNames, locations, jobs){
    let randomChild = numChildren[Math.floor(Math.random()*numChildren.length)]; 
    let randomPartner = partnerNames[Math.floor(Math.random()*partnerNames.length)];
    let randomLocation = locations[Math.floor(Math.random()*locations.length)];
    let randomJob = jobs[Math.floor(Math.random()*jobs.length)];
    return `You will be a ${randomJob} in ${randomLocation}, marrid to ${randomPartner} with ${randomChild} kids.`
}
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);

// console.log(tellFortune(numChildren, partnerNames, locations, jobs));
// console.log(tellFortune(numChildren, partnerNames, locations, jobs));
// console.log(tellFortune(numChildren, partnerNames, locations, jobs));