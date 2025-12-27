$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

function Get-UnlockedImage([string]$fullPath) {
  $fs = [System.IO.FileStream]::new(
    $fullPath,
    [System.IO.FileMode]::Open,
    [System.IO.FileAccess]::Read,
    [System.IO.FileShare]::ReadWrite
  )

  try {
    $img = [System.Drawing.Image]::FromStream($fs)
    try {
      return [System.Drawing.Bitmap]::new($img)
    }
    finally {
      $img.Dispose()
    }
  }
  finally {
    $fs.Dispose()
  }
}

function Flatten-PngOnBlack([string]$relativePath) {
  $fullPath = Join-Path $PWD $relativePath
  Write-Host "Flattening $relativePath" -ForegroundColor Cyan

  $src = Get-UnlockedImage $fullPath
  try {
    $bmp = New-Object System.Drawing.Bitmap $src.Width, $src.Height, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    try {
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      try {
        $g.Clear([System.Drawing.Color]::Black)
        $g.DrawImage($src, 0, 0, $src.Width, $src.Height)
      }
      finally {
        $g.Dispose()
      }

      $tmp = "$fullPath.tmp.png"
      $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
      Copy-Item -Force $tmp $fullPath
      Remove-Item -Force $tmp
    }
    finally {
      $bmp.Dispose()
    }
  }
  finally {
    $src.Dispose()
  }
}

Flatten-PngOnBlack "public\\android-chrome-192x192.png"
Flatten-PngOnBlack "public\\android-chrome-512x512.png"
Flatten-PngOnBlack "public\\apple-touch-icon.png"

Get-Item public\\android-chrome-192x192.png, public\\android-chrome-512x512.png, public\\apple-touch-icon.png |
  Select-Object Name, Length, LastWriteTime |
  Format-Table -AutoSize
