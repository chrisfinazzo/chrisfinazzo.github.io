task default: [:server]

task :github do
    sh 'git push origin master'
end

task :server do
    sh 'python3 -m http.server 8000'
end

task :styles do
    sh 'sass --sourcemap=none --watch scss:css'
end
