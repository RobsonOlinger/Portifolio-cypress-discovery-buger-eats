pipeline {
    agent any

    tools {
        nodejs "NodeJS 14" // Nome que você deu para a instalação do NodeJS
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Instala as dependências do projeto
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Executa os testes do Cypress
                    sh 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            // Relatórios e logs dos testes podem ser capturados aqui
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/videos/**/*.*', allowEmptyArchive: true
        }
        failure {
            // Você pode configurar notificações aqui em caso de falha
            echo 'Os testes falharam!'
        }
    }
}
