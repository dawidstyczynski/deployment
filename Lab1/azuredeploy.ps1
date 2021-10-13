$rg = 'lab1-Exercise-01'
$loc = "northeurope"
$today = Get-Date -Format "dd-MM-yyyy"
$deploymentName = "Main_Deployment"
$fileName = "azuredeploy"

New-AzResourceGroup -Name $rg -Location $loc -Force

New-AzResourceGroupDeployment `
    -Name $deploymentName `
    -ResourceGroupName $rg `
    -TemplateFile "$fileName.json" `
    -TemplateParameterFile "$fileName.parameters.json" 