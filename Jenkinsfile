pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                echo 'Building the application'
            }
        }
        stage("test1") {
            steps {
                echo 'Testing the application'
            }
        }
        stage("test2") {
            steps {
                echo 'Testing the application'
            }
        }
        stage("perform addition") {
            steps {
                script {
                    def num1 = 5
                    def num2 =5
                    def sum = num1 + num2
                    echo "The sum of ${num1} and ${num2} is ${sum}"
                }
            }
        }
    }
}
