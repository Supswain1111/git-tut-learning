function saveToLocalStorage(event){
    event.preventDefault();
    const Name=event.target.name.value;
    const EmailID=event.target.email.value;
    const my_obj = {
        Name,
        EmailID
    }

    localStorage.setItem(EmailID, JSON.stringify(my_obj));
}
    