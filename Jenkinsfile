pipeline {
    agent any
  
  parameters{
    string(name: "SPEC", defaultValue: "cypress/integration/**/**", description "cypress:integration")
    choice(name: "BROWSER", choises: ['chrome','edge','firefox'], description: "usar navegador")

  }
  options{
    ansiColor('xterm')
  }

  stages{
    stage('BUilding'){
        steps{
            echo "Build aplication"
        }
    }
  }
  stages('Testing'){
    steps{
       bat "npm i"
        bat "npx cypress run --browser ${BROWSER} --spec {SPEC}"
    }
  }

  stage('Deploy'){
    steps{
        echo "Deplooy"
    }
  }

  post{
    always{

    }
  }
}