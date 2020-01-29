pipeline {
  agent any
  triggers {
    pollSCM('H/15 * * * *') // Check repo every 15 mins
  }
  tools {nodejs "node v10"}
  environment {
    CI = 'true'
  }

  stages {
    stage('e2e-tests') {
      steps {
        script {
          if(env.BRANCH_NAME == "jenkins") {
            sh 'docker kill selenium || true'
            sh 'docker rm selenium || true'
            sh 'docker run -d --name selenium -p 4444:4444 selenium/standalone-chrome:latest'
            sh 'npm it'
          }
      else {
        echo 'Not on jenkins branch skipping e2e-tests'
      }
        }
      }
    }
  }
  post {
    success {
      echo 'SUCCESS...'
    }
    failure {
      echo 'FAILED...'
      slackSend color: 'danger', message: ":thinking_face: Failed Build <${BUILD_URL}|#${BUILD_NUMBER}> of ${JOB_NAME} | <${BUILD_URL}/console|Console Output> | <${BUILD_URL}/testReport|Test Result>", tokenCredentialId: ''
    }
    fixed {
      echo 'FIXED...'
      slackSend color: 'good', message: ":relaxed: Fixed Build <${BUILD_URL}|#${BUILD_NUMBER}> of ${JOB_NAME} | <${BUILD_URL}/console|Console Output> | <${BUILD_URL}/testReport|Test Result>", tokenCredentialId: ''
    }
    always {
      junit '.tmp/results*.xml'
    }
  }
}

