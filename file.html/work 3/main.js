function saveToLocalStorage(event){
    event.preventDefault();
    const Name=event.target.name.value;
    const EmailID=event.target.email.value;

    localStorage.setItem('name',Name);
    localStorage.setItem('email',EmailID);
}