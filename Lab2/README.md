- script: |
    cd $(System.DefaultWorkingDirectory)/Lab2
    npm install
    npm run build
  displayName: 'npm install and build'