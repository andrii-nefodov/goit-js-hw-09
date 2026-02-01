const formData = { 
    email: "",
    message: "",
};

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");



const savedData = localStorage.getItem(STORAGE_KEY);

if(savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", onFormInput);
form.addEventListener("submit", handleSubmit);

function onFormInput(event) {
const name = event.target.name;
const value = event.target.value;

if(name === "email") {
    formData.email = value;
}else if(name === "message") {
    formData.message = value;
}
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};


function handleSubmit(event) {
    event.preventDefault();

    if(formData.email === "" || formData.message === "") {
        alert("Fill please all fields")
        return
    } 
    console.log(formData);
    
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        formData.email = "";
        formData.message = "";
    
};