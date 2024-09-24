pipeline {
    environment {
        NPM_CONFIG_PREFIX = 'C:\\ProgramData\\npm'
        NPM_CONFIG_CACHE = 'C:\\ProgramData\\npm-cache'
    }
    stages {
        stage('Run Cypress') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}