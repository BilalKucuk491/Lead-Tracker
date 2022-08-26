const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const message = document.getElementById("ul-el");

let myLeads = []
let oldLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  Render(myLeads)
}

inputBtn.addEventListener("click", function () {

  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  Render(myLeads)
})

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  Render(myLeads)
})

function Render(leads) {
  let listItems = ""
  for (let index = 0; index < leads.length; index++) {
    let link = leads[index]
    listItems += `
    <li>
      <a target='_blank' href='${link}'>${link}</a>
    </li>`

  }
  message.innerHTML = listItems
}

const tabs = [{ url: "https://www.linkedin.com/in/bilal-k%C3%BC%C3%A7%C3%BCk-3529391a1/" }]

tabBtn.addEventListener("click",function(){
  

  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    let activeTab=tabs[0]
    let activeTabId=activeTab.id;
  });

  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  Render(myLeads)
})