function hesapla() {
    konsept = document.getElementById("konsept").value;
    panel = document.getElementById("panel").value;
    tasarim = document.getElementById("tasarim").value;
    kurumsal = 200;
    blog = 300;
    haber = 800;
    eticaret = 500;
    evet = 100;   
    hayir = 300;
    yapilacak = 400;
    örnek = 100;

    /* Kurumsal */
    sonuc1 = kurumsal + evet + yapilacak;
    sonuc2 = kurumsal + hayir + örnek ;
    sonuc3 = kurumsal + evet + örnek;
    sonuc4 = kurumsal + hayir + yapilacak;
    if (konsept == "kurumsal" && panel == "evet" && tasarim == "yapilacak") {
        alert("Tasarımınızın Ücreti : " + sonuc1 + "TL")
        }
        else if (konsept == "kurumsal" && panel == "hayir" && tasarim =="örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc2 + " TL ")
        }
        else if (konsept == "kurumsal" && panel == "evet" && tasarim == "örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc3 + " TL ")
        }
        else if (konsept == "kurumsal" && panel == "hayir" && tasarim =="yapilacak") {
            alert("Tasarımınızın Ücreti :" + sonuc4 + " TL ")
        }
     

     /* Blog */
     sonuc1 = blog + evet + yapilacak;
     sonuc2 = blog + hayir + örnek ;
     sonuc3 = blog + evet + örnek;
     sonuc4 = blog + hayir + yapilacak;
    if (konsept == "blog" && panel == "evet" && tasarim == "yapilacak") {
        alert("Tasarımınızın Ücreti : " + sonuc1 + "TL")
        }
        else if (konsept == "blog" && panel == "hayir" && tasarim =="örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc2 + " TL ")
        }
        else if (konsept == "blog" && panel == "evet" && tasarim == "örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc3 + " TL ")
        }
        else if (konsept == "blog" && panel == "hayir" && tasarim =="yapilacak") {
            alert("Tasarımınızın Ücreti :" + sonuc4 + " TL ")
        }


     /* Haber */
     sonuc1 = haber + evet + yapilacak;
     sonuc2 = haber + hayir + örnek ;
     sonuc3 = haber + evet + örnek;
     sonuc4 = haber + hayir + yapilacak;
    if (konsept == "haber" && panel == "evet" && tasarim == "yapilacak") {
        alert("Tasarımınızın Ücreti : " + sonuc1 + "TL")
        }
        else if (konsept == "haber" && panel == "hayir" && tasarim =="örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc2 + " TL ")
        }
        else if (konsept == "haber" && panel == "evet" && tasarim == "örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc3 + " TL ")
        }
        else if (konsept == "haber" && panel == "hayir" && tasarim =="yapilacak") {
            alert("Tasarımınızın Ücreti :" + sonuc4 + " TL ")
        }


     /* E-Ticaret */
     sonuc1 = eticaret + evet + yapilacak;
     sonuc2 = eticaret + hayir + örnek ;
     sonuc3 = eticaret + evet + örnek;
     sonuc4 = eticaret + hayir + yapilacak;
    if (konsept == "eticaret" && panel == "evet" && tasarim == "yapilacak") {
        alert("Tasarımınızın Ücreti : " + sonuc1 + "TL")
        }
        else if (konsept == "eticaret" && panel == "hayir" && tasarim =="örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc2 + " TL ")
        }
        else if (konsept == "eticaret" && panel == "evet" && tasarim == "örnek") {
            alert("Tasarımınızın Ücreti :" + sonuc3 + " TL ")
        }
        else if (konsept == "eticaret" && panel == "hayir" && tasarim =="yapilacak") {
            alert("Tasarımınızın Ücreti :" + sonuc4 + " TL ")
        }
    }
