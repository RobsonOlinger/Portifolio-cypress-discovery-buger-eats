pipeline {
  agent any
 
  stages {
    
      stage('e2e Tests') {
          steps {
              sh 'npm run cypress:lambda'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
          }
      }
  }
}