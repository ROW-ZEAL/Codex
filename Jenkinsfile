pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'building the application'
                dir('Codex/frontend') 
                    sh 'npm start' 
                }
            }
        }
        stage("test") {
            steps {
                echo 'testing the application'
            }
        }
        stage("deploy") {
            steps {
                echo 'deploying the application' // Corrected typo
            }
        }
    }
}
