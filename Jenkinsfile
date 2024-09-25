pipeline {
    agent any

    environment {
        // Defina a versão do Node.js que será usada
        NODE_VERSION = '18.12.0'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Instalar o Node.js
                    sh """
                        curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -
                        apt-get install -y nodejs
                    """
                }
                
                // Instalar as dependências do projeto (Cypress incluído)
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Executar os testes do Cypress
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Arquivar os relatórios de testes, se houver
            archiveArtifacts artifacts: 'cypress/reports/**'
            
            // Publicar resultados de testes (JUnit)
            junit 'cypress/results/*.xml'
        }
    }
}
