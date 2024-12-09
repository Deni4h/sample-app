pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-deni4h', url: 'https://github.com/deni4h/sample-app.git'
            }
        }
        stage('Make Changes') {
            steps {
                sh '''
                    git add .
                    git commit -m "Automated Deploy via Jenkins"
                '''
            }
        }
        stage('Push to GitHub') {
            steps {
                sh '''
                    git push origin main
                '''
            }
        }
    }
}
