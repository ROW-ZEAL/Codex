pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo 'Building the application'
                sh 'npm install' // Or any other build command you use
            }
        }
        stage("Test") {
            steps {
                echo 'Testing the application'
                sh 'npm test' // Or any other test command you use
            }
        }
        stage("Deploy") {
            steps {
                echo 'Deploying the application'
                // Add your deployment commands here
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Pipeline succeeded'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
