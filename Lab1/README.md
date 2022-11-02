In to run the powershell script  you need to set the execution policy to remoteSigned:
    Set-ExecutionPolicy RemoteSigned
Furthermore the AZ module is required therefore run this command in PowerShell:
    Install-Module -Name Az -AllowClobber
Then you need to login into your Account:
    Connect-AzAccount