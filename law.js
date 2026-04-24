function initLawPage() {
    var wc = document.getElementById('welcomeCard');
    var pv = document.getElementById('pdfViewerContainer');
    var vw = document.getElementById('viewer');
    console.log('initLawPage called');
    console.log('welcomeCard:', wc ? '✅ found' : '❌ not found');
    if (wc) wc.style.display = 'block';
    if (pv) pv.style.display = 'none';
    if (vw) vw.innerHTML = '<canvas id="pdfCanvas"></canvas>';
}