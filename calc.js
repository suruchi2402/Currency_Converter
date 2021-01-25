var strl, dols, eur, cad, aud;

function converter()
{
    strl = document.getElementById("pound");
    dols = document.getElementById("dollerU");
    eur = document.getElementById("EURO");
    cad = document.getElementById("dollerC");
    aud = document.getElementById("dollerA");
}

function poundCon(){
    dols.value = parseFloat(strl.value) * 0.49246;
    eur.value = parseFloat(strl.value) * 0.69714;
    cad.value = parseFloat(strl.value) * 0.50221;
    aud.value = parseFloat(strl.value) * 0.43497;
}

function euroCon()
{
    strl.value = parseFloat(eur.value) * 1.43448;
    dols.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    aud.value = parseFloat(eur.value) * 0.62382;
}

function cadCon()
{
    strl.value = parseFloat(cad.value) * 1.99169;
    dols.value = parseFloat(cad.value) * 0.98054;
    eur.value = parseFloat(cad.value) * 1.38814;
    aud.value = parseFloat(cad.value) * 0.86613;
}

function audCon()
{
    strl.value = parseFloat(aud.value) * 2.29964;
    dols.value = parseFloat(aud.value) * 1.13262;
    eur.value = parseFloat(aud.value) * 1.60329;
    cad.value = parseFloat(aud.value) * 0.88297;    
}

function dollerCon()
{
    strl.value = parseFloat(dols.value) * 2.03032;
    eur.value = parseFloat(dols.value) * 1.41544;
    cad.value = parseFloat(dols.value) * 1.01941;
    aud.value = parseFloat(dols.value) * 0.88297;
}

converter();