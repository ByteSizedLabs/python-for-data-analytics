# Get the ID and security principal of the current user account
$myWindowsID=[System.Security.Principal.WindowsIdentity]::GetCurrent()
$myWindowsPrincipal=new-object System.Security.Principal.WindowsPrincipal($myWindowsID)

# Get the security principal for the Administrator role
$adminRole=[System.Security.Principal.WindowsBuiltInRole]::Administrator

# Check to see if we are currently running "as Administrator"
if ($myWindowsPrincipal.IsInRole($adminRole))

   {
   # We are running "as Administrator" - so change the title and background color to indicate this
   $Host.UI.RawUI.WindowTitle = $myInvocation.MyCommand.Definition + "(Elevated)"
   $Host.UI.RawUI.BackgroundColor = "DarkBlue"
   clear-host

   }
else
   {
   # We are not running "as Administrator" - so relaunch as administrator
    $newProcess = New-Object Diagnostics.ProcessStartInfo 'powershell.exe'
    $newProcess.Arguments = '-ExecutionPolicy RemoteSigned -File "' + $script:MyInvocation.MyCommand.Path + '"'
    $newProcess.Verb = 'runas'
    [Diagnostics.Process]::Start($newProcess)

   # Exit from the current, unelevated, process
   exit

   }

function Refresh-Environment {
    
    Write-Host "Refreshing Environment..."
    
    foreach($level in "Machine","User") {
        [Environment]::GetEnvironmentVariables($level)
    }
}

# Install Python and Sublime 

Write-Host "Installing Python and Sublime..."

$script = New-Object Net.WebClient
$script | Get-Member
$script.DownloadString("https://chocolatey.org/install.ps1")
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex

Refresh-Environment

choco install -y python3 --force

Refresh-Environment

choco install -y sublimetext3 --force

Refresh-Environment

Write-Host "Python and Sublime have been succesfully installed. Closing window..."
Start-Sleep -s 6

exit
