pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }

        stage('Clone Repository') {
            steps {
                // Clone repository dari GitHub
                git branch: 'main', url: 'git@github.com:deni4h/sample-app.git'
            }
        }
        stage('Modify Code') {
            steps {
                // Modifikasi file index.html
                sh 'echo "<!-- Updated by Jenkins -->" >> index.html'
            }
        }
        stage('Push Changes') {
            steps {
                // Konfigurasi Git untuk Jenkins
                sh 'git config user.name "deni4h"'
                sh 'git config user.email "denisatria4734@gmail.com"'
                // Tambahkan file yang diubah
                sh 'git add .'
                // Commit perubahan
                sh 'git commit -m "Update index.html via Jenkins" || echo "No changes to commit"'
                // Push perubahan ke GitHub
                sh 'git push origin main'
            }
        }
    }
}
