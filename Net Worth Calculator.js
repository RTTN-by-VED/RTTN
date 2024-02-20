function calculateNetWorth() {
    var realEstate = parseFloat(document.getElementById('realEstate').value) || 0;
    var checkingAccounts = parseFloat(document.getElementById('checkingAccounts').value) || 0;
    var savingsAccounts = parseFloat(document.getElementById('savingsAccounts').value) || 0;
    var retirementAccounts = parseFloat(document.getElementById('retirementAccounts').value) || 0;
    var cars = parseFloat(document.getElementById('cars').value) || 0;
    var otherAssets = parseFloat(document.getElementById('otherAssets').value) || 0;

    var realEstateLoans = parseFloat(document.getElementById('realEstateLoans').value) || 0;
    var creditCardDebt = parseFloat(document.getElementById('creditCardDebt').value) || 0;
    var personalLoans = parseFloat(document.getElementById('personalLoans').value) || 0;
    var studentLoans = parseFloat(document.getElementById('studentLoans').value) || 0;
    var carLoans = parseFloat(document.getElementById('carLoans').value) || 0;
    var otherLiabilities = parseFloat(document.getElementById('otherLiabilities').value) || 0;

    var assets = realEstate + checkingAccounts + savingsAccounts + retirementAccounts + cars + otherAssets;
    var liabilities = realEstateLoans + creditCardDebt + personalLoans + studentLoans + carLoans + otherLiabilities;
    
    document.getElementById('totalAssets').textContent = assets.toFixed(2); // Display total assets
    document.getElementById('totalLiabilities').textContent = liabilities.toFixed(2); // Display total liabilities
    
    var netWorth = assets - liabilities;
    var formattedNetWorth = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netWorth);
    document.getElementById('result').innerHTML = "<h3>Net Worth: " + formattedNetWorth + "</h3>";
}
