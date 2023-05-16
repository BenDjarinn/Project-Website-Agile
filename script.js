function script(){
    let inputNama = document.getElementById("inputNama").value.trim()
    let inputEmail = document.getElementById("inputEmail").value.trim()
    let komen = document.getElementById("komen").value.trim()


    if(inputNama == ""){
        alert("Name tidak boleh kosong!")
        return false
    }

    if(inputEmail == ""){
        alert("Email tidak boleh kosong!")
        return false
    }

    if(komen == ""){
        alert("Pesan tidak boleh kosong!")
        return false
    }

    else if(inputEmail.split("@").length !== 2){
        alert("Alamat email tidak valid, formatnya harus: email@address.com")
        return false
    }
    else if(inputEmail.split("@")[0].length === 0){
        alert("Alamat email tidak valid, formatnya harus: email@address.com")
        return false
    }
    else if(inputEmail.split("@")[1].length === 0){
        alert("Alamat email tidak valid, formatnya harus: email@address.com")
        return false
    }

    else if(!inputEmail.split("@")[1].includes(".")){
        alert("Alamat email tidak valid, formatnya harus: email@address.com")
        return false
    }
    else if(inputEmail.split("@")[1][0] === '.'){
        alert("Alamat email tidak valid, formatnya harus: email@address.com")
        return false
    }

alert("Terima kasih telah menghubungi kami, kami akan segera menghubungi Anda!")
return true
}