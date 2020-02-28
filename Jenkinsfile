pipeline {
  agent any
  triggers {
    pollSCM('H/15 * * * *') // Check repo every 15 mins
  }
  tools { nodejs "node v10" }
  environment {
    CI = 'true'
  }

  stages {
    stage('e2e-tests') {
      steps {
        script {
          if (env.BRANCH_NAME == "develop" || env.BRANCH_NAME ==~ /^e2e-tests(.*)$/) {
            sh 'docker kill selenium || true'
            sh 'docker rm selenium || true'
            sh 'docker run -d --name selenium -p 4444:4444 selenium/standalone-chrome:latest'
            sh 'yarn e2e:jenkins'
          } else {
            echo 'Not on develop or branch prefixed e2e-tests, skipping e2e tests'
          }
        }
      }
    }
  }
  post {
    always {
      sh 'sudo chmod 775 -R e2e-tests/_results_/allure-raw'
      allure results: [[path: 'e2e-tests/_results_/allure-raw']]
    }
    success {
      echo 'SUCCESS...'
    }
    unstable {
      echo 'UNSTABLE...'
      slackSend color: 'warning', message: ":disappointed: Unstable Build <${BUILD_URL}|#${BUILD_NUMBER}> of ${JOB_NAME} | <${BUILD_URL}console|Console Output> | <${BUILD_URL}allure|Allure Report>", tokenCredentialId: '0af38156-5907-40c5-887c-da3a7eb5ac16'
    }
    failure {
      echo 'FAILED...'
      slackSend color: 'danger', message: ":rage: Failed Build <${BUILD_URL}|#${BUILD_NUMBER}> of ${JOB_NAME} | <${BUILD_URL}console|Console Output> | <${BUILD_URL}allure|Allure Report>", tokenCredentialId: '0af38156-5907-40c5-887c-da3a7eb5ac16'
    }
    fixed {
      echo 'FIXED...'
      slackSend color: 'good', message: ":relaxed: Fixed Build <${BUILD_URL}|#${BUILD_NUMBER}> of ${JOB_NAME} | <${BUILD_URL}console|Console Output> | <${BUILD_URL}allure|Allure Report>", tokenCredentialId: '0af38156-5907-40c5-887c-da3a7eb5ac16'
    }
  }
}

