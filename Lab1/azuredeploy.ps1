$rg = 'lab1'
$loc = "northeurope"
$today = Get-Date -Format "dd-MM-yyyy"
$deploymentName = "Deployment_" + "$today"
$fileName = "azuredeploy"

New-AzResourceGroup -Name $rg -Location $loc -Force

New-AzResourceGroupDeployment `
    -Name "deploy" `
    -ResourceGroupName $rg `
    -TemplateFile "$fileName.json" `
    -TemplateParameterFile "$fileName.parameters.json" 