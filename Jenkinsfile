pipeline {
    agent any

   

    stages {
        

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Executa os testes do Cypress
                    sh 'npm run test'
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
