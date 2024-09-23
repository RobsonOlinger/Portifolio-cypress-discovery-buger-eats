pipeline {
    agent any
  
  parameters{
    string(name: "SPEC", defaultValue: "cypress/integration/**/**", description "cypress:integration")
    choice(name: "BROWSER", choises: ['chrome','edge','firefox'], description: "usar navegador")

  }
  options{

  }

  stages{
    stage('Build'){
        steps{
            echo "Build aplication"
        }
    }
  }
  stages('Testing'){
    steps{
       
        bat "npx cypress run"
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